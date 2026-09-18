import { Test, TestingModule } from '@nestjs/testing';
import { PenukaranController } from './penukaran.controller.js';
import { PenukaranService } from './penukaran.service.js';
import { describe, it, expect, beforeEach, vi, Mock } from 'vitest';
import type { Request } from 'express';
import { JwtAuthGuard } from '../../shared/guards/jwt-auth.guard.js';
import { RolesGuard } from '../auth/guard/role.guard.js';
import {
  StatusPenukaran,
  Tenant,
  UserRole,
} from '../../../generated/prisma/client.js';

describe('PenukaranController', () => {
  let controller: PenukaranController;
  let service: PenukaranService;

  let mockService: {
    redeem: Mock;
    myPenukaran: Mock;
    adminList: Mock;
    receipt: Mock;
    updateStatus: Mock;
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
      redeem: vi.fn(),
      myPenukaran: vi.fn(),
      adminList: vi.fn(),
      receipt: vi.fn(),
      updateStatus: vi.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [PenukaranController],
      providers: [{ provide: PenukaranService, useValue: mockService }],
    })
      .overrideGuard(JwtAuthGuard)
      .useValue({ canActivate: () => true })
      .overrideGuard(RolesGuard)
      .useValue({ canActivate: () => true })
      .compile();

    controller = module.get<PenukaranController>(PenukaranController);
    service = module.get<PenukaranService>(PenukaranService);
    vi.clearAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('redeem should pass tenant, userId and dto', async () => {
    const dto = { hadiahId: 'rew-id' };
    mockService.redeem.mockResolvedValue({ id: 'tukar-id' });

    const result = await controller.redeem(nasabahReq as Request, dto);

    expect(service.redeem).toHaveBeenCalledWith(mockTenant, 'user-nas', dto);
    expect(result.message).toContain('submitted');
  });

  it('updateStatus should pass id and status', async () => {
    mockService.updateStatus.mockResolvedValue({ id: 'tukar-id' });

    await controller.updateStatus(adminReq as Request, 'tukar-id', {
      status: StatusPenukaran.selesai,
    });

    expect(service.updateStatus).toHaveBeenCalledWith(
      mockTenant,
      'tukar-id',
      StatusPenukaran.selesai,
    );
  });

  it('receipt should pass caller role for ownership check', async () => {
    mockService.receipt.mockResolvedValue({ id: 'tukar-id' });

    await controller.receipt(nasabahReq as Request, 'tukar-id');

    expect(service.receipt).toHaveBeenCalledWith(
      mockTenant,
      'user-nas',
      UserRole.nasabah,
      'tukar-id',
    );
  });
});
