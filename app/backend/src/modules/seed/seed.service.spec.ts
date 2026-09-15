import { Test, TestingModule } from '@nestjs/testing';
import { SeedService } from './seed.service.js';
import { PrismaService } from '../../infra/prisma/prisma.service.js';
import { HashingService } from '../../shared/hashing/hashing.service.js';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { BadRequestException } from '@nestjs/common';

describe('SeedService', () => {
  let service: SeedService;
  let mockPrismaService: any;
  let mockHashingService: any;

  beforeEach(async () => {
    mockPrismaService = {
      $transaction: vi.fn(async (callback) =>
        callback({
          tenant: {
            upsert: vi.fn().mockResolvedValue({
              id: 'tenant-id',
              name: 'Bank Sampah Utama',
              appKey: 'default-tenant-key',
              isActive: true,
            }),
          },
          user: {
            upsert: vi.fn().mockResolvedValue({
              id: 'user-id',
              username: 'admin',
              role: 'admin_bank',
            }),
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

    const result = await service.runSeed();

    expect(result).toEqual({
      message: 'Database seeded successfully',
      tenant: {
        id: 'tenant-id',
        name: 'Bank Sampah Utama',
        appKey: 'default-tenant-key',
      },
      user: { id: 'user-id', username: 'admin', role: 'admin_bank' },
    });
    expect(mockHashingService.hash).toHaveBeenCalledWith('Admin123!');
    expect(mockPrismaService.$transaction).toHaveBeenCalledOnce();

    process.env.NODE_ENV = originalEnv;
  });

  it('should throw BadRequestException if NODE_ENV is production', async () => {
    const originalEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = 'production';

    await expect(service.runSeed()).rejects.toThrow(BadRequestException);
    expect(mockPrismaService.$transaction).not.toHaveBeenCalled();

    process.env.NODE_ENV = originalEnv;
  });
});
