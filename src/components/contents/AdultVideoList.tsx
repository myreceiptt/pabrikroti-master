// /src/components/contents/AdultVideoList.tsx

"use client";

// External libraries
import React, { useCallback, useEffect, useRef, useState } from "react";
// import { useActiveAccount } from "thirdweb/react";

// Blockchain configurations
import { getActiveReceipt } from "@/config/receipts";

// Components libraries
import HlsPlayer from "@/components/contents/HlsPlayer";
import SmartImage from "@/components/contents/SmartImage";

export type PlaylistItem = {
  title?: string;
  duration?: number;
  url: string; // m3u8
  tvgId?: string; // ditampilkan sebagai anchor
  tvgLogo?: string; // thumbnail/logo kanan-atas & poster
};

type Props = {
  initialItems: PlaylistItem[];
  total: number;
  initialNextOffset: number | null;
  pageSize: number; // 47
};

type ApiResponse = {
  items: PlaylistItem[];
  nextOffset: number | null;
  total: number;
};

function formatDuration(sec?: number) {
  if (!sec || sec <= 0) return "";
  const s = Math.round(sec);
  const m = Math.floor(s / 60);
  const r = s % 60;
  return `${m}:${r.toString().padStart(2, "0")}`;
}

export default function ClientVideoList({
  initialItems,
  total,
  initialNextOffset,
  pageSize,
}: Props) {
  const { receipt } = getActiveReceipt();

  const [items, setItems] = useState<PlaylistItem[]>(initialItems);
  const [nextOffset, setNextOffset] = useState<number | null>(
    initialNextOffset
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [active, setActive] = useState<number | null>(null);

  const sentinelRef = useRef<HTMLDivElement | null>(null);

  const loadMore = useCallback(async () => {
    if (loading || nextOffset == null) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(
        `/api/playlist?offset=${nextOffset}&limit=${pageSize}`,
        { cache: "no-store" }
      );
      if (!res.ok) throw new Error("Failed to load more");
      const data: ApiResponse = await res.json();
      setItems((prev) => [...prev, ...data.items]);
      setNextOffset(data.nextOffset ?? null);
    } catch (e) {
      const msg = e instanceof Error ? e.message : String(e);
      setError(msg || "Failed to load more");
    } finally {
      setLoading(false);
    }
  }, [loading, nextOffset, pageSize]);

  // Lazy load saat sentinel terlihat (infinite scroll)
  useEffect(() => {
    const el = sentinelRef.current;
    if (!el || nextOffset == null) return;

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          loadMore();
        }
      },
      { rootMargin: "200px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [nextOffset, loadMore]);

  const shown = items.length;
  const hasMore = nextOffset != null;

  return (
    <>
      <ul className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((it, idx) => {
          const playing = active === idx;
          const title = it.title || `Video #${idx + 1}`;
          const poster = it.tvgLogo;

          return (
            <li
              key={`${idx}-${it.url}`}
              style={{
                borderColor: receipt.colorTertiary,
                backgroundColor: receipt.colorPrimer,
              }}
              className="rounded-xl border p-3 md:p-4">
              {/* HEADER: kiri = title + anchor; kanan = logo */}
              <div className="flex items-start gap-3">
                <div className="min-w-0 flex-1">
                  <h2 className="text-base md:text-lg font-semibold truncate">
                    {title}
                  </h2>

                  {/* tvg-id sebagai anchor ke URL */}
                  {it.tvgId && (
                    <div className="mt-0.5">
                      <a
                        href={it.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-blue-400 hover:underline break-all truncate"
                        title={it.url}>
                        {it.tvgId}
                      </a>
                    </div>
                  )}

                  {/* durasi opsional */}
                  {it.duration ? (
                    <p className="mt-0.5 text-[11px] text-gray-500">
                      {formatDuration(it.duration)}
                    </p>
                  ) : null}
                </div>

                {/* Thumbnail logo di kanan-atas */}
                <div className="shrink-0">
                  {it.tvgLogo ? (
                    <div className="relative h-12 w-12 rounded-md bg-white/5 ring-1 ring-white/10 overflow-hidden grid place-items-center">
                      <SmartImage
                        src={it.tvgLogo}
                        alt={`${it.tvgId || title} logo`}
                        className="object-contain p-1"
                        // untuk gambar kecil, lebih baik pakai width/height
                        width={48}
                        height={48}
                      />
                    </div>
                  ) : (
                    <div className="h-12 w-12 rounded-md bg-white/5 ring-1 ring-white/10 grid place-items-center text-[10px] text-gray-400">
                      no logo
                    </div>
                  )}
                </div>
              </div>

              {/* KONTEN: player + tombol PLAY overlay */}
              <div className="mt-3">
                <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                  {/* poster/preview saat belum playing */}
                  {!playing && poster && (
                    <SmartImage
                      src={receipt.adultTVCover}
                      alt={`${title} poster`}
                      className="object-cover"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  )}

                  {/* VIDEO ketika playing */}
                  {playing && (
                    <HlsPlayer
                      src={it.url}
                      poster={poster}
                      className="absolute inset-0 h-full w-full"
                      autoPlay
                    />
                  )}

                  {/* Tombol PLAY overlay (hanya saat belum playing) */}
                  {!playing && (
                    <button
                      type="button"
                      onClick={() => setActive(idx)}
                      aria-label={`Play ${title}`}
                      className="absolute inset-0 z-10 grid place-items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70">
                      <span className="rounded-full bg-black/45 backdrop-blur-md p-5 md:p-6 ring-1 ring-white/20 shadow-lg">
                        <svg
                          width="28"
                          height="28"
                          viewBox="0 0 24 24"
                          aria-hidden>
                          <path d="M8 5v14l11-7z" fill="white" />
                        </svg>
                      </span>
                    </button>
                  )}

                  {/* Layer dasar saat tidak ada poster */}
                  {!playing && !poster && (
                    <div className="absolute inset-0 grid place-items-center text-sm text-gray-500 bg-black/10">
                      Preview
                    </div>
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      {/* Status & controls */}
      <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
        <span>
          Showing {shown} of {total}
        </span>
        {error && <span className="text-red-500">{error}</span>}
      </div>

      {/* Button Load More (fallback dan untuk device tanpa IntersectionObserver) */}
      {hasMore && (
        <div className="mt-3">
          <button
            onClick={loadMore}
            disabled={loading}
            className="w-full rounded-md bg-white/10 px-3 py-2 text-sm hover:bg-white/20 disabled:opacity-50">
            {loading ? "Loading…" : `Load next ${pageSize}`}
          </button>
        </div>
      )}

      {/* Sentinel untuk lazy load otomatis */}
      <div ref={sentinelRef} className="h-1 w-full" />
    </>
  );
}
