import {
  Injectable,
  NotFoundException,
  BadRequestException,
  ForbiddenException,
} from '@nestjs/common';
import { PrismaService } from '../../infra/prisma/prisma.service.js';
import { LoggerService } from '../../infra/logger/logger.service.js';
import {
  StatusPenukaran,
  UserRole,
  Prisma,
} from '../../../generated/prisma/client.js';
import { TenantContext } from '../tenant/tenant-select.js';
import { CreatePenukaranPoinDto } from './dto/penukaran.dto.js';
import { RedisService } from '../../infra/redis/redis.service.js';
import {
  tukarAdminListSelect,
  tukarHadiahSelect,
  tukarHistorySelect,
  tukarKodeSelect,
  tukarOwnerSelect,
  tukarReceiptSelect,
  tukarStatusSelect,
} from './penukaran-select.js';

const round2 = (n: number): number => Math.round(n * 100) / 100;

function monthRange(bulan: string): { gte: Date; lt: Date } {
  const gte = new Date(`${bulan}-01T00:00:00.000Z`);
  const next = new Date(gte);
  next.setUTCMonth(next.getUTCMonth() + 1);
  return { gte, lt: next };
}

@Injectable()
export class PenukaranService {
  private readonly context = PenukaranService.name;

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
      select: tukarOwnerSelect,
    });
    if (!nasabah) {
      throw new ForbiddenException(
        'This account is not a customer of your application.',
      );
    }
    return nasabah;
  }

  private async nextKodePenukaran(
    tx: Prisma.TransactionClient,
    tenantId: string,
    tanggal: Date,
  ): Promise<string> {
    const prefix = `TKR-${tanggal.getUTCFullYear()}${String(
      tanggal.getUTCMonth() + 1,
    ).padStart(2, '0')}-`;
    const latest = await tx.penukaranPoin.findFirst({
      where: { tenantId, kodePenukaran: { startsWith: prefix } },
      orderBy: { kodePenukaran: 'desc' },
      select: tukarKodeSelect,
    });
    const seq = latest
      ? Number.parseInt(latest.kodePenukaran.slice(prefix.length), 10) + 1
      : 1;
    return `${prefix}${String(seq).padStart(4, '0')}`;
  }

  async redeem(tenant: TenantContext, userId: string, dto: CreatePenukaranPoinDto) {
    this.logger.debug(`redeem start hadiah=${dto.hadiahId}`, {
      context: this.context,
      tenantId: tenant.id,
    });

    const nasabah = await this.resolveNasabah(tenant.id, userId);
    const hadiah = await this.prisma.hadiah.findFirst({
      where: { id: dto.hadiahId, tenantId: tenant.id, deletedAt: null },
      select: tukarHadiahSelect,
    });
    if (!hadiah) {
      throw new NotFoundException('Reward not found.');
    }

    const result = await this.prisma.$transaction(async (tx) => {
      const freshNasabah = await tx.nasabah.findFirstOrThrow({
        where: { id: nasabah.id },
      });
      const freshHadiah = await tx.hadiah.findFirstOrThrow({
        where: { id: hadiah.id },
      });
      const cost = Number(freshHadiah.poinDibutuhkan);
      const balance = Number(freshNasabah.saldoPoin);
      if (balance < cost) {
        throw new BadRequestException(
          `Insufficient balance: have ${balance} points, need ${cost} points.`,
        );
      }
      if (freshHadiah.stok < 1) {
        throw new BadRequestException(
          `Reward "${freshHadiah.namaHadiah}" is out of stock.`,
        );
      }
      const tanggal = new Date();
      const kodePenukaran = await this.nextKodePenukaran(tx, tenant.id, tanggal);
      const created = await tx.penukaranPoin.create({
        data: {
          tenantId: tenant.id,
          kodePenukaran,
          tanggal,
          idNasabah: nasabah.id,
          idHadiah: hadiah.id,
          poinTerpakai: cost,
          status: StatusPenukaran.diproses,
        },
      });
      await tx.nasabah.update({
        where: { id: nasabah.id },
        data: { saldoPoin: { decrement: round2(cost) } },
      });
      await tx.hadiah.update({
        where: { id: hadiah.id },
        data: { stok: { decrement: 1 } },
      });
      const remaining = await tx.nasabah.findFirstOrThrow({
        where: { id: nasabah.id },
      });
      return { created, remaining: Number(remaining.saldoPoin) };
    });

    this.logger.log(`redeem completed kode=${result.created.kodePenukaran}`, {
      context: this.context,
      tenantId: tenant.id,
    });
    await this.bustReports(tenant.id);
    return {
      id: result.created.id,
      kodePenukaran: result.created.kodePenukaran,
      tanggal: result.created.tanggal,
      hadiahId: result.created.idHadiah,
      poinTerpakai: Number(result.created.poinTerpakai),
      sisaSaldoPoin: result.remaining,
      status: result.created.status,
      hadiah: { namaHadiah: hadiah.namaHadiah },
    };
  }

  async myPenukaran(tenant: TenantContext, userId: string) {
    const nasabah = await this.resolveNasabah(tenant.id, userId);
    const rows = await this.prisma.penukaranPoin.findMany({
      where: { tenantId: tenant.id, idNasabah: nasabah.id, deletedAt: null },
      orderBy: { tanggal: 'desc' },
      select: tukarHistorySelect,
    });
    return rows.map((p) => ({
      id: p.id,
      kodePenukaran: p.kodePenukaran,
      tanggal: p.tanggal,
      poinTerpakai: Number(p.poinTerpakai),
      status: p.status,
      hadiah: {
        namaHadiah: p.hadiah.namaHadiah,
        poinDibutuhkan: Number(p.hadiah.poinDibutuhkan),
        foto: p.hadiah.foto,
      },
    }));
  }

  async adminList(tenant: TenantContext, bulan?: string) {
    const where: {
      tenantId: string;
      deletedAt: null;
      tanggal?: { gte: Date; lt: Date };
    } = { tenantId: tenant.id, deletedAt: null };
    if (bulan) {
      const { gte, lt } = monthRange(bulan);
      where.tanggal = { gte, lt };
    }
    const rows = await this.prisma.penukaranPoin.findMany({
      where,
      orderBy: { tanggal: 'desc' },
      select: tukarAdminListSelect,
    });
    return rows.map((p) => ({
      id: p.id,
      kodePenukaran: p.kodePenukaran,
      tanggal: p.tanggal,
      nasabah: { namaNasabah: p.nasabah.namaNasabah, telp: p.nasabah.telp },
      hadiah: { namaHadiah: p.hadiah.namaHadiah },
      poinTerpakai: Number(p.poinTerpakai),
      status: p.status,
    }));
  }

  async receipt(tenant: TenantContext, userId: string, role: UserRole, id: string) {
    const penukaran = await this.prisma.penukaranPoin.findFirst({
      where: { id, tenantId: tenant.id, deletedAt: null },
      select: tukarReceiptSelect,
    });
    if (!penukaran) {
      throw new NotFoundException('Redemption transaction not found.');
    }
    if (role === UserRole.nasabah) {
      const nasabah = await this.resolveNasabah(tenant.id, userId);
      if (penukaran.idNasabah !== nasabah.id) {
        throw new NotFoundException('Redemption transaction not found.');
      }
    }
    return {
      id: penukaran.id,
      kodePenukaran: penukaran.kodePenukaran,
      tanggal: penukaran.tanggal,
      nasabah: {
        namaNasabah: penukaran.nasabah.namaNasabah,
        telp: penukaran.nasabah.telp,
      },
      hadiah: {
        namaHadiah: penukaran.hadiah.namaHadiah,
        poinDibutuhkan: Number(penukaran.hadiah.poinDibutuhkan),
      },
      poinTerpakai: Number(penukaran.poinTerpakai),
      status: penukaran.status,
    };
  }

  async updateStatus(
    tenant: TenantContext,
    id: string,
    status: StatusPenukaran,
  ) {
    this.logger.debug(`updateStatus start id=${id} status=${status}`, {
      context: this.context,
      tenantId: tenant.id,
    });

    const current = await this.prisma.penukaranPoin.findFirst({
      where: { id, tenantId: tenant.id, deletedAt: null },
      select: tukarStatusSelect,
    });
    if (!current) {
      throw new NotFoundException('Redemption transaction not found.');
    }

    if (
      current.status === StatusPenukaran.diproses &&
      status === StatusPenukaran.selesai
    ) {
      const updated = await this.prisma.penukaranPoin.update({
        where: { id },
        data: { status },
      });
      this.logger.log(`updateStatus completed id=${id} status=${status}`, {
        context: this.context,
        tenantId: tenant.id,
      });
      await this.bustReports(tenant.id);
      return { id: updated.id, status: updated.status };
    }

    if (
      current.status === StatusPenukaran.selesai &&
      status === StatusPenukaran.diproses
    ) {
      const refunded = Number(current.poinTerpakai);
      const updated = await this.prisma.$transaction(async (tx) => {
        await tx.nasabah.update({
          where: { id: current.idNasabah },
          data: { saldoPoin: { increment: round2(refunded) } },
        });
        await tx.hadiah.update({
          where: { id: current.idHadiah },
          data: { stok: { increment: 1 } },
        });
        return tx.penukaranPoin.update({ where: { id }, data: { status } });
      });
      this.logger.log(
        `updateStatus voided id=${id} refunded=${refunded} poin`,
        { context: this.context, tenantId: tenant.id },
      );
      await this.bustReports(tenant.id);
      return { id: updated.id, status: updated.status };
    }

    throw new BadRequestException(
      `Status cannot be changed from ${current.status} to ${status}.`,
    );
  }
}
