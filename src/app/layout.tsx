import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "@/components/providers";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import "./globals.css";

const inter = Inter({subsets: ["latin"]});

const description =
  "Backend Engineer at Bank Negara Indonesia and Master of Cybersecurity candidate at Monash University, building secure, scalable fintech systems.";

export const metadata: Metadata = {
  metadataBase: new URL("https://radithyama.site"),
  title: {
    default: "Radithya Mirza · Backend Engineer & Cybersecurity",
    template: "%s · Radithya Mirza",
  },
  description,
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Radithya Mirza",
    title: "Radithya Mirza · Backend Engineer & Cybersecurity",
    description,
  },
  twitter: { card: "summary", title: "Radithya Mirza", description },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <Providers>
          <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:shadow dark:focus:bg-black">
            Skip to content
          </a>
          <SiteHeader />
          <main id="main">{children}</main>
          <SiteFooter />
        </Providers>
      </body>
    </html>
  );
}
