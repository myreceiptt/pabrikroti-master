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
    <section
      style={{ background: receipt.colorTersier }}
      className="w-full py-16 rounded-xl md:rounded-2xl lg:rounded-3xl"
      id="why">
      <div className="max-w-6xl mx-auto px-6 grid gap-8 grid-cols-1 lg:grid-cols-3">
        {features.map((feat, i) => (
          <div
            key={i}
            className="flex flex-col justify-between gap-4 bg-white rounded-lg sm:rounded-2xl md:rounded-xl lg:rounded-2xl shadow p-6">
            <div>
              <div className="text-4xl">{feat.icon}</div>
              <h3 className="text-xl font-bold mt-2">{feat.title}</h3>
              <p className="text-gray-600">{feat.description}</p>
            </div>
            {feat.cta && (
              <ReusableCTA
                text={feat.cta.text}
                href={feat.cta.href}
                className="w-full mt-4 self-start"
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
