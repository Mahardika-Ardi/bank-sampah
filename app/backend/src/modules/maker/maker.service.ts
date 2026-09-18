import {
  Injectable,
  NotFoundException,
  BadRequestException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { randomUUID } from 'crypto';
import { PrismaService } from '../../infra/prisma/prisma.service.js';
import { HashingService } from '../../shared/hashing/hashing.service.js';
import { Tenant, UserRole } from '../../../generated/prisma/client.js';
import { RegisterAppMakerDto } from './dto/register-maker.dto.js';
import { LoginMakerDto } from './dto/login-maker.dto.js';
import { LoggerService } from '../../infra/logger/logger.service.js';

@Injectable()
export class MakerService {
  private readonly context = MakerService.name;

  constructor(
    private readonly prisma: PrismaService,
    private readonly hashingService: HashingService,
    private readonly jwtService: JwtService,
    private readonly logger: LoggerService,
  ) {}

  async registerMaker(dto: RegisterAppMakerDto) {
    this.logger.debug(`registerMaker start email=${dto.email}`, {
      context: this.context,
    });
    const existingMaker = await this.prisma.user.findFirst({
      where: { username: dto.email },
    });

    if (existingMaker) {
      throw new BadRequestException(
        `Email ${dto.email} is already registered as an App Maker.`,
      );
    }

    const appKey = randomUUID();
    const tenant = await this.prisma.tenant.create({
      data: {
        appKey,
        name: dto.namaApp,
        email: dto.email,
        namaSiswa: dto.namaSiswa,
        kelas: dto.kelas,
        appName: dto.namaApp,
        isActive: true,
      },
    });

    const hashedPassword = await this.hashingService.hash(dto.password);

    const user = await this.prisma.$transaction(async (tx) => {
      const newUser = await tx.user.create({
        data: {
          username: dto.email,
          password: hashedPassword,
          role: UserRole.admin_bank,
          tenantId: tenant.id,
          adminBank: {
            create: {
              namaUnit: dto.namaApp,
              namaPengelola: dto.namaSiswa,
              telp: '-',
            },
          },
        },
        include: { adminBank: true },
      });
      return newUser;
    });

    const payload = {
      sub: user.id,
      email: user.username,
      type: 'APP_MAKER',
      tenantId: tenant.id,
    };
    const token = await this.jwtService.signAsync(payload);

    this.logger.log(`registerMaker completed appKey=${tenant.appKey}`, {
      context: this.context,
    });
    return {
      id: tenant.id,
      email: user.username,
      namaSiswa: dto.namaSiswa,
      kelas: dto.kelas,
      namaApp: dto.namaApp,
      appKey: tenant.appKey,
      token,
      createdAt: tenant.createdAt,
    };
  }

  async loginMaker(dto: LoginMakerDto) {
    this.logger.debug(`loginMaker start email=${dto.email}`, {
      context: this.context,
    });
    const user = await this.prisma.user.findFirst({
      where: { username: dto.email },
    });

    if (!user) {
      throw new UnauthorizedException('Incorrect email or password.');
    }

    const isPasswordValid = await this.hashingService.compare(
      dto.password,
      user.password,
    );
    if (!isPasswordValid) {
      throw new UnauthorizedException('Incorrect email or password.');
    }

    const tenant = await this.prisma.tenant.findUnique({
      where: { id: user.tenantId },
    });

    const payload = {
      sub: user.id,
      email: user.username,
      type: 'APP_MAKER',
      tenantId: user.tenantId,
    };
    const token = await this.jwtService.signAsync(payload);

    this.logger.log(`loginMaker completed email=${dto.email}`, {
      context: this.context,
    });
    return {
      id: user.id,
      email: user.username,
      namaApp: tenant?.name || 'Bank Sampah Digital Hub',
      appKey: tenant?.appKey,
      token,
    };
  }

  async getProfile(tenant: Tenant) {
    this.logger.debug(`getProfile start tenantId=${tenant.id}`, {
      context: this.context,
    });
    const [
      totalNasabah,
      totalKategoriSampah,
      totalTransaksiSetor,
      totalHadiah,
    ] = await this.prisma.$transaction([
      this.prisma.nasabah.count({
        where: { tenantId: tenant.id, deletedAt: null },
      }),
      this.prisma.kategoriSampah.count({
        where: { tenantId: tenant.id, deletedAt: null },
      }),
      this.prisma.setorSampah.count({
        where: { tenantId: tenant.id, deletedAt: null },
      }),
        this.prisma.hadiah.count({
          where: { tenantId: tenant.id, deletedAt: null },
        }),
      ]);

    this.logger.log(`getProfile completed tenantId=${tenant.id}`, {
      context: this.context,
    });
    return {
      id: tenant.id,
      email: tenant.email,
      namaSiswa: tenant.namaSiswa,
      kelas: tenant.kelas,
      namaApp: tenant.appName ?? tenant.name,
      appKey: tenant.appKey,
      stats: {
        totalNasabah,
        totalKategoriSampah,
        totalTransaksiSetor,
        totalHadiah,
      },
    };
  }

  async checkKey(email: string) {
    this.logger.debug(`checkKey start email=${email}`, {
      context: this.context,
    });
    const user = await this.prisma.user.findFirst({
      where: { username: email, role: UserRole.admin_bank, deletedAt: null },
      orderBy: { createdAt: 'asc' },
      include: { tenant: true, adminBank: true },
    });

    if (!user) {
      throw new NotFoundException(
        'App Maker account with this email was not found.',
      );
    }

    this.logger.log(`checkKey completed email=${email}`, {
      context: this.context,
    });
    return {
      email: user.tenant.email ?? user.username,
      namaSiswa: user.tenant.namaSiswa ?? user.adminBank?.namaPengelola ?? null,
      namaApp: user.tenant.appName ?? user.tenant.name,
      appKey: user.tenant.appKey,
    };
  }
}