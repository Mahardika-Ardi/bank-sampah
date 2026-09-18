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
import { SetorService } from './setor.service.js';
import {
  CreateSetorSampahDto,
  VerifySetorSampahDto,
} from './dto/setor.dto.js';
import { SetorListQueryDto } from './dto/setor-query.dto.js';
import { JwtAuthGuard } from '../../shared/guards/jwt-auth.guard.js';
import { RolesGuard } from '../auth/guard/role.guard.js';
import { Role } from '../../shared/decorators/role.decorator.js';
import { UserRole } from '../../../generated/prisma/client.js';
import { APP_KEY_HEADER } from '../../shared/constants/tenant.constants.js';
import {
  SETOR_SUBMIT_RESPONSE,
  SETOR_RECEIPT_RESPONSE,
} from '../../shared/swagger/api-examples.js';

@ApiTags('Setor Sampah')
@ApiHeader({ name: APP_KEY_HEADER, required: true, description: 'Tenant App Key' })
@ApiBearerAuth('JWT-auth')
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('setor-sampah')
export class SetorController {
  constructor(private readonly setorService: SetorService) {}

  private requireTenant(req: Request) {
    const tenant = req.tenant;
    if (!tenant) {
      throw new UnauthorizedException(`${APP_KEY_HEADER} header is missing`);
    }
    return tenant;
  }

  private caller(req: Request): { userId: string; role: UserRole } {
    if (!req.user) {
      throw new UnauthorizedException('Invalid or expired token');
    }
    if (!req.user.role) {
      throw new UnauthorizedException('Invalid or expired token');
    }
    return { userId: req.user.sub, role: req.user.role };
  }

  @Post('pengajuan')
  @Role(UserRole.nasabah)
  @ApiOperation({ summary: 'Submit a waste deposit request (multi-item)' })
  @ApiBody({ type: CreateSetorSampahDto })
  @ApiResponse({
    status: 201,
    description: 'Deposit request created',
    schema: { example: SETOR_SUBMIT_RESPONSE },
  })
  async submit(
    @Req() req: Request,
    @Body() dto: CreateSetorSampahDto,
  ) {
    const { userId } = this.caller(req);
    const data = await this.setorService.submit(
      this.requireTenant(req),
      userId,
      dto,
    );
    return {
      message: 'Waste deposit request created successfully',
      data,
    };
  }

  @Get('my-setor')
  @Role(UserRole.nasabah)
  @ApiOperation({ summary: 'Own deposit history and status (filter ?bulan)' })
  @ApiQuery({ name: 'bulan', required: false, example: '2026-08' })
  @ApiResponse({ status: 200, description: 'Deposit history retrieved' })
  async mySetor(@Req() req: Request, @Query() query: SetorListQueryDto) {
    const { userId } = this.caller(req);
    const data = await this.setorService.mySetor(
      this.requireTenant(req),
      userId,
      query.bulan,
    );
    return {
      message: 'Deposit history retrieved successfully',
      data,
    };
  }

  @Get('admin/list')
  @Role(UserRole.admin_bank)
  @ApiOperation({ summary: 'All deposit submissions (filter ?status & ?bulan)' })
  @ApiResponse({ status: 200, description: 'Deposit list retrieved' })
  async adminList(@Req() req: Request, @Query() query: SetorListQueryDto) {
    this.caller(req);
    const data = await this.setorService.adminList(
      this.requireTenant(req),
      query,
    );
    return {
      message: 'All deposit submissions retrieved successfully',
      data,
    };
  }

  @Get(':id')
  @Role(UserRole.nasabah, UserRole.admin_bank)
  @ApiOperation({ summary: 'Deposit transaction detail / receipt' })
  @ApiParam({
    name: 'id',
    example: '9498c6d6-c2de-450d-a391-e80fbff5386c',
  })
  @ApiResponse({
    status: 200,
    description: 'Deposit detail retrieved',
    schema: { example: SETOR_RECEIPT_RESPONSE },
  })
  async receipt(
    @Req() req: Request,
    @Param('id', ParseUUIDPipe) id: string,
  ) {
    const { userId, role } = this.caller(req);
    const data = await this.setorService.receipt(
      this.requireTenant(req),
      userId,
      role,
      id,
    );
    return {
      message: 'Deposit transaction detail retrieved successfully',
      data,
    };
  }

  @Put('admin/verify/:id')
  @Role(UserRole.admin_bank)
  @ApiOperation({ summary: 'Verify real weighing and change status' })
  @ApiParam({
    name: 'id',
    example: '9498c6d6-c2de-450d-a391-e80fbff5386c',
  })
  @ApiBody({ type: VerifySetorSampahDto })
  @ApiResponse({ status: 200, description: 'Verification saved' })
  async verify(
    @Req() req: Request,
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: VerifySetorSampahDto,
  ) {
    const { userId } = this.caller(req);
    const data = await this.setorService.verify(
      this.requireTenant(req),
      userId,
      id,
      dto,
    );
    return {
      message: 'Deposit verification saved and customer points updated',
      data,
    };
  }
}
