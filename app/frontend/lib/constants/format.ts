const idInteger = new Intl.NumberFormat("id-ID", {
  maximumFractionDigits: 0,
});

const idDecimal = new Intl.NumberFormat("id-ID", {
  minimumFractionDigits: 0,
  maximumFractionDigits: 3,
});

const idRupiah = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

/** Integer with id-ID grouping: 1450 -> "1.450". */
export function formatInt(value: number): string {
  return idInteger.format(value);
}

/** Up to 3 decimals, trailing zeros trimmed: 42.5 -> "42,5". */
export function formatKg(value: number): string {
  return idDecimal.format(value);
}

/** Rupiah without decimals: 145000 -> "Rp 145.000". */
export function formatRp(value: number): string {
  return idRupiah.format(value);
}

const MONTHS_ID = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "Mei",
  "Jun",
  "Jul",
  "Agu",
  "Sep",
  "Okt",
  "Nov",
  "Des",
];

/** "2026-08-26T09:35:51.874Z" -> "26 Agu 2026, 09:35". */
export function formatDateTime(iso: string): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return iso;
  const day = String(date.getDate()).padStart(2, "0");
  const month = MONTHS_ID[date.getMonth()];
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `${day} ${month} ${date.getFullYear()}, ${hours}:${minutes}`;
}

/** "2026-08" -> "Agustus 2026". */
export function formatMonth(bulan: string): string {
  const [year, month] = bulan.split("-").map(Number);
  if (!year || !month || month < 1 || month > 12) return bulan;
  const names = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  return `${names[month - 1]} ${year}`;
}

/** "2000-01-15" (or ISO) -> "15 Jan 2000". Empty string for invalid/null. */
export function formatDate(iso: string | null): string {
  if (!iso) return "";
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "";
  const day = String(date.getDate()).padStart(2, "0");
  return `${day} ${MONTHS_ID[date.getMonth()]} ${date.getFullYear()}`;
}

/** Current month as "YYYY-MM" for month inputs. */
export function currentMonth(): string {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
}

/** Hour-based Indonesian greeting: "Selamat Pagi". */
export function greeting(): string {
  const hour = new Date().getHours();
  if (hour < 11) return "Selamat Pagi";
  if (hour < 15) return "Selamat Siang";
  if (hour < 19) return "Selamat Sore";
  return "Selamat Malam";
}
