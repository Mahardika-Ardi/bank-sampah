import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { PrismaService } from '../../infra/prisma/prisma.service.js';
import { CreateTenantDto } from './dto/create-tenant.dto.js';
import { UpdateTenantDto } from './dto/update-tenant.dto.js';

@Injectable()
export class TenantService {
  constructor(private readonly prisma: PrismaService) {}

  async findByAppKey(appKey: string) {
    const tenant = await this.prisma.tenant.findFirst({
      where: { appKey, deletedAt: null },
    });

    if (!tenant || !tenant.isActive) {
      throw new NotFoundException('Invalid or inactive x-app-key');
    }

    return tenant;
  }

  async create(createTenantDto: CreateTenantDto) {
    const existing = await this.prisma.tenant.findUnique({
      where: { appKey: createTenantDto.appKey },
    });

    if (existing) {
      throw new ConflictException('Tenant with this appKey already exists');
    }

    return this.prisma.tenant.create({
      data: createTenantDto,
    });
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

    return this.prisma.tenant.update({
      where: { id },
      data: updateTenantDto,
    });
  }

  async remove(id: string, userId?: string) {
    await this.findOne(id);

    return this.prisma.tenant.update({
      where: { id },
      data: {
        deletedAt: new Date(),
        deletedBy: userId,
        isActive: false,
      },
    });
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

    return this.prisma.tenant.update({
      where: { id },
      data: {
        deletedAt: null,
        deletedBy: null,
        restoredAt: new Date(),
        restoredBy: userId,
        isActive: true,
      },
    });
  }
}
