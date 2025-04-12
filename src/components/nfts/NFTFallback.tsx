// /src/components/nfts/NFTFallback.tsx

"use client";

// External libraries
import React from "react";

// Blockchain configurations
import { fallMessage1, fallMessage2, fallMessage3 } from "@/config/myreceipt";

// Components libraries
import Message from "@/components/sections/ReusableMessage";

const NFTFallback: React.FC = () => {
  return (
    <main className="grid gap-4 place-items-center">
      <Message
        message1={fallMessage1}
        message2={fallMessage2}
        message3={fallMessage3}
      />
    </main>
  );
};

export default NFTFallback;
