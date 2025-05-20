// /src/app/paid/page.tsx

"use client";

// External libraries
import React from "react";

// Components libraries
import DynamicLoginPage from "@/components/logins/DynamicLogin";
import NFTsList from "@/components/nfts/NFTsList";

const PaidNFTsList = () => <NFTsList variant="paid" />;

export default function PagePaid() {
  return <DynamicLoginPage ContentComponent={PaidNFTsList} />;
}
