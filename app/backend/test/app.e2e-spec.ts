import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe, VersioningType } from '@nestjs/common';
import request from 'supertest';
import cookieParser from 'cookie-parser';
import { AppModule } from './../src/app.module.js';
import { App } from 'supertest/types.js';
import { ResponseInterceptor } from '../src/shared/interceptors/response.interceptor.js';
import { GlobalExceptionFilter } from '../src/shared/filters/http-exception.filter.js';
import { LoggerService } from '../src/infra/logger/logger.service.js';

describe('Digital Waste Bank API (e2e)', () => {
  let app: INestApplication<App>;
  let appKey: string;
  let adminToken: string;
  let nasabahToken: string;
  const testEmail = `student_${Date.now()}@smk.sch.id`;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useLogger(new LoggerService('E2E'));
    app.useGlobalFilters(
      new GlobalExceptionFilter(new LoggerService('E2E')),
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

  it('/api/v1/auth/login (POST) - Login seeded admin', async () => {
    const response = await request(app.getHttpServer())
      .post('/api/v1/auth/login')
      .set('x-app-key', appKey)
      .send({ username: 'admin_banksampah', password: 'admin123' })
      .expect(201);

    expect(response.body).toHaveProperty('success', true);
    expect(response.body.data).toHaveProperty('token');
    adminToken = response.body.data.token;
  });

  it('/api/v1/kategori-sampah (POST) - Admin creates category (no photo)', async () => {
    const response = await request(app.getHttpServer())
      .post('/api/v1/kategori-sampah')
      .set('x-app-key', appKey)
      .set('Authorization', `Bearer ${adminToken}`)
      .send({
        namaKategori: 'E2E Kaleng Bekas',
        hargaPerKg: 12000,
        poinPerKg: 30,
        jenis: 'logam',
      })
      .expect(201);

    expect(response.body).toHaveProperty('success', true);
    expect(response.body.data).toMatchObject({
      namaKategori: 'E2E Kaleng Bekas',
      hargaPerKg: 12000,
      poinPerKg: 30,
      jenis: 'logam',
    });
  });

  it('/api/v1/kategori-sampah (GET) - List with x-app-key only', async () => {
    const response = await request(app.getHttpServer())
      .get('/api/v1/kategori-sampah')
      .set('x-app-key', appKey)
      .expect(200);

    expect(response.body).toHaveProperty('success', true);
    expect(response.body.data.length).toBeGreaterThanOrEqual(5);
  });

  it('/api/v1/kategori-sampah/:id (GET) - Unknown id returns contract error', async () => {
    const response = await request(app.getHttpServer())
      .get('/api/v1/kategori-sampah/00000000-0000-4000-8000-000000000000')
      .set('x-app-key', appKey)
      .expect(404);

    expect(response.body).toMatchObject({
      success: false,
      statusCode: 404,
    });
    expect(response.body).toHaveProperty('timestamp');
  });

  it('/api/v1/admin/nasabah (POST+GET+PUT+DELETE) - Full customer lifecycle', async () => {
    const auth = { 'x-app-key': appKey, Authorization: `Bearer ${adminToken}` };

    const created = await request(app.getHttpServer())
      .post('/api/v1/admin/nasabah')
      .set(auth)
      .send({
        username: `e2e_nasabah_${Date.now()}`,
        password: 'password123',
        namaNasabah: 'E2E Nasabah',
        alamat: 'Jl. E2E No. 1',
        telp: '081000000001',
      })
      .expect(201);
    expect(created.body).toHaveProperty('success', true);
    const nasabahId = created.body.data.id as string;

    const listed = await request(app.getHttpServer())
      .get('/api/v1/admin/nasabah')
      .set(auth)
      .expect(200);
    expect(
      (listed.body.data as unknown[]).length,
    ).toBeGreaterThanOrEqual(3);

    const updated = await request(app.getHttpServer())
      .put(`/api/v1/admin/nasabah/${nasabahId}`)
      .set(auth)
      .send({ namaLengkap: 'E2E Nasabah Updated', noTelepon: '081000000002' })
      .expect(200);
    expect(updated.body.data).toMatchObject({
      namaNasabah: 'E2E Nasabah Updated',
      telp: '081000000002',
    });

    await request(app.getHttpServer())
      .delete(`/api/v1/admin/nasabah/${nasabahId}`)
      .set(auth)
      .expect(200);

    await request(app.getHttpServer())
      .get(`/api/v1/admin/nasabah/${nasabahId}`)
      .set(auth)
      .expect(404);
  });

  it('/api/v1/setor-sampah (submit→verify→credit) - Full deposit flow', async () => {
    const nasabahLogin = await request(app.getHttpServer())
      .post('/api/v1/auth/login')
      .set('x-app-key', appKey)
      .send({ username: 'nasabah_budi', password: 'password123' })
      .expect(201);
    nasabahToken = nasabahLogin.body.data.token as string;
    const nasabahAuth = {
      'x-app-key': appKey,
      Authorization: `Bearer ${nasabahToken}`,
    };
    const adminAuth = {
      'x-app-key': appKey,
      Authorization: `Bearer ${adminToken}`,
    };

    const before = await request(app.getHttpServer())
      .get('/api/v1/auth/me')
      .set(nasabahAuth)
      .expect(200);
    const saldoBefore = before.body.data.nasabah.saldoPoin as number;

    const categories = await request(app.getHttpServer())
      .get('/api/v1/kategori-sampah')
      .set('x-app-key', appKey)
      .expect(200);
    const katId = categories.body.data[0].id as string;

    const submitted = await request(app.getHttpServer())
      .post('/api/v1/setor-sampah/pengajuan')
      .set(nasabahAuth)
      .send({
        tanggal: '2026-08-26T10:00:00.000Z',
        catatan: 'E2E setor',
        items: [{ kategoriSampahId: katId, beratKg: 2 }],
      })
      .expect(201);
    expect(submitted.body.data).toMatchObject({
      status: 'menunggu_konfirmasi',
    });
    expect(submitted.body.data.kodeSetor).toMatch(/^STR-\d{6}-\d{4}$/);
    const setorId = submitted.body.data.id as string;

    const verified = await request(app.getHttpServer())
      .put(`/api/v1/setor-sampah/admin/verify/${setorId}`)
      .set(adminAuth)
      .send({ status: 'selesai', catatanAdmin: 'E2E verified' })
      .expect(200);
    expect(verified.body.data).toMatchObject({ status: 'selesai' });

    const after = await request(app.getHttpServer())
      .get('/api/v1/auth/me')
      .set(nasabahAuth)
      .expect(200);
    expect(after.body.data.nasabah.saldoPoin).toBeGreaterThan(saldoBefore);

    const receipt = await request(app.getHttpServer())
      .get(`/api/v1/setor-sampah/${setorId}`)
      .set(nasabahAuth)
      .expect(200);
    expect(receipt.body.data).toHaveProperty('kodeSetor');
  });

  it('/api/v1/setor-sampah (reject) - Ditolak credits nothing', async () => {
    const nasabahAuth = {
      'x-app-key': appKey,
      Authorization: `Bearer ${nasabahToken}`,
    };
    const adminAuth = {
      'x-app-key': appKey,
      Authorization: `Bearer ${adminToken}`,
    };

    const before = await request(app.getHttpServer())
      .get('/api/v1/auth/me')
      .set(nasabahAuth)
      .expect(200);
    const saldoBefore = before.body.data.nasabah.saldoPoin as number;

    const categories = await request(app.getHttpServer())
      .get('/api/v1/kategori-sampah')
      .set('x-app-key', appKey)
      .expect(200);

    const submitted = await request(app.getHttpServer())
      .post('/api/v1/setor-sampah/pengajuan')
      .set(nasabahAuth)
      .send({
        tanggal: '2026-08-26T10:00:00.000Z',
        catatan: 'E2E reject me',
        items: [
          { kategoriSampahId: categories.body.data[0].id, beratKg: 1 },
        ],
      })
      .expect(201);

    await request(app.getHttpServer())
      .put(`/api/v1/setor-sampah/admin/verify/${submitted.body.data.id}`)
      .set(adminAuth)
      .send({ status: 'ditolak', catatanAdmin: 'Tercampur.' })
      .expect(200);

    const after = await request(app.getHttpServer())
      .get('/api/v1/auth/me')
      .set(nasabahAuth)
      .expect(200);
    expect(after.body.data.nasabah.saldoPoin).toBe(saldoBefore);
  });

  it('/api/v1/hadiah (POST+GET) - Reward catalog flow', async () => {
    const auth = { 'x-app-key': appKey, Authorization: `Bearer ${adminToken}` };

    const created = await request(app.getHttpServer())
      .post('/api/v1/hadiah')
      .set(auth)
      .send({
        namaHadiah: `E2E Gula ${Date.now()}`,
        poinDibutuhkan: 60,
        stok: 30,
      })
      .expect(201);
    expect(created.body.data).toMatchObject({
      poinDibutuhkan: 60,
      stok: 30,
    });

    const listed = await request(app.getHttpServer())
      .get('/api/v1/hadiah')
      .set('x-app-key', appKey)
      .expect(200);
    expect(
      (listed.body.data as unknown[]).length,
    ).toBeGreaterThanOrEqual(4);
  });

  it('/api/v1/penukaran-poin (tukar→stamp→void) - Full redemption flow', async () => {
    const nasabahAuth = {
      'x-app-key': appKey,
      Authorization: `Bearer ${nasabahToken}`,
    };
    const adminAuth = {
      'x-app-key': appKey,
      Authorization: `Bearer ${adminToken}`,
    };

    const rewards = await request(app.getHttpServer())
      .get('/api/v1/hadiah')
      .set('x-app-key', appKey)
      .expect(200);
    const reward = (rewards.body.data as { id: string; poinDibutuhkan: number; stok: number }[])
      .filter((r) => r.stok > 0)
      .sort((a, b) => a.poinDibutuhkan - b.poinDibutuhkan)[0];
    const stockBefore = reward.stok;

    const meBefore = await request(app.getHttpServer())
      .get('/api/v1/auth/me')
      .set(nasabahAuth)
      .expect(200);
    const saldoBefore = meBefore.body.data.nasabah.saldoPoin as number;

    const redeemed = await request(app.getHttpServer())
      .post('/api/v1/penukaran-poin/tukar')
      .set(nasabahAuth)
      .send({ hadiahId: reward.id })
      .expect(201);
    expect(redeemed.body.data.kodePenukaran).toMatch(/^TKR-\d{6}-\d{4}$/);
    const tukarId = redeemed.body.data.id as string;
    const cost = redeemed.body.data.poinTerpakai as number;

    const meAfter = await request(app.getHttpServer())
      .get('/api/v1/auth/me')
      .set(nasabahAuth)
      .expect(200);
    expect(meAfter.body.data.nasabah.saldoPoin).toBe(saldoBefore - cost);

    await request(app.getHttpServer())
      .put(`/api/v1/penukaran-poin/admin/status/${tukarId}`)
      .set(adminAuth)
      .send({ status: 'selesai' })
      .expect(200);

    const nota = await request(app.getHttpServer())
      .get(`/api/v1/penukaran-poin/nota/${tukarId}`)
      .set(nasabahAuth)
      .expect(200);
    expect(nota.body.data).toMatchObject({ status: 'selesai' });

    await request(app.getHttpServer())
      .put(`/api/v1/penukaran-poin/admin/status/${tukarId}`)
      .set(adminAuth)
      .send({ status: 'diproses' })
      .expect(200);

    const meVoided = await request(app.getHttpServer())
      .get('/api/v1/auth/me')
      .set(nasabahAuth)
      .expect(200);
    expect(meVoided.body.data.nasabah.saldoPoin).toBe(saldoBefore);

    const rewardsAfter = await request(app.getHttpServer())
      .get('/api/v1/hadiah')
      .set('x-app-key', appKey)
      .expect(200);
    const rewardAfter = (
      rewardsAfter.body.data as { id: string; stok: number }[]
    ).find((r) => r.id === reward.id);
    expect(rewardAfter?.stok).toBe(stockBefore);

    await request(app.getHttpServer())
      .put(`/api/v1/penukaran-poin/admin/status/${tukarId}`)
      .set(adminAuth)
      .send({ status: 'diproses' })
      .expect(400);
  });

  it('/api/v1/reports - Rekapitulasi and dashboards', async () => {
    const nasabahAuth = {
      'x-app-key': appKey,
      Authorization: `Bearer ${nasabahToken}`,
    };
    const adminAuth = {
      'x-app-key': appKey,
      Authorization: `Bearer ${adminToken}`,
    };
    const now = new Date();
    const bulan = `${now.getUTCFullYear()}-${String(now.getUTCMonth() + 1).padStart(2, '0')}`;

    const rekap = await request(app.getHttpServer())
      .get('/api/v1/rekapitulasi/bulanan')
      .query({ bulan })
      .set(adminAuth)
      .expect(200);
    expect(rekap.body.data).toMatchObject({
      periode: bulan,
      rekapitulasiTonase: expect.objectContaining({ totalKg: expect.any(Number) }),
    });
    expect(rekap.body.data.breakdownJenisSampah).toHaveProperty('plastik');

    const summary = await request(app.getHttpServer())
      .get('/api/v1/dashboard/summary')
      .set(nasabahAuth)
      .expect(200);
    expect(summary.body.data).toHaveProperty('saldoPoinSaatIni');
    expect(typeof summary.body.data.saldoPoinSaatIni).toBe('number');

    const stats = await request(app.getHttpServer())
      .get('/api/v1/dashboard/stats')
      .set(adminAuth)
      .expect(200);
    expect(stats.body.data.totalNasabah).toBeGreaterThanOrEqual(2);
    expect(stats.body.data.totalKategoriSampah).toBeGreaterThanOrEqual(4);
  });

  it('/api/v1/reports - Weekly, annual and windowed dashboards', async () => {
    const nasabahAuth = {
      'x-app-key': appKey,
      Authorization: `Bearer ${nasabahToken}`,
    };
    const adminAuth = {
      'x-app-key': appKey,
      Authorization: `Bearer ${adminToken}`,
    };

    const weekly = await request(app.getHttpServer())
      .get('/api/v1/rekapitulasi/mingguan')
      .set(adminAuth)
      .expect(200);
    expect(weekly.body.data.periode).toMatchObject({ jenis: 'mingguan' });
    expect(weekly.body.data).toHaveProperty('rekapitulasiTonase');

    const annual = await request(app.getHttpServer())
      .get('/api/v1/rekapitulasi/tahunan')
      .query({ tahun: new Date().getUTCFullYear() })
      .set(adminAuth)
      .expect(200);
    expect(annual.body.data.periode.jenis).toBe('tahunan');
    expect(
      (annual.body.data.rekapitulasiTonase.totalKg as number),
    ).toBeGreaterThanOrEqual(
      weekly.body.data.rekapitulasiTonase.totalKg as number,
    );

    const windowed = await request(app.getHttpServer())
      .get('/api/v1/dashboard/summary')
      .query({ periode: 'tahunan', tahun: new Date().getUTCFullYear() })
      .set(nasabahAuth)
      .expect(200);
    expect(windowed.body.data).toHaveProperty('saldoPoinSaatIni');
  });

  it('/api/v1/auth/refresh (POST) - Rotate access token via cookie', async () => {
    const login = await request(app.getHttpServer())
      .post('/api/v1/auth/login')
      .set('x-app-key', appKey)
      .send({ username: 'nasabah_budi', password: 'password123' })
      .expect(201);

    const setCookies = login.headers['set-cookie'] as unknown as string[];
    const refreshCookie = setCookies.find((c) => c.startsWith('refresh_token='));
    expect(refreshCookie).toBeDefined();

    const refreshed = await request(app.getHttpServer())
      .post('/api/v1/auth/refresh')
      .set('x-app-key', appKey)
      .set('Cookie', refreshCookie.split(';')[0])
      .expect(200);

    expect(refreshed.body).toHaveProperty('success', true);
    expect(refreshed.body.data).toHaveProperty('token');
  });

  it('/api/v1/auth/refresh (POST) - Rejects missing refresh cookie', async () => {
    const response = await request(app.getHttpServer())
      .post('/api/v1/auth/refresh')
      .set('x-app-key', appKey)
      .expect(401);

    expect(response.body).toHaveProperty('success', false);
  });

  afterAll(async () => {
    await app.close();
  });
});
