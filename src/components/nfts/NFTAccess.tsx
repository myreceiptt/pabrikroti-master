// /src/components/nfts/NFTAccess.tsx

// External libraries
import Image from "next/image";
import React from "react";

// Blockchain configurations
import { getActiveReceipt } from "@/config/receipts";

interface NFTAccessProps {
  message: string;
  onRedirect: () => void;
}

export default function NFTAccess({ message, onRedirect }: NFTAccessProps) {
  const { receipt } = getActiveReceipt();

  return (
    <>
      {/* Top Section - Content Box */}
      <div className="w-full flex flex-col gap-2 items-center justify-center text-center px-0 sm:px-4">
        <h2
          style={{ color: receipt.colorPrimer }}
          className="text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal">
          {message}
        </h2>
        <h3
          style={{ color: receipt.colorSekunder }}
          className="text-center text-sm font-medium">
          {receipt.nftAccessMessage}
        </h3>
      </div>
      <div className="grid grid-cols-1 mt-2 md:mt-4 mb-4 md:mb-8 lg:mb-12">
        {/* Collect Button */}
        <button
          type="button"
          style={{
            color: receipt.colorSecondary,
            backgroundColor: receipt.colorSekunder,
          }}
          className="rounded-lg py-4 px-12 text-base font-semibold cursor-pointer"
          onClick={onRedirect}>
          {receipt.nftAccessButton}
        </button>
      </div>

      {/* Bottom Section - Background Image */}
      <div className="bottom-0 left-0 w-full h-full">
        <Image
          src={receipt.nftAccessBanner}
          alt={receipt.proTitle}
          width={4096}
          height={1109}
          className="rounded-xl md:rounded-2xl lg:rounded-3xl"
          objectFit="cover"
          objectPosition="top"
          priority
        />
      </div>
    </>
  );
}
