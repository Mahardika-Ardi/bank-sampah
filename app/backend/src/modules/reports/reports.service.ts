import {
  Injectable,
  ForbiddenException,
} from '@nestjs/common';
import { PrismaService } from '../../infra/prisma/prisma.service.js';
import { LoggerService } from '../../infra/logger/logger.service.js';
import {
  StatusSetor,
  Tenant,
  JenisSampah,
} from '../../../generated/prisma/client.js';
import {
  DateRange,
  monthRange,
  weekNumber,
  weekRange,
  yearRange,
} from '../../shared/utils/date-range.utils.js';

const round2 = (n: number): number => Math.round(n * 100) / 100;
const round6 = (n: number): number => Math.round(n * 1_000_000) / 1_000_000;

const JENIS_LIST: JenisSampah[] = [
  JenisSampah.plastik,
  JenisSampah.kertas,
  JenisSampah.logam,
  JenisSampah.kaca,
];

@Injectable()
export class ReportsService {
  private readonly context = ReportsService.name;

  constructor(
    private readonly prisma: PrismaService,
    private readonly logger: LoggerService,
  ) {}

  private async resolveNasabah(tenantId: string, userId: string) {
    const nasabah = await this.prisma.nasabah.findFirst({
      where: { idUser: userId, tenantId, deletedAt: null },
    });
    if (!nasabah) {
      throw new ForbiddenException(
        'This account is not a customer of your application.',
      );
    }
    return nasabah;
  }

  async rekapBulanan(tenant: Tenant, bulan: string) {
    this.logger.debug(`rekapBulanan start bulan=${bulan}`, {
      context: this.context,
      tenantId: tenant.id,
    });
    const body = await this.rekapitulasi(tenant.id, monthRange(bulan));
    this.logger.log(`rekapBulanan completed bulan=${bulan}`, {
      context: this.context,
      tenantId: tenant.id,
    });
    return { periode: bulan, ...body };
  }

  async rekapMingguan(tenant: Tenant, tanggal: string) {
    this.logger.debug(`rekapMingguan start tanggal=${tanggal}`, {
      context: this.context,
      tenantId: tenant.id,
    });
    const range = weekRange(tanggal);
    const body = await this.rekapitulasi(tenant.id, range);
    const { week } = weekNumber(tanggal);
    const iso = (d: Date): string => d.toISOString().slice(0, 10);
    this.logger.log(`rekapMingguan completed tanggal=${tanggal}`, {
      context: this.context,
      tenantId: tenant.id,
    });
    return {
      periode: {
        jenis: 'mingguan',
        mingguKe: week,
        awal: iso(range.gte),
        akhir: iso(new Date(range.lt.getTime() - 1)),
      },
      ...body,
    };
  }

  async rekapTahunan(tenant: Tenant, tahun: number) {
    this.logger.debug(`rekapTahunan start tahun=${tahun}`, {
      context: this.context,
      tenantId: tenant.id,
    });
    const body = await this.rekapitulasi(tenant.id, yearRange(tahun));
    this.logger.log(`rekapTahunan completed tahun=${tahun}`, {
      context: this.context,
      tenantId: tenant.id,
    });
    return { periode: { jenis: 'tahunan', tahun }, ...body };
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
      include: { kategori: true },
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
    tenant: Tenant,
    userId: string,
    range?: DateRange,
  ) {
    const nasabah = await this.resolveNasabah(tenant.id, userId);

    const setors = await this.prisma.setorSampah.findMany({
      where: {
        tenantId: tenant.id,
        idNasabah: nasabah.id,
        status: StatusSetor.selesai,
        deletedAt: null,
        ...(range ? { tanggal: { gte: range.gte, lt: range.lt } } : {}),
      },
      orderBy: { tanggal: 'desc' },
    });
    const tukars = await this.prisma.penukaranPoin.findMany({
      where: {
        tenantId: tenant.id,
        idNasabah: nasabah.id,
        deletedAt: null,
        ...(range ? { tanggal: { gte: range.gte, lt: range.lt } } : {}),
      },
      orderBy: { tanggal: 'desc' },
      include: { hadiah: true },
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

    return {
      saldoPoinSaatIni: Number(nasabah.saldoPoin),
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
  }

  async dashboardStats(tenant: Tenant, range?: DateRange) {
    this.logger.debug('dashboardStats start', {
      context: this.context,
      tenantId: tenant.id,
    });
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
      }),
    ]);

    const totalBeratSampahKg = round2(
      completed.reduce((s, x) => s + Number(x.totalBeratKg), 0),
    );
    const totalPoinTersalurkan = round2(
      completed.reduce((s, x) => s + Number(x.totalPoin), 0),
    );
    return {
      totalNasabah,
      totalKategoriSampah,
      totalTransaksiSetor,
      totalHadiah,
      totalBeratSampahKg,
      totalPoinTersalurkan,
    };
  }
}
