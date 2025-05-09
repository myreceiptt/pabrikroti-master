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
import hexToRgba, {
  anchorPrivacy,
  anchorTerms,
  colorAccent,
  colorBorder,
  colorPrimary,
  colorSecondary,
  copyRight,
  entityAlias1,
  footerPower,
  linkDiscord,
  linkEmail,
  linkFacebook,
  linkInstagram,
  linkLinkedIn,
  linkPower,
  linkWebsite,
  linkWhatsApp,
  linkXTwitter,
  linkYouTube,
  officiallyLicensed,
  poweredBy,
  socialTitle,
} from "@/config/myreceipt";

// Components libraries
import Subscribe from "@/components/sections/SubscribeForm";

export default function Footer() {
  return (
    <footer
      style={{ backgroundColor: colorAccent }}
      className="w-full py-4 px-4 md:px-20">
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
        <div className="w-full flex flex-col">
          {/* Newsletter Signup */}
          <Subscribe />
        </div>
        <div className="w-full flex flex-col">
          {/* Social Media Links */}
          <h3
            style={{ color: colorPrimary }}
            className="sm:text-end text-center text-xs sm:text-sm md:text-base font-semibold">
            {socialTitle}
          </h3>
          <div className="flex gap-2 mt-2 sm:justify-end justify-center">
            {linkXTwitter && (
              <Link
                href={linkXTwitter}
                target="_blank"
                style={{
                  color: colorPrimary,
                  backgroundColor: hexToRgba(colorSecondary, 1.0),
                }}
                className="w-8 h-8 flex items-center justify-center text-xl m-1 rounded-lg">
                <FaTwitter />
              </Link>
            )}

            {linkLinkedIn && (
              <Link
                href={linkLinkedIn}
                target="_blank"
                style={{
                  color: colorPrimary,
                  backgroundColor: hexToRgba(colorSecondary, 1.0),
                }}
                className="w-8 h-8 flex items-center justify-center text-xl m-1 rounded-lg">
                <FaLinkedin />
              </Link>
            )}

            {linkInstagram && (
              <Link
                href={linkInstagram}
                target="_blank"
                style={{
                  color: colorPrimary,
                  backgroundColor: hexToRgba(colorSecondary, 1.0),
                }}
                className="w-8 h-8 flex items-center justify-center text-xl m-1 rounded-lg">
                <FaInstagram />
              </Link>
            )}

            {linkFacebook && (
              <Link
                href={linkFacebook}
                target="_blank"
                style={{
                  color: colorPrimary,
                  backgroundColor: hexToRgba(colorSecondary, 1.0),
                }}
                className="w-8 h-8 flex items-center justify-center text-xl m-1 rounded-lg">
                <FaFacebook />
              </Link>
            )}

            {linkDiscord && (
              <Link
                href={linkDiscord}
                target="_blank"
                style={{
                  color: colorPrimary,
                  backgroundColor: hexToRgba(colorSecondary, 1.0),
                }}
                className="w-8 h-8 flex items-center justify-center text-xl m-1 rounded-lg">
                <FaDiscord />
              </Link>
            )}

            {linkYouTube && (
              <Link
                href={linkYouTube}
                target="_blank"
                style={{
                  color: colorPrimary,
                  backgroundColor: hexToRgba(colorSecondary, 1.0),
                }}
                className="w-8 h-8 flex items-center justify-center text-xl m-1 rounded-lg">
                <FaYoutube />
              </Link>
            )}

            {linkEmail && (
              <Link
                href={linkEmail}
                target="_blank"
                style={{
                  color: colorPrimary,
                  backgroundColor: hexToRgba(colorSecondary, 1.0),
                }}
                className="w-8 h-8 flex items-center justify-center text-xl m-1 rounded-lg">
                <FaEnvelope />
              </Link>
            )}

            {linkWhatsApp && (
              <Link
                href={linkWhatsApp}
                target="_blank"
                style={{
                  color: colorPrimary,
                  backgroundColor: hexToRgba(colorSecondary, 1.0),
                }}
                className="w-8 h-8 flex items-center justify-center text-xl m-1 rounded-lg">
                <FaWhatsapp />
              </Link>
            )}

            {linkWebsite && (
              <Link
                href={linkWebsite}
                target="_blank"
                style={{
                  color: colorPrimary,
                  backgroundColor: hexToRgba(colorSecondary, 1.0),
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
          borderColor: colorBorder,
        }}
        className="w-full border-t mt-4 pt-4 flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4">
        {/* Copyrights */}
        <div
          style={{
            color: colorPrimary,
          }}
          className="w-full text-xs text-center sm:text-left">
          <p>
            &copy; {new Date().getFullYear()} {entityAlias1}. {copyRight}
          </p>
          <p>{`${officiallyLicensed} ${entityAlias1}.`}</p>
          <div className="flex justify-center sm:justify-start gap-4 mt-2">
            <Link
              href="/terms"
              target="_blank"
              style={{
                color: colorPrimary,
              }}
              className="text-xs text-center sm:text-left">
              {anchorTerms} & {anchorPrivacy}
            </Link>
          </div>
        </div>

        {/* Logo & Powered By */}
        <div className="w-full flex justify-center sm:justify-end cursor-pointer">
          <Link href={linkPower} target="_blank">
            <Image src={footerPower} alt={poweredBy} width={563} height={75} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
