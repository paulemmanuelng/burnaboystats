import { createHmac, timingSafeEqual } from "node:crypto";

/**
 * Stateless double opt-in: the confirmation link carries an HMAC of the
 * address, so no database holds pending signups. Signing material comes from
 * SUBSCRIBE_SECRET, falling back to the Resend key so setup needs one less
 * variable — either way, nothing here works until Resend is configured.
 */
const secret = () => process.env.SUBSCRIBE_SECRET || process.env.RESEND_API_KEY || "";

export const signEmail = (email: string) =>
  createHmac("sha256", secret()).update(email.toLowerCase()).digest("hex").slice(0, 32);

export const verifyEmail = (email: string, token: string) => {
  // A real token is 32 hex characters, so anything else is refused here. The
  // length check below counts UTF-16 units and timingSafeEqual compares bytes:
  // "é" plus 31 "a" is 32 characters but 33 bytes, timingSafeEqual threw, and
  // the confirm link answered a bare HTTP 500 (24 Sep 2026).
  if (!/^[0-9a-f]{32}$/.test(token)) return false;
  const expect = signEmail(email);
  if (token.length !== expect.length) return false;
  return timingSafeEqual(Buffer.from(expect), Buffer.from(token));
};

export const looksLikeEmail = (s: string) =>
  /^[^\s@]{1,64}@[^\s@]{1,255}\.[^\s@]{2,24}$/.test(s);
