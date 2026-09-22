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
 * Public bank-picker suite: isolated app instance means isolated
 * in-memory throttler storage, so the 30-request banks budget is deterministic.
 */
describe('Bank picker (e2e)', () => {
  let app: INestApplication<App>;
  const bankName = `Bank Picker E2E ${Date.now()}`;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useLogger(new LoggerService('E2E-Banks'));
    app.useGlobalFilters(
      new GlobalExceptionFilter(new LoggerService('E2E-Banks')),
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

    await request(app.getHttpServer())
      .post('/api/v1/maker/register')
      .send({
        email: `banks_${Date.now()}@smk.sch.id`,
        password: 'password123',
        namaSiswa: 'Banks Test',
        kelas: 'XII RPL 1',
        namaApp: bankName,
      })
      .expect(201);
  });

  it('should list active banks publicly with safe columns only', async () => {
    const response = await request(app.getHttpServer())
      .get('/api/v1/maker/banks')
      .expect(200);

    expect(response.body).toHaveProperty('success', true);
    expect(Array.isArray(response.body.data)).toBe(true);

    for (const row of response.body.data as Record<string, unknown>[]) {
      expect(Object.keys(row).sort()).toEqual(['appKey', 'id', 'namaApp']);
    }

    const names = (response.body.data as { namaApp: string }[]).map(
      (row) => row.namaApp,
    );
    expect(names).toContain(bankName);
  });

  it('should allow 30 list requests then return 429 with contract envelope', async () => {
    // The public-list test above already spent 1 request of the 30-request
    // banks budget, so 29 more succeed and the 30th loop request is throttled.
    const statuses: number[] = [];
    let throttled: Record<string, unknown> = {};
    for (let i = 0; i < 30; i += 1) {
      const res = await request(app.getHttpServer()).get(
        '/api/v1/maker/banks',
      );
      statuses.push(res.status);
      if (i === 29) throttled = res.body as Record<string, unknown>;
    }

    expect(statuses.slice(0, 29)).toEqual(Array.from({ length: 29 }, () => 200));
    expect(statuses[29]).toBe(429);
    expect(throttled).toMatchObject({ success: false, statusCode: 429 });
    expect(throttled).toHaveProperty('timestamp');
  });

  afterAll(async () => {
    await app.close();
  });
});
