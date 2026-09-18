import { IsOptional, Matches, IsEnum } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { StatusSetor } from '../../../../generated/prisma/client.js';

export class SetorListQueryDto {
  @ApiPropertyOptional({
    description: 'Filter by month (YYYY-MM)',
    example: '2026-08',
  })
  @IsOptional()
  @Matches(/^\d{4}-\d{2}$/, {
    message: 'bulan must use the YYYY-MM format',
  })
  bulan?: string;

  @ApiPropertyOptional({
    description: 'Filter by deposit status (admin list only)',
    enum: StatusSetor,
    example: 'menunggu_konfirmasi',
  })
  @IsOptional()
  @IsEnum(StatusSetor)
  status?: StatusSetor;
}
