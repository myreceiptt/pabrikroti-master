// /src/components/landing/VisualLeft.tsx

"use client";

// External libraries
import Image from "next/image";
import React from "react";

// Blockchain configurations
import { getActiveReceipt } from "@/config/receipts";

// Components libraries
import ReusableCTA from "@/components/landing/ReusableCTA";

export default function VisualLeft() {
  const { receipt } = getActiveReceipt();

  const block = receipt.visualBlocks?.find((v) => v.variant === "left");
  if (!block) return null;

  return (
    <section
      className="w-full pt-4 md:pt-8 pb-2 md:pb-0 rounded-xl md:rounded-2xl lg:rounded-3xl flex flex-col md:flex-row items-center gap-4 md:gap-8"
      id="when">
      <div className="relative w-full md:w-1/2 aspect-[5/3] shrink-0">
        <Image
          src={block.image}
          alt={block.title}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="rounded-xl md:rounded-2xl lg:rounded-3xl object-cover"
        />
      </div>

      <div className="w-full md:w-1/2 flex flex-col items-start gap-4">
        <div className="flex flex-col justify-between gap-4">
          <h2
            style={{ color: receipt.colorPrimer }}
            className="text-sm sm:text-xl md:text-2xl lg:text-3xl font-bold leading-tight drop-shadow-md">
            {block.title}
          </h2>
          <p
            style={{ color: receipt.colorPrimer }}
            className="text-[10px] sm:text-sm md:text-base leading-tight line-clamp-none md:line-clamp-4">
            {block.description}
          </p>
        </div>
        <ReusableCTA
          text={block.cta.text}
          href={block.cta.href}
          target={block.cta.target}
          className="inline-block"
        />
      </div>
    </section>
  );
}
