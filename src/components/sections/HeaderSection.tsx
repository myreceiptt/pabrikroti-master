// /src/components/sections/HeaderSection.tsx

// External libraries
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FaSistrix } from "react-icons/fa6";
// import { FaClockRotateLeft, FaUser, FaWallet } from "react-icons/fa6";

// Blockchain configurations
import { getActiveReceipt } from "@/config/receipts";
import { hexToRgba } from "@/config/utils";

// Components libraries
import ConnectButtons from "@/components/logins/ConnectButtons";
import DropdownMenu from "@/components/sections/DropDownMenu";
import QRCodeButton from "@/components/sections/QRCodeButton";

export default function Header() {
  const { receipt } = getActiveReceipt();

  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const mobileSearchRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Close when clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileSearchRef.current &&
        !mobileSearchRef.current.contains(event.target as Node)
      ) {
        setIsMobileSearchOpen(false);
      }
    };

    if (isMobileSearchOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileSearchOpen]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?query=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header
      style={{
        borderColor: receipt.colorTertiary,
        backgroundColor: receipt.colorSecondary,
      }}
      className="w-full flex items-center justify-between py-4 px-4 md:px-20 bg-transparent border-b"
    >
      {/* Logo Section */}
      <div className="w-full sm:w-1/2 flex justify-start">
        <Link href="/">
          <Image
            src={receipt.headerLogo}
            alt={receipt.proTitle}
            width={1200}
            height={400}
            sizes="(max-width: 425px) 150vw, (max-width: 768px) 100vw, 50vw"
            className="h-auto w-auto object-contain"
          />
        </Link>
      </div>

      <div className="w-1/2 flex justify-end gap-4">
        {/* Search Bar (Desktop View: Min Width 640px) */}
        <form
          onSubmit={handleSearch}
          style={{
            backgroundColor: receipt.colorPrimary,
          }}
          className="w-full hidden sm:flex items-center justify-center px-4 py-2 rounded-lg"
        >
          <FaSistrix
            onClick={handleSearch}
            style={{ color: hexToRgba(receipt.colorSekunder, 0.7) }}
            className="w-5 h-5 cursor-pointer"
          />
          <input
            type="text"
            aria-label={receipt.headerSearch}
            placeholder={receipt.headerSearchPH}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ color: hexToRgba(receipt.colorSekunder, 0.7) }}
            className="ml-2 w-full bg-transparent outline-hidden text-xs md:text-sm"
          />
        </form>

        {/* Icons Section */}
        <div ref={mobileSearchRef} className="flex space-x-4">
          {/* Mobile Search Button (Below 640px) */}
          <button
            onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
            style={{
              color: receipt.colorSecondary,
              borderColor: receipt.colorTertiary,
              backgroundColor: hexToRgba(receipt.colorSekunder, 0.7),
            }}
            className="sm:hidden w-10 h-10 flex items-center justify-center text-xl border rounded-lg cursor-pointer"
            aria-label="Mobile Search Button"
          >
            <FaSistrix />
          </button>

          {/* Mobile Search Input (Visible When Button Clicked) */}
          <AnimatePresence>
            {isMobileSearchOpen && (
              <motion.form
                key="mobile-search"
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.47, ease: "easeOut" }}
                onSubmit={handleSearch}
                style={{
                  borderColor: receipt.colorTertiary,
                  backgroundColor: receipt.colorPrimary,
                }}
                className="absolute top-16 left-0 w-full px-4 py-2 flex items-center shadow-md z-10 border rounded-lg"
              >
                <FaSistrix
                  onClick={handleSearch}
                  style={{ color: hexToRgba(receipt.colorSekunder, 0.7) }}
                  className="w-5 h-5 cursor-pointer"
                />
                <input
                  type="text"
                  aria-label={receipt.headerSearch}
                  placeholder={receipt.headerSearchPH}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{ color: hexToRgba(receipt.colorSekunder, 0.7) }}
                  className="ml-2 w-full bg-transparent outline-none text-sm"
                />
                <button
                  type="submit"
                  style={{ color: hexToRgba(receipt.colorSekunder, 0.7) }}
                  className="text-sm font-semibold px-4 cursor-pointer"
                >
                  {receipt.headerGo}
                </button>
              </motion.form>
            )}
          </AnimatePresence>

          {/* Other Buttons */}
          <ConnectButtons />
          {/* <button className="sm:w-10 w-8 sm:h-10 h-8 flex items-center justify-center text-xl rounded-lg bg-box-icon text-icon-wording">
            <Link href="/user">
              <FaUser />
            </Link>
          </button>
          <button className="sm:w-10 w-8 sm:h-10 h-8 flex items-center justify-center text-xl rounded-lg bg-box-icon text-icon-wording">
            <Link href="/wallet">
              <FaWallet />
            </Link>
          </button>
          <button className="sm:w-10 w-8 sm:h-10 h-8 flex items-center justify-center text-xl rounded-lg bg-box-icon text-icon-wording">
            <Link href="/records">
              <FaClockRotateLeft />
            </Link>
          </button> */}
          <QRCodeButton />
          <DropdownMenu />
        </div>
      </div>
    </header>
  );
}
