// /src/app/page.tsx

"use client";

// External libraries
import React, { useEffect, useState } from "react";

// Components libraries
import FeaturedCards from "@/components/contents/FeaturedCards";
import ScreenTooSmall from "@/components/contents/ScreenTooSmall";
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
  const [isTooSmall, setIsTooSmall] = useState<boolean | null>(null);
  const [mode, setMode] = useState<"abc" | "aiueo" | null>(null);

  useEffect(() => {
    // Check window width to determine if it's too small
    const checkWidth = () => {
      setIsTooSmall(window.innerWidth < 474);
    };

    // Initial check
    checkWidth();
    window.addEventListener("resize", checkWidth);

    // Determine mode based on hostname
    const url = new URL(window.location.href);
    const hostname = url.hostname.toLowerCase().trim();

    // Define valid hostnames for 'aiueo' mode
    const validHosts = new Set([
      "motion.endhonesa.com",
      "www.inamotion.id",
      "pabrikroti.endhonesa.com",
      "preroti.endhonesa.com",
      "localhost",
      "127.0.0.1",
    ]);
    if (validHosts.has(hostname)) {
      setMode("aiueo");
    } else {
      // Default fallback: treat all others as 'abc'
      console.warn("Unrecognized hostname:", hostname);
      setMode("abc");
    }

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  // If the screen is too small or mode is not set, return null
  if (isTooSmall === null || !mode) return null; // Optionally add spinner

  // If the screen is too small, show a message
  if (isTooSmall) {
    return <ScreenTooSmall />;
  }

  // If the mode is 'abc', render the dynamic login page with FeaturedCards
  if (mode === "abc") {
    return <DynamicLoginPage ContentComponent={FeaturedCards} />;
  }

  // For 'aiueo'
  return (
    <>
      <Header />
      <div className="flex flex-col gap-4 content-normal md:px-20 py-4 px-4 lg:my-12 md:my-8 my-4">
        <main className="grid gap-4 lg:gap-7 place-items-center">
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
