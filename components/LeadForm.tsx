"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { getProjects } from "@/lib/content";
import { href } from "@/lib/i18n";
import { SITE } from "@/lib/site";
import { track } from "@/lib/track";
import { useLang } from "./useLang";

export default function LeadForm({ project, dark = false, compact = false }: { project?: string; dark?: boolean; compact?: boolean }) {
  const { lang, t } = useLang();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [agree, setAgree] = useState(true);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    const fd = new FormData(e.currentTarget);
    if (fd.get("botcheck")) return;
    const phone = String(fd.get("phone") || "").replace(/[\s-]/g, "");
    if (!/^(\+?20|0)?1[0125]\d{8}$/.test(phone) && !/^\+?\d{9,15}$/.test(phone)) {
      setError(t.fErrPhone);
      return;
    }
    setLoading(true);
    fd.append("access_key", SITE.web3formsKey);
    fd.append("subject", `Lead — SODIC — ${fd.get("project")} (${lang.toUpperCase()})`);
    fd.append("from_name", "SODIC Projects Landing");
    fd.append("language", lang);
    fd.append("page", window.location.href);
    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: fd });
      const data = await res.json();
      if (data.success) {
        track("form");
        router.push(`${href(lang, "/thank-you")}?p=${encodeURIComponent(String(fd.get("project")))}`);
      } else setError(t.fErr);
    } catch {
      setError(t.fErrNet);
    } finally {
      setLoading(false);
    }
  }

  const field = dark
    ? "w-full min-w-0 bg-white/5 border border-white/15 text-paper placeholder:text-sand-2/70 px-4 py-3 rounded-lg focus:border-gold-2 outline-none"
    : "w-full min-w-0 bg-white border border-sand-2 text-ink placeholder:text-ink/40 px-4 py-3 rounded-lg focus:border-gold outline-none";
  const span = compact ? "" : "sm:col-span-2";

  return (
    <form onSubmit={onSubmit} className={`grid gap-3 ${compact ? "" : "sm:grid-cols-2"}`}>
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
      <input name="name" required placeholder={t.fName} autoComplete="name" className={field} />
      <input name="phone" required type="tel" inputMode="tel" autoComplete="tel" placeholder={t.fPhone} className={`${field} text-start`} />
      <select name="project" defaultValue={project || "All SODIC projects"} className={field}>
        <option value="All SODIC projects">{t.fAll}</option>
        {getProjects(lang).map((p) => <option key={p.slug} value={p.name}>{p.name}</option>)}
      </select>
      <select name="unit" defaultValue="" className={field}>
        <option value="">{t.fUnit}</option>
        {t.fUnits.map((u) => <option key={u}>{u}</option>)}
      </select>
      <label className={`flex gap-2 items-start text-xs leading-5 ${span} ${dark ? "text-sand-2" : "text-ink/60"}`}>
        <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} className="mt-0.5 shrink-0" />
        <span>{t.fAgree} <Link href={href(lang, "/privacy")} className="underline">{t.fPrivacy}</Link>.</span>
      </label>
      {error && <p className={`text-sm text-red-500 ${span}`}>{error}</p>}
      <button disabled={loading || !agree} className={`${span} bg-gold hover:bg-gold-2 text-ink font-bold py-3.5 rounded-lg transition disabled:opacity-60`}>
        {loading ? t.fSending : t.fSubmit}
      </button>
    </form>
  );
}
