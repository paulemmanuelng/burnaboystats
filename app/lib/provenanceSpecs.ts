import { allItems, CERTS_VERIFIED_ON, type Cert, type Release } from "../data/certifications";
import { issuerOf, isIssuerMarker } from "./certs";
import { downloadBySlug, downloadFilename, type DownloadSlug } from "./dataDownloads";
import { API_VERSION, LICENSE, lastUpdated } from "./api";
import { CREDIT_LINE } from "./credit";
import type { DataLine, P1Spec } from "./provenance";

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
  const backed = new Map<string, number>();
  for (const r of rows)
    for (const c of r.certs) {
      if (offRegister(c)) continue;
      const body = issuerOf(c);
      backed.set(body, (backed.get(body) ?? 0) + 1);
    }
  return [...backed.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], "en")).map(([body]) => body);
}

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
