import { describe, it, expect } from "vitest";
import { COUNTRIES, allItems } from "../app/data/certifications";
import { afrobeatsArtists, countryMeta } from "../app/data/afrobeats";

// STANDING RULE (28 Aug 2026): a new certification must arrive with a link to the
// certifying body's own register. The URL lives on the COUNTRY — COUNTRIES in
// app/data/certifications.ts, or EXTRA_COUNTRIES in app/data/afrobeats.ts for a
// board-only country like Mexico — so adding a plaque in a country nobody has
// sourced yet fails here with "no register link for: XX (Body)".
//
// Linking each cert badge on the page itself was considered and rejected: it
// complicates the board, and /methodology is where a reader checks a body.
//
// Twelve of the site's 1,065 certifications sat on a body with no register link
// — Greece (7), Mexico (3), Slovakia and Czechia (1 each). Worse than unlinked:
// /methodology built its register list with `if (!c.url) continue`, so those
// bodies were dropped from the page entirely and it read as complete. All four
// were checked on 28 Aug 2026 and all four do publish something readable.
const certCountries = () => {
  const codes = new Set<string>();
  for (const i of allItems) for (const c of i.certs) codes.add(c.c);
  for (const a of afrobeatsArtists) for (const r of a.releases) for (const c of r.certs) codes.add(c.c);
  return [...codes].sort();
};

const meta = (code: string): { name: string; body: string; url?: string } =>
  COUNTRIES[code] ?? countryMeta(code);

describe("every certifying body the site relies on is linkable", () => {
  it("no certification sits on a country with no register URL", () => {
    const unlinked = certCountries()
      .filter((c) => !meta(c).url)
      .map((c) => `${c} (${meta(c).body})`);
    expect(unlinked, `no register link for: ${unlinked.join(", ")}`).toEqual([]);
  });

  it("no certification sits on a country with no named body", () => {
    const unnamed = certCountries().filter((c) => meta(c).body === c);
    expect(unnamed, `no certifying body named for: ${unnamed.join(", ")}`).toEqual([]);
  });

  it("every register URL is absolute, and http only where the body has no https", () => {
    // Denmark (IFPI Danmark) and Sweden (Grammotex) genuinely serve no https —
    // the TLS connection fails outright, it is not a redirect. Those two stay
    // http on purpose; anything else must be https.
    const HTTP_ONLY = new Set(["DK", "SE"]);
    const bad = certCountries()
      .map((c) => [c, meta(c).url] as const)
      .filter(([c, u]) => {
        if (!u || !/^https?:\/\/[^\s"']+$/.test(u)) return true;
        return u.startsWith("http://") && !HTTP_ONLY.has(c);
      })
      .map(([c, u]) => `${c} → ${u}`);
    expect(bad).toEqual([]);
  });
});
