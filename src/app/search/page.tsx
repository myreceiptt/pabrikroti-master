// /src/app/search/page.tsx

"use client";

// External libraries
import { Suspense } from "react";

// Components libraries
import SearchWrapper from "@/components/contents/SearchWrapper";
import DynamicLoginPage from "@/components/logins/DynamicLogin";

const SearchPage = () => {
  return (
    <Suspense
      fallback={<p className="text-lg text-center">Loading Search...</p>}>
      <DynamicLoginPage ContentComponent={SearchWrapper} />
    </Suspense>
  );
};

export default SearchPage;
