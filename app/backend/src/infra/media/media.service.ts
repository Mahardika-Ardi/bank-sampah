import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import {
  MediaKind,
  Prisma,
} from '../../../generated/prisma/client.js';
import { LoggerService } from '../logger/logger.service.js';
import { CloudinaryService } from '../cloudinary/cloudinary.service.js';
import { mediaActiveSelect } from './media-select.js';

export type PhotoAsset = {
  url: string;
  publicId: string | null;
  mime?: string;
  sizeBytes?: number;
};

/**
 * Photo lifecycle registry. Entities keep a denormalized `foto` URL for
 * join-free reads; this service owns creation, replacement, and removal
 * of the underlying Media rows + Cloudinary assets.
 *
 * Strictness: Cloudinary failures throw so the surrounding transaction
 * rolls back. Callers compensate already-uploaded new assets on catch.
 */
@Injectable()
export class MediaService {
  private readonly context = MediaService.name;

  constructor(
    private readonly prisma: PrismaService,
    private readonly logger: LoggerService,
  ) {}

  async createPhoto(
    tx: Prisma.TransactionClient,
    input: {
      tenantId: string;
      kind: MediaKind;
      ownerId: string;
      asset: PhotoAsset;
    },
  ) {
    this.logger.debug(
      `createPhoto kind=${input.kind} owner=${input.ownerId}`,
      { context: this.context, tenantId: input.tenantId },
    );
    return tx.media.create({
      data: {
        tenantId: input.tenantId,
        kind: input.kind,
        ownerId: input.ownerId,
        url: input.asset.url,
        publicId: input.asset.publicId,
        mime: input.asset.mime,
        sizeBytes: input.asset.sizeBytes,
      },
    });
  }

  private async findActivePhoto(
    tx: Prisma.TransactionClient,
    tenantId: string,
    kind: MediaKind,
    ownerId: string,
  ) {
    return tx.media.findFirst({
      where: { tenantId, kind, ownerId, deletedAt: null },
      orderBy: { createdAt: 'desc' },
      select: mediaActiveSelect,
    });
  }

  async replacePhoto(
    tx: Prisma.TransactionClient,
    cloudinary: CloudinaryService,
    input: {
      tenantId: string;
      kind: MediaKind;
      ownerId: string;
      asset: PhotoAsset;
      deletedBy?: string;
    },
  ) {
    const previous = await this.findActivePhoto(
      tx,
      input.tenantId,
      input.kind,
      input.ownerId,
    );
    const created = await this.createPhoto(tx, {
      tenantId: input.tenantId,
      kind: input.kind,
      ownerId: input.ownerId,
      asset: input.asset,
    });
    if (previous) {
      if (previous.publicId) {
        await cloudinary.destroy(previous.publicId);
      }
      await tx.media.update({
        where: { id: previous.id },
        data: {
          deletedAt: new Date(),
          deletedBy: input.deletedBy,
        },
      });
      this.logger.debug(`replacePhoto retired media=${previous.id}`, {
        context: this.context,
        tenantId: input.tenantId,
      });
    }
    return created;
  }

  /**
   * Soft-deletes all active photos of an owner inside the transaction and
   * returns their publicIds so the caller can destroy the assets after
   * commit. Destroy failures throw (reported, state stays deleted).
   */
  async retirePhotosForOwner(
    tx: Prisma.TransactionClient,
    input: {
      tenantId: string;
      kind: MediaKind;
      ownerId: string;
      deletedBy?: string;
    },
  ): Promise<string[]> {
    const actives = await tx.media.findMany({
      where: {
        tenantId: input.tenantId,
        kind: input.kind,
        ownerId: input.ownerId,
        deletedAt: null,
      },
      select: mediaActiveSelect,
    });
    if (actives.length === 0) return [];
    await tx.media.updateMany({
      where: { id: { in: actives.map((m) => m.id) } },
      data: {
        deletedAt: new Date(),
        deletedBy: input.deletedBy,
      },
    });
    return actives
      .map((m) => m.publicId)
      .filter((id): id is string => id !== null);
  }
}
