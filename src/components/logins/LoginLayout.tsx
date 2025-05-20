// /src/components/logins/LoginLayout.tsx

// External libraries
import Image from "next/image";
import Link from "next/link";
import React from "react";

// Blockchain configurations
import { getActiveReceipt } from "@/config/receipts";

const { receipt } = getActiveReceipt();

interface LoginLayoutProps {
  children: React.ReactNode;
}

export default function LoginLayout({ children }: LoginLayoutProps) {
  return (
    <div className="w-full h-screen grid grid-cols-1 md:grid-cols-2">
      <div className="w-full relative hidden md:block overflow-hidden">
        <Image
          src={receipt.loginArt}
          alt={receipt.proTitle}
          width={1080}
          height={1129}
          className="absolute inset-0 w-full h-full rounded-r-3xl object-cover object-right"
          priority
        />
      </div>
      <div className="w-full flex flex-col gap-4 md:gap-8 lg:gap-12 items-center justify-center py-4 px-4 md:px-8 lg:px-12">
        {/* Headerssss */}
        <Link href="/">
          <Image
            src={receipt.loginBanner}
            alt={receipt.proTitle}
            width={1080}
            height={149}
            className="z-0 object-contain w-full"
            priority
          />
        </Link>
        <div id="headers" className="w-full flex flex-col gap-2">
          <h1
            aria-label={receipt.loginAria}
            style={{ color: receipt.colorSecondary }}
            className="flex text-left text-3xl lg:text-4xl xl:text-5xl font-normal tracking-tighter justify-start align-middle">
            {receipt.loginCall}
          </h1>
          <h2
            style={{ color: receipt.colorSecondary }}
            className="flex flex-wrap text-left text-sm lg:text-base xl:text-lg font-normal tracking-tighter justify-start items-center">
            {receipt.loginReason.text}
            <Link
              href={receipt.loginReason.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline hover:underline transition-all duration-200">
              {receipt.loginReason.anchor}
            </Link>
          </h2>
        </div>
        <div className="w-full h-auto flex flex-col gap-4 justify-start items-start">
          {children}
          <h4
            style={{ color: receipt.colorIcon }}
            className="text-left text-xs font-normal">
            {receipt.loginAgreement}{" "}
            <Link
              href="/terms"
              target="_blank"
              style={{ color: receipt.colorSecondary }}>
              {receipt.loginTermsPolicy}
            </Link>
          </h4>
        </div>

        {/* Footerssss */}
        <Link href={receipt.linkPower} target="_blank">
          <Image
            src={receipt.loginPower}
            alt={receipt.poweredBy}
            width={1080}
            height={107}
            className="z-0 object-contain w-full"
            priority
          />
        </Link>
      </div>
    </div>
  );
}
