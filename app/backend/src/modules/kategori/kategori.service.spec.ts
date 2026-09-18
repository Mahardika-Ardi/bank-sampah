import { Test, TestingModule } from '@nestjs/testing';
import { KategoriService } from './kategori.service.js';
import { PrismaService } from '../../infra/prisma/prisma.service.js';
import { LoggerService } from '../../infra/logger/logger.service.js';
import { MediaService } from '../../infra/media/media.service.js';
import { CloudinaryService } from '../../infra/cloudinary/cloudinary.service.js';
import { NotFoundException, ConflictException } from '@nestjs/common';
import { describe, it, expect, beforeEach, vi, Mock } from 'vitest';
import { Tenant, JenisSampah } from '../../../generated/prisma/client.js';

describe('KategoriService', () => {
  let service: KategoriService;

  let mockPrisma: {
    kategoriSampah: { findFirst: Mock; findMany: Mock; create: Mock; update: Mock };
    $transaction: Mock;
  };
  let mockMedia: {
    createPhoto: Mock;
    replacePhoto: Mock;
    retirePhotosForOwner: Mock;
  };
  let mockCloudinary: { upload: Mock; destroy: Mock };

  const mockTenant = { id: 'tenant-id' } as Tenant;

  const kategoriRow = {
    id: 'kat-id',
    tenantId: 'tenant-id',
    namaKategori: 'Botol Plastik PET',
    hargaPerKg: '3500',
    poinPerKg: '10',
    jenis: JenisSampah.plastik,
    foto: null,
  };

  beforeEach(async () => {
    mockPrisma = {
      kategoriSampah: {
        findFirst: vi.fn(),
        findMany: vi.fn().mockResolvedValue([]),
        create: vi.fn(),
        update: vi.fn(),
      },
      $transaction: vi.fn(async (callback) =>
        callback({
          kategoriSampah: {
            create: mockPrisma.kategoriSampah.create,
            update: mockPrisma.kategoriSampah.update,
          },
        }),
      ),
    };
    mockMedia = {
      createPhoto: vi.fn(),
      replacePhoto: vi.fn(),
      retirePhotosForOwner: vi.fn().mockResolvedValue([]),
    };
    mockCloudinary = {
      upload: vi.fn(),
      destroy: vi.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        KategoriService,
        { provide: PrismaService, useValue: mockPrisma },
        { provide: MediaService, useValue: mockMedia },
        { provide: CloudinaryService, useValue: mockCloudinary },
        {
          provide: LoggerService,
          useValue: { log: vi.fn(), debug: vi.fn() },
        },
      ],
    }).compile();

    service = module.get<KategoriService>(KategoriService);
    vi.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    const dto = {
      namaKategori: 'Botol Plastik PET',
      hargaPerKg: 3500,
      poinPerKg: 10,
      jenis: JenisSampah.plastik,
    };

    it('should create without photo and convert decimals to numbers', async () => {
      mockPrisma.kategoriSampah.findFirst.mockResolvedValue(null);
      mockPrisma.kategoriSampah.create.mockResolvedValue(kategoriRow);

      const result = await service.create(mockTenant, dto);

      expect(result).toEqual({
        id: 'kat-id',
        namaKategori: 'Botol Plastik PET',
        hargaPerKg: 3500,
        poinPerKg: 10,
        jenis: 'plastik',
        foto: null,
      });
      expect(mockCloudinary.upload).not.toHaveBeenCalled();
      expect(mockMedia.createPhoto).not.toHaveBeenCalled();
    });

    it('should upload photo and register media when file is provided', async () => {
      mockPrisma.kategoriSampah.findFirst.mockResolvedValue(null);
      mockPrisma.kategoriSampah.create.mockResolvedValue({
        ...kategoriRow,
        foto: 'https://cdn.test/foto.jpg',
      });
      mockCloudinary.upload.mockResolvedValue({
        url: 'https://cdn.test/foto.jpg',
        publicId: 'pub-1',
        bytes: 100,
        format: 'jpg',
      });
      const file = {
        buffer: Buffer.from('img'),
        mimetype: 'image/jpeg',
        size: 100,
      } as Express.Multer.File;

      const result = await service.create(mockTenant, dto, file);

      expect(mockCloudinary.upload).toHaveBeenCalledOnce();
      expect(mockMedia.createPhoto).toHaveBeenCalledOnce();
      expect(result.foto).toBe('https://cdn.test/foto.jpg');
    });

    it('should throw ConflictException on duplicate name', async () => {
      mockPrisma.kategoriSampah.findFirst.mockResolvedValue(kategoriRow);

      await expect(service.create(mockTenant, dto)).rejects.toThrow(
        ConflictException,
      );
    });

    it('should compensate the upload when the transaction fails', async () => {
      mockPrisma.kategoriSampah.findFirst.mockResolvedValue(null);
      mockCloudinary.upload.mockResolvedValue({
        url: 'https://cdn.test/foto.jpg',
        publicId: 'pub-orphan',
        bytes: 100,
        format: 'jpg',
      });
      mockPrisma.$transaction.mockRejectedValue(new Error('db down'));
      const file = {
        buffer: Buffer.from('img'),
        mimetype: 'image/jpeg',
        size: 100,
      } as Express.Multer.File;

      await expect(service.create(mockTenant, dto, file)).rejects.toThrow(
        'db down',
      );
      expect(mockCloudinary.destroy).toHaveBeenCalledWith('pub-orphan');
    });
  });

  describe('findAll / findOne', () => {
    it('should list categories', async () => {
      mockPrisma.kategoriSampah.findMany.mockResolvedValue([kategoriRow]);

      const result = await service.findAll(mockTenant);

      expect(result).toHaveLength(1);
      expect(
        mockPrisma.kategoriSampah.findMany,
      ).toHaveBeenCalledWith(
        expect.objectContaining({
          where: expect.objectContaining({ tenantId: 'tenant-id' }),
        }),
      );
    });

    it('should throw NotFoundException for unknown id', async () => {
      mockPrisma.kategoriSampah.findFirst.mockResolvedValue(null);

      await expect(service.findOne(mockTenant, 'missing')).rejects.toThrow(
        NotFoundException,
      );
    });
  });

  describe('update', () => {
    it('should replace photo via media service when file is provided', async () => {
      mockPrisma.kategoriSampah.findFirst.mockResolvedValue(kategoriRow);
      mockPrisma.kategoriSampah.update.mockResolvedValue({
        ...kategoriRow,
        foto: 'https://cdn.test/new.jpg',
      });
      mockCloudinary.upload.mockResolvedValue({
        url: 'https://cdn.test/new.jpg',
        publicId: 'pub-new',
        bytes: 100,
        format: 'jpg',
      });
      const file = {
        buffer: Buffer.from('img'),
        mimetype: 'image/jpeg',
        size: 100,
      } as Express.Multer.File;

      const result = await service.update(mockTenant, 'kat-id', {}, file, 'user-1');

      expect(mockMedia.replacePhoto).toHaveBeenCalledOnce();
      expect(result.foto).toBe('https://cdn.test/new.jpg');
    });

    it('should throw ConflictException when renaming to an existing name', async () => {
      mockPrisma.kategoriSampah.findFirst
        .mockResolvedValueOnce(kategoriRow)
        .mockResolvedValueOnce({ ...kategoriRow, id: 'other-id' });

      await expect(
        service.update(mockTenant, 'kat-id', { namaKategori: 'Taken' }),
      ).rejects.toThrow(ConflictException);
    });
  });

  describe('remove', () => {
    it('should soft-delete and destroy stored assets', async () => {
      mockPrisma.kategoriSampah.findFirst.mockResolvedValue(kategoriRow);
      mockMedia.retirePhotosForOwner.mockResolvedValue(['pub-old']);

      const result = await service.remove(mockTenant, 'kat-id', 'user-1');

      expect(result).toEqual({ id: 'kat-id' });
      expect(mockCloudinary.destroy).toHaveBeenCalledWith('pub-old');
    });

    it('should throw NotFoundException for unknown id', async () => {
      mockPrisma.kategoriSampah.findFirst.mockResolvedValue(null);

      await expect(service.remove(mockTenant, 'missing')).rejects.toThrow(
        NotFoundException,
      );
    });
  });
});
