"use client"; // error boundaries must be client components

import Link from "next/link";
import AppState from "./components/AppState";

/**
 * Catches unexpected runtime errors in any page.
 *
 * The copy is deliberate: it says the fault is ours and that the figures are
 * fine, because on a stats site the first worry is that the data is wrong.
 * The reference is shown only when Next actually supplies a digest — never a
 * stack trace.
 */
export default function Error({
  error,
  reset,
}: {
  error?: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main id="content">
      <AppState
        tone="error"
        appLevel
        mobileGlyph="!"
        icon={
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M12 8v5" />
            <path d="M12 17h.01" />
            <circle cx="12" cy="12" r="9" />
          </svg>
        }
        title="Something broke on our side"
        body="The data didn't load. This is a fault here, not a problem with your connection — the figures themselves are fine."
        actions={
          <>
            <button type="button" className="btn btnPrimary" onClick={() => reset()}>
              Try again
            </button>
            <Link href="/" className="btn btnSecondary">Back to home</Link>
          </>
        }
        reference={error?.digest}
      />
    </main>
  );
}
