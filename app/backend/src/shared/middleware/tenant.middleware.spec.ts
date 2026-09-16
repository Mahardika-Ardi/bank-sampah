import { describe, it, expect, beforeEach, vi, Mock } from 'vitest';
import type { Request, Response, NextFunction } from 'express';
import { TenantMiddleware } from './tenant.middleware.js';
import { TenantService } from '../../modules/tenant/tenant.service.js';
import { UnauthorizedException } from '@nestjs/common';
import { APP_KEY_HEADER } from '../constants/tenant.constants.js';
import { Tenant } from '../../../generated/prisma/client.js';

describe('TenantMiddleware', () => {
  let middleware: TenantMiddleware;
  let mockTenantService: { findByAppKey: Mock };

  const mockTenant: Tenant = {
    id: 'tenant-uuid',
    appKey: 'valid-app-key',
    name: 'Bank Sampah Utama',
    email: null,
    namaSiswa: null,
    kelas: null,
    appName: null,
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
    deletedBy: null,
    restoredAt: null,
    restoredBy: null,
  };

  const mockRes = () => ({} as unknown as Response);
  const mockNext = () => vi.fn() as unknown as NextFunction;

  beforeEach(() => {
    mockTenantService = {
      findByAppKey: vi.fn(),
    };

    middleware = new TenantMiddleware(
      mockTenantService as unknown as TenantService,
    );
  });

  it('should be defined', () => {
    expect(middleware).toBeDefined();
  });

  it('should bypass x-app-key check and call next() for public paths', async () => {
    const mockReq = {
      originalUrl: '/health',
      headers: {},
    } as Pick<Request, 'originalUrl' | 'headers'>;
    const nextMock = mockNext();

    await middleware.use(mockReq as Request, mockRes(), nextMock);

    expect(mockTenantService.findByAppKey).not.toHaveBeenCalled();
    expect(nextMock).toHaveBeenCalledOnce();
  });

  it('should attach tenant to request and call next() when valid x-app-key is provided', async () => {
    mockTenantService.findByAppKey.mockResolvedValue(mockTenant);

    const mockReq = {
      originalUrl: '/api/v1/protected',
      headers: { [APP_KEY_HEADER]: 'valid-app-key' },
    } as Pick<Request, 'originalUrl' | 'headers'>;
    const nextMock = mockNext();

    await middleware.use(mockReq as Request, mockRes(), nextMock);

    expect(mockTenantService.findByAppKey).toHaveBeenCalledWith(
      'valid-app-key',
    );
    expect(nextMock).toHaveBeenCalledOnce();
  });

  it('should throw UnauthorizedException when x-app-key header is missing', async () => {
    const mockReq = {
      originalUrl: '/api/v1/protected',
      headers: {},
    } as Pick<Request, 'originalUrl' | 'headers'>;
    const nextMock = mockNext();

    await expect(
      middleware.use(mockReq as Request, mockRes(), nextMock),
    ).rejects.toThrow(UnauthorizedException);
    expect(nextMock).not.toHaveBeenCalled();
  });

  it('should throw UnauthorizedException when tenant is not found or invalid', async () => {
    mockTenantService.findByAppKey.mockRejectedValue(new Error('Not found'));

    const mockReq = {
      originalUrl: '/api/v1/protected',
      headers: { [APP_KEY_HEADER]: 'invalid-app-key' },
    } as Pick<Request, 'originalUrl' | 'headers'>;
    const nextMock = mockNext();

    await expect(
      middleware.use(mockReq as Request, mockRes(), nextMock),
    ).rejects.toThrow(UnauthorizedException);
    expect(nextMock).not.toHaveBeenCalled();
  });
});
