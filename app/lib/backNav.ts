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

let inAppNavigations = 0;

/** Called by NavHistoryTracker on every client-side route change. */
export function noteNavigation() {
  inAppNavigations += 1;
}

export function hasInAppHistory(): boolean {
  if (inAppNavigations > 0) return true;
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
