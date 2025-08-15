// /src/app/others/adult/page.tsx

// External libraries
import { headers } from "next/headers";

// Components libraries
import ClientVideoList, {
  type PlaylistItem,
} from "@/components/contents/AdultVideoList";

const PAGE_SIZE = 47;

async function getInitial(): Promise<{
  items: PlaylistItem[];
  total: number;
  nextOffset: number | null;
}> {
  // ✅ await headers()
  const h = await headers();
  const proto = h.get("x-forwarded-proto") ?? "http";
  const host = h.get("host") ?? "localhost:3000";
  const origin = `${proto}://${host}`;

  const res = await fetch(
    `${origin}/api/playlist?offset=0&limit=${PAGE_SIZE}`,
    { cache: "no-store" }
  );
  if (!res.ok) throw new Error("Failed to load playlist page 1");
  const data = await res.json();
  return {
    items: (data.items ?? []) as PlaylistItem[],
    total: data.total ?? 0,
    nextOffset: data.nextOffset ?? null,
  };
}

export default async function AdultPage() {
  try {
    const { items, total, nextOffset } = await getInitial();
    return (
      <div className="mx-auto max-w-4xl p-4 space-y-4">
        <h1 className="text-2xl font-bold">Playlist Videos</h1>
        {items.length ? (
          <ClientVideoList
            initialItems={items}
            total={total}
            initialNextOffset={nextOffset}
            pageSize={PAGE_SIZE}
          />
        ) : (
          <p className="text-sm text-gray-500">No videos found.</p>
        )}
      </div>
    );
  } catch {
    return (
      <div className="mx-auto max-w-4xl p-4 space-y-3">
        <h1 className="text-2xl font-bold">Playlist Videos</h1>
        <p className="text-sm text-red-500">Failed to load playlist.</p>
      </div>
    );
  }
}
