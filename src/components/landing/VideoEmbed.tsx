// /src/components/landing/VideoEmbed.tsx

"use client";

// External libraries
import type Hls from "hls.js";
import Image from "next/image";
import React, { useEffect, useMemo, useRef, useState } from "react";

// Blockchain configurations
import { getActiveReceipt } from "@/config/receipts";

// Components libraries
import ReusableCTA from "@/components/landing/ReusableCTA";
import { detectProvider } from "@/config/utils";

type EmbedKind = "iframe" | "video";

function toIframeSrc(raw: string): string | null {
  try {
    const u = new URL(raw);
    const host = u.hostname.replace(/\.$/, "").toLowerCase();
    const provider = detectProvider(u);

    const addParams = (url: URL) => {
      url.searchParams.set("playsinline", "1");
      return url.toString();
    };

    if (provider === "youtube") {
      let id = "";
      if (host === "youtu.be") {
        id = u.pathname.split("/").filter(Boolean)[0] ?? "";
      } else if (u.pathname.startsWith("/watch")) {
        id = u.searchParams.get("v") ?? "";
      } else if (u.pathname.startsWith("/shorts/")) {
        id = u.pathname.split("/").filter(Boolean)[1] ?? "";
      } else if (u.pathname.startsWith("/embed/")) {
        return addParams(u);
      }
      if (!id) return null;
      const out = new URL(`https://www.youtube.com/embed/${id}`);
      out.searchParams.set("rel", "0");
      return addParams(out);
    }

    if (provider === "vimeo") {
      if (host === "player.vimeo.com") return addParams(u);
      const id = u.pathname.split("/").filter(Boolean)[0] ?? "";
      if (!id || isNaN(Number(id))) return null;
      const out = new URL(`https://player.vimeo.com/video/${id}`);
      return addParams(out);
    }

    if (provider === "dailymotion") {
      let id = "";
      if (host === "dai.ly") {
        id = u.pathname.split("/").filter(Boolean)[0] ?? "";
      } else {
        const parts = u.pathname.split("/").filter(Boolean);
        const idx = parts.indexOf("video");
        id = idx >= 0 ? parts[idx + 1] ?? "" : "";
      }
      if (!id) return null;
      const out = new URL(`https://www.dailymotion.com/embed/video/${id}`);
      return addParams(out);
    }

    // Unknown provider → jangan pakai iframe raw URL
    return null;
  } catch {
    return null;
  }
}

const isDirectVideo = (u: string) => /\.(mp4|webm|ogg)(\?.*)?$/i.test(u);
const isHls = (u: string) => /\.m3u8(\?.*)?$/i.test(u);

export default function VideoEmbed() {
  const { receipt } = getActiveReceipt();
  const { cover, url, title, cta } = receipt.videoEmbed || {};

  // ==== PENTING: panggil semua hooks dulu, tanpa early return ====
  const rawUrl = url ?? "";
  const hasUrl = !!rawUrl;

  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const hlsRef = useRef<Hls | null>(null);

  // cleanup HLS saat unmount
  useEffect(() => {
    return () => {
      if (hlsRef.current) {
        hlsRef.current.destroy?.();
        hlsRef.current = null;
      }
    };
  }, []);

  const isM3U8 = useMemo(() => isHls(rawUrl), [rawUrl]);
  const isFile = useMemo(() => isDirectVideo(rawUrl), [rawUrl]);

  // HLS / file langsung → JANGAN cari iframe
  const iframeSrcBase = useMemo(() => {
    if (isM3U8 || isFile) return null;
    return toIframeSrc(rawUrl);
  }, [isM3U8, isFile, rawUrl]);

  const kind: EmbedKind = useMemo(() => {
    if (isM3U8 || isFile) return "video";
    // iframe hanya jika ada embed URL valid
    return iframeSrcBase ? "iframe" : "video";
  }, [isM3U8, isFile, iframeSrcBase]);

  // Autoplay params untuk iframe saat user klik Play
  const iframeSrc = useMemo(() => {
    if (kind !== "iframe" || !isPlaying || !iframeSrcBase) return "";
    try {
      const u = new URL(iframeSrcBase);
      u.searchParams.set("autoplay", "1");
      u.searchParams.set("mute", "1");
      u.searchParams.set("muted", "1");
      u.searchParams.set("playsinline", "1");
      return u.toString();
    } catch {
      return iframeSrcBase || "";
    }
  }, [kind, isPlaying, iframeSrcBase]);

  // Siapkan VIDEO/HLS setelah tombol Play diklik
  useEffect(() => {
    const setup = async () => {
      if (!isPlaying || kind !== "video" || !videoRef.current || !hasUrl)
        return;
      const video = videoRef.current;

      // Direct MP4/WebM/Ogg → native
      if (!isM3U8) {
        try {
          await video.play();
        } catch {}
        return;
      }

      // HLS .m3u8
      if (video.canPlayType("application/vnd.apple.mpegurl")) {
        try {
          video.src = rawUrl;
          await video.play();
        } catch {}
        return;
      }

      try {
        type HlsClass = typeof import("hls.js").default;
        const { default: HlsCtor } = (await import("hls.js")) as {
          default: HlsClass;
        };
        if (HlsCtor.isSupported()) {
          const hls = new HlsCtor({
            // optional tuning:
            // lowLatencyMode: true,
            // maxBufferLength: 30,
          });
          hlsRef.current = hls;
          hls.attachMedia(video);
          hls.loadSource(rawUrl);
          hls.on(HlsCtor.Events.MANIFEST_PARSED, async () => {
            try {
              await video.play();
            } catch {}
          });
        } else {
          video.src = rawUrl;
          try {
            await video.play();
          } catch {}
        }
      } catch {
        video.src = rawUrl;
        try {
          await video.play();
        } catch {}
      }
    };

    setup();

    // cleanup hls saat ganti mode/url/berhenti main
    return () => {
      if (hlsRef.current) {
        hlsRef.current.destroy?.();
        hlsRef.current = null;
      }
    };
  }, [isPlaying, kind, isM3U8, rawUrl, hasUrl]);

  const onPlayClick = () => setIsPlaying(true);

  // ==== Setelah semua hooks, barulah boleh early return ====
  if (!hasUrl) return null;

  return (
    <section
      style={{ backgroundColor: receipt.colorPrimer }}
      className="w-full rounded-xl md:rounded-2xl lg:rounded-3xl"
      id="who">
      <div className="relative group aspect-video w-full overflow-hidden rounded-xl md:rounded-2xl lg:rounded-3xl">
        {/* COVER sebelum playing */}
        {!isPlaying && cover && (
          <Image
            src={cover}
            alt={title ?? "Video cover"}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        )}

        {/* IFRAME providers */}
        {kind === "iframe" && isPlaying && iframeSrcBase && (
          <iframe
            src={iframeSrc}
            title={title}
            className="absolute inset-0 h-full w-full"
            allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
            allowFullScreen
          />
        )}

        {/* HTML5 VIDEO: direct file & HLS */}
        {kind === "video" && (
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full"
            src={!isM3U8 ? rawUrl : undefined} // HLS: src di-attach via hls.js/native
            controls
            playsInline
            preload="metadata"
            poster={cover}
            crossOrigin="anonymous"
          />
        )}

        {/* Tombol Play overlay (hanya saat belum playing) */}
        {!isPlaying && (
          <button
            type="button"
            onClick={onPlayClick}
            aria-label="Play video"
            className="absolute inset-0 z-20 grid place-items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70">
            <span className="rounded-full bg-black/40 backdrop-blur-md p-5 md:p-6 ring-1 ring-white/20 shadow-lg">
              <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden>
                <path d="M8 5v14l11-7z" fill="white" />
              </svg>
            </span>
          </button>
        )}

        {/* CTA overlay — tengah, sedikit turun; z-30 (di atas Play) */}
        {cta && (
          <div className="pointer-events-none absolute inset-0 z-30 flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100 transition-opacity duration-300">
            <div className="pointer-events-auto translate-y-14 md:translate-y-16">
              <div className="inline-flex items-center rounded-xl bg-black/35 backdrop-blur-sm ring-1 ring-white/10 shadow-md md:shadow-lg">
                <ReusableCTA
                  text={cta.text}
                  href={cta.href}
                  target={cta.target}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
