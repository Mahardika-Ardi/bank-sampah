import { Test, TestingModule } from '@nestjs/testing';
import { KategoriController } from './kategori.controller.js';
import { KategoriService } from './kategori.service.js';
import { describe, it, expect, beforeEach, vi, Mock } from 'vitest';
import type { Request } from 'express';
import { JwtAuthGuard } from '../../shared/guards/jwt-auth.guard.js';
import { RolesGuard } from '../auth/guard/role.guard.js';
import { Tenant, JenisSampah } from '../../../generated/prisma/client.js';

describe('KategoriController', () => {
  let controller: KategoriController;
  let service: KategoriService;

  let mockService: {
    create: Mock;
    findAll: Mock;
    findOne: Mock;
    update: Mock;
    remove: Mock;
  };

  const mockTenant = { id: 'tenant-id' } as Tenant;

  beforeEach(async () => {
    mockService = {
      create: vi.fn(),
      findAll: vi.fn(),
      findOne: vi.fn(),
      update: vi.fn(),
      remove: vi.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [KategoriController],
      providers: [{ provide: KategoriService, useValue: mockService }],
    })
      .overrideGuard(JwtAuthGuard)
      .useValue({ canActivate: () => true })
      .overrideGuard(RolesGuard)
      .useValue({ canActivate: () => true })
      .compile();

    controller = module.get<KategoriController>(KategoriController);
    service = module.get<KategoriService>(KategoriService);
    vi.clearAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('findAll should return list with message', async () => {
    const rows = [{ id: 'kat-id' }];
    mockService.findAll.mockResolvedValue(rows);
    const req = { tenant: mockTenant } as Pick<Request, 'tenant'>;

    const result = await controller.findAll(req as Request);

    expect(service.findAll).toHaveBeenCalledWith(mockTenant);
    expect(result.data).toEqual(rows);
  });

  it('create should pass dto and file to service', async () => {
    const dto = {
      namaKategori: 'Kaleng',
      hargaPerKg: 12000,
      poinPerKg: 30,
      jenis: JenisSampah.logam,
    };
    const created = { id: 'kat-id', ...dto };
    mockService.create.mockResolvedValue(created);
    const req = { tenant: mockTenant } as Pick<Request, 'tenant'>;
    const file = { buffer: Buffer.from('img') } as Express.Multer.File;

    const result = await controller.create(req as Request, dto, file);

    expect(service.create).toHaveBeenCalledWith(mockTenant, dto, file);
      expect(result.message).toContain('saved successfully');
  });

  it('update should pass actor sub for audit trail', async () => {
    const updated = { id: 'kat-id' };
    mockService.update.mockResolvedValue(updated);
    const req = {
      tenant: mockTenant,
      user: { sub: 'admin-1', tenantId: 'tenant-id' },
    } as Pick<Request, 'tenant' | 'user'>;

    const result = await controller.update(req as Request, 'kat-id', {}, undefined);

    expect(service.update).toHaveBeenCalledWith(
      mockTenant,
      'kat-id',
      {},
      undefined,
      'admin-1',
    );
    expect(result.data).toEqual(updated);
  });

  it('remove should return deleted id', async () => {
    mockService.remove.mockResolvedValue({ id: 'kat-id' });
    const req = {
      tenant: mockTenant,
      user: { sub: 'admin-1', tenantId: 'tenant-id' },
    } as Pick<Request, 'tenant' | 'user'>;

    const result = await controller.remove(req as Request, 'kat-id');

    expect(service.remove).toHaveBeenCalledWith(mockTenant, 'kat-id', 'admin-1');
    expect(result.data).toEqual({ id: 'kat-id' });
  });
});
