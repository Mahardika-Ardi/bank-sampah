import type { ApiEnvelope } from "@/types/api";
import { APP_KEY_STORAGE_KEY } from "@/lib/constants/storage";

export class ApiError extends Error {
  statusCode: number;
  errors: unknown;

  constructor(statusCode: number, message: string, errors: unknown) {
    super(message);
    this.name = "ApiError";
    this.statusCode = statusCode;
    this.errors = errors;
  }
}

type ApiOptions = {
  method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  body?: Record<string, unknown>;
  formData?: FormData;
};

function baseUrl(): string {
  const url = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3001";
  return url.replace(/\/$/, "");
}

function appKey(): string | null {
  if (typeof window === "undefined") return null;
  return window.localStorage.getItem(APP_KEY_STORAGE_KEY);
}

function redirectToLogin(): void {
  if (typeof window === "undefined") return;
  if (!window.location.pathname.startsWith("/login")) {
    // Plain lib module: no Next router available; full navigation intended.
    // eslint-disable-next-line @next/next/no-location-assign-relative-destination
    window.location.assign("/login");
  }
}

/**
 * Typed API client: x-app-key header, cookie credentials, envelope unwrap.
 * Throws ApiError on contract error envelopes.
 */
export async function api<T>(path: string, options: ApiOptions = {}): Promise<T> {
  const key = appKey();
  const headers: Record<string, string> = {};
  if (key) headers["x-app-key"] = key;
  if (options.body) headers["Content-Type"] = "application/json";

  const response = await fetch(`${baseUrl()}/api/v1${path}`, {
    method: options.method ?? "GET",
    headers,
    credentials: "include",
    body: options.formData
      ? options.formData
      : options.body
        ? JSON.stringify(options.body)
        : undefined,
  });

  const json = (await response.json()) as
    | ApiEnvelope<T>
    | { success: false; message: string; errors?: unknown; statusCode?: number };

  if (!response.ok || json.success === false) {
    const failure = json as { message: string; errors?: unknown; statusCode?: number };
    if (response.status === 401) redirectToLogin();
    throw new ApiError(
      failure.statusCode ?? response.status,
      failure.message ?? "Request failed",
      failure.errors ?? null,
    );
  }

  return (json as ApiEnvelope<T>).data;
}
