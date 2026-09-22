import Icon from "@/components/ui/Icon";

export default function ConfirmDialog({
  title,
  message,
  confirmLabel,
  cancelLabel = "Batal",
  loading,
  onConfirm,
  onCancel,
}: {
  title: string;
  message: string;
  confirmLabel: string;
  cancelLabel?: string;
  loading: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-ink/50"
      onClick={onCancel}
    >
      <div
        className="w-full max-w-md rounded-2xl bg-card p-6 shadow-xl"
        onClick={(event) => event.stopPropagation()}
      >
        <h2 className="font-display font-bold text-lg text-ink">{title}</h2>
        <p className="text-sm text-ink/70 mt-1">{message}</p>
        <div className="flex justify-end gap-2.5 mt-5">
          <button
            type="button"
            onClick={onCancel}
            disabled={loading}
            className="px-5 py-2.5 rounded-full bg-sand hover:bg-peach/50 text-ink text-sm font-bold transition-colors disabled:opacity-60"
          >
            {cancelLabel}
          </button>
          <button
            type="button"
            onClick={onConfirm}
            disabled={loading}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold hover:bg-peach text-ink text-sm font-bold transition-colors disabled:opacity-60"
          >
            <Icon name="redeem" size="sm" />
            {loading ? "Memproses…" : confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
