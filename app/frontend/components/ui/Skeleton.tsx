export function Skeleton({ className = "" }: { className?: string }) {
  return (
    <div
      aria-label="Memuat"
      className={`rounded-xl bg-sand animate-pulse ${className}`}
    />
  );
}

export function SkeletonCard() {
  return (
    <div className="rounded-2xl bg-card p-6 shadow-sm space-y-3">
      <Skeleton className="h-5 w-1/3" />
      <Skeleton className="h-9 w-2/3" />
      <Skeleton className="h-4 w-full" />
    </div>
  );
}
