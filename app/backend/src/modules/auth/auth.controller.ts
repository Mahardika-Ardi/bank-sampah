import {
  Controller,
  Post,
  Get,
  Body,
  Req,
  Res,
  HttpCode,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import type { Request, Response } from 'express';
import { ConfigService } from '@nestjs/config';
import { ApiTags, ApiOperation, ApiResponse, ApiHeader, ApiBearerAuth } from '@nestjs/swagger';
import { UnauthorizedException } from '@nestjs/common';
import { APP_KEY_HEADER } from '../../shared/constants/tenant.constants.js';
import { setAccessTokenCookie } from '../../shared/utils/cookie.utils.js';
import { AuthService } from './auth.service.js';
import { RegisterNasabahBankDto } from './dto/register-nasabah.dto.js';
import { RegisterAdminBankDto } from './dto/register-admin.dto.js';
import { LoginDto } from './dto/login.dto.js';
import { JwtAuthGuard } from '../../shared/guards/jwt-auth.guard.js';

@ApiTags('Authentication')
@Controller()
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly config: ConfigService,
  ) {}

  private requireTenant(req: Request) {
    const tenant = req.tenant;
    if (!tenant) {
      throw new UnauthorizedException(`${APP_KEY_HEADER} header is missing`);
    }
    return tenant;
  }

  @Post('auth/nasabah/register')
  @ApiHeader({ name: APP_KEY_HEADER, required: true, description: 'Tenant App Key' })
  @ApiOperation({ summary: 'Register a new Waste Bank Customer (Nasabah)' })
  @ApiResponse({ status: 201, description: 'Customer registered successfully' })
  async registerNasabah(
    @Req() req: Request,
    @Body() dto: RegisterNasabahBankDto,
  ) {
    const tenant = this.requireTenant(req);
    const data = await this.authService.registerNasabah(tenant, dto);
    return {
      message: 'Registrasi nasabah berhasil',
      data,
    };
  }

  @Post('auth/admin/register')
  @ApiHeader({ name: APP_KEY_HEADER, required: true, description: 'Tenant App Key' })
  @ApiOperation({ summary: 'Register a new Waste Bank Admin unit' })
  @ApiResponse({ status: 201, description: 'Admin unit registered successfully' })
  async registerAdmin(@Req() req: Request, @Body() dto: RegisterAdminBankDto) {
    const tenant = this.requireTenant(req);
    const data = await this.authService.registerAdmin(tenant, dto);
    return {
      message: 'Pendaftaran unit Bank Sampah berhasil',
      data,
    };
  }

  @Post('auth/login')
  @HttpCode(HttpStatus.CREATED)
  @ApiHeader({ name: APP_KEY_HEADER, required: true, description: 'Tenant App Key' })
  @ApiOperation({ summary: 'Login user (Customer or Bank Admin)' })
  @ApiResponse({ status: 201, description: 'Login successful' })
  async login(
    @Req() req: Request,
    @Body() dto: LoginDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const tenant = this.requireTenant(req);
    const data = await this.authService.login(tenant, dto);
    setAccessTokenCookie(this.config, res, data.token);
    return {
      message: `Login ${data.role} berhasil`,
      data,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get('auth/me')
  @ApiHeader({ name: APP_KEY_HEADER, required: true, description: 'Tenant App Key' })
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({ summary: 'Get currently logged-in user profile & role' })
  @ApiResponse({ status: 200, description: 'Profile retrieved successfully' })
  async getProfile(@Req() req: Request) {
    const tenant = this.requireTenant(req);
    if (!req.user) {
      throw new UnauthorizedException('Invalid or expired token');
    }
    const data = await this.authService.getProfile(req.user.sub, tenant.id);
    return {
      message: 'Data profile user berhasil diambil',
      data,
    };
  }
}
