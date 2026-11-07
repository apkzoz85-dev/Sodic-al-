import type { Metadata } from "next";
import { Suspense } from "react";
import ThankYou from "./ThankYou";

export const metadata: Metadata = { title: "شكراً لتواصلك", robots: { index: false, follow: false } };

export default function Page() {
  return (
    <Suspense>
      <ThankYou />
    </Suspense>
  );
}
