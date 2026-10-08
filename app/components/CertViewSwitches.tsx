import { useId, type MouseEvent } from "react";
import type { CertSwitches, CertView } from "../lib/certScope";
import s from "./certSwitches.module.css";
import { holdInPlace } from "../lib/holdInPlace";

// A flip never moves the switch on screen: lib/holdInPlace reads the
// switch's place, commits the view synchronously and scrolls by however
// far the content above moved it (−148px on Olamide's phone page with
// Nigeria left out; review, 3 Oct 2026). It lived here until 6 Oct 2026,
// when the tours accordion needed the same hold.

/**
 * The certs views' two switches, in /compare's own toggle style (Paul, 3 Oct
 * 2026: "use the compare togglr style"; app/compare/page.tsx's controls row):
 * a muted bold mono NAME, then a 30×16 track with a knob — gold when on — and
 * the STATE beside it.
 *
 *   FEATURED APPEARANCES  [●—] on · every cert held / [—○] off · lead credits only
 *   NIGERIA               [●—] included             / [—○] left out
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
    <div className={`${s.controls} ${className ?? ""}`} role="group" aria-label="Which certifications count">
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
            {/* "cert", the site's short form where space is tight (design review
                B-10, 8 Oct 2026): "every certification held" pushed the
                switch onto a line of its own at 320 and 360 (measured), where
                "every plaque held" had fitted. /compare's switch says the same. */}
            <span id={featStateId}>{featOn ? "on · every cert held" : "off · lead credits only"}</span>
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
