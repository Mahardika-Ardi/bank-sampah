import {
  Controller,
  Post,
  Get,
  Body,
  Req,
  Res,
  Query,
  HttpCode,
  HttpStatus,
  UnauthorizedException,
} from '@nestjs/common';
import type { Request, Response } from 'express';
import { ConfigService } from '@nestjs/config';
import { ApiTags, ApiOperation, ApiResponse, ApiHeader } from '@nestjs/swagger';
import { MakerService } from './maker.service.js';
import { CheckKeyDto } from './dto/check-key.dto.js';
import { RegisterAppMakerDto } from '../auth/dto/register-maker.dto.js';
import { LoginMakerDto } from './dto/login-maker.dto.js';
import { APP_KEY_HEADER } from '../../shared/constants/tenant.constants.js';
import { setAccessTokenCookie } from '../../shared/utils/cookie.utils.js';

@ApiTags('App Maker')
@Controller()
export class MakerController {
  constructor(
    private readonly makerService: MakerService,
    private readonly config: ConfigService,
  ) {}

  @Post('maker/register')
  @ApiOperation({ summary: 'Register App Maker (Student) account to get x-app-key' })
  @ApiResponse({ status: 201, description: 'App Maker registered successfully' })
  async registerMaker(
    @Body() dto: RegisterAppMakerDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const data = await this.makerService.registerMaker(dto);
    setAccessTokenCookie(this.config, res, data.token);
    return {
      message:
        'Registrasi App Maker berhasil! Simpan appKey berikut untuk dimasukkan di header x-app-key.',
      data,
    };
  }

  @Post('maker/login')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Login App Maker account' })
  @ApiResponse({ status: 200, description: 'Login successful' })
  async loginMaker(
    @Body() dto: LoginMakerDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const data = await this.makerService.loginMaker(dto);
    setAccessTokenCookie(this.config, res, data.token);
    return {
      message: 'Login App Maker berhasil',
      data,
    };
  }

  @Get('maker/profile')
  @ApiHeader({ name: APP_KEY_HEADER, required: true, description: 'Tenant App Key' })
  @ApiOperation({ summary: 'Get App Maker profile with data statistics' })
  @ApiResponse({ status: 200, description: 'Profile retrieved successfully' })
  async getProfile(@Req() req: Request) {
    const tenant = req.tenant;
    if (!tenant) {
      throw new UnauthorizedException(`${APP_KEY_HEADER} header is missing`);
    }
    const data = await this.makerService.getProfile(tenant);
    return {
      message: 'Data profile App Maker berhasil diambil',
      data,
    };
  }

  @Get('maker/check-key')
  @ApiOperation({ summary: 'Find App Key by student email' })
  @ApiResponse({ status: 200, description: 'App Key found' })
  @ApiResponse({ status: 404, description: 'App Maker account not found' })
  async checkKey(@Query() query: CheckKeyDto) {
    const data = await this.makerService.checkKey(query.email);
    return {
      message: 'App Key ditemukan',
      data,
    };
  }
}
