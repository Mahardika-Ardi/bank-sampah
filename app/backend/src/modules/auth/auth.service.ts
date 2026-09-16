import {
  Injectable,
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../../infra/prisma/prisma.service.js';
import { HashingService } from '../../shared/hashing/hashing.service.js';
import { RegisterNasabahBankDto } from './dto/register-nasabah.dto.js';
import { RegisterAdminBankDto } from './dto/register-admin.dto.js';
import { LoginDto } from './dto/login.dto.js';
import { UserRole, Tenant } from '../../../generated/prisma/client.js';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly hashingService: HashingService,
    private readonly jwtService: JwtService,
  ) {}

  async registerNasabah(tenant: Tenant, dto: RegisterNasabahBankDto) {
    const existingUser = await this.prisma.user.findFirst({
      where: { username: dto.username, tenantId: tenant.id },
    });

    if (existingUser) {
      throw new BadRequestException(
        'Username sudah digunakan pada database aplikasi Anda.',
      );
    }

    const hashedPassword = await this.hashingService.hash(dto.password);

    return await this.prisma.$transaction(async (tx) => {
      const user = await tx.user.create({
        data: {
          username: dto.username,
          password: hashedPassword,
          role: UserRole.nasabah,
          tenantId: tenant.id,
          nasabah: {
            create: {
              tenantId: tenant.id,
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
  }

  async registerAdmin(tenant: Tenant, dto: RegisterAdminBankDto) {
    const existingUser = await this.prisma.user.findFirst({
      where: { username: dto.username, tenantId: tenant.id },
    });

    if (existingUser) {
      throw new BadRequestException(
        'Username sudah digunakan pada database aplikasi Anda.',
      );
    }

    const hashedPassword = await this.hashingService.hash(dto.password);

    return await this.prisma.$transaction(async (tx) => {
      const user = await tx.user.create({
        data: {
          username: dto.username,
          password: hashedPassword,
          role: UserRole.admin_bank,
          tenantId: tenant.id,
          adminBank: {
            create: {
              tenantId: tenant.id,
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
  }

  async login(tenant: Tenant, dto: LoginDto) {
    const user = await this.prisma.user.findFirst({
      where: { username: dto.username, tenantId: tenant.id },
      include: { nasabah: true, adminBank: true },
    });

    if (!user) {
      throw new UnauthorizedException('Username atau password salah.');
    }

    const isPasswordValid = await this.hashingService.compare(
      dto.password,
      user.password,
    );
    if (!isPasswordValid) {
      throw new UnauthorizedException('Username atau password salah.');
    }

    const payload = {
      sub: user.id,
      username: user.username,
      role: user.role,
      tenantId: tenant.id,
    };
    const token = await this.jwtService.signAsync(payload);

    return {
      id: user.id,
      username: user.username,
      role: user.role,
      nasabah: user.nasabah,
      adminBank: user.adminBank,
      token,
    };
  }

  async getProfile(userId: string, tenantId: string) {
    const user = await this.prisma.user.findFirst({
      where: { id: userId, tenantId },
      include: { nasabah: true, adminBank: true },
    });

    if (!user) {
      throw new UnauthorizedException('User tidak ditemukan.');
    }

    return {
      id: user.id,
      username: user.username,
      role: user.role,
      nasabah: user.nasabah,
      adminBank: user.adminBank,
    };
  }
}
