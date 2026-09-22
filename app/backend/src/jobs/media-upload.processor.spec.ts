import { Test, TestingModule } from '@nestjs/testing';
import { MediaUploadProcessor } from './media-upload.processor.js';
import { PrismaService } from '../infra/prisma/prisma.service.js';
import { MediaService } from '../infra/media/media.service.js';
import { CloudinaryService } from '../infra/cloudinary/cloudinary.service.js';
import { LoggerService } from '../infra/logger/logger.service.js';
import { describe, it, expect, beforeEach, vi, Mock } from 'vitest';
import { Job } from 'bullmq';
import { MediaKind } from '../../generated/prisma/client.js';
import { MediaUploadJobData } from '../infra/queue/media-upload.job.js';

describe('MediaUploadProcessor', () => {
  let processor: MediaUploadProcessor;

  let mockPrisma: {
    $transaction: Mock;
    kategoriSampah: { update: Mock };
    nasabah: { update: Mock };
    hadiah: { update: Mock };
  };
  let mockMedia: { replacePhoto: Mock };
  let mockCloudinary: { upload: Mock; destroy: Mock };

  const baseJob = {
    tenantId: 'tenant-id',
    kind: MediaKind.kategori_foto,
    ownerId: 'kat-id',
    fileBase64: Buffer.from('img').toString('base64'),
    mime: 'image/jpeg',
    sizeBytes: 100,
    folder: 'bank-sampah/tenant-id/kategori',
  };

  const jobOf = (data: MediaUploadJobData) =>
    ({ id: 'job-1', data }) as Job<MediaUploadJobData>;

  beforeEach(async () => {
    const txUpdateMocks = {
      kategoriSampah: { update: vi.fn() },
      nasabah: { update: vi.fn() },
      hadiah: { update: vi.fn() },
    };
    mockPrisma = {
      $transaction: vi.fn(async (callback) => callback(txUpdateMocks)),
      kategoriSampah: txUpdateMocks.kategoriSampah,
      nasabah: txUpdateMocks.nasabah,
      hadiah: txUpdateMocks.hadiah,
    };
    mockMedia = { replacePhoto: vi.fn() };
    mockCloudinary = {
      upload: vi.fn().mockResolvedValue({
        url: 'https://cdn.test/foto.jpg',
        publicId: 'pub-1',
        bytes: 100,
        format: 'jpg',
      }),
      destroy: vi.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MediaUploadProcessor,
        { provide: PrismaService, useValue: mockPrisma },
        { provide: MediaService, useValue: mockMedia },
        { provide: CloudinaryService, useValue: mockCloudinary },
        {
          provide: LoggerService,
          useValue: { log: vi.fn(), debug: vi.fn(), error: vi.fn() },
        },
      ],
    }).compile();

    processor = module.get<MediaUploadProcessor>(MediaUploadProcessor);
    vi.clearAllMocks();
  });

  it('should be defined', () => {
    expect(processor).toBeDefined();
  });

  it('should upload, register media and mark owner ready', async () => {
    await processor.process(jobOf(baseJob));

    expect(mockCloudinary.upload).toHaveBeenCalledOnce();
    expect(mockMedia.replacePhoto).toHaveBeenCalledOnce();
    expect(mockPrisma.kategoriSampah.update).toHaveBeenCalledWith(
      expect.objectContaining({
        where: { id: 'kat-id' },
        data: expect.objectContaining({ photoStatus: 'ready' }),
      }),
    );
  });

  it('should compensate the upload when the transaction fails', async () => {
    mockPrisma.$transaction.mockRejectedValue(new Error('db down'));

    await expect(processor.process(jobOf(baseJob))).rejects.toThrow('db down');
    expect(mockCloudinary.destroy).toHaveBeenCalledWith('pub-1');
  });

  it('should mark the owner failed when the job exhausts attempts', async () => {
    const failedJob = {
      ...jobOf(baseJob),
      failedReason: 'upstream down',
    } as Job<MediaUploadJobData>;

    await processor.onFailed(failedJob);

    expect(mockPrisma.kategoriSampah.update).toHaveBeenCalledWith(
      expect.objectContaining({
        data: expect.objectContaining({ photoStatus: 'failed' }),
      }),
    );
  });
});
