"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AuthCard from "@/components/auth/AuthCard";
import Icon from "@/components/ui/Icon";
import { FormError, SubmitButton, TextInput } from "@/components/form/fields";
import { ApiError } from "@/lib/api/client";
import { registerNasabah } from "@/lib/api/auth";
import { useSelectedBank } from "@/hooks/bank/useSelectedBank";

export default function RegisterForm() {
  const router = useRouter();
  const { bank, requireBank } = useSelectedBank();
  const [form, setForm] = useState({
    username: "",
    password: "",
    namaNasabah: "",
    alamat: "",
    telp: "",
  });
  const [foto, setFoto] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    requireBank("/register");
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
      !form.namaNasabah.trim() ||
      !form.alamat.trim() ||
      !form.telp.trim()
    ) {
      setError("Lengkapi semua kolom (kata sandi minimal 6 karakter).");
      return;
    }
    if (foto) {
      const validTypes = ["image/jpeg", "image/png", "image/webp"];
      if (!validTypes.includes(foto.type) || foto.size > 5 * 1024 * 1024) {
        setError("Foto harus JPG/PNG/WebP dan maksimal 5MB.");
        return;
      }
    }
    setLoading(true);
    try {
      await registerNasabah({ ...form, foto: foto ?? undefined });
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
      title="Daftar sebagai Nasabah"
      subtitle="Registrasi warga mandiri untuk setor sampah dan tukar poin."
    >
      <div className="mb-4 flex items-center gap-2 p-3 rounded-xl bg-sand text-sm">
        <Icon name="storefront" size="sm" className="text-eco shrink-0" />
        <span className="flex-1 font-semibold text-ink truncate">
          {bank.namaApp}
        </span>
        <a
          href="/pilih-bank?next=/register"
          className="text-xs font-semibold text-eco hover:underline shrink-0"
        >
          Ganti
        </a>
      </div>
      <form onSubmit={(event) => void onSubmit(event)} className="space-y-4">
        <TextInput id="username" label="Username" placeholder="Pilih username unik" autoComplete="username" value={form.username} onChange={set("username")} />
        <TextInput id="password" label="Kata Sandi" placeholder="Minimal 6 karakter" type="password" autoComplete="new-password" value={form.password} onChange={set("password")} />
        <TextInput id="namaNasabah" label="Nama Lengkap" placeholder="Nama lengkap Anda" value={form.namaNasabah} onChange={set("namaNasabah")} />
        <TextInput id="alamat" label="Alamat" placeholder="Alamat domisili" value={form.alamat} onChange={set("alamat")} />
        <TextInput id="telp" label="No. Telepon / WhatsApp" placeholder="08xxxxxxxxxx" inputMode="tel" value={form.telp} onChange={set("telp")} />
        <div>
          <label htmlFor="foto" className="block text-sm font-semibold text-ink mb-1.5">
            Foto Profil (opsional, JPG/PNG/WebP maks 5MB)
          </label>
          <input
            id="foto"
            type="file"
            accept="image/jpeg,image/png,image/webp"
            onChange={(event) => setFoto(event.target.files?.[0] ?? null)}
            className="w-full text-sm text-ink/70 file:mr-3 file:px-4 file:py-2 file:rounded-full file:border-0 file:bg-sand file:text-eco file:font-semibold hover:file:bg-peach file:transition-colors"
          />
        </div>
        <FormError message={error} />
        <SubmitButton loading={loading}>Daftar Nasabah</SubmitButton>
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
