// /src/components/terms/TermsHeader.tsx

"use client";

// External libraries
import React from "react";

// Blockchain configurations
import { getActiveReceipt } from "@/config/receipts";

const {
  colorSecondary,
  colorIcon,
  termsTitle,
  termsUpdate,
  termsAria1,
  termsAria2,
} = getActiveReceipt();

export default function TermsHeader() {
  return (
    <div className="text-center">
      <h1
        style={{ color: colorSecondary }}
        className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal"
        aria-label={termsAria1}>
        {termsTitle}
      </h1>
      <span style={{ color: colorIcon }} className="text-xs leading-10">
        &#9673; &#9673; &#9673; &#9673;
      </span>
      <h2
        style={{ color: colorIcon }}
        className="text-sm font-medium"
        aria-label={termsAria2}>
        {termsUpdate}
      </h2>
    </div>
  );
}
