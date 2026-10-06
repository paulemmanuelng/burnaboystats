/**
 * Whether "back" can mean "the page you actually came from".
 *
 * Every mobile screen's back bar used to be a plain link to its parent, so
 * arriving at /records/awards from search, or from the nav sheet, and pressing
 * back sent you to /records — a page you had never seen. The parent is the
 * right destination only when there is nothing to go back TO.
 *
 * `router.back()` is unsafe on its own: on a cold entry (a shared link, a
 * search result, a new tab) the previous history entry belongs to some other
 * site, or does not exist, and back would leave burnaboystats entirely.
 *
 * So we track whether this document has navigated at least once. Module state
 * is exactly the right lifetime — it dies with the document, which is also
 * when the in-app history stack it describes stops being ours.
 */

import { ROUTER_KEYS } from "./deepLink";

let depth = 0;
let poppedAt = 0;

/**
 * Called by NavHistoryTracker when the browser traverses history (popstate) —
 * which is what our own back buttons do. Depth has to come back DOWN on those:
 * this used to be a bare ever-navigated counter, so a reader who went
 * hub → artist → charts and pressed back twice was standing on the hub with
 * "history" still on the books — and the hub's back button, believing it,
 * called router.back() straight out of the site. The parent link is the right
 * move at the bottom of our own stack, and depth is what knows we are there.
 */
export function notePop() {
  depth = Math.max(0, depth - 1);
  poppedAt = Date.now();
}

/** Called by NavHistoryTracker on every client-side route change. */
export function noteNavigation() {
  // A route change right after a popstate IS that popstate — the traversal has
  // already been counted (downward). The window is generous because the router
  // renders the new route asynchronously.
  if (Date.now() - poppedAt < 500) return;
  depth += 1;
}

export function hasInAppHistory(): boolean {
  if (depth > 0) return true;
  // A full page load from elsewhere on the site — no JS navigation happened,
  // but the previous history entry is still ours, so back is still correct.
  if (typeof window === "undefined") return false;
  const ref = document.referrer;
  if (!ref) return false;
  try {
    return new URL(ref).origin === window.location.origin;
  } catch {
    return false;
  }
}

/**
 * In-page "#…" jumps must not strand Back (debug 5 Oct 2026, V-otd-01).
 *
 * A plain <a href="#…"> is a fragment navigation: the browser adds a history
 * entry of its own, and that entry's state is null. The app router keeps its
 * route tree in history.state, and on Back or Forward it ignores an entry
 * without one (Next's onPopState returns on `!event.state`). So after a jump —
 * the phone calendar's month grid and "Months ↑", the FAQ chips, the firsts
 * and timeline jump rows — opening another page and pressing Back changed the
 * address bar to the jump's #… and left the other page on screen.
 *
 * NavHistoryTracker calls noteJumpClick on every click and settleJump when
 * the jump has happened. The browser still jumps exactly as it always has —
 * scroll, focus point, :target, hashchange; afterwards the entry it made gets
 * the router's state from the entry it was made from: same page, same route
 * tree, only the fragment differs. Back then lands on an entry the router
 * knows, at the place the reader left. Passing the router's own keys makes its
 * patched replaceState step aside, so nothing else about the entry changes.
 */
let jump: { page: string; router: Record<string, unknown> } | null = null;

const pageOf = (href: string) => href.split("#")[0];

/** A click (capture phase): note a same-page "#…" link's router state. */
export function noteJumpClick(e: MouseEvent): void {
  if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
  const a = (e.target as Element | null)?.closest?.("a[href]");
  if (!(a instanceof HTMLAnchorElement)) return;
  if ((a.target && a.target !== "_self") || a.hasAttribute("download")) return;
  if (!a.href.includes("#") || pageOf(a.href) !== pageOf(window.location.href)) return;

  const state = window.history.state as Record<string, unknown> | null;
  if (!state?.__NA) return;
  const router = Object.fromEntries(Object.entries(state).filter(([k]) => ROUTER_KEYS.has(k)));
  jump = { page: pageOf(a.href), router };
  // Chrome has jumped by the time this runs. An engine that jumps later fires
  // popstate (and hashchange) as it does, and settleJump runs then.
  setTimeout(settleJump, 0);
}

/** After a noted click, on popstate and on hashchange: stamp the jump's entry. */
export function settleJump(): void {
  if (!jump) return;
  if (pageOf(window.location.href) !== jump.page) {
    jump = null;
    return;
  }
  // Still the router's entry: the jump hasn't happened yet, or was cancelled.
  if ((window.history.state as Record<string, unknown> | null)?.__NA) return;
  const { router } = jump;
  jump = null;
  try {
    window.history.replaceState(router, "", window.location.href);
  } catch {
    // A sandboxed frame can refuse; Back is no worse than before.
  }
}
