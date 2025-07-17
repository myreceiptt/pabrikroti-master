// /src/app/page.tsx

"use client";

// External libraries
import React, { useEffect, useState } from "react";

// Components libraries
import FeaturedCards from "@/components/contents/FeaturedCards";
import FeatureGrid from "@/components/landing/FeatureGrid";
import HeroSlider from "@/components/landing/HeroSlider";
import ParagraphText from "@/components/landing/ParagraphText";
import VideoEmbed from "@/components/landing/VideoEmbed";
import VisualLeft from "@/components/landing/VisualLeft";
import VisualRight from "@/components/landing/VisualRight";
import DynamicLoginPage from "@/components/logins/DynamicLogin";
import Footer from "@/components/sections/FooterSection";
import Header from "@/components/sections/HeaderSection";

export default function PageRouter() {
  const [mode, setMode] = useState<"abc" | "aiueo" | null>(null);

  useEffect(() => {
    try {
      const url = new URL(window.location.href);
      const hostname = url.hostname.toLowerCase().trim();

      const validHosts = new Set([
        "memora.endhonesa.com",
        "memora.voyage.co.id",
        "motion.endhonesa.com",
        "www.inamotion.id",
        "pabrikroti.endhonesa.com",
        "preroti.endhonesa.com",
      ]);
      if (validHosts.has(hostname)) {
        setMode("aiueo");
      } else {
        // Default fallback: treat all others as 'abc'
        console.warn("Unrecognized hostname:", hostname);
        setMode("abc");
      }
    } catch (error) {
      console.error("URL parsing failed:", error);
      setMode("abc");
    }
  }, []);

  if (!mode) return null; // You can replace this with a loading spinner

  if (mode === "abc") {
    return <DynamicLoginPage ContentComponent={FeaturedCards} />;
  }

  // For 'aiueo'
  return (
    <>
      <Header />
      <div className="flex flex-col gap-4 content-normal md:px-20 py-4 px-4 lg:my-12 md:my-8 my-4">
        <main className="grid gap-4 place-items-center">
          <HeroSlider />
          <FeatureGrid />
          <ParagraphText />
          <VisualLeft />
          <VisualRight />
          <VideoEmbed />
        </main>
      </div>
      <Footer />
    </>
  );
}
