import Legal, { legalTitle } from "@/components/pages/Legal";

export const metadata = { title: legalTitle("en", "about") };

export default function Page() {
  return <Legal lang="en" kind="about" />;
}
