// /src/app/others/adult/page.tsx

// External libraries
import { headers } from "next/headers";

// Blockchain configurations
import { getActiveReceipt } from "@/config/receipts";

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
  const { receipt } = getActiveReceipt();

  try {
    const { items, total, nextOffset } = await getInitial();
    return (
      <div className="flex flex-col gap-4 content-normal md:px-20 py-4 px-4 lg:my-12 md:my-8 my-4">
        <main className="grid gap-4 lg:gap-7 place-items-center">
          <h1
            style={{ color: receipt.colorPrimer }}
            className="text-sm sm:text-xl md:text-2xl lg:text-3xl font-bold leading-tight drop-shadow-md">
            {receipt.adultTVTitle}
          </h1>
          {items.length ? (
            <ClientVideoList
              initialItems={items}
              total={total}
              initialNextOffset={nextOffset}
              pageSize={PAGE_SIZE}
            />
          ) : (
            <p
              style={{ color: receipt.colorPrimer }}
              className="text-[10px] sm:text-sm md:text-base leading-tight">
              {receipt.adultTVNotFound}
            </p>
          )}
        </main>
      </div>
    );
  } catch {
    return (
      <div className="flex flex-col gap-4 content-normal md:px-20 py-4 px-4 lg:my-12 md:my-8 my-4">
        <main className="grid gap-4 lg:gap-7 place-items-center">
          <h1
            style={{ color: receipt.colorPrimer }}
            className="text-sm sm:text-xl md:text-2xl lg:text-3xl font-bold leading-tight drop-shadow-md">
            {receipt.adultTVTitle}
          </h1>
          <p
            style={{ color: receipt.colorPrimer }}
            className="text-[10px] sm:text-sm md:text-base leading-tight">
            {receipt.adultTVFailed}
          </p>
        </main>
      </div>
    );
  }
}
