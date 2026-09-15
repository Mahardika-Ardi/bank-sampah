import {
  Injectable,
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { PrismaService } from '../../infra/prisma/prisma.service.js';
import { HashingService } from '../../shared/hashing/hashing.service.js';
import { UserRole } from '../../../generated/prisma/client.js';
import { LoggerService } from '../../infra/logger/logger.service.js';

@Injectable()
export class SeedService {
  private readonly logger = new LoggerService(SeedService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly hashingService: HashingService,
  ) {}

  async runSeed() {
    this.verifyEnvironment();

    try {
      return await this.executeSeedTransaction();
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

  private async executeSeedTransaction() {
    return this.prisma.$transaction(async (tx) => {
      const tenant = await tx.tenant.upsert({
        where: { appKey: 'default-tenant-key' },
        update: {},
        create: {
          name: 'Bank Sampah Utama',
          appKey: 'default-tenant-key',
          isActive: true,
        },
      });

      const hashedPassword = await this.hashingService.hash('Admin123!');

      const user = await tx.user.upsert({
        where: {
          tenantId_username: {
            tenantId: tenant.id,
            username: 'admin',
          },
        },
        update: {},
        create: {
          username: 'admin',
          password: hashedPassword,
          role: UserRole.admin_bank,
          tenantId: tenant.id,
          adminBank: {
            create: {
              namaUnit: 'Unit Utama',
              namaPengelola: 'Administrator',
              telp: '081234567890',
            },
          },
        },
        include: { adminBank: true },
      });

      this.logger.log(
        `Successfully seeded tenant and admin user for: ${tenant.name}`,
      );

      return {
        message: 'Database seeded successfully',
        tenant: { id: tenant.id, name: tenant.name, appKey: tenant.appKey },
        user: { id: user.id, username: user.username, role: user.role },
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
