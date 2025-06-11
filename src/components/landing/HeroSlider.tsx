// /src/components/landing/HeroSlider.tsx

"use client";

// External libraries
import Image from "next/image";
import React from "react";

// Blockchain configurations
import { getActiveReceipt } from "@/config/receipts";

// Components libraries
import ReusableCTA from "@/components/landing/ReusableCTA";

export default function HeroSlider() {
  const { receipt } = getActiveReceipt();
  const slides = receipt.heroSlides;

  return (
    <section className="w-full">
      <div className="flex flex-col items-center justify-center text-center gap-10">
        {slides.map((slide, i) => (
          <div key={i} className="w-full flex flex-col items-center gap-6">
            {slide.image && (
              <Image
                src={slide.image}
                alt={slide.title}
                width={2560}
                height={1440}
                className="rounded-xl object-cover"
              />
            )}
            <h1 className="text-3xl md:text-5xl font-bold">{slide.title}</h1>
            {slide.subtitle && <h2 className="text-xl">{slide.subtitle}</h2>}
            {slide.description && (
              <p className="text-gray-600 max-w-xl">{slide.description}</p>
            )}
            {slide.cta && (
              <ReusableCTA text={slide.cta.text} href={slide.cta.href} />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
