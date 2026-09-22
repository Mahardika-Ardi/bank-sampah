"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AuthCard from "@/components/auth/AuthCard";
import Icon from "@/components/ui/Icon";
import { FormError, SubmitButton, TextInput } from "@/components/form/fields";
import { ApiError } from "@/lib/api/client";
import { registerAdmin } from "@/lib/api/auth";
import { useSelectedBank } from "@/hooks/bank/useSelectedBank";

export default function AdminRegisterForm() {
  const router = useRouter();
  const { bank, requireBank } = useSelectedBank();
  const [form, setForm] = useState({
    username: "",
    password: "",
    namaUnit: "",
    namaPengelola: "",
    telp: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    requireBank("/admin/register");
  }, [requireBank]);

  function set(field: keyof typeof form) {
    return (event: React.ChangeEvent<HTMLInputElement>) =>
      setForm((prev) => ({ ...prev, [field]: event.target.value }));
  }

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    setError(null);
    if (
      !form.username.trim() ||
      form.password.length < 6 ||
      !form.namaUnit.trim() ||
      !form.namaPengelola.trim() ||
      !form.telp.trim()
    ) {
      setError("Lengkapi semua kolom (kata sandi minimal 6 karakter).");
      return;
    }
    setLoading(true);
    try {
      await registerAdmin({ ...form });
      router.replace("/login?registered=1");
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "Pendaftaran gagal. Coba lagi.");
    } finally {
      setLoading(false);
    }
  }

  if (!bank) return null;

  return (
    <AuthCard
      title="Pendaftaran Unit Bank"
      subtitle="Registrasi unit mitra baru, RT/RW, atau TPS3R komunal."
    >
      <div className="mb-4 flex items-center gap-2 p-3 rounded-xl bg-sand text-sm">
        <Icon name="storefront" size="sm" className="text-eco shrink-0" />
        <span className="flex-1 font-semibold text-ink truncate">
          {bank.namaApp}
        </span>
        <a
          href="/pilih-bank?next=/admin/register"
          className="text-xs font-semibold text-eco hover:underline shrink-0"
        >
          Ganti
        </a>
      </div>
      <form onSubmit={(event) => void onSubmit(event)} className="space-y-4">
        <TextInput id="username" label="Username" placeholder="Pilih username unik unit" autoComplete="username" value={form.username} onChange={set("username")} />
        <TextInput id="password" label="Kata Sandi" placeholder="Minimal 6 karakter" type="password" autoComplete="new-password" value={form.password} onChange={set("password")} />
        <TextInput id="namaUnit" label="Nama Unit" placeholder="Nama bank sampah / unit" value={form.namaUnit} onChange={set("namaUnit")} />
        <TextInput id="namaPengelola" label="Nama Pengelola" placeholder="Nama penanggung jawab" value={form.namaPengelola} onChange={set("namaPengelola")} />
        <TextInput id="telp" label="No. Telepon Operasional" placeholder="08xxxxxxxxxx" inputMode="tel" value={form.telp} onChange={set("telp")} />
        <FormError message={error} />
        <SubmitButton loading={loading}>Daftarkan Unit</SubmitButton>
      </form>
      <p className="mt-6 pt-4 border-t border-ink/10 text-sm text-center">
        Sudah punya akun?{" "}
        <a href="/login" className="font-semibold text-eco hover:underline">
          Masuk
        </a>
      </p>
    </AuthCard>
  );
}
