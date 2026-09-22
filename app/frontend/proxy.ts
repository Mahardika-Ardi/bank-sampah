import { NextRequest, NextResponse } from "next/server";

const PROTECTED_PREFIXES = ["/dashboard", "/admin"];

// Public registration page lives under /admin but must stay reachable
// without a session; the backend guards enforce real access.
const PUBLIC_PATHS = ["/admin/register"];

function hasSessionCookie(request: NextRequest): boolean {
  return request.cookies.has("access_token");
}

function isProtectedPath(pathname: string): boolean {
  return PROTECTED_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
  );
}

/**
 * Presence-only gate: the JWT lives in an httpOnly cookie readable here
 * (but not from JS). Role routing happens client-side after login; the
 * backend guards enforcing real access.
 */
export function proxy(request: NextRequest): NextResponse | undefined {
  const { pathname } = request.nextUrl;

  if (PUBLIC_PATHS.includes(pathname)) return undefined;

  if (!hasSessionCookie(request) && isProtectedPath(pathname)) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  return undefined;
}

export const config = {
  matcher: ["/dashboard/:path*", "/admin/:path*", "/login", "/register/:path*"],
};
