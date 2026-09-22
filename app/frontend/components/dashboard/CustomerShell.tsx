import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "@/components/ui/Icon";
import PhotoTile from "@/components/ui/PhotoTile";

export type ShellMenuItem = {
  href: string;
  label: string;
  icon: string;
};

export const NASABAH_MENU: ShellMenuItem[] = [
  { href: "/dashboard", label: "Beranda", icon: "grid_view" },
  { href: "/setor/baru", label: "Setor Baru", icon: "add_circle" },
  { href: "/setor", label: "Riwayat Setor", icon: "receipt_long" },
  { href: "/kategori", label: "Kategori Sampah", icon: "recycling" },
  { href: "/hadiah", label: "Katalog Hadiah", icon: "card_giftcard" },
  { href: "/tukar", label: "Riwayat Penukaran", icon: "swap_horiz" },
];

export default function CustomerShell({
  bankName,
  displayName,
  avatarFoto = null,
  menu,
  onLogout,
  children,
}: {
  bankName: string;
  displayName: string;
  avatarFoto?: string | null;
  menu: ShellMenuItem[];
  onLogout: () => void;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const initial = displayName.trim().charAt(0).toUpperCase() || "?";

  return (
    <div className="min-h-screen flex bg-sand">
      <aside className="hidden lg:flex w-64 shrink-0 flex-col bg-eco-deep text-white p-5 no-print">
        <div className="flex items-center gap-2.5 px-1 mb-6">
          <span className="w-10 h-10 rounded-xl bg-gold/20 text-gold flex items-center justify-center shrink-0">
            <Icon name="recycling" filled />
          </span>
          <span className="font-display font-bold leading-tight">
            {bankName}
            <span className="block text-[11px] font-body font-normal text-white/60">
              Eco Management
            </span>
          </span>
        </div>
        <p className="px-3 mb-2 text-[11px] font-bold uppercase tracking-wider text-white/50">
          Menu Nasabah
        </p>
        <nav className="flex flex-col gap-1 flex-1">
          {menu.map((item) => {
            const active =
              pathname === item.href ||
              (item.href !== "/dashboard" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                  active
                    ? "bg-white/15 text-white"
                    : "text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                <Icon name={item.icon} size="sm" />
                {item.label}
              </Link>
            );
          })}
        </nav>
        <button
          type="button"
          onClick={onLogout}
          className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-semibold text-white/70 hover:bg-white/10 hover:text-white transition-colors"
        >
          <Icon name="logout" size="sm" />
          Keluar
        </button>
      </aside>

      <div className="flex-1 min-w-0 flex flex-col">
        <header className="flex items-center justify-between gap-3 px-6 py-4 no-print">
          <p className="font-display font-bold text-ink truncate">
            {bankName}
          </p>
          <div className="flex items-center gap-2.5">
            <div className="text-right leading-tight">
              <p className="text-sm font-bold text-ink truncate max-w-32">
                {displayName}
              </p>
              <p className="text-xs text-success font-semibold">
                Nasabah Aktif
              </p>
            </div>
            {avatarFoto ? (
              <PhotoTile
                foto={avatarFoto}
                alt={displayName}
                icon="person"
                className="w-9 h-9 rounded-full"
              />
            ) : (
              <span className="w-9 h-9 rounded-full bg-eco text-white flex items-center justify-center font-display font-bold shrink-0">
                {initial}
              </span>
            )}
            <button
              type="button"
              onClick={onLogout}
              aria-label="Keluar"
              className="lg:hidden p-2 rounded-full text-ink/60 hover:bg-ink/5"
            >
              <Icon name="logout" size="sm" />
            </button>
          </div>
        </header>
        <main className="flex-1 w-full px-6 pb-10 max-w-6xl mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
