// /src/app/free/page.tsx

"use client";

// External libraries
import React from "react";

// Components libraries
import SouvenirsList from "@/components/contents/SouvenirsList";
import DynamicLoginPage from "@/components/logins/DynamicLogin";

const pageTitle1 = "Freemium";
const pageTitle2 = "Virtual Collectibles";
const tokenIds = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
];

const PageFree: React.FC = () => (
  <DynamicLoginPage
    ContentComponent={() => (
      <SouvenirsList
        tokenIds={tokenIds}
        title1={pageTitle1}
        title2={pageTitle2}
      />
    )}
  />
);

export default PageFree;
