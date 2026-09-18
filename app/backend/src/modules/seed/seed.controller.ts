import { Controller, Post, HttpCode, HttpStatus, Req } from '@nestjs/common';
import type { Request } from 'express';
import { UnauthorizedException } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiHeader } from '@nestjs/swagger';
import { SeedService } from './seed.service.js';
import { APP_KEY_HEADER } from '../../shared/constants/tenant.constants.js';
import { SEED_RESPONSE } from '../../shared/swagger/api-examples.js';

@ApiTags('Testing & Utility')
@Controller('seed')
export class SeedController {
  constructor(private readonly seedService: SeedService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiHeader({ name: APP_KEY_HEADER, required: true, description: 'Tenant App Key' })
  @ApiOperation({ summary: 'Generate sample dummy test data for tenant' })
  @ApiResponse({
    status: 201,
    description: 'Seed executed successfully',
    schema: { example: SEED_RESPONSE },
  })
  async seedDatabase(@Req() req: Request) {
    const tenant = req.tenant;
    if (!tenant) {
      throw new UnauthorizedException(`${APP_KEY_HEADER} header is missing`);
    }
    const data = await this.seedService.runSeed(tenant);
    return {
      message: 'Bank Sampah sample data generated successfully!',
      data,
    };
  }
}
