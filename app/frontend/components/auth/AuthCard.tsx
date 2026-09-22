export default function AuthCard({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <div className="w-full max-w-md">
      <div className="bg-card rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-eco px-6 py-5">
          <p className="text-gold text-[11px] font-bold tracking-wider">
            ECO WASTE MANAGEMENT
          </p>
          <h1 className="font-display font-bold text-xl text-white mt-1">
            {title}
          </h1>
          <p className="text-sm text-white/70 mt-0.5">{subtitle}</p>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}
