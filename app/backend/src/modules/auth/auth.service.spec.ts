import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service.js';
import { PrismaService } from '../../infra/prisma/prisma.service.js';
import { HashingService } from '../../shared/hashing/hashing.service.js';
import { JwtService } from '@nestjs/jwt';
import { LoggerService } from '../../infra/logger/logger.service.js';
import { describe, it, expect, beforeEach, vi, Mock } from 'vitest';
import { Tenant } from '../../../generated/prisma/client.js';

describe('AuthService', () => {
  let service: AuthService;
  let mockPrismaService: {
    user: { findFirst: Mock };
    tenant: { create: Mock; findUnique: Mock };
    $transaction: Mock;
  };
  let mockHashingService: { hash: Mock; compare: Mock };
  let mockJwtService: { signAsync: Mock };

  const mockTenant: Tenant = {
    id: 'tenant-id',
    appKey: 'mock-app-key',
    name: 'Test App',
    email: 'maker@smk.sch.id',
    namaSiswa: 'Siswa RPL',
    kelas: 'XII RPL 2',
    appName: 'Test App',
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
      user: {
        findFirst: vi.fn(),
      },
      tenant: {
        create: vi.fn().mockResolvedValue(mockTenant),
        findUnique: vi.fn().mockResolvedValue(mockTenant),
      },
      $transaction: vi.fn(async (callback) =>
        callback({
          user: {
            create: vi.fn().mockImplementation(async (args) => ({
              id: 'user-id',
              username: args.data.username,
              role: args.data.role,
              tenantId: 'tenant-id',
              nasabah: args.data.nasabah
                ? { id: 'nasabah-id', namaNasabah: 'Test Nasabah' }
                : null,
              adminBank: args.data.adminBank
                ? { id: 'admin-id', namaUnit: 'Test Unit' }
                : null,
            })),
          },
        }),
      ),
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
        AuthService,
        { provide: PrismaService, useValue: mockPrismaService },
        { provide: HashingService, useValue: mockHashingService },
        { provide: JwtService, useValue: mockJwtService },
        {
          provide: LoggerService,
          useValue: { log: vi.fn(), debug: vi.fn() },
        },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
    vi.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should successfully register nasabah', async () => {
    mockPrismaService.user.findFirst.mockResolvedValue(null);
    const dto = {
      username: 'nasabah_test',
      password: 'password123',
      namaNasabah: 'Budi',
      alamat: 'Jl. Merdeka No. 10',
      telp: '08123456789',
    };

    const result = await service.registerNasabah(mockTenant, dto);

    expect(result).toHaveProperty('id', 'user-id');
    expect(result.username).toBe('nasabah_test');
  });

  it('should omit tenantId from nested nasabah create', async () => {
    mockPrismaService.user.findFirst.mockResolvedValue(null);
    const userCreate: Mock = vi.fn().mockResolvedValue({
      id: 'user-id',
      username: 'nasabah_test',
      role: 'nasabah',
      nasabah: { id: 'nasabah-id' },
    });
    mockPrismaService.$transaction.mockImplementation(async (callback) =>
      callback({ user: { create: userCreate } }),
    );

    await service.registerNasabah(mockTenant, {
      username: 'nasabah_test',
      password: 'password123',
      namaNasabah: 'Budi',
      alamat: 'Jl. Merdeka No. 10',
      telp: '08123456789',
    });

    const createArg = userCreate.mock.calls[0][0] as {
      data: {
        tenantId: string;
        nasabah: { create: Record<string, unknown> };
      };
    };
    expect(createArg.data.tenantId).toBe('tenant-id');
    expect(createArg.data.nasabah.create).not.toHaveProperty('tenantId');
  });
});
