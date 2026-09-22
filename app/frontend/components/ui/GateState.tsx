import Icon from "@/components/ui/Icon";

/**
 * Full-page gate states for shell layouts: centered card on the
 * app background. Used when the profile request fails (never blank).
 */
export function GateError({
  message,
  onRetry,
}: {
  message: string;
  onRetry: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-sand">
      <div className="w-full max-w-md rounded-2xl bg-card p-6 shadow-sm text-center">
        <span className="inline-flex w-12 h-12 rounded-full bg-danger/10 text-danger items-center justify-center mb-3">
          <Icon name="cloud_off" />
        </span>
        <p className="font-display font-bold text-ink">Koneksi Terputus</p>
        <p className="text-sm text-ink/60 mt-1">{message}</p>
        <button
          type="button"
          onClick={onRetry}
          className="mt-4 px-5 py-2.5 rounded-full bg-eco hover:bg-eco-deep text-white text-sm font-bold transition-colors"
        >
          Coba Lagi
        </button>
      </div>
    </div>
  );
}
