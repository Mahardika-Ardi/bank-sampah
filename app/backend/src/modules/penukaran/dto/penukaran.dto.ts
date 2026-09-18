import { IsUUID, IsNotEmpty, IsString, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { StatusPenukaran } from '../../../../generated/prisma/client.js';

export class CreatePenukaranPoinDto {
  @ApiProperty({
    description: 'ID of the reward the customer wishes to redeem',
    example: '8bd74595-8016-42b9-a585-a0e40d0fe42f',
  })
  @IsUUID()
  @IsNotEmpty()
  hadiahId!: string;
}

export class UpdatePenukaranStatusDto {
  @ApiProperty({
    description:
      "New status: 'selesai' completes the handover, 'diproses' voids a completed redemption with refund",
    enum: StatusPenukaran,
    example: 'selesai',
  })
  @IsString()
  @IsNotEmpty()
  @IsEnum(StatusPenukaran)
  status!: StatusPenukaran;
}
