import {
  Injectable,
  ForbiddenException,
} from '@nestjs/common';
import { PrismaService } from '../../infra/prisma/prisma.service.js';
import { LoggerService } from '../../infra/logger/logger.service.js';
import { RedisService } from '../../infra/redis/redis.service.js';
import {
  StatusSetor,
  StatusPenukaran,
  JenisSampah,
} from '../../../generated/prisma/client.js';
import { TenantContext } from '../tenant/tenant-select.js';
import {
  DateRange,
  monthRange,
  weekNumber,
  weekRange,
  yearRange,
} from '../../shared/utils/date-range.utils.js';
import {
  reportBalanceSelect,
  reportDetailSelect,
  reportSetorRowSelect,
  reportSetorSumSelect,
  reportTukarRowSelect,
  reportTukarSumSelect,
} from './reports-select.js';

const round2 = (n: number): number => Math.round(n * 100) / 100;
const round6 = (n: number): number => Math.round(n * 1_000_000) / 1_000_000;

const JENIS_LIST: JenisSampah[] = [
  JenisSampah.plastik,
  JenisSampah.kertas,
  JenisSampah.logam,
  JenisSampah.kaca,
];

type RekapBody = {
  rekapitulasiTonase: {
    totalKg: number;
    totalTon: number;
    totalEstimasiPembayaranRupiah: number;
    totalPoinDiterbitkan: number;
  };
  breakdownJenisSampah: Record<
    string,
    { tonaseKg: number; rupiah: number; poin: number }
  >;
  rekapitulasiPenukaranPoin: {
    totalTransaksiPenukaran: number;
    totalPoinTerpakai: number;
  };
};

type SummaryBody = {
  totalSampahDisetorKg: number;
  totalPoinDidapat: number;
  totalPoinDitukar: number;
  transaksiTerakhirSetor: {
    kodeSetor: string;
    tanggal: Date;
    beratKg: number;
    poin: number;
    status: StatusSetor;
  } | null;
  transaksiTerakhirTukar: {
    kodePenukaran: string;
    tanggal: Date;
    hadiah: string;
    poin: number;
    status: StatusPenukaran;
  } | null;
};

type StatsBody = {
  totalNasabah: number;
  totalKategoriSampah: number;
  totalTransaksiSetor: number;
  totalHadiah: number;
  totalBeratSampahKg: number;
  totalPoinTersalurkan: number;
};

@Injectable()
export class ReportsService {
  private readonly context = ReportsService.name;

  constructor(
    private readonly prisma: PrismaService,
    private readonly logger: LoggerService,
    private readonly redis: RedisService,
  ) {}

  private async resolveNasabah(tenantId: string, userId: string) {
    const nasabah = await this.prisma.nasabah.findFirst({
      where: { idUser: userId, tenantId, deletedAt: null },
      select: reportBalanceSelect,
    });
    if (!nasabah) {
      throw new ForbiddenException(
        'This account is not a customer of your application.',
      );
    }
    return nasabah;
  }

  async rekapBulanan(tenant: TenantContext, bulan: string) {
    this.logger.debug(`rekapBulanan start bulan=${bulan}`, {
      context: this.context,
      tenantId: tenant.id,
    });
    const key = RedisService.key(tenant.id, 'reports', `rekap:bulanan:${bulan}`);
    const cached = await this.redis.get<RekapBody>(key);
    if (cached) return { periode: bulan, ...cached };
    const body = await this.rekapitulasi(tenant.id, monthRange(bulan));
    this.logger.log(`rekapBulanan completed bulan=${bulan}`, {
      context: this.context,
      tenantId: tenant.id,
    });
    await this.redis.set(key, body, 120);
    return { periode: bulan, ...body };
  }

  async rekapMingguan(tenant: TenantContext, tanggal: string) {
    this.logger.debug(`rekapMingguan start tanggal=${tanggal}`, {
      context: this.context,
      tenantId: tenant.id,
    });
    const key = RedisService.key(
      tenant.id,
      'reports',
      `rekap:mingguan:${tanggal.slice(0, 10)}`,
    );
    const cached = await this.redis.get<RekapBody>(key);
    const range = weekRange(tanggal);
    const { week } = weekNumber(tanggal);
    const iso = (d: Date): string => d.toISOString().slice(0, 10);
    const periode = {
      jenis: 'mingguan',
      mingguKe: week,
      awal: iso(range.gte),
      akhir: iso(new Date(range.lt.getTime() - 1)),
    };
    if (cached) {
      this.logger.debug('rekapMingguan cache hit', {
        context: this.context,
        tenantId: tenant.id,
      });
      return { periode, ...cached };
    }
    const body = await this.rekapitulasi(tenant.id, range);
    this.logger.log(`rekapMingguan completed tanggal=${tanggal}`, {
      context: this.context,
      tenantId: tenant.id,
    });
    await this.redis.set(key, body, 120);
    return { periode, ...body };
  }

  async rekapTahunan(tenant: TenantContext, tahun: number) {
    this.logger.debug(`rekapTahunan start tahun=${tahun}`, {
      context: this.context,
      tenantId: tenant.id,
    });
    const key = RedisService.key(tenant.id, 'reports', `rekap:tahunan:${tahun}`);
    const cached = await this.redis.get<RekapBody>(key);
    const periode = { jenis: 'tahunan', tahun };
    if (cached) {
      this.logger.debug('rekapTahunan cache hit', {
        context: this.context,
        tenantId: tenant.id,
      });
      return { periode, ...cached };
    }
    const body = await this.rekapitulasi(tenant.id, yearRange(tahun));
    this.logger.log(`rekapTahunan completed tahun=${tahun}`, {
      context: this.context,
      tenantId: tenant.id,
    });
    await this.redis.set(key, body, 120);
    return { periode, ...body };
  }

  private async rekapitulasi(tenantId: string, range: DateRange) {
    const { gte, lt } = range;

    const details = await this.prisma.detailSetor.findMany({
      where: {
        tenantId,
        deletedAt: null,
        setor: {
          status: StatusSetor.selesai,
          tanggal: { gte, lt },
          deletedAt: null,
        },
      },
      select: reportDetailSelect,
    });

    const breakdown: Record<string, { tonaseKg: number; rupiah: number; poin: number }> = {};
    for (const jenis of JENIS_LIST) {
      breakdown[jenis] = { tonaseKg: 0, rupiah: 0, poin: 0 };
    }
    let totalKg = 0;
    let totalRupiah = 0;
    let totalPoin = 0;
    for (const d of details) {
      const kg = Number(d.beratTerverifikasiKg ?? d.beratKg);
      const rupiah = Number(d.subtotalHarga);
      const poin = Number(d.subtotalPoin);
      totalKg += kg;
      totalRupiah += rupiah;
      totalPoin += poin;
      const entry = breakdown[d.kategori.jenis];
      entry.tonaseKg = round2(entry.tonaseKg + kg);
      entry.rupiah += rupiah;
      entry.poin += poin;
    }
    totalKg = round2(totalKg);

    const penukaran = await this.prisma.penukaranPoin.findMany({
      where: { tenantId, tanggal: { gte, lt }, deletedAt: null },
      select: reportTukarSumSelect,
    });
    const totalPoinTerpakai = round2(
      penukaran.reduce((s, p) => s + Number(p.poinTerpakai), 0),
    );

    return {
      rekapitulasiTonase: {
        totalKg,
        totalTon: round6(totalKg / 1000),
        totalEstimasiPembayaranRupiah: totalRupiah,
        totalPoinDiterbitkan: totalPoin,
      },
      breakdownJenisSampah: breakdown,
      rekapitulasiPenukaranPoin: {
        totalTransaksiPenukaran: penukaran.length,
        totalPoinTerpakai,
      },
    };
  }

  async dashboardSummary(
    tenant: TenantContext,
    userId: string,
    range?: DateRange,
  ) {
    const nasabah = await this.resolveNasabah(tenant.id, userId);
    const windowLabel = range
      ? `${range.gte.toISOString()}_${range.lt.toISOString()}`
      : 'all';
    const key = RedisService.key(
      tenant.id,
      'reports',
      `summary:${nasabah.id}:${windowLabel}`,
    );
    const cached = await this.redis.get<SummaryBody>(key);
    if (cached) {
      this.logger.debug('dashboardSummary cache hit', {
        context: this.context,
        tenantId: tenant.id,
      });
      return { ...cached, saldoPoinSaatIni: Number(nasabah.saldoPoin) };
    }

    const setors = await this.prisma.setorSampah.findMany({
      where: {
        tenantId: tenant.id,
        idNasabah: nasabah.id,
        status: StatusSetor.selesai,
        deletedAt: null,
        ...(range ? { tanggal: { gte: range.gte, lt: range.lt } } : {}),
      },
      orderBy: { tanggal: 'desc' },
      select: reportSetorRowSelect,
    });
    const tukars = await this.prisma.penukaranPoin.findMany({
      where: {
        tenantId: tenant.id,
        idNasabah: nasabah.id,
        deletedAt: null,
        ...(range ? { tanggal: { gte: range.gte, lt: range.lt } } : {}),
      },
      orderBy: { tanggal: 'desc' },
      select: reportTukarRowSelect,
    });

    const totalSampahDisetorKg = round2(
      setors.reduce((s, x) => s + Number(x.totalBeratKg), 0),
    );
    const totalPoinDidapat = round2(
      setors.reduce((s, x) => s + Number(x.totalPoin), 0),
    );
    const totalPoinDitukar = round2(
      tukars.reduce((s, x) => s + Number(x.poinTerpakai), 0),
    );
    const lastSetor = setors[0];
    const lastTukar = tukars[0];

    const body: SummaryBody = {
      totalSampahDisetorKg,
      totalPoinDidapat,
      totalPoinDitukar,
      transaksiTerakhirSetor: lastSetor
        ? {
            kodeSetor: lastSetor.kodeSetor,
            tanggal: lastSetor.tanggal,
            beratKg: Number(lastSetor.totalBeratKg),
            poin: Number(lastSetor.totalPoin),
            status: lastSetor.status,
          }
        : null,
      transaksiTerakhirTukar: lastTukar
        ? {
            kodePenukaran: lastTukar.kodePenukaran,
            tanggal: lastTukar.tanggal,
            hadiah: lastTukar.hadiah.namaHadiah,
            poin: Number(lastTukar.poinTerpakai),
            status: lastTukar.status,
          }
        : null,
    };
    await this.redis.set(key, body, 30);
    // Balance is always live — never served stale.
    return { ...body, saldoPoinSaatIni: Number(nasabah.saldoPoin) };
  }

  async dashboardStats(tenant: TenantContext, range?: DateRange) {
    this.logger.debug('dashboardStats start', {
      context: this.context,
      tenantId: tenant.id,
    });
    const windowLabel = range
      ? `${range.gte.toISOString()}_${range.lt.toISOString()}`
      : 'all';
    const key = RedisService.key(
      tenant.id,
      'reports',
      `stats:${windowLabel}`,
    );
    const cached = await this.redis.get<StatsBody>(key);
    if (cached) {
      this.logger.debug('dashboardStats cache hit', {
        context: this.context,
        tenantId: tenant.id,
      });
      return cached;
    }
    const rangeFilter = range
      ? { tanggal: { gte: range.gte, lt: range.lt } }
      : {};
    const [
      totalNasabah,
      totalKategoriSampah,
      totalTransaksiSetor,
      totalHadiah,
      completed,
    ] = await this.prisma.$transaction([
      this.prisma.nasabah.count({
        where: { tenantId: tenant.id, deletedAt: null },
      }),
      this.prisma.kategoriSampah.count({
        where: { tenantId: tenant.id, deletedAt: null },
      }),
      this.prisma.setorSampah.count({
        where: { tenantId: tenant.id, deletedAt: null, ...rangeFilter },
      }),
      this.prisma.hadiah.count({
        where: { tenantId: tenant.id, deletedAt: null },
      }),
      this.prisma.setorSampah.findMany({
        where: {
          tenantId: tenant.id,
          status: StatusSetor.selesai,
          deletedAt: null,
          ...rangeFilter,
        },
        select: reportSetorSumSelect,
      }),
    ]);

    const totalBeratSampahKg = round2(
      completed.reduce((s, x) => s + Number(x.totalBeratKg), 0),
    );
    const totalPoinTersalurkan = round2(
      completed.reduce((s, x) => s + Number(x.totalPoin), 0),
    );
    const body: StatsBody = {
      totalNasabah,
      totalKategoriSampah,
      totalTransaksiSetor,
      totalHadiah,
      totalBeratSampahKg,
      totalPoinTersalurkan,
    };
    await this.redis.set(key, body, 60);
    return body;
  }
}
