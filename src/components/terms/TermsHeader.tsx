// /src/components/terms/TermsHeader.tsx

"use client";

// External libraries
import React from "react";

// Blockchain configurations
import {
  colorSecondary,
  colorIcon,
  termsTitle,
  termsUpdate,
} from "@/config/myreceipt";

export default function TermsHeader() {
  return (
    <div className="text-center">
      <h1
        style={{ color: colorSecondary }}
        className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal">
        {termsTitle}
      </h1>
      <span style={{ color: colorIcon }} className="text-xs leading-10">
        &#9673; &#9673; &#9673; &#9673;
      </span>
      <h2 style={{ color: colorIcon }} className="text-sm font-medium">
        {termsUpdate}
      </h2>
    </div>
  );
}
