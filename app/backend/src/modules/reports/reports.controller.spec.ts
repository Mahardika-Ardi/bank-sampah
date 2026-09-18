import { Test, TestingModule } from '@nestjs/testing';
import { ReportsController } from './reports.controller.js';
import { ReportsService } from './reports.service.js';
import { describe, it, expect, beforeEach, vi, Mock } from 'vitest';
import type { Request } from 'express';
import { JwtAuthGuard } from '../../shared/guards/jwt-auth.guard.js';
import { RolesGuard } from '../auth/guard/role.guard.js';
import { Tenant, UserRole } from '../../../generated/prisma/client.js';

describe('ReportsController', () => {
  let controller: ReportsController;
  let service: ReportsService;

  let mockService: {
    rekapBulanan: Mock;
    rekapMingguan: Mock;
    rekapTahunan: Mock;
    dashboardSummary: Mock;
    dashboardStats: Mock;
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
      rekapBulanan: vi.fn(),
      rekapMingguan: vi.fn(),
      rekapTahunan: vi.fn(),
      dashboardSummary: vi.fn(),
      dashboardStats: vi.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReportsController],
      providers: [{ provide: ReportsService, useValue: mockService }],
    })
      .overrideGuard(JwtAuthGuard)
      .useValue({ canActivate: () => true })
      .overrideGuard(RolesGuard)
      .useValue({ canActivate: () => true })
      .compile();

    controller = module.get<ReportsController>(ReportsController);
    service = module.get<ReportsService>(ReportsService);
    vi.clearAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('rekapBulanan should pass tenant and bulan with period message', async () => {
    mockService.rekapBulanan.mockResolvedValue({ periode: '2026-08' });

    const result = await controller.rekapBulanan(adminReq as Request, {
      bulan: '2026-08',
    });

    expect(service.rekapBulanan).toHaveBeenCalledWith(mockTenant, '2026-08');
    expect(result.message).toContain('8/2026');
    expect(result.data).toEqual({ periode: '2026-08' });
  });

  it('dashboardSummary should pass nasabah userId', async () => {
    mockService.dashboardSummary.mockResolvedValue({ saldoPoinSaatIni: 150 });

    const result = await controller.dashboardSummary(nasabahReq as Request, {});

    expect(service.dashboardSummary).toHaveBeenCalledWith(
      mockTenant,
      'user-nas',
      undefined,
    );
    expect(result.data).toEqual({ saldoPoinSaatIni: 150 });
  });

  it('dashboardStats should return admin stats', async () => {
    mockService.dashboardStats.mockResolvedValue({ totalNasabah: 2 });

    const result = await controller.dashboardStats(adminReq as Request, {});

    expect(service.dashboardStats).toHaveBeenCalledWith(mockTenant, undefined);
    expect(result.data).toEqual({ totalNasabah: 2 });
  });

  it('rekapMingguan should pass anchor tanggal with message', async () => {
    mockService.rekapMingguan.mockResolvedValue({ periode: {} });

    const result = await controller.rekapMingguan(adminReq as Request, {
      tanggal: '2026-08-26',
    });

    expect(service.rekapMingguan).toHaveBeenCalledWith(
      mockTenant,
      '2026-08-26',
    );
    expect(result.message).toContain('Weekly');
  });

  it('rekapTahunan should pass tahun with message', async () => {
    mockService.rekapTahunan.mockResolvedValue({ periode: {} });

    const result = await controller.rekapTahunan(adminReq as Request, {
      tahun: 2026,
    });

    expect(service.rekapTahunan).toHaveBeenCalledWith(mockTenant, 2026);
    expect(result.message).toContain('Annual');
  });
});
