// /src/components/sections/FooterSection.tsx

"use client";

// External libraries
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaDiscord,
  FaEnvelope,
  FaFacebook,
  FaGlobe,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa6";

// Blockchain configurations
import { getActiveReceipt } from "@/config/receipts";
import { hexToRgba } from "@/config/utils";

// Components libraries
import Subscribe from "@/components/sections/SubscribeForm";

export default function Footer() {
  const { receipt } = getActiveReceipt();

  return (
    <footer
      style={{ backgroundColor: receipt.colorTertiary }}
      className="w-full py-4 px-4 md:px-20">
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
        <div className="w-full flex flex-col">
          {/* Newsletter Signup */}
          <Subscribe />
        </div>
        <div className="w-full flex flex-col">
          {/* Social Media Links */}
          <h3
            style={{ color: receipt.colorSecondary }}
            className="sm:text-end text-center text-xs sm:text-sm md:text-base font-semibold">
            {receipt.footSocial}
          </h3>
          <div className="flex gap-2 mt-2 sm:justify-end justify-center">
            {receipt.footXTwitter && (
              <Link
                href={receipt.footXTwitter}
                target="_blank"
                style={{
                  color: receipt.colorPrimer,
                  backgroundColor: hexToRgba(receipt.colorSekunder, 0.7),
                }}
                className="w-8 h-8 flex items-center justify-center text-xl m-1 rounded-lg">
                <FaTwitter />
              </Link>
            )}

            {receipt.footLinkedIn && (
              <Link
                href={receipt.footLinkedIn}
                target="_blank"
                style={{
                  color: receipt.colorPrimer,
                  backgroundColor: hexToRgba(receipt.colorSekunder, 0.7),
                }}
                className="w-8 h-8 flex items-center justify-center text-xl m-1 rounded-lg">
                <FaLinkedin />
              </Link>
            )}

            {receipt.footInstagram && (
              <Link
                href={receipt.footInstagram}
                target="_blank"
                style={{
                  color: receipt.colorPrimer,
                  backgroundColor: hexToRgba(receipt.colorSekunder, 0.7),
                }}
                className="w-8 h-8 flex items-center justify-center text-xl m-1 rounded-lg">
                <FaInstagram />
              </Link>
            )}

            {receipt.footFacebook && (
              <Link
                href={receipt.footFacebook}
                target="_blank"
                style={{
                  color: receipt.colorPrimer,
                  backgroundColor: hexToRgba(receipt.colorSekunder, 0.7),
                }}
                className="w-8 h-8 flex items-center justify-center text-xl m-1 rounded-lg">
                <FaFacebook />
              </Link>
            )}

            {receipt.footDiscord && (
              <Link
                href={receipt.footDiscord}
                target="_blank"
                style={{
                  color: receipt.colorPrimer,
                  backgroundColor: hexToRgba(receipt.colorSekunder, 0.7),
                }}
                className="w-8 h-8 flex items-center justify-center text-xl m-1 rounded-lg">
                <FaDiscord />
              </Link>
            )}

            {receipt.footYouTube && (
              <Link
                href={receipt.footYouTube}
                target="_blank"
                style={{
                  color: receipt.colorPrimer,
                  backgroundColor: hexToRgba(receipt.colorSekunder, 0.7),
                }}
                className="w-8 h-8 flex items-center justify-center text-xl m-1 rounded-lg">
                <FaYoutube />
              </Link>
            )}

            {receipt.footEmail && (
              <Link
                href={receipt.footEmail}
                target="_blank"
                style={{
                  color: receipt.colorPrimer,
                  backgroundColor: hexToRgba(receipt.colorSekunder, 0.7),
                }}
                className="w-8 h-8 flex items-center justify-center text-xl m-1 rounded-lg">
                <FaEnvelope />
              </Link>
            )}

            {receipt.footWhatsApp && (
              <Link
                href={receipt.footWhatsApp}
                target="_blank"
                style={{
                  color: receipt.colorPrimer,
                  backgroundColor: hexToRgba(receipt.colorSekunder, 0.7),
                }}
                className="w-8 h-8 flex items-center justify-center text-xl m-1 rounded-lg">
                <FaWhatsapp />
              </Link>
            )}

            {receipt.footWebsite && (
              <Link
                href={receipt.footWebsite}
                target="_blank"
                style={{
                  color: receipt.colorPrimer,
                  backgroundColor: hexToRgba(receipt.colorSekunder, 0.7),
                }}
                className="w-8 h-8 flex items-center justify-center text-xl m-1 rounded-lg">
                <FaGlobe />
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div
        style={{
          borderColor: hexToRgba(receipt.colorSekunder, 0.7),
        }}
        className="w-full border-t mt-4 pt-4 flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4">
        {/* Copyrights */}
        <div
          style={{
            color: receipt.colorSecondary,
          }}
          className="w-full text-xs text-center sm:text-left">
          <p>
            &copy; {new Date().getFullYear()} {receipt.proAlias1}.{" "}
            {receipt.footCopyRight}
          </p>
          <p>
            {receipt.footLicensed} {receipt.proAlias1}.
          </p>
          <div className="flex justify-center sm:justify-start gap-4 mt-2">
            <Link
              href="/terms"
              target="_blank"
              style={{
                color: receipt.colorSecondary,
              }}
              className="text-xs text-center sm:text-left">
              {receipt.footTerms} & {receipt.footPrivacy}
            </Link>
          </div>
        </div>

        {/* Logo & Powered By */}
        <div className="w-full flex justify-center sm:justify-end cursor-pointer">
          <Link href={receipt.loginLinkPower} target="_blank">
            <Image
              src={receipt.footPower}
              alt={receipt.loginPoweredBy}
              width={563}
              height={75}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
