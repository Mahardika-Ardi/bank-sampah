import Icon from "@/components/ui/Icon";
import { formatInt, formatKg } from "@/lib/constants/format";

function StatCard({
  title,
  value,
  unit,
  icon,
  iconTone,
}: {
  title: string;
  value: string;
  unit: string;
  icon: string;
  iconTone: string;
}) {
  return (
    <div className="rounded-2xl bg-card p-6 shadow-sm flex flex-col justify-between gap-4">
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-ink/60">{title}</span>
        <span
          className={`w-10 h-10 rounded-full flex items-center justify-center ${iconTone}`}
        >
          <Icon name={icon} />
        </span>
      </div>
      <p className="flex items-baseline gap-1.5">
        <span className="font-display font-extrabold text-4xl text-ink tabular-nums">
          {value}
        </span>
        <span className="font-display font-semibold text-ink/60">{unit}</span>
      </p>
    </div>
  );
}

export default function StatTrio({
  totalKg,
  poinDidapat,
  poinDitukar,
}: {
  totalKg: number;
  poinDidapat: number;
  poinDitukar: number;
}) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <StatCard
        title="Total Sampah Disetor"
        value={formatKg(totalKg)}
        unit="Kg"
        icon="delete_sweep"
        iconTone="bg-eco/10 text-eco"
      />
      <StatCard
        title="Total Poin Diperoleh"
        value={formatInt(poinDidapat)}
        unit="Poin"
        icon="savings"
        iconTone="bg-gold/20 text-eco"
      />
      <StatCard
        title="Poin Ditukarkan"
        value={formatInt(poinDitukar)}
        unit="Poin"
        icon="shopping_bag"
        iconTone="bg-info/15 text-info"
      />
    </section>
  );
}
