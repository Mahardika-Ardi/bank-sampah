export const MAKER_REGISTER_RESPONSE = {
  statusCode: 201,
  success: true,
  message:
    'App Maker registered successfully! Save the following appKey for the x-app-key header on every frontend API request.',
  data: {
    id: '160adcd8-d080-4b0d-818f-eb31c7e30976',
    email: 'siswa1@smk.sch.id',
    namaSiswa: 'Budi Santoso',
    kelas: 'XII RPL 1',
    namaApp: 'Bank Sampah Digital Hub',
    appKey: '97945213-34a7-48cf-baac-8740c1d18765',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
    createdAt: '2026-08-26T09:35:50.328Z',
  },
};

export const MAKER_LOGIN_RESPONSE = {
  statusCode: 200,
  success: true,
  message: 'App Maker login successful',
  data: {
    id: '160adcd8-d080-4b0d-818f-eb31c7e30976',
    email: 'siswa1@smk.sch.id',
    namaApp: 'Bank Sampah Digital Hub',
    appKey: '97945213-34a7-48cf-baac-8740c1d18765',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
  },
};

export const MAKER_PROFILE_RESPONSE = {
  statusCode: 200,
  success: true,
  message: 'App Maker profile retrieved successfully',
  data: {
    id: '160adcd8-d080-4b0d-818f-eb31c7e30976',
    email: 'siswa1@smk.sch.id',
    namaSiswa: 'Budi Santoso',
    kelas: 'XII RPL 1',
    namaApp: 'Bank Sampah Digital Hub',
    appKey: '97945213-34a7-48cf-baac-8740c1d18765',
    stats: {
      totalNasabah: 2,
      totalKategoriSampah: 4,
      totalTransaksiSetor: 1,
      totalHadiah: 3,
    },
  },
};

export const MAKER_CHECK_KEY_RESPONSE = {
  statusCode: 200,
  success: true,
  message: 'App Key found',
  data: {
    email: 'siswa1@smk.sch.id',
    namaSiswa: 'Budi Santoso',
    namaApp: 'Bank Sampah Digital Hub',
    appKey: '97945213-34a7-48cf-baac-8740c1d18765',
  },
};

export const MAKER_BANKS_RESPONSE = {
  statusCode: 200,
  success: true,
  message: 'Active waste banks retrieved successfully',
  data: [
    {
      id: '160adcd8-d080-4b0d-818f-eb31c7e30976',
      namaApp: 'Bank Sampah Digital Hub',
      appKey: '97945213-34a7-48cf-baac-8740c1d18765',
    },
  ],
};

export const AUTH_NASABAH_REGISTER_RESPONSE = {
  statusCode: 201,
  success: true,
  message: 'Customer registered successfully',
  data: {
    id: '78a1b2c3-d4e5-4678-9abc-def012345678',
    username: 'nasabah_dewi',
    role: 'nasabah',
    nasabah: {
      id: 'c1234567-89ab-cdef-0123-456789abcdef',
      namaNasabah: 'Dewi Lestari',
      alamat: 'Jl. Kenanga No. 5, RT 02/01',
      telp: '081987654321',
      saldoPoin: 0,
      foto: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150',
    },
  },
};

export const AUTH_ADMIN_REGISTER_RESPONSE = {
  statusCode: 201,
  success: true,
  message: 'Waste bank unit registered successfully',
  data: {
    id: '40203124-6f99-4a08-9e4a-6458ca692f23',
    username: 'admin_banksampah',
    role: 'admin_bank',
    adminBank: {
      id: 'd46d5a47-1418-4960-b028-af6d5da8c888',
      namaUnit: 'Bank Sampah Asri Jaya',
      namaPengelola: 'Bapak H. Sukirman',
      telp: '081234567890',
    },
  },
};

export const AUTH_LOGIN_RESPONSE = {
  statusCode: 201,
  success: true,
  message: 'Login nasabah successful',
  data: {
    id: '654edb1a-7add-43f4-9c3d-81c44bda08fb',
    username: 'nasabah_budi',
    role: 'nasabah',
    nasabah: {
      id: 'b17688a8-91e5-4d4b-8e3a-429d2b3415ea',
      namaNasabah: 'Budi Santoso',
      saldoPoin: 150,
    },
    adminBank: null,
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
  },
};

export const AUTH_ME_RESPONSE = {
  statusCode: 200,
  success: true,
  message: 'User profile retrieved successfully',
  data: {
    id: '654edb1a-7add-43f4-9c3d-81c44bda08fb',
    username: 'nasabah_budi',
    role: 'nasabah',
    nasabah: {
      id: 'b17688a8-91e5-4d4b-8e3a-429d2b3415ea',
      namaNasabah: 'Budi Santoso',
      saldoPoin: 150,
    },
    adminBank: null,
  },
};

export const KATEGORI_LIST_RESPONSE = {
  statusCode: 200,
  success: true,
  message: 'Recyclable waste category list retrieved successfully',
  data: [
    {
      id: 'eacfc2cf-2dc6-40c3-96fe-d55806f96b50',
      namaKategori: 'Botol Plastik PET (Bersih)',
      hargaPerKg: 3500,
      poinPerKg: 10,
      jenis: 'plastik',
      foto: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=300',
    },
    {
      id: '5b2eff42-e462-400f-95c7-4b096e8cc6e1',
      namaKategori: 'Kardus & Karton Bekas',
      hargaPerKg: 2000,
      poinPerKg: 5,
      jenis: 'kertas',
      foto: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=300',
    },
  ],
};

export const KATEGORI_DETAIL_RESPONSE = {
  statusCode: 200,
  success: true,
  message: 'Waste category detail retrieved successfully',
  data: {
    id: 'eacfc2cf-2dc6-40c3-96fe-d55806f96b50',
    namaKategori: 'Botol Plastik PET (Bersih)',
    hargaPerKg: 3500,
    poinPerKg: 10,
    jenis: 'plastik',
    foto: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=300',
  },
};

export const KATEGORI_CREATE_RESPONSE = {
  statusCode: 201,
  success: true,
  message: 'New waste category saved successfully',
  data: {
    id: 'f1234567-89ab-cdef-0123-456789abcdef',
    namaKategori: 'Tembaga Super',
    hargaPerKg: 75000,
    poinPerKg: 150,
    jenis: 'logam',
    foto: 'https://images.unsplash.com/photo-tembaga',
  },
};

export const SEED_RESPONSE = {
  statusCode: 201,
  success: true,
  message: 'Bank Sampah sample data generated successfully!',
  data: {
    admin: {
      username: 'admin_banksampah',
      password: 'admin123',
      namaUnit: 'Bank Sampah Asri Jaya',
    },
    nasabah1: {
      username: 'nasabah_budi',
      password: 'password123',
      namaNasabah: 'Budi Santoso',
      saldoPoin: 150,
    },
    nasabah2: {
      username: 'nasabah_siti',
      password: 'password123',
      namaNasabah: 'Siti Aminah',
      saldoPoin: 80,
    },
    kategoriSampahCount: 4,
    hadiahKatalogCount: 3,
  },
};

export const NASABAH_LIST_RESPONSE = {
  statusCode: 200,
  success: true,
  message: 'Customer list retrieved successfully',
  data: [
    {
      id: 'b17688a8-91e5-4d4b-8e3a-429d2b3415ea',
      namaNasabah: 'Budi Santoso',
      alamat: 'Jl. Merdeka No. 12, RT 03/05',
      telp: '085678901234',
      saldoPoin: 150,
      foto: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150',
      tanggalLahir: null,
      user: { username: 'nasabah_budi', role: 'nasabah' },
    },
  ],
};

export const HADIAH_LIST_RESPONSE = {
  statusCode: 200,
  success: true,
  message: 'Reward catalog retrieved successfully',
  data: [
    {
      id: '8bd74595-8016-42b9-a585-a0e40d0fe42f',
      namaHadiah: 'Voucher Pulsa / E-Wallet Rp 25.000',
      poinDibutuhkan: 75,
      stok: 50,
      foto: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=300',
    },
  ],
};

export const SETOR_SUBMIT_RESPONSE = {
  statusCode: 201,
  success: true,
  message: 'Waste deposit request created successfully',
  data: {
    id: 'a9876543-210b-cdef-0123-456789abcdef',
    kodeSetor: 'STR-202608-1002',
    tanggal: '2026-08-26T10:00:00.000Z',
    status: 'menunggu_konfirmasi',
    totalBeratKg: 6.5,
    estimasiTotalPoin: 55,
    catatan: 'Sampah sudah dipilah rapi dalam karung',
    detailSetors: [
      {
        kategoriSampahId: 'eacfc2cf-2dc6-40c3-96fe-d55806f96b50',
        beratKg: 4.5,
        subtotalPoin: 45,
      },
      {
        kategoriSampahId: '5b2eff42-e462-400f-95c7-4b096e8cc6e1',
        beratKg: 2.0,
        subtotalPoin: 10,
      },
    ],
  },
};

export const SETOR_RECEIPT_RESPONSE = {
  statusCode: 200,
  success: true,
  message: 'Deposit transaction detail retrieved successfully',
  data: {
    id: '9498c6d6-c2de-450d-a391-e80fbff5386c',
    kodeSetor: 'STR-202608-1001',
    tanggal: '2026-08-26T09:35:51.874Z',
    status: 'selesai',
    nasabah: {
      namaNasabah: 'Budi Santoso',
      alamat: 'Jl. Merdeka No. 12, RT 03/05',
      telp: '085678901234',
    },
    totalBeratKg: 15,
    totalPoin: 150,
    catatanAdmin: 'Penimbangan selesai dan akurat.',
    detailSetors: [
      {
        kategori: 'Botol Plastik PET (Bersih)',
        jenis: 'plastik',
        beratKg: 10,
        poinPerKg: 10,
        subtotalPoin: 100,
      },
    ],
  },
};

export const PENUKARAN_TUKAR_RESPONSE = {
  statusCode: 201,
  success: true,
  message: 'Point redemption submitted successfully',
  data: {
    id: '082f54c6-a2f0-4919-98cb-94e6c43bcb79',
    kodePenukaran: 'TKR-202608-5001',
    tanggal: '2026-08-26T09:35:52.333Z',
    hadiahId: '8bd74595-8016-42b9-a585-a0e40d0fe42f',
    poinTerpakai: 75,
    sisaSaldoPoin: 75,
    status: 'diproses',
    hadiah: { namaHadiah: 'Voucher Pulsa / E-Wallet Rp 25.000' },
  },
};

export const PENUKARAN_NOTA_RESPONSE = {
  statusCode: 200,
  success: true,
  message: 'Redemption receipt retrieved successfully',
  data: {
    id: '082f54c6-a2f0-4919-98cb-94e6c43bcb79',
    kodePenukaran: 'TKR-202608-5001',
    tanggal: '2026-08-26T09:35:52.333Z',
    nasabah: { namaNasabah: 'Budi Santoso', telp: '085678901234' },
    hadiah: {
      namaHadiah: 'Voucher Pulsa / E-Wallet Rp 25.000',
      poinDibutuhkan: 75,
    },
    poinTerpakai: 75,
    status: 'selesai',
  },
};

export const REKAP_BULANAN_RESPONSE = {
  statusCode: 200,
  success: true,
  message: 'Monthly waste bank recap for 8/2026 retrieved successfully',
  data: {
    periode: '2026-08',
    rekapitulasiTonase: {
      totalKg: 15,
      totalTon: 0.015,
      totalEstimasiPembayaranRupiah: 45000,
      totalPoinDiterbitkan: 125,
    },
    breakdownJenisSampah: {
      plastik: { tonaseKg: 10, rupiah: 35000, poin: 100 },
      kertas: { tonaseKg: 5, rupiah: 10000, poin: 25 },
      logam: { tonaseKg: 0, rupiah: 0, poin: 0 },
      kaca: { tonaseKg: 0, rupiah: 0, poin: 0 },
    },
    rekapitulasiPenukaranPoin: {
      totalTransaksiPenukaran: 1,
      totalPoinTerpakai: 75,
    },
  },
};

export const DASHBOARD_SUMMARY_RESPONSE = {
  statusCode: 200,
  success: true,
  message: 'Customer dashboard summary retrieved successfully',
  data: {
    saldoPoinSaatIni: 150,
    totalSampahDisetorKg: 15,
    totalPoinDidapat: 150,
    totalPoinDitukar: 75,
    transaksiTerakhirSetor: {
      kodeSetor: 'STR-202608-1001',
      tanggal: '2026-08-26T09:35:51.874Z',
      beratKg: 15,
      poin: 150,
      status: 'selesai',
    },
    transaksiTerakhirTukar: {
      kodePenukaran: 'TKR-202608-5001',
      tanggal: '2026-08-26T09:35:52.333Z',
      hadiah: 'Voucher Pulsa / E-Wallet Rp 25.000',
      poin: 75,
      status: 'selesai',
    },
  },
};

export const ERROR_ENVELOPE_EXAMPLE = {
  statusCode: 400,
  success: false,
  message: 'Username "nasabah_dewi" is already used in your application database.',
  errors: null,
  timestamp: '2026-08-26T09:35:51.307Z',
  errorId: '1bf33162-67ac-4ce8-861e-a3eaac58224f',
};

export const UUID_EXAMPLE = 'eacfc2cf-2dc6-40c3-96fe-d55806f96b50';
