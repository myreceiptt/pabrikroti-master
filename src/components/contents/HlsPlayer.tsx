// /src/components/contents/HlsPlayer.tsx

"use client";

// External libraries
import type Hls from "hls.js";
import React, { useEffect, useRef } from "react";

type Props = {
  src: string; // .m3u8
  poster?: string; // optional cover
  autoPlay?: boolean; // autoPlay setelah mount (butuh mute di sebagian browser)
  className?: string;
};

export default function HlsPlayer({ src, poster, autoPlay, className }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hlsRef = useRef<Hls | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let cancelled = false;

    (async () => {
      // Safari: native HLS
      if (video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = src;
        try {
          if (autoPlay) {
            video.muted = true;
            await video.play();
          }
        } catch {}
        return;
      }

      // Other browsers: dynamic import hls.js
      try {
        type HlsClass = typeof import("hls.js").default;
        const { default: HlsCtor } = (await import("hls.js")) as {
          default: HlsClass;
        };
        if (cancelled) return;

        if (HlsCtor.isSupported()) {
          const hls = new HlsCtor({});
          hlsRef.current = hls;
          hls.attachMedia(video);
          hls.loadSource(src);
          hls.on(HlsCtor.Events.MANIFEST_PARSED, async () => {
            try {
              if (autoPlay) {
                video.muted = true;
                await video.play();
              }
            } catch {}
          });
        } else {
          video.src = src;
          try {
            if (autoPlay) {
              video.muted = true;
              await video.play();
            }
          } catch {}
        }
      } catch {
        video.src = src;
        try {
          if (autoPlay) {
            video.muted = true;
            await video.play();
          }
        } catch {}
      }
    })();

    return () => {
      cancelled = true;
      try {
        video.pause();
        video.removeAttribute("src");
        video.load();
      } catch {}
      if (hlsRef.current) {
        hlsRef.current.destroy?.();
        hlsRef.current = null;
      }
    };
  }, [src, autoPlay]);

  return (
    <video
      ref={videoRef}
      className={className}
      poster={poster}
      controls
      playsInline
      preload="metadata"
      crossOrigin="anonymous"
    />
  );
}
