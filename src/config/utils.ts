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

  // === tambahan metadata yang sering ada di EXTINF / EXTVLCOPT ===
  tvgId?: string; // dari tvg-id="..."
  tvgLogo?: string; // dari tvg-logo="..." (diresolve relatif ke baseUrl jika perlu)
  groups?: string[]; // dari group-title="A;B" dan/atau #EXTGRP:A
  headers?: {
    // gabungan dari atribut + EXTVLCOPT (EXTVLCOPT override)
    "User-Agent"?: string;
    Referer?: string;
    // simpan opsi lain EXTVLCOPT bila ada (opsional)
    [key: string]: string | undefined;
  };
};

export function parseM3U(text: string, baseUrl?: string): M3UItem[] {
  const lines = text
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter(Boolean);

  const items: M3UItem[] = [];

  // helper: resolve ke absolut bila baseUrl diberikan
  const toAbs = (u?: string) => {
    if (!u) return u;
    try {
      return baseUrl ? new URL(u, baseUrl).toString() : u;
    } catch {
      return u;
    }
  };

  // helper: parse atribut key="value" pada EXTINF
  const parseAttrs = (s: string) => {
    const out: Record<string, string> = {};
    const re = /([A-Za-z0-9_-]+)="([^"]*)"/g;
    let m: RegExpExecArray | null;
    while ((m = re.exec(s)) !== null) {
      out[m[1].toLowerCase()] = m[2];
    }
    return out;
  };

  for (let i = 0; i < lines.length; i++) {
    const l = lines[i];

    if (l.startsWith("#EXTINF:")) {
      // Pola umum: #EXTINF:<durasi> <attr...>,<Display Name>
      const m = l.match(/^#EXTINF:([^,]*)(?:,(.*))?$/);
      const info = (m?.[1] ?? "").trim();
      const displayName = m?.[2]?.trim() || undefined;

      // durasi = angka pertama di 'info'
      let duration: number | undefined;
      const durMatch = info.match(/^-?\d+(?:\.\d+)?/);
      if (durMatch) {
        const n = Number(durMatch[0]);
        if (Number.isFinite(n)) duration = n;
      }

      // sisa setelah durasi berisi atribut key="value"
      const attrPart = info.slice(durMatch?.[0]?.length ?? 0).trim();
      const attrs = parseAttrs(attrPart);

      // ambil metadata dari atribut
      const tvgId = attrs["tvg-id"] || attrs["tvgid"] || undefined;
      const tvgLogoRaw = attrs["tvg-logo"] || attrs["tvglogo"] || undefined;
      const tvgLogo = toAbs(tvgLogoRaw);
      const groupTitle = attrs["group-title"] || undefined;
      let groups = groupTitle
        ? groupTitle
            .split(";")
            .map((s) => s.trim())
            .filter(Boolean)
        : undefined;

      // header http dari atribut (opsional)
      const headersFromAttrs: Record<string, string> = {};
      if (attrs["http-user-agent"])
        headersFromAttrs["User-Agent"] = attrs["http-user-agent"];
      if (attrs["http-referrer"])
        headersFromAttrs["Referer"] = attrs["http-referrer"];

      // kumpulkan EXTVLCOPT (dan #EXTGRP) di antara EXTINF → URL
      let j = i + 1;
      const vlcOpts: Record<string, string> = {};
      let extgrp: string | undefined;

      while (j < lines.length && lines[j].startsWith("#")) {
        const ln = lines[j];

        if (ln.startsWith("#EXTVLCOPT:")) {
          const raw = ln.slice("#EXTVLCOPT:".length);
          const eq = raw.indexOf("=");
          if (eq > -1) {
            const key = raw.slice(0, eq).trim().toLowerCase(); // contoh: http-user-agent
            const val = raw.slice(eq + 1).trim();
            // petakan beberapa key umum ke header HTTP
            if (key === "http-user-agent") {
              vlcOpts["User-Agent"] = val;
            } else if (key === "http-referrer") {
              vlcOpts["Referer"] = val;
            } else {
              vlcOpts[key] = val; // simpan apa adanya untuk opsi lain
            }
          }
        } else if (ln.startsWith("#EXTGRP:")) {
          extgrp = ln.slice("#EXTGRP:".length).trim();
        }

        j++;
      }

      if (extgrp) {
        const more = extgrp
          .split(";")
          .map((s) => s.trim())
          .filter(Boolean);
        groups = groups ? Array.from(new Set([...groups, ...more])) : more;
      }

      // baris berikutnya (pertama yang bukan komentar) = URL stream
      if (j < lines.length && !lines[j].startsWith("#")) {
        let u = lines[j];
        u = toAbs(u) || u;

        // gabungkan header (EXTINF attr) kemudian override oleh EXTVLCOPT
        const headersCombined: Record<string, string> = {
          ...headersFromAttrs,
          ...vlcOpts,
        };
        const headers =
          Object.keys(headersCombined).length > 0 ? headersCombined : undefined;

        items.push({
          title: displayName,
          duration: typeof duration === "number" ? duration : undefined,
          url: u,
          tvgId,
          tvgLogo,
          groups,
          headers,
        });

        i = j; // lompat ke baris URL
      }
    } else if (!l.startsWith("#")) {
      // URL tanpa EXTINF (fallback)
      const u = toAbs(l) || l;
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
