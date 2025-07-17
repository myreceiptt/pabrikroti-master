// /src/app/others/nfts/page.tsx

"use client";

// External libraries
import React from "react";

// Components libraries
import NFTsResearch from "@/components/contents/NFTsResearch";
import DynamicLoginPage from "@/components/logins/DynamicLogin";

export default function PageFeatured() {
  return <DynamicLoginPage ContentComponent={NFTsResearch} />;
}
