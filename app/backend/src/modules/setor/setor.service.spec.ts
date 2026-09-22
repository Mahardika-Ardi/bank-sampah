import { Test, TestingModule } from '@nestjs/testing';
import { SetorService } from './setor.service.js';
import { PrismaService } from '../../infra/prisma/prisma.service.js';
import { LoggerService } from '../../infra/logger/logger.service.js';
import { RedisService } from '../../infra/redis/redis.service.js';
import {
  BadRequestException,
  ForbiddenException,
  NotFoundException,
} from '@nestjs/common';
import { describe, it, expect, beforeEach, vi, Mock } from 'vitest';
import {
  StatusSetor,
  Tenant,
  UserRole,
} from '../../../generated/prisma/client.js';

describe('SetorService', () => {
  let service: SetorService;

  let mockPrisma: {
    nasabah: { findFirst: Mock; update: Mock };
    adminBank: { findFirst: Mock };
    kategoriSampah: { findMany: Mock };
    setorSampah: { create: Mock; findMany: Mock; findFirst: Mock; update: Mock };
    detailSetor: { update: Mock };
    $transaction: Mock;
  };

  const mockTenant = { id: 'tenant-id' } as Tenant;

  const kategoriA = {
    id: 'kat-a',
    namaKategori: 'Botol Plastik PET',
    poinPerKg: '10',
    hargaPerKg: '3500',
    jenis: 'plastik',
  };
  const kategoriB = {
    id: 'kat-b',
    namaKategori: 'Kardus',
    poinPerKg: '5',
    hargaPerKg: '2000',
    jenis: 'kertas',
  };

  const nasabahRow = { id: 'nas-id', idUser: 'user-nas' };
  const adminRow = { id: 'adm-id', idUser: 'user-adm' };

  beforeEach(async () => {
    mockPrisma = {
      nasabah: { findFirst: vi.fn(), update: vi.fn() },
      adminBank: { findFirst: vi.fn() },
      kategoriSampah: { findMany: vi.fn() },
      setorSampah: {
        create: vi.fn(),
        findMany: vi.fn().mockResolvedValue([]),
        findFirst: vi.fn(),
        update: vi.fn(),
      },
      detailSetor: { update: vi.fn() },
      $transaction: vi.fn(async (callback) =>
        callback({
          setorSampah: {
            create: mockPrisma.setorSampah.create,
            findFirst: mockPrisma.setorSampah.findFirst,
            update: mockPrisma.setorSampah.update,
          },
          detailSetor: { update: mockPrisma.detailSetor.update },
          nasabah: { update: mockPrisma.nasabah.update },
        }),
      ),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SetorService,
        { provide: PrismaService, useValue: mockPrisma },
        {
          provide: LoggerService,
          useValue: { log: vi.fn(), debug: vi.fn() },
        },
        {
          provide: RedisService,
          useValue: { get: vi.fn(), set: vi.fn(), delByPrefix: vi.fn() },
        },
        {
          provide: RedisService,
          useValue: { get: vi.fn(), set: vi.fn(), delByPrefix: vi.fn() },
        },
      ],
    }).compile();

    service = module.get<SetorService>(SetorService);
    vi.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('submit', () => {
    const dto = {
      tanggal: '2026-08-26T10:00:00.000Z',
      catatan: 'Sampah sudah dipilah',
      items: [
        { kategoriSampahId: 'kat-a', beratKg: 4.5 },
        { kategoriSampahId: 'kat-b', beratKg: 2 },
      ],
    };

    it('should estimate points and generate STR code', async () => {
      mockPrisma.nasabah.findFirst.mockResolvedValue(nasabahRow);
      mockPrisma.kategoriSampah.findMany.mockResolvedValue([kategoriA, kategoriB]);
      mockPrisma.setorSampah.findFirst.mockResolvedValue(null);
      mockPrisma.setorSampah.create.mockImplementation(async () => ({
        id: 'setor-id',
        kodeSetor: 'STR-202608-0001',
        tanggal: new Date(dto.tanggal),
        status: StatusSetor.menunggu_konfirmasi,
        totalBeratKg: '6.5',
        totalPoin: '55',
        catatan: dto.catatan,
        detail: [
          { idKategori: 'kat-a', beratKg: '4.5', subtotalPoin: '45' },
          { idKategori: 'kat-b', beratKg: '2', subtotalPoin: '10' },
        ],
      }));

      const result = await service.submit(mockTenant, 'user-nas', dto);

      expect(result).toMatchObject({
        kodeSetor: 'STR-202608-0001',
        status: 'menunggu_konfirmasi',
        totalBeratKg: 6.5,
        estimasiTotalPoin: 55,
      });
      expect(mockPrisma.setorSampah.create).toHaveBeenCalledWith(
        expect.objectContaining({
          data: expect.objectContaining({
            status: StatusSetor.menunggu_konfirmasi,
          }),
        }),
      );
    });

    it('should reject unknown kategori', async () => {
      mockPrisma.nasabah.findFirst.mockResolvedValue(nasabahRow);
      mockPrisma.kategoriSampah.findMany.mockResolvedValue([kategoriA]);

      await expect(service.submit(mockTenant, 'user-nas', dto)).rejects.toThrow(
        BadRequestException,
      );
    });

    it('should reject non-nasabah callers', async () => {
      mockPrisma.nasabah.findFirst.mockResolvedValue(null);

      await expect(
        service.submit(mockTenant, 'user-adm', dto),
      ).rejects.toThrow(ForbiddenException);
    });
  });

  describe('verify', () => {
    const setorRow = {
      id: 'setor-id',
      status: StatusSetor.menunggu_konfirmasi,
      idNasabah: 'nas-id',
      detail: [
        {
          id: 'det-a',
          idKategori: 'kat-a',
          beratKg: '4.5',
          subtotalPoin: '45',
          subtotalHarga: '15750',
        },
      ],
    };

    beforeEach(() => {
      mockPrisma.adminBank.findFirst.mockResolvedValue(adminRow);
      mockPrisma.kategoriSampah.findMany.mockResolvedValue([kategoriA]);
    });

    it('should promote estimates when itemsReal is absent and credit on selesai', async () => {
      mockPrisma.setorSampah.findFirst.mockResolvedValue(setorRow);
      mockPrisma.setorSampah.update.mockImplementation(async (args) => ({
        id: 'setor-id',
        status: args.data.status,
        totalPoin: '45',
        catatanAdmin: args.data.catatanAdmin,
      }));

      const result = await service.verify(mockTenant, 'user-adm', 'setor-id', {
        status: 'selesai',
        catatanAdmin: 'Sesuai timbangan.',
      });

      expect(mockPrisma.detailSetor.update).toHaveBeenCalledWith(
        expect.objectContaining({
          data: expect.objectContaining({ beratTerverifikasiKg: 4.5 }),
        }),
      );
      expect(mockPrisma.nasabah.update).toHaveBeenCalledWith(
        expect.objectContaining({
          data: { saldoPoin: { increment: 45 } },
        }),
      );
      expect(result).toMatchObject({ status: 'selesai', totalPoin: 45 });
    });

    it('should not credit points on ditolak', async () => {
      mockPrisma.setorSampah.findFirst.mockResolvedValue(setorRow);
      mockPrisma.setorSampah.update.mockImplementation(async (args) => ({
        id: 'setor-id',
        status: args.data.status,
        totalPoin: '45',
        catatanAdmin: args.data.catatanAdmin,
      }));

      const result = await service.verify(mockTenant, 'user-adm', 'setor-id', {
        status: 'ditolak',
        catatanAdmin: 'Tercampur organik.',
      });

      expect(mockPrisma.nasabah.update).not.toHaveBeenCalled();
      expect(result.status).toBe('ditolak');
    });

    it('should reject illegal transitions from terminal states', async () => {
      mockPrisma.setorSampah.findFirst.mockResolvedValue({
        ...setorRow,
        status: StatusSetor.selesai,
      });

      await expect(
        service.verify(mockTenant, 'user-adm', 'setor-id', {
          status: 'selesai',
          catatanAdmin: 'Lagi.',
        }),
      ).rejects.toThrow(BadRequestException);
    });

    it('should reject itemsReal with unknown kategori', async () => {
      mockPrisma.setorSampah.findFirst.mockResolvedValue(setorRow);

      await expect(
        service.verify(mockTenant, 'user-adm', 'setor-id', {
          status: 'selesai',
          catatanAdmin: 'Ok.',
          itemsReal: [{ kategoriSampahId: 'kat-unknown', beratKgReal: 1 }],
        }),
      ).rejects.toThrow(BadRequestException);
    });
  });

  describe('receipt', () => {
    it('should hide foreign deposits from nasabah callers', async () => {
      mockPrisma.setorSampah.findFirst.mockResolvedValue({
        id: 'setor-id',
        idNasabah: 'nas-other',
        nasabah: {},
        detail: [],
      });
      mockPrisma.nasabah.findFirst.mockResolvedValue(nasabahRow);

      await expect(
        service.receipt(mockTenant, 'user-nas', UserRole.nasabah, 'setor-id'),
      ).rejects.toThrow(NotFoundException);
    });
  });

  describe('mySetor', () => {
    it('should filter by YYYY-MM range', async () => {
      mockPrisma.nasabah.findFirst.mockResolvedValue(nasabahRow);
      mockPrisma.setorSampah.findMany.mockResolvedValue([]);

      await service.mySetor(mockTenant, 'user-nas', '2026-08');

      expect(mockPrisma.setorSampah.findMany).toHaveBeenCalledWith(
        expect.objectContaining({
          where: expect.objectContaining({
            tanggal: {
              gte: new Date('2026-08-01T00:00:00.000Z'),
              lt: new Date('2026-09-01T00:00:00.000Z'),
            },
          }),
        }),
      );
    });
  });
});
