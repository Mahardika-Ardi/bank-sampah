import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe, VersioningType } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from './../src/app.module.js';
import { App } from 'supertest/types.js';
import { ResponseInterceptor } from '../src/shared/interceptors/response.interceptor.js';

describe('Digital Waste Bank API (e2e)', () => {
  let app: INestApplication<App>;
  let appKey: string;
  const testEmail = `student_${Date.now()}@smk.sch.id`;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
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
  });

  it('/ (GET) - Root Check', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200);
  });

  it('/health (GET) - Health Check', () => {
    return request(app.getHttpServer())
      .get('/health')
      .expect(200);
  });

  it('/api/v1/maker/register (POST) - Register App Maker', async () => {
    const response = await request(app.getHttpServer())
      .post('/api/v1/maker/register')
      .send({
        email: testEmail,
        password: 'password123',
        namaSiswa: 'Budi Test',
        kelas: 'XII RPL 1',
        namaApp: 'Bank Sampah E2E',
      })
      .expect(201);

    expect(response.body).toHaveProperty('success', true);
    expect(response.body.data).toHaveProperty('appKey');
    appKey = response.body.data.appKey;
  });

  it('/api/v1/seed (POST) - Seed Database using x-app-key', async () => {
    const response = await request(app.getHttpServer())
      .post('/api/v1/seed')
      .set('x-app-key', appKey)
      .expect(201);

    expect(response.body).toHaveProperty('success', true);
  });

  it('/api/v1/maker/profile (GET) - Get App Maker Profile & Stats', async () => {
    const response = await request(app.getHttpServer())
      .get('/api/v1/maker/profile')
      .set('x-app-key', appKey)
      .expect(200);

    expect(response.body).toHaveProperty('success', true);
    expect(response.body.data).toHaveProperty('stats');
  });

  afterAll(async () => {
    await app.close();
  });
});
