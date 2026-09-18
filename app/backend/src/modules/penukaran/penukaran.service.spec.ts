import { Test, TestingModule } from '@nestjs/testing';
import { PenukaranService } from './penukaran.service.js';
import { PrismaService } from '../../infra/prisma/prisma.service.js';
import { LoggerService } from '../../infra/logger/logger.service.js';
import {
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { describe, it, expect, beforeEach, vi, Mock } from 'vitest';
import {
  StatusPenukaran,
  Tenant,
  UserRole,
} from '../../../generated/prisma/client.js';

describe('PenukaranService', () => {
  let service: PenukaranService;

  let mockPrisma: {
    nasabah: { findFirst: Mock; update: Mock };
    hadiah: { findFirst: Mock; update: Mock };
    penukaranPoin: { create: Mock; findMany: Mock; findFirst: Mock; update: Mock };
    $transaction: Mock;
  };

  const mockTenant = { id: 'tenant-id' } as Tenant;
  const nasabahRow = { id: 'nas-id', idUser: 'user-nas', saldoPoin: '150' };
  const hadiahRow = {
    id: 'rew-id',
    namaHadiah: 'Voucher Pulsa',
    poinDibutuhkan: '75',
    stok: 50,
  };

  beforeEach(async () => {
    mockPrisma = {
      nasabah: { findFirst: vi.fn(), update: vi.fn() },
      hadiah: { findFirst: vi.fn(), update: vi.fn() },
      penukaranPoin: {
        create: vi.fn(),
        findMany: vi.fn().mockResolvedValue([]),
        findFirst: vi.fn(),
        update: vi.fn(),
      },
      $transaction: vi.fn(async (callback) =>
        callback({
          nasabah: {
            findFirstOrThrow: vi.fn().mockResolvedValue(nasabahRow),
            update: mockPrisma.nasabah.update,
          },
          hadiah: {
            findFirstOrThrow: vi.fn().mockResolvedValue(hadiahRow),
            update: mockPrisma.hadiah.update,
          },
      penukaranPoin: {
        create: mockPrisma.penukaranPoin.create,
        findFirst: mockPrisma.penukaranPoin.findFirst,
        update: mockPrisma.penukaranPoin.update,
      },
        }),
      ),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PenukaranService,
        { provide: PrismaService, useValue: mockPrisma },
        {
          provide: LoggerService,
          useValue: { log: vi.fn(), debug: vi.fn() },
        },
      ],
    }).compile();

    service = module.get<PenukaranService>(PenukaranService);
    vi.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('redeem', () => {
    it('should deduct balance and stock atomically with TKR code', async () => {
      mockPrisma.nasabah.findFirst.mockResolvedValue(nasabahRow);
      mockPrisma.hadiah.findFirst.mockResolvedValue(hadiahRow);
      mockPrisma.penukaranPoin.findFirst.mockResolvedValue(null);
      mockPrisma.penukaranPoin.create.mockImplementation(async () => ({
        id: 'tukar-id',
        kodePenukaran: 'TKR-202608-0001',
        tanggal: new Date(),
        idHadiah: 'rew-id',
        poinTerpakai: '75',
        status: StatusPenukaran.diproses,
      }));
      mockPrisma.nasabah.update.mockResolvedValue({});
      mockPrisma.hadiah.update.mockResolvedValue({});

      const result = await service.redeem(mockTenant, 'user-nas', {
        hadiahId: 'rew-id',
      });

      expect(result).toMatchObject({
        kodePenukaran: 'TKR-202608-0001',
        poinTerpakai: 75,
        sisaSaldoPoin: 150,
        status: 'diproses',
      });
      expect(mockPrisma.nasabah.update).toHaveBeenCalledWith(
        expect.objectContaining({
          data: { saldoPoin: { decrement: 75 } },
        }),
      );
      expect(mockPrisma.hadiah.update).toHaveBeenCalledWith(
        expect.objectContaining({
          data: { stok: { decrement: 1 } },
        }),
      );
    });

    it('should reject insufficient balance with dynamic figures', async () => {
      mockPrisma.nasabah.findFirst.mockResolvedValue({
        ...nasabahRow,
        saldoPoin: '10',
      });
      mockPrisma.hadiah.findFirst.mockResolvedValue(hadiahRow);
      mockPrisma.$transaction.mockImplementation(async (callback) =>
        callback({
          nasabah: {
            findFirstOrThrow: vi
              .fn()
              .mockResolvedValue({ ...nasabahRow, saldoPoin: '10' }),
          },
          hadiah: {
            findFirstOrThrow: vi.fn().mockResolvedValue(hadiahRow),
          },
        }),
      );

      await expect(
        service.redeem(mockTenant, 'user-nas', { hadiahId: 'rew-id' }),
      ).rejects.toThrow(/have 10 points, need 75 points/);
    });

    it('should reject out-of-stock rewards', async () => {
      mockPrisma.nasabah.findFirst.mockResolvedValue(nasabahRow);
      mockPrisma.hadiah.findFirst.mockResolvedValue({ ...hadiahRow, stok: 0 });
      mockPrisma.$transaction.mockImplementation(async (callback) =>
        callback({
          nasabah: {
            findFirstOrThrow: vi.fn().mockResolvedValue(nasabahRow),
          },
          hadiah: {
            findFirstOrThrow: vi
              .fn()
              .mockResolvedValue({ ...hadiahRow, stok: 0 }),
          },
        }),
      );

      await expect(
        service.redeem(mockTenant, 'user-nas', { hadiahId: 'rew-id' }),
      ).rejects.toThrow(/out of stock/);
    });
  });

  describe('updateStatus', () => {
    it('should stamp diproses to selesai without moving money', async () => {
      mockPrisma.penukaranPoin.findFirst.mockResolvedValue({
        id: 'tukar-id',
        status: StatusPenukaran.diproses,
      });
      mockPrisma.penukaranPoin.update.mockResolvedValue({
        id: 'tukar-id',
        status: StatusPenukaran.selesai,
      });

      const result = await service.updateStatus(
        mockTenant,
        'tukar-id',
        StatusPenukaran.selesai,
      );

      expect(result.status).toBe('selesai');
      expect(mockPrisma.nasabah.update).not.toHaveBeenCalled();
      expect(mockPrisma.hadiah.update).not.toHaveBeenCalled();
    });

    it('should refund balance and stock when voiding selesai', async () => {
      mockPrisma.penukaranPoin.findFirst.mockResolvedValue({
        id: 'tukar-id',
        status: StatusPenukaran.selesai,
        idNasabah: 'nas-id',
        idHadiah: 'rew-id',
        poinTerpakai: '75',
      });
      mockPrisma.penukaranPoin.update.mockResolvedValue({
        id: 'tukar-id',
        status: StatusPenukaran.diproses,
      });

      const result = await service.updateStatus(
        mockTenant,
        'tukar-id',
        StatusPenukaran.diproses,
      );

      expect(mockPrisma.nasabah.update).toHaveBeenCalledWith(
        expect.objectContaining({
          data: { saldoPoin: { increment: 75 } },
        }),
      );
      expect(mockPrisma.hadiah.update).toHaveBeenCalledWith(
        expect.objectContaining({ data: { stok: { increment: 1 } } }),
      );
      expect(result.status).toBe('diproses');
    });

    it('should reject a second void (no double refund)', async () => {
      mockPrisma.penukaranPoin.findFirst.mockResolvedValue({
        id: 'tukar-id',
        status: StatusPenukaran.diproses,
      });

      await expect(
        service.updateStatus(mockTenant, 'tukar-id', StatusPenukaran.diproses),
      ).rejects.toThrow(BadRequestException);
      expect(mockPrisma.nasabah.update).not.toHaveBeenCalled();
    });
  });

  describe('receipt', () => {
    it('should hide foreign redemptions from nasabah callers', async () => {
      mockPrisma.penukaranPoin.findFirst.mockResolvedValue({
        id: 'tukar-id',
        idNasabah: 'nas-other',
        nasabah: {},
        hadiah: {},
      });
      mockPrisma.nasabah.findFirst.mockResolvedValue(nasabahRow);

      await expect(
        service.receipt(mockTenant, 'user-nas', UserRole.nasabah, 'tukar-id'),
      ).rejects.toThrow(NotFoundException);
    });
  });
});
