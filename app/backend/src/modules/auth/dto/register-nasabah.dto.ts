import { IsString, IsNotEmpty, MinLength, IsOptional } from 'class-validator';

export class RegisterNasabahBankDto {
  @IsString()
  @IsNotEmpty()
  username!: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  password!: string;

  @IsString()
  @IsNotEmpty()
  namaNasabah!: string;

  @IsString()
  @IsNotEmpty()
  alamat!: string;

  @IsString()
  @IsNotEmpty()
  telp!: string;

  @IsOptional()
  @IsString()
  foto?: string;
}
