import { Test, TestingModule } from '@nestjs/testing';
import { NasabahService } from './nasabah.service.js';
import { PrismaService } from '../../infra/prisma/prisma.service.js';
import { LoggerService } from '../../infra/logger/logger.service.js';
import { RedisService } from '../../infra/redis/redis.service.js';
import { HashingService } from '../../shared/hashing/hashing.service.js';
import { MediaService } from '../../infra/media/media.service.js';
import { CloudinaryService } from '../../infra/cloudinary/cloudinary.service.js';
import { NotFoundException, ConflictException } from '@nestjs/common';
import { describe, it, expect, beforeEach, vi, Mock } from 'vitest';
import { Tenant } from '../../../generated/prisma/client.js';
import { ConfigService } from '@nestjs/config';
import { getQueueToken } from '@nestjs/bullmq';
import { MEDIA_UPLOAD_QUEUE } from '../../infra/queue/media-upload.job.js';

describe('NasabahService', () => {
  let service: NasabahService;

  let mockPrisma: {
    user: { findFirst: Mock };
    nasabah: {
      findFirst: Mock;
      findMany: Mock;
      create: Mock;
      update: Mock;
      findUniqueOrThrow: Mock;
    };
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

  const nasabahRow = {
    id: 'nas-id',
    tenantId: 'tenant-id',
    namaNasabah: 'Dewi Lestari',
    alamat: 'Jl. Kenanga No. 5',
    telp: '081987654321',
    saldoPoin: '0',
    foto: null,
    photoStatus: 'ready',
    tanggalLahir: null,
    user: { username: 'nasabah_dewi', role: 'nasabah' },
  };

  beforeEach(async () => {
    mockPrisma = {
      user: { findFirst: vi.fn() },
      nasabah: {
        findFirst: vi.fn(),
        findMany: vi.fn().mockResolvedValue([]),
        create: vi.fn(),
        update: vi.fn(),
        findUniqueOrThrow: vi.fn().mockResolvedValue({
          id: 'nas-id',
          tenantId: 'tenant-id',
          namaNasabah: 'Dewi Lestari',
          alamat: 'Jl. Kenanga No. 5',
          telp: '081987654321',
          saldoPoin: '0',
          foto: null,
          photoStatus: 'ready',
          tanggalLahir: null,
          user: { username: 'nasabah_dewi', role: 'nasabah' },
        }),
      },
      $transaction: vi.fn(async (callback) =>
        callback({
          user: {
            create: vi.fn().mockResolvedValue({
              id: 'user-id',
              username: 'nasabah_dewi',
              nasabah: { id: 'nas-id' },
            }),
          },
          nasabah: {
            findUniqueOrThrow: vi.fn().mockResolvedValue(nasabahRow),
            update: mockPrisma.nasabah.update,
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
        NasabahService,
        { provide: PrismaService, useValue: mockPrisma },
        { provide: HashingService, useValue: { hash: vi.fn().mockResolvedValue('hashed') } },
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

    service = module.get<NasabahService>(NasabahService);
    vi.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    const dto = {
      username: 'nasabah_dewi',
      password: 'password123',
      namaNasabah: 'Dewi Lestari',
      alamat: 'Jl. Kenanga No. 5',
      telp: '081987654321',
    };

    it('should create nasabah with nested user and zero balance', async () => {
      mockPrisma.user.findFirst.mockResolvedValue(null);

      const result = await service.create(mockTenant, dto);

      expect(result).toMatchObject({
        namaNasabah: 'Dewi Lestari',
        saldoPoin: 0,
        user: { username: 'nasabah_dewi' },
      });
      expect(mockCloudinary.upload).not.toHaveBeenCalled();
    });

    it('should throw ConflictException on duplicate username', async () => {
      mockPrisma.user.findFirst.mockResolvedValue({ id: 'user-id' });

      await expect(service.create(mockTenant, dto)).rejects.toThrow(
        ConflictException,
      );
    });

    it('should omit tenantId from nested nasabah create', async () => {
      mockPrisma.user.findFirst.mockResolvedValue(null);
      const userCreate: Mock = vi.fn().mockResolvedValue({
        id: 'user-id',
        username: 'nasabah_dewi',
        nasabah: { id: 'nas-id' },
      });
      mockPrisma.$transaction.mockImplementation(async (callback) =>
        callback({
          user: { create: userCreate },
          nasabah: {
            findUniqueOrThrow: vi.fn().mockResolvedValue(nasabahRow),
          },
        }),
      );

      await service.create(mockTenant, dto);

      const createArg = userCreate.mock.calls[0][0] as {
        data: {
          tenantId: string;
          nasabah: { create: Record<string, unknown> };
        };
      };
      expect(createArg.data.tenantId).toBe('tenant-id');
      expect(createArg.data.nasabah.create).not.toHaveProperty('tenantId');
    });

    it('should enqueue upload and mark processing when PHOTO_ASYNC is on', async () => {
      mockConfig.get.mockReturnValue(true);
      mockPrisma.user.findFirst.mockResolvedValue(null);
      mockPrisma.nasabah.findUniqueOrThrow.mockResolvedValueOnce({
        ...nasabahRow,
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
        expect.objectContaining({ ownerId: 'nas-id' }),
      );
      expect(mockCloudinary.upload).not.toHaveBeenCalled();
      expect(result).toMatchObject({ foto: null, photoStatus: 'processing' });
    });
  });

  describe('findAll / findOne', () => {
    it('should list tenant nasabah', async () => {
      mockPrisma.nasabah.findMany.mockResolvedValue([nasabahRow]);

      const result = await service.findAll(mockTenant);

      expect(result).toHaveLength(1);
      expect(result[0].user.username).toBe('nasabah_dewi');
    });

    it('should throw NotFoundException for unknown id', async () => {
      mockPrisma.nasabah.findFirst.mockResolvedValue(null);

      await expect(service.findOne(mockTenant, 'missing')).rejects.toThrow(
        NotFoundException,
      );
    });
  });

  describe('update', () => {
    it('should map contract aliases onto schema fields', async () => {
      mockPrisma.nasabah.findFirst.mockResolvedValue(nasabahRow);
      mockPrisma.nasabah.update.mockResolvedValue({
        ...nasabahRow,
        namaNasabah: 'Ahmad Dahlan Putra',
        telp: '081299998888',
      });

      const result = await service.update(mockTenant, 'nas-id', {
        namaLengkap: 'Ahmad Dahlan Putra',
        noTelepon: '081299998888',
      });

      expect(mockPrisma.nasabah.update).toHaveBeenCalledWith(
        expect.objectContaining({
          data: expect.objectContaining({
            namaNasabah: 'Ahmad Dahlan Putra',
            telp: '081299998888',
          }),
        }),
      );
      expect(result.namaNasabah).toBe('Ahmad Dahlan Putra');
    });
  });

  describe('remove', () => {
    it('should soft-delete nasabah and user, then destroy assets', async () => {
      mockPrisma.nasabah.findFirst.mockResolvedValue({
        ...nasabahRow,
        user: { id: 'user-id' },
      });
      mockMedia.retirePhotosForOwner.mockResolvedValue(['pub-old']);
      mockPrisma.$transaction.mockImplementation(async (callback) =>
        callback({
          nasabah: { update: vi.fn() },
          user: { updateMany: vi.fn() },
        }),
      );

      const result = await service.remove(mockTenant, 'nas-id', 'admin-1');

      expect(result).toEqual({ id: 'nas-id' });
      expect(mockCloudinary.destroy).toHaveBeenCalledWith('pub-old');
    });
  });
});
