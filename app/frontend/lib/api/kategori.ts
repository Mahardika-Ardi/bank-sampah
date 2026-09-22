import { api } from "@/lib/api/client";
import type { Kategori } from "@/types/api";

export function listKategori() {
  return api<Kategori[]>("/kategori-sampah");
}

export type KategoriInput = {
  namaKategori: string;
  hargaPerKg: number;
  poinPerKg: number;
  jenis: string;
  foto?: File;
};

function kategoriPayload(path: string, method: "POST" | "PUT", input: KategoriInput) {
  const { foto, ...fields } = input;
  if (!foto) {
    return api<Kategori>(path, { method, body: { ...fields } });
  }
  const formData = new FormData();
  for (const [key, value] of Object.entries(fields)) {
    formData.append(key, String(value));
  }
  formData.append("foto", foto);
  return api<Kategori>(path, { method, formData });
}

export function createKategori(input: KategoriInput) {
  return kategoriPayload("/kategori-sampah", "POST", input);
}

export function updateKategori(id: string, input: Partial<KategoriInput>) {
  const { foto, ...fields } = input;
  const present = Object.fromEntries(
    Object.entries(fields).filter(([, value]) => value !== undefined),
  );
  if (!foto) {
    return api<Kategori>(`/kategori-sampah/${id}`, {
      method: "PUT",
      body: { ...present },
    });
  }
  const formData = new FormData();
  for (const [key, value] of Object.entries(present)) {
    formData.append(key, String(value));
  }
  formData.append("foto", foto);
  return api<Kategori>(`/kategori-sampah/${id}`, { method: "PUT", formData });
}

export function deleteKategori(id: string) {
  return api<unknown>(`/kategori-sampah/${id}`, { method: "DELETE" });
}
