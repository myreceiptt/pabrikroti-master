// /src/app/token/[tokenId]/page.tsx

"use client";

// External libraries
import React from "react";

// Components libraries
import NFTDetails from "@/components/nfts/NFTDetails";
import DynamicLoginPage from "@/components/logins/DynamicLogin";

const PageToken: React.FC = () => (
  <DynamicLoginPage ContentComponent={() => <NFTDetails />} />
);

export default PageToken;
