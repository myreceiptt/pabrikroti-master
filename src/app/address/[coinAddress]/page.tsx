// /src/app/address/[coinAddress]/page.tsx

"use client";

// External libraries
import React from "react";

// Components libraries
import CoinDetails from "@/components/fts/CoinDetails";
import DynamicLoginPage from "@/components/logins/DynamicLogin";

const PageFT: React.FC = () => (
  <DynamicLoginPage ContentComponent={() => <CoinDetails />} />
);

export default PageFT;
