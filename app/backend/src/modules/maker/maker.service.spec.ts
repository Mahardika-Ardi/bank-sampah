import { Test, TestingModule } from '@nestjs/testing';
import { MakerService } from './maker.service.js';
import { PrismaService } from '../../infra/prisma/prisma.service.js';
import { HashingService } from '../../shared/hashing/hashing.service.js';
import { JwtService } from '@nestjs/jwt';
import { LoggerService } from '../../infra/logger/logger.service.js';
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
    tenant: { create: Mock; findUnique: Mock; findMany: Mock };
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
        findMany: vi.fn().mockResolvedValue([]),
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
        {
          provide: LoggerService,
          useValue: { log: vi.fn(), debug: vi.fn() },
        },
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
      const userCreate: Mock = vi.fn().mockResolvedValue({
        id: 'user-id',
        username: 'maker@smk.sch.id',
      });
      mockPrismaService.$transaction.mockImplementation(async (callback) =>
        callback({ user: { create: userCreate } }),
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

      const createArg = userCreate.mock.calls[0][0] as {
        data: {
          tenantId: string;
          adminBank: { create: Record<string, unknown> };
        };
      };
      expect(createArg.data.tenantId).toBe('tenant-id');
      expect(createArg.data.adminBank.create).not.toHaveProperty('tenantId');
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

  describe('listBanks', () => {
    it('should return only safe columns for active tenants', async () => {
      mockPrismaService.tenant.findMany.mockResolvedValue([
        {
          id: 'tenant-id',
          appName: 'Bank Sampah Digital Hub',
          name: 'Bank Sampah Digital Hub',
          appKey: 'app-key',
        },
      ]);

      const result = await service.listBanks();

      expect(result).toEqual([
        {
          id: 'tenant-id',
          namaApp: 'Bank Sampah Digital Hub',
          appKey: 'app-key',
        },
      ]);
      expect(mockPrismaService.tenant.findMany).toHaveBeenCalledWith({
        where: { deletedAt: null, isActive: true },
        orderBy: { appName: 'asc' },
        select: {
          id: true,
          appName: true,
          name: true,
          appKey: true,
        },
      });
    });

    it('should fall back to tenant name when appName is null', async () => {
      mockPrismaService.tenant.findMany.mockResolvedValue([
        {
          id: 'tenant-id',
          appName: null,
          name: 'Bank Sampah Digital Hub',
          appKey: 'app-key',
        },
      ]);

      const result = await service.listBanks();

      expect(result[0].namaApp).toBe('Bank Sampah Digital Hub');
    });

    it('should return an empty list when no active tenants exist', async () => {
      mockPrismaService.tenant.findMany.mockResolvedValue([]);

      await expect(service.listBanks()).resolves.toEqual([]);
    });
  });
});
