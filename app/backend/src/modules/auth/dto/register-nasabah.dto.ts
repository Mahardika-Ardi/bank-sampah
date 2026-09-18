import { IsString, IsNotEmpty, MinLength, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class RegisterNasabahBankDto {
  @ApiProperty({
    description: 'Unique username for customer login',
    example: 'nasabah_dewi',
  })
  @IsString()
  @IsNotEmpty()
  username!: string;

  @ApiProperty({
    description: 'Customer account password',
    example: 'password123',
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  password!: string;

  @ApiProperty({
    description: 'Full name of the customer',
    example: 'Dewi Lestari',
  })
  @IsString()
  @IsNotEmpty()
  namaNasabah!: string;

  @ApiProperty({
    description: "Customer's residential address",
    example: 'Jl. Kenanga No. 5, RT 02/01',
  })
  @IsString()
  @IsNotEmpty()
  alamat!: string;

  @ApiProperty({
    description: 'Active telephone / WhatsApp number',
    example: '081987654321',
  })
  @IsString()
  @IsNotEmpty()
  telp!: string;

  @ApiPropertyOptional({
    description: 'Customer profile photo file (JPG/PNG/WebP)',
    type: 'string',
    format: 'binary',
  })
  @IsOptional()
  @IsString()
  foto?: string;
}
