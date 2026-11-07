"use client";
import { useCallback, useEffect, useState } from "react";

export default function Gallery({ slug, count, name }: { slug: string; count: number; name: string }) {
  const imgs = Array.from({ length: count }, (_, i) => `/images/${slug}/g${String(i + 1).padStart(2, "0")}.jpg`);
  const [open, setOpen] = useState<number | null>(null);
  const [all, setAll] = useState(false);
  const shown = all ? imgs : imgs.slice(0, 9);

  const go = useCallback((d: number) => setOpen((o) => (o === null ? o : (o + d + imgs.length) % imgs.length)), [imgs.length]);
  useEffect(() => {
    if (open === null) return;
    const k = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowLeft") go(1);
      if (e.key === "ArrowRight") go(-1);
    };
    window.addEventListener("keydown", k);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", k); document.body.style.overflow = ""; };
  }, [open, go]);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[150px] md:auto-rows-[190px]">
        {shown.map((src, i) => (
          <button
            key={src}
            onClick={() => setOpen(i)}
            className={`relative overflow-hidden rounded-xl group ${i === 0 ? "col-span-2 row-span-2" : ""}`}
            aria-label={`${name} — صورة ${i + 1}`}
          >
            <img src={src} alt={`${name} SODIC — صورة ${i + 1}`} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-105" />
          </button>
        ))}
      </div>
      {imgs.length > 9 && (
        <div className="text-center mt-6">
          <button onClick={() => setAll(!all)} className="border border-current px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-ink hover:text-paper transition">
            {all ? "عرض أقل" : <>عرض كل الصور (<span className="num">{imgs.length}</span>)</>}
          </button>
        </div>
      )}

      {open !== null && (
        <div className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center" onClick={() => setOpen(null)}>
          <img src={imgs[open]} alt="" className="max-h-[88vh] max-w-[94vw] object-contain" onClick={(e) => e.stopPropagation()} />
          <button onClick={() => setOpen(null)} className="absolute top-4 left-4 text-white text-3xl w-11 h-11" aria-label="إغلاق">×</button>
          <button onClick={(e) => { e.stopPropagation(); go(-1); }} className="absolute right-3 top-1/2 -translate-y-1/2 text-white text-4xl w-12 h-12 bg-white/10 rounded-full" aria-label="السابق">›</button>
          <button onClick={(e) => { e.stopPropagation(); go(1); }} className="absolute left-3 top-1/2 -translate-y-1/2 text-white text-4xl w-12 h-12 bg-white/10 rounded-full" aria-label="التالي">‹</button>
          <p className="absolute bottom-4 text-white/70 text-sm num">{open + 1} / {imgs.length}</p>
        </div>
      )}
    </>
  );
}
