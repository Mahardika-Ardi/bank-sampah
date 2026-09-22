import {
  Injectable,
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { StringValue } from 'ms';
import { PrismaService } from '../../infra/prisma/prisma.service.js';
import { HashingService } from '../../shared/hashing/hashing.service.js';
import { RegisterNasabahBankDto } from './dto/register-nasabah.dto.js';
import { RegisterAdminBankDto } from './dto/register-admin.dto.js';
import { LoginDto } from './dto/login.dto.js';
import { UserRole } from '../../../generated/prisma/client.js';
import { TenantContext } from '../tenant/tenant-select.js';
import { LoggerService } from '../../infra/logger/logger.service.js';
import { RedisService } from '../../infra/redis/redis.service.js';
import {
  userLoginSelect,
  userProfileSelect,
  usernameTakenSelect,
} from './auth-select.js';

@Injectable()
export class AuthService {
  private readonly context = AuthService.name;

  constructor(
    private readonly prisma: PrismaService,
    private readonly hashingService: HashingService,
    private readonly jwtService: JwtService,
    private readonly logger: LoggerService,
    private readonly redis: RedisService,
    private readonly config: ConfigService,
  ) {}

  private async bustReports(tenantId: string): Promise<void> {
    await this.redis.delByPrefix(RedisService.reportsPrefix(tenantId));
  }

  async registerNasabah(tenant: TenantContext, dto: RegisterNasabahBankDto) {
    this.logger.debug(`registerNasabah start username=${dto.username}`, {
      context: this.context,
      tenantId: tenant.id,
    });
    const existingUser = await this.prisma.user.findFirst({
      where: { username: dto.username, tenantId: tenant.id },
      select: usernameTakenSelect,
    });

    if (existingUser) {
      throw new BadRequestException(
        `Username "${dto.username}" is already used in your application database.`,
      );
    }

    const hashedPassword = await this.hashingService.hash(dto.password);

    const result = await this.prisma.$transaction(async (tx) => {
      const user = await tx.user.create({
        data: {
          username: dto.username,
          password: hashedPassword,
          role: UserRole.nasabah,
          tenantId: tenant.id,
          nasabah: {
            create: {
              namaNasabah: dto.namaNasabah,
              alamat: dto.alamat,
              telp: dto.telp,
              saldoPoin: 0,
              foto: dto.foto || null,
            },
          },
        },
        include: { nasabah: true },
      });

      return {
        id: user.id,
        username: user.username,
        role: user.role,
        nasabah: user.nasabah,
      };
    });

    this.logger.log(`registerNasabah completed username=${dto.username}`, {
      context: this.context,
      tenantId: tenant.id,
    });
    await this.bustReports(tenant.id);
    return result;
  }

  async registerAdmin(tenant: TenantContext, dto: RegisterAdminBankDto) {
    this.logger.debug(`registerAdmin start username=${dto.username}`, {
      context: this.context,
      tenantId: tenant.id,
    });
    const existingUser = await this.prisma.user.findFirst({
      where: { username: dto.username, tenantId: tenant.id },
      select: usernameTakenSelect,
    });

    if (existingUser) {
      throw new BadRequestException(
        `Username "${dto.username}" is already used in your application database.`,
      );
    }

    const hashedPassword = await this.hashingService.hash(dto.password);

    const result = await this.prisma.$transaction(async (tx) => {
      const user = await tx.user.create({
        data: {
          username: dto.username,
          password: hashedPassword,
          role: UserRole.admin_bank,
          tenantId: tenant.id,
          adminBank: {
            create: {
              namaUnit: dto.namaUnit,
              namaPengelola: dto.namaPengelola,
              telp: dto.telp,
            },
          },
        },
        include: { adminBank: true },
      });

      return {
        id: user.id,
        username: user.username,
        role: user.role,
        adminBank: user.adminBank,
      };
    });

    this.logger.log(`registerAdmin completed username=${dto.username}`, {
      context: this.context,
      tenantId: tenant.id,
    });
    await this.bustReports(tenant.id);
    return result;
  }

  async login(tenant: TenantContext, dto: LoginDto) {
    this.logger.debug(`login start username=${dto.username}`, {
      context: this.context,
      tenantId: tenant.id,
    });
    const user = await this.prisma.user.findFirst({
      where: { username: dto.username, tenantId: tenant.id },
      select: userLoginSelect,
    });

    if (!user) {
      throw new UnauthorizedException('Incorrect username or password.');
    }

    const isPasswordValid = await this.hashingService.compare(
      dto.password,
      user.password,
    );
    if (!isPasswordValid) {
      throw new UnauthorizedException('Incorrect username or password.');
    }

    const payload = {
      sub: user.id,
      username: user.username,
      role: user.role,
      tenantId: tenant.id,
    };
    const token = await this.jwtService.signAsync(payload);
    const refreshToken = await this.jwtService.signAsync(
      { sub: user.id, tenantId: tenant.id, type: 'refresh' },
      {
        secret: this.config.getOrThrow<string>('auth.refreshSecret'),
        expiresIn: (this.config.get<string>('auth.refreshExpiresIn') ??
          '7d') as StringValue,
      },
    );

    this.logger.log(`login completed username=${dto.username}`, {
      context: this.context,
      tenantId: tenant.id,
    });
    return {
      id: user.id,
      username: user.username,
      role: user.role,
      nasabah: user.nasabah
        ? { ...user.nasabah, saldoPoin: Number(user.nasabah.saldoPoin) }
        : null,
      adminBank: user.adminBank,
      token,
      refreshToken,
    };
  }

  async refresh(refreshToken: string, tenantId: string) {
    this.logger.debug('refresh start', {
      context: this.context,
      tenantId,
    });
    let payload: { sub: string; tenantId: string; type?: string };
    try {
      payload = await this.jwtService.verifyAsync(refreshToken, {
        secret: this.config.getOrThrow<string>('auth.refreshSecret'),
      });
    } catch {
      throw new UnauthorizedException('Invalid or expired refresh token.');
    }
    if (payload.type !== 'refresh' || payload.tenantId !== tenantId) {
      throw new UnauthorizedException('Invalid or expired refresh token.');
    }
    const user = await this.prisma.user.findFirst({
      where: { id: payload.sub, tenantId, deletedAt: null },
      select: userProfileSelect,
    });
    if (!user) {
      throw new UnauthorizedException('User not found.');
    }
    const tokenPayload = {
      sub: user.id,
      username: user.username,
      role: user.role,
      tenantId,
    };
    const token = await this.jwtService.signAsync(tokenPayload);
    this.logger.log(`refresh completed user=${user.username}`, {
      context: this.context,
      tenantId,
    });
    return {
      id: user.id,
      username: user.username,
      role: user.role,
      token,
    };
  }

  async getProfile(userId: string, tenantId: string) {
    const user = await this.prisma.user.findFirst({
      where: { id: userId, tenantId },
      select: userProfileSelect,
    });

    if (!user) {
      throw new UnauthorizedException('User not found.');
    }

    return {
      id: user.id,
      username: user.username,
      role: user.role,
      nasabah: user.nasabah
        ? { ...user.nasabah, saldoPoin: Number(user.nasabah.saldoPoin) }
        : null,
      adminBank: user.adminBank,
    };
  }
}
