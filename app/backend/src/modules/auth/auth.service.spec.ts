import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service.js';
import { PrismaService } from '../../infra/prisma/prisma.service.js';
import { HashingService } from '../../shared/hashing/hashing.service.js';
import { JwtService } from '@nestjs/jwt';
import { LoggerService } from '../../infra/logger/logger.service.js';
import { RedisService } from '../../infra/redis/redis.service.js';
import { describe, it, expect, beforeEach, vi, Mock } from 'vitest';
import { UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Tenant } from '../../../generated/prisma/client.js';

describe('AuthService', () => {
  let service: AuthService;
  let mockPrismaService: {
    user: { findFirst: Mock };
    tenant: { create: Mock; findUnique: Mock };
    $transaction: Mock;
  };
  let mockHashingService: { hash: Mock; compare: Mock };
  let mockJwtService: { signAsync: Mock; verifyAsync: Mock };

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
      verifyAsync: vi.fn(),
    };

    const mockConfigService = {
      get: vi.fn((key: string) => {
        const values: Record<string, unknown> = {
          'auth.refreshExpiresIn': '7d',
          'cookie.refreshTokenName': 'refresh_token',
        };
        return values[key];
      }),
      getOrThrow: vi.fn((key: string) => {
        if (key === 'auth.refreshSecret') return 'refresh-secret';
        throw new Error(`Unexpected key: ${key}`);
      }),
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
        {
          provide: RedisService,
          useValue: { get: vi.fn(), set: vi.fn(), delByPrefix: vi.fn() },
        },
        { provide: ConfigService, useValue: mockConfigService },
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

  describe('refresh', () => {
    it('should issue a new access token for a valid refresh token', async () => {
      mockJwtService.verifyAsync = vi
        .fn()
        .mockResolvedValue({ sub: 'user-id', tenantId: 'tenant-id', type: 'refresh' });
      mockPrismaService.user.findFirst.mockResolvedValue({
        id: 'user-id',
        username: 'nasabah_test',
        role: 'nasabah',
      });

      const result = await service.refresh('valid-refresh', 'tenant-id');

      expect(result).toMatchObject({
        id: 'user-id',
        username: 'nasabah_test',
        token: 'jwt-token',
      });
      expect(result).not.toHaveProperty('refreshToken');
    });

    it('should reject invalid refresh tokens', async () => {
      mockJwtService.verifyAsync = vi.fn().mockRejectedValue(new Error('bad'));

      await expect(service.refresh('bad-token', 'tenant-id')).rejects.toThrow(
        UnauthorizedException,
      );
    });

    it('should reject refresh tokens from another tenant', async () => {
      mockJwtService.verifyAsync = vi.fn().mockResolvedValue({
        sub: 'user-id',
        tenantId: 'other-tenant',
        type: 'refresh',
      });

      await expect(
        service.refresh('foreign-token', 'tenant-id'),
      ).rejects.toThrow(UnauthorizedException);
    });
  });
});
