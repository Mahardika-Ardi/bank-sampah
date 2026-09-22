import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { PrismaService } from '../../infra/prisma/prisma.service.js';
import { LoggerService } from '../../infra/logger/logger.service.js';
import { MediaService } from '../../infra/media/media.service.js';
import { CloudinaryService } from '../../infra/cloudinary/cloudinary.service.js';
import {
  MediaKind,
  PhotoStatus,
  Prisma,
} from '../../../generated/prisma/client.js';
import { TenantContext } from '../tenant/tenant-select.js';
import { ConfigService } from '@nestjs/config';
import { InjectQueue } from '@nestjs/bullmq';
import { Queue } from 'bullmq';
import {
  MEDIA_UPLOAD_QUEUE,
  MediaUploadJobData,
} from '../../infra/queue/media-upload.job.js';
import { CreateKategoriSampahDto } from './dto/create-kategori.dto.js';
import { UpdateKategoriSampahDto } from './dto/update-kategori.dto.js';
import type { UploadedPhoto } from '../../shared/utils/multer-photo.utils.js';
import {
  kategoriDetailSelect,
  kategoriNameTakenSelect,
} from './kategori-select.js';
import { RedisService } from '../../infra/redis/redis.service.js';

export type KategoriResponse = {
  id: string;
  namaKategori: string;
  hargaPerKg: number;
  poinPerKg: number;
  jenis: string;
  foto: string | null;
  photoStatus: PhotoStatus;
};

type KategoriRow = Prisma.KategoriSampahGetPayload<{
  select: typeof kategoriDetailSelect;
}>;

function toResponse(k: KategoriRow): KategoriResponse {
  return {
    id: k.id,
    namaKategori: k.namaKategori,
    hargaPerKg: Number(k.hargaPerKg),
    poinPerKg: Number(k.poinPerKg),
    jenis: k.jenis,
    foto: k.foto,
    photoStatus: k.photoStatus,
  };
}

@Injectable()
export class KategoriService {
  private readonly context = KategoriService.name;

  constructor(
    private readonly prisma: PrismaService,
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
      kind: MediaKind.kategori_foto,
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

  private listKey(tenantId: string): string {
    return RedisService.key(tenantId, 'kategori', 'list');
  }

  private async bustListCache(tenantId: string): Promise<void> {
    await this.redis.delByPrefix(RedisService.key(tenantId, 'kategori', ''));
    await this.redis.delByPrefix(RedisService.key(tenantId, 'reports', ''));
  }

  private mediaFolder(tenantId: string): string {
    return `bank-sampah/${tenantId}/kategori`;
  }

  async create(
    tenant: TenantContext,
    dto: CreateKategoriSampahDto,
    file?: UploadedPhoto,
  ): Promise<KategoriResponse> {
    this.logger.debug(`create start nama=${dto.namaKategori}`, {
      context: this.context,
      tenantId: tenant.id,
    });

    const existing = await this.prisma.kategoriSampah.findFirst({
      where: {
        tenantId: tenant.id,
        namaKategori: dto.namaKategori,
        deletedAt: null,
      },
      select: kategoriNameTakenSelect,
    });
    if (existing) {
      throw new ConflictException(
        `Category name "${dto.namaKategori}" is already used in your application database.`,
      );
    }

    const asyncPhotos = file ? this.photosAsync() : false;
    const asset =
      file && !asyncPhotos
        ? await this.cloudinary.upload(
            file.buffer,
            this.mediaFolder(tenant.id),
          )
        : null;

    try {
      const created = await this.prisma.$transaction(async (tx) => {
        const kategori = await tx.kategoriSampah.create({
          data: {
            tenantId: tenant.id,
            namaKategori: dto.namaKategori,
            hargaPerKg: dto.hargaPerKg,
            poinPerKg: dto.poinPerKg,
            jenis: dto.jenis,
            foto: asset?.url ?? null,
            photoStatus:
              file && asyncPhotos ? PhotoStatus.processing : PhotoStatus.ready,
          },
        });
        if (asset) {
          await this.media.createPhoto(tx, {
            tenantId: tenant.id,
            kind: MediaKind.kategori_foto,
            ownerId: kategori.id,
            asset: {
              url: asset.url,
              publicId: asset.publicId,
              mime: file?.mimetype,
              sizeBytes: file?.size,
            },
          });
        }
        return kategori;
      });
      this.logger.log(`create completed id=${created.id}`, {
        context: this.context,
        tenantId: tenant.id,
      });
      if (file && asyncPhotos) {
        await this.enqueueUpload(tenant.id, created.id, file);
      }
      await this.bustListCache(tenant.id);
      return toResponse(created);
    } catch (error) {
      if (asset) {
        await this.compensateUpload(asset.publicId, 'create');
      }
      throw error;
    }
  }

  async findAll(tenant: TenantContext): Promise<KategoriResponse[]> {
    this.logger.debug('findAll start', {
      context: this.context,
      tenantId: tenant.id,
    });
    const key = this.listKey(tenant.id);
    const cached = await this.redis.get<KategoriResponse[]>(key);
    if (cached) {
      this.logger.debug('findAll cache hit', {
        context: this.context,
        tenantId: tenant.id,
      });
      return cached;
    }
    const rows = await this.prisma.kategoriSampah.findMany({
      where: { tenantId: tenant.id, deletedAt: null },
      orderBy: { namaKategori: 'asc' },
      select: kategoriDetailSelect,
    });
    const mapped = rows.map(toResponse);
    await this.redis.set(key, mapped, 120);
    return mapped;
  }

  async findOne(tenant: TenantContext, id: string): Promise<KategoriResponse> {
    const kategori = await this.prisma.kategoriSampah.findFirst({
      where: { id, tenantId: tenant.id, deletedAt: null },
      select: kategoriDetailSelect,
    });
    if (!kategori) {
      throw new NotFoundException('Waste category not found.');
    }
    return toResponse(kategori);
  }

  async update(
    tenant: TenantContext,
    id: string,
    dto: UpdateKategoriSampahDto,
    file?: UploadedPhoto,
    userId?: string,
  ): Promise<KategoriResponse> {
    this.logger.debug(`update start id=${id}`, {
      context: this.context,
      tenantId: tenant.id,
    });

    const current = await this.prisma.kategoriSampah.findFirst({
      where: { id, tenantId: tenant.id, deletedAt: null },
      select: kategoriDetailSelect,
    });
    if (!current) {
      throw new NotFoundException('Waste category not found.');
    }

    if (dto.namaKategori && dto.namaKategori !== current.namaKategori) {
      const clash = await this.prisma.kategoriSampah.findFirst({
        where: {
          tenantId: tenant.id,
          namaKategori: dto.namaKategori,
          deletedAt: null,
        },
        select: kategoriNameTakenSelect,
      });
      if (clash) {
        throw new ConflictException(
          `Category name "${dto.namaKategori}" is already used in your application database.`,
        );
      }
    }

    const asyncPhotos = file ? this.photosAsync() : false;
    const asset =
      file && !asyncPhotos
        ? await this.cloudinary.upload(
            file.buffer,
            this.mediaFolder(tenant.id),
          )
        : null;

    try {
      const updated = await this.prisma.$transaction(async (tx) => {
        if (asset) {
          await this.media.replacePhoto(tx, this.cloudinary, {
            tenantId: tenant.id,
            kind: MediaKind.kategori_foto,
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
        return tx.kategoriSampah.update({
          where: { id },
          data: {
            namaKategori: dto.namaKategori ?? current.namaKategori,
            hargaPerKg: dto.hargaPerKg ?? current.hargaPerKg,
            poinPerKg: dto.poinPerKg ?? current.poinPerKg,
            jenis: dto.jenis ?? current.jenis,
            foto: asset ? asset.url : current.foto,
            ...(file
              ? {
                  photoStatus: asyncPhotos
                    ? PhotoStatus.processing
                    : PhotoStatus.ready,
                }
              : {}),
          },
        });
      });
      this.logger.log(`update completed id=${id}`, {
        context: this.context,
        tenantId: tenant.id,
      });
      if (file && asyncPhotos) {
        await this.enqueueUpload(tenant.id, id, file, userId);
      }
      await this.bustListCache(tenant.id);
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

    const current = await this.prisma.kategoriSampah.findFirst({
      where: { id, tenantId: tenant.id, deletedAt: null },
      select: kategoriNameTakenSelect,
    });
    if (!current) {
      throw new NotFoundException('Waste category not found.');
    }

    const publicIds = await this.prisma.$transaction(async (tx) => {
      await tx.kategoriSampah.update({
        where: { id },
        data: { deletedAt: new Date(), deletedBy: userId },
      });
      return this.media.retirePhotosForOwner(tx, {
        tenantId: tenant.id,
        kind: MediaKind.kategori_foto,
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
    await this.bustListCache(tenant.id);
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
