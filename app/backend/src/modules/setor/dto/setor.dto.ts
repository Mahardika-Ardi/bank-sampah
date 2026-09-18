import {
  IsString,
  IsNotEmpty,
  IsUUID,
  IsNumber,
  Min,
  IsArray,
  ArrayMinSize,
  ValidateNested,
  IsOptional,
  IsDateString,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class ItemSetorDto {
  @ApiProperty({
    description: 'Reference ID of the selected waste category',
    example: 'eacfc2cf-2dc6-40c3-96fe-d55806f96b50',
  })
  @IsUUID()
  @IsNotEmpty()
  kategoriSampahId!: string;

  @ApiProperty({
    description: 'Estimated weight of the deposited waste (Kg)',
    example: 4.5,
  })
  @Type(() => Number)
  @IsNumber()
  @Min(0.001)
  beratKg!: number;
}

export class CreateSetorSampahDto {
  @ApiProperty({
    description: 'Date and time of the deposit submission (ISO 8601)',
    example: '2026-08-26T10:00:00.000Z',
  })
  @IsDateString()
  @IsNotEmpty()
  tanggal!: string;

  @ApiProperty({
    description: 'Note / instructions for the waste pickup',
    example: 'Sampah sudah dipilah rapi dalam karung',
  })
  @IsString()
  @IsNotEmpty()
  catatan!: string;

  @ApiProperty({
    description: 'List of waste items being deposited',
    type: [ItemSetorDto],
  })
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => ItemSetorDto)
  items!: ItemSetorDto[];
}

export class VerifyItemSetorDto {
  @ApiProperty({
    description: 'ID of the related waste category',
    example: 'eacfc2cf-2dc6-40c3-96fe-d55806f96b50',
  })
  @IsUUID()
  @IsNotEmpty()
  kategoriSampahId!: string;

  @ApiProperty({
    description: 'Actual scale weight measured by the officer (Kg)',
    example: 10.5,
  })
  @Type(() => Number)
  @IsNumber()
  @Min(0.001)
  beratKgReal!: number;
}

export class VerifySetorSampahDto {
  @ApiProperty({
    description: 'New status after verification',
    enum: ['diverifikasi', 'ditolak', 'selesai'],
    example: 'selesai',
  })
  @IsString()
  @IsNotEmpty()
  status!: string;

  @ApiProperty({
    description: 'Inspection note from the admin (required)',
    example: 'Berat sampah sesuai hasil timbangan real petugas.',
  })
  @IsString()
  @IsNotEmpty()
  catatanAdmin!: string;

  @ApiPropertyOptional({
    description:
      'Real weighings from the admin. Absent entries (or absent list) promote the customer estimates.',
    type: [VerifyItemSetorDto],
  })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => VerifyItemSetorDto)
  itemsReal?: VerifyItemSetorDto[];
}
