// /src/components/landing/VideoEmbed.tsx

"use client";

// External libraries
import React from "react";

// Blockchain configurations
import { getActiveReceipt } from "@/config/receipts";

// Components libraries
import ReusableCTA from "@/components/landing/ReusableCTA";

export default function VideoEmbed() {
  const { receipt } = getActiveReceipt();

  const { url, cta } = receipt.videoEmbed || {};

  if (!url) return null;

  return (
    <section className="py-16 flex flex-col items-center gap-8 px-6" id="who">
      <div className="aspect-video w-full max-w-4xl">
        <iframe
          src={url}
          title="Embedded Video"
          className="w-full h-full rounded-xl md:rounded-2xl lg:rounded-3xl"
          allowFullScreen
        />
      </div>
      {cta && <ReusableCTA text={cta.text} href={cta.href} />}
    </section>
  );
}
