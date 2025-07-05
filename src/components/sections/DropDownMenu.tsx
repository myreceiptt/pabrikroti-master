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
            <li
              onClick={() => setIsOpen(!isOpen)}
              style={liStyle("/")}
              className={liClass("/")}>
              <Link href="/" className={linkClass("/")}>
                {receipt.ddMenuHome}
              </Link>
            </li>

            {/* Sub Section 1: Home Navigation */}
            <ul className="pl-4 rounded-lg divide-y divide-double">
              <li
                onClick={() => setIsOpen(!isOpen)}
                style={liStyle("/#what")}
                className={liClass("/#what")}>
                <Link href="/#what" className={linkClass("/#what")}>
                  {receipt.ddMenuWhat}
                </Link>
              </li>
              <li
                onClick={() => setIsOpen(!isOpen)}
                style={liStyle("/#why")}
                className={liClass("/#why")}>
                <Link href="/#why" className={linkClass("/#why")}>
                  {receipt.ddMenuWhy}
                </Link>
              </li>
              <li
                onClick={() => setIsOpen(!isOpen)}
                style={liStyle("/#how")}
                className={liClass("/#how")}>
                <Link href="/#how" className={linkClass("/#how")}>
                  {receipt.ddMenuHow}
                </Link>
              </li>
              <li
                onClick={() => setIsOpen(!isOpen)}
                style={liStyle("/#when")}
                className={liClass("/#when")}>
                <Link href="/#when" className={linkClass("/#when")}>
                  {receipt.ddMenuWhen}
                </Link>
              </li>
              <li
                onClick={() => setIsOpen(!isOpen)}
                style={liStyle("/#where")}
                className={liClass("/#where")}>
                <Link href="/#where" className={linkClass("/#where")}>
                  {receipt.ddMenuWhere}
                </Link>
              </li>
              <li
                onClick={() => setIsOpen(!isOpen)}
                style={liStyle("/#who")}
                className={liClass("/#who")}>
                <Link href="/#who" className={linkClass("/#who")}>
                  {receipt.ddMenuWho}
                </Link>
              </li>
            </ul>

            {/* Section 2: Featured Token */}
            <li
              onClick={() => setIsOpen(!isOpen)}
              style={liStyle("/featured")}
              className={liClass("/featured")}>
              <Link href="/featured" className={linkClass("/featured")}>
                {receipt.ddMenuFeatured}
              </Link>
            </li>

            {/* Sub Section 2: Featured Navigation */}
            <ul className="pl-4 rounded-lg divide-y divide-double">
              <li
                onClick={() => setIsOpen(!isOpen)}
                style={liStyle("/free")}
                className={liClass("/free")}>
                <Link href="/free" className={linkClass("/free")}>
                  {receipt.ddMenuFree}
                </Link>
              </li>
              <li
                onClick={() => setIsOpen(!isOpen)}
                style={liStyle("/paid")}
                className={liClass("/paid")}>
                <Link href="/paid" className={linkClass("/paid")}>
                  {receipt.ddMenuPaid}
                </Link>
              </li>
              <li
                onClick={() => setIsOpen(!isOpen)}
                style={liStyle("/coins")}
                className={liClass("/coins")}>
                <Link href="/coins" className={linkClass("/coins")}>
                  {receipt.ddMenuCoins}
                </Link>
              </li>
              <li
                onClick={() => setIsOpen(!isOpen)}
                style={liStyle("/market")}
                className={liClass("/market")}>
                <Link
                  href="/market"
                  target="_blank"
                  className={linkClass("/market")}>
                  {receipt.ddMenuMarket}
                </Link>
              </li>
            </ul>

            {/* Section 3: More Features */}
            <li
              onClick={() => setIsOpen(!isOpen)}
              style={liStyle("/more")}
              className={liClass("/more")}>
              <Link href="/more" target="_blank" className={linkClass("/more")}>
                {receipt.ddMenuMore}
              </Link>
            </li>

            {/* Sub Section 3: More Navigation */}
            <ul className="pl-4 rounded-lg divide-y divide-double">
              <li
                onClick={() => setIsOpen(!isOpen)}
                style={liStyle("/publish")}
                className={liClass("/publish")}>
                <Link
                  href="/publish"
                  target="_blank"
                  className={linkClass("/publish")}>
                  {receipt.ddMenuDeploy}
                </Link>
              </li>
              <li
                onClick={() => setIsOpen(!isOpen)}
                style={liStyle("/publish/nft")}
                className={liClass("/publish/nft")}>
                <Link
                  href="/publish/nft"
                  target="_blank"
                  className={linkClass("/publish/nft")}>
                  {receipt.ddMenuPublishNFT}
                </Link>
              </li>
              <li
                onClick={() => setIsOpen(!isOpen)}
                style={liStyle("/publish/ft")}
                className={liClass("/publish/ft")}>
                <Link
                  href="/publish/ft"
                  target="_blank"
                  className={linkClass("/publish/ft")}>
                  {receipt.ddMenuPublishFT}
                </Link>
              </li>
              <li
                onClick={() => setIsOpen(!isOpen)}
                style={liStyle("/dashboard")}
                className={liClass("/dashboard")}>
                <Link
                  href="/dashboard"
                  target="_blank"
                  className={linkClass("/dashboard")}>
                  {receipt.ddMenuDashBoard}
                </Link>
              </li>
              <li
                onClick={() => setIsOpen(!isOpen)}
                style={liStyle(`${receipt.ddMenuContactLink}`)}
                className={liClass(`${receipt.ddMenuContactLink}`)}>
                <Link
                  href={receipt.ddMenuContactLink}
                  target="_blank"
                  className={linkClass(`${receipt.ddMenuContactLink}`)}>
                  {receipt.ddMenuContact}
                </Link>
              </li>
              <li
                onClick={() => setIsOpen(!isOpen)}
                style={liStyle("/terms")}
                className={liClass("/terms")}>
                <Link
                  href="/terms"
                  target="_blank"
                  className={linkClass("/terms")}>
                  {receipt.ddMenuTerms}
                </Link>
              </li>
            </ul>

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
