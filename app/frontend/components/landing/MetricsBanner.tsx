const metrics = [
  {
    value: "15.400+",
    title: "Kg Sampah Terkelola",
    desc: "Mereduksi emisi metana TPA",
  },
  {
    value: "Rp 145 Juta+",
    title: "Nilai Manfaat Poin",
    desc: "Tercairkan ke sembako & tabungan",
  },
  {
    value: "12+ Unit",
    title: "Bank Sampah Aktif",
    desc: "Tersebar di wilayah kelurahan binaan",
  },
];

export default function MetricsBanner() {
  return (
    <section className="max-w-6xl mx-auto px-6 w-full -mt-12 lg:-mt-14 relative z-20">
      <dl className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-card rounded-2xl p-6 shadow-lg">
        {metrics.map((metric) => (
          <div
            key={metric.title}
            className="flex items-center gap-4 p-4 rounded-xl bg-sand"
          >
            <div className="flex flex-col">
              <dd className="font-display font-extrabold text-3xl text-ink order-first">
                {metric.value}
              </dd>
              <dt className="font-semibold text-eco">{metric.title}</dt>
              <dd className="text-sm text-ink/60">{metric.desc}</dd>
            </div>
          </div>
        ))}
      </dl>
    </section>
  );
}
