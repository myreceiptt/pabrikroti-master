// /src/app/terms/page.tsx

"use client";

// External libraries
import React from "react";

// Blockchain configurations
import {
  termsSec10P1,
  termsSec10P2,
  termsSec10P3,
  termsSec10P4,
  termsSec10P5,
  termsSec10P6,
  termsSec11P1,
  termsSec11P2,
  termsSec11P3,
  termsSec12P1,
  termsSec12P2,
  termsSec12Ul1Li1,
  termsSec12Ul1Li2,
  termsSec12Ul1Li3,
  termsSec13P1,
  termsSec13P10,
  termsSec13P11,
  termsSec13P12,
  termsSec13P13,
  termsSec13P2,
  termsSec13P3,
  termsSec13P4,
  termsSec13P5,
  termsSec13P6,
  termsSec13P7,
  termsSec13P8,
  termsSec13P9,
  termsSec1P1,
  termsSec1P2,
  termsSec2Ul1Li1,
  termsSec2Ul1Li2,
  termsSec3P1,
  termsSec3P2,
  termsSec3P3,
  termsSec4P1,
  termsSec4P2,
  termsSec5P1,
  termsSec5P2,
  termsSec6P1,
  termsSec6P2,
  termsSec6P3,
  termsSec7Ol1Li1,
  termsSec7Ol1Li2,
  termsSec7P1,
  termsSec7P2,
  termsSec7P3,
  termsSec7P4,
  termsSec7P5,
  termsSec8P1,
  termsSec8Ul1Li1,
  termsSec8Ul1Li2,
  termsSec8Ul1Li3,
  termsSec8Ul1Li4,
  termsSec8Ul1Li5,
  termsSec8Ul1Li6,
  termsSec8Ul1Li7,
  termsSec9P1,
  termsSec9P2,
  termsSec9Ul1Li1,
  termsSec9Ul1Li2,
  termsSec9Ul1Li3,
  termsSec9Ul1Li4,
  termsSec9Ul1Li5,
  termsSec9Ul1Li6,
  termsSection1,
  termsSection10,
  termsSection11,
  termsSection12,
  termsSection13,
  termsSection2,
  termsSection3,
  termsSection4,
  termsSection5,
  termsSection6,
  termsSection7,
  termsSection8,
  termsSection9,
} from "@/config/myreceipt";

// Components libraries
import Footer from "@/components/sections/FooterSection";
import Header from "@/components/sections/HeaderSection";
import TermsHeader from "@/components/terms/TermsHeader";
import TermsDivider from "@/components/terms/TermsDivider";
import TermsSection from "@/components/terms/TermsSection";

export default function PageTerms() {
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
          <TermsSection
            title={termsSection1}
            paragraphs={[termsSec1P1, termsSec1P2]}
          />
          <TermsSection
            title={termsSection2}
            unorderedList={[termsSec2Ul1Li1, termsSec2Ul1Li2]}
          />
          <TermsSection
            title={termsSection3}
            paragraphs={[termsSec3P1, termsSec3P2, termsSec3P3]}
          />
          <TermsSection
            title={termsSection4}
            paragraphs={[termsSec4P1, termsSec4P2]}
          />
          <TermsSection
            title={termsSection5}
            paragraphs={[termsSec5P1, termsSec5P2]}
          />
          <TermsSection
            title={termsSection6}
            paragraphs={[termsSec6P1, termsSec6P2, termsSec6P3]}
          />
          <TermsSection
            title={termsSection7}
            paragraphs={[
              termsSec7P1,
              termsSec7P2,
              termsSec7P3,
              termsSec7P4,
              termsSec7P5,
            ]}
            orderedList={[termsSec7Ol1Li1, termsSec7Ol1Li2]}
          />
          <TermsSection
            title={termsSection8}
            paragraphs={[termsSec8P1]}
            unorderedList={[
              termsSec8Ul1Li1,
              termsSec8Ul1Li2,
              termsSec8Ul1Li3,
              termsSec8Ul1Li4,
              termsSec8Ul1Li5,
              termsSec8Ul1Li6,
              termsSec8Ul1Li7,
            ]}
          />
          <TermsSection
            title={termsSection9}
            paragraphs={[termsSec9P1]}
            unorderedList={[
              termsSec9Ul1Li1,
              termsSec9Ul1Li2,
              termsSec9Ul1Li3,
              termsSec9Ul1Li4,
              termsSec9Ul1Li5,
              termsSec9Ul1Li6,
            ]}
            paragraphsAfterList={[termsSec9P2]}
          />
          <TermsSection
            title={termsSection10}
            paragraphs={[
              termsSec10P1,
              termsSec10P2,
              termsSec10P3,
              termsSec10P4,
              termsSec10P5,
              termsSec10P6,
            ]}
          />
          <TermsSection
            title={termsSection11}
            paragraphs={[termsSec11P1, termsSec11P2, termsSec11P3]}
          />
          <TermsSection
            title={termsSection12}
            paragraphs={[termsSec12P1]}
            unorderedList={[
              termsSec12Ul1Li1,
              termsSec12Ul1Li2,
              termsSec12Ul1Li3,
            ]}
            paragraphsAfterList={[termsSec12P2]}
          />
          <TermsSection
            title={termsSection13}
            paragraphs={[
              termsSec13P1,
              termsSec13P2,
              termsSec13P3,
              termsSec13P4,
              termsSec13P5,
              termsSec13P6,
              termsSec13P7,
              termsSec13P8,
              termsSec13P9,
              termsSec13P10,
              termsSec13P11,
              termsSec13P12,
              termsSec13P13,
            ]}
          />

          {/* Divider */}
          <TermsDivider />
        </main>
      </div>

      {/* Footersss */}
      <Footer />
    </>
  );
}
