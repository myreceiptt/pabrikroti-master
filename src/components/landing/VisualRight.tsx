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
      className="w-full py-20 px-4 flex flex-col-reverse md:flex-row items-center gap-12"
      id="where">
      <div className="max-w-md">
        <h2 className="text-2xl font-bold mb-2">{block.title}</h2>
        <p className="text-gray-700 mb-4">{block.description}</p>
        <ReusableCTA text={block.cta.text} href={block.cta.href} />
      </div>
      <Image
        src={block.image}
        alt={block.title}
        width={500}
        height={300}
        className="rounded-2xl md:rounded-xl lg:rounded-2xl object-cover"
      />
    </section>
  );
}
