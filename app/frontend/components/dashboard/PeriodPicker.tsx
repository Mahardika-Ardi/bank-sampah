import Icon from "@/components/ui/Icon";
import { formatMonth } from "@/lib/constants/format";

export default function PeriodPicker({
  bulan,
  onChange,
}: {
  bulan: string;
  onChange: (bulan: string) => void;
}) {
  return (
    <label className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-card shadow-sm text-sm font-bold text-ink cursor-pointer">
      <Icon name="calendar_today" size="sm" className="text-eco" />
      <span className="hidden sm:inline">Periode {formatMonth(bulan)}</span>
      <input
        type="month"
        aria-label="Pilih periode bulan"
        value={bulan}
        onChange={(event) => {
          if (event.target.value) onChange(event.target.value);
        }}
        className="sr-only"
      />
    </label>
  );
}
