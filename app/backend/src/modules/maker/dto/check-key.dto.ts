import { IsEmail, IsNotEmpty } from 'class-validator';

export class CheckKeyDto {
  @IsEmail()
  @IsNotEmpty()
  email!: string;
}
