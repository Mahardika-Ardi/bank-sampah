import { Test, TestingModule } from '@nestjs/testing';
import { SeedController } from './seed.controller.js';
import { SeedService } from './seed.service.js';
import { describe, it, expect, beforeEach, vi, Mock } from 'vitest';
import type { Request } from 'express';
import { Tenant } from '../../../generated/prisma/client.js';

describe('SeedController', () => {
  let controller: SeedController;
  let mockSeedService: { runSeed: Mock };

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
    mockSeedService = {
      runSeed: vi.fn().mockResolvedValue({
        admin: { username: 'admin_banksampah', password: 'admin123', namaUnit: 'Bank Sampah Asri Jaya' },
        nasabah1: { username: 'nasabah_budi', password: 'password123', namaNasabah: 'Budi Santoso', saldoPoin: 150 },
        nasabah2: { username: 'nasabah_siti', password: 'password123', namaNasabah: 'Siti Aminah', saldoPoin: 80 },
        kategoriSampahCount: 4,
        hadiahKatalogCount: 3,
      }),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [SeedController],
      providers: [{ provide: SeedService, useValue: mockSeedService }],
    }).compile();

    controller = module.get<SeedController>(SeedController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should trigger database seeding and return success response', async () => {
    const mockReq = { tenant: mockTenant } as Pick<Request, 'tenant'>;
    const result = await controller.seedDatabase(mockReq as Request);

    expect(result).toEqual({
      message: 'Dummy sample data Bank Sampah berhasil dibuat!',
      data: {
        admin: { username: 'admin_banksampah', password: 'admin123', namaUnit: 'Bank Sampah Asri Jaya' },
        nasabah1: { username: 'nasabah_budi', password: 'password123', namaNasabah: 'Budi Santoso', saldoPoin: 150 },
        nasabah2: { username: 'nasabah_siti', password: 'password123', namaNasabah: 'Siti Aminah', saldoPoin: 80 },
        kategoriSampahCount: 4,
        hadiahKatalogCount: 3,
      },
    });
    expect(mockSeedService.runSeed).toHaveBeenCalledWith(mockTenant);
  });
});
