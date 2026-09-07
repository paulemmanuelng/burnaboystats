"use client"; // error boundaries must be client components

/**
 * The last resort: an error thrown by the root layout itself.
 *
 * app/error.tsx cannot catch this one. It renders INSIDE the root layout, so if
 * the layout is what failed there is nothing left to render it into — and
 * without this file Next falls back to its own unstyled white page, which reads
 * as a different site altogether, or as a domain that has been taken over.
 *
 * That is why this file replaces <html> and <body> rather than reusing any of
 * the site's chrome: at this point nothing above it can be trusted to exist.
 * For the same reason the styles are inline. Not a stylistic choice — a global
 * error may be a stylesheet that failed to load, and a page that depends on the
 * stylesheet to explain a stylesheet failure explains nothing. The colours are
 * the site's own tokens written out literally, both arms of each: a reader in
 * light mode who hit this got a full-viewport black page. light-dark() needs no
 * stylesheet and no theme script — only the color-scheme declared on <html>
 * below — which is why it is the one theming mechanism that still works here.
 * The scheme itself is resolved from the stored choice, defaulting to dark,
 * so the crash page never disagrees with the theme the reader was just in.
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
    /* colorScheme: dark, not "light dark".
       light-dark() resolves against whatever colour-scheme the element carries,
       and "light dark" hands that decision to the OS — which is the one thing
       this site does not do. Everywhere else the theme comes from a STORED
       CHOICE and an unset choice means dark, so on a light-OS machine a reader
       who has never left dark mode would have hit an error and been shown a
       white page: exactly the "reads as a different site" failure this file
       exists to prevent. Dark is therefore the default here too, and the script
       below upgrades it to light only for a reader who actually chose light —
       the same resolution layout.tsx runs, minus the storage this page cannot
       assume, and it degrades to dark if anything throws. */
    <html lang="en" style={{ colorScheme: "dark" }}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              'try{var c=localStorage.getItem("theme");' +
              'if(c==="light"||(c==="system"&&matchMedia("(prefers-color-scheme: light)").matches))' +
              'document.documentElement.style.colorScheme="light"}catch(e){}',
          }}
        />
      </head>
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "light-dark(#f7f4ee, #0a0a0b)",
          color: "light-dark(#17140f, #f5f4f0)",
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
              color: "light-dark(#945e00, #ffb627)",
            }}
          >
            Burna Boy Stats
          </p>
          <h1 style={{ margin: "0 0 14px", fontSize: "28px", lineHeight: 1.15 }}>
            Something broke on our side
          </h1>
          <p style={{ margin: "0 0 24px", fontSize: "16px", lineHeight: 1.6, color: "light-dark(#5f584f, #a5a29b)" }}>
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
                border: "1px solid light-dark(#945e00, #ffb627)",
                background: "light-dark(#945e00, #ffb627)",
                color: "light-dark(#ffffff, #14100a)",
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
                border: "1px solid light-dark(#d9d2c6, #2a2a2e)",
                color: "light-dark(#17140f, #f5f4f0)",
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
