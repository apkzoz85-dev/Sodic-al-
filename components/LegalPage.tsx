export default function LegalPage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-3xl px-4">
        <h1 className="text-3xl font-bold mb-8">{title}</h1>
        <div className="grid gap-5 text-ink/75 leading-8 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-ink [&_h2]:mt-4">{children}</div>
      </div>
    </section>
  );
}
