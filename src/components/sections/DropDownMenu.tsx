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

  // Active URL for menu
  const isActive = (href: string) => {
    if (typeof window === "undefined") return false;
    const fullPath = window.location.pathname + window.location.hash;
    return fullPath === href;
  };
  const liStyle = (href: string) => ({
    backgroundColor: isActive(href)
      ? receipt.colorTersier
      : receipt.colorSekunder,
  });
  const liClass = (href: string) =>
    `px-4 py-2 rounded-lg ${
      isActive(href)
        ? "font-semibold cursor-default"
        : "hover:opacity-75 cursor-pointer"
    }`;
  const linkClass = (href: string) =>
    `${isActive(href) ? "cursor-default" : "cursor-pointer"}`;

  return (
    <div ref={menuRef} className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          color: receipt.colorSecondary,
          borderColor: receipt.colorTertiary,
          backgroundColor: hexToRgba(receipt.colorSekunder, 0.7),
        }}
        className="w-10 h-10 flex items-center justify-center text-xl border rounded-lg cursor-pointer"
        aria-label={receipt.ddMenuAria}>
        <FaBars />
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
            className="absolute right-0 z-40 mt-1 w-56 origin-top-right text-sm border rounded-lg divide-y divide-double">
            {/* Section 1: Home */}
            {receipt.ddMenuHome && (
              <li
                onClick={() => setIsOpen(false)}
                style={liStyle("/")}
                className={liClass("/")}>
                <Link href="/" className={linkClass("/")}>
                  {receipt.ddMenuHome}
                </Link>
              </li>
            )}

            {/* Sub Section 1 */}
            {[
              { href: "/#what", label: receipt.ddMenuWhat },
              { href: "/#why", label: receipt.ddMenuWhy },
              { href: "/#how", label: receipt.ddMenuHow },
              { href: "/#when", label: receipt.ddMenuWhen },
              { href: "/#where", label: receipt.ddMenuWhere },
              { href: "/#who", label: receipt.ddMenuWho },
            ].filter((item) => item.label).length > 0 && (
              <ul className="pl-4 rounded-lg divide-y divide-double">
                {[
                  { href: "/#what", label: receipt.ddMenuWhat },
                  { href: "/#why", label: receipt.ddMenuWhy },
                  { href: "/#how", label: receipt.ddMenuHow },
                  { href: "/#when", label: receipt.ddMenuWhen },
                  { href: "/#where", label: receipt.ddMenuWhere },
                  { href: "/#who", label: receipt.ddMenuWho },
                ]
                  .filter((item) => item.label)
                  .map((item) => (
                    <li
                      key={item.href}
                      onClick={() => setIsOpen(false)}
                      style={liStyle(item.href)}
                      className={liClass(item.href)}>
                      <Link href={item.href} className={linkClass(item.href)}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
              </ul>
            )}

            {/* Section 2: Featured */}
            {receipt.ddMenuFeatured && (
              <li
                onClick={() => setIsOpen(false)}
                style={liStyle("/featured")}
                className={liClass("/featured")}>
                <Link href="/featured" className={linkClass("/featured")}>
                  {receipt.ddMenuFeatured}
                </Link>
              </li>
            )}

            {/* Sub Section 2 */}
            {[
              { href: "/free", label: receipt.ddMenuFree },
              { href: "/paid", label: receipt.ddMenuPaid },
              { href: "/coins", label: receipt.ddMenuCoins },
              { href: "/market", label: receipt.ddMenuMarket },
              { href: "/others/perks", label: receipt.ddMenuContent },
            ].filter((item) => item.label).length > 0 && (
              <ul className="pl-4 rounded-lg divide-y divide-double">
                {[
                  { href: "/free", label: receipt.ddMenuFree },
                  { href: "/paid", label: receipt.ddMenuPaid },
                  { href: "/coins", label: receipt.ddMenuCoins },
                  { href: "/market", label: receipt.ddMenuMarket },
                  { href: "/others/perks", label: receipt.ddMenuContent },
                ]
                  .filter((item) => item.label)
                  .map((item) => (
                    <li
                      key={item.href}
                      onClick={() => setIsOpen(false)}
                      style={liStyle(item.href)}
                      className={liClass(item.href)}>
                      <Link href={item.href} className={linkClass(item.href)}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
              </ul>
            )}

            {/* Section 3: More */}
            {receipt.ddMenuMore && (
              <li
                onClick={() => setIsOpen(false)}
                style={liStyle("/more")}
                className={liClass("/more")}>
                <Link
                  href="/more"
                  target="_blank"
                  className={linkClass("/more")}>
                  {receipt.ddMenuMore}
                </Link>
              </li>
            )}

            {/* Sub Section 3 */}
            {[
              { href: "/publish", label: receipt.ddMenuDeploy },
              { href: "/publish/nft", label: receipt.ddMenuPublishNFT },
              { href: "/publish/ft", label: receipt.ddMenuPublishFT },
              { href: "/dashboard", label: receipt.ddMenuDashBoard },
              { href: receipt.ddMenuContactLink, label: receipt.ddMenuContact },
              { href: "/terms", label: receipt.ddMenuTerms },
            ].filter((item) => item.label).length > 0 && (
              <ul className="pl-4 rounded-lg divide-y divide-double">
                {[
                  { href: "/publish", label: receipt.ddMenuDeploy },
                  { href: "/publish/nft", label: receipt.ddMenuPublishNFT },
                  { href: "/publish/ft", label: receipt.ddMenuPublishFT },
                  { href: "/dashboard", label: receipt.ddMenuDashBoard },
                  {
                    href: receipt.ddMenuContactLink,
                    label: receipt.ddMenuContact,
                  },
                  { href: "/terms", label: receipt.ddMenuTerms },
                ]
                  .filter((item) => item.label)
                  .map((item) => (
                    <li
                      key={item.href}
                      onClick={() => setIsOpen(false)}
                      style={liStyle(item.href)}
                      className={liClass(item.href)}>
                      <Link
                        href={item.href}
                        target="_blank"
                        className={linkClass(item.href)}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
              </ul>
            )}

            <div
              onClick={() => setIsOpen(!isOpen)}
              style={{ color: receipt.colorTertiary }}
              className="flex flex-col divide-y divide-dashed"></div>
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
