const links = [
  { href: '#tentang', label: 'Tentang Kami' },
  { href: '#cara-kerja', label: 'Cara Kerja' },
  { href: '#kategori', label: 'Kategori Sampah' },
  { href: '#kemitraan', label: 'Kemitraan Bank' },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md shadow-[0_1px_8px_rgba(26,43,35,0.06)]">
      <div className="h-20 max-w-6xl mx-auto px-6 flex items-center justify-between gap-6">
        <a href="#" className="flex items-center gap-3 shrink-0">
          <span
            aria-hidden
            className="w-9 h-9 rounded-full bg-eco text-white flex items-center justify-center font-display font-bold text-lg"
          >
            E
          </span>
          <span className="flex flex-col">
            <span className="font-display font-semibold text-ink tracking-tight leading-tight">
              Eco Waste Management
            </span>
            <span className="hidden sm:inline-block text-xs text-ink/60">
              Solusi Sirkular Sampah Daur Ulang
            </span>
          </span>
        </a>
        <nav className="hidden lg:flex items-center gap-8" aria-label="Utama">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink/70 hover:text-eco transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="/login"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2.5 rounded-full text-eco font-semibold text-sm hover:bg-sand transition-colors"
          >
            Masuk
          </a>
          <a
            href="/register"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-eco text-white font-semibold text-sm shadow-sm hover:bg-eco-deep transition-colors"
          >
            Daftar Nasabah
          </a>
          <details className="lg:hidden relative">
            <summary
              aria-label="Buka menu navigasi"
              className="w-10 h-10 rounded-full hover:bg-sand flex items-center justify-center cursor-pointer list-none"
            >
              <span aria-hidden className="text-xl text-ink">
                &#9776;
              </span>
            </summary>
            <nav
              aria-label="Seluler"
              className="absolute right-0 top-12 w-56 rounded-xl bg-card shadow-xl p-2 flex flex-col"
            >
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2.5 rounded-lg text-sm text-ink hover:bg-sand"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/login"
                className="px-4 py-2.5 rounded-lg text-sm font-semibold text-eco hover:bg-sand"
              >
                Masuk
              </a>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
