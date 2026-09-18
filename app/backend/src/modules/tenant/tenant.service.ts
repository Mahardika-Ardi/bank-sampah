import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { PrismaService } from '../../infra/prisma/prisma.service.js';
import { CreateTenantDto } from './dto/create-tenant.dto.js';
import { UpdateTenantDto } from './dto/update-tenant.dto.js';
import { LoggerService } from '../../infra/logger/logger.service.js';

@Injectable()
export class TenantService {
  private readonly context = TenantService.name;

  constructor(
    private readonly prisma: PrismaService,
    private readonly logger: LoggerService,
  ) {}

  async findByAppKey(appKey: string) {
    this.logger.debug('findByAppKey start', {
      context: this.context,
    });
    const tenant = await this.prisma.tenant.findFirst({
      where: { appKey, deletedAt: null },
    });

    if (!tenant || !tenant.isActive) {
      throw new NotFoundException('Invalid or inactive x-app-key');
    }

    return tenant;
  }

  async create(createTenantDto: CreateTenantDto) {
    this.logger.debug(`create start appKey=${createTenantDto.appKey}`, {
      context: this.context,
    });
    const existing = await this.prisma.tenant.findUnique({
      where: { appKey: createTenantDto.appKey },
    });

    if (existing) {
      throw new ConflictException('Tenant with this appKey already exists');
    }

    const tenant = await this.prisma.tenant.create({
      data: createTenantDto,
    });
    this.logger.log(`create completed id=${tenant.id}`, {
      context: this.context,
    });
    return tenant;
  }

  async findAll() {
    return this.prisma.tenant.findMany({
      where: { deletedAt: null },
    });
  }

  async findOne(id: string) {
    const tenant = await this.prisma.tenant.findFirst({
      where: { id, deletedAt: null },
    });

    if (!tenant) {
      throw new NotFoundException(`Tenant with ID ${id} not found`);
    }

    return tenant;
  }

  async update(id: string, updateTenantDto: UpdateTenantDto) {
    await this.findOne(id);

    const tenant = await this.prisma.tenant.update({
      where: { id },
      data: updateTenantDto,
    });
    this.logger.log(`update completed id=${id}`, { context: this.context });
    return tenant;
  }

  async remove(id: string, userId?: string) {
    await this.findOne(id);

    const tenant = await this.prisma.tenant.update({
      where: { id },
      data: {
        deletedAt: new Date(),
        deletedBy: userId,
        isActive: false,
      },
    });
    this.logger.log(`remove (soft-delete) completed id=${id}`, {
      context: this.context,
    });
    return tenant;
  }

  async restore(id: string, userId?: string) {
    const tenant = await this.prisma.tenant.findUnique({
      where: { id },
    });

    if (!tenant || !tenant.deletedAt) {
      throw new NotFoundException(
        `Deleted tenant with ID ${id} not found`,
      );
    }

    const restored = await this.prisma.tenant.update({
      where: { id },
      data: {
        deletedAt: null,
        deletedBy: null,
        restoredAt: new Date(),
        restoredBy: userId,
        isActive: true,
      },
    });
    this.logger.log(`restore completed id=${id}`, { context: this.context });
    return restored;
  }
}
