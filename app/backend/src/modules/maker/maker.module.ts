import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { StringValue } from 'ms';
import { MakerService } from './maker.service.js';
import { MakerController } from './maker.controller.js';
import { PrismaModule } from '../../infra/prisma/prisma.module.js';
import { HashingModule } from '../../shared/hashing/hashing.module.js';

@Module({
  imports: [
    PrismaModule,
    HashingModule,
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        secret: config.getOrThrow<string>('auth.jwtSecret'),
        signOptions: {
          expiresIn: config.getOrThrow<string>(
            'auth.jwtExpiresIn',
          ) as StringValue,
        },
      }),
    }),
  ],
  controllers: [MakerController],
  providers: [MakerService],
  exports: [MakerService],
})
export class MakerModule {}
