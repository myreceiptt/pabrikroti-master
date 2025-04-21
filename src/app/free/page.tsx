// /src/app/free/page.tsx

"use client";

// External libraries
import React from "react";

// Components libraries
import NFTsList from "@/components/nfts/NFTsList";
import DynamicLoginPage from "@/components/logins/DynamicLogin";

const PageFree: React.FC = () => (
  <DynamicLoginPage ContentComponent={() => <NFTsList variant="free" />} />
);

export default PageFree;
