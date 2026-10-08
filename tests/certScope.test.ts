import {
  ALL_VIEW,
  certCountPhrase,
  certsInScope,
  certsInView,
  certTotals,
  CREDIT_KEY,
  creditInScope,
  creditSwitchable,
  effectiveView,
  HOME_CODE_BY_COUNTRY,
  homeCodeFor,
  isFeaturedKind,
  isLeadRelease,
  parseCredit,
  parseScope,
  scopeSwitchable,
  SCOPE_KEY,
  viewKey,
  viewNoun,
  viewsOffered,
  type CertView,
} from "../app/lib/certScope";
import {
  afrobeatsArtists, artistBySlug, artistInView, BURNA, certCount, countryCount, offRegisterHold, offRegisterPhrase,
} from "../app/data/afrobeats";
import { comparableArtists, featuredTitlesOf, priceArtist } from "../app/lib/certUnits";
import { COMPARE_KEYS } from "../app/lib/compareUrl";
import {
  albums, allItems, countryCount as burnaCountryCount, features, singles, totalAwards,
} from "../app/data/certifications";

/**
 * The International switch's arithmetic (lib/certScope), checked against
 * the site's own data. Each artist's home-country plaques are counted here by a
 * separate loop over the raw rows — not by the helper under test — so a helper
 * that dropped too much or too little cannot balance against itself.
 */

const INTL: CertView = { scope: "intl", credit: "all" };
const LEAD: CertView = { scope: "all", credit: "lead" };
const BOTH: CertView = { scope: "intl", credit: "lead" };

const homeRows = (releases: { certs: { c: string }[] }[], home: string) =>
  releases.reduce((n, r) => n + r.certs.filter((c) => c.c === home).length, 0);

describe("homeCodeFor: home is read off the artist's own record", () => {
  it("resolves every board artist's country, and Burna Boy's", () => {
    // A new board artist from a country the map lacks fails here, rather than
    // silently getting no switch.
    for (const a of afrobeatsArtists) expect(homeCodeFor(a.country), a.slug).toMatch(/^[A-Z]{2}$/);
    expect(homeCodeFor(BURNA.country)).toBe("NG");
  });

  it("the switch's name is the country in full — the map's own keys, never a code", () => {
    // Paul, 3 Oct 2026: "the full country name is perfect". The page names the
    // switch by the artist's `country`, which must be one of these keys.
    expect(Object.keys(HOME_CODE_BY_COUNTRY).sort()).toEqual(["Ghana", "Nigeria", "South Africa"]);
    expect(artistBySlug("tyla")!.country).toBe("South Africa");
    expect(BURNA.country).toBe("Nigeria");
    expect(artistBySlug("black-sherif")!.country).toBe("Ghana");
  });

  it("maps the three nationalities the brief names", () => {
    expect(homeCodeFor(artistBySlug("tyla")!.country)).toBe("ZA");
    expect(homeCodeFor(artistBySlug("wizkid")!.country)).toBe("NG");
    expect(homeCodeFor(artistBySlug("black-sherif")!.country)).toBe("GH");
  });
});

describe("certsInScope", () => {
  // 7 Oct 2026: + "Water" 🇹🇷 3× Diamond (Epic Records' plaque, owner's ruling), an international plaque in a new country.
  it("Tyla: 76 certifications in 25 countries, 66 international in 24 (her ten ZA plaques out)", () => {
    const tyla = artistBySlug("tyla")!;
    const home = homeCodeFor(tyla.country)!;
    const all = certTotals(certsInScope(tyla.releases, home, "all"));
    const intl = certTotals(certsInScope(tyla.releases, home, "intl"));
    expect([all.total, all.countries]).toEqual([76, 25]);
    expect([intl.total, intl.countries]).toEqual([66, 24]);
    expect(certCountPhrase(all.total, all.countries, ALL_VIEW)).toBe("76 certifications across 25 countries");
    expect(certCountPhrase(intl.total, intl.countries, INTL)).toBe("66 international certifications across 24 countries");
  });

  it("a Nigerian artist (Wizkid) loses exactly his NG plaques, and only them", () => {
    const wiz = artistBySlug("wizkid")!;
    const intl = certsInScope(wiz.releases, "NG", "intl");
    const t = certTotals(intl);
    expect(homeRows(wiz.releases, "NG")).toBeGreaterThan(0);
    expect(t.total).toBe(certCount(wiz) - homeRows(wiz.releases, "NG"));
    expect(t.countries).toBe(countryCount(wiz) - 1);
    expect(intl.flatMap((r) => r.certs).some((c) => c.c === "NG")).toBe(false);
    // Every non-NG plaque survives, on the same release.
    for (const r of wiz.releases) {
      const kept = intl.find((x) => x.title === r.title)?.certs ?? [];
      expect(kept).toEqual(r.certs.filter((c) => c.c !== "NG"));
    }
  });

  it("a release whose only plaques are home-country ones leaves the International list", () => {
    const wiz = artistBySlug("wizkid")!;
    const homeOnly = wiz.releases.filter((r) => r.certs.every((c) => c.c === "NG"));
    expect(homeOnly.length).toBeGreaterThan(0);
    const intlTitles = new Set(certsInScope(wiz.releases, "NG", "intl").map((r) => r.title));
    for (const r of homeOnly) expect(intlTitles.has(r.title), r.title).toBe(false);
    expect(intlTitles.size).toBe(wiz.releases.length - homeOnly.length);
  });

  it("Burna Boy: the NG (TCSN) plaques out, every other country kept", () => {
    const intl = certTotals(certsInScope(allItems, "NG", "intl"));
    expect(homeRows(allItems, "NG")).toBeGreaterThan(0);
    expect(intl.total).toBe(totalAwards() - homeRows(allItems, "NG"));
    expect(intl.countries).toBe(burnaCountryCount - 1);
    expect(intl.tiers.Diamond + intl.tiers.Platinum + intl.tiers.Gold + intl.tiers.Silver).toBe(intl.total);
  });

  it("'all', or no home country, is the input untouched", () => {
    const tyla = artistBySlug("tyla")!;
    expect(certsInScope(tyla.releases, "ZA", "all")).toBe(tyla.releases);
    expect(certsInScope(tyla.releases, undefined, "intl")).toBe(tyla.releases);
  });
});

describe("scopeSwitchable: the switch only appears when it changes something", () => {
  it("Black Sherif holds no Ghanaian plaque, so there is nothing to leave out", () => {
    const bs = artistBySlug("black-sherif")!;
    expect(homeRows(bs.releases, "GH")).toBe(0);
    expect(scopeSwitchable(bs.releases, homeCodeFor(bs.country))).toBe(false);
  });

  it("an artist whose every plaque is at home gets no switch either (International would be empty)", () => {
    for (const a of afrobeatsArtists) {
      const home = homeCodeFor(a.country)!;
      const atHome = homeRows(a.releases, home);
      const expected = atHome > 0 && atHome < certCount(a);
      expect(scopeSwitchable(a.releases, home), a.slug).toBe(expected);
    }
  });

  it("Tyla, Wizkid and Burna Boy all get one", () => {
    expect(scopeSwitchable(artistBySlug("tyla")!.releases, "ZA")).toBe(true);
    expect(scopeSwitchable(artistBySlug("wizkid")!.releases, "NG")).toBe(true);
    expect(scopeSwitchable(allItems, "NG")).toBe(true);
  });
});

describe("parseScope", () => {
  it("reads only home=0 as the home country left out", () => {
    expect(SCOPE_KEY).toBe("home");
    expect(parseScope("0")).toBe("intl");
    expect(parseScope(null)).toBe("all");
    expect(parseScope("")).toBe("all");
    expect(parseScope("1")).toBe("all");
    expect(parseScope("intl")).toBe("all");
  });

  it("phrases one of each in the singular", () => {
    expect(certCountPhrase(1, 1, { scope: "intl", credit: "all" })).toBe("1 international certification across 1 country");
    expect(certCountPhrase(1, 1, { scope: "intl", credit: "lead" })).toBe(
      "1 international certification as lead artist across 1 country"
    );
  });
});

// ── The Lead switch (owner's ruling, 3 Oct 2026: "leads credit it is") ──────

/** Plaques on the releases the data files as featured appearances — counted by
 *  a separate loop over the data's own groups, not by the helper under test. */
const plaques = (rs: { certs: unknown[] }[]) => rs.reduce((n, r) => n + r.certs.length, 0);
const countriesOf = (rs: { certs: { c: string }[] }[]) => new Set(rs.flatMap((r) => r.certs.map((c) => c.c))).size;
const burnaFeatured = featuredTitlesOf("burna-boy");
const featuredTitles = (a: { slug: string }) => featuredTitlesOf(a.slug);
const titles = (rs: { title: string }[]) => rs.map((r) => r.title);

describe("a title is unique within each artist's ledger (the Lead switch keys on it)", () => {
  it("Burna Boy and every board artist", () => {
    const dupes = (ts: string[]) => ts.filter((t, i) => ts.indexOf(t) !== i);
    expect(dupes(titles(allItems))).toEqual([]);
    for (const a of afrobeatsArtists) expect(dupes(titles(a.releases)), a.slug).toEqual([]);
  });
});

describe("creditInScope: Burna Boy", () => {
  // Pinned on 3 Oct 2026 against the data on main (the brief's 248 / 171 was
  // one plaque behind: the ledger holds 249). A new plaque moves these — re-read
  // the data and update them, never loosen them to a range.
  // 4 Oct 2026: 249 -> 250 and 172 -> 173 — "Dai Dai" Denmark Gold (Hitlisten,
  // IFPI Danmark's own chart), on a lead release; Denmark was already counted.
  // 5 Oct 2026: 173 -> 175, features 24 -> 23 and 77 -> 75 — "Toni-Ann Singh"
  // (feat. Popcaan), his own Love, Damini track, moved out of `features`
  // (records-01); CA and NG were already in the lead set.
  // 7 Oct 2026: 250 -> 251, 175 -> 176 and lead countries 24 -> 25 — "Dai Dai"
  // Turkey Diamond (Sony Music Türkiye, label-issued; owner's ruling), a lead
  // release in a new country. Colombia's Gold -> Platinum moves no count.
  // 7 Oct 2026, Rule C (the way ChartMasters files it): ten releases that sit
  // in his own Spotify discography ("WGFT", "My Oasis", "Play Play" …) left
  // `features` — 23 -> 13 featured appearances, 75 -> 57 plaques on them,
  // 176 -> 194 as lead artist, lead countries 25 -> 26. No plaque changed.
  it("251 plaques in all; 194 as lead artist; the 57 on his 13 featured appearances hidden", () => {
    const lead = creditInScope(allItems, burnaFeatured, "lead");
    expect(totalAwards()).toBe(251);
    expect(plaques(features)).toBe(57);
    expect(features).toHaveLength(13);
    expect(certTotals(lead).total).toBe(194);
    expect(certTotals(lead).total).toBe(totalAwards() - plaques(features));
    // The lead view is exactly his albums and singles, in order.
    expect(titles(lead)).toEqual(titles([...albums, ...singles]));
    expect(certTotals(lead).countries).toBe(countriesOf([...albums, ...singles]));
    expect(certTotals(lead).countries).toBe(26);
  });

  it("keeps co-leads and his own leads with a guest; hides his featured appearances (Rule C)", () => {
    const kept = new Set(titles(creditInScope(allItems, burnaFeatured, "lead")));
    // "Dai Dai" (Shakira & Burna Boy — co-billed), "For My Hand" (feat. Ed
    // Sheeran — his lead), his albums — and the other acts' records that sit in
    // his own Spotify discography: "WGFT" (Gunna), "My Oasis" (Sam Smith),
    // "Talibans II" (a bonus track on I Told Them…).
    for (const t of ["Dai Dai", "For My Hand", "Love, Damini", "African Giant", "Last Last", "WGFT", "My Oasis", "Talibans II"])
      expect(kept.has(t), t).toBe(true);
    // On none of his releases, and not first-listed: featured.
    for (const t of ["Location", "We Pray", "Own It", "Ginger", "Jerusalema (Remix)", "Be Honest", "Sungba (Remix)"]) expect(kept.has(t), t).toBe(false);
    expect(isLeadRelease({ title: "Dai Dai" }, burnaFeatured)).toBe(true);
    expect(isLeadRelease({ title: "WGFT" }, burnaFeatured)).toBe(true);
    expect(isLeadRelease({ title: "Location" }, burnaFeatured)).toBe(false);
    expect(isLeadRelease({ title: "Be Honest" }, burnaFeatured)).toBe(false);
  });

  it("'all' is the input untouched", () => {
    expect(creditInScope(allItems, burnaFeatured, "all")).toBe(allItems);
  });
});

describe("creditInScope: the board, from each release's own `kind`", () => {
  // Until 7 Oct 2026 "Essence" was Wizkid's lead and Tems's guest spot, by
  // billing. Rule C files it a lead on both boards: its singles are in both
  // discographies. Tems's featured appearances are "Raindance", "Fountains"
  // and "Move".
  it("Wizkid and Tems both keep \"Essence\" — in both discographies; Tems loses \"Move\"", () => {
    const wiz = artistBySlug("wizkid")!;
    const tems = artistBySlug("tems")!;
    expect(titles(creditInScope(wiz.releases, featuredTitles(wiz), "lead"))).toContain("Essence");
    expect(titles(creditInScope(tems.releases, featuredTitles(tems), "lead"))).toContain("Essence");
    expect(titles(creditInScope(tems.releases, featuredTitles(tems), "lead"))).not.toContain("Move");
  });

  it("Olamide keeps the co-lead \"Trumpet (Olamide & CKay)\"", () => {
    const ola = artistBySlug("olamide")!;
    expect(titles(creditInScope(ola.releases, featuredTitles(ola), "lead"))).toContain("Trumpet (Olamide & CKay)");
  });

  it("CKay keeps it too — a co-lead is a lead on both its leads' boards (owner, 3 Oct 2026: \"add it\")", () => {
    // TurnTable bills it "Trumpet" — "Olamide & CKay": both main artists. It
    // had been filed as CKay's guest spot; now titled as Olamide's row is, so
    // the two boards name one record one way. His lead-only count: 26 → 27
    // plaques on 7 → 8 releases (one NG Gold); internationally nothing moves.
    // Rule C (7 Oct 2026) keeps it a lead — the single is in his discography —
    // and keeps "Beggie Beggie" and "La La" his featured appearances: neither
    // is on a release of his own.
    const ckay = artistBySlug("ckay")!;
    const lead = creditInScope(ckay.releases, featuredTitles(ckay), "lead");
    expect(titles(lead)).toContain("Trumpet (Olamide & CKay)");
    expect(ckay.releases.some((r) => r.title === "Trumpet")).toBe(false);
    // Anchored on the published figures, not re-derived from the same filter.
    expect(certTotals(lead)).toMatchObject({ total: 27, releases: 8, countries: 15 });
    // /compare reads the same `kind` (certUnits' isFeature): with features off
    // and Nigeria in, his Nigerian line holds 8 plaques.
    const units = priceArtist(comparableArtists.find((a) => a.slug === "ckay")!, { includeFeatures: false, includeNigeria: true });
    expect(units.nigeria.plaques).toBe(8);
    // Seyi Vibez's own "Trumpet" stays his, and stays his lead.
    const seyi = artistBySlug("seyi-vibez")!;
    expect(seyi.releases.find((r) => r.title === "Trumpet")?.kind).toBe("Lead singles");
  });

  it("every artist loses exactly the plaques filed under \"Featured appearances\"", () => {
    for (const a of afrobeatsArtists) {
      const guest = a.releases.filter((r) => r.kind === "Featured appearances");
      const lead = creditInScope(a.releases, featuredTitles(a), "lead");
      expect(certTotals(lead).total, a.slug).toBe(certCount(a) - plaques(guest));
      expect(lead.some((r) => r.kind === "Featured appearances"), a.slug).toBe(false);
    }
  });

  // Her one guest plaque, "Show Me Love", is out: 75 in 25. Rule C alone
  // would make it a lead (it is her own single "Show Me Love (with Tyla)");
  // it is one of the three overrides to featured (Paul, 7 Oct 2026), as
  // ChartMasters files it.
  it("Tyla: 75 as lead artist in 25 countries — “Show Me Love” stays featured (an override)", () => {
    const tyla = artistBySlug("tyla")!;
    const t = certTotals(creditInScope(tyla.releases, featuredTitles(tyla), "lead"));
    expect([t.total, t.countries]).toEqual([75, 25]);
    expect([...featuredTitles(tyla)]).toEqual(["Show Me Love"]);
    expect(tyla.releases.find((r) => r.title === "Show Me Love")?.kind).toBe("Featured appearances");
  });
});

describe("certsInView: the two switches compose", () => {
  it("Burna Boy, International + Lead: international plaques on his own releases only", () => {
    const both = certsInView(allItems, { home: "NG", featured: burnaFeatured }, BOTH);
    const t = certTotals(both);
    const lead = [...albums, ...singles];
    expect(t.total).toBe(plaques(lead) - homeRows(lead, "NG"));
    // 112 -> 113 on 5 Oct 2026: "Toni-Ann Singh"'s Canadian Gold, his own
    // release, left `features` (records-01). 113 -> 114 and 23 -> 24 on 7 Oct
    // 2026: "Dai Dai" Turkey Diamond (label-issued), a new country. 114 -> 125
    // and 24 -> 25 the same day: Rule C made "WGFT", "My Oasis" and eight more
    // his leads (each is in his own Spotify discography).
    expect([t.total, t.countries]).toEqual([125, 25]);
    expect(both.flatMap((r) => r.certs).some((c) => c.c === "NG")).toBe(false);
    expect(titles(both).some((x) => burnaFeatured.has(x))).toBe(false);
    expect(certCountPhrase(t.total, t.countries, BOTH)).toBe("125 international certifications as lead artist across 25 countries");
    // The order does not matter.
    expect(certsInScope(creditInScope(allItems, burnaFeatured, "lead"), "NG", "intl")).toEqual(both);
  });

  it("Tyla, International + Lead: 65 in 24 countries (“Show Me Love” stays out: an override)", () => {
    const tyla = artistBySlug("tyla")!;
    const t = certTotals(certsInView(tyla.releases, { home: "ZA", featured: featuredTitles(tyla) }, BOTH));
    expect([t.total, t.countries]).toEqual([65, 24]);
  });

  // BNXN was the example until 7 Oct 2026, when Rule C made "Finesse" and
  // "Propeller" — six international plaques — his leads (both are in his own
  // discography; "Mood" is not, and stays featured).
  it("a view can be empty — Tiwa Savage's one international plaque is a featured appearance", () => {
    const tiwa = artistBySlug("tiwa-savage")!;
    expect(certsInView(tiwa.releases, { home: "NG", featured: featuredTitles(tiwa) }, BOTH)).toEqual([]);
    expect(certTotals([]).total).toBe(0);
    const b = artistBySlug("bnxn")!;
    expect(certTotals(certsInView(b.releases, { home: "NG", featured: featuredTitles(b) }, BOTH))).toMatchObject({ total: 6, countries: 5, releases: 2 });
  });

  it("phrases each view", () => {
    expect(certCountPhrase(172, 24, LEAD)).toBe("172 certifications as lead artist across 24 countries");
    expect(certCountPhrase(249, 26, ALL_VIEW)).toBe("249 certifications across 26 countries");
    expect(viewNoun(3, LEAD, "award", "awards")).toBe("awards as lead artist");
  });
});

describe("creditSwitchable: the Lead switch only appears when it changes something", () => {
  it("matches an independent count for every artist", () => {
    for (const a of afrobeatsArtists) {
      const certified = a.releases.filter((r) => r.certs.length > 0);
      const guest = certified.filter((r) => r.kind === "Featured appearances").length;
      const expected = guest > 0 && guest < certified.length;
      expect(creditSwitchable(a.releases, featuredTitles(a)), a.slug).toBe(expected);
    }
  });

  it("Burna Boy gets one; an artist with no featured appearances, or only them, does not", () => {
    expect(creditSwitchable(allItems, burnaFeatured)).toBe(true);
    expect(creditSwitchable([...albums, ...singles], burnaFeatured)).toBe(false);
    expect(creditSwitchable(features, burnaFeatured)).toBe(false);
  });
});

describe("view plumbing", () => {
  it("parseCredit reads only feat=0 — /compare's own param — as lead credits only", () => {
    expect(CREDIT_KEY).toBe("feat");
    // The same key /compare reads its features switch from.
    expect(COMPARE_KEYS.has(CREDIT_KEY)).toBe(true);
    expect(parseCredit("0")).toBe("lead");
    expect(parseCredit(null)).toBe("all");
    expect(parseCredit("1")).toBe("all");
    expect(parseCredit("lead")).toBe("all");
  });

  it("a switch the artist does not get reads as 'all'", () => {
    expect(effectiveView(BOTH, { scope: false, credit: true })).toEqual(LEAD);
    expect(effectiveView(BOTH, { scope: true, credit: false })).toEqual(INTL);
    expect(effectiveView(BOTH, { scope: false, credit: false })).toEqual(ALL_VIEW);
  });

  it("names and lists the views the switches offer", () => {
    expect([ALL_VIEW, INTL, LEAD, BOTH].map(viewKey)).toEqual(["all", "intl", "lead", "intl-lead"]);
    expect(viewsOffered({ scope: true, credit: true }).map(viewKey)).toEqual(["all", "intl", "lead", "intl-lead"]);
    expect(viewsOffered({ scope: false, credit: true }).map(viewKey)).toEqual(["all", "lead"]);
    expect(viewsOffered({ scope: false, credit: false }).map(viewKey)).toEqual(["all"]);
  });
});

// ── Parity with /compare (Paul, 3 Oct 2026: "exactly what the compare page and
// others uses") ───────────────────────────────────────────────────────────────

describe("the Lead switch counts exactly what /compare counts with lead credits only", () => {
  /** /compare's own plaque count for an artist — priced plus unpriceable, with
   *  Nigeria in, so it is every plaque the options leave standing. */
  const comparePlaques = (slug: string, includeFeatures: boolean) => {
    const p = priceArtist(comparableArtists.find((a) => a.slug === slug)!, { includeNigeria: true, includeFeatures });
    return p.pricedPlaques + p.excludedPlaques;
  };
  /** The certs view's own ledger for an artist: Burna Boy's three arrays, a
   *  board artist's releases. Not comparableArtists — that is /compare's copy. */
  const ledger = (slug: string) => (slug === "burna-boy" ? allItems : artistBySlug(slug)!.releases);

  it("covers Burna Boy and every board artist", () => {
    expect(comparableArtists.map((a) => a.slug)).toEqual(["burna-boy", ...afrobeatsArtists.map((a) => a.slug)]);
  });

  it.each(comparableArtists.map((a) => [a.slug]))("%s: Lead === /compare lead-only; All === every plaque held", (slug) => {
    const featured = featuredTitlesOf(slug);
    const all = certTotals(certsInView(ledger(slug), { featured }, ALL_VIEW)).total;
    const lead = certTotals(certsInView(ledger(slug), { featured }, LEAD)).total;
    expect(lead).toBe(comparePlaques(slug, false));
    expect(all).toBe(comparePlaques(slug, true));
    expect(all).toBe(plaques(ledger(slug)));
  });

  it("the shared rule: a board release is featured exactly when filed under \"Featured appearances\"", () => {
    for (const a of afrobeatsArtists)
      for (const r of a.releases) expect(featuredTitlesOf(a.slug).has(r.title), `${a.slug}: ${r.title}`).toBe(r.kind === "Featured appearances");
    expect([...featuredTitlesOf("burna-boy")]).toEqual(titles(features));
    expect(featuredTitlesOf("no-such-artist").size).toBe(0);
  });
});

// ── Every view, pinned (re-read from the data on main after #401/#402) ─────
// Re-derived 3 Oct 2026 after #402 added Tyla's "Chanel" ZA Gold (74 -> 75).
// 4 Oct 2026: Burna Boy +1 in every view — "Dai Dai" Denmark Gold (a lead
// release, an international plaque, a country he already held).
// 5 Oct 2026: Burna Boy featOff +2 and bothOff +1 — "Toni-Ann Singh" (CA Gold,
// NG Silver), his own release, moved out of `features` (records-01).
// 7 Oct 2026: Burna Boy +1 plaque and +1 country in every view — "Dai Dai"
// Turkey Diamond (label-issued, a lead release, international); Tyla the same —
// "Water" Turkey 3× Diamond (Epic Records' plaque). Owner's ruling.
// 7 Oct 2026, Rule C (the way ChartMasters files it): featOff and bothOff
// move wherever a release changed group — Burna Boy 176 -> 194 and 114 -> 125,
// Wizkid 97 -> 116 and 47 -> 56, Olamide 48 -> 46 (three of his leads are on
// no release of his), BNXN 46 -> 54 and 0 -> 6, Tiwa Savage 5 -> 10. Tyla and
// Black Sherif do not move ("Show Me Love" and "Come & Go" are overrides;
// "Wotowoto Seasoning" and "Always" swap).
// Exact figures, one row per artist: [plaques, countries] in each of the four
// views. A new plaque moves these — re-read the data and update them, never
// loosen them to a range. Each total is also recounted by a raw loop over the
// rows (home code / featured titles), not by certsInView, so the pin and the
// helper cannot drift together.
describe("every view, pinned per artist", () => {
  type Pin = { all: [number, number]; homeOff: [number, number]; featOff: [number, number]; bothOff: [number, number] };
  const PINS: Record<string, Pin> = {
    "burna-boy": { all: [251, 27], homeOff: [179, 26], featOff: [194, 26], bothOff: [125, 25] },
    tyla: { all: [76, 25], homeOff: [66, 24], featOff: [75, 25], bothOff: [65, 24] },
    wizkid: { all: [159, 21], homeOff: [88, 20], featOff: [116, 9], bothOff: [56, 8] },
    olamide: { all: [54, 2], homeOff: [2, 1], featOff: [46, 2], bothOff: [2, 1] },
    // No Ghanaian plaque: the home switch is not offered, so home-off IS all.
    "black-sherif": { all: [25, 1], homeOff: [25, 1], featOff: [22, 1], bothOff: [22, 1] },
    bnxn: { all: [65, 6], homeOff: [10, 5], featOff: [54, 6], bothOff: [6, 5] },
    "tiwa-savage": { all: [12, 2], homeOff: [1, 1], featOff: [10, 1], bothOff: [0, 0] },
  };
  const VIEWS = { all: ALL_VIEW, homeOff: INTL, featOff: LEAD, bothOff: BOTH } as const;

  for (const [slug, pin] of Object.entries(PINS)) {
    it(slug, () => {
      const isBurna = slug === "burna-boy";
      const a = isBurna ? undefined : artistBySlug(slug)!;
      const rel: { title: string; certs: { c: string; level: string }[] }[] = isBurna ? allItems : a!.releases;
      const home = homeCodeFor(isBurna ? BURNA.country : a!.country)!;
      const feat = new Set(featuredTitlesOf(slug));
      const offered = { scope: scopeSwitchable(rel, home), credit: creditSwitchable(rel, feat) };
      for (const [k, v] of Object.entries(VIEWS) as [keyof Pin, CertView][]) {
        const view = effectiveView(v, offered);
        const t = certTotals(certsInView(rel, { home, featured: feat }, view));
        expect([t.total, t.countries], `${slug} ${k}`).toEqual(pin[k]);
        // The raw recount.
        const kept = rel
          .filter((r) => view.credit === "all" || !feat.has(r.title))
          .flatMap((r) => r.certs.filter((c) => view.scope === "all" || c.c !== home));
        expect(kept.length, `${slug} ${k} raw`).toBe(t.total);
        expect(new Set(kept.map((c) => c.c)).size, `${slug} ${k} raw countries`).toBe(t.countries);
      }
    });
  }
});

// ── The off-register caveat, recounted per view (#402's helpers) ──────────
// Every view is the same artist with fewer releases, and offRegisterPhrase /
// offRegisterHold count it exactly as they count the full ledger — so the
// "except …" line in a narrowed view names only the off-register plaques that
// view still shows, and says nothing when it shows none.
describe("the 'except …' caveat follows the view", () => {
  const tyla = artistBySlug("tyla")!;
  const tems = artistBySlug("tems")!;
  const view = (a: typeof tyla, v: CertView) => ({
    ...a,
    releases: certsInView(a.releases, { home: homeCodeFor(a.country), featured: new Set(featuredTitlesOf(a.slug)) }, v),
  });

  it("Tyla, all: ten in South Africa (nine award, one post), one in Turkey and one in France", () => {
    expect(offRegisterPhrase(view(tyla, ALL_VIEW))).toBe(
      "10 certifications in South Africa, 9 read from the label's own award and 1 from its own announcement; 1 in Turkey, read from the label's own award; and 1 in France, read from SNEP's own announcement"
    );
    expect(offRegisterHold(view(tyla, ALL_VIEW))).toBe("which no register holds");
  });

  // 7 Oct 2026: Turkey's label plaque is international, so it stays in both
  // views beside the French post. Turkey has no register, so the clause is
  // "which no register holds", not "the registers" (review of 7 Oct 2026).
  it("Tyla, South Africa left out: Turkey's label plaque and the French post remain", () => {
    for (const v of [INTL, BOTH]) {
      expect(offRegisterPhrase(view(tyla, v))).toBe(
        "1 certification in Turkey, read from the label's own award, and 1 in France, read from SNEP's own announcement",
      );
      expect(offRegisterHold(view(tyla, v))).toBe("which no register holds");
    }
  });

  it("Tyla, features off: her guest plaque is a register row, so the caveat is the full one", () => {
    expect(offRegisterPhrase(view(tyla, LEAD))).toBe(offRegisterPhrase(tyla));
  });

  // Until 7 Oct 2026 her one label plaque ("No.1", Tyla's record) was a guest
  // spot and the caveat went with features off. By Rule C it is her lead —
  // the single "No.1 (feat. Tems)" is in her own Spotify discography — so the
  // caveat stays in every view; South Africa is not her home country.
  it("Tems, features off: her one label plaque is on “No.1”, her lead by Rule C, so the caveat stays", () => {
    const want = "1 certification in South Africa, read from the label's own award";
    expect(offRegisterPhrase(view(tems, ALL_VIEW))).toBe(want);
    expect(offRegisterPhrase(view(tems, LEAD))).toBe(want);
    expect(offRegisterPhrase(view(tems, BOTH))).toBe(want);
    // The caveat still follows the view: filed as it shipped, a featured
    // appearance, the same plaque leaves the lead views and takes the caveat with it.
    const shipped = { ...tems, releases: tems.releases.map((r) => (r.title === "No.1" ? { ...r, kind: "Featured appearances" as const } : r)) };
    const lead = { ...shipped, releases: certsInView(shipped.releases, { home: "NG", featured: new Set(["No.1"]) }, LEAD) };
    expect(offRegisterPhrase(lead)).toBeUndefined();
  });
});

// ── 26b: offRegisterPhrase(a, form, view?) (approved 4 Oct 2026) ──────────
// The view goes in as a parameter, so the phone caption groups only that
// view's plaques. A thin wrapper over certsInView — the same filter as the
// aView path above, never a second one.
describe("26b: offRegisterPhrase takes the view", () => {
  const tyla = artistBySlug("tyla")!;
  const tems = artistBySlug("tems")!;

  it("Tyla outside South Africa reads Turkey's label plaque and France's one announced plaque", () => {
    const want = "1 certification in Turkey from the label's own award; 1 in France from SNEP's own announcement";
    expect(offRegisterPhrase(tyla, "short", INTL)).toBe(want);
    expect(offRegisterPhrase(tyla, "short", BOTH)).toBe(want);
    expect(offRegisterHold(tyla, INTL)).toBe("which no register holds");
  });

  // "holds none" until 7 Oct 2026: "No.1" is a main-artist credit for her now.
  it("Tems with features off still holds her label plaque", () => {
    const want = "1 certification in South Africa from the label's own award";
    expect(offRegisterPhrase(tems, "short", LEAD)).toBe(want);
    expect(offRegisterPhrase(tems, "short", BOTH)).toBe(want);
  });

  it("no view, or the all-view, is the artist as given", () => {
    for (const a of [tyla, tems]) {
      expect(offRegisterPhrase(a, "short", ALL_VIEW)).toBe(offRegisterPhrase(a, "short"));
      expect(offRegisterPhrase(a, "long", ALL_VIEW)).toBe(offRegisterPhrase(a));
    }
    // Negative control: the all-view phrase Tyla's lede shipped, which the
    // international view must not print.
    expect(offRegisterPhrase(tyla, "short", INTL)).not.toBe(
      "10 plaques in South Africa, 9 from the label's own award and 1 from its own announcement; 1 in France from SNEP's own announcement",
    );
    // …nor today's all-view phrase, in the noun it has carried since 8 Oct 2026.
    expect(offRegisterPhrase(tyla, "short", INTL)).not.toBe(offRegisterPhrase(tyla, "short"));
  });

  it("every view agrees with the page's own aView path, for every swept artist", () => {
    for (const a of afrobeatsArtists.filter((x) => x.swept)) {
      const ctx = { home: homeCodeFor(a.country), featured: new Set(featuredTitlesOf(a.slug)) };
      for (const v of [ALL_VIEW, INTL, LEAD, BOTH]) {
        const viaPage = { ...a, releases: certsInView(a.releases, ctx, v) };
        expect(offRegisterPhrase(a, "short", v), `${a.slug} ${viewKey(v)}`).toBe(offRegisterPhrase(viaPage, "short"));
        expect(artistInView(a, v).releases).toEqual(viaPage.releases);
      }
    }
  });

  it("its featured titles are certUnits.featuredTitlesOf for every board artist", () => {
    for (const a of afrobeatsArtists) {
      const own = new Set(a.releases.filter((r) => isFeaturedKind(r.kind)).map((r) => r.title));
      expect([...own].sort(), a.slug).toEqual([...featuredTitlesOf(a.slug)].sort());
    }
  });
});
