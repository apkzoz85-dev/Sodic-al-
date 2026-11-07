"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { getProject } from "@/lib/projects";
import LeadForm from "./LeadForm";

export default function LeadPopup() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const project = getProject(path.split("/")[1]);

  useEffect(() => {
    if (path.startsWith("/thank-you") || path.startsWith("/privacy") || path.startsWith("/disclaimer") || path.startsWith("/about")) return;
    let shown = false;
    try { if (sessionStorage.getItem("popup-shown")) return; } catch {}
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
    const t = setTimeout(show, 16000);
    window.addEventListener("scroll", onScroll, { passive: true });
    const cleanup = () => { clearTimeout(t); window.removeEventListener("scroll", onScroll); };
    return cleanup;
  }, [path]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 bg-ink/70 grid place-items-center p-4" onClick={() => setOpen(false)}>
      <div className="relative bg-paper w-full max-w-md rounded-2xl p-6 shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <button onClick={() => setOpen(false)} aria-label="إغلاق" className="absolute top-3 left-3 w-9 h-9 rounded-full hover:bg-sand text-xl">×</button>
        <p className="eyebrow mb-2">Price List 2026</p>
        <h3 className="text-xl font-bold mb-1">
          احصل على أسعار {project ? <span className="latin">{project.name}</span> : "مشاريع سوديك"}
        </h3>
        <p className="text-sm text-ink/60 mb-5">هنبعتلك البرايس ليست وخطط السداد على واتساب.</p>
        <LeadForm project={project?.name} compact />
      </div>
    </div>
  );
}
