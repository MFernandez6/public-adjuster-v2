/** Simple sliding-window IP limit for server handlers (best-effort in serverless). */
const buckets = new Map<string, number[]>();

export function slidingWindowAllowed(
    key: string,
    limit: number,
    windowMs: number
): boolean {
    const now = Date.now();
    const times = buckets.get(key) ?? [];
    const kept = times.filter((t) => now - t < windowMs);
    if (kept.length >= limit) {
        buckets.set(key, kept);
        return false;
    }
    kept.push(now);
    buckets.set(key, kept);
    return true;
}

export function clientIp(headers: Headers): string {
    return (
        headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
        headers.get("x-real-ip")?.trim() ||
        "unknown"
    );
}
