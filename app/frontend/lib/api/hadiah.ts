import { api } from "@/lib/api/client";
import type { Hadiah, TukarResult } from "@/types/api";

export function listHadiah() {
  return api<Hadiah[]>("/hadiah");
}

export function tukarHadiah(hadiahId: string) {
  return api<TukarResult>("/penukaran-poin/tukar", {
    method: "POST",
    body: { hadiahId },
  });
}

export type HadiahInput = {
  namaHadiah: string;
  poinDibutuhkan: number;
  stok: number;
  foto?: File;
};

function hadiahPayload(
  path: string,
  method: "POST" | "PUT",
  input: HadiahInput | Partial<HadiahInput>,
) {
  const { foto, ...fields } = input;
  const present = Object.fromEntries(
    Object.entries(fields).filter(([, value]) => value !== undefined),
  );
  if (!foto) {
    return api<Hadiah>(path, { method, body: { ...present } });
  }
  const formData = new FormData();
  for (const [key, value] of Object.entries(present)) {
    formData.append(key, String(value));
  }
  formData.append("foto", foto);
  return api<Hadiah>(path, { method, formData });
}

export function createHadiah(input: HadiahInput) {
  return hadiahPayload("/hadiah", "POST", input);
}

export function updateHadiah(id: string, input: Partial<HadiahInput>) {
  return hadiahPayload(`/hadiah/${id}`, "PUT", input);
}

export function deleteHadiah(id: string) {
  return api<unknown>(`/hadiah/${id}`, { method: "DELETE" });
}

export function setHadiahStok(id: string, stok: number) {
  return api<Hadiah>(`/hadiah/${id}`, { method: "PUT", body: { stok } });
}
