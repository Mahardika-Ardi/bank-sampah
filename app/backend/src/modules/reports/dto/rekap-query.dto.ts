import { IsNotEmpty, Matches } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RekapBulananQueryDto {
  @ApiProperty({
    description: 'Report period (YYYY-MM)',
    example: '2026-08',
  })
  @IsNotEmpty()
  @Matches(/^\d{4}-\d{2}$/, {
    message: 'bulan must use the YYYY-MM format',
  })
  bulan!: string;
}
