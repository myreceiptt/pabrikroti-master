// /src/components/terms/TermsDivider.tsx

"use client";

// External libraries
import React from "react";

// Blockchain configurations
import { colorIcon } from "@/config/myreceipt";

export default function TermsDivider() {
  return (
    <div className="text-center">
      <span style={{ color: colorIcon }} className="text-xs leading-10">
        &#9673; &#9673; &#9673; &#9673;
      </span>
    </div>
  );
}
