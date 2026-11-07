// Keeps each Latin/number run (e.g. "Villa 02", "179 – 195", "5%", "(Back-loaded)") as one isolated LTR unit inside Arabic text
const RUN = /(\(?[A-Za-z0-9][A-Za-z0-9 .,&%'’\-–/+²]*[A-Za-z0-9%)²]|[A-Za-z0-9])/g;

export default function T({ children }: { children: string }) {
  const parts = children.split(RUN);
  return (
    <>
      {parts.map((s, i) =>
        i % 2 === 1 ? (
          <bdi key={i} dir="ltr" className={/^\(?\d/.test(s) ? "num" : "latin"}>{s}</bdi>
        ) : (
          s
        )
      )}
    </>
  );
}
