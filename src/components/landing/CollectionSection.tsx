// /src/components/landing/CollectionSection.tsx

"use client";

// External libraries
import React from "react";

// Components libraries
import NFTsView from "@/components/nfts/NFTsView";

export default function CollectionSection() {
  return (
    <section className="px-4 py-8 lg:px-6 lg:py-16 rounded-2xl">
      <div className="max-w-5xl mx-auto space-y-6">
        <NFTsView />
      </div>
    </section>
  );
}
