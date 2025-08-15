// /src/app/api/playlist/route.ts

// External libraries
import { NextResponse } from "next/server";

// Blockchain configurations
import { parseM3U } from "@/config/utils";

const M3U_URL =
  process.env.NEXT_PUBLIC_M3U_SOURCE_URL ??
  "https://iptv-org.github.io/iptv/index.m3u";

// Normalisasi + seleksi item
function selectItems(text: string) {
  const all = parseM3U(text, M3U_URL);
  const m3u8 = all.filter((it) => /\.m3u8(\?.*)?$/i.test(it.url));
  const httpsOnly = m3u8.filter((it) => {
    try {
      return new URL(it.url).protocol === "https:";
    } catch {
      return false;
    }
  });
  // De-dupe by URL (keep last)
  const dedup = Array.from(new Map(httpsOnly.map((i) => [i.url, i])).values());
  return dedup;
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const offset = Math.max(parseInt(searchParams.get("offset") ?? "0", 10), 0);
  const limitRaw = parseInt(searchParams.get("limit") ?? "47", 10);
  const limit = Math.min(Math.max(limitRaw, 1), 200); // batas wajar

  try {
    const res = await fetch(M3U_URL, { cache: "no-store" });
    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to fetch M3U" },
        { status: 502 }
      );
    }
    const text = await res.text();

    const all = selectItems(text);
    const total = all.length;
    const items = all.slice(offset, offset + limit);
    const nextOffset =
      offset + items.length < total ? offset + items.length : null;

    return NextResponse.json({ total, items, nextOffset });
  } catch {
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
