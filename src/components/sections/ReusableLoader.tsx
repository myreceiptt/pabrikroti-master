// /src/components/sections/ReusableLoader.tsx

// External libraries
import React from "react";

// Blockchain configurations
import { getActiveReceipt } from "@/config/receipts";

interface LoaderProps {
  message: string;
}

export default function Loader({ message }: LoaderProps) {
  const { receipt } = getActiveReceipt();

  return (
    <p
      style={{ color: receipt.colorSekunder }}
      className="text-left text-sm font-medium">
      {message}
    </p>
  );
}
