"use client";

import { useState } from "react";
import Icon from "@/components/ui/Icon";
import PhotoTile from "@/components/ui/PhotoTile";
import ConfirmDialog from "@/components/ui/ConfirmDialog";
import { FormError, SubmitButton, TextInput } from "@/components/form/fields";
import { ApiError } from "@/lib/api/client";
import { createNasabah, deleteNasabah, updateNasabah } from "@/lib/api/nasabah";
import { formatDate, formatInt } from "@/lib/constants/format";
import type { NasabahRow } from "@/types/api";

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <p className="text-sm">
      <span className="block text-xs text-ink/50">{label}</span>
      <strong className="text-ink">{value}</strong>
    </p>
  );
}

export default function NasabahModal({
  row,
  onClose,
  onSaved,
  onDeleted,
}: {
  row: NasabahRow | null;
  onClose: () => void;
  onSaved: () => void;
  onDeleted: () => void;
}) {
  const creating = row === null;
  const [form, setForm] = useState({
    username: "",
    password: "",
    nama: row?.namaNasabah ?? "",
    telp: row?.telp ?? "",
    alamat: row?.alamat ?? "",
    tanggalLahir: row?.tanggalLahir?.slice(0, 10) ?? "",
  });
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function set(field: keyof typeof form) {
    return (event: React.ChangeEvent<HTMLInputElement>) =>
      setForm((prev) => ({ ...prev, [field]: event.target.value }));
  }

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    setError(null);
    if (
      !form.nama.trim() ||
      !form.telp.trim() ||
      !form.alamat.trim() ||
      (creating && (!form.username.trim() || form.password.length < 6))
    ) {
      setError(
        creating
          ? "Lengkapi semua kolom (kata sandi minimal 6 karakter)."
          : "Nama, telepon, dan alamat wajib diisi.",
      );
      return;
    }
    setSaving(true);
    try {
      if (creating) {
        await createNasabah({
          username: form.username.trim(),
          password: form.password,
          namaNasabah: form.nama.trim(),
          alamat: form.alamat.trim(),
          telp: form.telp.trim(),
        });
      } else if (row) {
        await updateNasabah(row.id, {
          namaLengkap: form.nama.trim(),
          noTelepon: form.telp.trim(),
          alamat: form.alamat.trim(),
          tanggalLahir: form.tanggalLahir || undefined,
        });
      }
      onSaved();
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "Penyimpanan gagal. Coba lagi.");
    } finally {
      setSaving(false);
    }
  }

  async function confirmRemove() {
    if (!row || deleting) return;
    setDeleting(true);
    setError(null);
    try {
      await deleteNasabah(row.id);
      onDeleted();
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "Penghapusan gagal. Coba lagi.");
    } finally {
      setDeleting(false);
      setConfirmDelete(false);
    }
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={creating ? "Tambah nasabah" : "Detail nasabah"}
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-ink/50 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg rounded-2xl bg-card shadow-xl overflow-hidden my-8"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="bg-eco-deep text-white px-6 py-4 flex items-center justify-between">
          <h2 className="font-display font-bold text-lg">
            {creating ? "Tambah Nasabah Baru" : `Detail & Edit Nasabah`}
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup"
            className="p-1.5 rounded-full hover:bg-white/10"
          >
            <Icon name="close" size="sm" />
          </button>
        </div>

        <form
          onSubmit={(event) => void onSubmit(event)}
          className="p-6 space-y-4 max-h-[70vh] overflow-y-auto"
        >
          {!creating && row ? (
            <div className="flex items-center gap-3 p-4 rounded-xl bg-sand/60">
              <PhotoTile
                foto={row.foto}
                photoStatus={row.photoStatus}
                alt={row.namaNasabah}
                icon="person"
                className="w-14 h-14 rounded-full"
              />
              <div className="min-w-0 flex-1">
                <p className="font-display font-bold text-ink truncate">
                  {row.namaNasabah}
                </p>
                <p className="text-xs text-ink/60">
                  @{row.user?.username ?? "-"}
                </p>
              </div>
              <p className="text-right shrink-0">
                <span className="block text-[11px] text-ink/50">
                  Saldo Poin
                </span>
                <strong className="font-display font-extrabold text-eco tabular-nums">
                  {formatInt(row.saldoPoin)}
                </strong>
              </p>
            </div>
          ) : null}

          {creating ? (
            <>
              <TextInput id="nb-username" label="Username" placeholder="Username unik untuk login" autoComplete="username" value={form.username} onChange={set("username")} />
              <TextInput id="nb-password" label="Kata Sandi" placeholder="Minimal 6 karakter" type="password" autoComplete="new-password" value={form.password} onChange={set("password")} />
            </>
          ) : null}
          <TextInput id="nb-nama" label="Nama Lengkap" placeholder="Nama lengkap nasabah" value={form.nama} onChange={set("nama")} />
          <TextInput id="nb-telp" label="Nomor WhatsApp / Telepon" placeholder="08xxxxxxxxxx" inputMode="tel" value={form.telp} onChange={set("telp")} />
          <TextInput id="nb-alamat" label="Alamat Domisili" placeholder="Alamat domisili" value={form.alamat} onChange={set("alamat")} />
          {!creating ? (
            <TextInput id="nb-lahir" label="Tanggal Lahir (Opsional)" type="date" value={form.tanggalLahir} onChange={set("tanggalLahir")} />
          ) : null}

          {!creating && row ? (
            <div className="grid grid-cols-2 gap-3 text-sm">
              <DetailRow label="Tanggal Lahir" value={formatDate(row.tanggalLahir) || "-"} />
              <DetailRow label="Alamat" value={row.alamat} />
            </div>
          ) : null}

          <FormError message={error} />
          <div className="flex flex-wrap items-center gap-2.5 pt-1">
            {!creating ? (
              <button
                type="button"
                onClick={() => setConfirmDelete(true)}
                className="inline-flex items-center gap-1.5 text-sm font-bold text-danger hover:underline mr-auto"
              >
                <Icon name="block" size="sm" />
                Nonaktifkan Akses Login
              </button>
            ) : null}
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-full bg-sand hover:bg-peach/50 text-ink text-sm font-bold transition-colors"
            >
              Tutup / Batal
            </button>
            <div className="flex-1 min-w-44">
              <SubmitButton loading={saving}>
                {creating ? "Daftarkan Nasabah" : "Simpan Perubahan"}
              </SubmitButton>
            </div>
          </div>
        </form>
      </div>

      {confirmDelete && row ? (
        <ConfirmDialog
          title="Nonaktifkan akses login?"
          message={`${row.namaNasabah} (@${row.user?.username ?? "-"}) tidak akan bisa masuk lagi. Data riwayat tetap tersimpan.`}
          confirmLabel="Ya, Nonaktifkan"
          loading={deleting}
          onConfirm={() => void confirmRemove()}
          onCancel={() => {
            if (!deleting) setConfirmDelete(false);
          }}
        />
      ) : null}
    </div>
  );
}
