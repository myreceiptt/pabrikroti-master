// /src/components/nfts/NFTFallback.tsx

"use client";

// External libraries
import React from "react";

// Blockchain configurations
import { getActiveReceipt } from "@/config/receipts";

// Components libraries
import Message from "@/components/sections/ReusableMessage";

const { nftFallMessage1, nftFallMessage2, nftsMessage3 } = getActiveReceipt();

export default function NFTFallback() {
  return (
    <main className="grid gap-4 place-items-center">
      <Message
        message1={nftFallMessage1}
        message2={nftFallMessage2}
        message3={nftsMessage3}
      />
    </main>
  );
}
