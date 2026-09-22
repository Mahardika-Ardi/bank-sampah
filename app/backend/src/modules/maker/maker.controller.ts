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
  UseGuards,
} from '@nestjs/common';
import type { Request, Response } from 'express';
import { ConfigService } from '@nestjs/config';
import { ApiTags, ApiOperation, ApiResponse, ApiHeader, ApiBody, ApiQuery } from '@nestjs/swagger';
import { Throttle, SkipThrottle } from '@nestjs/throttler';
import { MakerService } from './maker.service.js';
import { CheckKeyDto } from './dto/check-key.dto.js';
import { RegisterAppMakerDto } from './dto/register-maker.dto.js';
import { LoginMakerDto } from './dto/login-maker.dto.js';
import { APP_KEY_HEADER } from '../../shared/constants/tenant.constants.js';
import { setAccessTokenCookie } from '../../shared/utils/cookie.utils.js';
import { LoginThrottlerGuard } from '../../shared/guards/login-throttler.guard.js';
import {
  MAKER_REGISTER_RESPONSE,
  MAKER_LOGIN_RESPONSE,
  MAKER_PROFILE_RESPONSE,
  MAKER_CHECK_KEY_RESPONSE,
  MAKER_BANKS_RESPONSE,
} from '../../shared/swagger/api-examples.js';

@ApiTags('App Maker')
@Controller()
export class MakerController {
  constructor(
    private readonly makerService: MakerService,
    private readonly config: ConfigService,
  ) {}

  @Post('maker/register')
  @UseGuards(LoginThrottlerGuard)
  @ApiOperation({
    summary: 'Register App Maker (Student) account to get x-app-key',
  })
  @ApiBody({ type: RegisterAppMakerDto })
  @ApiResponse({
    status: 201,
    description: 'App Maker registered successfully',
    schema: { example: MAKER_REGISTER_RESPONSE },
  })
  async registerMaker(
    @Body() dto: RegisterAppMakerDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const data = await this.makerService.registerMaker(dto);
    setAccessTokenCookie(this.config, res, data.token);
    return {
      message:
        'App Maker registered successfully! Save the following appKey for the x-app-key header.',
      data,
    };
  }

  @Post('maker/login')
  @UseGuards(LoginThrottlerGuard)
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Login App Maker account' })
  @ApiBody({ type: LoginMakerDto })
  @ApiResponse({
    status: 200,
    description: 'Login successful',
    schema: { example: MAKER_LOGIN_RESPONSE },
  })
  async loginMaker(
    @Body() dto: LoginMakerDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const data = await this.makerService.loginMaker(dto);
    setAccessTokenCookie(this.config, res, data.token);
    return {
      message: 'App Maker login successful',
      data,
    };
  }

  @Get('maker/profile')
  @ApiHeader({
    name: APP_KEY_HEADER,
    required: true,
    description: 'Tenant App Key',
  })
  @ApiOperation({ summary: 'Get App Maker profile with data statistics' })
  @ApiResponse({
    status: 200,
    description: 'Profile retrieved successfully',
    schema: { example: MAKER_PROFILE_RESPONSE },
  })
  async getProfile(@Req() req: Request) {
    const tenant = req.tenant;
    if (!tenant) {
      throw new UnauthorizedException(`${APP_KEY_HEADER} header is missing`);
    }
    const data = await this.makerService.getProfile(tenant);
    return {
      message: 'App Maker profile retrieved successfully',
      data,
    };
  }

  @Get('maker/check-key')
  @ApiOperation({ summary: 'Find App Key by student email' })
  @ApiQuery({ name: 'email', example: 'siswa1@smk.sch.id' })
  @ApiResponse({
    status: 200,
    description: 'App Key found',
    schema: { example: MAKER_CHECK_KEY_RESPONSE },
  })
  @ApiResponse({ status: 404, description: 'App Maker account not found' })
  async checkKey(@Query() query: CheckKeyDto) {
    const data = await this.makerService.checkKey(query.email);
    return {
      message: 'App Key found',
      data,
    };
  }

  @Get('maker/banks')
  @UseGuards(LoginThrottlerGuard)
  @SkipThrottle()
  @Throttle({ banks: { limit: 30, ttl: 60 * 1000 } })
  @ApiOperation({ summary: 'List active waste banks for the pre-login bank picker' })
  @ApiResponse({
    status: 200,
    description: 'Active waste banks retrieved successfully',
    schema: { example: MAKER_BANKS_RESPONSE },
  })
  @ApiResponse({ status: 429, description: 'Too many requests, please try again later' })
  async listBanks() {
    const data = await this.makerService.listBanks();
    return {
      message: 'Active waste banks retrieved successfully',
      data,
    };
  }
}
