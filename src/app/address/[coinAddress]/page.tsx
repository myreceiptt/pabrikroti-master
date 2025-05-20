// /src/app/address/[coinAddress]/page.tsx

"use client";

// External libraries
import React from "react";

// Components libraries
import CoinDetails from "@/components/fts/CoinDetails";
import DynamicLoginPage from "@/components/logins/DynamicLogin";

export default function PageFT() {
  return <DynamicLoginPage ContentComponent={CoinDetails} />;
}
