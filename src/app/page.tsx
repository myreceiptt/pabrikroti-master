// /src/app/page.tsx

"use client";

// External libraries
import React, { useEffect, useState } from "react";

// Components libraries
import FeaturedCards from "@/components/contents/FeaturedCards";
import HeroSection from "@/components/landing/HeroSection";
import AboutThis from "@/components/landing/AboutThis";
import MainProgram from "@/components/landing/MainProgram";
import TheFeatures from "@/components/landing/TheFeatures";
import DynamicLoginPage from "@/components/logins/DynamicLogin";
import Footer from "@/components/sections/FooterSection";
import Header from "@/components/sections/HeaderSection";

export default function PageRouter() {
  const [mode, setMode] = useState<"abc" | "aiueo" | null>(null);

  useEffect(() => {
    const host = window.location.hostname;

    if (
      host.includes("far.futuloka.io") ||
      host.includes("far.futuloka.xyz") ||
      host.includes("far.endhonesa.com") ||
      host.includes("localhost") ||
      host.includes("127.0.0.1")
    ) {
      setMode("aiueo");
    } else {
      // Default fallback: treat all others as 'abc'
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
          <HeroSection />
          <AboutThis />
          <MainProgram />
          <TheFeatures />
        </main>
      </div>
      <Footer />
    </>
  );
}
