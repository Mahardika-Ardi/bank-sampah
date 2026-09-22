"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Icon from "@/components/ui/Icon";
import { ApiError } from "@/lib/api/client";
import { login, makerProfile } from "@/lib/api/auth";
import { useSelectedBank } from "@/hooks/bank/useSelectedBank";
import { homeForRole, writeSession } from "@/lib/session";

type Toast =
  | { state: "hidden" }
  | { state: "loading"; tenant: string }
  | { state: "success"; destination: string }
  | { state: "error"; message: string }
  | { state: "info"; message: string };

type RoleTag =
  | { label: "Auto Detect"; tone: "neutral"; hint: string }
  | { label: "Role: Nasabah"; tone: "nasabah"; hint: string }
  | { label: "Role: Admin Bank"; tone: "admin"; hint: string };

const AUTO_TAG: RoleTag = {
  label: "Auto Detect",
  tone: "neutral",
  hint: "Sistem otomatis mendeteksi peran akun saat autentikasi.",
};

const QUICK_FILL = {
  nasabah: {
    username: "nasabah_budi",
    password: "password123",
    tag: {
      label: "Role: Nasabah",
      tone: "nasabah",
      hint: "Nasabah: Setor sampah, cek saldo poin, & tukar hadiah.",
    } as RoleTag,
  },
  admin: {
    username: "admin_banksampah",
    password: "admin123",
    tag: {
      label: "Role: Admin Bank",
      tone: "admin",
      hint: "Admin: Verifikasi setoran fisik, input timbangan, & kelola nasabah.",
    } as RoleTag,
  },
} as const;

function tagClasses(tone: RoleTag["tone"]): string {
  if (tone === "nasabah")
    return "bg-success/15 text-success";
  if (tone === "admin") return "bg-gold/20 text-eco";
  return "bg-eco/10 text-eco";
}

export default function LoginMosaic({ registered }: { registered: boolean }) {
  const router = useRouter();
  const { bank, requireBank } = useSelectedBank();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<Toast>({ state: "hidden" });
  const [roleTag, setRoleTag] = useState<RoleTag>(AUTO_TAG);

  useEffect(() => {
    requireBank("/login");
  }, [requireBank]);

  function fillCredential(kind: keyof typeof QUICK_FILL) {
    const preset = QUICK_FILL[kind];
    setUsername(preset.username);
    setPassword(preset.password);
    setRoleTag(preset.tag);
    setToast({ state: "hidden" });
  }

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!bank || loading) return;
    if (!username.trim() || !password) {
      setToast({
        state: "error",
        message: "Username dan kata sandi wajib diisi.",
      });
      return;
    }
    setLoading(true);
    setToast({ state: "loading", tenant: bank.namaApp });
    try {
      const data = await login(username.trim(), password);
      let namaApp = bank.namaApp;
      try {
        namaApp = (await makerProfile()).namaApp;
      } catch {
        namaApp = bank.namaApp;
      }
      writeSession({ role: data.role, username: data.username, namaApp });
      const destination = homeForRole(data.role);
      setToast({ state: "success", destination });
      router.replace(destination);
    } catch (err) {
      const message =
        err instanceof ApiError
          ? err.statusCode === 429
            ? "Terlalu banyak percobaan masuk. Tunggu beberapa menit lalu coba lagi."
            : err.message
          : "Login gagal. Coba lagi.";
      setToast({ state: "error", message });
    } finally {
      setLoading(false);
    }
  }

  if (!bank) return null;

  return (
    <div className="flex flex-col w-full items-center justify-center py-6 px-4">
      <div className="mb-6 flex items-center justify-center gap-1.5 px-4 py-1.5 rounded-full bg-card shadow-sm text-sm font-semibold text-ink">
        <Icon name="domain" size="sm" filled className="text-eco" />
        <span>
          Unit Bank: <strong>{bank.namaApp}</strong>
        </span>
        <a
          href="/pilih-bank?next=/login"
          className="ml-2 text-xs font-semibold text-eco hover:underline"
        >
          Ganti
        </a>
      </div>

      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 rounded-2xl bg-card shadow-xl overflow-hidden">
        <div className="lg:col-span-5 bg-eco p-8 lg:p-10 flex flex-col justify-between relative overflow-hidden text-white">
          <div className="absolute -right-16 -top-16 w-56 h-56 rounded-full bg-gold/20 blur-2xl pointer-events-none" />
          <div className="absolute -left-12 -bottom-12 w-48 h-48 rounded-full bg-white/10 blur-xl pointer-events-none" />
          <div className="relative z-10">
            <div className="mb-8 flex items-center gap-2.5">
              <span className="w-10 h-10 rounded-xl bg-gold/20 text-gold flex items-center justify-center">
                <Icon name="recycling" filled />
              </span>
              <span className="font-display font-bold text-lg leading-tight">
                Eco-Waste
                <span className="block text-xs font-body font-normal text-white/70">
                  Management
                </span>
              </span>
            </div>
            <div className="space-y-3 mb-10">
              <span className="px-2.5 py-1 rounded-full bg-gold/20 text-peach text-[11px] font-bold tracking-wider uppercase inline-block">
                Portal Mandiri Terpadu
              </span>
              <h2 className="font-display font-bold text-[32px] leading-[40px] tracking-tight">
                Ubah Sampah Jadi Berkah &amp; Nilai Nyata.
              </h2>
              <p className="text-sm text-white/80">
                Platform verifikasi timbangan presisi dan konversi saldo poin
                seketika untuk nasabah komunitas serta petugas bank sampah.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 mb-8">
              <div className="p-3.5 rounded-xl bg-eco-deep/60">
                <span className="text-xs text-white/70 block">
                  Akurasi Timbangan
                </span>
                <span className="font-display font-semibold text-lg text-peach">
                  0.01 Kg
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-eco-deep/60">
                <span className="text-xs text-white/70 block">
                  Pencairan Poin
                </span>
                <span className="font-display font-semibold text-lg text-peach">
                  Real-time
                </span>
              </div>
            </div>
          </div>
          <div className="relative z-10 pt-6 border-t border-white/10">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold uppercase text-peach tracking-wider">
                Demo / Uji Coba Cepat
              </span>
              <span className="text-xs text-white/60">Klik untuk isi form</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => fillCredential("nasabah")}
                className="text-left p-2.5 rounded-xl bg-white/10 hover:bg-white/15 transition-colors"
              >
                <div className="flex items-center gap-1.5 text-peach font-display font-semibold text-sm">
                  <Icon name="person" size="sm" />
                  <span>Nasabah</span>
                </div>
                <div className="text-xs text-white/80 truncate">
                  nasabah_budi
                </div>
                <div className="text-[10px] text-white/60 mt-0.5">
                  Penyetor &amp; Poin
                </div>
              </button>
              <button
                type="button"
                onClick={() => fillCredential("admin")}
                className="text-left p-2.5 rounded-xl bg-white/10 hover:bg-white/15 transition-colors"
              >
                <div className="flex items-center gap-1.5 text-peach font-display font-semibold text-sm">
                  <Icon name="shield_person" size="sm" />
                  <span>Admin Bank</span>
                </div>
                <div className="text-xs text-white/80 truncate">
                  admin_banksampah
                </div>
                <div className="text-[10px] text-white/60 mt-0.5">
                  Timbangan &amp; Unit
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 p-8 lg:p-12 flex flex-col justify-between bg-card">
          <div>
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-gold" />
                <span className="text-xs text-info font-semibold uppercase tracking-wider">
                  Single Sign-On Engine
                </span>
              </div>
              <h1 className="font-display font-bold text-2xl text-ink tracking-tight">
                Masuk ke Akun Bank Sampah
              </h1>
              <p className="text-sm text-ink/60 mt-1">
                Satu portal untuk Nasabah Lingkungan dan Admin Operasional
                Bank Sampah.
              </p>
            </div>

            {registered ? (
              <p
                role="status"
                className="mb-4 p-3 rounded-xl bg-success/10 text-success text-sm font-medium"
              >
                Pendaftaran berhasil. Silakan masuk dengan akun Anda.
              </p>
            ) : null}

            <div className="mb-6 p-3 rounded-xl bg-sand flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 min-w-0">
                <Icon name="info" className="text-info shrink-0" />
                <span className="text-xs text-ink font-medium truncate">
                  {roleTag.hint}
                </span>
              </div>
              <span
                className={`px-2 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider whitespace-nowrap ${tagClasses(roleTag.tone)}`}
              >
                {roleTag.label}
              </span>
            </div>

            <form onSubmit={(event) => void onSubmit(event)} className="space-y-4">
              <div>
                <label
                  htmlFor="usernameInput"
                  className="block text-sm font-semibold text-ink mb-1.5"
                >
                  Username atau Nomor WhatsApp
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted">
                    <Icon name="account_circle" />
                  </span>
                  <input
                    id="usernameInput"
                    name="username"
                    type="text"
                    required
                    autoComplete="username"
                    placeholder="Masukkan username atau nomor WhatsApp"
                    value={username}
                    onChange={(event) => {
                      setUsername(event.target.value);
                      setRoleTag(AUTO_TAG);
                    }}
                    className="w-full pl-11 pr-4 py-3 rounded-xl bg-sand text-sm text-ink placeholder:text-ink/40 outline-none focus:ring-2 focus:ring-eco transition-all"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label
                    htmlFor="passwordInput"
                    className="block text-sm font-semibold text-ink"
                  >
                    Kata Sandi
                  </label>
                  <button
                    type="button"
                    onClick={() =>
                      setToast({
                        state: "info",
                        message:
                          "Hubungi admin bank Anda untuk reset kata sandi.",
                      })
                    }
                    className="text-xs text-eco hover:text-ink font-semibold transition-colors"
                  >
                    Lupa Kata Sandi?
                  </button>
                </div>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted">
                    <Icon name="lock" />
                  </span>
                  <input
                    id="passwordInput"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    autoComplete="current-password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    className="w-full pl-11 pr-12 py-3 rounded-xl bg-sand text-sm text-ink placeholder:text-ink/40 outline-none focus:ring-2 focus:ring-eco transition-all"
                  />
                  <button
                    type="button"
                    aria-label="Tampilkan / Sembunyikan Kata Sandi"
                    onClick={() => setShowPassword((value) => !value)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted hover:text-ink p-1 transition-colors"
                  >
                    <Icon
                      name={showPassword ? "visibility_off" : "visibility"}
                    />
                  </button>
                </div>
              </div>

              {toast.state === "loading" ? (
                <div
                  role="status"
                  className="p-3 rounded-xl bg-sand transition-all"
                >
                  <div className="flex items-center gap-2">
                    <span className="animate-spin text-info">
                      <Icon name="sync" />
                    </span>
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-ink">
                        Memproses autentikasi...
                      </span>
                      <span className="text-xs text-ink/60 font-mono">
                        POST /api/v1/auth/login [Bank: {toast.tenant}]
                      </span>
                    </div>
                  </div>
                </div>
              ) : null}
              {toast.state === "success" ? (
                <div
                  role="status"
                  className="p-3 rounded-xl bg-sand transition-all"
                >
                  <div className="flex items-center gap-2">
                    <Icon name="check_circle" className="text-success" />
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-ink">
                        Autentikasi Berhasil!
                      </span>
                      <span className="text-xs text-ink/60 font-mono">
                        Status 200 OK -&gt; Mengalihkan...
                      </span>
                    </div>
                  </div>
                </div>
              ) : null}
              {toast.state === "error" ? (
                <p
                  role="alert"
                  className="p-3 rounded-xl bg-danger/10 text-danger text-sm font-medium"
                >
                  {toast.message}
                </p>
              ) : null}
              {toast.state === "info" ? (
                <p
                  role="status"
                  className="p-3 rounded-xl bg-info/10 text-ink text-sm font-medium"
                >
                  {toast.message}
                </p>
              ) : null}

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 px-6 rounded-full bg-eco hover:bg-eco-deep disabled:opacity-60 text-white font-display font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                >
                  <span>{loading ? "Memproses..." : "Masuk ke Aplikasi"}</span>
                  <Icon name="arrow_forward" size="sm" />
                </button>
              </div>
            </form>

            <div className="my-8 flex items-center gap-3">
              <span className="flex-1 h-px bg-ink/10" />
              <span className="text-xs text-muted font-medium uppercase tracking-wider">
                Belum punya akun terdaftar?
              </span>
              <span className="flex-1 h-px bg-ink/10" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href="/register"
                className="p-4 rounded-2xl bg-sand hover:bg-peach/50 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-full bg-success/15 text-success flex items-center justify-center mb-2">
                    <Icon name="nature_people" size="sm" />
                  </div>
                  <h3 className="font-display font-semibold text-ink group-hover:text-eco">
                    Daftar sebagai Nasabah
                  </h3>
                  <p className="text-xs text-ink/60 mt-0.5">
                    Registrasi Warga Mandiri untuk setor sampah dan tukar
                    poin.
                  </p>
                </div>
                <div className="flex items-center gap-1 text-sm font-semibold text-eco mt-3">
                  <span>Buka Formulir</span>
                  <Icon
                    name="east"
                    size="sm"
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </div>
              </a>
              <a
                href="/admin/register"
                className="p-4 rounded-2xl bg-sand hover:bg-peach/50 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-full bg-gold/20 text-eco flex items-center justify-center mb-2">
                    <Icon name="storefront" size="sm" />
                  </div>
                  <h3 className="font-display font-semibold text-ink group-hover:text-eco">
                    Pendaftaran Unit Bank
                  </h3>
                  <p className="text-xs text-ink/60 mt-0.5">
                    Registrasi Unit Mitra Baru, RT/RW, atau TPS3R komunal.
                  </p>
                </div>
                <div className="flex items-center gap-1 text-sm font-semibold text-eco mt-3">
                  <span>Ajukan Kemitraan</span>
                  <Icon
                    name="east"
                    size="sm"
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </div>
              </a>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-ink/10 flex flex-wrap items-center justify-between gap-3 text-muted text-xs">
            <div className="flex items-center gap-1.5">
              <Icon name="verified_user" size="sm" className="text-success" />
              <span>Enkripsi Data Bank Sampah Terpadu</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Icon name="scale" size="sm" className="text-gold" />
              <span>Sinkronisasi Timbangan Presisi</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Icon name="school" size="sm" className="text-info" />
              <span>Standar UKK RPL 2026/2027</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
