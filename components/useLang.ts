"use client";
import { usePathname } from "next/navigation";
import { langFromPath, UI } from "@/lib/i18n";

export function useLang() {
  const path = usePathname() || "/";
  const lang = langFromPath(path);
  return { lang, t: UI[lang], path };
}
