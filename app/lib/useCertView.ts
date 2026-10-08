import { useLayoutEffect, useSyncExternalStore } from "react";
import { CREDIT_KEY, OFF_VALUE, parseCredit, parseScope, SCOPE_KEY, type CertView, type CreditScope, type CertScope } from "./certScope";
import { dropDeepLink, readDeepLink, writeDeepLink } from "./deepLink";
import { CERT_VIEW_MARK } from "./certViewPrepaint";

/**
 * The two certs switches' state — the home-country switch ("Nigeria",
 * "South Africa") and "Featured appearances" — read from the address bar.
 *
 * The URL is the only copy, in /compare's own params: #home=0 (home country
 * left out) and #feat=0 (featured appearances off — the param /compare uses).
 * Each key is present only while its switch is OFF; both default ON. A
 * ?home=0 or ?feat=0 link is read too, for symmetry with the other deep links.
 * Every component on the page that calls this hook — the phone screen, the
 * desktop explorer and the server-rendered blocks it swaps — sees the same
 * value, with no provider to thread through a server page. The server snapshot
 * is "all" for both, so the static HTML is today's page and a crawler never
 * sees a second view.
 *
 * A fragment, not a query string, for the reason the release deep links moved
 * to one (CertExplorer): "?home=0" would be a separate URL to a crawler.
 */

const EVENT = "bbs:cert-view";

function subscribe(onChange: () => void): () => void {
  window.addEventListener("hashchange", onChange);
  window.addEventListener("popstate", onChange);
  window.addEventListener(EVENT, onChange);
  return () => {
    window.removeEventListener("hashchange", onChange);
    window.removeEventListener("popstate", onChange);
    window.removeEventListener(EVENT, onChange);
  };
}

// Two primitive snapshots rather than one object: useSyncExternalStore compares
// snapshots by identity, and a fresh object per read would re-render forever.
const getScope = (): CertScope => parseScope(readDeepLink(SCOPE_KEY));
const getCredit = (): CreditScope => parseCredit(readDeepLink(CREDIT_KEY));
const serverScope = (): CertScope => "all";
const serverCredit = (): CreditScope => "all";

/** Set either switch: its key=0 into the fragment when it is turned off, out
 *  of the URL when it is back on. The other switch's key is left alone. */
export function setCertView(patch: Partial<CertView>): void {
  if (patch.scope) {
    if (patch.scope === "intl") writeDeepLink(SCOPE_KEY, OFF_VALUE);
    else dropDeepLink(SCOPE_KEY);
  }
  if (patch.credit) {
    if (patch.credit === "lead") writeDeepLink(CREDIT_KEY, OFF_VALUE);
    else dropDeepLink(CREDIT_KEY);
  }
  // replaceState fires no event of its own.
  window.dispatchEvent(new Event(EVENT));
}

export function useCertView(): [CertView, (patch: Partial<CertView>) => void] {
  const scope = useSyncExternalStore(subscribe, getScope, serverScope);
  const credit = useSyncExternalStore(subscribe, getCredit, serverCredit);
  // The first paint's mark (lib/certViewPrepaint, CC-22) hides the recounted
  // blocks until the page renders the link's view. Not during hydration,
  // which renders the server snapshot ("all"); the client snapshot's render
  // follows before paint, and the mark goes with it.
  useLayoutEffect(() => {
    const root = document.documentElement;
    if (root.hasAttribute(CERT_VIEW_MARK) && scope === getScope() && credit === getCredit()) {
      root.removeAttribute(CERT_VIEW_MARK);
    }
  }, [scope, credit]);
  return [{ scope, credit }, setCertView];
}
