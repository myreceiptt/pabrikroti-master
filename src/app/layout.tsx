// /src/app/layout.tsx

// External libraries
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThirdwebProvider } from "thirdweb/react";
import { Analytics } from "@vercel/analytics/react";

// CSS Styling
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bukhari Islamic Art Gallery - Harmoni Istiqlal",
  description: "Galeri Seni Islam Bukhari",
  metadataBase: new URL("https://galeri.harmoniistiqlal.com"),
  authors: [
    { name: "MyReceipt", url: "https://myreceipt.endhonesa.com" },
    { name: "Prof. NOTA", url: "https://nota.endhonesa.com" },
  ],
  creator: "MyReceipt and Friends",
  publisher: "Voyage.co.id",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Bukhari Islamic Art Gallery - Harmoni Istiqlal",
    description: "Galeri Seni Islam Bukhari",
    url: "https://galeri.harmoniistiqlal.com",
    siteName: "Bukhari Islamic Art Gallery - Harmoni Istiqlal",
    locale: "en-US",
    images: [
      {
        url: "https://galeri.harmoniistiqlal.com/screenshot-galeri-harmoni-bukhari-istiqlal.png",
        width: 1920,
        height: 1080,
        alt: "Galeri Seni Islam Bukhari",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    siteId: "@MyReceiptTT",
    creator: "@MyReceiptTT",
    creatorId: "@MyReceiptTT",
    title: "Bukhari Islamic Art Gallery - Harmoni Istiqlal",
    description: "Galeri Seni Islam Bukhari",
    images: [
      "https://galeri.harmoniistiqlal.com/screenshot-galeri-harmoni-bukhari-istiqlal.png",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThirdwebProvider>{children}</ThirdwebProvider>
        <Analytics />
      </body>
    </html>
  );
}
