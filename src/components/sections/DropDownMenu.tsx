// /src/components/sections/DropDownMenu.tsx

"use client";

// External libraries
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaBars } from "react-icons/fa6";

// Blockchain configurations
import { getActiveReceipt } from "@/config/receipts";
import { hexToRgba } from "@/config/utils";

const { receipt } = getActiveReceipt();

export default function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close when clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={menuRef} className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          backgroundColor: receipt.colorTertiary,
          color: receipt.colorSekunder,
        }}
        className="w-10 h-10 flex items-center justify-center text-xl rounded-lg cursor-pointer"
        aria-label="Drop Down Menu">
        <FaBars />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="dropdown"
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.47, ease: "easeOut" }}
            style={{
              backgroundColor: receipt.colorTertiary,
            }}
            className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-lg shadow-lg focus:outline-none text-sm">
            <div
              style={{
                color: receipt.colorSecondary,
              }}
              className="text-xs sm:text-sm md:text-base font-semibold px-4 pt-2">
              <Link href="/">{receipt.ddMenuHome}</Link>
            </div>
            <ul
              style={{
                color: receipt.colorSecondary,
              }}
              className="text-xs sm:text-sm md:text-base font-normal px-4 pb-4 space-y-1">
              <li>
                <Link href="/#what">{receipt.ddMenuWhat}</Link>
              </li>
              <li>
                <Link href="/#why">{receipt.ddMenuWhy}</Link>
              </li>
              <li>
                <Link href="/#how">{receipt.ddMenuHow}</Link>
              </li>
              <li>
                <Link href="/#when">{receipt.ddMenuWhen}</Link>
              </li>
              <li>
                <Link href="/#where">{receipt.ddMenuWhere}</Link>
              </li>
              <li>
                <Link href="/#who">{receipt.ddMenuWho}</Link>
              </li>
            </ul>

            <div
              style={{
                color: receipt.colorSecondary,
                borderColor: hexToRgba(receipt.colorSekunder, 0.7),
              }}
              className="text-xs sm:text-sm md:text-base font-semibold px-4 pt-2 border-t">
              <Link href="/featured">{receipt.ddMenuFeatured}</Link>
            </div>
            <ul
              style={{
                color: receipt.colorSecondary,
              }}
              className="text-xs sm:text-sm md:text-base font-normal px-4 pb-4 space-y-1">
              <li>
                <Link href="/free">{receipt.ddMenuFree}</Link>
              </li>
              <li>
                <Link href="/paid">{receipt.ddMenuPaid}</Link>
              </li>
              <li>
                <Link href="/coins">{receipt.ddMenuCoins}</Link>
              </li>
            </ul>

            <div
              style={{
                color: receipt.colorSecondary,
                borderColor: hexToRgba(receipt.colorSekunder, 0.7),
              }}
              className="text-xs sm:text-sm md:text-base font-semibold px-4 pt-2 border-t">
              {receipt.ddMenuMore}
            </div>
            <ul
              style={{
                color: receipt.colorSecondary,
              }}
              className="text-xs sm:text-sm md:text-base font-normal px-4 pb-4 space-y-1">
              <li>
                <Link href="/deploy" target="_blank">
                  {receipt.ddMenuDeploy}
                </Link>
              </li>
              <li>
                <Link href="/contact" target="_blank">
                  {receipt.ddMenuContact}
                </Link>
              </li>
              <li>
                <Link href="/terms" target="_blank">
                  {receipt.ddMenuTerms}
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
