import {
  Controller,
  Get,
  Post,
  Put,
  Body,
  Param,
  Query,
  Req,
  UseGuards,
  ParseUUIDPipe,
  UnauthorizedException,
} from '@nestjs/common';
import type { Request } from 'express';
import { ApiTags, ApiOperation, ApiResponse, ApiHeader, ApiBearerAuth, ApiBody, ApiParam, ApiQuery } from '@nestjs/swagger';
import { PenukaranService } from './penukaran.service.js';
import {
  CreatePenukaranPoinDto,
  UpdatePenukaranStatusDto,
} from './dto/penukaran.dto.js';
import { JwtAuthGuard } from '../../shared/guards/jwt-auth.guard.js';
import { RolesGuard } from '../auth/guard/role.guard.js';
import { Role } from '../../shared/decorators/role.decorator.js';
import { UserRole } from '../../../generated/prisma/client.js';
import { APP_KEY_HEADER } from '../../shared/constants/tenant.constants.js';
import { UUID_EXAMPLE, PENUKARAN_TUKAR_RESPONSE, PENUKARAN_NOTA_RESPONSE } from '../../shared/swagger/api-examples.js';

@ApiTags('Penukaran Poin')
@ApiHeader({ name: APP_KEY_HEADER, required: true, description: 'Tenant App Key' })
@ApiBearerAuth('JWT-auth')
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('penukaran-poin')
export class PenukaranController {
  constructor(private readonly penukaranService: PenukaranService) {}

  private requireTenant(req: Request) {
    const tenant = req.tenant;
    if (!tenant) {
      throw new UnauthorizedException(`${APP_KEY_HEADER} header is missing`);
    }
    return tenant;
  }

  private caller(req: Request): { userId: string; role: UserRole } {
    if (!req.user?.role) {
      throw new UnauthorizedException('Invalid or expired token');
    }
    return { userId: req.user.sub, role: req.user.role };
  }

  @Post('tukar')
  @Role(UserRole.nasabah)
  @ApiOperation({ summary: 'Redeem points for a reward/voucher' })
  @ApiBody({ type: CreatePenukaranPoinDto })
  @ApiResponse({
    status: 201,
    description: 'Redemption submitted',
    schema: { example: PENUKARAN_TUKAR_RESPONSE },
  })
  async redeem(
    @Req() req: Request,
    @Body() dto: CreatePenukaranPoinDto,
  ) {
    const { userId } = this.caller(req);
    const data = await this.penukaranService.redeem(
      this.requireTenant(req),
      userId,
      dto,
    );
    return {
      message: 'Point redemption submitted successfully',
      data,
    };
  }

  @Get('my-penukaran')
  @Role(UserRole.nasabah)
  @ApiOperation({ summary: 'Own point redemption history' })
  @ApiResponse({ status: 200, description: 'Redemption history retrieved' })
  async myPenukaran(@Req() req: Request) {
    const { userId } = this.caller(req);
    const data = await this.penukaranService.myPenukaran(
      this.requireTenant(req),
      userId,
    );
    return {
      message: 'Customer redemption history retrieved successfully',
      data,
    };
  }

  @Get('admin/list')
  @Role(UserRole.admin_bank)
  @ApiOperation({ summary: 'All customer redemption transactions (filter ?bulan)' })
  @ApiQuery({ name: 'bulan', required: false, example: '2026-08' })
  @ApiResponse({ status: 200, description: 'Redemption list retrieved' })
  async adminList(
    @Req() req: Request,
    @Query('bulan') bulan?: string,
  ) {
    this.caller(req);
    const data = await this.penukaranService.adminList(
      this.requireTenant(req),
      bulan,
    );
    return {
      message: 'All redemption transactions retrieved successfully',
      data,
    };
  }

  @Put('admin/status/:id')
  @Role(UserRole.admin_bank)
  @ApiOperation({
    summary: 'Update redemption status (complete, or void with refund)',
  })
  @ApiParam({ name: 'id', example: UUID_EXAMPLE })
  @ApiBody({ type: UpdatePenukaranStatusDto })
  @ApiResponse({ status: 200, description: 'Redemption status updated' })
  async updateStatus(
    @Req() req: Request,
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdatePenukaranStatusDto,
  ) {
    this.caller(req);
    const data = await this.penukaranService.updateStatus(
      this.requireTenant(req),
      id,
      dto.status,
    );
    return {
      message: 'Redemption status updated successfully',
      data,
    };
  }

  @Get('nota/:id')
  @Role(UserRole.nasabah, UserRole.admin_bank)
  @ApiOperation({ summary: 'Redemption receipt / proof of transaction' })
  @ApiParam({ name: 'id', example: UUID_EXAMPLE })
  @ApiResponse({
    status: 200,
    description: 'Redemption receipt retrieved',
    schema: { example: PENUKARAN_NOTA_RESPONSE },
  })
  async receipt(
    @Req() req: Request,
    @Param('id', ParseUUIDPipe) id: string,
  ) {
    const { userId, role } = this.caller(req);
    const data = await this.penukaranService.receipt(
      this.requireTenant(req),
      userId,
      role,
      id,
    );
    return {
      message: 'Redemption receipt retrieved successfully',
      data,
    };
  }
}
