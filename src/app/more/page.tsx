// /src/app/more/page.tsx

"use client";

// External libraries
import React from "react";

// Components libraries
import ComingSoon from "@/components/contents/ComingSoon";
import DynamicLoginPage from "@/components/logins/DynamicLogin";

export default function PageMore() {
  return <DynamicLoginPage ContentComponent={ComingSoon} />;
}
