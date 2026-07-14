import { track as vercelTrack } from "@vercel/analytics";

// Thin wrapper around Vercel Web Analytics custom events, so every interaction
// is tracked with one consistent call. Vercel no-ops these outside production,
// and the try/catch guarantees analytics can never break an interaction.
type EventProps = Record<string, string | number | boolean | null>;

export function track(event: string, props?: EventProps): void {
  try {
    vercelTrack(event, props);
  } catch {
    /* analytics is best-effort — never let it throw into the UI */
  }
}
