// /src/components/logins/FooterSection.tsx

"use client";

// External libraries
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaDiscord,
  FaXTwitter,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa6";

// Components libraries
import Subscribe from "./SubscribeForm";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-hitam-judul-body py-4 px-4 md:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-4">
        <div className="w-full flex flex-col justify-items-center gap-4">
          {/* Newsletter Signup */}
          <Subscribe />
        </div>
        <div className="w-full flex flex-col sm:flex-row justify-between gap-4">
          {/* Social Media Links */}
          <div className="w-full sm:w-2/3">
            <h3 className="text-center sm:text-left text-xs md:text-sm font-semibold text-back-ground">
              Join the Community
            </h3>
            <div className="flex gap-2 mt-2 justify-center sm:justify-start">
              <Link
                href="#"
                className="w-8 h-8 flex items-center justify-center text-xl text-back-ground bg-back-box-icon m-1 rounded-lg">
                <FaDiscord />
              </Link>
              <Link
                href="#"
                className="w-8 h-8 flex items-center justify-center text-xl text-back-ground bg-back-box-icon m-1 rounded-lg">
                <FaXTwitter />
              </Link>
              <Link
                href="#"
                className="w-8 h-8 flex items-center justify-center text-xl text-back-ground bg-back-box-icon m-1 rounded-lg">
                <FaInstagram />
              </Link>
              <Link
                href="#"
                className="w-8 h-8 flex items-center justify-center text-xl text-back-ground bg-back-box-icon m-1 rounded-lg">
                <FaFacebookF />
              </Link>
              <Link
                href="#"
                className="w-8 h-8 flex items-center justify-center text-xl text-back-ground bg-back-box-icon m-1 rounded-lg">
                <FaYoutube />
              </Link>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="w-full sm:w-1/3">
            <h3 className="text-center sm:text-left text-xs md:text-sm font-semibold text-icon-wording">
              Claim Pages
            </h3>
            <ul className="text-center sm:text-left text-xs sm:text-sm md:text-base text-back-ground mt-2">
              <li>
                <Link href="/free">Free Claim</Link>
              </li>
              <li>
                <Link href="#">Paid Claim</Link>
              </li>
              <li>
                <Link href="/redeem">Coins Reward</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full border-t border-border-tombol mt-4 pt-4 flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4">
        {/* Copyrights (Left on lg, Center on md) */}
        <div className="w-full text-xs text-center sm:text-left text-icon-wording">
          <p>
            © 2025 Harmoni Istiqlal X Bukhari Creative Group. All rights
            reserved.
          </p>
          <div className="flex justify-center sm:justify-start gap-4 mt-2">
            <Link
              href="/terms"
              target="_blank"
              className="text-xs text-center sm:text-left text-back-ground">
              Terms of Service
            </Link>
            <Link
              href="/privacy"
              target="_blank"
              className="text-xs text-center sm:text-left text-back-ground">
              Privacy Policy
            </Link>
          </div>
        </div>

        {/* Logo & Powered By (Right on lg, Center on md) */}
        <div className="w-full flex justify-center sm:justify-end">
          <Image
            src="/images/bukhari-fa-logo-footer.png"
            alt="Harmoni Istiqlal X Bukhari Creative Group"
            width={768}
            height={60}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
