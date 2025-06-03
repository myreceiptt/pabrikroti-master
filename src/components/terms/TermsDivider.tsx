// /src/components/terms/TermsDivider.tsx

"use client";

// External libraries
import React from "react";

// Blockchain configurations
import { getActiveReceipt } from "@/config/receipts";

export default function TermsDivider() {
  const { receipt } = getActiveReceipt();

  return (
    <div className="text-center">
      <span
        style={{ color: receipt.colorSekunder }}
        className="text-xs leading-10">
        &#9673; &#9673; &#9673; &#9673;
      </span>
    </div>
  );
}
