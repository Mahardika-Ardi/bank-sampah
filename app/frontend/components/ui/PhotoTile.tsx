import Icon from "@/components/ui/Icon";

type PhotoStatus = "ready" | "processing" | "failed";

/**
 * Photo tile with lifecycle states (frontend-design §flow 4):
 * processing -> shimmer, failed -> retry hint, missing -> icon tile.
 * Never renders a broken <img>.
 */
export default function PhotoTile({
  foto,
  photoStatus = "ready",
  alt,
  icon = "image",
  className = "w-14 h-14 rounded-xl",
}: {
  foto: string | null;
  photoStatus?: PhotoStatus | string;
  alt: string;
  icon?: string;
  className?: string;
}) {
  if (photoStatus === "processing") {
    return (
      <div
        aria-label="Foto sedang diproses"
        className={`${className} bg-sand animate-pulse shrink-0`}
      />
    );
  }
  if (foto && photoStatus !== "failed") {
    return (
      // User-content URLs come from arbitrary hosts (Cloudinary, seeds),
      // so next/image remotePatterns cannot cover them. Lazy <img> is
      // intentional here.
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={foto}
        alt={alt}
        loading="lazy"
        className={`${className} object-cover shrink-0`}
      />
    );
  }
  return (
    <div
      aria-label={photoStatus === "failed" ? "Foto gagal dimuat" : alt}
      title={photoStatus === "failed" ? "Foto gagal dimuat" : undefined}
      className={`${className} bg-sand text-muted flex items-center justify-center shrink-0`}
    >
      <Icon name={photoStatus === "failed" ? "broken_image" : icon} />
    </div>
  );
}
