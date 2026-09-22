import {
  Injectable,
  NotFoundException,
  BadRequestException,
  ForbiddenException,
} from '@nestjs/common';
import { PrismaService } from '../../infra/prisma/prisma.service.js';
import { LoggerService } from '../../infra/logger/logger.service.js';
import { RedisService } from '../../infra/redis/redis.service.js';
import {
  StatusSetor,
  UserRole,
  Prisma,
} from '../../../generated/prisma/client.js';
import { TenantContext } from '../tenant/tenant-select.js';
import {
  CreateSetorSampahDto,
  VerifySetorSampahDto,
} from './dto/setor.dto.js';
import {
  setorAdminListSelect,
  setorAdminRefSelect,
  setorHistorySelect,
  setorKodeSelect,
  setorOwnerSelect,
  setorRateSelect,
  setorReceiptSelect,
  setorVerifySelect,
} from './setor-select.js';

const round2 = (n: number): number => Math.round(n * 100) / 100;
const round3 = (n: number): number => Math.round(n * 1000) / 1000;

function monthRange(bulan: string): { gte: Date; lt: Date } {
  const gte = new Date(`${bulan}-01T00:00:00.000Z`);
  const next = new Date(gte);
  next.setUTCMonth(next.getUTCMonth() + 1);
  return { gte, lt: next };
}

@Injectable()
export class SetorService {
  private readonly context = SetorService.name;

  constructor(
    private readonly prisma: PrismaService,
    private readonly logger: LoggerService,
    private readonly redis: RedisService,
  ) {}

  private async bustReports(tenantId: string): Promise<void> {
    await this.redis.delByPrefix(RedisService.reportsPrefix(tenantId));
  }

  private async resolveNasabah(tenantId: string, userId: string) {
    const nasabah = await this.prisma.nasabah.findFirst({
      where: { idUser: userId, tenantId, deletedAt: null },
      select: setorOwnerSelect,
    });
    if (!nasabah) {
      throw new ForbiddenException(
        'This account is not a customer of your application.',
      );
    }
    return nasabah;
  }

  private async resolveAdmin(tenantId: string, userId: string) {
    const admin = await this.prisma.adminBank.findFirst({
      where: { idUser: userId, tenantId, deletedAt: null },
      select: setorAdminRefSelect,
    });
    if (!admin) {
      throw new ForbiddenException('This account is not a waste bank admin.');
    }
    return admin;
  }

  private async nextKodeSetor(
    tx: Prisma.TransactionClient,
    tenantId: string,
    tanggal: Date,
  ): Promise<string> {
    const prefix = `STR-${tanggal.getUTCFullYear()}${String(
      tanggal.getUTCMonth() + 1,
    ).padStart(2, '0')}-`;
    const latest = await tx.setorSampah.findFirst({
      where: { tenantId, kodeSetor: { startsWith: prefix } },
      orderBy: { kodeSetor: 'desc' },
      select: setorKodeSelect,
    });
    const seq = latest
      ? Number.parseInt(latest.kodeSetor.slice(prefix.length), 10) + 1
      : 1;
    return `${prefix}${String(seq).padStart(4, '0')}`;
  }

  async submit(tenant: TenantContext, userId: string, dto: CreateSetorSampahDto) {
    this.logger.debug(`submit start items=${dto.items.length}`, {
      context: this.context,
      tenantId: tenant.id,
    });

    const nasabah = await this.resolveNasabah(tenant.id, userId);
    const tanggal = new Date(dto.tanggal);

    const kategoriIds = [...new Set(dto.items.map((i) => i.kategoriSampahId))];
    const kategoris = await this.prisma.kategoriSampah.findMany({
      where: { id: { in: kategoriIds }, tenantId: tenant.id, deletedAt: null },
      select: setorRateSelect,
    });
    if (kategoris.length !== kategoriIds.length) {
      throw new BadRequestException(
        'One of the waste categories was not found.',
      );
    }
    const byId = new Map(kategoris.map((k) => [k.id, k]));

    const details = dto.items.map((item) => {
      const kategori = byId.get(item.kategoriSampahId);
      if (!kategori) {
        throw new BadRequestException(
          'One of the waste categories was not found.',
        );
      }
      const berat = round3(item.beratKg);
      return {
        idKategori: kategori.id,
        beratKg: berat,
        beratEstimasiKg: berat,
        subtotalPoin: round2(berat * Number(kategori.poinPerKg)),
        subtotalHarga: round2(berat * Number(kategori.hargaPerKg)),
      };
    });
    const totalBeratKg = round3(details.reduce((s, d) => s + d.beratKg, 0));
    const totalPoin = round2(details.reduce((s, d) => s + d.subtotalPoin, 0));
    const totalHarga = round2(details.reduce((s, d) => s + d.subtotalHarga, 0));

    const created = await this.prisma.$transaction(async (tx) => {
      const kodeSetor = await this.nextKodeSetor(tx, tenant.id, tanggal);
      return tx.setorSampah.create({
        data: {
          tenantId: tenant.id,
          kodeSetor,
          tanggal,
          idNasabah: nasabah.id,
          status: StatusSetor.menunggu_konfirmasi,
          totalBeratKg,
          totalHarga,
          totalPoin,
          catatan: dto.catatan,
          detail: { create: details },
        },
        include: { detail: true },
      });
    });

    this.logger.log(`submit completed kode=${created.kodeSetor}`, {
      context: this.context,
      tenantId: tenant.id,
    });
    await this.bustReports(tenant.id);
    return {
      id: created.id,
      kodeSetor: created.kodeSetor,
      tanggal: created.tanggal,
      status: created.status,
      totalBeratKg: Number(created.totalBeratKg),
      estimasiTotalPoin: Number(created.totalPoin),
      catatan: created.catatan,
      detailSetors: created.detail.map((d) => ({
        kategoriSampahId: d.idKategori,
        beratKg: Number(d.beratKg),
        subtotalPoin: Number(d.subtotalPoin),
      })),
    };
  }

  async mySetor(tenant: TenantContext, userId: string, bulan?: string) {
    const nasabah = await this.resolveNasabah(tenant.id, userId);
    const where: Prisma.SetorSampahWhereInput = {
      tenantId: tenant.id,
      idNasabah: nasabah.id,
      deletedAt: null,
    };
    if (bulan) {
      const { gte, lt } = monthRange(bulan);
      where.tanggal = { gte, lt };
    }
    const rows = await this.prisma.setorSampah.findMany({
      where,
      orderBy: { tanggal: 'desc' },
      select: setorHistorySelect,
    });
    return rows.map((s) => ({
      id: s.id,
      kodeSetor: s.kodeSetor,
      tanggal: s.tanggal,
      status: s.status,
      totalBeratKg: Number(s.totalBeratKg),
      totalPoin: Number(s.totalPoin),
      catatan: s.catatan,
      detailSetors: s.detail.map((d) => ({
        kategoriSampahId: d.idKategori,
        beratKg: Number(d.beratKg),
        subtotalPoin: Number(d.subtotalPoin),
        kategoriSampah: {
          namaKategori: d.kategori.namaKategori,
          jenis: d.kategori.jenis,
        },
      })),
    }));
  }

  async adminList(
    tenant: TenantContext,
    query: { status?: StatusSetor; bulan?: string },
  ) {
    const where: Prisma.SetorSampahWhereInput = {
      tenantId: tenant.id,
      deletedAt: null,
    };
    if (query.status) where.status = query.status;
    if (query.bulan) {
      const { gte, lt } = monthRange(query.bulan);
      where.tanggal = { gte, lt };
    }
    const rows = await this.prisma.setorSampah.findMany({
      where,
      orderBy: { tanggal: 'desc' },
      select: setorAdminListSelect,
    });
    return rows.map((s) => ({
      id: s.id,
      kodeSetor: s.kodeSetor,
      tanggal: s.tanggal,
      nasabah: { namaNasabah: s.nasabah.namaNasabah, telp: s.nasabah.telp },
      status: s.status,
      totalBeratKg: Number(s.totalBeratKg),
      totalPoin: Number(s.totalPoin),
    }));
  }

  async receipt(tenant: TenantContext, userId: string, role: UserRole, id: string) {
    const setor = await this.prisma.setorSampah.findFirst({
      where: { id, tenantId: tenant.id, deletedAt: null },
      select: setorReceiptSelect,
    });
    if (!setor) {
      throw new NotFoundException('Deposit not found.');
    }
    if (role === UserRole.nasabah) {
      const nasabah = await this.resolveNasabah(tenant.id, userId);
      if (setor.idNasabah !== nasabah.id) {
        throw new NotFoundException('Deposit not found.');
      }
    }
    return {
      id: setor.id,
      kodeSetor: setor.kodeSetor,
      tanggal: setor.tanggal,
      status: setor.status,
      nasabah: {
        namaNasabah: setor.nasabah.namaNasabah,
        alamat: setor.nasabah.alamat,
        telp: setor.nasabah.telp,
      },
      totalBeratKg: Number(setor.totalBeratKg),
      totalPoin: Number(setor.totalPoin),
      catatanAdmin: setor.catatanAdmin,
      detailSetors: setor.detail.map((d) => ({
        kategori: d.kategori.namaKategori,
        jenis: d.kategori.jenis,
        beratKg: Number(d.beratTerverifikasiKg ?? d.beratKg),
        poinPerKg: Number(d.kategori.poinPerKg),
        subtotalPoin: Number(d.subtotalPoin),
      })),
    };
  }

  async verify(
    tenant: TenantContext,
    adminUserId: string,
    id: string,
    dto: VerifySetorSampahDto,
  ) {
    this.logger.debug(`verify start id=${id} status=${dto.status}`, {
      context: this.context,
      tenantId: tenant.id,
    });

    const admin = await this.resolveAdmin(tenant.id, adminUserId);
    const setor = await this.prisma.setorSampah.findFirst({
      where: { id, tenantId: tenant.id, deletedAt: null },
      select: setorVerifySelect,
    });
    if (!setor) {
      throw new NotFoundException('Deposit not found.');
    }

    const allowed: Record<StatusSetor, StatusSetor[]> = {
      [StatusSetor.menunggu_konfirmasi]: [
        StatusSetor.diverifikasi,
        StatusSetor.selesai,
        StatusSetor.ditolak,
      ],
      [StatusSetor.diverifikasi]: [StatusSetor.selesai, StatusSetor.ditolak],
      [StatusSetor.selesai]: [],
      [StatusSetor.ditolak]: [],
    };
    const next = dto.status as StatusSetor;
    const finalStates: StatusSetor[] = [
      StatusSetor.diverifikasi,
      StatusSetor.selesai,
      StatusSetor.ditolak,
    ];
    if (
      !finalStates.includes(next) ||
      !allowed[setor.status].includes(next)
    ) {
      throw new BadRequestException(
        `Status cannot be changed from ${setor.status} to ${dto.status}.`,
      );
    }

    if (next === StatusSetor.ditolak) {
      const rejected = await this.prisma.setorSampah.update({
        where: { id },
        data: { status: next, idAdmin: admin.id, catatanAdmin: dto.catatanAdmin },
      });
      this.logger.log(`verify rejected id=${id}`, {
        context: this.context,
        tenantId: tenant.id,
      });
      await this.bustReports(tenant.id);
      return {
        id: rejected.id,
        status: rejected.status,
        totalPoin: Number(rejected.totalPoin),
        catatanAdmin: rejected.catatanAdmin,
      };
    }

    const realByKategori = new Map(
      (dto.itemsReal ?? []).map((i) => [i.kategoriSampahId, round3(i.beratKgReal)]),
    );
    for (const kategoriId of realByKategori.keys()) {
      if (!setor.detail.some((d) => d.idKategori === kategoriId)) {
        throw new BadRequestException(
          'itemsReal contains a category missing from the submission.',
        );
      }
    }
    const kategoriIds = setor.detail.map((d) => d.idKategori);
    const kategoris = await this.prisma.kategoriSampah.findMany({
      where: { id: { in: kategoriIds }, tenantId: tenant.id },
      select: setorRateSelect,
    });
    const poinByKategori = new Map(
      kategoris.map((k) => [k.id, { poin: Number(k.poinPerKg), harga: Number(k.hargaPerKg) }]),
    );

    const recomputed = setor.detail.map((d) => {
      const real = realByKategori.get(d.idKategori) ?? Number(d.beratKg);
      const rates = poinByKategori.get(d.idKategori) ?? { poin: 0, harga: 0 };
      return {
        id: d.id,
        beratTerverifikasiKg: round3(real),
        subtotalPoin: round2(real * rates.poin),
        subtotalHarga: round2(real * rates.harga),
      };
    });
    const totalBeratKg = round3(
      recomputed.reduce((s, d) => s + d.beratTerverifikasiKg, 0),
    );
    const totalPoin = round2(recomputed.reduce((s, d) => s + d.subtotalPoin, 0));
    const totalHarga = round2(
      recomputed.reduce((s, d) => s + d.subtotalHarga, 0),
    );

    const result = await this.prisma.$transaction(async (tx) => {
      for (const d of recomputed) {
        await tx.detailSetor.update({
          where: { id: d.id },
          data: {
            beratTerverifikasiKg: d.beratTerverifikasiKg,
            subtotalPoin: d.subtotalPoin,
            subtotalHarga: d.subtotalHarga,
          },
        });
      }
      const updated = await tx.setorSampah.update({
        where: { id },
        data: {
          status: next,
          idAdmin: admin.id,
          catatanAdmin: dto.catatanAdmin,
          totalBeratKg,
          totalPoin,
          totalHarga,
        },
      });
      if (next === StatusSetor.selesai) {
        await tx.nasabah.update({
          where: { id: setor.idNasabah },
          data: { saldoPoin: { increment: totalPoin } },
        });
        this.logger.debug(
          `verify credited ${totalPoin} poin to nasabah=${setor.idNasabah}`,
          { context: this.context, tenantId: tenant.id },
        );
      }
      return updated;
    });

    this.logger.log(`verify completed id=${id} status=${next}`, {
      context: this.context,
      tenantId: tenant.id,
    });
    await this.bustReports(tenant.id);
    return {
      id: result.id,
      status: result.status,
      totalPoin: Number(result.totalPoin),
      catatanAdmin: result.catatanAdmin,
    };
  }
}
