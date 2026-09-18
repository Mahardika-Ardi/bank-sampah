export type DateRange = { gte: Date; lt: Date };

/** Month window for a YYYY-MM string (UTC). */
export function monthRange(bulan: string): DateRange {
  const gte = new Date(`${bulan}-01T00:00:00.000Z`);
  const next = new Date(gte);
  next.setUTCMonth(next.getUTCMonth() + 1);
  return { gte, lt: next };
}

/** Week window (Sunday–Saturday) containing the anchor ISO date (UTC). */
export function weekRange(tanggal: string): DateRange {
  const anchor = new Date(tanggal);
  const start = new Date(
    Date.UTC(
      anchor.getUTCFullYear(),
      anchor.getUTCMonth(),
      anchor.getUTCDate(),
    ),
  );
  start.setUTCDate(start.getUTCDate() - start.getUTCDay());
  const end = new Date(start);
  end.setUTCDate(end.getUTCDate() + 7);
  return { gte: start, lt: end };
}

/** Calendar-year window (UTC). */
export function yearRange(tahun: number): DateRange {
  return {
    gte: new Date(Date.UTC(tahun, 0, 1)),
    lt: new Date(Date.UTC(tahun + 1, 0, 1)),
  };
}

/** ISO-like week number within its year (weeks start Sunday). */
export function weekNumber(tanggal: string): { year: number; week: number } {
  const anchor = new Date(tanggal);
  const year = anchor.getUTCFullYear();
  const { gte: start } = weekRange(tanggal);
  const jan1 = new Date(Date.UTC(year, 0, 1));
  const jan1Sunday = new Date(jan1);
  jan1Sunday.setUTCDate(jan1Sunday.getUTCDate() - jan1.getUTCDay());
  const week = Math.floor(
    (start.getTime() - jan1Sunday.getTime()) / (7 * 24 * 3600 * 1000),
  ) + 1;
  return { year, week };
}
