// /src/components/landing/FeatureGrid.tsx

"use client";

// External libraries
import React from "react";

// Blockchain configurations
import { getActiveReceipt } from "@/config/receipts";

// Components libraries
import ReusableCTA from "@/components/landing/ReusableCTA";

export default function FeatureGrid() {
  const { receipt } = getActiveReceipt();

  const features = receipt.features;

  return (
    <section className="w-full bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6 grid gap-8 grid-cols-1 md:grid-cols-3">
        {features.map((feat, i) => (
          <div
            key={i}
            className="flex flex-col justify-between gap-4 bg-white rounded-xl shadow p-6">
            <div>
              <div className="text-4xl">{feat.icon}</div>
              <h3 className="text-xl font-bold mt-2">{feat.title}</h3>
              <p className="text-gray-600">{feat.description}</p>
            </div>
            {feat.cta && (
              <ReusableCTA
                text={feat.cta.text}
                href={feat.cta.href}
                className="mt-4 self-start"
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
