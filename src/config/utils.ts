// /src/config/utils.ts

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
