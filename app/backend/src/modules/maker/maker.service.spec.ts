import { Test, TestingModule } from '@nestjs/testing';
import { MakerService } from './maker.service.js';
import { PrismaService } from '../../infra/prisma/prisma.service.js';
import { HashingService } from '../../shared/hashing/hashing.service.js';
import { JwtService } from '@nestjs/jwt';
import { NotFoundException } from '@nestjs/common';
import { describe, it, expect, beforeEach, vi, Mock } from 'vitest';
import { Tenant } from '../../../generated/prisma/client.js';

describe('MakerService', () => {
  let service: MakerService;

  let mockPrismaService: {
    $transaction: Mock;
    nasabah: { count: Mock };
    kategoriSampah: { count: Mock };
    setorSampah: { count: Mock };
    hadiah: { count: Mock };
    user: { findFirst: Mock };
    tenant: { create: Mock; findUnique: Mock };
  };
  let mockHashingService: { hash: Mock; compare: Mock };
  let mockJwtService: { signAsync: Mock };

  const mockTenant: Tenant = {
    id: 'tenant-id',
    appKey: 'app-key',
    name: 'Bank Sampah Digital Hub',
    email: 'siswa1@smk.sch.id',
    namaSiswa: 'Budi Santoso',
    kelas: 'XII RPL 1',
    appName: 'Bank Sampah Digital Hub',
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
    deletedBy: null,
    restoredAt: null,
    restoredBy: null,
  };

  beforeEach(async () => {
    mockPrismaService = {
      $transaction: vi.fn(async (queries: Promise<unknown>[]) =>
        Promise.all(queries),
      ),
      nasabah: { count: vi.fn().mockResolvedValue(2) },
      kategoriSampah: { count: vi.fn().mockResolvedValue(4) },
      setorSampah: { count: vi.fn().mockResolvedValue(1) },
      hadiah: { count: vi.fn().mockResolvedValue(3) },
      user: { findFirst: vi.fn() },
      tenant: {
        create: vi.fn().mockResolvedValue(mockTenant),
        findUnique: vi.fn().mockResolvedValue(mockTenant),
      },
    };

    mockHashingService = {
      hash: vi.fn().mockResolvedValue('hashed-password'),
      compare: vi.fn().mockResolvedValue(true),
    };

    mockJwtService = {
      signAsync: vi.fn().mockResolvedValue('jwt-token'),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MakerService,
        { provide: PrismaService, useValue: mockPrismaService },
        { provide: HashingService, useValue: mockHashingService },
        { provide: JwtService, useValue: mockJwtService },
      ],
    }).compile();

    service = module.get<MakerService>(MakerService);
    vi.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('registerMaker', () => {
    it('should register app maker with new tenant and app key', async () => {
      mockPrismaService.user.findFirst.mockResolvedValue(null);
      mockPrismaService.$transaction.mockImplementation(async (callback) =>
        callback({
          user: {
            create: vi.fn().mockResolvedValue({
              id: 'user-id',
              username: 'maker@smk.sch.id',
            }),
          },
        }),
      );
      const dto = {
        email: 'maker@smk.sch.id',
        password: 'password123',
        namaSiswa: 'Siswa RPL',
        kelas: 'XII RPL 2',
        namaApp: 'Bank Sampah Digital',
      };

      const result = await service.registerMaker(dto);

      expect(result).toHaveProperty('appKey', 'app-key');
      expect(result.email).toBe(dto.email);
      expect(mockHashingService.hash).toHaveBeenCalledWith('password123');
    });
  });

  describe('loginMaker', () => {
    it('should login app maker and return token', async () => {
      mockPrismaService.user.findFirst.mockResolvedValue({
        id: 'user-id',
        username: 'maker@smk.sch.id',
        password: 'hashed-password',
        tenantId: 'tenant-id',
      });

      const result = await service.loginMaker({
        email: 'maker@smk.sch.id',
        password: 'password123',
      });

      expect(result).toHaveProperty('token', 'jwt-token');
      expect(result).toHaveProperty('appKey', 'app-key');
    });
  });

  describe('getProfile', () => {
    it('should return tenant profile with stats', async () => {
      mockPrismaService.$transaction.mockImplementation(
        async (queries: Promise<unknown>[]) => Promise.all(queries),
      );

      const result = await service.getProfile(mockTenant);

      expect(result).toEqual({
        id: 'tenant-id',
        email: 'siswa1@smk.sch.id',
        namaSiswa: 'Budi Santoso',
        kelas: 'XII RPL 1',
        namaApp: 'Bank Sampah Digital Hub',
        appKey: 'app-key',
        stats: {
          totalNasabah: 2,
          totalKategoriSampah: 4,
          totalTransaksiSetor: 1,
          totalHadiah: 3,
        },
      });
      expect(mockPrismaService.$transaction).toHaveBeenCalledOnce();
    });

    it('should fall back to tenant name when appName is null', async () => {
      mockPrismaService.$transaction.mockImplementation(
        async (queries: Promise<unknown>[]) => Promise.all(queries),
      );

      const result = await service.getProfile({
        ...mockTenant,
        appName: null,
      });

      expect(result.namaApp).toBe('Bank Sampah Digital Hub');
    });
  });

  describe('checkKey', () => {
    it('should return app key for a known maker email', async () => {
      mockPrismaService.user.findFirst.mockResolvedValue({
        username: 'siswa1@smk.sch.id',
        tenant: mockTenant,
        adminBank: { namaPengelola: 'Budi Santoso' },
      });

      const result = await service.checkKey('siswa1@smk.sch.id');

      expect(result).toEqual({
        email: 'siswa1@smk.sch.id',
        namaSiswa: 'Budi Santoso',
        namaApp: 'Bank Sampah Digital Hub',
        appKey: 'app-key',
      });
    });

    it('should throw NotFoundException for unknown email', async () => {
      mockPrismaService.user.findFirst.mockResolvedValue(null);

      await expect(service.checkKey('unknown@smk.sch.id')).rejects.toThrow(
        NotFoundException,
      );
    });
  });
});
