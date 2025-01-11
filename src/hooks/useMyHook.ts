import { use } from "react";

export function useMyHook<T>(promise: Promise<T>): T {
  return use(promise);
}
