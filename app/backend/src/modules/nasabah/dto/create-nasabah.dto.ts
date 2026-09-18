import { IsString, IsNotEmpty, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateNasabahDto {
  @ApiProperty({
    description: 'Unique login username of the new customer',
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
    description: 'Place of residence address',
    example: 'Jl. Kenanga No. 5',
  })
  @IsString()
  @IsNotEmpty()
  alamat!: string;

  @ApiProperty({
    description: "Customer's telephone number",
    example: '081987654321',
  })
  @IsString()
  @IsNotEmpty()
  telp!: string;
}
