// /src/components/contents/SmartImage.tsx

"use client";

// External libraries
import Image, { type ImageProps } from "next/image";
import type { StaticImageData } from "next/image";
import React from "react";

/** --- Util umum --- */
function isLocal(src: string) {
  return src.startsWith("/") && !src.startsWith("//");
}

// loader “raw”: kembalikan URL apa adanya (abaikan width/quality)
const rawLoader: NonNullable<React.ComponentProps<typeof Image>["loader"]> = ({
  src,
}) => src;

function toStringSrc(src: string | StaticImageData | undefined): string {
  if (!src) return "";
  return typeof src === "string" ? src : ((src as any)?.src ?? "");
}
function isGif(src: string | StaticImageData | undefined): boolean {
  const raw = toStringSrc(src).toLowerCase().split("?")[0];
  return raw.endsWith(".gif");
}

/** ----------------------------------------------------------------
 *  A) SmartTVImage — perilaku lama (logo/poster remote pakai rawLoader + unoptimized)
 *  ---------------------------------------------------------------- */
type TVProps = {
  src?: string;
  alt: string;
  className?: string;
  fill?: boolean;
  sizes?: string;
  width?: number;
  height?: number;
};

export default function SmartTVImage({
  src,
  alt,
  className,
  fill,
  sizes,
  width,
  height,
}: TVProps) {
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

/** ----------------------------------------------------------------
 *  B) SmartGIFImage — otomatis unoptimized jika .gif; selain itu optimized
 *  ---------------------------------------------------------------- */
type GIFProps = Omit<ImageProps, "unoptimized" | "src"> & {
  src: string | StaticImageData;
};

export function SmartGIFImage({
  src,
  alt,
  className,
  fill,
  sizes,
  width,
  height,
  ...rest
}: GIFProps) {
  const unopt = isGif(src);

  if (fill) {
    return (
      <Image
        src={src as any}
        alt={alt}
        className={className}
        fill
        sizes={sizes}
        unoptimized={unopt}
        {...rest}
      />
    );
  }

  return (
    <Image
      src={src as any}
      alt={alt}
      className={className}
      width={width ?? 48}
      height={height ?? 48}
      unoptimized={unopt}
      {...rest}
    />
  );
}
