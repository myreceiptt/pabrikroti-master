// /src/components/sections/DropDownSorter.tsx

"use client";

// External libraries
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useRef, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa6";

// Blockchain configurations
import { getActiveReceipt } from "@/config/receipts";

interface DropDownSorterProps {
  sortOption: "default" | "availability" | "start" | "price" | "claimable";
  setSortOption: (value: DropDownSorterProps["sortOption"]) => void;
}

const sortOptions: DropDownSorterProps["sortOption"][] = [
  "default",
  "availability",
  "start",
  "price",
  "claimable",
];

export default function DropDownSorter({
  sortOption,
  setSortOption,
}: DropDownSorterProps) {
  const { receipt } = getActiveReceipt();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const labelMap = {
    default: receipt.ddSorterDefault,
    availability: receipt.ddSorterSupply,
    start: receipt.ddSorterTime,
    price: receipt.ddSorterPrice,
    claimable: receipt.ddSorterClaim,
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full flex gap-2 items-center sm:justify-end justify-center">
      <label
        htmlFor="sortSelect"
        style={{ color: receipt.colorTersier }}
        className="text-sm font-medium text-right"
      >
        {receipt.ddSorterSorting}
      </label>

      <div ref={dropdownRef} className="relative min-w-[160px] text-sm">
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            color: receipt.colorSekunder,
            borderColor: receipt.colorTertiary,
            backgroundColor: receipt.colorSecondary,
          }}
          className="w-full flex justify-between items-center border rounded-lg px-3 py-1 cursor-pointer"
        >
          <span>{labelMap[sortOption]}</span>
          <FaChevronDown
            style={{ color: receipt.colorSekunder }}
            className="ml-2"
          />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.ul
              key="dropdown"
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.47, ease: "easeOut" }}
              style={{
                color: receipt.colorSecondary,
                borderColor: receipt.colorTertiary,
                backgroundColor: receipt.colorSekunder,
              }}
              className="absolute z-50 mt-1 w-full border rounded-lg divide-y divide-double"
            >
              {sortOptions.map((option) => (
                <li
                  key={option}
                  onClick={() => {
                    setSortOption(option);
                    setIsOpen(false);
                  }}
                  style={{
                    backgroundColor:
                      sortOption === option
                        ? receipt.colorTersier
                        : receipt.colorSekunder,
                  }}
                  className={`px-4 py-2 rounded-lg ${
                    sortOption === option
                      ? "font-semibold cursor-default"
                      : "hover:opacity-75 cursor-pointer"
                  }`}
                >
                  {labelMap[option]}
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
