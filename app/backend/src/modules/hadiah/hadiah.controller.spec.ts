import { Test, TestingModule } from '@nestjs/testing';
import { HadiahController } from './hadiah.controller.js';
import { HadiahService } from './hadiah.service.js';
import { describe, it, expect, beforeEach, vi, Mock } from 'vitest';
import type { Request } from 'express';
import { JwtAuthGuard } from '../../shared/guards/jwt-auth.guard.js';
import { RolesGuard } from '../auth/guard/role.guard.js';
import { Tenant } from '../../../generated/prisma/client.js';

describe('HadiahController', () => {
  let controller: HadiahController;
  let service: HadiahService;

  let mockService: {
    create: Mock;
    findAll: Mock;
    findOne: Mock;
    update: Mock;
    remove: Mock;
  };

  const mockTenant = { id: 'tenant-id' } as Tenant;
  const mockReq = {
    tenant: mockTenant,
    user: { sub: 'admin-1', tenantId: 'tenant-id' },
  } as Pick<Request, 'tenant' | 'user'>;

  beforeEach(async () => {
    mockService = {
      create: vi.fn(),
      findAll: vi.fn(),
      findOne: vi.fn(),
      update: vi.fn(),
      remove: vi.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [HadiahController],
      providers: [{ provide: HadiahService, useValue: mockService }],
    })
      .overrideGuard(JwtAuthGuard)
      .useValue({ canActivate: () => true })
      .overrideGuard(RolesGuard)
      .useValue({ canActivate: () => true })
      .compile();

    controller = module.get<HadiahController>(HadiahController);
    service = module.get<HadiahService>(HadiahService);
    vi.clearAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('findAll should work on x-app-key only', async () => {
    mockService.findAll.mockResolvedValue([{ id: 'rew-id' }]);

    const result = await controller.findAll(mockReq as Request);

    expect(service.findAll).toHaveBeenCalledWith(mockTenant);
    expect(result.message).toContain('retrieved successfully');
  });

  it('create should pass dto and file with message', async () => {
    const dto = { namaHadiah: 'Gula', poinDibutuhkan: 60, stok: 30 };
    mockService.create.mockResolvedValue({ id: 'rew-id' });
    const file = { buffer: Buffer.from('img') } as Express.Multer.File;

    const result = await controller.create(mockReq as Request, dto, file);

    expect(service.create).toHaveBeenCalledWith(mockTenant, dto, file);
    expect(result.message).toContain('added successfully');
  });

  it('remove should return deleted id', async () => {
    mockService.remove.mockResolvedValue({ id: 'rew-id' });

    const result = await controller.remove(mockReq as Request, 'rew-id');

    expect(service.remove).toHaveBeenCalledWith(mockTenant, 'rew-id', 'admin-1');
    expect(result.data).toEqual({ id: 'rew-id' });
  });
});
