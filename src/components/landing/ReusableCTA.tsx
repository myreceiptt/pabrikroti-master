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
        color: receipt.colorSecondary,
        backgroundColor: receipt.colorTertiary,
        border: "2px solid",
        borderColor: "transparent",
      }}
      className={`px-4 py-2 sm:px-7 sm:py-2 rounded-lg text-center text-xs sm:text-sm md:text-base lg:text-lg font-semibold hover:opacity-75 transition-all ${
        className || ""
      }`}>
      {text}
    </Link>
  );
}
