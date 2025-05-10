// /src/app/page.tsx

"use client";

// External libraries
import React from "react";

// Components libraries
import FeaturedCards from "@/components/contents/FeaturedCards";
import DynamicLoginPage from "@/components/logins/DynamicLogin";

export default function Home() {
  return <DynamicLoginPage ContentComponent={FeaturedCards} />;
}
