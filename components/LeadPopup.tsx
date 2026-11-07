"use client";
import { useEffect, useState } from "react";
import { getProject } from "@/lib/content";
import { stripLang } from "@/lib/i18n";
import LeadForm from "./LeadForm";
import { useLang } from "./useLang";

export default function LeadPopup() {
  const { lang, t, path } = useLang();
  const clean = stripLang(path);
  const [open, setOpen] = useState(false);
  const project = getProject(clean.split("/")[1] ?? "", lang);

  useEffect(() => {
    if (/^\/(thank-you|privacy|disclaimer|about)/.test(clean)) return;
    try { if (sessionStorage.getItem("popup-shown")) return; } catch {}
    let shown = false;
    const show = () => {
      if (shown) return;
      shown = true;
      setOpen(true);
      try { sessionStorage.setItem("popup-shown", "1"); } catch {}
      cleanup();
    };
    const onScroll = () => {
      const h = document.documentElement;
      if ((h.scrollTop + h.clientHeight) / h.scrollHeight >= 0.58) show();
    };
    const timer = setTimeout(show, 16000);
    window.addEventListener("scroll", onScroll, { passive: true });
    const cleanup = () => { clearTimeout(timer); window.removeEventListener("scroll", onScroll); };
    return cleanup;
  }, [clean]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 bg-ink/70 grid place-items-center p-4" onClick={() => setOpen(false)}>
      <div className="relative bg-paper w-full max-w-md max-h-[92vh] overflow-y-auto rounded-2xl p-6 shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <button onClick={() => setOpen(false)} aria-label={t.close} className="absolute top-3 end-3 w-9 h-9 rounded-full hover:bg-sand text-xl">×</button>
        <p className="eyebrow mb-2">Price List 2026</p>
        <h3 className="text-xl font-bold mb-1 pe-8">
          {t.popTitle} {project ? <span className="latin">{project.name}</span> : t.popAll}
        </h3>
        <p className="text-sm text-ink/60 mb-5">{t.popSub}</p>
        <LeadForm project={project?.name} compact />
      </div>
    </div>
  );
}
