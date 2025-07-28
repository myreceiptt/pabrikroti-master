// /src/app/publish/ft/page.tsx

"use client";

// External libraries
import React from "react";

// Components libraries
import ComingSoon from "@/components/contents/ComingSoon";
import DynamicLoginPage from "@/components/logins/DynamicLogin";

export default function PagePublishFT() {
  return <DynamicLoginPage ContentComponent={ComingSoon} />;
}
