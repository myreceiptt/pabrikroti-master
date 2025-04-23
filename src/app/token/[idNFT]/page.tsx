// /src/app/token/[idNFT]/page.tsx

"use client";

// External libraries
import React from "react";

// Components libraries
import DynamicLoginPage from "@/components/logins/DynamicLogin";
import NFTDetails from "@/components/nfts/NFTDetails";

const PageNFT: React.FC = () => (
  <DynamicLoginPage ContentComponent={() => <NFTDetails />} />
);

export default PageNFT;
