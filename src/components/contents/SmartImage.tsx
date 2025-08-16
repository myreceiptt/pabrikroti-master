// /src/components/contents/SmartImage.tsx

"use client";

// External libraries
import Image from "next/image";
import React from "react";

function isLocal(src: string) {
  return src.startsWith("/") && !src.startsWith("//");
}

// loader “raw”: kembalikan URL apa adanya (abaikan width/quality)
const rawLoader: NonNullable<React.ComponentProps<typeof Image>["loader"]> = ({
  src,
}) => src;

type Props = {
  src?: string;
  alt: string;
  className?: string;
  fill?: boolean;
  sizes?: string;
  width?: number;
  height?: number;
};

export default function SmartImage({
  src,
  alt,
  className,
  fill,
  sizes,
  width,
  height,
}: Props) {
  if (!src) return <div className={className} aria-hidden />;

  // 1) Asset lokal → <Image> normal
  if (isLocal(src)) {
    return fill ? (
      <Image src={src} alt={alt} className={className} fill sizes={sizes} />
    ) : (
      <Image
        src={src}
        alt={alt}
        className={className}
        width={width ?? 48}
        height={height ?? 48}
      />
    );
  }

  // 2) URL remote → <Image> dengan custom loader + unoptimized
  return fill ? (
    <Image
      src={src}
      alt={alt}
      className={className}
      fill
      sizes={sizes}
      loader={rawLoader}
      unoptimized
      // optional: privasi
      referrerPolicy="no-referrer"
    />
  ) : (
    <Image
      src={src}
      alt={alt}
      className={className}
      width={width ?? 48}
      height={height ?? 48}
      loader={rawLoader}
      unoptimized
      referrerPolicy="no-referrer"
    />
  );
}
