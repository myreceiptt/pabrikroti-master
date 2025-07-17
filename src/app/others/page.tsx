// /src/app/others/page.tsx

"use client";

// External libraries
import React from "react";

// Components libraries
import ContentFallback from "@/components/contents/ContentFallback";
import DynamicLoginPage from "@/components/logins/DynamicLogin";

export default function FallbackContent() {
  return <DynamicLoginPage ContentComponent={ContentFallback} />;
}
