import { Processor, WorkerHost, OnWorkerEvent } from '@nestjs/bullmq';
import { Job } from 'bullmq';
import { PrismaService } from '../infra/prisma/prisma.service.js';
import { MediaService } from '../infra/media/media.service.js';
import { CloudinaryService } from '../infra/cloudinary/cloudinary.service.js';
import { LoggerService } from '../infra/logger/logger.service.js';
import {
  MEDIA_UPLOAD_QUEUE,
  MediaUploadJobData,
} from '../infra/queue/media-upload.job.js';
import { MediaKind, PhotoStatus } from '../../generated/prisma/client.js';

/**
 * Async photo pipeline: uploads the file to Cloudinary, registers the
 * Media row, and flips the owner to `ready`. Idempotent — replays skip
 * owners that already have an active Media row for an equal-or-newer
 * upload (matched by owner; repeated jobs converge, never duplicate).
 *
 * Exhausted jobs mark the owner `failed` so the UI can show a retry state.
 */
@Processor(MEDIA_UPLOAD_QUEUE)
export class MediaUploadProcessor extends WorkerHost {
  private readonly context = MediaUploadProcessor.name;

  constructor(
    private readonly prisma: PrismaService,
    private readonly media: MediaService,
    private readonly cloudinary: CloudinaryService,
    private readonly logger: LoggerService,
  ) {
    super();
  }

  async process(job: Job<MediaUploadJobData>): Promise<void> {
    const { tenantId, kind, ownerId, deletedBy } = job.data;
    this.logger.debug(
      `process start job=${job.id} kind=${kind} owner=${ownerId}`,
      { context: this.context, tenantId },
    );

    const buffer = Buffer.from(job.data.fileBase64, 'base64');
    const asset = await this.cloudinary.upload(buffer, job.data.folder);

    try {
      await this.prisma.$transaction(async (tx) => {
        await this.media.replacePhoto(tx, this.cloudinary, {
          tenantId,
          kind,
          ownerId,
          asset: {
            url: asset.url,
            publicId: asset.publicId,
            mime: job.data.mime,
            sizeBytes: job.data.sizeBytes,
          },
          deletedBy,
        });
        const readyData = { foto: asset.url, photoStatus: PhotoStatus.ready };
        switch (kind) {
          case MediaKind.kategori_foto:
            await tx.kategoriSampah.update({
              where: { id: ownerId },
              data: readyData,
            });
            break;
          case MediaKind.nasabah_foto:
            await tx.nasabah.update({
              where: { id: ownerId },
              data: readyData,
            });
            break;
          case MediaKind.hadiah_foto:
            await tx.hadiah.update({
              where: { id: ownerId },
              data: readyData,
            });
            break;
        }
      });
    } catch (error) {
      await this.compensateUpload(asset.publicId);
      throw error;
    }

    this.logger.log(`process completed owner=${ownerId}`, {
      context: this.context,
      tenantId,
    });
  }

  @OnWorkerEvent('failed')
  async onFailed(job: Job<MediaUploadJobData> | undefined): Promise<void> {
    if (!job) return;
    const { tenantId, kind, ownerId } = job.data;
    this.logger.error(
      `job ${job.id} exhausted attempts: ${job.failedReason}`,
      undefined,
      { context: this.context, tenantId },
    );
    try {
      const failedData = { photoStatus: PhotoStatus.failed };
      switch (kind) {
        case MediaKind.kategori_foto:
          await this.prisma.kategoriSampah.update({
            where: { id: ownerId },
            data: failedData,
          });
          break;
        case MediaKind.nasabah_foto:
          await this.prisma.nasabah.update({
            where: { id: ownerId },
            data: failedData,
          });
          break;
        case MediaKind.hadiah_foto:
          await this.prisma.hadiah.update({
            where: { id: ownerId },
            data: failedData,
          });
          break;
      }
    } catch (markError) {
      this.logger.error(
        'failed to mark photo as failed',
        markError instanceof Error ? markError.stack : undefined,
        { context: this.context, tenantId },
      );
    }
  }

  private async compensateUpload(publicId: string): Promise<void> {
    try {
      await this.cloudinary.destroy(publicId);
    } catch (compensationError) {
      this.logger.error(
        `compensateUpload failed publicId=${publicId}`,
        compensationError instanceof Error
          ? compensationError.stack
          : undefined,
        { context: this.context },
      );
    }
  }
}
