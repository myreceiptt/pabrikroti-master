// /src/components/sections/HeaderSection.tsx

// External libraries
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaSistrix } from "react-icons/fa6";
// import { FaClockRotateLeft, FaUser, FaWallet } from "react-icons/fa6";

// Blockchain configurations
import { getActiveReceipt } from "@/config/receipts";

// Components libraries
import ConnectButtons from "@/components/logins/ConnectButtons";
import QRCodeButton from "@/components/sections/QRCodeButton";

const { receipt } = getActiveReceipt();

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?query=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header
      style={{ backgroundColor: receipt.colorPrimary }}
      className="w-full flex items-center justify-between py-4 px-4 md:px-20">
      {/* Logo Section */}
      <div className="w-1/2 flex justify-start">
        <Link href="/">
          <Image
            src={receipt.headerLogo}
            alt={receipt.proTitle}
            width={2400}
            height={400}
            sizes="(max-width: 425px) 125vw, (max-width: 768px) 100vw, 50vw"
            className="h-auto w-auto object-contain"
          />
        </Link>
      </div>

      <div className="w-1/2 flex justify-end gap-4">
        {/* Search Bar (Desktop View: Min Width 640px) */}
        <form
          onSubmit={handleSearch}
          style={{ backgroundColor: receipt.colorBoxIcon }}
          className="w-full hidden sm:flex items-center justify-center px-4 py-2 rounded-lg">
          <FaSistrix
            onClick={handleSearch}
            style={{ color: receipt.colorAccent }}
            className="w-5 h-5 cursor-pointer"
          />
          <input
            type="text"
            aria-label={receipt.headerSearch}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ color: receipt.colorAccent }}
            className="ml-2 w-full bg-transparent outline-hidden text-xs md:text-sm"
          />
        </form>

        {/* Icons Section */}
        <div className="flex space-x-4">
          {/* Mobile Search Button (Below 640px) */}
          <button
            style={{
              backgroundColor: receipt.colorBoxIcon,
              color: receipt.colorIcon,
            }}
            className="sm:hidden w-10 h-10 flex items-center justify-center text-xl rounded-lg"
            onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}>
            <FaSistrix />
          </button>

          {/* Mobile Search Input (Visible When Button Clicked) */}
          {isMobileSearchOpen && (
            <form
              onSubmit={handleSearch}
              style={{ backgroundColor: receipt.colorPrimary }}
              className="absolute top-16 left-0 w-full px-4 py-2 flex items-center shadow-md">
              <FaSistrix
                style={{ color: receipt.colorAccent }}
                className="w-5 h-5"
              />
              <input
                type="text"
                aria-label={receipt.headerSearch}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ color: receipt.colorAccent }}
                className="ml-2 w-full bg-transparent outline-hidden text-sm"
              />
              <button type="submit" className="text-sm font-semibold px-4">
                {receipt.headerGo}
              </button>
            </form>
          )}

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
        </div>
      </div>
    </header>
  );
}
