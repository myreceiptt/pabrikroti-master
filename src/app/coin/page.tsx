// /src/app/coin/page.tsx

"use client";

// External libraries
import React from "react";

// Components libraries
import CoinsList from "@/components/fts/CoinsList";
import DynamicLoginPage from "@/components/logins/DynamicLogin";

const FreeCoin: React.FC = () => (
  <DynamicLoginPage ContentComponent={() => <CoinsList variant="free" />} />
);

export default FreeCoin;
