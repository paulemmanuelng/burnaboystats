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
import { afrobeatsArtists, artistBySlug, BURNA, certCount, countryCount } from "../app/data/afrobeats";
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
  it("Tyla: 74 certifications in 24 countries, 65 international in 23", () => {
    const tyla = artistBySlug("tyla")!;
    const home = homeCodeFor(tyla.country)!;
    const all = certTotals(certsInScope(tyla.releases, home, "all"));
    const intl = certTotals(certsInScope(tyla.releases, home, "intl"));
    expect([all.total, all.countries]).toEqual([74, 24]);
    expect([intl.total, intl.countries]).toEqual([65, 23]);
    expect(certCountPhrase(all.total, all.countries, ALL_VIEW)).toBe("74 certifications across 24 countries");
    expect(certCountPhrase(intl.total, intl.countries, INTL)).toBe("65 international certifications across 23 countries");
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
  it("249 plaques in all; 172 as lead artist; the 77 on his 24 featured appearances hidden", () => {
    const lead = creditInScope(allItems, burnaFeatured, "lead");
    expect(totalAwards()).toBe(249);
    expect(plaques(features)).toBe(77);
    expect(features).toHaveLength(24);
    expect(certTotals(lead).total).toBe(172);
    expect(certTotals(lead).total).toBe(totalAwards() - plaques(features));
    // The lead view is exactly his albums and singles, in order.
    expect(titles(lead)).toEqual(titles([...albums, ...singles]));
    expect(certTotals(lead).countries).toBe(countriesOf([...albums, ...singles]));
    expect(certTotals(lead).countries).toBe(24);
  });

  it("keeps co-leads and his own leads with a guest; hides his guest spots", () => {
    const kept = new Set(titles(creditInScope(allItems, burnaFeatured, "lead")));
    // "Dai Dai" (Shakira & Burna Boy — a main artist), "For My Hand" (feat. Ed
    // Sheeran — his lead), his albums.
    for (const t of ["Dai Dai", "For My Hand", "Love, Damini", "African Giant", "Last Last"]) expect(kept.has(t), t).toBe(true);
    // Someone else's song with Burna Boy as the guest.
    for (const t of ["Location", "We Pray", "Ginger", "Own It", "Jerusalema (Remix)"]) expect(kept.has(t), t).toBe(false);
    expect(isLeadRelease({ title: "Dai Dai" }, burnaFeatured)).toBe(true);
    expect(isLeadRelease({ title: "Location" }, burnaFeatured)).toBe(false);
  });

  it("'all' is the input untouched", () => {
    expect(creditInScope(allItems, burnaFeatured, "all")).toBe(allItems);
  });
});

describe("creditInScope: the board, from each release's own `kind`", () => {
  it("Wizkid keeps \"Essence (ft. Tems)\" — his lead; Tems loses it — her guest spot", () => {
    const wiz = artistBySlug("wizkid")!;
    const tems = artistBySlug("tems")!;
    expect(titles(creditInScope(wiz.releases, featuredTitles(wiz), "lead"))).toContain("Essence");
    expect(titles(creditInScope(tems.releases, featuredTitles(tems), "lead"))).not.toContain("Essence");
  });

  it("Olamide keeps the co-lead \"Trumpet (Olamide & CKay)\"", () => {
    const ola = artistBySlug("olamide")!;
    expect(titles(creditInScope(ola.releases, featuredTitles(ola), "lead"))).toContain("Trumpet (Olamide & CKay)");
  });

  it("every artist loses exactly the plaques filed under \"Featured appearances\"", () => {
    for (const a of afrobeatsArtists) {
      const guest = a.releases.filter((r) => r.kind === "Featured appearances");
      const lead = creditInScope(a.releases, featuredTitles(a), "lead");
      expect(certTotals(lead).total, a.slug).toBe(certCount(a) - plaques(guest));
      expect(lead.some((r) => r.kind === "Featured appearances"), a.slug).toBe(false);
    }
  });

  it("Tyla: 73 as lead artist in 24 countries (her one guest plaque out)", () => {
    const tyla = artistBySlug("tyla")!;
    const t = certTotals(creditInScope(tyla.releases, featuredTitles(tyla), "lead"));
    expect([t.total, t.countries]).toEqual([73, 24]);
  });
});

describe("certsInView: the two switches compose", () => {
  it("Burna Boy, International + Lead: international plaques on his own releases only", () => {
    const both = certsInView(allItems, { home: "NG", featured: burnaFeatured }, BOTH);
    const t = certTotals(both);
    const lead = [...albums, ...singles];
    expect(t.total).toBe(plaques(lead) - homeRows(lead, "NG"));
    expect([t.total, t.countries]).toEqual([111, 23]);
    expect(both.flatMap((r) => r.certs).some((c) => c.c === "NG")).toBe(false);
    expect(titles(both).some((x) => burnaFeatured.has(x))).toBe(false);
    expect(certCountPhrase(t.total, t.countries, BOTH)).toBe("111 international certifications as lead artist across 23 countries");
    // The order does not matter.
    expect(certsInScope(creditInScope(allItems, burnaFeatured, "lead"), "NG", "intl")).toEqual(both);
  });

  it("Tyla, International + Lead: 64 in 23 countries", () => {
    const tyla = artistBySlug("tyla")!;
    const t = certTotals(certsInView(tyla.releases, { home: "ZA", featured: featuredTitles(tyla) }, BOTH));
    expect([t.total, t.countries]).toEqual([64, 23]);
  });

  it("a view can be empty — BNXN's international plaques are all guest spots", () => {
    const b = artistBySlug("bnxn")!;
    expect(certsInView(b.releases, { home: "NG", featured: featuredTitles(b) }, BOTH)).toEqual([]);
    expect(certTotals([]).total).toBe(0);
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
