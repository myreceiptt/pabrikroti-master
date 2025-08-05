// /src/components/landing/HeroSlider.tsx

"use client";

// External libraries
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

// Blockchain configurations
import { getActiveReceipt } from "@/config/receipts";
import { hexToRgba } from "@/config/utils";

// Components libraries
import ReusableCTA from "@/components/landing/ReusableCTA";

export default function HeroSlider() {
  const { receipt } = getActiveReceipt();
  const slides = receipt.heroSlides;
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4747); // Change slide every 4.747 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section id="what" className="w-full">
      <div
        style={{ background: receipt.colorSecondary }}
        className="relative w-full aspect-[64/27] overflow-hidden rounded-xl md:rounded-2xl lg:rounded-3xl">
        {/* Slide Image */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.11 }}
            className="absolute inset-0">
            <Link href={slides[currentSlide].cta.href}>
              <Image
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                fill
                sizes="100vw"
                priority
                className="object-cover rounded-xl md:rounded-2xl lg:rounded-3xl"
              />
            </Link>
          </motion.div>
        </AnimatePresence>

        {/* Overlay Content */}
        <div
          style={{
            backgroundColor: hexToRgba(receipt.colorTersier, 0.66),
          }}
          className="absolute inset-0 p-3 sm:p-6 md:p-8 lg:p-10 flex items-start justify-end">
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${currentSlide}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 1.11 }}
              className="flex flex-col items-end gap-1 w-full max-w-full max-h-full text-right">
              {/* Title */}
              <h1
                style={{ color: receipt.colorPrimary }}
                className="text-sm sm:text-xl md:text-2xl lg:text-3xl font-bold leading-tight drop-shadow-md">
                {slides[currentSlide].title}
              </h1>

              {/* Subtitle */}
              {slides[currentSlide].subtitle && (
                <h2
                  style={{ color: receipt.colorPrimary }}
                  className="text-xs sm:text-base md:text-lg leading-snug drop-shadow-sm">
                  {slides[currentSlide].subtitle}
                </h2>
              )}

              {/* Description */}
              {slides[currentSlide].description && (
                <p
                  style={{
                    color: receipt.colorPrimary,
                  }}
                  className="text-[10px] sm:text-sm md:text-base max-w-xs sm:max-w-sm md:max-w-md leading-tight">
                  {slides[currentSlide].description}
                </p>
              )}

              {/* CTA */}
              {slides[currentSlide].cta && (
                <div className="mt-1 sm:mt-2">
                  <ReusableCTA
                    text={slides[currentSlide].cta.text}
                    href={slides[currentSlide].cta.href}
                    target={slides[currentSlide].cta.target}
                  />
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
