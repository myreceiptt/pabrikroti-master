// /src/components/logins/LoginLayout.tsx

// External libraries
import Image from "next/image";
import Link from "next/link";
import React from "react";

// Blockchain configurations
import { artLogin, bannerLogin, loginPower, titlePro, descriptionPro } from "@/config/osloid";

const LoginLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="w-full h-screen grid grid-cols-1 md:grid-cols-2">
    <div className="w-full relative hidden md:block overflow-hidden">
      <Image
        src={artLogin}
        alt="Bukhari Islamic Art Background for Login Page."
        width={1080}
        height={1103}
        className="absolute inset-0 w-full h-full object-cover object-right"
        priority
      />
    </div>
    <div className="w-full flex flex-col gap-4 md:gap-8 lg:gap-12 items-center justify-center py-4 px-4 md:px-8 lg:px-12">
      {/* Headerssss */}
      <Link href="/">
        <Image
          src={bannerLogin}
          alt="Bukhari Islamic Art Banner with Partners Logo."
          width={1080}
          height={149}
          className="z-0 object-contain w-full"
          priority
        />
      </Link>
      <div id="headers" className="w-full flex flex-col gap-2">
        <h1 className="flex text-left text-1xl md:text-2xl lg:text-3xl xl:text-4xl font-normal text-hitam-judul-body tracking-tighter justify-start align-middle">
          {titlePro}
        </h1>
        <h2 className="flex text-left text-xs md:text-sm lg:text-base xl:text-lg font-normal text-hitam-judul-body tracking-tighter justify-start align-middle">
          {descriptionPro}
        </h2>
      </div>
      {children}
      {/* Footerssss */}
      <Link href="https://voyage.co.id/" target="_blank">
        <Image
          src={loginPower}
          alt="Bukhari Islamic Art Powered by VOYAGE."
          width={1080}
          height={108}
          className="z-0 object-contain w-full"
          priority
        />
      </Link>
    </div>
  </div>
);

export default LoginLayout;
