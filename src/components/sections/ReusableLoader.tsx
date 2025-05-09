// /src/components/sections/ReusableLoader.tsx

// External libraries
import React from "react";

// Blockchain configurations
import { colorAccent } from "@/config/myreceipt";

interface LoaderProps {
  message: string;
}

export default function Loader({ message }: LoaderProps) {
  return (
    <p style={{ color: colorAccent }} className="text-left text-sm font-medium">
      {message}
    </p>
  );
}
