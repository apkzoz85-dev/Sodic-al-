"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { PROJECTS } from "@/lib/projects";
import { SITE } from "@/lib/site";
import { track } from "@/lib/track";

export default function LeadForm({ project, dark = false, compact = false }: { project?: string; dark?: boolean; compact?: boolean }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [agree, setAgree] = useState(true);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    const fd = new FormData(e.currentTarget);
    if (fd.get("botcheck")) return;
    const phone = String(fd.get("phone") || "").replace(/\s/g, "");
    if (!/^(\+?20|0)?1[0125]\d{8}$/.test(phone) && !/^\+?\d{9,15}$/.test(phone)) {
      setError("من فضلك اكتب رقم موبايل صحيح");
      return;
    }
    setLoading(true);
    fd.append("access_key", SITE.web3formsKey);
    fd.append("subject", `Lead — SODIC — ${fd.get("project")}`);
    fd.append("from_name", "SODIC Projects Landing");
    fd.append("page", typeof window !== "undefined" ? window.location.href : "");
    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: fd });
      const data = await res.json();
      if (data.success) {
        track("form");
        router.push(`/thank-you?p=${encodeURIComponent(String(fd.get("project")))}`);
      } else setError("حصل خطأ، جرّب تاني أو كلّمنا واتساب");
    } catch {
      setError("حصل خطأ في الاتصال، جرّب تاني");
    } finally {
      setLoading(false);
    }
  }

  const field = dark
    ? "w-full bg-white/5 border border-white/15 text-paper placeholder:text-sand-2/70 px-4 py-3 rounded-lg focus:border-gold-2 outline-none"
    : "w-full bg-white border border-sand-2 text-ink placeholder:text-ink/40 px-4 py-3 rounded-lg focus:border-gold outline-none";

  return (
    <form onSubmit={onSubmit} className={`grid gap-3 ${compact ? "" : "sm:grid-cols-2"}`}>
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
      <input name="name" required placeholder="الاسم" className={field} />
      <input name="phone" required inputMode="tel" placeholder="رقم الموبايل / واتساب" className={`${field} text-right`} />
      <select name="project" defaultValue={project || "All SODIC projects"} className={field}>
        <option value="All SODIC projects">كل المشاريع</option>
        {PROJECTS.map((p) => <option key={p.slug} value={p.name}>{p.name}</option>)}
      </select>
      <select name="unit" defaultValue="" className={field}>
        <option value="">نوع الوحدة</option>
        <option>شقة</option>
        <option>تاون هاوس / توين هاوس</option>
        <option>ڤيلا</option>
        <option>لسه بقارن</option>
      </select>
      <label className={`flex gap-2 items-start text-xs ${compact ? "" : "sm:col-span-2"} ${dark ? "text-sand-2" : "text-ink/60"}`}>
        <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} className="mt-0.5" />
        <span>أوافق على التواصل معي بخصوص المشروع وفقاً لـ <a href="/privacy" className="underline">سياسة الخصوصية</a>.</span>
      </label>
      {error && <p className={`text-sm text-red-500 ${compact ? "" : "sm:col-span-2"}`}>{error}</p>}
      <button disabled={loading || !agree} className={`${compact ? "" : "sm:col-span-2"} bg-gold hover:bg-gold-2 text-ink font-bold py-3.5 rounded-lg transition disabled:opacity-60`}>
        {loading ? "جاري الإرسال..." : "ابعتلي الأسعار وخطط السداد"}
      </button>
    </form>
  );
}
