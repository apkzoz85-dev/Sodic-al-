import Home from "@/components/pages/Home";
import { homeMeta } from "@/lib/meta";

export const metadata = homeMeta("ar");

export default function Page() {
  return <Home lang="ar" />;
}
