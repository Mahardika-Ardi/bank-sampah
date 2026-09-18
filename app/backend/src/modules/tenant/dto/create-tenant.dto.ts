import { IsString, IsNotEmpty, IsBoolean, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateTenantDto {
  @ApiProperty({
    description: 'Tenant display name',
    example: 'Bank Sampah Asri Jaya',
  })
  @IsString({ message: 'Tenant name must be a string' })
  @IsNotEmpty({ message: 'Tenant name is required and cannot be empty' })
  name!: string;

  @ApiProperty({
    description: 'Unique application key for tenant isolation',
    example: '97945213-34a7-48cf-baac-8740c1d18765',
  })
  @IsString({ message: 'App key must be a string' })
  @IsNotEmpty({ message: 'App key is required and cannot be empty' })
  appKey!: string;

  @ApiPropertyOptional({
    description: 'Whether the tenant is active',
    example: true,
  })
  @IsBoolean({ message: 'Is active status must be a boolean value' })
  @IsOptional()
  isActive?: boolean;
}
