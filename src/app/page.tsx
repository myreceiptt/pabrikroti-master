// /src/app/page.tsx

"use client";

// External libraries
import React from "react";

// Blockchain configurations
import { getActiveReceipt } from "@/config/receipts";

// Components libraries
import Footer from "@/components/sections/FooterSection";
import Header from "@/components/sections/HeaderSection";
import TermsHeader from "@/components/terms/TermsHeader";
import TermsDivider from "@/components/terms/TermsDivider";
import TermsSection from "@/components/terms/TermsSection";

const { receipt } = getActiveReceipt();

export default function Home() {
  return (
    <>
      {/* Headersss */}
      <Header />

      {/* Content Section */}
      <div className="flex flex-col items-center gap-8 px-4 md:px-20 py-8">
        <main className="w-full max-w-3xl space-y-8">
          {/* Title */}

          {/* Policy Overview */}

          {/* Divider */}
        </main>
      </div>

      {/* Footersss */}
      <Footer />
    </>
  );
}
