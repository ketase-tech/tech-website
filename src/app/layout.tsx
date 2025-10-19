import type { Metadata } from "next";
import SmoothScroll from "@/components/theme/SmoothScroll";
import Header from "../components/Header";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ketase Tech | Innovative Digital Solutions in Malawi",
  description:
    "Ketase Tech builds modern websites, apps, and systems to help businesses in Malawi and Africa grow through technology and design.",
  openGraph: {
    title: "Ketase Tech | Innovative Digital Solutions in Malawi",
    description:
      "We design and build impactful digital experiences that help businesses grow.",
    url: "https://tech.ketasetech.com",
    siteName: "Ketase Tech",
    images: [
      {
        url: "https://tech.ketasetech.com/logo.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ketase Tech | Innovative Digital Solutions in Malawi",
    description:
      "We design and build impactful digital experiences that help businesses grow.",
    images: ["https://ketasetech.com/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Canonical URL */}
        <link rel="canonical" href="https://ketasetech.com" />
        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Ketase Tech",
              url: "https://ketasetech.com",
              logo: "https://ketasetech.com/logo.png",
              sameAs: [
                "https://www.facebook.com/ketasetech",
                "https://www.instagram.com/ketasetech",
                "https://www.linkedin.com/company/ketase-tech",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header/>
        {/* <SmoothScroll> */}
        {children}
        {/* </SmoothScroll> */}
      </body>
    </html>
  );
}
