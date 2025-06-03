// /src/components/landing/HeroSection.tsx

import { getActiveReceipt } from "@/config/receipts";
import Image from "next/image";

export default function HeroSection() {
  const { receipt } = getActiveReceipt();

  return (
    <section
      style={{
        backgroundColor: receipt.colorTertiary,
        borderColor: receipt.colorTertiary,
      }}
      className="relative w-full flex flex-col items-center justify-center px-6 border">
      {/* Responsive Images */}
      <div className="w-full max-w-7xl">
        {/* Small: 1:1 */}
        <div className="block md:hidden">
          <Image
            src="/medias/landing-banner-3.png"
            alt="NFT For A Reason - A Web3 Initiative for Grassroots Culture &amp; Creative Solidarity"
            title="NFT For A Reason - A Web3 Initiative for Grassroots Culture &amp; Creative Solidarity"
            width={800}
            height={400}
            className="w-full h-auto object-cover"
            style={{ aspectRatio: "2 / 1" }}
            priority
          />
        </div>

        {/* Medium: 1:3 */}
        <div className="hidden md:block lg:hidden">
          <Image
            src="/medias/landing-banner-2.png"
            alt="NFT For A Reason - A Web3 Initiative for Grassroots Culture &amp; Creative Solidarity"
            title="NFT For A Reason - A Web3 Initiative for Grassroots Culture &amp; Creative Solidarity"
            width={1200}
            height={400}
            className="w-full h-auto object-cover"
            style={{ aspectRatio: "3 / 1" }}
            priority
          />
        </div>

        {/* Large: 1:4 */}
        <div className="hidden lg:block">
          <Image
            src="/medias/landing-banner-1.png"
            alt="NFT For A Reason - A Web3 Initiative for Grassroots Culture &amp; Creative Solidarity"
            title="NFT For A Reason - A Web3 Initiative for Grassroots Culture &amp; Creative Solidarity"
            width={1600}
            height={400}
            className="w-full h-auto object-cover"
            style={{ aspectRatio: "4 / 1" }}
            priority
          />
        </div>
      </div>
    </section>
  );
}
