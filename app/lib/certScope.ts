import type { Tier } from "../data/certifications";
import { count, plural } from "./plural";

/**
 * The certifications views' two switches, and everything they recount.
 *
 * On the page they are /compare's own switches (Paul, 3 Oct 2026: "use the
 * compare togglr style"): the HOME-COUNTRY switch, named in full ("Nigeria",
 * "South Africa"), "included" by default and "left out" when off; and
 * "Featured appearances", "on · every plaque held" by default and "off · lead
 * credits only" when off. Below, the home switch off is scope "intl" and the
 * features switch off is credit "lead".
 *
 * INTERNATIONAL (Paul, 3 Oct 2026: "a switch for the certs page to turn on/off
 * international certs, for other artist NG and Tyla SA"). "all" is every
 * plaque; "intl" leaves out the artist's HOME-COUNTRY plaques: Nigeria's TCSN
 * plaques for a Nigerian artist (Burna Boy included), South Africa's for Tyla,
 * Ghana's for Black Sherif.
 *
 * LEAD (Paul, 3 Oct 2026: "a toggle that turn on and off for solo songs/certs";
 * asked "solo or lead credits?", he ruled "leads credit it is"). "all" is
 * every release; "lead" leaves out the FEATURED APPEARANCES — the releases the
 * artist is a guest on, someone else's song. Albums, solo singles, the artist's
 * own leads with a guest ("For My Hand" feat. Ed Sheeran) and co-leads billed
 * as a main artist ("Dai Dai", Shakira & Burna Boy) all stay. Which is which is
 * /compare's own rule (Paul: "exactly what the compare page and others uses"):
 * the `isFeature` certUnits gives every release — the board's
 * `kind: "Featured appearances"`, Burna Boy's `features` array — never parsed
 * out of a title or a credit line.
 *
 * The two compose: International + Lead is the international plaques on
 * releases where the artist is lead. "all" + "all" is the view every page has
 * always shown, and the one the server renders, so nothing a crawler reads
 * changes.
 *
 * Pure — no React, no window — so the pages compute every view on the server
 * and the client components recompute from the same functions.
 */

export type CertScope = "all" | "intl";
export type CreditScope = "all" | "lead";
export type CertView = { scope: CertScope; credit: CreditScope };

export const ALL_VIEW: CertView = { scope: "all", credit: "all" };

/** The deep-link keys, /compare's own (lib/compareUrl): feat=0 is "featured
 *  appearances off · lead credits only", the same param /compare reads; home=0
 *  is "home country left out". Each is present only when its switch is OFF —
 *  both switches default ON, the page as it has always read. Written to the
 *  fragment (#feat=0&home=0); a ?feat=0&home=0 query string is read too
 *  (lib/deepLink). */
export const SCOPE_KEY = "home";
export const CREDIT_KEY = "feat";
/** The one value either key carries: the switch is off. */
export const OFF_VALUE = "0";

/** The board's name for the group of releases the artist is a guest on. */
export const FEATURED_KIND = "Featured appearances";

/**
 * Nationality -> the certification ledger's country code. Keyed by the
 * artist's own `country` field (AfroArtist.country, BURNA.country), never by
 * artist: a new board artist from one of these countries needs nothing, and
 * one from a new country fails tests/certScope.test.ts until a line is added
 * here. The ledger's codes are ISO 3166-1 alpha-2 for all three. The switch is
 * NAMED by that same `country` field, in full ("Nigeria", "South Africa",
 * "Ghana" — Paul, 3 Oct 2026: "the full country name is perfect").
 */
export const HOME_CODE_BY_COUNTRY: Readonly<Record<string, string>> = {
  Nigeria: "NG",
  "South Africa": "ZA",
  Ghana: "GH",
};

/** The home country's code for an artist's `country`, or undefined. */
export const homeCodeFor = (country: string): string | undefined => HOME_CODE_BY_COUNTRY[country];

/** home=0 -> "intl" (home country left out); anything else (absent, "1",
 *  garbage) -> "all", the default. */
export const parseScope = (raw: string | null | undefined): CertScope => (raw === OFF_VALUE ? "intl" : "all");
/** feat=0 -> "lead" (featured appearances off), as on /compare; anything else
 *  -> "all". */
export const parseCredit = (raw: string | null | undefined): CreditScope => (raw === OFF_VALUE ? "lead" : "all");

type HasCerts = { certs: readonly { c: string }[] };
type Titled = { title: string };

/**
 * THE lead/featured rule for a board release — the one /compare prices by
 * (lib/certUnits: `isFeature`), shared rather than restated: a release the
 * board files under "Featured appearances" is the artist's guest spot on
 * someone else's song; anything else is the artist's own. Burna Boy's side of
 * the same rule is his `features` array, which certUnits marks the same way.
 * The certs views never classify a release themselves — the pages ask
 * certUnits.featuredTitlesOf(slug) and pass the titles down.
 */
export const isFeaturedKind = (kind: string): boolean => kind === FEATURED_KIND;

/** Whether the artist is a LEAD (main) artist on a release: anything not in
 *  the featured titles /compare's rule gives (certUnits.featuredTitlesOf). A
 *  title is unique within an artist's ledger (tests/certScope.test.ts holds
 *  every artist to it), so the title is a safe key across the server/client
 *  boundary, where object identity is not. */
export const isLeadRelease = (r: Titled, featured: ReadonlySet<string>): boolean => !featured.has(r.title);

/**
 * The releases the International switch shows. "all" (or no home country)
 * returns the input untouched. "intl" drops every home-country plaque, and then
 * every release left with none — a title whose only plaques were home-country
 * ones is not an international release, so it leaves the list rather than
 * showing empty.
 */
export function certsInScope<R extends HasCerts>(releases: readonly R[], home: string | undefined, scope: CertScope): R[] {
  if (scope === "all" || !home) return releases as R[];
  return releases
    .map((r) => ({ ...r, certs: r.certs.filter((c) => c.c !== home) }))
    .filter((r) => r.certs.length > 0);
}

/** The releases the Lead switch shows: under "lead", the featured appearances
 *  are gone; "all" returns the input untouched. */
export function creditInScope<R extends Titled>(releases: readonly R[], featured: ReadonlySet<string>, credit: CreditScope): R[] {
  if (credit === "all") return releases as R[];
  return releases.filter((r) => isLeadRelease(r, featured));
}

/** Both switches at once — the one function every view counts from. */
export function certsInView<R extends HasCerts & Titled>(
  releases: readonly R[],
  ctx: { home?: string; featured: ReadonlySet<string> },
  view: CertView
): R[] {
  return certsInScope(creditInScope(releases, ctx.featured, view.credit), ctx.home, view.scope);
}

/**
 * Whether the International switch changes anything: only when the artist
 * holds plaques on BOTH sides of it. No home plaques (Black Sherif: 25 plaques,
 * none in Ghana) and the two views are identical; no international ones (Seyi
 * Vibez: 102, all Nigerian) and "International" is an empty page. Either way
 * the switch is not rendered at all, rather than offered as a control that
 * does nothing.
 */
export function scopeSwitchable(releases: readonly HasCerts[], home: string | undefined): boolean {
  if (!home) return false;
  let atHome = false;
  let abroad = false;
  for (const r of releases)
    for (const c of r.certs) {
      if (c.c === home) atHome = true;
      else abroad = true;
      if (atHome && abroad) return true;
    }
  return false;
}

/** Whether the Lead switch changes anything: only when the artist has
 *  certified releases on BOTH sides of it — at least one featured appearance
 *  and at least one release of their own. */
export function creditSwitchable(releases: readonly (HasCerts & Titled)[], featured: ReadonlySet<string>): boolean {
  let lead = false;
  let guest = false;
  for (const r of releases) {
    if (r.certs.length === 0) continue;
    if (isLeadRelease(r, featured)) lead = true;
    else guest = true;
    if (lead && guest) return true;
  }
  return false;
}

/** Which switches an artist gets, and so which views exist. */
export type CertSwitches = { scope: boolean; credit: boolean };

/** A view with any switch the artist does not get read as "all" — so a shared
 *  #home=0 link on Black Sherif's page is simply his full ledger. */
export const effectiveView = (raw: CertView, offered: CertSwitches): CertView => ({
  scope: offered.scope ? raw.scope : "all",
  credit: offered.credit ? raw.credit : "all",
});

export type CertViewKey = "all" | "intl" | "lead" | "intl-lead";

export const viewKey = (v: CertView): CertViewKey =>
  v.scope === "intl" ? (v.credit === "lead" ? "intl-lead" : "intl") : v.credit === "lead" ? "lead" : "all";

/** Every view the offered switches make possible, "all" first. */
export function viewsOffered(offered: CertSwitches): CertView[] {
  const out: CertView[] = [ALL_VIEW];
  if (offered.scope) out.push({ scope: "intl", credit: "all" });
  if (offered.credit) out.push({ scope: "all", credit: "lead" });
  if (offered.scope && offered.credit) out.push({ scope: "intl", credit: "lead" });
  return out;
}

const TIERS: readonly Tier[] = ["Diamond", "Platinum", "Gold", "Silver"];

/** Everything the certs views count, from whatever releases they are given. */
export function certTotals(releases: readonly { certs: readonly { c: string; level: string }[] }[]): {
  total: number;
  countries: number;
  releases: number;
  tiers: Record<Tier, number>;
} {
  const tiers = { Diamond: 0, Platinum: 0, Gold: 0, Silver: 0 } as Record<Tier, number>;
  const countries = new Set<string>();
  let total = 0;
  for (const r of releases)
    for (const c of r.certs) {
      total++;
      countries.add(c.c);
      if ((TIERS as readonly string[]).includes(c.level)) tiers[c.level as Tier]++;
    }
  return { total, countries: countries.size, releases: releases.length, tiers };
}

/**
 * The view's noun, counted: "certifications", "international certifications",
 * "certifications as lead artist", "international certifications as lead
 * artist" — singular at 1. `one`/`many` let the phone count in "awards".
 */
export function viewNoun(n: number, view: CertView, one = "certification", many = "certifications"): string {
  return `${view.scope === "intl" ? "international " : ""}${plural(n, one, many)}${view.credit === "lead" ? " as lead artist" : ""}`;
}

/** "74 certifications across 24 countries" / "65 international certifications
 *  across 23 countries" / "172 certifications as lead artist across 24
 *  countries" — the count phrase both layouts print and announce. */
export function certCountPhrase(total: number, countries: number, view: CertView): string {
  return `${total} ${viewNoun(total, view)} across ${count(countries, "country", "countries")}`;
}

/**
 * The hero's kicker for a view — the line above the big number, on the phone
 * screen (MobileCerts) and as the eyebrow of Burna Boy's desktop hero. Paul,
 * 3 Oct 2026: "when someone toggle, since the number changes, it should
 * adapt". It said "Certified worldwide" over "64 international awards as lead
 * artist" until then.
 *
 *   both on        Certified worldwide
 *   home left out  Outside Nigeria
 *   features off   Worldwide · Lead credits
 *   both off       Outside Nigeria · Lead credits
 *
 * The home country in full, as its switch names it ("South Africa" for Tyla).
 *
 * ONE LINE at 320px, in every view, for the longest home country any artist's
 * switch is offered with (South Africa): the phone kicker is 11px mono caps,
 * and "Certified outside South Africa · Lead credits" measured wider than the
 * hero at 320 (tests/certKicker.test.ts records the measurement), so every
 * narrowed form drops "Certified" — the all-view keeps the page's own words.
 * The same wording at every width and on both layouts: there is no
 * breakpoint in it, so the desktop eyebrow and the phone kicker never say two
 * things about one view.
 */
export function certKicker(view: CertView, homeName: string): string {
  if (view.scope === "all" && view.credit === "all") return "Certified worldwide";
  const where = view.scope === "intl" ? `Outside ${homeName}` : "Worldwide";
  return view.credit === "lead" ? `${where} · Lead credits` : where;
}

/**
 * The dated log's lede after its first sentence, per view — Burna Boy's log on
 * /certifications, both layouts (CertHistoryByYear, MobileCerts). The log is
 * dated INTERNATIONAL announcements with featured appearances in, not the
 * ledger the switches narrow, so its year counts never move; what moves is
 * what the sentence may say about the totals above it.
 *
 *   both on        TCSN plaques count in the totals, not in this log
 *   home left out  TCSN plaques are left out of the totals above too — the
 *                  log and the totals now agree, so nothing more is said
 *   features off   + the log keeps featured appearances
 *
 * Until 3 Oct 2026 the home-left-out view still said the TCSN plaques "count
 * in the totals" under totals that had just left them out.
 */
export const LOG_HOME_IN = "Nigeria’s TCSN plaques count in the totals and the country grid, not in this log.";
export const LOG_HOME_OUT = "Nigeria’s TCSN plaques are left out of the totals above, and were never in this log.";
export const LOG_FEATURES_NOTE =
  "Turning features off does not narrow this log: it keeps every international announcement, featured appearances included.";
export function logLedeTail(view: CertView): string {
  const home = view.scope === "intl" ? LOG_HOME_OUT : LOG_HOME_IN;
  return view.credit === "lead" ? `${home} ${LOG_FEATURES_NOTE}` : home;
}

/**
 * The one sentence a view that holds nothing shows in place of its furniture
 * — the phone's lede and tier bars, the desktop's numbers grid and country
 * strip. Both switches off can empty a page (BNXN, Tiwa Savage: every
 * international plaque a guest spot), and the page drew "0 across 0
 * countries, from 0 certified releases" over two 0 cards and an empty strip
 * (debug pass, 3 Oct 2026). The switch that brings the plaques back is named,
 * as the switch itself names it. Only International + Lead can be empty —
 * scopeSwitchable and creditSwitchable offer neither switch alone over
 * nothing — but each case says what it is.
 */
export function emptyViewSentence(name: string, view: CertView, homeName: string): string {
  if (view.credit === "lead")
    return `Every ${view.scope === "intl" ? "international " : ""}plaque ${name} holds is a featured appearance — turn Featured appearances back on to see them.`;
  return `Every plaque ${name} holds is in ${homeName} — turn ${homeName} back on to see them.`;
}
