type RateEntry = {
  count: number;
  expiresAt: number;
};

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 5;

const store = new Map<string, RateEntry>();

export const checkRateLimit = (key: string) => {
  const now = Date.now();
  const entry = store.get(key);

  if (!entry || entry.expiresAt < now) {
    store.set(key, { count: 1, expiresAt: now + RATE_LIMIT_WINDOW_MS });
    return { allowed: true, remaining: RATE_LIMIT_MAX - 1 };
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return { allowed: false, remaining: 0 };
  }

  entry.count += 1;
  store.set(key, entry);

  return { allowed: true, remaining: RATE_LIMIT_MAX - entry.count };
};
