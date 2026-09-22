import {
  Injectable,
  NotFoundException,
  ConflictException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../../infra/prisma/prisma.service.js';
import { LoggerService } from '../../infra/logger/logger.service.js';
import { HashingService } from '../../shared/hashing/hashing.service.js';
import { MediaService } from '../../infra/media/media.service.js';
import { CloudinaryService } from '../../infra/cloudinary/cloudinary.service.js';
import { RedisService } from '../../infra/redis/redis.service.js';
import {
  MediaKind,
  UserRole,
  Prisma,
  PhotoStatus,
} from '../../../generated/prisma/client.js';
import { TenantContext } from '../tenant/tenant-select.js';
import { ConfigService } from '@nestjs/config';
import { InjectQueue } from '@nestjs/bullmq';
import { Queue } from 'bullmq';
import {
  MEDIA_UPLOAD_QUEUE,
  MediaUploadJobData,
} from '../../infra/queue/media-upload.job.js'; 
import { CreateNasabahDto } from './dto/create-nasabah.dto.js';
import { UpdateNasabahDto } from './dto/update-nasabah.dto.js';
import type { UploadedPhoto } from '../../shared/utils/multer-photo.utils.js';
import {
  nasabahDetailSelect,
  usernameTakenSelect,
} from './nasabah-select.js';

export type NasabahResponse = {
  id: string;
  namaNasabah: string;
  alamat: string | null;
  telp: string;
  saldoPoin: number;
  foto: string | null;
  photoStatus: PhotoStatus;
  tanggalLahir: string | null;
  user: { username: string; role: string };
};

type NasabahWithUser = Prisma.NasabahGetPayload<{
  select: typeof nasabahDetailSelect;
}>;

function toResponse(n: NasabahWithUser): NasabahResponse {
  return {
    id: n.id,
    namaNasabah: n.namaNasabah,
    alamat: n.alamat,
    telp: n.telp,
    saldoPoin: Number(n.saldoPoin),
    foto: n.foto,
    photoStatus: n.photoStatus,
    tanggalLahir: n.tanggalLahir ? n.tanggalLahir.toISOString() : null,
    user: { username: n.user.username, role: n.user.role },
  };
}

@Injectable()
export class NasabahService {
  private readonly context = NasabahService.name;

  constructor(
    private readonly prisma: PrismaService,
    private readonly hashing: HashingService,
    private readonly media: MediaService,
    private readonly cloudinary: CloudinaryService,
    private readonly logger: LoggerService,
    private readonly redis: RedisService,
    private readonly config: ConfigService,
    @InjectQueue(MEDIA_UPLOAD_QUEUE)
    private readonly photoQueue: Queue<MediaUploadJobData>,
  ) {}

  private photosAsync(): boolean {
    return this.config.get<boolean>('PHOTO_ASYNC') ?? true;
  }

  private async enqueueUpload(
    tenantId: string,
    ownerId: string,
    file: UploadedPhoto,
    deletedBy?: string,
  ): Promise<void> {
    await this.photoQueue.add('upload', {
      tenantId,
      kind: MediaKind.nasabah_foto,
      ownerId,
      fileBase64: file.buffer.toString('base64'),
      mime: file.mimetype,
      sizeBytes: file.size,
      folder: this.mediaFolder(tenantId),
      deletedBy,
    });
    this.logger.debug(`enqueued photo upload owner=${ownerId}`, {
      context: this.context,
      tenantId,
    });
  }

  private async bustReports(tenantId: string): Promise<void> {
    await this.redis.delByPrefix(RedisService.reportsPrefix(tenantId));
  }

  private mediaFolder(tenantId: string): string {
    return `bank-sampah/${tenantId}/nasabah`;
  }

  async create(
    tenant: TenantContext,
    dto: CreateNasabahDto,
    file?: UploadedPhoto,
  ): Promise<NasabahResponse> {
    this.logger.debug(`create start username=${dto.username}`, {
      context: this.context,
      tenantId: tenant.id,
    });

    const existing = await this.prisma.user.findFirst({
      where: { username: dto.username, tenantId: tenant.id },
      select: usernameTakenSelect,
    });
    if (existing) {
      throw new ConflictException(
        `Username "${dto.username}" is already used in your application database.`,
      );
    }

    const hashedPassword = await this.hashing.hash(dto.password);
    const asyncPhotos = file ? this.photosAsync() : false;
    const asset =
      file && !asyncPhotos
        ? await this.cloudinary.upload(file.buffer, this.mediaFolder(tenant.id))
        : null;

    try {
      const created = await this.prisma.$transaction(async (tx) => {
        const user = await tx.user.create({
          data: {
            username: dto.username,
            password: hashedPassword,
            role: UserRole.nasabah,
            tenantId: tenant.id,
            nasabah: {
              create: {
                namaNasabah: dto.namaNasabah,
                alamat: dto.alamat,
                telp: dto.telp,
                saldoPoin: 0,
                foto: asset?.url ?? null,
                photoStatus:
                  file && asyncPhotos
                    ? PhotoStatus.processing
                    : PhotoStatus.ready,
              },
            },
          },
          include: { nasabah: true },
        });
        const nasabahId = user.nasabah?.id;
        if (!nasabahId) {
          throw new BadRequestException('Failed to create customer data.');
        }
        if (asset) {
          await this.media.createPhoto(tx, {
            tenantId: tenant.id,
            kind: MediaKind.nasabah_foto,
            ownerId: nasabahId,
            asset: {
              url: asset.url,
              publicId: asset.publicId,
              mime: file?.mimetype,
              sizeBytes: file?.size,
            },
          });
        }
        return nasabahId;
      });
      const full = (await this.prisma.nasabah.findUniqueOrThrow({
        where: { id: created },
        select: nasabahDetailSelect,
      })) as NasabahWithUser;
      this.logger.log(`create completed username=${dto.username}`, {
        context: this.context,
        tenantId: tenant.id,
      });
      if (file && asyncPhotos) {
        await this.enqueueUpload(tenant.id, created, file);
      }
      await this.bustReports(tenant.id);
      return toResponse(full);
    } catch (error) {
      if (asset) {
        await this.compensateUpload(asset.publicId, 'create');
      }
      throw error;
    }
  }

  async findAll(tenant: TenantContext): Promise<NasabahResponse[]> {
    this.logger.debug('findAll start', {
      context: this.context,
      tenantId: tenant.id,
    });
    const rows = (await this.prisma.nasabah.findMany({
      where: { tenantId: tenant.id, deletedAt: null },
      orderBy: { namaNasabah: 'asc' },
      select: nasabahDetailSelect,
    })) as NasabahWithUser[];
    return rows.map(toResponse);
  }

  async findOne(tenant: TenantContext, id: string): Promise<NasabahResponse> {
    const row = (await this.prisma.nasabah.findFirst({
      where: { id, tenantId: tenant.id, deletedAt: null },
      select: nasabahDetailSelect,
    })) as NasabahWithUser | null;
    if (!row) {
      throw new NotFoundException('Customer not found.');
    }
    return toResponse(row);
  }

  async update(
    tenant: TenantContext,
    id: string,
    dto: UpdateNasabahDto,
    file?: UploadedPhoto,
    userId?: string,
  ): Promise<NasabahResponse> {
    this.logger.debug(`update start id=${id}`, {
      context: this.context,
      tenantId: tenant.id,
    });

    const current = await this.prisma.nasabah.findFirst({
      where: { id, tenantId: tenant.id, deletedAt: null },
      select: nasabahDetailSelect,
    });
    if (!current) {
      throw new NotFoundException('Customer not found.');
    }

    const asyncPhotos = file ? this.photosAsync() : false;
    const asset =
      file && !asyncPhotos
        ? await this.cloudinary.upload(file.buffer, this.mediaFolder(tenant.id))
        : null;

    try {
      const updated = await this.prisma.$transaction(async (tx) => {
        if (asset) {
          await this.media.replacePhoto(tx, this.cloudinary, {
            tenantId: tenant.id,
            kind: MediaKind.nasabah_foto,
            ownerId: id,
            asset: {
              url: asset.url,
              publicId: asset.publicId,
              mime: file?.mimetype,
              sizeBytes: file?.size,
            },
            deletedBy: userId,
          });
        }
        const row = await tx.nasabah.update({
          where: { id },
          data: {
            namaNasabah: dto.namaLengkap ?? current.namaNasabah,
            telp: dto.noTelepon ?? current.telp,
            alamat: dto.alamat ?? current.alamat,
            tanggalLahir: dto.tanggalLahir
              ? new Date(dto.tanggalLahir)
              : current.tanggalLahir,
            foto: asset ? asset.url : current.foto,
            ...(file
              ? {
                  photoStatus: asyncPhotos
                    ? PhotoStatus.processing
                    : PhotoStatus.ready,
                }
              : {}),
          },
          select: nasabahDetailSelect,
        });
        return row as NasabahWithUser;
      });
      this.logger.log(`update completed id=${id}`, {
        context: this.context,
        tenantId: tenant.id,
      });
      if (file && asyncPhotos) {
        await this.enqueueUpload(tenant.id, id, file, userId);
      }
      await this.bustReports(tenant.id);
      return toResponse(updated);
    } catch (error) {
      if (asset) {
        await this.compensateUpload(asset.publicId, 'update');
      }
      throw error;
    }
  }

  async remove(
    tenant: TenantContext,
    id: string,
    userId?: string,
  ): Promise<{ id: string }> {
    this.logger.debug(`remove start id=${id}`, {
      context: this.context,
      tenantId: tenant.id,
    });

    const current = await this.prisma.nasabah.findFirst({
      where: { id, tenantId: tenant.id, deletedAt: null },
      select: { id: true, user: { select: { id: true } } },
    });
    if (!current) {
      throw new NotFoundException('Customer not found.');
    }

    const publicIds = await this.prisma.$transaction(async (tx) => {
      await tx.nasabah.update({
        where: { id },
        data: { deletedAt: new Date(), deletedBy: userId },
      });
      await tx.user.updateMany({
        where: { nasabah: { id }, tenantId: tenant.id },
        data: { deletedAt: new Date(), deletedBy: userId },
      });
      return this.media.retirePhotosForOwner(tx, {
        tenantId: tenant.id,
        kind: MediaKind.nasabah_foto,
        ownerId: id,
        deletedBy: userId,
      });
    });

    for (const publicId of publicIds) {
      await this.cloudinary.destroy(publicId);
    }

    this.logger.log(`remove completed id=${id}`, {
      context: this.context,
      tenantId: tenant.id,
    });
    await this.bustReports(tenant.id);
    return { id };
  }

  private async compensateUpload(
    publicId: string,
    operation: string,
  ): Promise<void> {
    try {
      await this.cloudinary.destroy(publicId);
    } catch (compensationError) {
      this.logger.error(
        `compensateUpload failed after ${operation} publicId=${publicId}`,
        compensationError instanceof Error
          ? compensationError.stack
          : undefined,
        { context: this.context },
      );
    }
  }
}
