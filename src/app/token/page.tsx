// /src/app/token/page.tsx

"use client";

// External libraries
import React from "react";

// Components libraries
import TokenFallback from "@/components/contents/TokenFallback";
import DynamicLoginPage from "@/components/logins/DynamicLogin";

const FallbackPage: React.FC = () => (
  <DynamicLoginPage ContentComponent={() => <TokenFallback />} />
);

export default FallbackPage;
