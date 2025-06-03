// /src/components/terms/TermsHeader.tsx

"use client";

// External libraries
import React from "react";

// Blockchain configurations
import { getActiveReceipt } from "@/config/receipts";

export default function TermsHeader() {
  const { receipt } = getActiveReceipt();

  return (
    <div className="text-center">
      <h1
        style={{ color: receipt.colorSecondary }}
        className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal"
        aria-label={receipt.termsAria1}>
        {receipt.termsTitle}
      </h1>
      <span
        style={{ color: receipt.colorSekunder }}
        className="text-xs leading-10">
        &#9673; &#9673; &#9673; &#9673;
      </span>
      <h2
        style={{ color: receipt.colorSekunder }}
        className="text-sm font-medium"
        aria-label={receipt.termsAria2}>
        {receipt.termsUpdate}
      </h2>
    </div>
  );
}
