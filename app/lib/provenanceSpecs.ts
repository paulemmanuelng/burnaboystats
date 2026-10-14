import { allItems, CERTS_VERIFIED_ON, type Cert, type Release } from "../data/certifications";
import { CERT_PROGRAMS } from "../data/certThresholds";
import { artistInView, countryMeta, type AfroArtist, type AfroCert } from "../data/afrobeats";
import { issuerOf, isIssuerMarker } from "./certs";
import { downloadBySlug, downloadFilename, type DownloadSlug } from "./dataDownloads";
import { API_VERSION, LICENSE, lastUpdated } from "./api";
import { CREDIT_LINE } from "./credit";
import { TOURS_EDITED_ON } from "../data/tours";
import {
  DOCUMENTED_SHOWS,
  FESTIVAL_LINEUPS,
  REVENUE_BODY,
  REVENUE_PUBLISHERS,
  REVENUE_READ_ON,
  REVENUE_REPORTS,
  TOUR_ANNOUNCEMENTS,
} from "./revenueSource";
import type { CertView } from "./certScope";
import type { DataLine, P1Spec, P2Spec } from "./provenance";

/**
 * The provenance component's props, built from data (design review 8 Oct
 * 2026, J0-9). Server-only: it reads the certification and download
 * registries, so a page builds the props and hands a client screen the plain
 * object. No source name and no date is typed here or at a call site
 * (tests/ui/provenanceSizes.test.tsx scans for both).
 */

/** Fix 9: a plaque left to the off-register line rather than named among the
 *  register bodies — read from the body's own publication before its register
 *  lists it (`source: "announcement"`), a label's plaque in a market with no
 *  register (`source: "label"`), or a label's own award marked by an issuer
 *  `body` (the split app/lib/offRegister.ts makes for burnaLabelPlaques). */
export const offRegister = (c: Cert): boolean =>
  c.source === "announcement" || c.source === "label" || (c.body !== undefined && isIssuerMarker(c.body));

/** Fix 9: the register bodies behind a set of releases, most plaques backed
 *  first, ties A–Z, named as issuerOf names them. */
export function registerBodies(rows: readonly Release[]): string[] {
  return mostBacked(rows.flatMap((r) => r.certs.filter((c) => !offRegister(c)).map(issuerOf)));
}

/** Each body once, most plaques backed first, ties A–Z. */
function mostBacked(bodies: readonly string[]): string[] {
  const backed = new Map<string, number>();
  for (const body of bodies) backed.set(body, (backed.get(body) ?? 0) + 1);
  return [...backed.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], "en")).map(([body]) => body);
}

/** An AfroCert's register body, as issuerOf names his: the country's own body
 *  for a priced programme ("RIAA Latin" is the RIAA's register), ČNS IFPI
 *  once for its two countries. */
const boardIssuer = (c: AfroCert): string => {
  const own = countryMeta(c.c).body;
  const b = c.body ?? own;
  if (CERT_PROGRAMS[b]) return own;
  return /^ČNS IFPI/.test(b) ? "ČNS IFPI" : b;
};

/** registerBodies for a board artist (J1-5; Job 0 §3.3 named it): the bodies
 *  behind the plaques a view holds, most first, ties A–Z. A plaque with a
 *  `source` — the label's or the body's own announcement — is left to the
 *  off-register caption, as his are (fix 9). */
export function boardRegisterBodies(a: AfroArtist, view?: CertView): string[] {
  return mostBacked(artistInView(a, view).releases.flatMap((r) => r.certs.filter((c) => !c.source).map(boardIssuer)));
}

/** The certifications end block's one source (J1-5; C-10): read at each
 *  body's register, the bodies named as fix 9 names them. */
export const REGISTER_READ = "Read at each body's register";

/** The phone certifications end block's P2 (fixes 27 and 28): the register
 *  bodies behind the view's plaques and the day they were verified, and "How
 *  it's counted ↗" to the registers section; no "Method ▾". */
export const certsEndP2 = (registers: readonly string[], verifiedOn: string): P2Spec => ({
  sources: [{ name: REGISTER_READ, registers, date: { label: "Verified", day: verifiedOn } }],
  method: { href: "/methodology#registers" },
});

/** The JSON routes a data line or an "Open data" link may name. */
export type JsonRoute = "certifications" | "charts" | "tours" | "awards" | "afrobeats" | "live-charts" | "songs" | "stats";
export const jsonRoute = (r: JsonRoute) => `/api/${API_VERSION}/${r}` as `/api/v1/${string}`;

/** Fix 13: P3's data line, off the registries the routes are built from — the
 *  CSV a page's rows are in (none: the token drops), its JSON route, the
 *  licence, and the site's one credit line (design review C-17). */
export function dataLineFor(json: JsonRoute, csv?: DownloadSlug): DataLine {
  return {
    ...(csv ? { csv: { href: downloadBySlug(csv).path, filename: downloadFilename(csv) } } : {}),
    json: jsonRoute(json),
    licence: { name: LICENSE.name, url: LICENSE.url },
    cite: CREDIT_LINE,
  };
}

/** The home row (desktop): every register body behind his certifications,
 *  the day the registers were last read, the registers section, and the
 *  certifications JSON (fixes 9, 10, 11 and 29). */
export const homeP1 = (): P1Spec => ({
  sources: registerBodies(allItems),
  date: { label: "Verified", day: CERTS_VERIFIED_ON },
  method: "/methodology#registers",
  openData: jsonRoute("certifications"),
});

/** The Reviewed size's day: the newest logged update, the value /methodology,
 *  /analysis, /press, /curator and /api each derived on their own. */
export const reviewedOn = (): string => lastUpdated;

/** The tours family's P1s (fixes 24 and 29; J1-11): an edit stamp, so
 *  "Updated" (fix 10); the page's own method note, so no ↗ (fix 11); and
 *  "Open data ↗" to /api/v1/tours on the desktop. */
const toursFamilyP1 = (sources: readonly string[]): P1Spec => ({
  sources,
  date: { label: "Updated", day: TOURS_EDITED_ON },
  method: "#method",
  openData: jsonRoute("tours"),
});

/** /records/tours: "TouringData (Billboard Boxscore and Pollstar reports) · tour announcements". */
export const toursP1 = (): P1Spec => toursFamilyP1([`${REVENUE_BODY} (${REVENUE_REPORTS})`, TOUR_ANNOUNCEMENTS]);

/** /records/tours/festivals: "festival line-ups · tour announcements" (C-25, the canvas's names). */
export const festivalsP1 = (): P1Spec => toursFamilyP1([FESTIVAL_LINEUPS, TOUR_ANNOUNCEMENTS]);

/** /records/tours/map: "documented shows" (C-27, the canvas's words). */
export const mapP1 = (): P1Spec => toursFamilyP1([DOCUMENTED_SHOWS]);

/** The box-office pages' P1 (fix 24; J1-12): "TouringData (Billboard
 *  Boxscore, Pollstar)", read on REVENUE_READ_ON — a day the data holds, so
 *  "Read", never the month-only "as of" (C-26) — the page's own method note,
 *  and "Open data ↗" to /api/v1/tours on the desktop. */
export const revenueP1 = (): P1Spec => ({
  sources: [`${REVENUE_PUBLISHERS[0]} (${REVENUE_PUBLISHERS.slice(1).join(", ")})`],
  date: { label: "Read", day: REVENUE_READ_ON },
  method: "#method",
  openData: jsonRoute("tours"),
});
