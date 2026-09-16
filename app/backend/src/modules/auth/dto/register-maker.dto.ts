import { IsString, IsNotEmpty, MinLength, IsEmail } from 'class-validator';

export class RegisterAppMakerDto {
  @IsEmail()
  @IsNotEmpty()
  email!: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  password!: string;

  @IsString()
  @IsNotEmpty()
  namaSiswa!: string;

  @IsString()
  @IsNotEmpty()
  kelas!: string;

  @IsString()
  @IsNotEmpty()
  namaApp!: string;
}
