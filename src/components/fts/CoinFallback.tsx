// /src/components/fts/CoinFallback.tsx

"use client";

// External libraries
import React from "react";

// Blockchain configurations
import { getActiveReceipt } from "@/config/receipts";

// Components libraries
import Loader from "@/components/sections/ReusableLoader";
import Message from "@/components/sections/ReusableMessage";

export default function CoinFallback() {
  const { receipt } = getActiveReceipt();

  return (
    <main className="grid gap-4 lg:gap-7 place-items-center">
      <Loader message={receipt.contentFallLoader} />

      <Message
        message1={receipt.coinFallMessage1}
        message2={receipt.coinFallMessage2}
        message3={receipt.nftsMessage3}
      />
    </main>
  );
}
