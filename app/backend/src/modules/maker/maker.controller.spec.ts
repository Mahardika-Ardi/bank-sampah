import { Test, TestingModule } from '@nestjs/testing';
import { MakerController } from './maker.controller.js';
import { MakerService } from './maker.service.js';
import { describe, it, expect, beforeEach, vi, Mock } from 'vitest';
import type { Request, Response } from 'express';
import { ConfigService } from '@nestjs/config';
import { LoginThrottlerGuard } from '../../shared/guards/login-throttler.guard.js';
import { Tenant } from '../../../generated/prisma/client.js';
import { ACCESS_TOKEN_COOKIE } from '../../shared/constants/auth.constants.js';

describe('MakerController', () => {
  let controller: MakerController;
  let service: MakerService;

  let mockMakerService: {
    registerMaker: Mock;
    loginMaker: Mock;
    getProfile: Mock;
    checkKey: Mock;
    listBanks: Mock;
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
    id: 'tenant-id',
    appKey: 'app-key',
    name: 'Bank Sampah Digital Hub',
    email: 'siswa1@smk.sch.id',
    namaSiswa: 'Budi Santoso',
    kelas: 'XII RPL 1',
    appName: 'Bank Sampah Digital Hub',
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
    mockMakerService = {
      registerMaker: vi.fn(),
      loginMaker: vi.fn(),
      getProfile: vi.fn(),
      checkKey: vi.fn(),
      listBanks: vi.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [MakerController],
      providers: [
        { provide: MakerService, useValue: mockMakerService },
        { provide: ConfigService, useValue: mockConfigService },
      ],
    })
      .overrideGuard(LoginThrottlerGuard)
      .useValue({ canActivate: () => true })
      .compile();

    controller = module.get<MakerController>(MakerController);
    service = module.get<MakerService>(MakerService);
    vi.clearAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('registerMaker', () => {
    it('should register maker and set access token cookie', async () => {
      const dto = {
        email: 'maker@smk.sch.id',
        password: 'password123',
        namaSiswa: 'Siswa',
        kelas: 'XII',
        namaApp: 'App',
      };
      const expectedResult = {
        appKey: 'uuid-key',
        email: dto.email,
        token: 'jwt-token',
      };
      const res = mockRes();

      mockMakerService.registerMaker.mockResolvedValue(expectedResult);

      const response = await controller.registerMaker(dto, res as Response);

      expect(service.registerMaker).toHaveBeenCalledWith(dto);
      expect(res.cookie).toHaveBeenCalledWith(
        ACCESS_TOKEN_COOKIE,
        'jwt-token',
        expect.objectContaining({ httpOnly: true }),
      );
      expect(response.data).toEqual(expectedResult);
    });
  });

  describe('loginMaker', () => {
    it('should login maker and set access token cookie', async () => {
      const dto = { email: 'maker@smk.sch.id', password: 'password123' };
      const expectedResult = { token: 'jwt-token', appKey: 'app-key' };
      const res = mockRes();

      mockMakerService.loginMaker.mockResolvedValue(expectedResult);

      const response = await controller.loginMaker(dto, res as Response);

      expect(service.loginMaker).toHaveBeenCalledWith(dto);
      expect(res.cookie).toHaveBeenCalledWith(
        ACCESS_TOKEN_COOKIE,
        'jwt-token',
        expect.objectContaining({ httpOnly: true }),
      );
      expect(response.data).toEqual(expectedResult);
    });
  });

  describe('getProfile', () => {
    it('should return maker profile with tenant from request', async () => {
      const profile = { id: 'tenant-id', stats: {} };
      mockMakerService.getProfile.mockResolvedValue(profile);
      const req = { tenant: mockTenant } as Pick<Request, 'tenant'>;

      const result = await controller.getProfile(req as Request);

      expect(service.getProfile).toHaveBeenCalledWith(mockTenant);
      expect(result).toEqual({
        message: 'App Maker profile retrieved successfully',
        data: profile,
      });
    });
  });

  describe('checkKey', () => {
    it('should return app key for email query', async () => {
      const keyData = { appKey: 'app-key' };
      mockMakerService.checkKey.mockResolvedValue(keyData);

      const result = await controller.checkKey({ email: 'siswa1@smk.sch.id' });

      expect(service.checkKey).toHaveBeenCalledWith('siswa1@smk.sch.id');
      expect(result).toEqual({ message: 'App Key found', data: keyData });
    });
  });

  describe('listBanks', () => {
    it('should return the public bank list', async () => {
      const banks = [
        {
          id: 'tenant-id',
          namaApp: 'Bank Sampah Digital Hub',
          appKey: 'app-key',
        },
      ];
      mockMakerService.listBanks.mockResolvedValue(banks);

      const result = await controller.listBanks();

      expect(service.listBanks).toHaveBeenCalledOnce();
      expect(result).toEqual({
        message: 'Active waste banks retrieved successfully',
        data: banks,
      });
    });
  });
});
