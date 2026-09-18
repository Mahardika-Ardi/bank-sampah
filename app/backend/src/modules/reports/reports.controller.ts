import {
  Controller,
  Get,
  Query,
  Req,
  UseGuards,
  UnauthorizedException,
} from '@nestjs/common';
import type { Request } from 'express';
import { ApiTags, ApiOperation, ApiResponse, ApiHeader, ApiBearerAuth, ApiQuery } from '@nestjs/swagger';
import { ReportsService } from './reports.service.js';
import { RekapBulananQueryDto } from './dto/rekap-query.dto.js';
import {
  DashboardQueryDto,
  RekapMingguanQueryDto,
  RekapTahunanQueryDto,
} from './dto/report-range.dto.js';
import {
  DateRange,
  monthRange,
  weekRange,
  yearRange,
} from '../../shared/utils/date-range.utils.js';
import { JwtAuthGuard } from '../../shared/guards/jwt-auth.guard.js';
import { RolesGuard } from '../auth/guard/role.guard.js';
import { Role } from '../../shared/decorators/role.decorator.js';
import { UserRole } from '../../../generated/prisma/client.js';
import { APP_KEY_HEADER } from '../../shared/constants/tenant.constants.js';
import { REKAP_BULANAN_RESPONSE, DASHBOARD_SUMMARY_RESPONSE } from '../../shared/swagger/api-examples.js';

@ApiTags('Reports & Dashboard')
@ApiHeader({ name: APP_KEY_HEADER, required: true, description: 'Tenant App Key' })
@ApiBearerAuth('JWT-auth')
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller()
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

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

  private dashboardRange(query: DashboardQueryDto): DateRange | undefined {
    const periode = query.periode ?? 'semua';
    if (periode === 'semua') return undefined;
    if (periode === 'mingguan') {
      return weekRange(query.tanggal ?? new Date().toISOString());
    }
    if (periode === 'bulanan') {
      const now = new Date();
      const fallback = `${now.getUTCFullYear()}-${String(now.getUTCMonth() + 1).padStart(2, '0')}`;
      return monthRange(query.bulan ?? fallback);
    }
    const tahun = query.tahun ?? new Date().getUTCFullYear();
    return yearRange(tahun);
  }

  @Get('rekapitulasi/bulanan')
  @Role(UserRole.admin_bank)
  @ApiOperation({ summary: 'Monthly waste tonnage and payment recap (admin)' })
  @ApiQuery({ name: 'bulan', required: true, example: '2026-08' })
  @ApiResponse({
    status: 200,
    description: 'Monthly recap retrieved',
    schema: { example: REKAP_BULANAN_RESPONSE },
  })
  async rekapBulanan(
    @Req() req: Request,
    @Query() query: RekapBulananQueryDto,
  ) {
    this.caller(req);
    const data = await this.reportsService.rekapBulanan(
      this.requireTenant(req),
      query.bulan,
    );
    const [year, month] = query.bulan.split('-').map(Number);
    return {
      message: `Monthly waste bank recap for ${month}/${year} retrieved successfully`,
      data,
    };
  }

  @Get('dashboard/summary')
  @Role(UserRole.nasabah)
  @ApiOperation({ summary: 'Customer dashboard summary' })
  @ApiResponse({
    status: 200,
    description: 'Dashboard summary retrieved',
    schema: { example: DASHBOARD_SUMMARY_RESPONSE },
  })
  async dashboardSummary(
    @Req() req: Request,
    @Query() query: DashboardQueryDto,
  ) {
    const { userId } = this.caller(req);
    const data = await this.reportsService.dashboardSummary(
      this.requireTenant(req),
      userId,
      this.dashboardRange(query),
    );
    return {
      message: 'Customer dashboard summary retrieved successfully',
      data,
    };
  }

  @Get('dashboard/stats')
  @Role(UserRole.admin_bank)
  @ApiOperation({ summary: 'Overall admin statistics' })
  @ApiResponse({ status: 200, description: 'Dashboard stats retrieved' })
  async dashboardStats(
    @Req() req: Request,
    @Query() query: DashboardQueryDto,
  ) {
    this.caller(req);
    const data = await this.reportsService.dashboardStats(
      this.requireTenant(req),
      this.dashboardRange(query),
    );
    return {
      message: 'Waste bank dashboard statistics retrieved successfully',
      data,
    };
  }

  @Get('rekapitulasi/mingguan')
  @Role(UserRole.admin_bank)
  @ApiOperation({ summary: 'Weekly waste tonnage and payment recap (admin)' })
  @ApiQuery({ name: 'tanggal', required: false, example: '2026-08-26' })
  @ApiResponse({ status: 200, description: 'Weekly recap retrieved' })
  async rekapMingguan(
    @Req() req: Request,
    @Query() query: RekapMingguanQueryDto,
  ) {
    this.caller(req);
    const data = await this.reportsService.rekapMingguan(
      this.requireTenant(req),
      query.tanggal ?? new Date().toISOString(),
    );
    return {
      message: 'Weekly waste bank recap retrieved successfully',
      data,
    };
  }

  @Get('rekapitulasi/tahunan')
  @Role(UserRole.admin_bank)
  @ApiOperation({ summary: 'Annual waste tonnage and payment recap (admin)' })
  @ApiQuery({ name: 'tahun', required: false, example: 2026 })
  @ApiResponse({ status: 200, description: 'Annual recap retrieved' })
  async rekapTahunan(
    @Req() req: Request,
    @Query() query: RekapTahunanQueryDto,
  ) {
    this.caller(req);
    const data = await this.reportsService.rekapTahunan(
      this.requireTenant(req),
      query.tahun ?? new Date().getUTCFullYear(),
    );
    return {
      message: 'Annual waste bank recap retrieved successfully',
      data,
    };
  }
}
