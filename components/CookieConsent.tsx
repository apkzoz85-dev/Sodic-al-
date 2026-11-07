"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { href } from "@/lib/i18n";
import { useLang } from "./useLang";

export default function CookieConsent() {
  const { lang, t } = useLang();
  const [show, setShow] = useState(false);
  useEffect(() => {
    try { if (!localStorage.getItem("cookie-ok")) setShow(true); } catch {}
  }, []);
  if (!show) return null;
  const ok = () => { try { localStorage.setItem("cookie-ok", "1"); } catch {} setShow(false); };
  return (
    <div className="fixed bottom-16 lg:bottom-6 inset-x-3 lg:inset-x-auto lg:start-6 lg:max-w-sm z-40 bg-ink-2 text-sand text-sm p-4 rounded-xl shadow-xl border border-white/10 flex items-center gap-3">
      <p className="leading-6 flex-1">{t.cookie} <Link href={href(lang, "/privacy")} className="underline">{t.cookieMore}</Link></p>
      <button onClick={ok} className="bg-gold text-ink font-semibold px-4 py-2 rounded-lg shrink-0">{t.ok}</button>
    </div>
  );
}
