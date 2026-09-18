import {
  IsString,
  IsNotEmpty,
  IsNumber,
  Min,
  IsEnum,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { JenisSampah } from '../../../../generated/prisma/client.js';

export class CreateKategoriSampahDto {
  @ApiProperty({
    description: 'Specific name of the waste category',
    example: 'Botol Plastik PET',
  })
  @IsString()
  @IsNotEmpty()
  namaKategori!: string;

  @ApiProperty({
    description: 'Estimated purchase price per kg (Rupiah)',
    example: 3500,
  })
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  hargaPerKg!: number;

  @ApiProperty({
    description: 'Reward point conversion per kg of waste',
    example: 10,
  })
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  poinPerKg!: number;

  @ApiProperty({
    description: 'Waste type',
    enum: JenisSampah,
    example: 'plastik',
  })
  @IsEnum(JenisSampah)
  @IsNotEmpty()
  jenis!: JenisSampah;
}
