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
  KategoriSampah,
  MediaKind,
  Tenant,
} from '../../../generated/prisma/client.js';
import { CreateKategoriSampahDto } from './dto/create-kategori.dto.js';
import { UpdateKategoriSampahDto } from './dto/update-kategori.dto.js';
import type { UploadedPhoto } from '../../shared/utils/multer-photo.utils.js';

export type KategoriResponse = {
  id: string;
  namaKategori: string;
  hargaPerKg: number;
  poinPerKg: number;
  jenis: string;
  foto: string | null;
};

function toResponse(k: KategoriSampah): KategoriResponse {
  return {
    id: k.id,
    namaKategori: k.namaKategori,
    hargaPerKg: Number(k.hargaPerKg),
    poinPerKg: Number(k.poinPerKg),
    jenis: k.jenis,
    foto: k.foto,
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
  ) {}

  private mediaFolder(tenantId: string): string {
    return `bank-sampah/${tenantId}/kategori`;
  }

  async create(
    tenant: Tenant,
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
    });
    if (existing) {
      throw new ConflictException(
        `Category name "${dto.namaKategori}" is already used in your application database.`,
      );
    }

    const asset = file
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
      return toResponse(created);
    } catch (error) {
      if (asset) {
        await this.compensateUpload(asset.publicId, 'create');
      }
      throw error;
    }
  }

  async findAll(tenant: Tenant): Promise<KategoriResponse[]> {
    this.logger.debug('findAll start', {
      context: this.context,
      tenantId: tenant.id,
    });
    const rows = await this.prisma.kategoriSampah.findMany({
      where: { tenantId: tenant.id, deletedAt: null },
      orderBy: { namaKategori: 'asc' },
    });
    return rows.map(toResponse);
  }

  async findOne(tenant: Tenant, id: string): Promise<KategoriResponse> {
    const kategori = await this.prisma.kategoriSampah.findFirst({
      where: { id, tenantId: tenant.id, deletedAt: null },
    });
    if (!kategori) {
      throw new NotFoundException('Waste category not found.');
    }
    return toResponse(kategori);
  }

  async update(
    tenant: Tenant,
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
      });
      if (clash) {
        throw new ConflictException(
          `Category name "${dto.namaKategori}" is already used in your application database.`,
        );
      }
    }

    const asset = file
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

    const current = await this.prisma.kategoriSampah.findFirst({
      where: { id, tenantId: tenant.id, deletedAt: null },
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
