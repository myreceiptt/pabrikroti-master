// /src/components/fts/ContentFallback.tsx

"use client";

// External libraries
import React from "react";

// Blockchain configurations
import { getActiveReceipt } from "@/config/receipts";

// Components libraries
import Message from "@/components/sections/ReusableMessage";

export default function ContentFallback() {
  const { receipt } = getActiveReceipt();

  return (
    <main className="grid gap-4 place-items-center">
      <Message
        message1={receipt.contentFallMessage1}
        message2={receipt.contentFallMessage2}
        message3={receipt.nftsMessage3}
      />
    </main>
  );
}
