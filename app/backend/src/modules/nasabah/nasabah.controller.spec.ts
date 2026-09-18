import { Test, TestingModule } from '@nestjs/testing';
import { NasabahController } from './nasabah.controller.js';
import { NasabahService } from './nasabah.service.js';
import { describe, it, expect, beforeEach, vi, Mock } from 'vitest';
import type { Request } from 'express';
import { JwtAuthGuard } from '../../shared/guards/jwt-auth.guard.js';
import { RolesGuard } from '../auth/guard/role.guard.js';
import { Tenant } from '../../../generated/prisma/client.js';

describe('NasabahController', () => {
  let controller: NasabahController;
  let service: NasabahService;

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
      controllers: [NasabahController],
      providers: [{ provide: NasabahService, useValue: mockService }],
    })
      .overrideGuard(JwtAuthGuard)
      .useValue({ canActivate: () => true })
      .overrideGuard(RolesGuard)
      .useValue({ canActivate: () => true })
      .compile();

    controller = module.get<NasabahController>(NasabahController);
    service = module.get<NasabahService>(NasabahService);
    vi.clearAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('findAll should return list with message', async () => {
    mockService.findAll.mockResolvedValue([{ id: 'nas-id' }]);

    const result = await controller.findAll(mockReq as Request);

    expect(service.findAll).toHaveBeenCalledWith(mockTenant);
    expect(result.message).toContain('Customer list');
  });

  it('create should pass dto and file with message', async () => {
    const dto = {
      username: 'nasabah_dewi',
      password: 'password123',
      namaNasabah: 'Dewi Lestari',
      alamat: 'Jl. Kenanga No. 5',
      telp: '081987654321',
    };
    mockService.create.mockResolvedValue({ id: 'nas-id' });
    const file = { buffer: Buffer.from('img') } as Express.Multer.File;

    const result = await controller.create(mockReq as Request, dto, file);

    expect(service.create).toHaveBeenCalledWith(mockTenant, dto, file);
      expect(result.message).toContain('added successfully');
  });

  it('update should pass actor sub for audit trail', async () => {
    mockService.update.mockResolvedValue({ id: 'nas-id' });

    await controller.update(mockReq as Request, 'nas-id', { alamat: 'Baru' }, undefined);

    expect(service.update).toHaveBeenCalledWith(
      mockTenant,
      'nas-id',
      { alamat: 'Baru' },
      undefined,
      'admin-1',
    );
  });

  it('remove should return deleted id', async () => {
    mockService.remove.mockResolvedValue({ id: 'nas-id' });

    const result = await controller.remove(mockReq as Request, 'nas-id');

    expect(service.remove).toHaveBeenCalledWith(mockTenant, 'nas-id', 'admin-1');
    expect(result.data).toEqual({ id: 'nas-id' });
  });
});
