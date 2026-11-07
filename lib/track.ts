import { SITE } from "./site";

type Kind = keyof typeof SITE.conversions;

declare global {
  interface Window { gtag?: (...args: unknown[]) => void }
}

export function track(kind: Kind) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", "conversion", { send_to: SITE.conversions[kind] });
}
