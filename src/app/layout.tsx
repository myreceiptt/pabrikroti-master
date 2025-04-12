// /src/app/layout.tsx

// External libraries
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThirdwebProvider } from "thirdweb/react";
import { Analytics } from "@vercel/analytics/react";

// Blockchain configurations
import {
  proTitle,
  proDescription,
  proUrl,
  proImage,
} from "@/config/myreceipt";

// CSS Styling
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: proTitle, // Title
  description: proDescription, // Description
  metadataBase: new URL(proUrl), // Base URL
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
    title: proTitle, // Title
    description: proDescription, // Description
    url: proUrl, // Base URL
    siteName: proTitle, // Title
    locale: "en-US",
    images: [
      {
        url: proImage, // Preview Image URL
        width: 1920,
        height: 1080,
        alt: proTitle, // Title
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    siteId: "@MyReceiptTT",
    creator: "@MyReceiptTT",
    creatorId: "@MyReceiptTT",
    title: proTitle, // Title
    description: proDescription, // Description
    images: [
      proImage, // Preview Image URL
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
