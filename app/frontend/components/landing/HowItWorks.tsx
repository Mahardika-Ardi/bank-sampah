const steps = [
  {
    no: "1",
    title: "Pilah Sampah di Rumah",
    desc: "Pisahkan sampah anorganik bersih sesuai wadah: botol plastik, kertas/karton, kaleng, atau kaca.",
    tag: "Mandiri / RT",
  },
  {
    no: "2",
    title: "Ajukan Setoran via Web",
    desc: "Input perkiraan kilogram dan jenis sampah melalui portal nasabah, lalu terima kode setoran digital.",
    tag: "Kode STR-XXXX",
  },
  {
    no: "3",
    title: "Verifikasi & Timbang",
    desc: "Petugas menimbang ulang sampah Anda dan mengonfirmasi berat riil beserta poin yang diterbitkan.",
    tag: "Terverifikasi",
  },
  {
    no: "4",
    title: "Tukar Poin Hadiah",
    desc: "Tukarkan saldo poin dengan sembako, voucher, atau tabungan, lalu cetak nota sebagai bukti.",
    tag: "Kode TKR-XXXX",
  },
];

export default function HowItWorks() {
  return (
    <section id="cara-kerja" className="max-w-6xl mx-auto px-6 w-full py-12 scroll-mt-20">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <p className="text-xs font-bold px-3 py-1 rounded-full bg-sand text-eco uppercase tracking-wider mb-2">
          Alur Operasional
        </p>
        <h2 className="font-display font-bold text-3xl text-ink tracking-tight">
          4 Langkah Mudah Menjadi Nasabah Berdaya
        </h2>
        <p className="text-sm text-ink/60 mt-2">
          Sederhana, higienis, dan sepenuhnya terdata di aplikasi tanpa ribet
          membawa buku tabungan fisik.
        </p>
      </div>
      <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 list-none p-0 m-0">
        {steps.map((step) => (
          <li
            key={step.no}
            className="bg-card p-6 rounded-2xl shadow-sm flex flex-col"
          >
            <span className="w-10 h-10 rounded-full bg-eco text-white font-bold flex items-center justify-center mb-4">
              {step.no}
            </span>
            <h3 className="font-display font-bold text-ink mb-2">
              {step.title}
            </h3>
            <p className="text-sm text-ink/60 leading-relaxed">{step.desc}</p>
            <span className="mt-4 inline-block text-[11px] font-bold text-success bg-sand px-2 py-0.5 rounded w-fit">
              {step.tag}
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}
