// /src/app/free/page.tsx

"use client";

// External libraries
import React from "react";

// Components libraries
import DynamicLoginPage from "@/components/logins/DynamicLogin";
import NFTsList from "@/components/nfts/NFTsList";

const PageFree: React.FC = () => (
  <DynamicLoginPage ContentComponent={() => <NFTsList variant="free" />} />
);

export default PageFree;
