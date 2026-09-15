import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import {
  validationSchema,
  appConfig,
  databaseConfig,
  authConfig,
  cookieConfig,
  cloudinaryConfig,
  mailConfig,
  redisConfig,
} from './env.validation.js';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [
        appConfig,
        databaseConfig,
        authConfig,
        cookieConfig,
        cloudinaryConfig,
        mailConfig,
        redisConfig,
      ],
      validationSchema,
      envFilePath: '.env',
    }),
  ],
})
export class AppConfigModule {}
