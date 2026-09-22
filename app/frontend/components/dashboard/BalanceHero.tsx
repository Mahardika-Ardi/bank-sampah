import Link from "next/link";
import Icon from "@/components/ui/Icon";
import { formatInt } from "@/lib/constants/format";

export default function BalanceHero({ saldo }: { saldo: number }) {
  return (
    <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gold via-peach to-gold p-6 md:p-8 text-ink shadow-lg">
      <div className="absolute -right-16 -top-16 w-72 h-72 rounded-full bg-white/20 blur-2xl pointer-events-none" />
      <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div className="space-y-2">
          <p className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-eco-deep/15 text-[11px] font-bold uppercase tracking-wider">
            <Icon name="eco" size="xs" />
            Saldo Poin Hijau Aktif
          </p>
          <p className="flex items-baseline gap-2">
            <span className="font-display font-extrabold text-5xl tracking-tight tabular-nums">
              {formatInt(saldo)}
            </span>
            <span className="font-display font-bold text-xl">Poin</span>
          </p>
          <p className="text-sm text-ink/80">
            Poin dapat ditukarkan kebutuhan pokok dapur, voucher, atau hadiah
            menarik.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row w-full lg:w-auto gap-2.5">
          <Link
            href="/setor/baru"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-eco hover:bg-eco-deep text-white font-bold text-sm shadow-md transition-colors"
          >
            <Icon name="add_circle" size="sm" />
            Setor Sampah Sekarang
          </Link>
          <Link
            href="/hadiah"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/70 hover:bg-white text-ink font-bold text-sm shadow-sm transition-colors"
          >
            <Icon name="redeem" size="sm" />
            Tukar Hadiah
          </Link>
        </div>
      </div>
    </section>
  );
}
