// /src/components/fts/CoinFallback.tsx

"use client";

// External libraries
import React from "react";

// Blockchain configurations
import {
  coinFallMessage1,
  coinFallMessage2,
  nftFallMessage3,
} from "@/config/myreceipt";

// Components libraries
import Message from "@/components/sections/ReusableMessage";

const CoinFallback: React.FC = () => {
  return (
    <main className="grid gap-4 place-items-center">
      <Message
        message1={coinFallMessage1}
        message2={coinFallMessage2}
        message3={nftFallMessage3}
      />
    </main>
  );
};

export default CoinFallback;
