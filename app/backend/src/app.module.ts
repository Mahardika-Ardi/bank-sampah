import {
  Module,
  MiddlewareConsumer,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { PrismaModule } from './infra/prisma/prisma.module.js';
import { AppConfigModule } from './config/config.module.js';
import { ConfigService } from '@nestjs/config';
import { AppConfig } from './config/env.validation.js';
import { TenantModule } from './modules/tenant/tenant.module.js';
import { TenantMiddleware } from './shared/middleware/tenant.middleware.js';
import { HealthModule } from './modules/health/health.module.js';
import { LoggerModule } from './infra/logger/logger.module.js';
import { HttpLoggerMiddleware } from './shared/middleware/http-logger.middleware.js';
import { SeedModule } from './modules/seed/seed.module.js';
import { AuthModule } from './modules/auth/auth.module.js';
import { MakerModule } from './modules/maker/maker.module.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    SeedModule,
    AppConfigModule,
    ObserveModule.forRootAsync({
      imports: [AppConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService<AppConfig>) => ({
        appKey: configService.getOrThrow('app.observeAppKey', { infer: true })!,
        appSecret: configService.getOrThrow('app.observeAppSecret', {
          infer: true,
        })!,
        serviceId: configService.getOrThrow('app.observeServiceId', {
          infer: true,
        })!,
      }),
    }),
    PrismaModule,
    TenantModule,
    HealthModule,
    LoggerModule,
    AuthModule,
    MakerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(TenantMiddleware)
      .exclude(
        'health',
        'tenant',
        '/',
        'docs',
        'docs-json',
        { path: 'api/v1/maker/register', method: RequestMethod.ALL },
        { path: 'api/v1/maker/login', method: RequestMethod.ALL },
        { path: 'api/v1/maker/check-key', method: RequestMethod.ALL },
      )
      .forRoutes('*');

    consumer.apply(HttpLoggerMiddleware).forRoutes('*');
  }
}
