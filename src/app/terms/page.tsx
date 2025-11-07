// /src/app/terms/page.tsx

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

export default function PageTerms() {
  const { receipt } = getActiveReceipt();

  return (
    <>
      {/* Headersss */}
      <Header />

      {/* Content Section */}
      <div className="flex flex-col items-center gap-8 px-4 md:px-20 py-8">
        <main className="w-full max-w-3xl space-y-8">
          {/* Title */}
          <TermsHeader />

          {/* Policy Overview */}
          {Object.entries(receipt.termsTerms).map(([key, section]) => {
            const typedSection = section as {
              title: string;
              paragraphs?: string[];
              items?: string[];
              ul?: string[];
              ol?: string[];
              paragraphsAfterList?: string[];
            };

            return (
              <TermsSection
                key={key}
                title={typedSection.title}
                paragraphs={
                  "paragraphs" in typedSection
                    ? typedSection.paragraphs
                    : undefined
                }
                unorderedList={
                  "ul" in typedSection
                    ? typedSection.ul
                    : "items" in typedSection
                      ? typedSection.items
                      : undefined
                }
                orderedList={"ol" in typedSection ? typedSection.ol : undefined}
                paragraphsAfterList={
                  "paragraphsAfterList" in typedSection
                    ? typedSection.paragraphsAfterList
                    : undefined
                }
              />
            );
          })}

          {/* Divider */}
          <TermsDivider />
        </main>
      </div>

      {/* Footersss */}
      <Footer />
    </>
  );
}
