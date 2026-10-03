import { afrobeatsArtists, BURNA } from "../app/data/afrobeats";
import { allItems } from "../app/data/certifications";
import { featuredTitlesOf } from "../app/lib/certUnits";
import {
  certKicker, creditSwitchable, HOME_CODE_BY_COUNTRY, homeCodeFor, scopeSwitchable, viewsOffered, type CertView,
} from "../app/lib/certScope";

/**
 * The hero kicker per view (lib/certScope.certKicker) — Paul, 3 Oct 2026:
 * "when someone toggle, since the number changes, it should adapt".
 *
 * ONE LINE at 320px. The phone kicker is 11px Space Mono caps with 0.11em
 * (1.21px) tracking, so every character is the same width and a kicker's width
 * is its length times one advance. Measured in Chrome at 320 on
 * /afrobeats/tyla (scripts/mobile-shot.mjs, 3 Oct 2026): KICKER_BOX_320 px of
 * room, CHAR_ADVANCE px per character. The long form for the longest offered
 * home country, "Certified outside South Africa · Lead credits", measured
 * LONG_FORM_320 px — wider than the box — so every narrowed form drops
 * "Certified" (the promise: consistently, at every width, on both layouts).
 *
 * These are measurements, not a model jsdom can check: a change to the
 * kicker's font, size or tracking (the .kicker rule in
 * app/components/mobileCerts.module.css, which points back here) or to the
 * hero's side padding means re-measuring at 320 in a browser and updating
 * the three constants below.
 */
const KICKER_BOX_320 = 284;
/** "Outside South Africa · Lead credits", 35 characters, measured 278.0px. */
const CHAR_ADVANCE = 278 / 35;
const LONG_FORM_320 = 357.4;
/** The most characters that fit the 320 box on one line. */
const FITS_320 = Math.floor(KICKER_BOX_320 / CHAR_ADVANCE);

const ALL: CertView = { scope: "all", credit: "all" };
const INTL: CertView = { scope: "intl", credit: "all" };
const LEAD: CertView = { scope: "all", credit: "lead" };
const BOTH: CertView = { scope: "intl", credit: "lead" };

/** Every artist whose page offers the home-country switch — enumerated from
 *  the data, Burna Boy included — with their country in full. */
const offeredHomes = () => {
  const people = [
    { slug: "burna-boy", country: BURNA.country, releases: allItems },
    ...afrobeatsArtists.map((a) => ({ slug: a.slug, country: a.country, releases: a.releases })),
  ];
  return people.filter((p) => scopeSwitchable(p.releases, homeCodeFor(p.country)));
};

describe("certKicker: one wording per view", () => {
  it.each(Object.keys(HOME_CODE_BY_COUNTRY))("%s: all four views", (home) => {
    expect(certKicker(ALL, home)).toBe("Certified worldwide");
    expect(certKicker(INTL, home)).toBe(`Outside ${home}`);
    expect(certKicker(LEAD, home)).toBe("Worldwide · Lead credits");
    expect(certKicker(BOTH, home)).toBe(`Outside ${home} · Lead credits`);
  });

  it("the home country is named in full, as its switch names it — never a code", () => {
    for (const [name, code] of Object.entries(HOME_CODE_BY_COUNTRY)) {
      expect(certKicker(INTL, name)).toContain(name);
      expect(certKicker(BOTH, name)).not.toMatch(new RegExp(`\\b${code}\\b`));
    }
  });

  it("no narrowed view says \"Certified worldwide\", the kicker the page shipped over every view", () => {
    for (const home of Object.keys(HOME_CODE_BY_COUNTRY))
      for (const v of [INTL, LEAD, BOTH]) expect(certKicker(v, home)).not.toBe("Certified worldwide");
  });

  it("every artist's offered views get a kicker of their own, and a home-left-out kicker names their country", () => {
    for (const p of offeredHomes()) {
      const featured = featuredTitlesOf(p.slug);
      const views = viewsOffered({ scope: true, credit: creditSwitchable(p.releases, featured) });
      const words = views.map((v) => certKicker(v, p.country));
      expect(new Set(words).size, p.slug).toBe(views.length);
      for (const v of views) if (v.scope === "intl") expect(certKicker(v, p.country), p.slug).toContain(p.country);
    }
  });
});

describe("certKicker: one line at 320px", () => {
  it("the home countries offered a switch are enumerated from the data; South Africa is the longest", () => {
    const names = [...new Set(offeredHomes().map((p) => p.country))];
    expect(names.length).toBeGreaterThan(0);
    const longest = names.reduce((a, b) => (b.length > a.length ? b : a));
    expect(longest).toBe("South Africa");
  });

  it("the long form did not fit, which is why the narrowed forms drop \"Certified\"", () => {
    const long = "Certified outside South Africa · Lead credits";
    expect(LONG_FORM_320).toBeGreaterThan(KICKER_BOX_320);
    expect(long.length).toBeGreaterThan(FITS_320);
  });

  it("every kicker, for every offered home country and every view, fits on one line", () => {
    for (const p of offeredHomes())
      for (const v of [ALL, INTL, LEAD, BOTH]) {
        const k = certKicker(v, p.country);
        expect(k.length, `${p.slug}: ${k}`).toBeLessThanOrEqual(FITS_320);
      }
  });
});
