// /src/components/logins/HeaderSection.tsx

// External libraries
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaBagShopping, FaWallet, FaSistrix } from "react-icons/fa6";

// Components libraries
import ConnectButtons from "./ConnectButtons";

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
    <header className="w-full flex items-center justify-between bg-back-ground py-4 px-4 md:px-20">
      {/* Logo Section */}
      <div className="w-1/4 sm:w-1/6 flex justify-start">
        <Link href="/">
          <Image
            src="/images/bukhari-fa-login-02-11.png"
            alt="Harmoni Istiqlal X Bukhari Creative Group"
            width={481}
            height={251}
          />
        </Link>
      </div>

      <div className="w-1/2 flex justify-end gap-4">
        {/* Search Bar (Desktop View: Min Width 640px) */}
        <form
          onSubmit={handleSearch}
          className="w-full hidden sm:flex bg-box-icon items-center justify-center px-4 py-2 rounded-lg">
          <FaSistrix className="w-5 h-5 text-hitam-judul-body" />
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="ml-2 w-full bg-transparent outline-hidden text-xs md:text-sm text-hitam-judul-body placeholder-icon-wording"
          />
        </form>

        {/* Icons Section */}
        <div className="flex space-x-4">
          {/* Mobile Search Button (Below 640px) */}
          <button
            className="sm:hidden w-10 h-10 flex items-center justify-center text-xl rounded-lg bg-box-icon text-icon-wording"
            onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}>
            <FaSistrix />
          </button>

          {/* Mobile Search Input (Visible When Button Clicked) */}
          {isMobileSearchOpen && (
            <form
              onSubmit={handleSearch}
              className="absolute top-16 left-0 w-full bg-back-ground px-4 py-2 flex items-center shadow-md">
              <FaSistrix className="w-5 h-5 text-hitam-judul-body" />
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="ml-2 w-full bg-transparent outline-hidden text-sm text-hitam-judul-body placeholder-icon-wording"
              />
              <button type="submit" className="text-sm font-semibold px-4">
                Go
              </button>
            </form>
          )}

          {/* Other Buttons */}
          <ConnectButtons />
          <button className="w-10 h-10 flex items-center justify-center text-xl rounded-lg bg-box-icon text-icon-wording">
            <FaWallet />
          </button>
          <button className="w-10 h-10 flex items-center justify-center text-xl rounded-lg bg-box-icon text-icon-wording">
            <FaBagShopping />
          </button>
        </div>
      </div>
    </header>
  );
}
