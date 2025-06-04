// /src/components/sections/DropDownSorter.tsx

"use client";

// External libraries
import React from "react";

// Blockchain configurations
import { getActiveReceipt } from "@/config/receipts";

interface DropDownSorterProps {
  sortOption: "default" | "availability" | "start" | "price" | "claimable";
  setSortOption: (value: DropDownSorterProps["sortOption"]) => void;
}

export default function DropDownSorter({
  sortOption,
  setSortOption,
}: DropDownSorterProps) {
  const { receipt } = getActiveReceipt();

  return (
    <div className="w-full flex gap-2 items-center sm:justify-end justify-center">
      <label htmlFor="sortSelect" className="text-sm font-medium text-right">
        {receipt.ddSorterSorting}
      </label>
      <select
        id="sortSelect"
        value={sortOption}
        onChange={(e) =>
          setSortOption(e.target.value as DropDownSorterProps["sortOption"])
        }
        style={{
          borderColor: receipt.colorTertiary,
        }}
        className="border rounded-lg px-3 py-1 text-sm">
        <option value="default">{receipt.ddSorterDefault}</option>
        <option value="availability">{receipt.ddSorterSupply}</option>
        <option value="start">{receipt.ddSorterTime}</option>
        <option value="price">{receipt.ddSorterPrice}</option>
        <option value="claimable">{receipt.ddSorterClaim}</option>
      </select>
    </div>
  );
}
