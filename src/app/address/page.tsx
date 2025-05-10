// /src/app/address/page.tsx

"use client";

// External libraries
import React from "react";

// Components libraries
import CoinFallback from "@/components/fts/CoinFallback";
import DynamicLoginPage from "@/components/logins/DynamicLogin";

export default function FallbackFT() {
  return <DynamicLoginPage ContentComponent={CoinFallback} />;
}
