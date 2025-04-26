// /src/components/nfts/NFTFallback.tsx

"use client";

// External libraries
import React from "react";

// Blockchain configurations
import {
  nftFallMessage1,
  nftFallMessage2,
  nftsMessage3,
} from "@/config/myreceipt";

// Components libraries
import Message from "@/components/sections/ReusableMessage";

const NFTFallback: React.FC = () => {
  return (
    <main className="grid gap-4 place-items-center">
      <Message
        message1={nftFallMessage1}
        message2={nftFallMessage2}
        message3={nftsMessage3}
      />
    </main>
  );
};

export default NFTFallback;
