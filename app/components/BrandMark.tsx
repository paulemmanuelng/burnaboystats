/**
 * The crown mark — five chart bars on a base rule, with the live dot as its jewel.
 *
 * Geometry is verbatim from docs/design/LOGO.md: viewBox 0 0 84 74, bars at
 * x 7·22·37·52·67 (w 11, rx 5.5), heights 33·22·43·22·33 all sitting on y 58,
 * base rule y 64, dot at 42/8 r4. Do not nudge any of it — the clear-space rule
 * and every exported PNG are cut from these coordinates.
 *
 * It is pure geometry, which is the point: it needs no font, so it renders
 * identically in the nav, in an OG card and at 16px in a browser tab. The icon
 * it replaced was the word "BB" set in Arial.
 *
 * `aria-hidden` because it always sits beside the wordmark as live text, and
 * that text is the accessible name. Rendering both would make every header
 * announce the brand twice.
 *
 * Colours are the site's own tokens, not the exploration's #FBB417: --gold
 * (#ffb627) to --grad-b (#ff7a1a), and --green (#3ed17f) for the dot. The
 * gradient id is suffixed per instance because two marks on one page — the nav
 * and the footer — would otherwise share one id and the second would inherit
 * the first's stops.
 */
export default function BrandMark({
  size = 22,
  id = "bm",
  className,
}: {
  /** Height in px. 22 in the 68px nav bar, per LOGO.md. */
  size?: number;
  /** Unique per instance — see the note on gradient ids above. */
  id?: string;
  className?: string;
}) {
  const gid = `brandMarkGrad-${id}`;
  return (
    <svg
      className={className}
      viewBox="0 0 84 74"
      height={size}
      width={Math.round((size * 84) / 74)}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="var(--gold)" />
          <stop offset="1" stopColor="var(--grad-b)" />
        </linearGradient>
      </defs>
      {/* The dot is the only green on the mark, and it is never optional:
          LOGO.md — "Never render the crown without its dot." */}
      <circle cx="42" cy="8" r="4" fill="var(--green)" />
      <rect x="7" y="25" width="11" height="33" rx="5.5" fill={`url(#${gid})`} />
      <rect x="22" y="36" width="11" height="22" rx="5.5" fill={`url(#${gid})`} />
      <rect x="37" y="15" width="11" height="43" rx="5.5" fill={`url(#${gid})`} />
      <rect x="52" y="36" width="11" height="22" rx="5.5" fill={`url(#${gid})`} />
      <rect x="67" y="25" width="11" height="33" rx="5.5" fill={`url(#${gid})`} />
      <rect x="7" y="64" width="71" height="6.5" rx="3.25" fill={`url(#${gid})`} />
    </svg>
  );
}
