// /src/app/free/page.tsx

"use client";

// External libraries
import React from "react";

// Components libraries
import FreeClaim from "@/components/contents/FreeClaim";
import DynamicLoginPage from "@/components/logins/DynamicLogin";

const PageToken: React.FC = () => (
  <DynamicLoginPage ContentComponent={() => <FreeClaim />} />
);

export default PageToken;
