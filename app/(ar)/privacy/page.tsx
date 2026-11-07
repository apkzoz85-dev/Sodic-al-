import Legal, { legalTitle } from "@/components/pages/Legal";

export const metadata = { title: legalTitle("ar", "privacy") };

export default function Page() {
  return <Legal lang="ar" kind="privacy" />;
}
