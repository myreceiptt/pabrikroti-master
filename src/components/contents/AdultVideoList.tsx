// /src/components/contents/AdultVideoList.tsx

"use client";

// External libraries
import React, { useCallback, useEffect, useRef, useState } from "react";
// import { useActiveAccount } from "thirdweb/react";

// Blockchain configurations
// import { getActiveReceipt } from "@/config/receipts";

// Components libraries
import HlsPlayer from "@/components/contents/HlsPlayer";

export type PlaylistItem = {
  title?: string;
  duration?: number;
  url: string; // m3u8
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
      <ul className="grid grid-cols-1 gap-4">
        {items.map((it, idx) => {
          const playing = active === idx;
          return (
            <li
              key={`${idx}-${it.url}`}
              className="rounded-xl border border-white/10 bg-black/5 p-3 md:p-4">
              <div className="flex items-start gap-3">
                <div className="flex-1 min-w-0">
                  <h2 className="text-base md:text-lg font-semibold truncate">
                    {it.title || `Video #${idx + 1}`}
                  </h2>
                  <p className="text-xs text-gray-500">
                    {formatDuration(it.duration)} {it.url}
                  </p>
                </div>

                <button
                  onClick={() => setActive(playing ? null : idx)}
                  aria-pressed={playing}
                  className="rounded-md bg-white/10 px-3 py-1.5 text-sm hover:bg-white/20">
                  {playing ? "Stop" : "Play"}
                </button>
              </div>

              <div className="mt-3">
                {playing ? (
                  <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                    <HlsPlayer
                      src={it.url}
                      className="absolute inset-0 h-full w-full"
                      autoPlay
                    />
                  </div>
                ) : (
                  <div className="aspect-video w-full rounded-lg bg-black/10 grid place-items-center text-sm text-gray-500">
                    Preview
                  </div>
                )}
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
