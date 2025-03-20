// /src/app/layout.tsx

// External libraries
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThirdwebProvider } from "thirdweb/react";
import { Analytics } from "@vercel/analytics/react";

// Blockchain configurations
import {
  titlePro,
  descriptionPro,
  baseUrl,
  previewImage,
} from "@/config/osloid";

// CSS Styling
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: titlePro, // Title
  description: descriptionPro, // Description
  metadataBase: new URL(baseUrl), // Base URL
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
    title: titlePro, // Title
    description: descriptionPro, // Description
    url: baseUrl, // Base URL
    siteName: titlePro, // Title
    locale: "en-US",
    images: [
      {
        url: previewImage, // Preview Image URL
        width: 1920,
        height: 1080,
        alt: titlePro, // Title
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    siteId: "@MyReceiptTT",
    creator: "@MyReceiptTT",
    creatorId: "@MyReceiptTT",
    title: titlePro, // Title
    description: descriptionPro, // Description
    images: [
      previewImage, // Preview Image URL
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
