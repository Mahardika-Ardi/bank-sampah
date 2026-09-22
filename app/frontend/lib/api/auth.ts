import { api } from "@/lib/api/client";
import type {
  LoginResponse,
  MakerProfile,
  MeResponse,
  RegisterAdminInput,
  RegisterNasabahInput,
} from "@/types/api";

export function login(username: string, password: string) {
  return api<LoginResponse>("/auth/login", {
    method: "POST",
    body: { username, password },
  });
}

export function registerNasabah(input: RegisterNasabahInput) {
  const { foto, ...fields } = input;
  if (!foto) {
    return api<unknown>("/auth/nasabah/register", {
      method: "POST",
      body: { ...fields },
    });
  }
  const formData = new FormData();
  for (const [key, value] of Object.entries(fields)) {
    formData.append(key, value as string);
  }
  formData.append("foto", foto);
  return api<unknown>("/auth/nasabah/register", {
    method: "POST",
    formData,
  });
}

export function registerAdmin(input: RegisterAdminInput) {
  return api<unknown>("/auth/admin/register", {
    method: "POST",
    body: { ...input },
  });
}

export function makerProfile() {
  return api<MakerProfile>("/maker/profile");
}

export function me() {
  return api<MeResponse>("/auth/me");
}
