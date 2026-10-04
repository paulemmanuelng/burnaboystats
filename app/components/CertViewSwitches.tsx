import { useId, type MouseEvent } from "react";
import { flushSync } from "react-dom";
import type { CertSwitches, CertView } from "../lib/certScope";
import s from "./certSwitches.module.css";

/**
 * Flip a switch and keep it under the finger. A switch narrows content ABOVE
 * its row — the phone's hero unit and lede, the board's "By the numbers" and
 * country strip, a tier row that empties — so the row would move after the
 * tap: −148px on Olamide's phone page with Nigeria left out, where the browser
 * has no scroll anchoring (Safari), −74px where it has (review, 3 Oct 2026).
 *
 * So: read the switch's place, commit the new view synchronously (flushSync —
 * every block that listens to the view re-renders in this same task), and
 * scroll by however far the switch moved, before anything is painted. Scroll
 * anchoring is held off for that moment so Chrome's own correction cannot add
 * to ours; a second look on the next frame catches anything that settled late
 * (a wrapped line, a font). "instant" because the site scrolls smoothly by
 * default (globals.css), and a glide would be the very movement we remove.
 */
// Flips inside one frame overlap (two quick taps): anchoring is held off from
// the first until the last has settled, and only then given back as it was.
let holds = 0;
let anchorBefore = "";

function holdInPlace(el: HTMLElement, flip: () => void) {
  const before = el.getBoundingClientRect().top;
  const root = document.documentElement;
  if (holds++ === 0) {
    anchorBefore = root.style.overflowAnchor;
    root.style.overflowAnchor = "none";
  }
  try {
    flushSync(flip);
  } catch (err) {
    if (--holds === 0) root.style.overflowAnchor = anchorBefore;
    throw err;
  }
  const settle = () => {
    if (!el.isConnected) return;
    const moved = el.getBoundingClientRect().top - before;
    if (Math.abs(moved) >= 1) window.scrollBy({ top: moved, behavior: "instant" });
  };
  settle();
  const done = () => {
    settle();
    if (--holds === 0) root.style.overflowAnchor = anchorBefore;
  };
  if (typeof requestAnimationFrame === "function") requestAnimationFrame(done);
  else done();
}

/**
 * The certs views' two switches, in /compare's own toggle style (Paul, 3 Oct
 * 2026: "use the compare togglr style"; app/compare/page.tsx's controls row):
 * a muted bold mono NAME, then a 30×16 track with a knob — gold when on — and
 * the STATE beside it.
 *
 *   FEATURED APPEARANCES  [●—] on · every plaque held / [—○] off · lead credits only
 *   NIGERIA               [●—] included        / [—○] left out
 *
 * In /compare's order: Featured appearances first, then the home country
 * (Paul, 3 Oct 2026: "same" as compare).
 *
 * The home-country switch is named by the artist's own `country`, in full
 * ("the full country name is perfect") — "Nigeria" for Burna Boy and the
 * Nigerian board, "South Africa" for Tyla. "Featured appearances" is compare's
 * switch word for word, "Features" on a phone (compare's nameLong/nameShort).
 * Both default ON — today's page. There is no "All" of their own: the tier row
 * below already starts with one ("this should only have internal and lead,
 * since the button below already has ALL").
 *
 * Buttons with role="switch" and aria-checked, where compare's are links:
 * this page is static, so the state lives in the fragment (lib/useCertView)
 * rather than a server-read query. Keyboard: Tab to it, Space/Enter flips it.
 * A flip never moves the switch on screen (holdInPlace).
 * The state is a word, not the gold alone. A switch the artist does not get
 * (it would change nothing) is not rendered; neither is an empty row.
 *
 * One component for both layouts — the phone screen (MobileCerts) and the
 * desktop explorer (CertExplorer) are separate components and each passes only
 * its own row spacing.
 */
export default function CertViewSwitches({
  view,
  offered,
  onPick,
  homeName,
  className,
}: {
  view: CertView;
  offered: CertSwitches;
  onPick: (patch: Partial<CertView>) => void;
  /** The artist's home country in full ("Nigeria", "South Africa") — the
   *  home switch's name. */
  homeName: string;
  /** The host's spacing for the row. */
  className?: string;
}) {
  // The state word describes the switch rather than naming it (debug pass,
  // 3 Oct 2026): the name stays "Featured appearances" / the home country
  // whatever the state, and aria-checked says on or off, so a screen reader no
  // longer hears a name that changes with every flip and the state twice.
  const featStateId = useId();
  const homeStateId = useId();
  if (!offered.scope && !offered.credit) return null;
  const flip = (e: MouseEvent<HTMLButtonElement>, patch: Partial<CertView>) =>
    holdInPlace(e.currentTarget, () => onPick(patch));
  const homeOn = view.scope === "all";
  const featOn = view.credit === "all";
  return (
    <div className={`${s.controls} ${className ?? ""}`} role="group" aria-label="Which plaques count">
      {offered.credit && (
        <span className={s.control}>
          <span className={s.controlName} aria-hidden="true">
            <span className={s.nameLong}>Featured appearances</span>
            <span className={s.nameShort}>Features</span>
          </span>
          <button
            type="button"
            role="switch"
            aria-checked={featOn}
            aria-label="Featured appearances"
            aria-describedby={featStateId}
            className={`${s.switch} ${featOn ? s.switchOn : ""}`}
            onClick={(e) => flip(e, { credit: featOn ? "lead" : "all" })}
          >
            <span className={`${s.dot} ${featOn ? s.dotOn : ""}`} aria-hidden="true" />
            <span id={featStateId}>{featOn ? "on · every plaque held" : "off · lead credits only"}</span>
          </button>
        </span>
      )}
      {offered.scope && (
        <span className={s.control}>
          <span className={s.controlName} aria-hidden="true">{homeName}</span>
          <button
            type="button"
            role="switch"
            aria-checked={homeOn}
            aria-label={homeName}
            aria-describedby={homeStateId}
            className={`${s.switch} ${homeOn ? s.switchOn : ""}`}
            onClick={(e) => flip(e, { scope: homeOn ? "intl" : "all" })}
          >
            <span className={`${s.dot} ${homeOn ? s.dotOn : ""}`} aria-hidden="true" />
            <span id={homeStateId}>{homeOn ? "included" : "left out"}</span>
          </button>
        </span>
      )}
    </div>
  );
}
