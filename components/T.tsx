// Keeps each Latin/number run ("Villa 02", "179 – 195", "5%", "(Back-loaded)") as one isolated LTR unit inside Arabic text,
// and stops short runs from breaking across lines (e.g. "Club S").
const RUN = /(\(?[A-Za-z0-9][A-Za-z0-9 .,&%'’\-–/+²×]*[A-Za-z0-9%)²]|[A-Za-z0-9])/g;
const HAS_AR = /[؀-ۿ]/;

export default function T({ children }: { children: string }) {
  const ar = HAS_AR.test(children);
  if (!ar && !/\d/.test(children)) return <>{children}</>;
  const parts = children.split(RUN);
  return (
    <>
      {parts.map((s, i) =>
        i % 2 === 1 ? (
          <bdi key={i} dir="ltr" className={`${/^\(?\d/.test(s) ? "num" : "latin"}${ar && s.length <= 24 ? " whitespace-nowrap" : ""}`}>{s}</bdi>
        ) : (
          s
        )
      )}
    </>
  );
}
