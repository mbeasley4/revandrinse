import type { Metadata } from "next";
import { Bebas_Neue, Oswald } from "next/font/google";
import "./globals.css";

const bebas = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

const siteUrl = "https://revandrinse.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Rev & Rinse Auto Detailing | Madeira, Ohio",
    template: "%s | Rev & Rinse Auto Detailing",
  },
  description:
    "Professional auto detailing in Madeira, Ohio. Exterior wash, interior detail, steam cleaning, clay bar treatment & carpet shampooing. Text us to book today.",
  keywords: [
    "auto detailing",
    "car detailing",
    "Madeira Ohio",
    "Cincinnati car detailing",
    "exterior wash",
    "interior detail",
    "steam cleaning",
    "clay bar",
    "carpet shampooing",
  ],
  openGraph: {
    type: "website",
    siteName: "Rev & Rinse Auto Detailing",
    url: siteUrl,
    title: "Rev & Rinse Auto Detailing | Madeira, Ohio",
    description:
      "Professional auto detailing in Madeira, Ohio. Steam cleaning, clay bar, interior & exterior — text us to book.",
    images: [
      {
        url: "/images/revandrinse-social.png",
        width: 1200,
        height: 630,
        alt: "Rev & Rinse Auto Detailing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rev & Rinse Auto Detailing | Madeira, Ohio",
    description:
      "Professional auto detailing in Madeira, Ohio. Steam cleaning, clay bar, interior & exterior — text us to book.",
    images: ["/images/revandrinse-social.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebas.variable} ${oswald.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white">
        {children}
      </body>
    </html>
  );
}
