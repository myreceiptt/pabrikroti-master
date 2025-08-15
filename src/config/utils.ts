// /src/config/utils.ts

// Blockchain configurations
import type { SupportedFTs, TokenMatamuPicek } from "@/config/contracts";

// convert hex to rgba
export function hexToRgba(hex: string, alpha: number): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

// countdown
export function getCountdownString(
  startTime: Date,
  currentTime: Date = new Date()
): string | null {
  if (!startTime) return null;

  const totalSeconds = Math.floor(
    (startTime.getTime() - currentTime.getTime()) / 1000
  );
  if (totalSeconds <= 0) return null;

  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// build the currency map from SupportedFTs
export function buildCurrencyMapFromSupportedFTs(
  supportedFTs: SupportedFTs
): Record<string, { name: string; symbol: string; icon: string }> {
  const map: Record<string, { name: string; symbol: string; icon: string }> =
    {};

  Object.values(supportedFTs).forEach((tokens: TokenMatamuPicek[]) => {
    tokens.forEach((token) => {
      const { address, name, symbol, icon } = token;
      map[address.toLowerCase()] = { name, symbol, icon };
    });
  });

  return map;
}

// max. uint256 value in bigint
export const MAX_UINT256 = 2n ** 256n - 1n;

// helpers domain video
const ALLOWED_SCHEMES = new Set(["http:", "https:"]);

/** true jika host persis domain atau subdomain-resminya */
function isSubdomainOf(host: string, domain: string) {
  return host === domain || host.endsWith("." + domain);
}

export type Provider = "youtube" | "vimeo" | "dailymotion" | "unknown";

export function detectProvider(input: string | URL): Provider {
  let u: URL;
  try {
    u = typeof input === "string" ? new URL(input) : input;
  } catch {
    return "unknown";
  }
  if (!ALLOWED_SCHEMES.has(u.protocol)) return "unknown";

  // Normalisasi: lowercase & hapus trailing dot (edge-case DNS)
  const host = u.hostname.replace(/\.$/, "").toLowerCase();

  // YouTube termasuk domain embed bebas cookie
  if (
    isSubdomainOf(host, "youtube.com") ||
    isSubdomainOf(host, "youtube-nocookie.com") ||
    isSubdomainOf(host, "youtu.be")
  ) {
    return "youtube";
  }

  // Vimeo (player.vimeo.com dll tercakup)
  if (isSubdomainOf(host, "vimeo.com")) {
    return "vimeo";
  }

  // Dailymotion (+ short domain)
  if (isSubdomainOf(host, "dailymotion.com") || isSubdomainOf(host, "dai.ly")) {
    return "dailymotion";
  }

  return "unknown";
}

// parser .m3u playlist
export type M3UItem = {
  title?: string;
  duration?: number;
  url: string;
};

export function parseM3U(text: string, baseUrl?: string): M3UItem[] {
  const lines = text
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter(Boolean);

  const items: M3UItem[] = [];
  let cur: Partial<M3UItem> = {};

  for (let i = 0; i < lines.length; i++) {
    const l = lines[i];

    if (l.startsWith("#EXTINF:")) {
      const m = l.match(/^#EXTINF:([^,]*),(.*)$/);
      const duration = m?.[1] ? Number(m[1]) : undefined;
      const title = m?.[2] || undefined;
      cur = {
        duration: Number.isFinite(duration) ? duration : undefined,
        title,
      };
      // cari URL sesudah baris EXTINF (skip baris komentar)
      let j = i + 1;
      while (j < lines.length && lines[j].startsWith("#")) j++;
      if (j < lines.length && !lines[j].startsWith("#")) {
        let u = lines[j];
        if (baseUrl) u = new URL(u, baseUrl).toString();
        items.push({ ...cur, url: u });
        cur = {};
        i = j;
      }
    } else if (!l.startsWith("#")) {
      // URL tanpa EXTINF (boleh juga)
      let u = l;
      if (baseUrl) u = new URL(u, baseUrl).toString();
      items.push({ url: u });
    }
  }
  return items;
}

// fetch eth price
export async function FetchEthereumPrice(): Promise<number | null> {
  try {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?x_cg_demo_api_key=CG-gW1zJEU5tLrciQunUxFefDqb&ids=ethereum&vs_currencies=usd"
    );
    const data = await response.json();
    return data.ethereum.usd;
  } catch (error) {
    console.error("Error fetching Ethereum price:", error);
    return null;
  }
}
