// /src/app/token/[tokenId]/page.tsx

"use client";

// External libraries
import React from "react";

// Components libraries
import SouvenirDetails from "@/components/contents/SouvenirDetails";
import DynamicLoginPage from "@/components/logins/DynamicLogin";

const PageToken: React.FC = () => (
  <DynamicLoginPage ContentComponent={() => <SouvenirDetails />} />
);

export default PageToken;
