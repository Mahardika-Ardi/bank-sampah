export default function Footer() {
  return (
    <footer className="w-full bg-eco-deep text-white mt-4">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span
            aria-hidden
            className="w-9 h-9 rounded-full bg-gold text-ink flex items-center justify-center font-display font-bold text-lg"
          >
            E
          </span>
          <div className="flex flex-col">
            <span className="font-display font-semibold tracking-tight leading-tight">
              Eco Waste Management
            </span>
            <span className="text-xs text-white/60">
              Bank Sampah Digital &amp; Daur Ulang
            </span>
          </div>
        </div>
        <nav aria-label="Bawah" className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/70">
          <a href="#kategori" className="hover:text-gold transition-colors">
            Kategori Sampah
          </a>
          <a href="#cara-kerja" className="hover:text-gold transition-colors">
            Cara Kerja
          </a>
          <a href="/login" className="hover:text-gold transition-colors">
            Masuk
          </a>
          <a href="/register" className="hover:text-gold transition-colors">
            Daftar
          </a>
        </nav>
        <p className="text-xs text-white/50">
          UKK RPL 2026/2027 — Paket A
        </p>
      </div>
    </footer>
  );
}
