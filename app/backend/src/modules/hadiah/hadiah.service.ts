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
  Hadiah,
  MediaKind,
  Tenant,
} from '../../../generated/prisma/client.js';
import { CreateHadiahDto } from './dto/create-hadiah.dto.js';
import { UpdateHadiahDto } from './dto/update-hadiah.dto.js';
import type { UploadedPhoto } from '../../shared/utils/multer-photo.utils.js';

export type HadiahResponse = {
  id: string;
  namaHadiah: string;
  poinDibutuhkan: number;
  stok: number;
  foto: string | null;
};

function toResponse(h: Hadiah): HadiahResponse {
  return {
    id: h.id,
    namaHadiah: h.namaHadiah,
    poinDibutuhkan: Number(h.poinDibutuhkan),
    stok: h.stok,
    foto: h.foto,
  };
}

@Injectable()
export class HadiahService {
  private readonly context = HadiahService.name;

  constructor(
    private readonly prisma: PrismaService,
    private readonly media: MediaService,
    private readonly cloudinary: CloudinaryService,
    private readonly logger: LoggerService,
  ) {}

  private mediaFolder(tenantId: string): string {
    return `bank-sampah/${tenantId}/hadiah`;
  }

  async create(
    tenant: Tenant,
    dto: CreateHadiahDto,
    file?: UploadedPhoto,
  ): Promise<HadiahResponse> {
    this.logger.debug(`create start nama=${dto.namaHadiah}`, {
      context: this.context,
      tenantId: tenant.id,
    });

    const existing = await this.prisma.hadiah.findFirst({
      where: {
        tenantId: tenant.id,
        namaHadiah: dto.namaHadiah,
        deletedAt: null,
      },
    });
    if (existing) {
      throw new ConflictException(
        `Reward name "${dto.namaHadiah}" is already used in your application database.`,
      );
    }

    const asset = file
      ? await this.cloudinary.upload(file.buffer, this.mediaFolder(tenant.id))
      : null;

    try {
      const created = await this.prisma.$transaction(async (tx) => {
        const hadiah = await tx.hadiah.create({
          data: {
            tenantId: tenant.id,
            namaHadiah: dto.namaHadiah,
            poinDibutuhkan: dto.poinDibutuhkan,
            stok: dto.stok,
            foto: asset?.url ?? null,
          },
        });
        if (asset) {
          await this.media.createPhoto(tx, {
            tenantId: tenant.id,
            kind: MediaKind.hadiah_foto,
            ownerId: hadiah.id,
            asset: {
              url: asset.url,
              publicId: asset.publicId,
              mime: file?.mimetype,
              sizeBytes: file?.size,
            },
          });
        }
        return hadiah;
      });
      this.logger.log(`create completed id=${created.id}`, {
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

  async findAll(tenant: Tenant): Promise<HadiahResponse[]> {
    this.logger.debug('findAll start', {
      context: this.context,
      tenantId: tenant.id,
    });
    const rows = await this.prisma.hadiah.findMany({
      where: { tenantId: tenant.id, deletedAt: null },
      orderBy: { namaHadiah: 'asc' },
    });
    return rows.map(toResponse);
  }

  async findOne(tenant: Tenant, id: string): Promise<HadiahResponse> {
    const hadiah = await this.prisma.hadiah.findFirst({
      where: { id, tenantId: tenant.id, deletedAt: null },
    });
    if (!hadiah) {
      throw new NotFoundException('Reward not found.');
    }
    return toResponse(hadiah);
  }

  async update(
    tenant: Tenant,
    id: string,
    dto: UpdateHadiahDto,
    file?: UploadedPhoto,
    userId?: string,
  ): Promise<HadiahResponse> {
    this.logger.debug(`update start id=${id}`, {
      context: this.context,
      tenantId: tenant.id,
    });

    const current = await this.prisma.hadiah.findFirst({
      where: { id, tenantId: tenant.id, deletedAt: null },
    });
    if (!current) {
      throw new NotFoundException('Reward not found.');
    }

    if (dto.namaHadiah && dto.namaHadiah !== current.namaHadiah) {
      const clash = await this.prisma.hadiah.findFirst({
        where: {
          tenantId: tenant.id,
          namaHadiah: dto.namaHadiah,
          deletedAt: null,
        },
      });
      if (clash) {
        throw new ConflictException(
          `Reward name "${dto.namaHadiah}" is already used in your application database.`,
        );
      }
    }

    const asset = file
      ? await this.cloudinary.upload(file.buffer, this.mediaFolder(tenant.id))
      : null;

    try {
      const updated = await this.prisma.$transaction(async (tx) => {
        if (asset) {
          await this.media.replacePhoto(tx, this.cloudinary, {
            tenantId: tenant.id,
            kind: MediaKind.hadiah_foto,
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
        return tx.hadiah.update({
          where: { id },
          data: {
            namaHadiah: dto.namaHadiah ?? current.namaHadiah,
            poinDibutuhkan: dto.poinDibutuhkan ?? current.poinDibutuhkan,
            stok: dto.stok ?? current.stok,
            foto: asset ? asset.url : current.foto,
          },
        });
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

    const current = await this.prisma.hadiah.findFirst({
      where: { id, tenantId: tenant.id, deletedAt: null },
    });
    if (!current) {
      throw new NotFoundException('Reward not found.');
    }

    const publicIds = await this.prisma.$transaction(async (tx) => {
      await tx.hadiah.update({
        where: { id },
        data: { deletedAt: new Date(), deletedBy: userId },
      });
      return this.media.retirePhotosForOwner(tx, {
        tenantId: tenant.id,
        kind: MediaKind.hadiah_foto,
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
