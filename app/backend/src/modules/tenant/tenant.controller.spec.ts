import { Test, TestingModule } from '@nestjs/testing';
import { TenantController } from './tenant.controller.js';
import { TenantService } from './tenant.service.js';
import { describe, it, expect, beforeEach, vi, Mock } from 'vitest';
import type { Request } from 'express';

describe('TenantController', () => {
  let controller: TenantController;
  let service: TenantService;

  let mockTenantService: {
    create: Mock;
    findAll: Mock;
    findOne: Mock;
    update: Mock;
    remove: Mock;
    restore: Mock;
  };

  beforeEach(async () => {
    mockTenantService = {
      create: vi.fn(),
      findAll: vi.fn(),
      findOne: vi.fn(),
      update: vi.fn(),
      remove: vi.fn(),
      restore: vi.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [TenantController],
      providers: [{ provide: TenantService, useValue: mockTenantService }],
    }).compile();

    controller = module.get<TenantController>(TenantController);
    service = module.get<TenantService>(TenantService);

    vi.clearAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of tenants with standardized message', async () => {
      const mockTenants = [{ id: '1', name: 'Tenant 1' }];
      mockTenantService.findAll.mockResolvedValue(mockTenants);

      const result = await controller.findAll();
      expect(result).toEqual({
        message: 'Tenants retrieved successfully',
        data: mockTenants,
      });
      expect(service.findAll).toHaveBeenCalled();
    });
  });

  describe('create', () => {
    it('should create a tenant and return success message', async () => {
      const dto = { name: 'Tenant 1', appKey: 'key-1' };
      const createdTenant = { id: '1', ...dto };
      mockTenantService.create.mockResolvedValue(createdTenant);

      const result = await controller.create(dto);
      expect(result).toEqual({
        message: 'Tenant created successfully',
        data: createdTenant,
      });
      expect(service.create).toHaveBeenCalledWith(dto);
    });
  });

  describe('restore', () => {
    it('should restore a soft-deleted tenant and pass user id', async () => {
      const restored = { id: '1', isActive: true };
      mockTenantService.restore.mockResolvedValue(restored);
      const mockReq = {
        user: { sub: 'user-1', tenantId: 'tenant-1' },
      } as Pick<Request, 'user'>;

      const result = await controller.restore('1', mockReq as Request);

      expect(result).toEqual({
        message: 'Tenant restored successfully',
        data: restored,
      });
      expect(service.restore).toHaveBeenCalledWith('1', 'user-1');
    });
  });

  describe('remove', () => {
    it('should soft-delete a tenant and pass user id', async () => {
      const removed = { id: '1', isActive: false };
      mockTenantService.remove.mockResolvedValue(removed);
      const mockReq = {
        user: { sub: 'user-1', tenantId: 'tenant-1' },
      } as Pick<Request, 'user'>;

      const result = await controller.remove('1', mockReq as Request);

      expect(result).toEqual({
        message: 'Tenant deleted successfully',
        data: removed,
      });
      expect(service.remove).toHaveBeenCalledWith('1', 'user-1');
    });
  });
});
