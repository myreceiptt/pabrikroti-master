// /src/app/coins/page.tsx

"use client";

// External libraries
import React from "react";

// Components libraries
import CoinsList from "@/components/fts/CoinsList";
import DynamicLoginPage from "@/components/logins/DynamicLogin";

export default function PageCoins() {
  return <DynamicLoginPage ContentComponent={CoinsList} />;
}
