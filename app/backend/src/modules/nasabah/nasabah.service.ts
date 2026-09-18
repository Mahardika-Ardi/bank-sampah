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
import {
  MediaKind,
  Nasabah,
  Tenant,
  UserRole,
} from '../../../generated/prisma/client.js'; 
import { CreateNasabahDto } from './dto/create-nasabah.dto.js';
import { UpdateNasabahDto } from './dto/update-nasabah.dto.js';
import type { UploadedPhoto } from '../../shared/utils/multer-photo.utils.js';

export type NasabahResponse = {
  id: string;
  namaNasabah: string;
  alamat: string | null;
  telp: string;
  saldoPoin: number;
  foto: string | null;
  tanggalLahir: string | null;
  user: { username: string; role: string };
};

type NasabahWithUser = Nasabah & {
  user: { username: string; role: UserRole };
};

function toResponse(n: NasabahWithUser): NasabahResponse {
  return {
    id: n.id,
    namaNasabah: n.namaNasabah,
    alamat: n.alamat,
    telp: n.telp,
    saldoPoin: Number(n.saldoPoin),
    foto: n.foto,
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
  ) {}

  private mediaFolder(tenantId: string): string {
    return `bank-sampah/${tenantId}/nasabah`;
  }

  async create(
    tenant: Tenant,
    dto: CreateNasabahDto,
    file?: UploadedPhoto,
  ): Promise<NasabahResponse> {
    this.logger.debug(`create start username=${dto.username}`, {
      context: this.context,
      tenantId: tenant.id,
    });

    const existing = await this.prisma.user.findFirst({
      where: { username: dto.username, tenantId: tenant.id },
    });
    if (existing) {
      throw new ConflictException(
        `Username "${dto.username}" is already used in your application database.`,
      );
    }

    const hashedPassword = await this.hashing.hash(dto.password);
    const asset = file
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
        const full = await tx.nasabah.findUniqueOrThrow({
          where: { id: nasabahId },
          include: { user: { select: { username: true, role: true } } },
        });
        return full as NasabahWithUser;
      });
      this.logger.log(`create completed username=${dto.username}`, {
        context: this.context,
        tenantId: tenant.id,
      });
      return toResponse(created);
    } catch (error) {
      if (asset) {
        await this.compensateUpload(asset.publicId, 'create');
      }
      throw error;
    }
  }

  async findAll(tenant: Tenant): Promise<NasabahResponse[]> {
    this.logger.debug('findAll start', {
      context: this.context,
      tenantId: tenant.id,
    });
    const rows = (await this.prisma.nasabah.findMany({
      where: { tenantId: tenant.id, deletedAt: null },
      orderBy: { namaNasabah: 'asc' },
      include: { user: { select: { username: true, role: true } } },
    })) as NasabahWithUser[];
    return rows.map(toResponse);
  }

  async findOne(tenant: Tenant, id: string): Promise<NasabahResponse> {
    const row = (await this.prisma.nasabah.findFirst({
      where: { id, tenantId: tenant.id, deletedAt: null },
      include: { user: { select: { username: true, role: true } } },
    })) as NasabahWithUser | null;
    if (!row) {
      throw new NotFoundException('Customer not found.');
    }
    return toResponse(row);
  }

  async update(
    tenant: Tenant,
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
    });
    if (!current) {
      throw new NotFoundException('Customer not found.');
    }

    const asset = file
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
          },
          include: { user: { select: { username: true, role: true } } },
        });
        return row as NasabahWithUser;
      });
      this.logger.log(`update completed id=${id}`, {
        context: this.context,
        tenantId: tenant.id,
      });
      return toResponse(updated);
    } catch (error) {
      if (asset) {
        await this.compensateUpload(asset.publicId, 'update');
      }
      throw error;
    }
  }

  async remove(
    tenant: Tenant,
    id: string,
    userId?: string,
  ): Promise<{ id: string }> {
    this.logger.debug(`remove start id=${id}`, {
      context: this.context,
      tenantId: tenant.id,
    });

    const current = await this.prisma.nasabah.findFirst({
      where: { id, tenantId: tenant.id, deletedAt: null },
      include: { user: { select: { id: true } } },
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
