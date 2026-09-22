export default function Hero() {
  return (
    <section className="relative w-full bg-eco-deep text-white overflow-hidden pt-12 pb-24 lg:pt-35 lg:pb-60">
      <div
        aria-hidden
        className="absolute inset-0 opacity-15 pointer-events-none"
      >
        <svg
          className="w-full h-full"
          fill="none"
          viewBox="0 0 1000 600"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="900" cy="120" r="320" fill="#004225" />
          <circle cx="150" cy="500" r="260" fill="#FFB000" />
          <path
            d="M0 450 Q 300 320, 650 480 T 1300 400"
            stroke="#FFFF"
            strokeDasharray="8 8"
            strokeWidth="1.5"
          />
        </svg>
      </div>
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 flex flex-col items-start gap-5">
            <h1 className="font-display font-extrabold tracking-tight text-4xl lg:text-5xl leading-tight max-w-2xl">
              Ubah Sampah Jadi Berkah &amp; Poin Berharga
            </h1>
            <p className="text-base lg:text-lg text-white/80 max-w-xl leading-relaxed">
              Platform Bank Sampah Digital terintegrasi untuk masyarakat peduli
              lingkungan dan pengelola unit daur ulang modern. Catat timbangan
              riil, raih poin, dan wujudkan pemukiman bebas residu.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="/register"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gold text-ink font-bold text-sm shadow-md hover:brightness-95 transition-all"
              >
                Mulai Setor Sampah
              </a>
              <a
                href="#cara-kerja"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-eco text-white font-semibold text-sm shadow-sm hover:bg-ink transition-colors"
              >
                Pelajari Cara Kerja
              </a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="bg-card text-ink rounded-2xl p-6 shadow-xl">
              <div className="flex items-center justify-between pb-4">
                <p className="font-semibold text-sm flex items-center gap-2">
                  Buku Kas Lingkungan Aktif
                </p>
                <span className="text-[11px] font-bold tracking-wider px-2 py-0.5 rounded-full bg-sand text-ink/70">
                  CONTOH
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3 bg-sand p-4 rounded-xl">
                <div className="flex flex-col">
                  <span className="text-xs text-ink/60">
                    Efisiensi Pemilahan
                  </span>
                  <span className="font-display font-extrabold text-3xl text-eco">
                    94.8%
                  </span>
                  <span className="text-xs font-bold text-success">
                    +12.4% bln ini
                  </span>
                </div>
                <div className="flex flex-col justify-end">
                  <div className="w-full bg-ink/10 rounded-full h-2.5 overflow-hidden mb-1.5">
                    <div
                      className="bg-eco h-2.5 rounded-full"
                      style={{ width: "82%" }}
                    />
                  </div>
                  <span className="text-xs text-ink/60">
                    Target Kuartal: 82/100 Ton
                  </span>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-3 bg-eco-deep text-white p-4 rounded-xl">
                <span
                  aria-hidden
                  className="w-12 h-12 rounded-full bg-gold text-ink flex items-center justify-center shrink-0 font-display font-bold text-xl"
                >
                  P
                </span>
                <div className="flex flex-col">
                  <span className="text-[11px] font-bold tracking-wider text-peach">
                    BONUS DAFTAR
                  </span>
                  <span className="font-semibold text-sm">
                    +50 Poin Awal Nasabah
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
