// /src/app/terms/page.tsx

"use client";

// External libraries
import React from "react";

// Blockchain configurations
import {
  termsSec13P13,
  termsSec13P12,
  termsSec13P11,
  termsSec13P10,
  termsSec13P9,
  termsSec13P8,
  termsSec13P7,
  termsSec13P6,
  termsSec13P5,
  termsSec13P4,
  termsSec13P3,
  termsSec13P2,
  termsSec13P1,
  termsSection13,
  termsSec12P2,
  termsSec12Ul1Li3,
  termsSec12Ul1Li2,
  termsSec12Ul1Li1,
  termsSec12P1,
  termsSection12,
  termsSec11P3,
  termsSec11P2,
  termsSec11P1,
  termsSection11,
  termsSec10P6,
  termsSec10P5,
  termsSec10P4,
  termsSec10P3,
  termsSec10P2,
  termsSec10P1,
  termsSection10,
  termsSec9P2,
  termsSec9Ul1Li6,
  termsSec9Ul1Li5,
  termsSec9Ul1Li4,
  termsSec9Ul1Li3,
  termsSec9Ul1Li2,
  termsSec9Ul1Li1,
  termsSec9P1,
  termsSection9,
  termsSec8Ul1Li7,
  termsSec8Ul1Li6,
  termsSec8Ul1Li5,
  termsSec8Ul1Li4,
  termsSec8Ul1Li3,
  termsSec8Ul1Li2,
  termsSec8Ul1Li1,
  termsSec8P1,
  termsSection8,
  termsSec7P5,
  termsSec7P4,
  termsSec7Ol1Li2,
  termsSec7Ol1Li1,
  termsSec7P3,
  termsSec7P2,
  termsSec7P1,
  termsSection7,
  termsSec6P3,
  termsSec6P2,
  termsSec6P1,
  termsSection6,
  termsSec5P2,
  termsSec5P1,
  termsSection5,
  termsSec4P2,
  termsSec4P1,
  termsSection4,
  termsSec3P3,
  termsSec3P2,
  termsSec3P1,
  termsSection3,
  termsSec2Ul1Li2,
  termsSec2Ul1Li1,
  termsSection2,
  termsSec1P2,
  termsSec1P1,
  termsSection1,
  termsTitle,
  termsUpdate,
  colorSecondary,
  colorIcon,
} from "@/config/myreceipt";

// Components libraries
import Footer from "@/components/sections/FooterSection";
import Header from "@/components/sections/HeaderSection";

export default function TermsPage() {
  return (
    <>
      {/* Headersss */}
      <Header />

      {/* Content Section */}
      <div className="flex flex-col items-center gap-8 px-4 md:px-20 py-8">
        <main className="w-full max-w-3xl space-y-8">
          {/* Title */}
          <div className="text-center">
            <h1
              style={{ color: colorSecondary }}
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal">
              {termsTitle}
            </h1>
            <span style={{ color: colorIcon }} className="text-xs leading-10">
              &#9673; &#9673; &#9673; &#9673;
            </span>
            <h2 style={{ color: colorIcon }} className="text-sm font-medium">
              {termsUpdate}
            </h2>
          </div>

          {/* Policy Overview */}
          <section className="space-y-4">
            <h3
              style={{ color: colorSecondary }}
              className="text-base md:text-lg lg:text-xl xl:text-2xl font-semibold uppercase">
              {termsSection1}
            </h3>
            <p
              style={{ color: colorIcon }}
              className="text-sm font-medium leading-relaxed">
              {termsSec1P1}
            </p>
            <p
              style={{ color: colorIcon }}
              className="text-sm font-medium leading-relaxed">
              {termsSec1P2}
            </p>
          </section>
          <section className="space-y-4">
            <h3
              style={{ color: colorSecondary }}
              className="text-base md:text-lg lg:text-xl xl:text-2xl font-semibold uppercase">
              {termsSection2}
            </h3>
            <ul className="list-disc list-outside space-y-2">
              <li
                style={{ color: colorIcon }}
                className="text-sm font-medium leading-relaxed">
                {termsSec2Ul1Li1}
              </li>
              <li
                style={{ color: colorIcon }}
                className="text-sm font-medium leading-relaxed">
                {termsSec2Ul1Li2}
              </li>
            </ul>
          </section>
          <section className="space-y-4">
            <h3
              style={{ color: colorSecondary }}
              className="text-base md:text-lg lg:text-xl xl:text-2xl font-semibold uppercase">
              {termsSection3}
            </h3>
            <p
              style={{ color: colorIcon }}
              className="text-sm font-medium leading-relaxed">
              {termsSec3P1}
            </p>
            <p
              style={{ color: colorIcon }}
              className="text-sm font-medium leading-relaxed">
              {termsSec3P2}
            </p>
            <p
              style={{ color: colorIcon }}
              className="text-sm font-medium leading-relaxed">
              {termsSec3P3}
            </p>
          </section>
          <section className="space-y-4">
            <h3
              style={{ color: colorSecondary }}
              className="text-base md:text-lg lg:text-xl xl:text-2xl font-semibold uppercase">
              {termsSection4}
            </h3>
            <p
              style={{ color: colorIcon }}
              className="text-sm font-medium leading-relaxed">
              {termsSec4P1}
            </p>
            <p
              style={{ color: colorIcon }}
              className="text-sm font-medium leading-relaxed">
              {termsSec4P2}
            </p>
          </section>
          <section className="space-y-4">
            <h3
              style={{ color: colorSecondary }}
              className="text-base md:text-lg lg:text-xl xl:text-2xl font-semibold uppercase">
              {termsSection5}
            </h3>
            <p
              style={{ color: colorIcon }}
              className="text-sm font-medium leading-relaxed">
              {termsSec5P1}
            </p>
            <p
              style={{ color: colorIcon }}
              className="text-sm font-medium leading-relaxed">
              {termsSec5P2}
            </p>
          </section>
          <section className="space-y-4">
            <h3
              style={{ color: colorSecondary }}
              className="text-base md:text-lg lg:text-xl xl:text-2xl font-semibold uppercase">
              {termsSection6}
            </h3>
            <p
              style={{ color: colorIcon }}
              className="text-sm font-medium leading-relaxed">
              {termsSec6P1}
            </p>
            <p
              style={{ color: colorIcon }}
              className="text-sm font-medium leading-relaxed">
              {termsSec6P2}
            </p>
            <p
              style={{ color: colorIcon }}
              className="text-sm font-medium leading-relaxed">
              {termsSec6P3}
            </p>
          </section>
          <section className="space-y-4">
            <h3
              style={{ color: colorSecondary }}
              className="text-base md:text-lg lg:text-xl xl:text-2xl font-semibold uppercase">
              {termsSection7}
            </h3>
            <p
              style={{ color: colorIcon }}
              className="text-sm font-medium leading-relaxed">
              {termsSec7P1}
            </p>
            <p
              style={{ color: colorIcon }}
              className="text-sm font-medium leading-relaxed">
              {termsSec7P2}
            </p>
            <p
              style={{ color: colorIcon }}
              className="text-sm font-medium leading-relaxed">
              {termsSec7P3}
            </p>
            <ol className="list-decimal list-outside space-y-2">
              <li
                style={{ color: colorIcon }}
                className="text-sm font-medium leading-relaxed">
                {termsSec7Ol1Li1}
              </li>
              <li
                style={{ color: colorIcon }}
                className="text-sm font-medium leading-relaxed">
                {termsSec7Ol1Li2}
              </li>
            </ol>
            <p
              style={{ color: colorIcon }}
              className="text-sm font-medium leading-relaxed">
              {termsSec7P4}
            </p>
            <p
              style={{ color: colorIcon }}
              className="text-sm font-medium leading-relaxed">
              {termsSec7P5}
            </p>
          </section>
          <section className="space-y-4">
            <h3
              style={{ color: colorSecondary }}
              className="text-base md:text-lg lg:text-xl xl:text-2xl font-semibold uppercase">
              {termsSection8}
            </h3>
            <p
              style={{ color: colorIcon }}
              className="text-sm font-medium leading-relaxed">
              {termsSec8P1}
            </p>
            <ul className="list-disc list-outside space-y-2">
              <li
                style={{ color: colorIcon }}
                className="text-sm font-medium leading-relaxed">
                {termsSec8Ul1Li1}
              </li>
              <li
                style={{ color: colorIcon }}
                className="text-sm font-medium leading-relaxed">
                {termsSec8Ul1Li2}
              </li>
              <li
                style={{ color: colorIcon }}
                className="text-sm font-medium leading-relaxed">
                {termsSec8Ul1Li3}
              </li>
              <li
                style={{ color: colorIcon }}
                className="text-sm font-medium leading-relaxed">
                {termsSec8Ul1Li4}
              </li>
              <li
                style={{ color: colorIcon }}
                className="text-sm font-medium leading-relaxed">
                {termsSec8Ul1Li5}
              </li>
              <li
                style={{ color: colorIcon }}
                className="text-sm font-medium leading-relaxed">
                {termsSec8Ul1Li6}
              </li>
              <li
                style={{ color: colorIcon }}
                className="text-sm font-medium leading-relaxed">
                {termsSec8Ul1Li7}
              </li>
            </ul>
          </section>
          <section className="space-y-4">
            <h3
              style={{ color: colorSecondary }}
              className="text-base md:text-lg lg:text-xl xl:text-2xl font-semibold uppercase">
              {termsSection9}
            </h3>
            <p
              style={{ color: colorIcon }}
              className="text-sm font-medium leading-relaxed">
              {termsSec9P1}
            </p>
            <ul className="list-disc list-outside space-y-2">
              <li
                style={{ color: colorIcon }}
                className="text-sm font-medium leading-relaxed">
                {termsSec9Ul1Li1}
              </li>
              <li
                style={{ color: colorIcon }}
                className="text-sm font-medium leading-relaxed">
                {termsSec9Ul1Li2}
              </li>
              <li
                style={{ color: colorIcon }}
                className="text-sm font-medium leading-relaxed">
                {termsSec9Ul1Li3}
              </li>
              <li
                style={{ color: colorIcon }}
                className="text-sm font-medium leading-relaxed">
                {termsSec9Ul1Li4}
              </li>
              <li
                style={{ color: colorIcon }}
                className="text-sm font-medium leading-relaxed">
                {termsSec9Ul1Li5}
              </li>
              <li
                style={{ color: colorIcon }}
                className="text-sm font-medium leading-relaxed">
                {termsSec9Ul1Li6}
              </li>
            </ul>
            <p
              style={{ color: colorIcon }}
              className="text-sm font-medium leading-relaxed">
              {termsSec9P2}
            </p>
          </section>
          <section className="space-y-4">
            <h3
              style={{ color: colorSecondary }}
              className="text-base md:text-lg lg:text-xl xl:text-2xl font-semibold uppercase">
              {termsSection10}
            </h3>
            <p
              style={{ color: colorIcon }}
              className="text-sm font-medium leading-relaxed">
              {termsSec10P1}
            </p>
            <p
              style={{ color: colorIcon }}
              className="text-sm font-medium leading-relaxed">
              {termsSec10P2}
            </p>
            <p
              style={{ color: colorIcon }}
              className="text-sm font-medium leading-relaxed">
              {termsSec10P3}
            </p>
            <p
              style={{ color: colorIcon }}
              className="text-sm font-medium leading-relaxed">
              {termsSec10P4}
            </p>
            <p
              style={{ color: colorIcon }}
              className="text-sm font-medium leading-relaxed">
              {termsSec10P5}
            </p>
            <p
              style={{ color: colorIcon }}
              className="text-sm font-medium leading-relaxed">
              {termsSec10P6}
            </p>
          </section>
          <section className="space-y-4">
            <h3
              style={{ color: colorSecondary }}
              className="text-base md:text-lg lg:text-xl xl:text-2xl font-semibold uppercase">
              {termsSection11}
            </h3>
            <p
              style={{ color: colorIcon }}
              className="text-sm font-medium leading-relaxed">
              {termsSec11P1}
            </p>
            <p
              style={{ color: colorIcon }}
              className="text-sm font-medium leading-relaxed">
              {termsSec11P2}
            </p>
            <p
              style={{ color: colorIcon }}
              className="text-sm font-medium leading-relaxed">
              {termsSec11P3}
            </p>
          </section>
          <section className="space-y-4">
            <h3
              style={{ color: colorSecondary }}
              className="text-base md:text-lg lg:text-xl xl:text-2xl font-semibold uppercase">
              {termsSection12}
            </h3>
            <p
              style={{ color: colorIcon }}
              className="text-sm font-medium leading-relaxed">
              {termsSec12P1}
            </p>
            <ul className="list-disc list-outside space-y-2">
              <li
                style={{ color: colorIcon }}
                className="text-sm font-medium leading-relaxed">
                {termsSec12Ul1Li1}
              </li>
              <li
                style={{ color: colorIcon }}
                className="text-sm font-medium leading-relaxed">
                {termsSec12Ul1Li2}
              </li>
              <li
                style={{ color: colorIcon }}
                className="text-sm font-medium leading-relaxed">
                {termsSec12Ul1Li3}
              </li>
            </ul>
            <p
              style={{ color: colorIcon }}
              className="text-sm font-medium leading-relaxed">
              {termsSec12P2}
            </p>
          </section>
          <section className="space-y-4">
            <h3
              style={{ color: colorSecondary }}
              className="text-base md:text-lg lg:text-xl xl:text-2xl font-semibold uppercase">
              {termsSection13}
            </h3>
            <p
              style={{ color: colorIcon }}
              className="text-sm font-medium leading-relaxed">
              {termsSec13P1}
            </p>
            <p
              style={{ color: colorIcon }}
              className="text-sm font-medium leading-relaxed">
              {termsSec13P2}
            </p>
            <p
              style={{ color: colorIcon }}
              className="text-sm font-medium leading-relaxed">
              {termsSec13P3}
            </p>
            <p
              style={{ color: colorIcon }}
              className="text-sm font-medium leading-relaxed">
              {termsSec13P4}
            </p>
            <p
              style={{ color: colorIcon }}
              className="text-sm font-medium leading-relaxed">
              {termsSec13P5}
            </p>
            <p
              style={{ color: colorIcon }}
              className="text-sm font-medium leading-relaxed">
              {termsSec13P6}
            </p>
            <p
              style={{ color: colorIcon }}
              className="text-sm font-medium leading-relaxed">
              {termsSec13P7}
            </p>
            <p
              style={{ color: colorIcon }}
              className="text-sm font-medium leading-relaxed">
              {termsSec13P8}
            </p>
            <p
              style={{ color: colorIcon }}
              className="text-sm font-medium leading-relaxed">
              {termsSec13P9}
            </p>
            <p
              style={{ color: colorIcon }}
              className="text-sm font-medium leading-relaxed">
              {termsSec13P10}
            </p>
            <p
              style={{ color: colorIcon }}
              className="text-sm font-medium leading-relaxed">
              {termsSec13P11}
            </p>
            <p
              style={{ color: colorIcon }}
              className="text-sm font-medium leading-relaxed">
              {termsSec13P12}
            </p>
            <p
              style={{ color: colorIcon }}
              className="text-sm font-medium leading-relaxed">
              {termsSec13P13}
            </p>
          </section>
          <div className="text-center">
            <span style={{ color: colorIcon }} className="text-xs leading-10">
              &#9673; &#9673; &#9673; &#9673;
            </span>
          </div>
        </main>
      </div>

      {/* Footersss */}
      <Footer />
    </>
  );
}
