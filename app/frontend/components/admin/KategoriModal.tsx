"use client";

import { useState } from "react";
import Icon from "@/components/ui/Icon";
import PhotoTile from "@/components/ui/PhotoTile";
import ConfirmDialog from "@/components/ui/ConfirmDialog";
import { FormError, SubmitButton, TextInput } from "@/components/form/fields";
import { ApiError } from "@/lib/api/client";
import {
  createKategori,
  deleteKategori,
  updateKategori,
} from "@/lib/api/kategori";
import { WASTE_TYPE_LABELS } from "@/lib/constants/status";
import type { Kategori } from "@/types/api";

const JENIS_VALUES = ["plastik", "kertas", "logam", "kaca"];

const PHOTO_TYPES = ["image/jpeg", "image/png", "image/webp"];
const PHOTO_MAX = 5 * 1024 * 1024;

export default function KategoriModal({
  row,
  onClose,
  onSaved,
  onDeleted,
}: {
  row: Kategori | null;
  onClose: () => void;
  onSaved: () => void;
  onDeleted: () => void;
}) {
  const creating = row === null;
  const [form, setForm] = useState({
    namaKategori: row?.namaKategori ?? "",
    hargaPerKg: row ? String(row.hargaPerKg) : "",
    poinPerKg: row ? String(row.poinPerKg) : "",
    jenis: row?.jenis ?? "plastik",
  });
  const [foto, setFoto] = useState<File | null>(null);
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function set(field: keyof typeof form) {
    return (
      event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    ) => setForm((prev) => ({ ...prev, [field]: event.target.value }));
  }

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    setError(null);
    const harga = Number(form.hargaPerKg);
    const poin = Number(form.poinPerKg);
    if (
      !form.namaKategori.trim() ||
      form.hargaPerKg.trim() === "" ||
      form.poinPerKg.trim() === "" ||
      !Number.isFinite(harga) ||
      harga < 0 ||
      !Number.isFinite(poin) ||
      poin < 0 ||
      !JENIS_VALUES.includes(form.jenis)
    ) {
      setError("Nama, harga ≥ 0, poin ≥ 0, dan jenis wajib diisi valid.");
      return;
    }
    if (foto && (!PHOTO_TYPES.includes(foto.type) || foto.size > PHOTO_MAX)) {
      setError("Foto harus JPG/PNG/WebP dan maksimal 5MB.");
      return;
    }
    setSaving(true);
    try {
      const input = {
        namaKategori: form.namaKategori.trim(),
        hargaPerKg: harga,
        poinPerKg: poin,
        jenis: form.jenis,
        foto: foto ?? undefined,
      };
      if (creating) await createKategori(input);
      else if (row) await updateKategori(row.id, input);
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
      await deleteKategori(row.id);
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
      aria-label={creating ? "Tambah kategori" : "Edit kategori"}
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-ink/50 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg rounded-2xl bg-card shadow-xl overflow-hidden my-8"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="bg-eco-deep text-white px-6 py-4 flex items-center justify-between">
          <h2 className="font-display font-bold text-lg">
            {creating ? "Tambah Kategori Baru" : "Edit Kategori"}
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
            <div className="flex items-center gap-3 p-3 rounded-xl bg-sand/60">
              <PhotoTile
                foto={row.foto}
                photoStatus={row.photoStatus}
                alt={row.namaKategori}
                icon="recycling"
                className="w-12 h-12 rounded-xl"
              />
              <p className="text-sm font-bold text-ink truncate">
                {row.namaKategori}
              </p>
            </div>
          ) : null}
          <TextInput id="kat-nama" label="Nama Kategori" placeholder="Contoh: Botol Plastik PET" value={form.namaKategori} onChange={set("namaKategori")} />
          <div className="grid grid-cols-2 gap-3">
            <TextInput id="kat-harga" label="Harga Tebus (Rp/Kg)" placeholder="3500" type="number" min="0" inputMode="decimal" value={form.hargaPerKg} onChange={set("hargaPerKg")} />
            <TextInput id="kat-poin" label="Poin Hijau (/Kg)" placeholder="10" type="number" min="0" inputMode="decimal" value={form.poinPerKg} onChange={set("poinPerKg")} />
          </div>
          <div>
            <label htmlFor="kat-jenis" className="block text-sm font-semibold text-ink mb-1.5">
              Jenis Sampah
            </label>
            <select
              id="kat-jenis"
              value={form.jenis}
              onChange={set("jenis")}
              className="w-full px-4 py-3 rounded-xl bg-sand text-sm text-ink outline-none focus:ring-2 focus:ring-eco cursor-pointer"
            >
              {JENIS_VALUES.map((value) => (
                <option key={value} value={value}>
                  {WASTE_TYPE_LABELS[value] ?? value}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="kat-foto" className="block text-sm font-semibold text-ink mb-1.5">
              Foto Kategori {creating ? "(opsional)" : "(kosongkan bila tidak diganti)"} — JPG/PNG/WebP maks 5MB
            </label>
            <input
              id="kat-foto"
              type="file"
              accept="image/jpeg,image/png,image/webp"
              onChange={(event) => setFoto(event.target.files?.[0] ?? null)}
              className="w-full text-sm text-ink/70 file:mr-3 file:px-4 file:py-2 file:rounded-full file:border-0 file:bg-sand file:text-eco file:font-semibold hover:file:bg-peach file:transition-colors"
            />
            {foto ? (
              <p className="text-xs text-ink/60 mt-1.5 truncate">
                Dipilih: {foto.name}
              </p>
            ) : null}
          </div>
          <FormError message={error} />
          <div className="flex flex-wrap items-center gap-2.5 pt-1">
            {!creating ? (
              <button
                type="button"
                onClick={() => setConfirmDelete(true)}
                className="inline-flex items-center gap-1.5 text-sm font-bold text-danger hover:underline mr-auto"
              >
                <Icon name="delete" size="sm" />
                Hapus Kategori
              </button>
            ) : null}
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-full bg-sand hover:bg-peach/50 text-ink text-sm font-bold transition-colors"
            >
              Batal
            </button>
            <div className="flex-1 min-w-44">
              <SubmitButton loading={saving}>
                {creating ? "Tambah Kategori" : "Simpan Perubahan"}
              </SubmitButton>
            </div>
          </div>
        </form>
      </div>

      {confirmDelete && row ? (
        <ConfirmDialog
          title="Hapus kategori ini?"
          message={`${row.namaKategori} akan dihapus dari katalog bank Anda.`}
          confirmLabel="Ya, Hapus"
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
