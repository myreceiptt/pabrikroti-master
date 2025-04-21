// /src/app/token/page.tsx

"use client";

// External libraries
import React from "react";

// Components libraries
import NFTFallback from "@/components/nfts/NFTFallback";
import DynamicLoginPage from "@/components/logins/DynamicLogin";

const FallbackNFT: React.FC = () => (
  <DynamicLoginPage ContentComponent={() => <NFTFallback />} />
);

export default FallbackNFT;
