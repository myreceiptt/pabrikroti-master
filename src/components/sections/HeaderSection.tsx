// /src/components/sections/HeaderSection.tsx

// External libraries
import Image from "next/image";
import Link from "next/link";
// import { FaClockRotateLeft, FaUser, FaWallet } from "react-icons/fa6";

// Blockchain configurations
import { colorPrimary, headerLogo, proTitle } from "@/config/myreceipt";

// Components libraries
import ConnectButtons from "@/components/logins/ConnectButtons";

export default function Header() {
  return (
    <header
      style={{ backgroundColor: colorPrimary }}
      className="w-full flex items-center justify-between py-4 px-4 md:px-20">
      {/* Logo Section */}
      <div className="w-1/4 sm:w-1/6 flex justify-start">
        <Link href="/">
          <Image src={headerLogo} alt={proTitle} width={144} height={75} />
        </Link>
      </div>

      <div className="w-1/2 flex justify-end gap-4">
        {/* Icons Section */}
        <div className="flex space-x-4">
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
        </div>
      </div>
    </header>
  );
}
