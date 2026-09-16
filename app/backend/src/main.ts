import { NestFactory } from '@nestjs/core';
import { AppModule, ObserveInstrument } from './app.module.js';
import { ResponseInterceptor } from './shared/interceptors/response.interceptor.js';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import { LoggerService } from './infra/logger/logger.service.js';
import { GlobalExceptionFilter } from './shared/filters/http-exception.filter.js';
import { APP_KEY_HEADER } from './shared/constants/tenant.constants.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    instrument: ObserveInstrument,
    bufferLogs: true,
  });

  const logger = app.get(LoggerService);
  app.useLogger(logger);
  app.useGlobalFilters(new GlobalExceptionFilter(logger));
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  app.enableCors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  });
  app.use(helmet({ contentSecurityPolicy: true, hidePoweredBy: true }));
  app.use(cookieParser());
  app.useGlobalInterceptors(new ResponseInterceptor());
  app.setGlobalPrefix('api', {
    exclude: ['/', 'health'],
  });
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
  });

  const config = new DocumentBuilder()
    .setTitle('Digital Waste Bank API')
    .setDescription(
      'Complete API documentation for the Digital Waste Bank & Recycling application (UKK RPL).',
    )
    .setVersion('1.0')
    .addApiKey(
      {
        type: 'apiKey',
        name: APP_KEY_HEADER,
        in: 'header',
        description: 'Application / Tenant Key for multi-tenancy isolation',
      },
      APP_KEY_HEADER,
    )
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        description: 'Enter your JWT token here',
      },
      'JWT-auth',
    )
    .build();

  const document = SwaggerModule.createDocument(app, config);
  if (process.env.NODE_ENV !== 'production') {
    SwaggerModule.setup('api/docs', app, document, {
      swaggerOptions: {
        persistAuthorization: true,
        displayRequestDuration: true,
        docExpansion: 'none',
        tagsSorter: 'alpha',
        operationsSorter: 'alpha',
      },
    });
  }

  const PORT = Number(process.env.PORT);

  await app.listen(process.env.PORT ?? 3000);
  logger.log(`Application started on port ${PORT}`, { context: 'Bootstrap' });
  logger.log('Swagger docs available at /docs', { context: 'Bootstrap' });
  app.enableShutdownHooks();
}
await bootstrap();
