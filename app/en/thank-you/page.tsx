import { Suspense } from "react";
import ThankYou from "@/components/pages/ThankYou";

export const metadata = { title: "Thank you", robots: { index: false, follow: false } };

export default function Page() {
  return <Suspense><ThankYou /></Suspense>;
}
