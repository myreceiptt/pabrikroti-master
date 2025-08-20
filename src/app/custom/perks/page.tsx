// /src/app/custom/perks/page.tsx

"use client";

// External libraries
import React from "react";

// Components libraries
import PerksPage from "@/components/contents/PerksPage";
import DynamicLoginPage from "@/components/logins/DynamicLogin";

export default function PagePerks() {
  return <DynamicLoginPage ContentComponent={PerksPage} />;
}
