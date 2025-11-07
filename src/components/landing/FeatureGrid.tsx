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
      style={{ background: receipt.colorPrimer }}
      className="w-full py-4 md:py-8 rounded-xl md:rounded-2xl lg:rounded-3xl"
      id="why"
    >
      <div className="max-full mx-auto px-4 md:px-8 grid gap-4 md:gap-8 grid-cols-1 lg:grid-cols-3">
        {features.map((feat, i) => (
          <div
            key={i}
            style={{ background: receipt.colorPrimary }}
            className="flex flex-col justify-between gap-4 rounded-lg sm:rounded-2xl md:rounded-xl lg:rounded-2xl shadow p-4 md:p-6"
          >
            <div>
              <div
                style={{ color: receipt.colorPrimer }}
                className="text-xl md:text-2xl lg:text-3xl font-bold leading-tight drop-shadow-md"
              >
                {feat.icon}
              </div>
              <h3
                style={{ color: receipt.colorPrimer }}
                className="text-sm sm:text-base md:text-lg font-bold"
              >
                {feat.title}
              </h3>
              <p
                style={{
                  color: receipt.colorPrimer,
                }}
                className="text-[10px] sm:text-sm md:text-base leading-tight"
              >
                {feat.description}
              </p>
            </div>
            {feat.cta && (
              <ReusableCTA
                text={feat.cta.text}
                href={feat.cta.href}
                target={feat.cta.target}
                className="w-full self-start"
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
