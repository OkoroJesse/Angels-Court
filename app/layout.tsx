import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { hotelConfig } from "@/data/hotel.config";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(hotelConfig.siteUrl),
  title: {
    default: `${hotelConfig.name} | ${hotelConfig.tagline}`,
    template: `%s | ${hotelConfig.shortName}`,
  },
  description: hotelConfig.description,
  keywords: [
    "Angels Court Hotel",
    "hotel Kubwa Abuja",
    "hotel Abuja Nigeria",
    "accommodation Abuja",
    "hotel suite Abuja",
    "Angels Court Hotel and Suite",
  ],
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: hotelConfig.siteUrl,
    siteName: hotelConfig.name,
    title: `${hotelConfig.name} | ${hotelConfig.tagline}`,
    description: hotelConfig.description,
    images: [
      {
        url: hotelConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${hotelConfig.name} — ${hotelConfig.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${hotelConfig.name} | ${hotelConfig.tagline}`,
    description: hotelConfig.description,
    images: [hotelConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
