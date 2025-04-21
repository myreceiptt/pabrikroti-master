// /src/app/paid/page.tsx

"use client";

// External libraries
import React from "react";

// Components libraries
import NFTsList from "@/components/nfts/NFTsList";
import DynamicLoginPage from "@/components/logins/DynamicLogin";

const PagePaid: React.FC = () => (
  <DynamicLoginPage ContentComponent={() => <NFTsList variant="paid" />} />
);

export default PagePaid;
