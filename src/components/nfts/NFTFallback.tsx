// /src/components/nfts/NFTFallback.tsx

"use client";

// External libraries
import React from "react";

// Blockchain configurations
import { getActiveReceipt } from "@/config/receipts";

// Components libraries
import Message from "@/components/sections/ReusableMessage";

const { receipt } = getActiveReceipt();

export default function NFTFallback() {
  return (
    <main className="grid gap-4 place-items-center">
      <Message
        message1={receipt.nftFallMessage1}
        message2={receipt.nftFallMessage2}
        message3={receipt.nftsMessage3}
      />
    </main>
  );
}
