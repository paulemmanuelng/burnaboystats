/**
 * The explorers' deep links, and the filters they remember on Back.
 *
 * DEEP LINKS. A focused view is addressed by the FRAGMENT — #release=,
 * #song=, #country=, #body= — never by a query string, which is a separate URL
 * to a crawler (see the note in CertExplorer). Three things went wrong with
 * them until 24 Sep 2026, and these helpers are the fix for each:
 *
 *   - they were read once, on mount, so a link that changed only the fragment
 *     (search results on the page you are already on, Back and Forward between
 *     two focuses) changed the address bar and nothing on screen;
 *   - clearing a focus left it in the address bar, so a reload put it back;
 *   - search pointed every release, award body and country at a bare list
 *     page, because only #release= and #song= had a reader at all.
 *
 * FILTER MEMORY. The chips (tier, country, peak, view) were plain state, so
 * following a row to its page and pressing Back rebuilt the list unfiltered.
 * The browser put the reader back at the old scroll offset over a different,
 * longer list. They are kept in this history entry's state instead, beside the
 * router's own, and read back before the first paint.
 */

type Json = Record<string, unknown>;

// The Next app router keeps its own fields in history.state. A replaceState
// that CHANGES THE URL must leave them out, so the router's patched
// replaceState copies them back and updates its own idea of the URL — pass
// them in and it steps aside, and the next router update puts the old URL back.
const ROUTER_KEYS = new Set(["__NA", "__PRIVATE_NEXTJS_INTERNALS_TREE"]);

function ownState(): Json {
  const s = window.history.state as Json | null;
  if (!s || typeof s !== "object") return {};
  return Object.fromEntries(Object.entries(s).filter(([k]) => !ROUTER_KEYS.has(k)));
}

/** Replace this entry's URL, keeping its state, without a navigation. */
export function replaceUrl(url: string): void {
  try {
    window.history.replaceState(ownState(), "", url);
  } catch {
    // A sandboxed frame can refuse; the page still works, the bar just lags.
  }
}

const hashParams = () => new URLSearchParams(window.location.hash.replace(/^#/, ""));

/**
 * One deep-link key: the fragment first, then — for links already in the wild
 * — the query string. `withQuery: false` on a hashchange, where only the
 * fragment moved and a stale ?release= would otherwise win back.
 */
export function readDeepLink(key: string, withQuery = true): string | null {
  const fromHash = hashParams().get(key);
  if (fromHash !== null) return fromHash || null;
  if (!withQuery) return null;
  return new URLSearchParams(window.location.search).get(key) || null;
}

/** Take deep-link keys out of the address bar, fragment and query alike. */
export function dropDeepLink(...keys: string[]): void {
  const hash = hashParams();
  const search = new URLSearchParams(window.location.search);
  if (!keys.some((k) => hash.has(k) || search.has(k))) return;
  for (const k of keys) {
    hash.delete(k);
    search.delete(k);
  }
  const q = search.toString();
  const h = hash.toString();
  replaceUrl(`${window.location.pathname}${q ? `?${q}` : ""}${h ? `#${h}` : ""}`);
}

/**
 * Calls `apply` whenever the fragment changes to a deep link or to nothing.
 * A plain in-page anchor ("#faq") is left alone: it is not a filter, and
 * treating it as "no focus" would drop the reader's focus on a jump.
 */
export function onDeepLinkChange(apply: () => void): () => void {
  const listener = () => {
    const raw = window.location.hash.replace(/^#/, "");
    if (raw && !raw.includes("=")) return;
    apply();
  };
  window.addEventListener("hashchange", listener);
  return () => window.removeEventListener("hashchange", listener);
}

// ── Filter memory ───────────────────────────────────────────────────────────

const VIEWS = "bbsViews";
// Per document load. Browsers keep history.state across a reload, and a
// reload is a fresh visit to the address in the bar: filters that are not in
// that address should not come back with it. In-app Back and Forward share
// this module instance, so they match.
const LOAD = Math.random().toString(36).slice(2);

/** The filters `id` last showed in this history entry, if it is the same visit. */
export function readSavedView<T extends object>(id: string): T | null {
  try {
    const saved = (window.history.state as Json | null)?.[VIEWS] as
      | { load?: string; views?: Record<string, T> }
      | undefined;
    if (!saved || saved.load !== LOAD) return null;
    return saved.views?.[id] ?? null;
  } catch {
    return null;
  }
}

/** Remember `id`'s filters in this history entry. The URL does not change. */
export function saveView(id: string, value: object): void {
  try {
    // The whole state, router fields included: with no URL to change, the
    // router's replaceState passes this straight through, and this can run
    // before the router has patched history at all.
    const state = (window.history.state as Json | null) ?? {};
    const prev = state[VIEWS] as { load?: string; views?: Json } | undefined;
    const views = prev?.load === LOAD ? prev.views ?? {} : {};
    window.history.replaceState({ ...state, [VIEWS]: { load: LOAD, views: { ...views, [id]: value } } }, "");
  } catch {
    // Storage-free by design; a refusal only costs the memory.
  }
}
