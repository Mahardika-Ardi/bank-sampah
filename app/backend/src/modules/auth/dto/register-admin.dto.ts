import { IsString, IsNotEmpty, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterAdminBankDto {
  @ApiProperty({
    description: 'Unique username of the managing admin account',
    example: 'admin_banksampah',
  })
  @IsString()
  @IsNotEmpty()
  username!: string;

  @ApiProperty({
    description: 'Unit admin account password',
    example: 'admin123',
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  password!: string;

  @ApiProperty({
    description: 'Unit name / waste bank name',
    example: 'Bank Sampah Asri Jaya',
  })
  @IsString()
  @IsNotEmpty()
  namaUnit!: string;

  @ApiProperty({
    description: 'Name of the person in charge of management',
    example: 'Bapak H. Sukirman',
  })
  @IsString()
  @IsNotEmpty()
  namaPengelola!: string;

  @ApiProperty({
    description: 'Operational contact number of the waste bank',
    example: '081234567890',
  })
  @IsString()
  @IsNotEmpty()
  telp!: string;
}
