// /src/components/landing/HeroSection.tsx

// Blockchain configurations
import { getActiveReceipt } from "@/config/receipts";

const { receipt } = getActiveReceipt();

export default function HeroSection() {
  return (
    <section
      style={{
        backgroundColor: receipt.colorTertiary,
        borderColor: receipt.colorTertiary,
      }}
      className="relative w-full flex items-center justify-center px-6 py-16 border">
      <div className="max-w-4xl text-center space-y-6">
        <h1
          style={{
            color: receipt.colorSecondary,
          }}
          className="text-4xl md:text-6xl font-bold tracking-tight">
          NFT FOR A REASON
        </h1>
        <p
          style={{
            color: receipt.colorSekunder,
          }}
          className="text-lg md:text-xl text-gray-700">
          A Web3 Initiative for Grassroots Culture &amp; Creative Solidarity
        </p>
      </div>
    </section>
  );
}
