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
  const expect = signEmail(email);
  if (token.length !== expect.length) return false;
  return timingSafeEqual(Buffer.from(expect), Buffer.from(token));
};

export const looksLikeEmail = (s: string) =>
  /^[^\s@]{1,64}@[^\s@]{1,255}\.[^\s@]{2,24}$/.test(s);
