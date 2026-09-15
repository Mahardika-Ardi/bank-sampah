import { Test, TestingModule } from '@nestjs/testing';
import { TenantController } from './tenant.controller.js';
import { TenantService } from './tenant.service.js';
import { describe, it, expect, beforeEach, vi } from 'vitest';

describe('TenantController', () => {
  let controller: TenantController;
  let service: TenantService;

  const mockTenantService = {
    create: vi.fn(),
    findAll: vi.fn(),
    findOne: vi.fn(),
    update: vi.fn(),
    remove: vi.fn(),
  };

  beforeEach(async () => {
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

      const result = await controller.create(dto as any);
      expect(result).toEqual({
        message: 'Tenant created successfully',
        data: createdTenant,
      });
      expect(service.create).toHaveBeenCalledWith(dto);
    });
  });
});
