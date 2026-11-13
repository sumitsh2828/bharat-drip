import type { Metadata, Viewport } from "next";
import "@fontsource-variable/inter";
import "@fontsource/plus-jakarta-sans/600.css";
import "@fontsource/plus-jakarta-sans/700.css";
import "@fontsource/plus-jakarta-sans/800.css";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { site } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Bharat Drip · Drip & sprinkler irrigation systems made in India",
    template: "%s · Bharat Drip",
  },
  description:
    "Bharat Drip Irrigation & Agro manufactures drip laterals, filters, fittings, sprinklers, HDPE and PVC pipes in Rajasthan, India, and exports them to distributors and large farms abroad.",
  openGraph: {
    siteName: "Bharat Drip Irrigation & Agro",
    type: "website",
    locale: "en_IN",
  },
};

export const viewport: Viewport = {
  themeColor: "#142418",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <a
          href="#main"
          className="sr-only z-50 rounded-lg bg-gold px-4 py-2 font-semibold text-forest focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
