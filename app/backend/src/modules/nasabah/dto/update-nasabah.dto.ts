import { IsString, IsNotEmpty, IsOptional, IsDateString } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

/**
 * Contract-literal field names. The service maps them onto the schema
 * shape (namaLengkap -> namaNasabah, noTelepon -> telp).
 * Password changes are intentionally unsupported.
 */
export class UpdateNasabahDto {
  @ApiPropertyOptional({
    description: 'Corrected full name of the customer',
    example: 'Ahmad Dahlan Putra',
  })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  namaLengkap?: string;

  @ApiPropertyOptional({
    description: 'Latest telephone number',
    example: '081299998888',
  })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  noTelepon?: string;

  @ApiPropertyOptional({
    description: 'Latest customer address',
    example: 'Jl. Sudirman No. 120',
  })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  alamat?: string;

  @ApiPropertyOptional({
    description: "Customer's date of birth (YYYY-MM-DD)",
    example: '2000-01-15',
  })
  @IsOptional()
  @IsDateString()
  tanggalLahir?: string;
}
