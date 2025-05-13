// /src/app/token/page.tsx

"use client";

// External libraries
import React from "react";

// Components libraries
import DynamicLoginPage from "@/components/logins/DynamicLogin";
import NFTFallback from "@/components/nfts/NFTFallback";

export default function FallbackNFT() {
  return <DynamicLoginPage ContentComponent={NFTFallback} />;
}
