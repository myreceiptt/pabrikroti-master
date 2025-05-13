// /src/app/search/page.tsx

"use client";

// External libraries
import React from "react";

// Components libraries
import SearchWrapper from "@/components/contents/SearchWrapper";
import DynamicLoginPage from "@/components/logins/DynamicLogin";

export default function PageSearch() {
  return <DynamicLoginPage ContentComponent={SearchWrapper} />;
}
