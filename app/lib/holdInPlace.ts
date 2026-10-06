import { flushSync } from "react-dom";

/**
 * Change the page and keep the control that changed it under the finger.
 *
 * A tap that changes content ABOVE its own control moves that control after
 * the tap. The certs switches narrow blocks above their row (−148px on
 * Olamide's phone page with Nigeria left out, where the browser has no scroll
 * anchoring — Safari; −74px where it has; review, 3 Oct 2026). The tours
 * accordion keeps one tour open, so opening a tour BELOW the open one shuts
 * the panel above it and the row flew off the top of the screen: −1,158px on
 * desktop, −1,545px on a phone (V-tourscars-01, debug pass 5 Oct 2026).
 *
 * So: read the control's place, commit the change synchronously (flushSync —
 * everything that listens re-renders in this same task), and scroll by however
 * far the control moved, before anything is painted. Scroll anchoring is held
 * off for that moment so Chrome's own correction cannot add to ours; a second
 * look on the next frame catches anything that settled late (a wrapped line,
 * a font). "instant" because the site scrolls smoothly by default
 * (globals.css), and a glide would be the very movement we remove.
 *
 * Moved here from CertViewSwitches.tsx on 6 Oct 2026 so the tours layouts
 * share it, unchanged.
 */
// Changes inside one frame overlap (two quick taps): anchoring is held off
// from the first until the last has settled, and only then given back as it
// was.
let holds = 0;
let anchorBefore = "";

export function holdInPlace(el: HTMLElement, change: () => void) {
  const before = el.getBoundingClientRect().top;
  const root = document.documentElement;
  if (holds++ === 0) {
    anchorBefore = root.style.overflowAnchor;
    root.style.overflowAnchor = "none";
  }
  try {
    flushSync(change);
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
