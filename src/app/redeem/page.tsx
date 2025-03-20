// /src/app/redeem/page.tsx

"use client";

// External libraries
import React from "react";

// Components libraries
import CoinRedeem from "@/components/contents/CoinRedeem";
import DynamicLoginPage from "@/components/logins/DynamicLogin";

const PageRedeem: React.FC = () => (
  <DynamicLoginPage ContentComponent={() => <CoinRedeem />} />
);

export default PageRedeem;
