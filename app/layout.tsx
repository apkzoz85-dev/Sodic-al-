import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { SITE } from "@/lib/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import CookieConsent from "@/components/CookieConsent";
import LeadPopup from "@/components/LeadPopup";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.domain),
  title: "مشاريع سوديك 2026 | VYE · Karmell · The Estates · SODIC East · East Vale",
  description:
    "أسعار وخطط سداد مشاريع سوديك: VYE وKarmell وThe Estates في نيو زايد، وSODIC East في هليوبوليس الجديدة، وEast Vale في المستقبل سيتي. مقدم 5% وتقسيط حتى 10 سنوات.",
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@500;600;700&family=IBM+Plex+Sans+Arabic:wght@400;500;600&family=Noto+Kufi+Arabic:wght@700;800&display=swap"
        />
      </head>
      <body>
        {/* Google Ads gtag */}
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${SITE.gtagId}`} strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${SITE.gtagId}');`}
        </Script>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />
        <LeadPopup />
        <CookieConsent />
      </body>
    </html>
  );
}
