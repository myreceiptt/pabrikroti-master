// /src/components/terms/TermsDivider.tsx

"use client";

// External libraries
import React from "react";

// Blockchain configurations
import { getActiveReceipt } from "@/config/receipts";

const { receipt } = getActiveReceipt();

export default function TermsDivider() {
  return (
    <div className="text-center">
      <span style={{ color: receipt.colorIcon }} className="text-xs leading-10">
        &#9673; &#9673; &#9673; &#9673;
      </span>
    </div>
  );
}
