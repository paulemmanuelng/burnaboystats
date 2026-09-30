import Link from "next/link";

/**
 * The shared shell behind every app-level state.
 *
 * From designs/desktop/App States.dc.html: a centred stack — optional glyph or
 * icon, an Anton headline, one sentence, at most two actions — used by
 * `not-found`, the error boundary, and the in-page "filter matched nothing"
 * state, at both widths. The handoff is explicit that this is one component,
 * not five.
 *
 * The site header and the ambient gold wash stay in place around it, so a
 * failure still looks like the site rather than a browser error page.
 *
 * Its styles are the `appState*` rules at the end of globals.css, not a CSS
 * module. The error and not-found boundaries render this component, and a
 * boundary's CSS is preloaded on every page of the site; as a module it put a
 * 124 KB shared chunk in the head of every page (30 Sep 2026). Keep it free
 * of *.module.css imports (tests/boundaryCss.test.ts).
 */
export default function AppState({
  glyph,
  mobileGlyph,
  icon,
  tone = "neutral",
  title,
  body,
  actions,
  reference,
  suggestions,
  compact = false,
  appLevel = false,
}: {
  /** Big display character — "404", "0". Mutually exclusive with `icon`. */
  glyph?: string;
  /** Stands in for `icon` at 402px, where the design draws a glyph instead. */
  mobileGlyph?: string;
  icon?: React.ReactNode;
  /** `error` adds the red wash. Red surfaces here and nowhere else. */
  tone?: "neutral" | "error";
  title: string;
  body: string;
  actions?: React.ReactNode;
  /** Only rendered when an error id actually exists. Never a stack trace. */
  reference?: string;
  suggestions?: { label: string; href: string }[];
  /** Tighter type for the in-page variant, which sits inside a filtered view. */
  compact?: boolean;
  /**
   * One of the three app-level screens rather than an in-page state. Hides the
   * mobile five-tab bar (see globals.css) and, at 402px, moves the actions into
   * a bottom bar — a failed page offers recovery before lateral navigation.
   */
  appLevel?: boolean;
}) {
  return (
    <div className={`appStateWrap ${appLevel ? "appStateAppLevel appStateShell" : ""}`}>
      {tone === "error" && <div className="appStateWashError" aria-hidden="true" />}

      {glyph && (
        <div className={`appStateGlyph ${tone === "neutral" ? "inkText" : ""}`} aria-hidden="true">
          {glyph}
        </div>
      )}
      {icon && (
        <>
          <div className={tone === "error" ? "appStateIcon" : "appStateIconMuted"} aria-hidden="true">
            {icon}
          </div>
          {/* At 402px the design replaces the disc with a plain glyph. */}
          {mobileGlyph && (
            <div
              className={`appStateGlyph appStateGlyphMobileOnly ${tone === "error" ? "appStateGlyphError" : ""}`}
              aria-hidden="true"
            >
              {mobileGlyph}
            </div>
          )}
        </>
      )}

      {/* The app-level states are the whole page, so their title is the page
          h1. The in-page states sit inside a page that already has one, and the
          SEO gate allows exactly one per page — so there they are plain text. */}
      {appLevel ? (
        <h1 className="appStateTitle">{title}</h1>
      ) : (
        <p className={`appStateTitle ${compact ? "appStateTitleSm" : ""}`}>{title}</p>
      )}
      <p className={`appStateBody ${compact ? "appStateBodySm" : ""}`}>{body}</p>

      {actions && <div className="appStateActions">{actions}</div>}

      {reference && (
        <div className="appStateReference">
          <span className="appStateReferenceLabel">Reference</span>
          <span className="appStateReferenceId">{reference}</span>
          <span className="appStateReferenceRule" aria-hidden="true" />
          <Link href="/contact" className="appStateReferenceLink">Report it</Link>
        </div>
      )}

      {suggestions && suggestions.length > 0 && (
        <div className="appStateSuggestWrap">
          <div className="appStateSuggestLabel">Popular instead</div>
          <div className="appStateSuggestRow">
            {suggestions.map((s) => (
              <Link key={s.href} href={s.href} className="appStateSuggest">
                {s.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
