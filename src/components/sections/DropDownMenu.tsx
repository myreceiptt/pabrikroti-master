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

export default function DropdownMenu() {
  const { receipt } = getActiveReceipt();
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
        aria-label={receipt.ddMenuAriaLabel}>
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
              className="flex flex-col divide-y divide-dashed"
              style={{ borderColor: hexToRgba(receipt.colorSekunder, 0.3) }}>
              {/* Section 1: Home */}
              <div className="py-2 px-4">
                <Link
                  href="/"
                  className="block font-semibold text-sm sm:text-base md:text-base"
                  style={{ color: receipt.colorSecondary }}>
                  {receipt.ddMenuHome}
                </Link>
              </div>

              {/* Sub Section 1: Home Navigation */}
              <ul
                className="py-2 px-4 flex flex-col gap-1 text-xs sm:text-sm md:text-base"
                style={{ color: receipt.colorSecondary }}>
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

              {/* Section 2: Featured Token */}
              <div className="py-2 px-4">
                <Link
                  href="/featured"
                  className="block font-semibold text-sm sm:text-base md:text-base"
                  style={{ color: receipt.colorSecondary }}>
                  {receipt.ddMenuFeatured}
                </Link>
              </div>

              {/* Sub Section 2: Featured Navigation */}
              <ul
                className="py-2 px-4 flex flex-col gap-1 text-xs sm:text-sm md:text-base"
                style={{ color: receipt.colorSecondary }}>
                <li>
                  <Link href="/free">{receipt.ddMenuFree}</Link>
                </li>
                <li>
                  <Link href="/paid">{receipt.ddMenuPaid}</Link>
                </li>
                <li>
                  <Link href="/coins">{receipt.ddMenuCoins}</Link>
                </li>
                <li>
                  <Link href="/market">{receipt.ddMenuMarket}</Link>
                </li>
              </ul>

              {/* Section 3: More Features */}
              <div
                className="py-2 px-4 font-semibold text-sm sm:text-base md:text-base"
                style={{ color: receipt.colorSecondary }}>
                {receipt.ddMenuMore}
              </div>

              {/* Sub Section 3: More Navigation */}
              <ul
                className="py-2 px-4 flex flex-col gap-1 text-xs sm:text-sm md:text-base"
                style={{ color: receipt.colorSecondary }}>
                <li>
                  <Link href="/publish" target="_blank">
                    {receipt.ddMenuDeploy}
                  </Link>
                </li>
                <li>
                  <Link href="/publish/nft" target="_blank">
                    {receipt.ddMenuPublishNFT}
                  </Link>
                </li>
                <li>
                  <Link href="/publish/ft" target="_blank">
                    {receipt.ddMenuPublishFT}
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard" target="_blank">
                    {receipt.ddMenuDashBoard}
                  </Link>
                </li>
                <li>
                  <Link href={receipt.ddMenuContactLink} target="_blank">
                    {receipt.ddMenuContact}
                  </Link>
                </li>
                <li>
                  <Link href="/terms" target="_blank">
                    {receipt.ddMenuTerms}
                  </Link>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
