// /src/components/landing/HeroSlider.tsx

"use client";

// External libraries
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

// Blockchain configurations
import { getActiveReceipt } from "@/config/receipts";

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
                className="object-cover rounded-xl md:rounded-2xl lg:rounded-3xl"
                sizes="100vw"
                priority
              />
            </Link>
          </motion.div>
        </AnimatePresence>

        {/* Overlay content di kanan atas */}
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 lg:top-10 lg:right-10 max-w-[60%] text-right z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${currentSlide}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 1.11 }}
              className="flex flex-col items-end gap-2">
              <h1
                style={{ color: receipt.colorPrimary }}
                className="hidden sm:flex text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold drop-shadow-lg">
                {slides[currentSlide].title}
              </h1>

              {slides[currentSlide].subtitle && (
                <h2
                  style={{ color: receipt.colorPrimary }}
                  className="hidden sm:flex text-sm sm:text-base md:text-lg lg:text-xl drop-shadow-md">
                  {slides[currentSlide].subtitle}
                </h2>
              )}

              {slides[currentSlide].description && (
                <p
                  style={{
                    color: receipt.colorPrimary,
                    opacity: 0.8,
                    textShadow: "0 1px 1px rgba(0, 0, 0, 0.25)", // similar to Tailwind's default drop-shadow
                  }}
                  className="hidden sm:flex text-xs sm:text-sm md:text-base max-w-md">
                  {slides[currentSlide].description}
                </p>
              )}

              {slides[currentSlide].cta && (
                <div className="mt-2">
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
