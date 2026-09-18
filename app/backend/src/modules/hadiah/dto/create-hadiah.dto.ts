import { IsString, IsNotEmpty, IsNumber, Min, IsInt } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CreateHadiahDto {
  @ApiProperty({
    description: 'Name of the reward item / voucher',
    example: 'Gula Pasir 1 Kg',
  })
  @IsString()
  @IsNotEmpty()
  namaHadiah!: string;

  @ApiProperty({
    description: 'Points that must be redeemed by the customer',
    example: 60,
  })
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  poinDibutuhkan!: number;

  @ApiProperty({
    description: 'Quantity of reward stock availability',
    example: 30,
  })
  @Type(() => Number)
  @IsInt()
  @Min(0)
  stok!: number;
}
