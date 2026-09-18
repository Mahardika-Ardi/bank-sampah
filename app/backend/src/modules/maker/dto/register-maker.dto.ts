import { IsString, IsNotEmpty, MinLength, IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterAppMakerDto {
  @ApiProperty({
    description: 'Unique student email for login and appKey recovery',
    example: 'siswa1@smk.sch.id',
  })
  @IsEmail()
  @IsNotEmpty()
  email!: string;

  @ApiProperty({
    description: 'Student account password, minimum 6 characters',
    example: 'password123',
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  password!: string;

  @ApiProperty({
    description: 'Full name of the student exam participant',
    example: 'Budi Santoso',
  })
  @IsString()
  @IsNotEmpty()
  namaSiswa!: string;

  @ApiProperty({
    description: "Participant's class / study group",
    example: 'XII RPL 1',
  })
  @IsString()
  @IsNotEmpty()
  kelas!: string;

  @ApiProperty({
    description: 'Name / branding of the frontend application being built',
    example: 'Bank Sampah Digital Hub',
  })
  @IsString()
  @IsNotEmpty()
  namaApp!: string;
}
