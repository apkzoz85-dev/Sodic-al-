import Home from "@/components/pages/Home";
import { homeMeta } from "@/lib/meta";

export const metadata = homeMeta("en");

export default function Page() {
  return <Home lang="en" />;
}
