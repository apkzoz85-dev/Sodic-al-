"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { waLink } from "@/lib/site";
import { track } from "@/lib/track";

export default function ThankYou() {
  const p = useSearchParams().get("p") || undefined;
  const project = p && p !== "All SODIC projects" ? p : undefined;
  return (
    <section className="min-h-[70vh] grid place-items-center px-4 py-20">
      <div className="max-w-lg text-center">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold/20 grid place-items-center text-3xl text-gold">✓</div>
        <h1 className="text-3xl font-bold mb-3">شكراً، وصلتنا بياناتك</h1>
        <p className="text-ink/60 mb-8">
          مستشار هيتواصل معاك قريب بأسعار {project ? <span className="latin">{project}</span> : "مشاريع سوديك"}. لو مستعجل، كلّمنا واتساب دلوقتي.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <a href={waLink(project)} target="_blank" rel="noopener" onClick={() => track("whatsapp")} className="bg-[#25D366] text-white font-bold px-6 py-3 rounded-lg">كلّمنا واتساب</a>
          <Link href="/" className="border border-sand-2 px-6 py-3 rounded-lg">رجوع للمشاريع</Link>
        </div>
      </div>
    </section>
  );
}
