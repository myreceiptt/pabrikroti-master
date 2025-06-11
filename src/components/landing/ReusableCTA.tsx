// /src/components/landing/ReusableCTA.tsx

"use client";

// External libraries
import Link from "next/link";
import React from "react";

type CTAProps = {
  text: string;
  href: string;
  className?: string;
};

export default function ReusableCTA({ text, href, className }: CTAProps) {
  return (
    <Link
      href={href}
      className={`px-6 py-3 rounded-2xl font-semibold text-white bg-black hover:bg-opacity-80 transition ${
        className || ""
      }`}>
      {text}
    </Link>
  );
}
