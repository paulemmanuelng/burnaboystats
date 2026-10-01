/**
 * This browser's claim token: 32 random hex characters, made on its first
 * reveal and kept in localStorage, so a retry from a reopened tab still
 * carries it. Where storage is blocked it lives as long as the page does,
 * which still covers a retry in the same tab. Sent with every tap
 * (HuntKeySlot.tsx); the reveal route stores only a keyed tag of it.
 */
const TOKEN_KEY = "naija66-claim";
let pageToken: string | null = null;

function storedToken(): string | null {
  try {
    const kept = localStorage.getItem(TOKEN_KEY);
    if (kept && /^[0-9a-f]{32}$/.test(kept)) return kept;
  } catch {
    /* storage blocked */
  }
  return null;
}

/**
 * The token this browser already holds, or null when it has never tapped:
 * sent with every spot check (HuntKeySlot.tsx), so a winner whose reveal reply
 * was lost gets the code back on the prize page even after a reload. Never
 * makes one, so a visitor who has not tapped stores nothing.
 */
export const keptClaimToken = (): string | null => storedToken() ?? pageToken;

export function claimToken(): string {
  const kept = storedToken();
  if (kept) return kept;
  pageToken ??= Array.from(crypto.getRandomValues(new Uint8Array(16)), (b) => b.toString(16).padStart(2, "0")).join("");
  try {
    localStorage.setItem(TOKEN_KEY, pageToken);
  } catch {
    /* kept for this page view only */
  }
  return pageToken;
}
