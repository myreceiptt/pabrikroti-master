// /src/components/landing/TextMinim.tsx

"use client";

// External libraries
import React from "react";

// Blockchain configurations
import { getActiveReceipt } from "@/config/receipts";

// Components libraries
import ReusableCTA from "@/components/landing/ReusableCTA";

export default function TextMinWithCTA() {
  const { receipt } = getActiveReceipt();

  const { title, paragraphs, cta } = receipt.textMin || {};

  if (!title || !cta) return null;

  return (
    <section className="py-16 px-6 text-center max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      {(paragraphs || []).map((p, i) => (
        <p key={i} className="text-gray-600 mb-3">
          {p}
        </p>
      ))}
      <ReusableCTA
        text={cta.text}
        href={cta.href}
        className="mt-6 inline-block"
      />
    </section>
  );
}
