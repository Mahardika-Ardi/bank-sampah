import { Test, TestingModule } from '@nestjs/testing';
import { TenantService } from './tenant.service.js';
import { PrismaService } from '../../infra/prisma/prisma.service.js';
import { NotFoundException, ConflictException } from '@nestjs/common';
import { describe, it, expect, beforeEach, vi } from 'vitest';

describe('TenantService', () => {
  let service: TenantService;
  let prisma: PrismaService;

  const mockPrismaService = {
    tenant: {
      findUnique: vi.fn(),
      findMany: vi.fn(),
      create: vi.fn(),
      update: vi.fn(),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TenantService,
        { provide: PrismaService, useValue: mockPrismaService },
      ],
    }).compile();

    service = module.get<TenantService>(TenantService);
    prisma = module.get<PrismaService>(PrismaService);

    vi.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findByAppKey', () => {
    it('should return a tenant if appKey is valid and active', async () => {
      const mockTenant = {
        id: '1',
        appKey: 'test-key',
        isActive: true,
        deletedAt: null,
      };
      mockPrismaService.tenant.findUnique.mockResolvedValue(mockTenant);

      const result = await service.findByAppKey('test-key');
      expect(result).toEqual(mockTenant);
      expect(prisma.tenant.findUnique).toHaveBeenCalledWith({
        where: { appKey: 'test-key', deletedAt: null },
      });
    });

    it('should throw NotFoundException if tenant is not found or inactive', async () => {
      mockPrismaService.tenant.findUnique.mockResolvedValue(null);

      await expect(service.findByAppKey('invalid-key')).rejects.toThrow(
        NotFoundException,
      );
    });
  });

  describe('create', () => {
    it('should successfully create a new tenant', async () => {
      const dto = { name: 'Bank Sampah A', appKey: 'key-a', isActive: true };
      mockPrismaService.tenant.findUnique.mockResolvedValue(null);
      mockPrismaService.tenant.create.mockResolvedValue({ id: '1', ...dto });

      const result = await service.create(dto);
      expect(result).toHaveProperty('id', '1');
      expect(prisma.tenant.create).toHaveBeenCalledWith({ data: dto });
    });

    it('should throw ConflictException if appKey already exists', async () => {
      const dto = {
        name: 'Bank Sampah A',
        appKey: 'existing-key',
        isActive: true,
      };
      mockPrismaService.tenant.findUnique.mockResolvedValue({
        id: '1',
        ...dto,
      });

      await expect(service.create(dto)).rejects.toThrow(ConflictException);
    });
  });
});
