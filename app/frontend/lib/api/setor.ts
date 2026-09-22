import { api } from "@/lib/api/client";
import type { MySetorRow, SetorDetail, SubmitSetorInput } from "@/types/api";

export function mySetor(bulan?: string) {
  const suffix = bulan ? `?bulan=${encodeURIComponent(bulan)}` : "";
  return api<MySetorRow[]>(`/setor-sampah/my-setor${suffix}`);
}

export function submitSetor(input: SubmitSetorInput) {
  return api<{ id: string; kodeSetor: string }>("/setor-sampah/pengajuan", {
    method: "POST",
    body: {
      tanggal: input.tanggal,
      catatan: input.catatan,
      items: input.items,
    },
  });
}

export function setorDetail(id: string) {
  return api<SetorDetail>(`/setor-sampah/${id}`);
}
