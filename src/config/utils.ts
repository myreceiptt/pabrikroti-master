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

export function isBeforeStartTime(
  startTime: Date,
  now: Date = new Date()
): boolean {
  return now < startTime;
}

export function formatTokenAmount(raw: bigint, decimals: number): string {
  return (raw / BigInt(10) ** BigInt(decimals)).toString();
}

export function calculatePrice(tokenIdNumber: number): string {
  if (isNaN(tokenIdNumber)) return "0.00";
  return tokenIdNumber >= 23 ? "x.xx" : "0.00";
}
