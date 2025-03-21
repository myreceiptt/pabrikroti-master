// /src/components/logins/FooterSection.tsx

"use client";

// External libraries
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa6";

// Blockchain configurations
import {
  entityAlias1,
  poweredBy,
  footerBackground,
  socialTitle,
  linkLinkedIn,
  linkInstagram,
  linkYouTube,
  linkEmail,
  linkWhatsApp,
  copyRight,
  officiallyLicensed,
  anchorPrivacy,
  anchorTerms,
  footerPower,
} from "@/config/osloid";

// Components libraries
import Subscribe from "./SubscribeForm";

const Footer: React.FC = () => {
  return (
    <footer
      style={{ backgroundColor: footerBackground }}
      className="w-full py-4 px-4 md:px-20">
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
        <div className="w-full flex flex-col">
          {/* Newsletter Signup */}
          <Subscribe />
        </div>
        <div className="w-full flex flex-col">
          {/* Social Media Links */}
          <h3 className="sm:text-end text-center text-xs sm:text-sm md:text-base font-semibold text-back-ground">
            {socialTitle}
          </h3>
          <div className="flex gap-2 mt-2 sm:justify-end justify-center">
            <Link
              href={linkLinkedIn}
              target="_blank"
              className="w-8 h-8 flex items-center justify-center text-xl text-back-ground bg-back-box-icon/50 m-1 rounded-lg">
              <FaLinkedin />
            </Link>
            <Link
              href={linkInstagram}
              target="_blank"
              className="w-8 h-8 flex items-center justify-center text-xl text-back-ground bg-back-box-icon/50 m-1 rounded-lg">
              <FaInstagram />
            </Link>
            <Link
              href={linkYouTube}
              target="_blank"
              className="w-8 h-8 flex items-center justify-center text-xl text-back-ground bg-back-box-icon/50 m-1 rounded-lg">
              <FaYoutube />
            </Link>
            <Link
              href={linkEmail}
              target="_blank"
              className="w-8 h-8 flex items-center justify-center text-xl text-back-ground bg-back-box-icon/50 m-1 rounded-lg">
              <FaEnvelope />
            </Link>
            <Link
              href={linkWhatsApp}
              target="_blank"
              className="w-8 h-8 flex items-center justify-center text-xl text-back-ground bg-back-box-icon/50 m-1 rounded-lg">
              <FaWhatsapp />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full border-t border-border-tombol mt-4 pt-4 flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4">
        {/* Copyrights (Left on lg, Center on md) */}
        <div className="w-full text-xs text-center sm:text-left text-back-ground">
          <p>
            &copy; {new Date().getFullYear()} {entityAlias1}. {copyRight}
          </p>
          <p>
            {officiallyLicensed} {entityAlias1}.
          </p>
          <div className="flex justify-center sm:justify-start gap-4 mt-2">
            <Link
              href="/terms"
              target="_blank"
              className="text-xs text-center sm:text-left text-back-ground">
              {anchorPrivacy}
            </Link>
            <Link
              href="/terms"
              target="_blank"
              className="text-xs text-center sm:text-left text-back-ground">
              {anchorTerms}
            </Link>
          </div>
        </div>

        {/* Logo & Powered By (Right on lg, Center on md) */}
        <div className="w-full flex justify-center sm:justify-end cursor-pointer">
          <Image src={footerPower} alt={poweredBy} width={563} height={75} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
