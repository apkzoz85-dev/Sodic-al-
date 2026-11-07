"use client";
import { usePathname } from "next/navigation";
import { getProject } from "@/lib/projects";
import { telLink, waLink } from "@/lib/site";
import { track } from "@/lib/track";

const WaIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor" aria-hidden>
    <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3 2.4 1 2.9.8 3.4.7.5-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.5-.3zM12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2z" />
  </svg>
);

export default function FloatingButtons() {
  const slug = usePathname().split("/")[1];
  const name = getProject(slug)?.name;
  return (
    <>
      {/* Desktop floating */}
      <div className="hidden lg:flex fixed bottom-6 left-6 z-40 flex-col gap-3">
        <a href={waLink(name)} target="_blank" rel="noopener" onClick={() => track("whatsapp")} aria-label="واتساب"
          className="w-14 h-14 rounded-full bg-[#25D366] text-white grid place-items-center shadow-lg hover:scale-105 transition"><WaIcon /></a>
        <a href={telLink} onClick={() => track("call")} aria-label="اتصل"
          className="w-14 h-14 rounded-full bg-gold text-ink grid place-items-center shadow-lg hover:scale-105 transition">
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor" aria-hidden><path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z"/></svg>
        </a>
      </div>
      {/* Mobile bottom bar */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 grid grid-cols-3 bg-ink text-paper border-t border-white/10 text-sm font-semibold">
        <a href={telLink} onClick={() => track("call")} className="py-3.5 text-center">اتصل</a>
        <a href={waLink(name)} target="_blank" rel="noopener" onClick={() => track("whatsapp")} className="py-3.5 text-center bg-[#25D366] text-white">واتساب</a>
        <a href="#lead" className="py-3.5 text-center bg-gold text-ink">الأسعار</a>
      </div>
    </>
  );
}
