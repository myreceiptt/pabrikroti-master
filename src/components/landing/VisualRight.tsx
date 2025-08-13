// /src/components/landing/VisualRight.tsx

"use client";

// External libraries
import Image from "next/image";
import React from "react";

// Blockchain configurations
import { getActiveReceipt } from "@/config/receipts";

// Components libraries
import ReusableCTA from "@/components/landing/ReusableCTA";

export default function VisualRight() {
  const { receipt } = getActiveReceipt();

  const block = receipt.visualBlocks?.find((v) => v.variant === "right");
  if (!block) return null;

  return (
    <section
      className="w-full pb-4 md:pb-8 pt-2 md:pt-0 rounded-xl md:rounded-2xl lg:rounded-3xl flex flex-col-reverse md:flex-row items-center gap-4 md:gap-8"
      id="where">
      <div className="w-full md:w-1/2 flex flex-col items-end gap-4">
        <div className="flex flex-col justify-between gap-4">
          <h2
            style={{ color: receipt.colorPrimer }}
            className="text-right text-sm sm:text-xl md:text-2xl lg:text-3xl font-bold leading-tight drop-shadow-md">
            {block.title}
          </h2>
          <p
            style={{ color: receipt.colorPrimer }}
            className="text-right text-[10px] sm:text-sm md:text-base leading-tight line-clamp-none md:line-clamp-4">
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

      <div className="relative w-full md:w-1/2 aspect-[5/3] shrink-0">
        <Image
          src={block.image}
          alt={block.title}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="rounded-xl md:rounded-2xl lg:rounded-3xl object-cover"
        />
      </div>
    </section>
  );
}
