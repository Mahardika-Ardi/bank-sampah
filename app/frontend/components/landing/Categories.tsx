type Category = {
  name: string;
  type: string;
  desc: string;
  price: string;
  points: string;
};

const categories: Category[] = [
  {
    name: "Botol Plastik PET (Bersih)",
    type: "PLASTIK",
    desc: "Botol air mineral bening tanpa tutup & label, dikempeskan.",
    price: "Rp 3.500/Kg",
    points: "10 Poin/Kg",
  },
  {
    name: "Kardus Box Gelombang",
    type: "KERTAS",
    desc: "Kardus cokelat tebal packing kering, bebas lakban & staples.",
    price: "Rp 2.000/Kg",
    points: "5 Poin/Kg",
  },
  {
    name: "Kaleng Aluminium",
    type: "LOGAM",
    desc: "Kaleng minuman dalam kondisi kering.",
    price: "Rp 12.000/Kg",
    points: "30 Poin/Kg",
  },
  {
    name: "Botol Kaca Bening",
    type: "KACA",
    desc: "Botol sirup atau kecap utuh, dicuci bersih tanpa retakan.",
    price: "Rp 1.500/Kg",
    points: "4 Poin/Kg",
  },
];

export default function Categories() {
  return (
    <section id="kategori" className="w-full bg-sand py-12 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <p className="inline-block text-[11px] font-bold px-3 py-1 rounded-full bg-card text-eco mb-2 shadow-sm">
          BURSA NILAI EKONOMI DAUR ULANG
        </p>
        <h2 className="font-display font-bold text-3xl text-ink tracking-tight">
          Katalog Nilai Sampah Terkini
        </h2>
        <p className="text-sm text-ink/60 mt-1 mb-8">
          Nilai tukar rupiah dan poin per kilogram mengikuti harga serap unit.
          Data live tersedia setelah masuk.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((category) => (
            <article
              key={category.name}
              className="bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow flex flex-col"
            >
              <div className="bg-eco-deep text-white px-4 pt-4 pb-8">
                <span className="text-[11px] font-bold tracking-wider px-2.5 py-1 rounded-full bg-gold text-ink">
                  {category.type}
                </span>
              </div>
              <div className="p-4 flex flex-col flex-1 justify-between -mt-4">
                <div className="bg-card rounded-xl pt-1">
                  <h3 className="font-display font-bold text-ink">
                    {category.name}
                  </h3>
                  <p className="text-xs text-ink/60 mt-1">{category.desc}</p>
                </div>
                <div className="mt-4 bg-sand p-3 rounded-xl flex items-center justify-between">
                  <div>
                    <span className="text-xs text-ink/60 block">
                      Harga Nilai:
                    </span>
                    <span className="font-bold text-sm text-ink">
                      {category.price}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-eco block">Reward:</span>
                    <span className="font-bold text-sm text-gold">
                      {category.points}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
