import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe, VersioningType } from '@nestjs/common';
import request from 'supertest';
import cookieParser from 'cookie-parser';
import { AppModule } from './../src/app.module.js';
import { App } from 'supertest/types.js';
import { ResponseInterceptor } from '../src/shared/interceptors/response.interceptor.js';
import { GlobalExceptionFilter } from '../src/shared/filters/http-exception.filter.js';
import { LoggerService } from '../src/infra/logger/logger.service.js';

/**
 * Dedicated throttle suite: isolated app instance means isolated
 * in-memory throttler storage, so the 5-attempt budget is deterministic.
 */
describe('Login throttling (e2e)', () => {
  let app: INestApplication<App>;
  let appKey: string;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useLogger(new LoggerService('E2E-Throttle'));
    app.useGlobalFilters(
      new GlobalExceptionFilter(new LoggerService('E2E-Throttle')),
    );
    app.use(cookieParser());
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
      }),
    );
    app.setGlobalPrefix('api', {
      exclude: ['/', 'health'],
    });
    app.enableVersioning({
      type: VersioningType.URI,
      defaultVersion: '1',
    });
    app.useGlobalInterceptors(new ResponseInterceptor());

    await app.init();

    const maker = await request(app.getHttpServer())
      .post('/api/v1/maker/register')
      .send({
        email: `throttle_${Date.now()}@smk.sch.id`,
        password: 'password123',
        namaSiswa: 'Throttle Test',
        kelas: 'XII RPL 1',
        namaApp: 'Throttle E2E',
      })
      .expect(201);
    appKey = maker.body.data.appKey as string;
  });

  it('should allow 5 login attempts then return 429 with contract envelope', async () => {
    const statuses: number[] = [];
    let throttled: Record<string, unknown> = {};
    for (let i = 0; i < 6; i += 1) {
      const res = await request(app.getHttpServer())
        .post('/api/v1/auth/login')
        .set('x-app-key', appKey)
        .send({ username: 'nasabah_budi', password: 'wrong-password' });
      statuses.push(res.status);
      if (i === 5) throttled = res.body as Record<string, unknown>;
    }

    expect(statuses.slice(0, 5)).toEqual([401, 401, 401, 401, 401]);
    expect(statuses[5]).toBe(429);
    expect(throttled).toMatchObject({ success: false, statusCode: 429 });
    expect(throttled).toHaveProperty('timestamp');
  });

  afterAll(async () => {
    await app.close();
  });
});
