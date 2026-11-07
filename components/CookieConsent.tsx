"use client";
import { useEffect, useState } from "react";

export default function CookieConsent() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    try { if (!localStorage.getItem("cookie-ok")) setShow(true); } catch {}
  }, []);
  if (!show) return null;
  const ok = () => { try { localStorage.setItem("cookie-ok", "1"); } catch {} setShow(false); };
  return (
    <div className="fixed bottom-16 lg:bottom-6 right-4 left-4 lg:left-auto lg:max-w-sm z-40 bg-ink-2 text-sand text-sm p-4 rounded-xl shadow-xl border border-white/10">
      <p className="mb-3 leading-6">بنستخدم ملفات الكوكيز لتحسين تجربتك وقياس أداء الإعلانات. <a href="/privacy" className="underline">اعرف أكتر</a></p>
      <button onClick={ok} className="bg-gold text-ink font-semibold px-4 py-2 rounded-lg">موافق</button>
    </div>
  );
}
