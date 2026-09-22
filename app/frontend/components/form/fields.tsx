export function TextInput(props: React.InputHTMLAttributes<HTMLInputElement> & { label: string; error?: string }) {
  const { label, error, id, ...rest } = props;
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-semibold text-ink mb-1.5"
      >
        {label}
      </label>
      <input
        id={id}
        {...rest}
        className="w-full px-4 py-3 rounded-xl bg-sand text-sm text-ink placeholder:text-ink/40 outline-none focus:ring-2 focus:ring-eco transition-all"
      />
      {error ? <p className="text-xs text-danger mt-1">{error}</p> : null}
    </div>
  );
}

export function SubmitButton({
  loading,
  children,
}: {
  loading: boolean;
  children: React.ReactNode;
}) {
  return (
    <button
      type="submit"
      disabled={loading}
      className="w-full py-3.5 px-6 rounded-full bg-eco hover:bg-eco-deep disabled:opacity-60 text-white font-bold text-sm transition-colors"
    >
      {loading ? "Memproses..." : children}
    </button>
  );
}

export function FormError({ message }: { message: string | null }) {
  if (!message) return null;
  return (
    <p role="alert" className="p-3 rounded-xl bg-danger/10 text-danger text-sm font-medium">
      {message}
    </p>
  );
}
