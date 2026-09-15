import { describe, it, expect, beforeEach, vi } from 'vitest';
import { TenantMiddleware } from './tenant.middleware.js';
import { TenantService } from '../../modules/tenant/tenant.service.js';
import { UnauthorizedException } from '@nestjs/common';

describe('TenantMiddleware', () => {
  let middleware: TenantMiddleware;
  let mockTenantService: Partial<TenantService>;

  beforeEach(() => {
    mockTenantService = {
      findByAppKey: vi.fn(),
    };

    middleware = new TenantMiddleware(mockTenantService as TenantService);
  });

  it('should be defined', () => {
    expect(middleware).toBeDefined();
  });

  it('should bypass x-app-key check and call next() for public paths', async () => {
    const mockReq = {
      originalUrl: '/seed',
      headers: {},
    } as any;
    const mockRes = {} as any;
    const nextMock = vi.fn();

    await middleware.use(mockReq, mockRes, nextMock);

    expect(mockTenantService.findByAppKey).not.toHaveBeenCalled();
    expect(nextMock).toHaveBeenCalledOnce();
  });

  it('should attach tenant to request and call next() when valid x-app-key is provided', async () => {
    const mockTenant = {
      id: 'tenant-uuid',
      name: 'Bank Sampah Utama',
      isActive: true,
    };
    (mockTenantService.findByAppKey as any).mockResolvedValue(mockTenant);

    const mockReq = {
      originalUrl: '/api/v1/protected',
      headers: { 'x-app-key': 'valid-app-key' },
    } as any;
    const mockRes = {} as any;
    const nextMock = vi.fn();

    await middleware.use(mockReq, mockRes, nextMock);

    expect(mockTenantService.findByAppKey).toHaveBeenCalledWith(
      'valid-app-key',
    );
    expect(mockReq.tenant).toEqual(mockTenant);
    expect(nextMock).toHaveBeenCalledOnce();
  });

  it('should throw UnauthorizedException when x-app-key header is missing', async () => {
    const mockReq = {
      originalUrl: '/api/v1/protected',
      headers: {},
    } as any;
    const mockRes = {} as any;
    const nextMock = vi.fn();

    await expect(middleware.use(mockReq, mockRes, nextMock)).rejects.toThrow(
      UnauthorizedException,
    );
    expect(nextMock).not.toHaveBeenCalled();
  });

  it('should throw UnauthorizedException when tenant is not found or invalid', async () => {
    (mockTenantService.findByAppKey as any).mockRejectedValue(
      new Error('Not found'),
    );

    const mockReq = {
      originalUrl: '/api/v1/protected',
      headers: { 'x-app-key': 'invalid-app-key' },
    } as any;
    const mockRes = {} as any;
    const nextMock = vi.fn();

    await expect(middleware.use(mockReq, mockRes, nextMock)).rejects.toThrow(
      UnauthorizedException,
    );
    expect(nextMock).not.toHaveBeenCalled();
  });
});
