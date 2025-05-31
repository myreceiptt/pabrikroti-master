// /src/components/sections/ReusableLoader.tsx

// External libraries
import React from "react";

// Blockchain configurations
import { getActiveReceipt } from "@/config/receipts";

const { receipt } = getActiveReceipt();

interface LoaderProps {
  message: string;
}

export default function Loader({ message }: LoaderProps) {
  return (
    <p
      style={{ color: receipt.colorSekunder }}
      className="text-left text-sm font-medium">
      {message}
    </p>
  );
}
