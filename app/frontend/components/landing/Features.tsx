const features = [
  {
    step: "Langkah 01",
    title: "Setor Sampah Praktis",
    desc: "Catat jenis sampah (plastik, kertas, logam, kaca), pantau estimasi poin real-time, dan pilih jadwal setor mandiri atau penjemputan berkala.",
    foot: "Tipe: 4 Material Utama",
  },
  {
    step: "Langkah 02",
    title: "Akumulasi Saldo Poin Emas",
    desc: "Dapatkan poin bernilai riil untuk setiap kilogram sampah daur ulang yang terverifikasi timbangan digital operator. Riwayat transaksi transparan tanpa potongan.",
    foot: "Audit: Ledger Digital",
  },
  {
    step: "Langkah 03",
    title: "Katalog Sembako & Kas",
    desc: "Tukarkan poin hijau Anda secara instan dengan sembako harian, token listrik, tabungan rupiah, atau donasi lingkungan.",
    foot: "Tukar: Instan di Unit",
  },
];

export default function Features() {
  return (
    <section className="max-w-6xl mx-auto px-6 w-full py-12">
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-8">
        <p className="text-xs font-bold px-3 py-1 rounded-full bg-sand text-eco uppercase tracking-wider mb-2">
          Kemudahan Digital
        </p>
        <h2 className="font-display font-bold text-3xl text-ink tracking-tight">
          Fitur Ekosistem Bank Sampah Cerdas
        </h2>
        <p className="text-sm text-ink/60 mt-2">
          Dirancang khusus untuk memenuhi standar UKK Rekayasa Perangkat Lunak:
          akurat, transparan, dan memberdayakan warga.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature) => (
          <article
            key={feature.title}
            className="bg-card rounded-2xl p-6 shadow-md flex flex-col justify-between hover:shadow-lg transition-shadow"
          >
            <div>
              <p className="text-[11px] font-bold text-eco uppercase tracking-wider">
                {feature.step}
              </p>
              <h3 className="font-display font-semibold text-xl text-ink mt-1 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-ink/60 leading-relaxed">
                {feature.desc}
              </p>
            </div>
            <p className="mt-6 pt-4 text-sm text-ink font-semibold">
              {feature.foot}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
