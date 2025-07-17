// /src/app/others/dao/page.tsx

"use client";

// External libraries
import React from "react";

// Components libraries
import DAOResearch from "@/components/contents/DAOResearch";
import DynamicLoginPage from "@/components/logins/DynamicLogin";

export default function PageFeatured() {
  return <DynamicLoginPage ContentComponent={DAOResearch} />;
}
