"use client"; // error boundaries must be client components

/**
 * The last resort: an error thrown by the root layout itself.
 *
 * app/error.tsx cannot catch this one. It renders INSIDE the root layout, so if
 * the layout is what failed there is nothing left to render it into — and
 * without this file Next falls back to its own unstyled white page, which on a
 * site that is otherwise entirely dark reads as a different site altogether, or
 * as a domain that has been taken over.
 *
 * That is why this file replaces <html> and <body> rather than reusing any of
 * the site's chrome: at this point nothing above it can be trusted to exist.
 * For the same reason the styles are inline. Not a stylistic choice — a global
 * error may be a stylesheet that failed to load, and a page that depends on the
 * stylesheet to explain a stylesheet failure explains nothing. The colours are
 * the site's own tokens written out literally: #0a0a0b ground, #f5f4f0 text,
 * #ffb627 gold.
 *
 * The copy follows app/error.tsx deliberately — on a statistics site the first
 * worry a reader has is that the numbers are wrong, so both boundaries say the
 * fault is ours and the figures are intact. The digest is shown only when Next
 * supplies one, and never a stack trace.
 */
export default function GlobalError({
  error,
  reset,
}: {
  error?: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0b",
          color: "#f5f4f0",
          fontFamily:
            "ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
          padding: "24px",
        }}
      >
        <main style={{ maxWidth: "34rem", textAlign: "center" }}>
          <p
            style={{
              margin: "0 0 12px",
              fontSize: "11px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#ffb627",
            }}
          >
            Burna Boy Stats
          </p>
          <h1 style={{ margin: "0 0 14px", fontSize: "28px", lineHeight: 1.15 }}>
            Something broke on our side
          </h1>
          <p style={{ margin: "0 0 24px", fontSize: "16px", lineHeight: 1.6, color: "#a5a29b" }}>
            The page didn&apos;t load. This is a fault here, not a problem with your
            connection — the figures themselves are fine.
          </p>
          <div
            style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap" }}
          >
            <button
              type="button"
              onClick={() => reset()}
              style={{
                appearance: "none",
                border: "1px solid #ffb627",
                background: "#ffb627",
                color: "#0a0a0b",
                fontSize: "15px",
                fontWeight: 600,
                padding: "12px 20px",
                minHeight: "44px",
                borderRadius: "2px",
                cursor: "pointer",
              }}
            >
              Try again
            </button>
            {/* A plain <a>, not next/link, and eslint is wrong to object here:
                this boundary exists because the root layout failed, so the
                router is exactly the thing that cannot be trusted. A client-side
                navigation would try to re-mount the broken tree; a real document
                request is the only reliable way out. */}
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a
              href="/"
              style={{
                border: "1px solid #2a2a2e",
                color: "#f5f4f0",
                fontSize: "15px",
                fontWeight: 600,
                padding: "12px 20px",
                minHeight: "44px",
                borderRadius: "2px",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              Back to home
            </a>
          </div>
          {error?.digest && (
            <p style={{ margin: "22px 0 0", fontSize: "12px", color: "#6f6c66" }}>
              Reference: {error.digest}
            </p>
          )}
        </main>
      </body>
    </html>
  );
}
