// /src/components/landing/VideoEmbed.tsx

"use client";

// External libraries
import React, { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";

// Blockchain configurations
import { getActiveReceipt } from "@/config/receipts";

// Components libraries
import ReusableCTA from "@/components/landing/ReusableCTA";

type EmbedKind = "iframe" | "video";

function detectProvider(u: URL) {
  const host = u.hostname.replace(/^www\./, "");
  if (host.includes("youtube.com") || host.includes("youtu.be"))
    return "youtube";
  if (host.includes("vimeo.com")) return "vimeo";
  if (host.includes("dailymotion.com") || host.includes("dai.ly"))
    return "dailymotion";
  return "unknown";
}

function toIframeSrc(raw: string): string | null {
  try {
    const u = new URL(raw);
    const host = u.hostname.replace(/^www\./, "");
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

    // Unknown provider → biarkan null; nanti dipilih jalur <video> atau diblok
    return null;
  } catch {
    return null;
  }
}

function isDirectVideo(url: string) {
  return /\.(mp4|webm|ogg)(\?.*)?$/i.test(url);
}
function isHls(url: string) {
  return /\.m3u8(\?.*)?$/i.test(url);
}

export default function VideoEmbed() {
  const { receipt } = getActiveReceipt();
  const { cover, url, title, cta } = receipt.videoEmbed || {};
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const hlsRef = useRef<any>(null);

  useEffect(() => {
    return () => {
      // cleanup HLS saat unmount/URL berubah
      if (hlsRef.current) {
        hlsRef.current.destroy?.();
        hlsRef.current = null;
      }
    };
  }, []);

  if (!url) return null;

  const isM3U8 = useMemo(() => isHls(url), [url]);
  const isFile = useMemo(() => isDirectVideo(url), [url]);

  // HLS / file langsung → JANGAN cari iframe
  const iframeSrcBase = useMemo(() => {
    if (isM3U8 || isFile) return null;
    return toIframeSrc(url);
  }, [isM3U8, isFile, url]);

  const kind: EmbedKind = useMemo(() => {
    if (isM3U8 || isFile) return "video";
    // Kalau bukan HLS/file → boleh iframe (YouTube/Vimeo/Dailymotion)
    return "iframe";
  }, [isM3U8, isFile]);

  // Autoplay params untuk iframe saat user klik Play
  const iframeSrc = useMemo(() => {
    if (kind !== "iframe" || !isPlaying) return "";
    try {
      const u = new URL(iframeSrcBase ?? url);
      u.searchParams.set("autoplay", "1");
      u.searchParams.set("mute", "1");
      u.searchParams.set("muted", "1");
      u.searchParams.set("playsinline", "1");
      return u.toString();
    } catch {
      return iframeSrcBase ?? url;
    }
  }, [kind, isPlaying, iframeSrcBase, url]);

  // Saat user klik Play untuk VIDEO: siapkan direct/HLS
  useEffect(() => {
    const setup = async () => {
      if (!isPlaying || kind !== "video" || !videoRef.current) return;
      const video = videoRef.current;

      // Direct MP4/WebM/Ogg → native
      if (!isM3U8) {
        try {
          await video.play();
        } catch {
          /* ignore */
        }
        return;
      }

      // HLS .m3u8
      // 1) Safari & browser yang bisa native HLS
      if (video.canPlayType("application/vnd.apple.mpegurl")) {
        try {
          video.src = url;
          await video.play();
        } catch {
          /* ignore */
        }
        return;
      }

      // 2) Browser non-Safari → dynamic import hls.js
      try {
        const { default: Hls } = await import("hls.js");
        if (Hls.isSupported()) {
          const hls = new Hls({
            // optional tuning:
            // lowLatencyMode: true,
            // maxBufferLength: 30,
          });
          hlsRef.current = hls;
          hls.attachMedia(video);
          hls.loadSource(url);
          hls.on(Hls.Events.MANIFEST_PARSED, async () => {
            try {
              await video.play();
            } catch {
              /* ignore */
            }
          });
        } else {
          // fallback terakhir
          video.src = url;
          try {
            await video.play();
          } catch {
            /* ignore */
          }
        }
      } catch {
        // jika import gagal, fallback set src langsung
        video.src = url;
        try {
          await video.play();
        } catch {
          /* ignore */
        }
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
  }, [isPlaying, kind, isM3U8, url]);

  const onPlayClick = () => setIsPlaying(true);

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
        {kind === "iframe" && isPlaying && (
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
            src={!isM3U8 ? url : undefined} // HLS: src di-attach via hls.js atau native di effect
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
            className="
              absolute inset-0 z-20 grid place-items-center
              focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70
            ">
            <span className="rounded-full bg-black/40 backdrop-blur-md p-5 md:p-6 ring-1 ring-white/20 shadow-lg">
              <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden>
                <path d="M8 5v14l11-7z" fill="white" />
              </svg>
            </span>
          </button>
        )}

        {/* CTA overlay — tengah, sedikit turun; z-30 (di atas Play) */}
        {cta && (
          <div
            className="
              pointer-events-none absolute inset-0 z-30
              flex items-center justify-center
              opacity-100 md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100
              transition-opacity duration-300
            ">
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
