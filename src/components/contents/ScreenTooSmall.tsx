// /src/components/contents/ScreenTooSmall.tsx

"use client";

// External libraries
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

// Blockchain configurations
import { getActiveReceipt } from "@/config/receipts";

export default function ScreenTooSmall() {
  const { receipt } = getActiveReceipt();

  return (
    <div
      style={{
        color: receipt.colorTersier,
        backgroundColor: receipt.colorPrimary,
      }}
      className="flex items-center justify-center min-h-screen p-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-md text-center">
        <div className="flex justify-center mb-6">
          <Image
            src={receipt.tinyIllustration}
            alt="Rotate Device Illustration"
            width={200}
            height={200}
            className="opacity-80"
          />
        </div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-2xl sm:text-3xl font-bold mb-4">
          {receipt.tinyTitle}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mb-3 text-base sm:text-lg">
          {receipt.tinyText}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-sm">
          {receipt.tinyHint}
          <br />
          {receipt.tinyPunchline}
        </motion.p>
      </motion.div>
    </div>
  );
}
