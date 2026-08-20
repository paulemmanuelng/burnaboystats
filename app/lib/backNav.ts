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
