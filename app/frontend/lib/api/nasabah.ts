import { api } from "@/lib/api/client";
import type {
  CreateNasabahInput,
  NasabahRow,
  UpdateNasabahInput,
} from "@/types/api";

export function listNasabah() {
  return api<NasabahRow[]>("/admin/nasabah");
}

export function createNasabah(input: CreateNasabahInput) {
  return api<NasabahRow>("/admin/nasabah", {
    method: "POST",
    body: { ...input },
  });
}

export function updateNasabah(id: string, input: UpdateNasabahInput) {
  return api<NasabahRow>(`/admin/nasabah/${id}`, {
    method: "PUT",
    body: { ...input },
  });
}

export function deleteNasabah(id: string) {
  return api<unknown>(`/admin/nasabah/${id}`, { method: "DELETE" });
}
