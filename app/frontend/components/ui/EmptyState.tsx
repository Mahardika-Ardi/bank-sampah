import Icon from "@/components/ui/Icon";

export default function EmptyState({
  icon,
  title,
  message,
  action,
}: {
  icon: string;
  title: string;
  message: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center text-center py-10 px-6">
      <span className="w-12 h-12 rounded-full bg-sand text-muted flex items-center justify-center mb-3">
        <Icon name={icon} />
      </span>
      <p className="font-display font-bold text-ink">{title}</p>
      <p className="text-sm text-ink/60 mt-1 max-w-xs">{message}</p>
      {action ? <div className="mt-4">{action}</div> : null}
    </div>
  );
}
