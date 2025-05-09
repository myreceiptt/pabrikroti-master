// /src/components/terms/TermsSection.tsx

"use client";

// External libraries
import React from "react";

// Blockchain configurations
import { colorSecondary, colorIcon } from "@/config/myreceipt";

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
  return (
    <section className="space-y-4">
      <h3
        style={{ color: colorSecondary }}
        className="text-base md:text-lg lg:text-xl xl:text-2xl font-semibold uppercase">
        {title}
      </h3>

      {paragraphs?.map((text, i) => (
        <p
          key={`p-${i}`}
          style={{ color: colorIcon }}
          className="text-sm font-medium leading-relaxed">
          {text}
        </p>
      ))}

      {unorderedList && (
        <ul className="list-disc list-outside space-y-2">
          {unorderedList.map((item, i) => (
            <li
              key={`ul-${i}`}
              style={{ color: colorIcon }}
              className="text-sm font-medium leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      )}

      {orderedList && (
        <ol className="list-decimal list-outside space-y-2">
          {orderedList.map((item, i) => (
            <li
              key={`ol-${i}`}
              style={{ color: colorIcon }}
              className="text-sm font-medium leading-relaxed">
              {item}
            </li>
          ))}
        </ol>
      )}

      {paragraphsAfterList?.map((text, i) => (
        <p
          key={`after-${i}`}
          style={{ color: colorIcon }}
          className="text-sm font-medium leading-relaxed">
          {text}
        </p>
      ))}
    </section>
  );
}
