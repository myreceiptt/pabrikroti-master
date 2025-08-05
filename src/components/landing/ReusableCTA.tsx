// /src/components/landing/ReusableCTA.tsx

"use client";

// External libraries
import Link from "next/link";
import React from "react";

// Blockchain configurations
import { getActiveReceipt } from "@/config/receipts";

type CTAProps = {
  text: string;
  href: string;
  target?: string;
  className?: string;
};

export default function ReusableCTA({
  text,
  href,
  target,
  className,
}: CTAProps) {
  const { receipt } = getActiveReceipt();

  return (
    <Link
      href={href}
      target={target || "_self"}
      style={{
        color: receipt.colorButtonText,
        border: "2px solid",
        borderColor: "transparent",
        backgroundColor: receipt.colorButtonBG,
      }}
      className={`rounded-lg px-4 py-2 sm:px-7 text-center text-xs sm:text-sm md:text-sm lg:text-base font-semibold transition-all ${
        className || ""
      }`}>
      {text}
    </Link>
  );
}
