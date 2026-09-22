import { Test, TestingModule } from '@nestjs/testing';
import { HadiahService } from './hadiah.service.js';
import { PrismaService } from '../../infra/prisma/prisma.service.js';
import { LoggerService } from '../../infra/logger/logger.service.js';
import { RedisService } from '../../infra/redis/redis.service.js';
import { MediaService } from '../../infra/media/media.service.js';
import { CloudinaryService } from '../../infra/cloudinary/cloudinary.service.js';
import { NotFoundException, ConflictException } from '@nestjs/common';
import { describe, it, expect, beforeEach, vi, Mock } from 'vitest';
import { Tenant } from '../../../generated/prisma/client.js';
import { ConfigService } from '@nestjs/config';
import { getQueueToken } from '@nestjs/bullmq';
import { MEDIA_UPLOAD_QUEUE } from '../../infra/queue/media-upload.job.js';

describe('HadiahService', () => {
  let service: HadiahService;

  let mockPrisma: {
    hadiah: { findFirst: Mock; findMany: Mock; create: Mock; update: Mock };
    $transaction: Mock;
  };
  let mockMedia: {
    createPhoto: Mock;
    replacePhoto: Mock;
    retirePhotosForOwner: Mock;
  };
  let mockCloudinary: { upload: Mock; destroy: Mock };
  let mockConfig: { get: Mock };
  let mockQueue: { add: Mock };

  const mockTenant = { id: 'tenant-id' } as Tenant;

  const hadiahRow = {
    id: 'rew-id',
    tenantId: 'tenant-id',
    namaHadiah: 'Gula Pasir 1 Kg',
    poinDibutuhkan: '60',
    stok: 30,
    foto: null,
    photoStatus: 'ready',
  };

  beforeEach(async () => {
    mockPrisma = {
      hadiah: {
        findFirst: vi.fn(),
        findMany: vi.fn().mockResolvedValue([]),
        create: vi.fn(),
        update: vi.fn(),
      },
      $transaction: vi.fn(async (callback) =>
        callback({
          hadiah: {
            create: mockPrisma.hadiah.create,
            update: mockPrisma.hadiah.update,
          },
        }),
      ),
    };
    mockMedia = {
      createPhoto: vi.fn(),
      replacePhoto: vi.fn(),
      retirePhotosForOwner: vi.fn().mockResolvedValue([]),
    };
    mockCloudinary = { upload: vi.fn(), destroy: vi.fn() };
    mockConfig = { get: vi.fn().mockReturnValue(false) };
    mockQueue = { add: vi.fn() };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        HadiahService,
        { provide: PrismaService, useValue: mockPrisma },
        { provide: MediaService, useValue: mockMedia },
        { provide: CloudinaryService, useValue: mockCloudinary },
        { provide: LoggerService, useValue: { log: vi.fn(), debug: vi.fn() } },
        { provide: ConfigService, useValue: mockConfig },
        { provide: getQueueToken(MEDIA_UPLOAD_QUEUE), useValue: mockQueue },
        {
          provide: RedisService,
          useValue: { get: vi.fn(), set: vi.fn(), delByPrefix: vi.fn() },
        },
      ],
    }).compile();

    service = module.get<HadiahService>(HadiahService);
    vi.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    const dto = { namaHadiah: 'Gula Pasir 1 Kg', poinDibutuhkan: 60, stok: 30 };

    it('should create without photo and convert points to number', async () => {
      mockPrisma.hadiah.findFirst.mockResolvedValue(null);
      mockPrisma.hadiah.create.mockResolvedValue(hadiahRow);

      const result = await service.create(mockTenant, dto);

      expect(result).toEqual({
        id: 'rew-id',
        namaHadiah: 'Gula Pasir 1 Kg',
        poinDibutuhkan: 60,
        stok: 30,
        foto: null,
        photoStatus: 'ready',
      });
    });

    it('should throw ConflictException on duplicate name', async () => {
      mockPrisma.hadiah.findFirst.mockResolvedValue(hadiahRow);

      await expect(service.create(mockTenant, dto)).rejects.toThrow(
        ConflictException,
      );
    });

    it('should enqueue upload and mark processing when PHOTO_ASYNC is on', async () => {
      mockConfig.get.mockReturnValue(true);
      mockPrisma.hadiah.findFirst.mockResolvedValue(null);
      mockPrisma.hadiah.create.mockResolvedValue({
        ...hadiahRow,
        foto: null,
        photoStatus: 'processing',
      });
      const file = {
        buffer: Buffer.from('img'),
        mimetype: 'image/jpeg',
        size: 100,
      } as Express.Multer.File;

      const result = await service.create(mockTenant, dto, file);

      expect(mockQueue.add).toHaveBeenCalledWith(
        'upload',
        expect.objectContaining({ ownerId: 'rew-id' }),
      );
      expect(mockCloudinary.upload).not.toHaveBeenCalled();
      expect(result).toMatchObject({ foto: null, photoStatus: 'processing' });
    });
  });

  describe('findAll / findOne', () => {
    it('should list tenant rewards', async () => {
      mockPrisma.hadiah.findMany.mockResolvedValue([hadiahRow]);

      const result = await service.findAll(mockTenant);

      expect(result).toHaveLength(1);
    });

    it('should throw NotFoundException for unknown id', async () => {
      mockPrisma.hadiah.findFirst.mockResolvedValue(null);

      await expect(service.findOne(mockTenant, 'missing')).rejects.toThrow(
        NotFoundException,
      );
    });
  });

  describe('update', () => {
    it('should update stock without touching photo', async () => {
      mockPrisma.hadiah.findFirst.mockResolvedValue(hadiahRow);
      mockPrisma.hadiah.update.mockResolvedValue({ ...hadiahRow, stok: 25 });

      const result = await service.update(mockTenant, 'rew-id', { stok: 25 });

      expect(mockMedia.replacePhoto).not.toHaveBeenCalled();
      expect(result.stok).toBe(25);
    });
  });

  describe('remove', () => {
    it('should soft-delete and destroy stored assets', async () => {
      mockPrisma.hadiah.findFirst.mockResolvedValue(hadiahRow);
      mockMedia.retirePhotosForOwner.mockResolvedValue(['pub-old']);

      const result = await service.remove(mockTenant, 'rew-id', 'admin-1');

      expect(result).toEqual({ id: 'rew-id' });
      expect(mockCloudinary.destroy).toHaveBeenCalledWith('pub-old');
    });
  });
});
