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
        className="relative w-full aspect-[64/27] overflow-hidden rounded-lg md:rounded-xl lg:rounded-2xl">
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
                className="object-cover rounded-md"
                sizes="100vw"
                priority
              />
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex flex-col items-center justify-center text-center gap-6 px-4 md:px-8 lg:px-20 max-w-screen-lg ml-auto mt-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={`text-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="w-full flex flex-col items-end text-right">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
              {slides[currentSlide].title}
            </h1>

            {slides[currentSlide].subtitle && (
              <h2 className="text-sm sm:text-base md:text-lg lg:text-xl">
                {slides[currentSlide].subtitle}
              </h2>
            )}

            {slides[currentSlide].description && (
              <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-xl ml-auto">
                {slides[currentSlide].description}
              </p>
            )}

            {slides[currentSlide].cta && (
              <div className="mt-4">
                <ReusableCTA
                  text={slides[currentSlide].cta.text}
                  href={slides[currentSlide].cta.href}
                />
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
