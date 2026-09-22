import { api } from "@/lib/api/client";
import type { MyPenukaranRow } from "@/types/api";

export function myPenukaran() {
  return api<MyPenukaranRow[]>("/penukaran-poin/my-penukaran");
}
