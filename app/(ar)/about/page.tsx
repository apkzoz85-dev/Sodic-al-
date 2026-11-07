import Legal, { legalTitle } from "@/components/pages/Legal";

export const metadata = { title: legalTitle("ar", "about") };

export default function Page() {
  return <Legal lang="ar" kind="about" />;
}
