export const STATUS_LABELS: Record<string, string> = {
  menunggu_konfirmasi: "Menunggu Konfirmasi",
  diverifikasi: "Diverifikasi",
  selesai: "Selesai",
  ditolak: "Ditolak",
  diproses: "Diproses",
  processing: "Diproses",
  ready: "Siap",
  failed: "Gagal",
};

export const ROLE_LABELS: Record<string, string> = {
  nasabah: "Nasabah",
  admin_bank: "Admin Bank",
};

export const WASTE_TYPE_LABELS: Record<string, string> = {
  plastik: "Plastik",
  kertas: "Kertas",
  logam: "Logam",
  kaca: "Kaca",
};

export function statusLabel(status: string): string {
  return STATUS_LABELS[status] ?? status;
}

type StatusTone = "success" | "danger" | "info" | "muted";

const STATUS_TONES: Record<string, StatusTone> = {
  selesai: "success",
  ditolak: "danger",
  diverifikasi: "info",
  diproses: "info",
  processing: "info",
  menunggu_konfirmasi: "muted",
  ready: "success",
  failed: "danger",
};

const TONE_CLASSES: Record<StatusTone, string> = {
  success: "bg-success/15 text-success",
  danger: "bg-danger/15 text-danger",
  info: "bg-info/15 text-info",
  muted: "bg-muted/20 text-muted",
};

/** Badge pill classes for a wire status value (DESIGN.md badge specs). */
export function statusTone(status: string): string {
  return TONE_CLASSES[STATUS_TONES[status] ?? "muted"];
}
