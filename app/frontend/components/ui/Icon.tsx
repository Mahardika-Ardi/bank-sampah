import type { CSSProperties } from "react";

const SIZES = { xs: 14, sm: 16, md: 20, lg: 24 } as const;

type IconProps = {
  name: string;
  size?: keyof typeof SIZES;
  filled?: boolean;
  className?: string;
};

/**
 * Material Symbols (outlined) icon. Font CSS is imported once in
 * app/layout.tsx; names match docs/stitch-design/auth-page.html.
 */
export default function Icon({
  name,
  size = "md",
  filled = false,
  className = "",
}: IconProps) {
  const style: CSSProperties = { fontSize: SIZES[size] };
  if (filled) style.fontVariationSettings = "'FILL' 1";
  return (
    <span
      aria-hidden="true"
      className={`material-symbols-outlined ${className}`}
      style={style}
    >
      {name}
    </span>
  );
}
