import {
  IsOptional,
  IsIn,
  IsDateString,
  Matches,
  IsInt,
  Min,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class RekapMingguanQueryDto {
  @ApiPropertyOptional({
    description: 'Anchor date inside the week (ISO 8601, defaults to today)',
    example: '2026-08-26',
  })
  @IsOptional()
  @IsDateString()
  tanggal?: string;
}

export class RekapTahunanQueryDto {
  @ApiPropertyOptional({
    description: 'Calendar year (defaults to the current year)',
    example: 2026,
  })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(2000)
  tahun?: number;
}

export type DashboardPeriode = 'semua' | 'mingguan' | 'bulanan' | 'tahunan';

export class DashboardQueryDto {
  @ApiPropertyOptional({
    description: 'Window for transactional totals (default: semua/all-time)',
    enum: ['semua', 'mingguan', 'bulanan', 'tahunan'],
    example: 'semua',
  })
  @IsOptional()
  @IsIn(['semua', 'mingguan', 'bulanan', 'tahunan'])
  periode?: DashboardPeriode;

  @ApiPropertyOptional({
    description: 'Anchor date for mingguan (ISO 8601, defaults to today)',
    example: '2026-08-26',
  })
  @IsOptional()
  @IsDateString()
  tanggal?: string;

  @ApiPropertyOptional({
    description: 'Month for bulanan (YYYY-MM, defaults to current month)',
    example: '2026-08',
  })
  @IsOptional()
  @Matches(/^\d{4}-\d{2}$/, {
    message: 'bulan must use the YYYY-MM format',
  })
  bulan?: string;

  @ApiPropertyOptional({
    description: 'Year for tahunan (defaults to current year)',
    example: 2026,
  })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(2000)
  tahun?: number;
}
