// /src/components/logins/HeaderSection.tsx

// External libraries
import Image from "next/image";
import Link from "next/link";
import { FaClockRotateLeft, FaUser, FaWallet } from "react-icons/fa6";

// Blockchain configurations
import { titlePro, headerLogo } from "@/config/osloid";

// Components libraries
import ConnectButtons from "./ConnectButtons";

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between bg-back-ground py-4 px-4 md:px-20">
      {/* Logo Section */}
      <div className="w-1/4 sm:w-1/6 flex justify-start">
        <Link href="/">
          <Image src={headerLogo} alt={titlePro} width={481} height={251} />
        </Link>
      </div>

      <div className="w-1/2 flex justify-end gap-4">
        {/* Icons Section */}
        <div className="flex space-x-4">
          <ConnectButtons />
          <button className="sm:w-10 w-8 sm:h-10 h-8 flex items-center justify-center text-xl rounded-lg bg-box-icon text-icon-wording">
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
          </button>
        </div>
      </div>
    </header>
  );
}
