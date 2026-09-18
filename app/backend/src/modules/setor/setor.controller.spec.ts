import { Test, TestingModule } from '@nestjs/testing';
import { SetorController } from './setor.controller.js';
import { SetorService } from './setor.service.js';
import { describe, it, expect, beforeEach, vi, Mock } from 'vitest';
import type { Request } from 'express';
import { JwtAuthGuard } from '../../shared/guards/jwt-auth.guard.js';
import { RolesGuard } from '../auth/guard/role.guard.js';
import { Tenant, UserRole } from '../../../generated/prisma/client.js';

describe('SetorController', () => {
  let controller: SetorController;
  let service: SetorService;

  let mockService: {
    submit: Mock;
    mySetor: Mock;
    adminList: Mock;
    receipt: Mock;
    verify: Mock;
  };

  const mockTenant = { id: 'tenant-id' } as Tenant;
  const nasabahReq = {
    tenant: mockTenant,
    user: { sub: 'user-nas', role: UserRole.nasabah, tenantId: 'tenant-id' },
  } as Pick<Request, 'tenant' | 'user'>;
  const adminReq = {
    tenant: mockTenant,
    user: { sub: 'user-adm', role: UserRole.admin_bank, tenantId: 'tenant-id' },
  } as Pick<Request, 'tenant' | 'user'>;

  beforeEach(async () => {
    mockService = {
      submit: vi.fn(),
      mySetor: vi.fn(),
      adminList: vi.fn(),
      receipt: vi.fn(),
      verify: vi.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [SetorController],
      providers: [{ provide: SetorService, useValue: mockService }],
    })
      .overrideGuard(JwtAuthGuard)
      .useValue({ canActivate: () => true })
      .overrideGuard(RolesGuard)
      .useValue({ canActivate: () => true })
      .compile();

    controller = module.get<SetorController>(SetorController);
    service = module.get<SetorService>(SetorService);
    vi.clearAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('submit should pass tenant, userId and dto', async () => {
    const dto = { tanggal: '2026-08-26T10:00:00.000Z', catatan: 'Ok', items: [] };
    mockService.submit.mockResolvedValue({ id: 'setor-id' });

    const result = await controller.submit(nasabahReq as Request, dto);

    expect(service.submit).toHaveBeenCalledWith(mockTenant, 'user-nas', dto);
      expect(result.message).toContain('created successfully');
  });

  it('mySetor should pass bulan filter', async () => {
    mockService.mySetor.mockResolvedValue([]);

    await controller.mySetor(nasabahReq as Request, { bulan: '2026-08' });

    expect(service.mySetor).toHaveBeenCalledWith(mockTenant, 'user-nas', '2026-08');
  });

  it('verify should pass admin userId', async () => {
    const dto = { status: 'selesai', catatanAdmin: 'Ok.' };
    mockService.verify.mockResolvedValue({ id: 'setor-id' });

    await controller.verify(adminReq as Request, 'setor-id', dto);

    expect(service.verify).toHaveBeenCalledWith(
      mockTenant,
      'user-adm',
      'setor-id',
      dto,
    );
  });

  it('receipt should pass caller role for ownership check', async () => {
    mockService.receipt.mockResolvedValue({ id: 'setor-id' });

    await controller.receipt(nasabahReq as Request, 'setor-id');

    expect(service.receipt).toHaveBeenCalledWith(
      mockTenant,
      'user-nas',
      UserRole.nasabah,
      'setor-id',
    );
  });
});
