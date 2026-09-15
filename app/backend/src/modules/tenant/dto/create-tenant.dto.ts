import { IsString, IsNotEmpty, IsBoolean, IsOptional } from 'class-validator';

export class CreateTenantDto {
  @IsString({ message: 'Tenant name must be a string' })
  @IsNotEmpty({ message: 'Tenant name is required and cannot be empty' })
  name: string;

  @IsString({ message: 'App key must be a string' })
  @IsNotEmpty({ message: 'App key is required and cannot be empty' })
  appKey: string;

  @IsBoolean({ message: 'Is active status must be a boolean value' })
  @IsOptional()
  isActive?: boolean;
}
