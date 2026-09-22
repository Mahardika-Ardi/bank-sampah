import { Test, TestingModule } from '@nestjs/testing';
import { describe, it, expect, beforeEach, vi, Mock } from 'vitest';
import type { Request, Response } from 'express';
import { ConfigService } from '@nestjs/config';
import { AuthController } from './auth.controller.js';
import { AuthService } from './auth.service.js';
import { JwtAuthGuard } from '../../shared/guards/jwt-auth.guard.js';
import { LoginThrottlerGuard } from '../../shared/guards/login-throttler.guard.js';
import { ACCESS_TOKEN_COOKIE } from '../../shared/constants/auth.constants.js';
import { Tenant } from '../../../generated/prisma/client.js';

describe('AuthController', () => {
  let controller: AuthController;
  let service: AuthService;

  let mockAuthService: {
    registerNasabah: Mock;
    registerAdmin: Mock;
    login: Mock;
    getProfile: Mock;
    refresh: Mock;
  };

  const mockConfigService = {
    get: vi.fn((key: string) => {
      const values: Record<string, unknown> = {
        'cookie.httpOnly': true,
        'cookie.secure': false,
        'cookie.sameSite': 'lax',
      };
      return values[key];
    }),
  };

  const mockTenant: Tenant = {
    id: 'tenant-1',
    appKey: 'key',
    name: 'Tenant',
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

  const mockRes = () => ({ cookie: vi.fn() }) as Pick<Response, 'cookie'>;

  beforeEach(async () => {
    mockAuthService = {
      registerNasabah: vi.fn(),
      registerAdmin: vi.fn(),
      login: vi.fn(),
      getProfile: vi.fn(),
      refresh: vi.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        {
          provide: AuthService,
          useValue: mockAuthService,
        },
        {
          provide: ConfigService,
          useValue: mockConfigService,
        },
      ],
    })
      .overrideGuard(JwtAuthGuard)
      .useValue({ canActivate: () => true })
      .overrideGuard(LoginThrottlerGuard)
      .useValue({ canActivate: () => true })
      .compile();

    controller = module.get<AuthController>(AuthController);
    service = module.get<AuthService>(AuthService);

    vi.clearAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('registerNasabah', () => {
    it('should successfully register nasabah', async () => {
      const mockRequest = { tenant: mockTenant } as Pick<Request, 'tenant'>;
      const dto = {
        username: 'budi',
        password: 'Password123!',
        namaNasabah: 'Budi',
        alamat: 'Jl. Merdeka',
        telp: '08123',
      };
      const expectedResult = { id: 'user-1', username: 'budi' };

      mockAuthService.registerNasabah.mockResolvedValue(expectedResult);

      const response = await controller.registerNasabah(mockRequest as Request, dto);

      expect(service.registerNasabah).toHaveBeenCalledWith(mockTenant, dto);
      expect(response.message).toContain('Customer registered successfully');
      expect(response.data).toEqual(expectedResult);
    });
  });

  describe('registerAdmin', () => {
    it('should successfully register admin bank', async () => {
      const mockRequest = { tenant: mockTenant } as Pick<Request, 'tenant'>;
      const dto = {
        username: 'admin',
        password: 'Password123!',
        namaUnit: 'Unit',
        namaPengelola: 'Admin',
        telp: '08123',
      };
      const expectedResult = { id: 'user-1', username: 'admin' };

      mockAuthService.registerAdmin.mockResolvedValue(expectedResult);

      const response = await controller.registerAdmin(mockRequest as Request, dto);

      expect(service.registerAdmin).toHaveBeenCalledWith(mockTenant, dto);
      expect(response.message).toContain('Waste bank unit registered successfully');
      expect(response.data).toEqual(expectedResult);
    });
  });

  describe('login', () => {
    it('should login user and set access token cookie', async () => {
      const mockRequest = { tenant: mockTenant } as Pick<Request, 'tenant'>;
      const dto = { username: 'budi', password: 'Password123!' };
      const expectedResult = { token: 'jwt-token', role: 'nasabah' };
      const res = mockRes();

      mockAuthService.login.mockResolvedValue(expectedResult);

      const response = await controller.login(
        mockRequest as Request,
        dto,
        res as Response,
      );

      expect(service.login).toHaveBeenCalledWith(mockTenant, dto);
      expect(res.cookie).toHaveBeenCalledWith(
        ACCESS_TOKEN_COOKIE,
        'jwt-token',
        expect.objectContaining({ httpOnly: true }),
      );
      expect(response.data).toEqual(expectedResult);
    });
  });

  describe('getProfile', () => {
    it('should return the current user profile', async () => {
      const mockRequest = {
        tenant: mockTenant,
        user: { sub: 'user-1', tenantId: 'tenant-1' },
      } as Pick<Request, 'tenant' | 'user'>;
      const expectedResult = { id: 'user-1', username: 'budi' };

      mockAuthService.getProfile.mockResolvedValue(expectedResult);

      const response = await controller.getProfile(mockRequest as Request);

      expect(service.getProfile).toHaveBeenCalledWith('user-1', 'tenant-1');
      expect(response.data).toEqual(expectedResult);
    });
  });

  describe('refresh', () => {
    it('should rotate the access token from the refresh cookie', async () => {
      const mockRequest = {
        tenant: mockTenant,
        cookies: { refresh_token: 'valid-refresh' },
      } as Pick<Request, 'tenant' | 'cookies'>;
      const expectedResult = { id: 'user-1', token: 'jwt-token' };
      const res = mockRes();

      mockAuthService.refresh.mockResolvedValue(expectedResult);

      const response = await controller.refresh(
        mockRequest as Request,
        res as Response,
      );

      expect(service.refresh).toHaveBeenCalledWith(
        'valid-refresh',
        'tenant-1',
      );
      expect(res.cookie).toHaveBeenCalledWith(
        ACCESS_TOKEN_COOKIE,
        'jwt-token',
        expect.objectContaining({ httpOnly: true }),
      );
      expect(response.data).toEqual(expectedResult);
    });
  });
});
