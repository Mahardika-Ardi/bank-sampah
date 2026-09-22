import { Test, TestingModule } from '@nestjs/testing';
import { ReportsService } from './reports.service.js';
import { PrismaService } from '../../infra/prisma/prisma.service.js';
import { LoggerService } from '../../infra/logger/logger.service.js';
import { RedisService } from '../../infra/redis/redis.service.js';
import { describe, it, expect, beforeEach, vi, Mock } from 'vitest';
import { Tenant } from '../../../generated/prisma/client.js';

describe('ReportsService', () => {
  let service: ReportsService;

  let mockPrisma: {
    detailSetor: { findMany: Mock };
    penukaranPoin: { findMany: Mock };
    nasabah: { findFirst: Mock; count: Mock };
    setorSampah: { findMany: Mock; count: Mock };
    kategoriSampah: { count: Mock };
    hadiah: { count: Mock };
    $transaction: Mock;
  };

  const mockTenant = { id: 'tenant-id' } as Tenant;

  beforeEach(async () => {
    mockPrisma = {
      detailSetor: { findMany: vi.fn().mockResolvedValue([]) },
      penukaranPoin: { findMany: vi.fn().mockResolvedValue([]) },
      nasabah: {
        findFirst: vi.fn(),
        count: vi.fn().mockResolvedValue(0),
      },
      setorSampah: { findMany: vi.fn().mockResolvedValue([]), count: vi.fn() },
      kategoriSampah: { count: vi.fn() },
      hadiah: { count: vi.fn() },
      $transaction: vi.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ReportsService,
        { provide: PrismaService, useValue: mockPrisma },
        {
          provide: LoggerService,
          useValue: { log: vi.fn(), debug: vi.fn() },
        },
        {
          provide: RedisService,
          useValue: { get: vi.fn(), set: vi.fn(), delByPrefix: vi.fn() },
        },
      ],
    }).compile();

    service = module.get<ReportsService>(ReportsService);
    vi.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('rekapBulanan', () => {
    it('should aggregate tonnage, rupiah, points and per-jenis breakdown', async () => {
      mockPrisma.detailSetor.findMany.mockResolvedValue([
        {
          beratTerverifikasiKg: '10',
          beratKg: '10',
          subtotalHarga: '35000',
          subtotalPoin: '100',
          kategori: { jenis: 'plastik' },
        },
        {
          beratTerverifikasiKg: null,
          beratKg: '5',
          subtotalHarga: '10000',
          subtotalPoin: '25',
          kategori: { jenis: 'kertas' },
        },
      ]);
      mockPrisma.penukaranPoin.findMany.mockResolvedValue([
        { poinTerpakai: '75' },
      ]);

      const result = await service.rekapBulanan(mockTenant, '2026-08');

      expect(result.periode).toBe('2026-08');
      expect(result.rekapitulasiTonase).toMatchObject({
        totalKg: 15,
        totalTon: 0.015,
        totalEstimasiPembayaranRupiah: 45000,
        totalPoinDiterbitkan: 125,
      });
      expect(result.breakdownJenisSampah.plastik).toMatchObject({
        tonaseKg: 10,
        rupiah: 35000,
        poin: 100,
      });
      expect(result.breakdownJenisSampah.logam).toMatchObject({
        tonaseKg: 0,
        rupiah: 0,
        poin: 0,
      });
      expect(result.rekapitulasiPenukaranPoin).toMatchObject({
        totalTransaksiPenukaran: 1,
        totalPoinTerpakai: 75,
      });
      expect(mockPrisma.detailSetor.findMany).toHaveBeenCalledWith(
        expect.objectContaining({
          where: expect.objectContaining({ tenantId: 'tenant-id' }),
        }),
      );
    });
  });

  describe('rekapMingguan / rekapTahunan', () => {
    it('should return a Sunday–Saturday window label', async () => {
      const result = await service.rekapMingguan(mockTenant, '2026-08-26');

      expect(result.periode).toMatchObject({
        jenis: 'mingguan',
        mingguKe: 35,
        awal: '2026-08-23',
        akhir: '2026-08-29',
      });
      expect(result).toHaveProperty('rekapitulasiTonase');
    });

    it('should return a calendar-year label', async () => {
      const result = await service.rekapTahunan(mockTenant, 2026);

      expect(result.periode).toEqual({ jenis: 'tahunan', tahun: 2026 });
      expect(result).toHaveProperty('breakdownJenisSampah');
    });
  });

  describe('dashboardSummary', () => {
    it('should summarize balance, totals and latest transactions', async () => {
      mockPrisma.nasabah.findFirst.mockResolvedValue({
        id: 'nas-id',
        saldoPoin: '150',
      });
      mockPrisma.setorSampah.findMany.mockResolvedValue([
        {
          kodeSetor: 'STR-202608-1001',
          tanggal: new Date('2026-08-26T10:00:00.000Z'),
          totalBeratKg: '15',
          totalPoin: '150',
          status: 'selesai',
        },
      ]);
      mockPrisma.penukaranPoin.findMany.mockResolvedValue([
        {
          kodePenukaran: 'TKR-202608-5001',
          tanggal: new Date('2026-08-26T11:00:00.000Z'),
          poinTerpakai: '75',
          status: 'selesai',
          hadiah: { namaHadiah: 'Voucher Pulsa' },
        },
      ]);

      const result = await service.dashboardSummary(mockTenant, 'user-nas');

      expect(result).toMatchObject({
        saldoPoinSaatIni: 150,
        totalSampahDisetorKg: 15,
        totalPoinDidapat: 150,
        totalPoinDitukar: 75,
      });
      expect(result.transaksiTerakhirSetor?.kodeSetor).toBe('STR-202608-1001');
      expect(result.transaksiTerakhirTukar?.kodePenukaran).toBe(
        'TKR-202608-5001',
      );
    });

    it('should return null latest transactions when empty', async () => {
      mockPrisma.nasabah.findFirst.mockResolvedValue({
        id: 'nas-id',
        saldoPoin: '0',
      });
      mockPrisma.setorSampah.findMany.mockResolvedValue([]);
      mockPrisma.penukaranPoin.findMany.mockResolvedValue([]);

      const result = await service.dashboardSummary(mockTenant, 'user-nas');

      expect(result.transaksiTerakhirSetor).toBeNull();
      expect(result.transaksiTerakhirTukar).toBeNull();
    });

    it('should filter transactional totals by range when provided', async () => {
      mockPrisma.nasabah.findFirst.mockResolvedValue({
        id: 'nas-id',
        saldoPoin: '0',
      });
      mockPrisma.setorSampah.findMany.mockResolvedValue([]);
      mockPrisma.penukaranPoin.findMany.mockResolvedValue([]);

      await service.dashboardSummary(mockTenant, 'user-nas', {
        gte: new Date('2026-08-01T00:00:00.000Z'),
        lt: new Date('2026-09-01T00:00:00.000Z'),
      });

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

  describe('dashboardStats', () => {
    it('should count entities and sum completed deposits', async () => {
      mockPrisma.$transaction.mockImplementation(
        async (queries: Promise<unknown>[]) => Promise.all(queries),
      );
      mockPrisma.nasabah.count.mockResolvedValue(2);
      mockPrisma.kategoriSampah.count.mockResolvedValue(4);
      mockPrisma.setorSampah.count.mockResolvedValue(1);
      mockPrisma.hadiah.count.mockResolvedValue(3);
      mockPrisma.setorSampah.findMany.mockResolvedValue([
        { totalBeratKg: '15', totalPoin: '150' },
      ]);

      const result = await service.dashboardStats(mockTenant);

      expect(result).toMatchObject({
        totalNasabah: 2,
        totalKategoriSampah: 4,
        totalTransaksiSetor: 1,
        totalHadiah: 3,
        totalBeratSampahKg: 15,
        totalPoinTersalurkan: 150,
      });
    });
  });
});
