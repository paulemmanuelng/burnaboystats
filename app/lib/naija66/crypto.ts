import { createHash, createHmac, randomInt, timingSafeEqual } from "node:crypto";
import { NAIJA66_PRIZES } from "../../data/naija66";

/**
 * Everything secret in the hunt, derived from one value: NAIJA66_SECRET.
 *
 * Server-only (node:crypto). The derivations are fixed by the spec Paul
 * computed his private key list from, so they must not change shape:
 *
 *   pathHash(p) = hex(HMAC(secret, "naija66:path:" + p)).slice(0, 32)
 *   key(i)      = "NG66-" + the first 6 bytes of HMAC(secret, "naija66:key:" + i),
 *                 each mapped to ALPHABET[byte % 32]
 *
 * `p` is the pathname exactly as usePathname() returns it ("/a/b", no trailing
 * slash). 256 is a multiple of 32, so byte % 32 is unbiased.
 */

/** No O/0 and no I/1: nothing a reader can mistype off a badge. */
export const ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

const hmac = (secret: string, message: string) => createHmac("sha256", secret).update(message).digest();
const sha = (s: string) => createHash("sha256").update(s).digest();

export const pathHash = (secret: string, pathname: string) =>
  hmac(secret, `naija66:path:${pathname}`).toString("hex").slice(0, 32);

export const keyFor = (secret: string, prize: number) =>
  "NG66-" +
  [...hmac(secret, `naija66:key:${prize}`).subarray(0, 6)].map((b) => ALPHABET[b % 32]).join("");

/** Equal-length digests, so neither length nor content leaks through timing. */
export const safeEqual = (a: string, b: string) => timingSafeEqual(sha(a), sha(b));

/**
 * The prize whose page this pathHash is, or null for every other page.
 *
 * Every committed hash is compared, with no early exit, so a decoy page and a
 * real one cost the same.
 */
export function prizeForPath(secret: string, pathname: string): number | null {
  const h = pathHash(secret, pathname);
  let found = 0;
  for (const p of NAIJA66_PRIZES) if (safeEqual(h, p.pathHash)) found = p.prize;
  return found || null;
}

/** Dashes a phone keyboard may substitute for a hyphen. */
const DASH = "-‐‑‒–—―−";
const AROUND = new RegExp(`^[${DASH}]+|[${DASH}]+$`, "g");
const PREFIX = new RegExp(`^NG66[${DASH}]?`);
const BODY = new RegExp(`^[${ALPHABET}]{6}$`);

/**
 * A typed key in its canonical "NG66-XXXXXX" form, or null when it cannot be
 * one. Keys are not case-sensitive; whitespace anywhere and dashes at either
 * end are dropped, and the "NG66-" prefix is optional. No look-alike mapping:
 * the alphabet has no O, 0, I or 1 to confuse.
 */
export function normaliseKey(raw: unknown): string | null {
  if (typeof raw !== "string" || raw.length > 64) return null;
  let s = raw.toUpperCase().replace(/\s+/g, "").replace(AROUND, "");
  // Six characters on their own are the body, even one that happens to start
  // "NG66" — the alphabet has N, G and 6, so a body can.
  if (!BODY.test(s)) s = s.replace(PREFIX, "");
  return BODY.test(s) ? `NG66-${s}` : null;
}

/**
 * The prize a canonical key opens, or null. Compared against all five in
 * constant time; says nothing about whether the prize has dropped.
 */
export function prizeForKey(secret: string, key: string | null): number | null {
  const candidate = key ?? "";
  let found = 0;
  for (const p of NAIJA66_PRIZES) if (safeEqual(candidate, keyFor(secret, p.prize))) found = p.prize;
  return key ? found || null : null;
}

/** "NG66-3-7QK4MZ": the prize, then six random characters. */
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

/** A page as the badge budget stores it: short, fixed-length, and not the path itself. */
export const pageTag = (secret: string, pathname: string) =>
  hmac(secret, `naija66:page:${pathname}`).toString("hex").slice(0, 16);

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
