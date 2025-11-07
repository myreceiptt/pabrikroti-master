// /src/components/landing/ParagraphText.tsx

"use client";

// External libraries
import React from "react";

// Blockchain configurations
import { getActiveReceipt } from "@/config/receipts";

// Components libraries
import ReusableCTA from "@/components/landing/ReusableCTA";

export default function ParagraphText() {
  const { receipt } = getActiveReceipt();

  const { title, paragraphs, cta } = receipt.textMin || {};

  if (!title || !cta) return null;

  return (
    <section
      style={{
        borderColor: receipt.colorTertiary,
        backgroundColor: receipt.colorSecondary,
      }}
      className="w-full py-4 md:py-8 rounded-xl md:rounded-2xl lg:rounded-3xl border"
      id="how"
    >
      <div className="flex flex-col items-center gap-4 px-4 md:px-8">
        <div className="flex flex-col justify-between gap-4 px-4 md:px-8 text-center max-w-4xl mx-auto">
          <h2
            style={{ color: receipt.colorPrimer }}
            className="text-sm sm:text-xl md:text-2xl lg:text-3xl font-bold leading-tight drop-shadow-md"
          >
            {title}
          </h2>
          {(paragraphs || []).map((p, i) => (
            <p
              key={i}
              style={{ color: receipt.colorPrimer }}
              className="text-[10px] sm:text-sm md:text-base leading-tight"
            >
              {p}
            </p>
          ))}
        </div>
        <ReusableCTA
          text={cta.text}
          href={cta.href}
          target={cta.target}
          className="inline-block"
        />
      </div>
    </section>
  );
}
