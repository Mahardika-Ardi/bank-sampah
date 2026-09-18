import {
  Injectable,
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { PrismaService } from '../../infra/prisma/prisma.service.js';
import { HashingService } from '../../shared/hashing/hashing.service.js';
import {
  UserRole,
  Tenant,
  JenisSampah,
  StatusSetor,
  StatusPenukaran,
  KategoriSampah,
} from '../../../generated/prisma/client.js';
import { LoggerService } from '../../infra/logger/logger.service.js';

@Injectable()
export class SeedService {
  private readonly context = SeedService.name;

  constructor(
    private readonly prisma: PrismaService,
    private readonly hashingService: HashingService,
    private readonly logger: LoggerService,
  ) {}

  async runSeed(tenant: Tenant) {
    this.logger.debug(`runSeed start tenantId=${tenant.id}`, {
      context: this.context,
    });
    this.verifyEnvironment();

    try {
      return await this.executeSeedTransaction(tenant);
    } catch (error) {
      this.handleSeedError(error);
    }
  }

  private verifyEnvironment(): void {
    if (process.env.NODE_ENV === 'production') {
      throw new BadRequestException(
        'Seeding is disabled in production environment',
      );
    }
  }

  private async executeSeedTransaction(tenant: Tenant) {
    return this.prisma.$transaction(async (tx) => {
      this.logger.debug('seeding users (admin + 2 nasabah)', {
        context: this.context,
        tenantId: tenant.id,
      });
      const hashedPassword = await this.hashingService.hash('admin123');
      const nasabahPassword = await this.hashingService.hash('password123');

      const adminUser = await tx.user.upsert({
        where: {
          tenantId_username: {
            tenantId: tenant.id,
            username: 'admin_banksampah',
          },
        },
        update: {
          password: hashedPassword,
        },
        create: {
          username: 'admin_banksampah',
          password: hashedPassword,
          role: UserRole.admin_bank,
          tenantId: tenant.id,
          adminBank: {
            create: {
              namaUnit: 'Bank Sampah Asri Jaya',
              namaPengelola: 'Bapak H. Sukirman',
              telp: '081234567890',
            },
          },
        },
        include: { adminBank: true },
      });

      const budiUser = await tx.user.upsert({
        where: {
          tenantId_username: {
            tenantId: tenant.id,
            username: 'nasabah_budi',
          },
        },
        update: {
          password: nasabahPassword,
        },
        create: {
          username: 'nasabah_budi',
          password: nasabahPassword,
          role: UserRole.nasabah,
          tenantId: tenant.id,
          nasabah: {
            create: {
              namaNasabah: 'Budi Santoso',
              alamat: 'Jl. Merdeka No. 12, RT 03/05',
              telp: '085678901234',
              saldoPoin: 150,
              foto: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150',
            },
          },
        },
        include: { nasabah: true },
      });

      await tx.user.upsert({
        where: {
          tenantId_username: {
            tenantId: tenant.id,
            username: 'nasabah_siti',
          },
        },
        update: {
          password: nasabahPassword,
        },
        create: {
          username: 'nasabah_siti',
          password: nasabahPassword,
          role: UserRole.nasabah,
          tenantId: tenant.id,
          nasabah: {
            create: {
              namaNasabah: 'Siti Aminah',
              alamat: 'Jl. Mawar Indah No. 45',
              telp: '081987654321',
              saldoPoin: 80,
              foto: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
            },
          },
        },
        include: { nasabah: true },
      });

      this.logger.debug('seeding 4 waste categories + 3 rewards', {
        context: this.context,
        tenantId: tenant.id,
      });
      const categoriesData = [
        {
          namaKategori: 'Botol Plastik PET (Bersih)',
          hargaPerKg: 3500,
          poinPerKg: 10,
          jenis: JenisSampah.plastik,
          foto: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=300',
        },
        {
          namaKategori: 'Kardus & Karton Bekas',
          hargaPerKg: 2000,
          poinPerKg: 5,
          jenis: JenisSampah.kertas,
          foto: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=300',
        },
        {
          namaKategori: 'Kaleng Aluminium / Minuman',
          hargaPerKg: 12000,
          poinPerKg: 30,
          jenis: JenisSampah.logam,
          foto: 'https://images.unsplash.com/photo-1558611848-73f7eb4001a1?w=300',
        },
        {
          namaKategori: 'Botol Kaca Bening',
          hargaPerKg: 1500,
          poinPerKg: 4,
          jenis: JenisSampah.kaca,
          foto: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=300',
        },
      ];

      const categories: Record<string, KategoriSampah> = {};
      for (const cat of categoriesData) {
        const record = await tx.kategoriSampah.upsert({
          where: {
            tenantId_namaKategori: {
              tenantId: tenant.id,
              namaKategori: cat.namaKategori,
            },
          },
          update: {
            hargaPerKg: cat.hargaPerKg,
            poinPerKg: cat.poinPerKg,
            jenis: cat.jenis,
            foto: cat.foto,
          },
          create: {
            tenantId: tenant.id,
            ...cat,
          },
        });
        categories[cat.namaKategori] = record;
      }

      const rewardsData = [
        {
          namaHadiah: 'Voucher Pulsa / E-Wallet Rp 25.000',
          poinDibutuhkan: 75,
          stok: 50,
          foto: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=300',
        },
        {
          namaHadiah: 'Minyak Goreng Bimoli 1 Liter',
          poinDibutuhkan: 100,
          stok: 25,
          foto: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=300',
        },
        {
          namaHadiah: 'Beras Super Pulen 2.5 Kg',
          poinDibutuhkan: 180,
          stok: 15,
          foto: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300',
        },
      ];

      for (const rew of rewardsData) {
        await tx.hadiah.upsert({
          where: {
            tenantId_namaHadiah: {
              tenantId: tenant.id,
              namaHadiah: rew.namaHadiah,
            },
          },
          update: {
            poinDibutuhkan: rew.poinDibutuhkan,
            stok: rew.stok,
            foto: rew.foto,
          },
          create: {
            tenantId: tenant.id,
            ...rew,
          },
        });
      }

      this.logger.debug('seeding sample deposit + redemption', {
        context: this.context,
        tenantId: tenant.id,
      });
      const existingDeposit = await tx.setorSampah.findFirst({
        where: { tenantId: tenant.id, kodeSetor: 'STR-202608-1001' },
      });

      if (!existingDeposit) {
        await tx.setorSampah.create({
          data: {
            tenantId: tenant.id,
            kodeSetor: 'STR-202608-1001',
            idNasabah: budiUser.nasabah!.id,
            idAdmin: adminUser.adminBank!.id,
            status: StatusSetor.selesai,
            totalBeratKg: 15,
            totalPoin: 150,
            totalHarga: 45000,
            catatan: 'Sampah sudah dipilah rapi dalam karung',
            catatanAdmin: 'Penimbangan selesai dan akurat.',
            detail: {
              create: [
                {
                  idKategori: categories['Botol Plastik PET (Bersih)'].id,
                  beratKg: 10,
                  beratEstimasiKg: 10,
                  beratTerverifikasiKg: 10,
                  subtotalPoin: 100,
                  subtotalHarga: 35000,
                },
                {
                  idKategori: categories['Kardus & Karton Bekas'].id,
                  beratKg: 5,
                  beratEstimasiKg: 5,
                  beratTerverifikasiKg: 5,
                  subtotalPoin: 25,
                  subtotalHarga: 10000,
                },
              ],
            },
          },
        });
      }

      const existingRedemption = await tx.penukaranPoin.findFirst({
        where: { tenantId: tenant.id, kodePenukaran: 'TKR-202608-5001' },
      });

      if (!existingRedemption) {
        const voucherReward = await tx.hadiah.findFirst({
          where: {
            tenantId: tenant.id,
            namaHadiah: 'Voucher Pulsa / E-Wallet Rp 25.000',
          },
        });

        if (voucherReward) {
          await tx.penukaranPoin.create({
            data: {
              tenantId: tenant.id,
              kodePenukaran: 'TKR-202608-5001',
              idNasabah: budiUser.nasabah!.id,
              idHadiah: voucherReward.id,
              poinTerpakai: 75,
              status: StatusPenukaran.selesai,
            },
          });
        }
      }

      this.logger.log(`runSeed completed tenant=${tenant.name}`, {
        context: this.context,
        tenantId: tenant.id,
      });

      return {
        admin: {
          username: 'admin_banksampah',
          password: 'admin123',
          namaUnit: 'Bank Sampah Asri Jaya',
        },
        nasabah1: {
          username: 'nasabah_budi',
          password: 'password123',
          namaNasabah: 'Budi Santoso',
          saldoPoin: 150,
        },
        nasabah2: {
          username: 'nasabah_siti',
          password: 'password123',
          namaNasabah: 'Siti Aminah',
          saldoPoin: 80,
        },
        kategoriSampahCount: 4,
        hadiahKatalogCount: 3,
      };
    });
  }

  private handleSeedError(error: unknown): never {
    this.logger.error(
      'Failed to execute database seeding',
      error instanceof Error ? error.stack : undefined,
    );

    if (error instanceof BadRequestException) {
      throw error;
    }

    throw new InternalServerErrorException(
      'An unexpected error occurred during database seeding',
    );
  }
}
