// /src/components/terms/TermsSection.tsx

"use client";

// External libraries
import React from "react";

// Blockchain configurations
import { getActiveReceipt } from "@/config/receipts";

interface TermsSectionProps {
  title: string;
  paragraphs?: string[];
  unorderedList?: string[];
  orderedList?: string[];
  paragraphsAfterList?: string[];
}

export default function TermsSection({
  title,
  paragraphs,
  unorderedList,
  orderedList,
  paragraphsAfterList,
}: TermsSectionProps) {
  const { receipt } = getActiveReceipt();

  return (
    <section className="space-y-4">
      {/* Section Title */}
      <h3
        style={{ color: receipt.colorSecondary }}
        className="text-base md:text-lg lg:text-xl xl:text-2xl font-semibold uppercase">
        {title}
      </h3>

      {/* Main Paragraphs */}
      {paragraphs?.map((text, i) => (
        <p
          key={`p-${i}`}
          style={{ color: receipt.colorSekunder }}
          className="text-sm font-medium leading-relaxed">
          {text}
        </p>
      ))}

      {/* Unordered List */}
      {unorderedList?.length && (
        <ul className="list-disc list-outside space-y-2">
          {unorderedList.map((item, i) => (
            <li
              key={`ul-${i}`}
              style={{ color: receipt.colorSekunder }}
              className="text-sm font-medium leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      )}

      {/* Ordered List */}
      {orderedList && (
        <ol className="list-decimal list-outside space-y-2">
          {orderedList.map((item, i) => (
            <li
              key={`ol-${i}`}
              style={{ color: receipt.colorSekunder }}
              className="text-sm font-medium leading-relaxed">
              {item}
            </li>
          ))}
        </ol>
      )}

      {/* Additional Paragraphs After List */}
      {paragraphsAfterList?.map((text, i) => (
        <p
          key={`after-${i}`}
          style={{ color: receipt.colorSekunder }}
          className="text-sm font-medium leading-relaxed">
          {text}
        </p>
      ))}
    </section>
  );
}
