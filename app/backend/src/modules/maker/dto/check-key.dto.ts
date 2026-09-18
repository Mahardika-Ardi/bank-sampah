import { IsEmail, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CheckKeyDto {
  @ApiProperty({
    description: 'Student email used to look up the App Key',
    example: 'siswa1@smk.sch.id',
  })
  @IsEmail()
  @IsNotEmpty()
  email!: string;
}
