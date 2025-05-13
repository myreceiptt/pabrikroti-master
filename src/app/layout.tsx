// /src/app/layout.tsx

// External libraries
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { headers } from "next/headers";
import { ThirdwebProvider } from "thirdweb/react";
import { Analytics } from "@vercel/analytics/react";

// CSS Styling
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const host = (await headers()).get("host") || "";

  return {
    title: "Breads Factory of Prof. NOTA Inc.", // Title
    description:
      "The Breads Factory is a factory that produces Programmed Bread (tokenization) with a Framework of Playing, Learning, and Working or PLW.", // Description
    metadataBase: new URL(`https://${host}`), // Base URL
    authors: [
      { name: "MyReceipt", url: "https://myreceipt.endhonesa.com" },
      { name: "Prof. NOTA", url: "https://nota.endhonesa.com" },
    ],
    creator: "MyReceipt and Prof. NOTA Inc.",
    publisher: "Prof. NOTA Inc.",
    alternates: {
      canonical: "/",
    },
    openGraph: {
      title: "Breads Factory of Prof. NOTA Inc.", // Title
      description:
        "The Breads Factory is a factory that produces Programmed Bread (tokenization) with a Framework of Playing, Learning, and Working or PLW.", // Description
      url: `https://${host}`, // Base URL
      siteName: "Breads Factory of Prof. NOTA Inc.", // Title
      locale: "en-US",
      images: [
        {
          url: `https://${host}/preview-image.png`, // Preview Image URL
          width: 1920,
          height: 1080,
          alt: "Breads Factory of Prof. NOTA Inc.", // Title
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      siteId: "@MyReceiptTT",
      creator: "@MyReceiptTT",
      creatorId: "@MyReceiptTT",
      title: "Breads Factory of Prof. NOTA Inc.", // Title
      description:
        "The Breads Factory is a factory that produces Programmed Bread (tokenization) with a Framework of Playing, Learning, and Working or PLW.", // Description
      images: [
        `https://${host}/preview-image.png`, // Preview Image URL
      ],
    },
  };
}

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThirdwebProvider>{children}</ThirdwebProvider>
        <Analytics />
      </body>
    </html>
  );
}
