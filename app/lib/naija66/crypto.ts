import { createHash, createHmac, randomInt, timingSafeEqual } from "node:crypto";

/**
 * The hunt's server-side crypto: winner codes, constant-time comparison, and
 * the tags that let the store count and recognise callers without holding an
 * address or a token. Server-only (node:crypto).
 *
 * NAIJA66_SECRET only keys the tags below now; which page a prize is on is
 * plain data (app/data/naija66.ts), and winner codes are random.
 */

/** No O/0 and no I/1: nothing a reader can mistype off a badge. */
export const ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

const hmac = (secret: string, message: string) => createHmac("sha256", secret).update(message).digest();
const sha = (s: string) => createHash("sha256").update(s).digest();

/** Equal-length digests, so neither length nor content leaks through timing. */
export const safeEqual = (a: string, b: string) => timingSafeEqual(sha(a), sha(b));

/** "NG66-3-XXXXXX": the prize, then six random characters. */
export const winnerCode = (prize: number) =>
  `NG66-${prize}-` + Array.from({ length: 6 }, () => ALPHABET[randomInt(ALPHABET.length)]).join("");

/** The prize a winner code names, or null when it is not one. */
export function prizeOfCode(code: string): number | null {
  const m = new RegExp(`^NG66-([1-5])-[${ALPHABET}]{6}$`).exec(code);
  return m ? Number(m[1]) : null;
}

/**
 * A rate-limit bucket name for an IP address. Keyed through the secret, so the
 * store never holds an address — the hunt collects no personal data.
 */
export const ipTag = (secret: string, ip: string) => hmac(secret, `naija66:ip:${ip}`).toString("hex").slice(0, 20);

/** What a browser's claim token looks like: 32 hex characters (Naija66Provider makes it). */
const TOKEN = /^[0-9a-f]{32}$/;

/**
 * What a claim record keeps of the browser's claim token, or null when the
 * request sent none (or something that is not one). Keyed through the secret,
 * so the record never holds the token itself.
 */
export function claimTag(secret: string, token: unknown): string | null {
  if (typeof token !== "string" || !TOKEN.test(token)) return null;
  return hmac(secret, `naija66:claim:${token}`).toString("hex").slice(0, 24);
}
