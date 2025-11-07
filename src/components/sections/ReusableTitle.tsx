// /src/components/sections/ReusableTitle.tsx

// External libraries
import React from "react";

// Blockchain configurations
import { getActiveReceipt } from "@/config/receipts";

interface TitleProps {
  title1: string;
  title2: string;
}

export default function Title({ title1, title2 }: TitleProps) {
  const { receipt } = getActiveReceipt();

  return (
    <div className="w-full flex flex-col gap-2 sm:items-start items-center">
      <h1
        style={{
          color: receipt.colorPrimer,
        }}
        className="text-center sm:text-left text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold"
      >
        {title1}
      </h1>
      <h2
        style={{
          color: receipt.colorPrimer,
        }}
        className="text-center sm:text-left text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold"
      >
        {title2}
      </h2>
    </div>
  );
}
