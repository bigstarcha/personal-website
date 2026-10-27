/**
 * Rate limiting: each IP gets RATE_LIMIT messages per RATE_WINDOW_MS.
 * This lives in memory, so on Vercel each server instance keeps its own count and it resets on cold starts.
 * Good enough to stop one person spamming the form. For a hard limit, swap this for a shared store
 * like Upstash Redis (@upstash/ratelimit).
 */
const RATE_LIMIT = 3;
const RATE_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const requestLog = new Map<string, number[]>();

export function isRateLimited(ip: string): boolean {
  const now = Date.now();

  // Drop timestamps outside the window so the map doesn't grow forever.
  for (const [key, timestamps] of requestLog) {
    const recent = timestamps.filter((t) => now - t < RATE_WINDOW_MS);
    if (recent.length) requestLog.set(key, recent);
    else requestLog.delete(key);
  }

  const timestamps = requestLog.get(ip) ?? [];
  if (timestamps.length >= RATE_LIMIT) return true;

  requestLog.set(ip, [...timestamps, now]);
  return false;
}

// Vercel sets x-forwarded-for to the real client IP, so it can't be spoofed there.
export function getClientIp(req: Request): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    req.headers.get("x-real-ip") ||
    "unknown"
  );
}
