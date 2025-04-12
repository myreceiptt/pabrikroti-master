// /src/app/coin/page.tsx

"use client";

// External libraries
import React from "react";

// Components libraries
import ClaimFreeCoin from "@/components/fts/ClaimFreeCoin";
import DynamicLoginPage from "@/components/logins/DynamicLogin";

const FreeCoin: React.FC = () => (
  <DynamicLoginPage ContentComponent={() => <ClaimFreeCoin />} />
);

export default FreeCoin;
