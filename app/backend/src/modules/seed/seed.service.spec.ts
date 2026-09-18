import { Test, TestingModule } from '@nestjs/testing';
import { SeedService } from './seed.service.js';
import { PrismaService } from '../../infra/prisma/prisma.service.js';
import { HashingService } from '../../shared/hashing/hashing.service.js';
import { LoggerService } from '../../infra/logger/logger.service.js';
import { describe, it, expect, beforeEach, vi, Mock } from 'vitest';
import { BadRequestException } from '@nestjs/common';
import { Tenant } from '../../../generated/prisma/client.js';

describe('SeedService', () => {
  let service: SeedService;
  let mockPrismaService: { $transaction: Mock };
  let mockHashingService: { hash: Mock };
  let userUpsert: Mock;
  let setorCreate: Mock;

  const mockTenant: Tenant = {
    id: 'tenant-id',
    name: 'Bank Sampah Asri Jaya',
    appKey: 'mock-app-key',
    email: 'siswa1@smk.sch.id',
    namaSiswa: 'Budi Santoso',
    kelas: 'XII RPL 1',
    appName: 'Bank Sampah Asri Jaya',
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
    deletedBy: null,
    restoredAt: null,
    restoredBy: null,
  };

  beforeEach(async () => {
    userUpsert = vi.fn().mockResolvedValue({
      id: 'user-id',
      username: 'admin_banksampah',
      role: 'admin_bank',
      adminBank: { id: 'admin-id' },
      nasabah: { id: 'nasabah-id' },
    });
    setorCreate = vi.fn().mockResolvedValue({ id: 'setor-id' });
    mockPrismaService = {
      $transaction: vi.fn(async (callback) =>
        callback({
          user: {
            upsert: userUpsert,
          },
          kategoriSampah: {
            upsert: vi.fn().mockResolvedValue({ id: 'cat-id', namaKategori: 'Test' }),
          },
          hadiah: {
            upsert: vi.fn().mockResolvedValue({ id: 'rew-id', namaHadiah: 'Test' }),
            findFirst: vi.fn().mockResolvedValue({ id: 'rew-id' }),
          },
          setorSampah: {
            findFirst: vi.fn().mockResolvedValue(null),
            create: setorCreate,
          },
          penukaranPoin: {
            findFirst: vi.fn().mockResolvedValue(null),
            create: vi.fn().mockResolvedValue({ id: 'penukaran-id' }),
          },
        }),
      ),
    };

    mockHashingService = {
      hash: vi.fn().mockResolvedValue('hashed-password'),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SeedService,
        { provide: PrismaService, useValue: mockPrismaService },
        { provide: HashingService, useValue: mockHashingService },
        {
          provide: LoggerService,
          useValue: { log: vi.fn(), debug: vi.fn() },
        },
      ],
    }).compile();

    service = module.get<SeedService>(SeedService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should successfully run database seeding when not in production', async () => {
    const originalEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = 'development';

    const result = await service.runSeed(mockTenant);

    expect(result).toHaveProperty('admin');
    expect(result).toHaveProperty('nasabah1');
    expect(result).toHaveProperty('nasabah2');
    expect(result.kategoriSampahCount).toBe(4);
    expect(result.hadiahKatalogCount).toBe(3);
    expect(mockPrismaService.$transaction).toHaveBeenCalledOnce();

    process.env.NODE_ENV = originalEnv;
  });

  it('should omit tenantId from nested creates (Prisma composite-FK rule)', async () => {
    const originalEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = 'development';

    await service.runSeed(mockTenant);

    const adminCreate = userUpsert.mock.calls[0][0] as {
      create: { tenantId: string; adminBank: { create: Record<string, unknown> } };
    };
    expect(adminCreate.create.tenantId).toBe('tenant-id');
    expect(adminCreate.create.adminBank.create).not.toHaveProperty('tenantId');

    const setorArg = setorCreate.mock.calls[0][0] as {
      data: {
        tenantId: string;
        detail: { create: Record<string, unknown>[] };
      };
    };
    expect(setorArg.data.tenantId).toBe('tenant-id');
    for (const item of setorArg.data.detail.create) {
      expect(item).not.toHaveProperty('tenantId');
    }

    process.env.NODE_ENV = originalEnv;
  });

  it('should throw BadRequestException if NODE_ENV is production', async () => {
    const originalEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = 'production';

    await expect(service.runSeed(mockTenant)).rejects.toThrow(BadRequestException);
    expect(mockPrismaService.$transaction).not.toHaveBeenCalled();

    process.env.NODE_ENV = originalEnv;
  });
});
