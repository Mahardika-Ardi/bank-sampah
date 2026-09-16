import { IsEmail, IsNotEmpty, MinLength, IsString } from 'class-validator';

export class LoginMakerDto {
  @IsEmail()
  @IsNotEmpty()
  email!: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  password!: string;
}
