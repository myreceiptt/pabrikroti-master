// /src/components/landing/HeroSection.tsx

// External libraries
import Image from "next/image";
import Link from "next/link";

// Blockchain configurations
import { getActiveReceipt } from "@/config/receipts";

export default function HeroSection() {
  const { receipt } = getActiveReceipt();

  return (
    <section
      style={{
        backgroundColor: receipt.colorTertiary,
        borderColor: receipt.colorTertiary,
      }}
      className="relative w-full flex flex-col items-center justify-center border rounded-xl overflow-hidden">
      <div className="relative w-full max-w-7xl aspect-[4/1] overflow-hidden">
        <Link
          title="SUBMIT YOUR NFT For A Reason - A Web3 Initiative for Grassroots Culture & Creative Solidarity"
          href="https://docs.google.com/forms/d/e/1FAIpQLScEtnwdQ8dRbYmR61wOi5HajAslc123-eOlDv7S41neJmtTmg/viewform"
          target="_blank"
          rel="noopener noreferrer">
          <Image
            src="/medias/landing-banner.png"
            alt="NFT For A Reason - A Web3 Initiative for Grassroots Culture & Creative Solidarity"
            title="NFT For A Reason - A Web3 Initiative for Grassroots Culture & Creative Solidarity"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </Link>
      </div>
    </section>
  );
}
