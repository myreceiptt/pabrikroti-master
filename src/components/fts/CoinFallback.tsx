// /src/components/fts/CoinFallback.tsx

"use client";

// External libraries
import React from "react";

// Blockchain configurations
import {
  coinFallMessage1,
  coinFallMessage2,
  nftsMessage3,
} from "@/config/myreceipt";

// Components libraries
import Message from "@/components/sections/ReusableMessage";

export default function CoinFallback() {
  return (
    <main className="grid gap-4 place-items-center">
      <Message
        message1={coinFallMessage1}
        message2={coinFallMessage2}
        message3={nftsMessage3}
      />
    </main>
  );
}
