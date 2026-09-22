export type ApiEnvelope<T> = {
  statusCode: number;
  success: boolean;
  message: string;
  data: T;
};

export type ApiErrorBody = {
  statusCode: number;
  success: false;
  message: string;
  errors: unknown;
  timestamp: string;
  errorId?: string;
};

export type UserRole = "nasabah" | "admin_bank";

export type Session = {
  role: UserRole;
  username: string;
  namaApp: string;
};

export type LoginResponse = {
  id: string;
  username: string;
  role: UserRole;
  token: string;
};

export type MakerProfile = {
  id: string;
  email: string;
  namaSiswa: string;
  kelas: string;
  namaApp: string;
  appKey: string;
};

export type BankOption = {
  id: string;
  namaApp: string;
  appKey: string;
};

export type RegisterNasabahInput = {
  username: string;
  password: string;
  namaNasabah: string;
  alamat: string;
  telp: string;
  foto?: File;
};

export type RegisterAdminInput = {
  username: string;
  password: string;
  namaUnit: string;
  namaPengelola: string;
  telp: string;
};

export type MeResponse = {
  id: string;
  username: string;
  role: UserRole;
  nasabah: {
    namaNasabah: string;
    saldoPoin: number;
    foto: string | null;
  } | null;
  adminBank: {
    namaUnit: string;
    namaPengelola: string;
    telp: string;
  } | null;
};

export type DashboardSummary = {
  saldoPoinSaatIni: number;
  totalSampahDisetorKg: number;
  totalPoinDidapat: number;
  totalPoinDitukar: number;
  transaksiTerakhirSetor: {
    kodeSetor: string;
    tanggal: string;
    beratKg: number;
    poin: number;
    status: string;
  } | null;
  transaksiTerakhirTukar: {
    kodePenukaran: string;
    tanggal: string;
    hadiah: string;
    poin: number;
    status: string;
  } | null;
};

export type SummaryPeriode = "semua" | "mingguan" | "bulanan" | "tahunan";

export type SetorDetailItem = {
  kategori: string;
  jenis: string;
  beratKg: number;
  poinPerKg: number;
  subtotalPoin: number;
};

export type SetorDetail = {
  id: string;
  kodeSetor: string;
  tanggal: string;
  status: string;
  nasabah: {
    namaNasabah: string;
    alamat: string;
    telp: string;
  };
  totalBeratKg: number;
  totalPoin: number;
  catatanAdmin: string | null;
  detailSetors: SetorDetailItem[];
};

export type Kategori = {
  id: string;
  namaKategori: string;
  hargaPerKg: number;
  poinPerKg: number;
  jenis: string;
  foto: string | null;
  photoStatus: string;
};

export type SubmitSetorInput = {
  tanggal: string;
  catatan: string;
  items: {
    kategoriSampahId: string;
    beratKg: number;
  }[];
};

export type Hadiah = {
  id: string;
  namaHadiah: string;
  poinDibutuhkan: number;
  stok: number;
  foto: string | null;
  photoStatus: string;
};

export type TukarResult = {
  kodePenukaran: string;
  poinTerpakai: number;
};

export type AdminStats = {
  totalNasabah: number;
  totalKategoriSampah: number;
  totalTransaksiSetor: number;
  totalHadiah: number;
  totalBeratSampahKg: number;
  totalPoinTersalurkan: number;
};

export type AdminSetorRow = {
  id: string;
  kodeSetor: string;
  tanggal: string;
  nasabah: {
    namaNasabah: string;
    telp: string;
  };
  status: string;
  totalBeratKg: number;
  totalPoin: number;
};

export type RekapJenisRow = {
  tonaseKg: number;
  rupiah: number;
  poin: number;
};

export type RekapBody = {
  rekapitulasiTonase: {
    totalKg: number;
    totalTon: number;
    totalEstimasiPembayaranRupiah: number;
    totalPoinDiterbitkan: number;
  };
  breakdownJenisSampah: Record<string, RekapJenisRow>;
  rekapitulasiPenukaranPoin: {
    totalTransaksiPenukaran: number;
    totalPoinTerpakai: number;
  };
};

export type RekapBulanan = RekapBody & {
  periode: string;
};

export type RekapFleksibel = RekapBody & {
  periode: unknown;
};

export type NasabahRow = {
  id: string;
  namaNasabah: string;
  alamat: string;
  telp: string;
  saldoPoin: number;
  foto: string | null;
  photoStatus: string;
  tanggalLahir: string | null;
  user: {
    username: string;
    role: string;
  } | null;
};

export type CreateNasabahInput = {
  username: string;
  password: string;
  namaNasabah: string;
  alamat: string;
  telp: string;
};

export type UpdateNasabahInput = {
  namaLengkap?: string;
  noTelepon?: string;
  alamat?: string;
  tanggalLahir?: string;
};

export type MySetorRow = {
  id: string;
  kodeSetor: string;
  tanggal: string;
  status: string;
  totalBeratKg: number;
  totalPoin: number;
  catatan: string | null;
  detailSetors: {
    kategoriSampahId: string;
    beratKg: number;
    subtotalPoin: number;
    kategoriSampah: {
      namaKategori: string;
      jenis: string;
    };
  }[];
};

export type MyPenukaranRow = {
  id: string;
  kodePenukaran: string;
  tanggal: string;
  poinTerpakai: number;
  status: string;
  hadiah: {
    namaHadiah: string;
    poinDibutuhkan: number;
    foto: string | null;
  };
};
