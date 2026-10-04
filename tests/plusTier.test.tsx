import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/compare",
  notFound: () => {
    throw new Error("notFound()");
  },
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import ComparePage from "../app/compare/page";
import ArtistPage from "../app/afrobeats/[artist]/page";
import { awardLabel, awardRank, plusWord } from "../app/lib/awardName";
import {
  afrobeatsArtists,
  artistBySlug,
  certCount,
  countryCount,
  tierCount,
  plaqueLabel,
  type AfroArtist,
} from "../app/data/afrobeats";
import { allItems } from "../app/data/certifications";
import { CERT_THRESHOLDS } from "../app/data/certThresholds";
import {
  artistBySlug as comparable,
  priceArtist,
  unitsForCert,
  plaqueNotes,
  type ComparableArtist,
} from "../app/lib/certUnits";
import { priceCountry } from "../app/lib/certCountry";
import { certTotals } from "../app/lib/certScope";
import { certificationRows, CERT_HEADER } from "../app/lib/dataDownloads";
import { GET as afrobeatsApi } from "../app/api/v1/afrobeats/route";

// A HALF STEP ON TOP — AMPROFON's combined notation (4 Oct 2026).
//
// Mexico's register prints an award as a combination: "ONE DANCE | DRAKE |
// PLATINO & ORO | 4 & 1 (SINGLE TRACK, UNIVERSAL MUSIC) | 2017-01-18" is four
// Platinos AND an Oro, one award at one date (read in the 12 Aug 2026 sweep,
// re-read 4 Oct 2026 at amprofon.com.mx/es/pages/certificaciones.php). The site
// stored it as plain 4× Platinum because a plaque held only a tier and a
// multiplier; a fan corrected it on X and the owner approved the fix.
//
// So a cert may carry `plus`, a lower tier awarded on top of the main one. It
// is ONE plaque in the main tier's class: every count stays where it was, the
// label reads "4× Platinum + Gold" everywhere a tier is printed, and /compare
// prices the Oro too.

const wizkid = () => artistBySlug("wizkid")!;
const oneDanceMx = () => wizkid().releases.find((r) => r.title === "One Dance")!.certs.find((c) => c.c === "MX")!;

/** The same artist with every half step taken off — what the site held before. */
const unplussed = (a: AfroArtist): AfroArtist => ({
  ...a,
  releases: a.releases.map((r) => ({ ...r, certs: r.certs.map(({ plus: _drop, ...c }) => c) })),
});
const unplussedComparable = (a: ComparableArtist): ComparableArtist => ({
  ...a,
  releases: a.releases.map((r) => ({ ...r, certs: r.certs.map(({ plus: _drop, ...c }) => c) })),
});

const text = (h: string) =>
  h.replace(/<[^>]+>/g, " ").replace(/&#x27;/g, "'").replace(/&amp;/g, "&").replace(/\s+/g, " ");

describe("awardLabel prints the half step", () => {
  it("reads 4× Platinum + Gold, and plain 4× Platinum without one", () => {
    expect(awardLabel({ level: "Platinum", x: 4, plus: "Gold" })).toBe("4× Platinum + Gold");
    // The control: no plus, no suffix — every other plaque on the site.
    expect(awardLabel({ level: "Platinum", x: 4 })).toBe("4× Platinum");
    expect(plusWord({})).toBe("");
    // A single tier with a half step keeps no "1×".
    expect(awardLabel({ level: "Platinum", plus: "Gold" })).toBe("Platinum + Gold");
  });

  it("names both halves in the programme's own words", () => {
    // RIAA Latin's tiers are Oro / Platino (lib/awardName PROGRAM_TIER_NAMES).
    expect(awardLabel({ level: "Platinum", x: 2, body: "RIAA Latin", plus: "Gold" })).toBe("2× Platino + Oro");
  });

  it("ranks 4× Platinum + Gold above 4× Platinum and below 5× Platinum", () => {
    const four = awardRank({ level: "Platinum", x: 4 });
    const fourPlus = awardRank({ level: "Platinum", x: 4, plus: "Gold" });
    const five = awardRank({ level: "Platinum", x: 5 });
    expect(fourPlus).toBeGreaterThan(four);
    expect(fourPlus).toBeLessThan(five);
    // Tier still comes first: no Platinum multiple outranks a Diamond.
    expect(awardRank({ level: "Platinum", x: 99, plus: "Platinum" })).toBeLessThan(awardRank({ level: "Diamond" }));
  });
});

describe("One Dance in Mexico", () => {
  it("is 4× Platinum + Gold in the data, as AMPROFON prints it", () => {
    const c = oneDanceMx();
    expect(c).toMatchObject({ level: "Platinum", x: 4, plus: "Gold" });
    expect(awardLabel(c)).toBe("4× Platinum + Gold");
    expect(plaqueLabel(c)).toBe("4× Platinum + Gold");
  });

  it("is priced at 4 × Platino + 1 × Oro, from AMPROFON's own single levels", () => {
    const t = CERT_THRESHOLDS.MX.single!;
    expect(unitsForCert(oneDanceMx(), "single")).toEqual({ units: 4 * t.platinum! + t.gold!, why: null });
    // The control: the same award without the half step is the bare multiple.
    const { plus: _drop, ...bare } = oneDanceMx();
    expect(unitsForCert(bare, "single").units).toBe(4 * t.platinum!);
  });

  it("carries the multiplier caveat, which now says how a combined award is priced", () => {
    const notes = plaqueNotes(oneDanceMx(), "single");
    expect(notes.caveat).toBe(CERT_THRESHOLDS.MX.caveat);
    expect(notes.caveat).toMatch(/Platino & Oro/);
    // A half step alone (no multiple) leans on the same stacking rule.
    expect(plaqueNotes({ c: "MX", level: "Platinum", plus: "Gold" }, "single").caveat).toBe(CERT_THRESHOLDS.MX.caveat);
    expect(plaqueNotes({ c: "MX", level: "Platinum" }, "single").caveat).toBeUndefined();
  });

  it("moves Wizkid's /compare total by exactly one Oro, and nothing else", () => {
    const w = comparable("wizkid")!;
    const gold = CERT_THRESHOLDS.MX.single!.gold!;
    for (const opts of [
      { includeNigeria: false, includeFeatures: true },
      { includeNigeria: true, includeFeatures: true },
    ]) {
      const now = priceArtist(w, opts);
      const was = priceArtist(unplussedComparable(w), opts);
      expect(now.total - was.total).toBe(gold);
      expect(now.pricedPlaques).toBe(was.pricedPlaques);
      const mx = now.byCountry.find((l) => l.country === "MX")!;
      expect(mx.top).toMatchObject({ title: "One Dance", level: "Platinum", x: 4, plus: "Gold" });
      expect(mx.caveat).toBe(CERT_THRESHOLDS.MX.caveat);
    }
    // One Dance is a featured appearance: lead credits only leaves it out.
    const lead = { includeNigeria: false, includeFeatures: false };
    expect(priceArtist(w, lead).total).toBe(priceArtist(unplussedComparable(w), lead).total);
  });

  it("leads Wizkid's line on the Mexico board with the full award", () => {
    const line = priceCountry("MX").lines.find((l) => l.artist.slug === "wizkid")!;
    expect(line.top).toMatchObject({ title: "One Dance", x: 4, plus: "Gold" });
    expect(line.units).toBe(unitsForCert(oneDanceMx(), "single").units);
    expect(line.plaques).toBe(1);
  });
});

describe("a half step is never a second plaque", () => {
  it("leaves every count where it was", () => {
    for (const a of afrobeatsArtists) {
      const was = unplussed(a);
      expect(certCount(a), a.slug).toBe(certCount(was));
      expect(countryCount(a), a.slug).toBe(countryCount(was));
      for (const t of ["Diamond", "Platinum", "Gold", "Silver"] as const)
        expect(tierCount(a, t), `${a.slug} ${t}`).toBe(tierCount(was, t));
      expect(certTotals(a.releases), a.slug).toEqual(certTotals(was.releases));
    }
    // The Oro is not a Gold plaque: One Dance's Mexican award counts once,
    // in Platinum — the tier bars and the tier filter read it there.
    const w = wizkid();
    expect(tierCount(w, "Platinum")).toBe(w.releases.flatMap((r) => r.certs).filter((c) => c.level === "Platinum").length);
    expect(tierCount(w, "Gold")).toBe(w.releases.flatMap((r) => r.certs).filter((c) => c.level === "Gold").length);
  });

  it("keeps one CSV row per plaque, with the half step in its own last column", () => {
    const col = (row: unknown[], name: (typeof CERT_HEADER)[number]) => row[CERT_HEADER.indexOf(name)];
    expect(CERT_HEADER.at(-1)).toBe("plus_level");
    const rows = certificationRows.filter((r) => col(r, "artist") === "Wizkid" && col(r, "release") === "One Dance" && col(r, "country_code") === "MX");
    expect(rows).toHaveLength(1);
    expect(col(rows[0], "level")).toBe("Platinum");
    expect(col(rows[0], "multiplier")).toBe(4);
    expect(col(rows[0], "plus_level")).toBe("Gold");
    expect(col(rows[0], "certified_units")).toBe(unitsForCert(oneDanceMx(), "single").units);
    // Blank on every row without one.
    const withPlus = certificationRows.filter((r) => col(r, "plus_level") !== null);
    expect(withPlus.length).toBe(
      afrobeatsArtists.filter((a) => a.swept).flatMap((a) => a.releases.flatMap((r) => r.certs)).filter((c) => c.plus).length,
    );
  });

  it("publishes `plus` in /api/v1/afrobeats on that plaque alone", async () => {
    const body = await (afrobeatsApi() as Response).json();
    type ApiCert = { countryCode: string; level: string; multiplier: number; plus?: string };
    const wiz = body.data.artists.find((x: { slug: string }) => x.slug === "wizkid");
    const od = wiz.releases.find((r: { title: string }) => r.title === "One Dance");
    expect(od.certifications.find((c: ApiCert) => c.countryCode === "MX")).toMatchObject({ level: "Platinum", multiplier: 4, plus: "Gold" });
    const all: ApiCert[] = body.data.artists.flatMap((a: { releases: { certifications: ApiCert[] }[] }) =>
      a.releases.flatMap((r) => r.certifications),
    );
    expect(all.filter((c) => c.plus)).toHaveLength(1);
    expect(body.description).toMatch(/`plus`/);
  });
});

// Where `plus` may appear. Each key is a body whose register prints combined
// awards, with the notation it uses — add one only with that body's own
// published wording behind it, as for PROGRAM_TIER_NAMES in lib/awardName.
const PLUS_NOTATION: Record<string, string> = {
  MX: 'AMPROFON — "PLATINO & ORO | 4 & 1", one award in its combined notation',
};

describe("`plus` is AMPROFON's notation, not a general-purpose field", () => {
  const order = ["Silver", "Gold", "Platinum", "Diamond"];
  const rows = [
    ...afrobeatsArtists.flatMap((a) => a.releases.flatMap((r) => r.certs.map((c) => ({ who: `${a.slug} · ${r.title}`, c })))),
    ...allItems.flatMap((r) => r.certs.map((c) => ({ who: `burna-boy · ${r.title}`, c }))),
  ];

  it("appears only on a documented body's rows, below the tier it sits on", () => {
    const plussed = rows.filter((x) => x.c.plus);
    expect(plussed.length).toBeGreaterThan(0);
    for (const { who, c } of plussed) {
      expect(PLUS_NOTATION[c.c], `${who} · ${c.c}: no documented combined notation for this body`).toBeTruthy();
      expect(order.indexOf(c.plus!), `${who}: the half step must be a LOWER tier`).toBeLessThan(order.indexOf(c.level));
    }
  });

  it("is on One Dance's Mexican row and nowhere else today", () => {
    expect(rows.filter((x) => x.c.plus).map((x) => `${x.who} · ${x.c.c}`)).toEqual(["wizkid · One Dance · MX"]);
  });
});

describe("the label renders with its half step on every surface that prints a tier", () => {
  it("on Wizkid's board page — the strip, the explorer, the FAQ's words", async () => {
    const page = await ArtistPage({ params: Promise.resolve({ artist: "wizkid" }) });
    const t = text(renderToStaticMarkup(page));
    // The strip's Mexico pill: best tier there, with the country after it.
    expect(t).toMatch(/4× Platinum \+ Gold Mexico/);
    // Never the bare multiple for Mexico.
    expect(t).not.toMatch(/🇲🇽 4× Platinum(?! \+)/u);
  });

  it("on the Mexico country board and on a pair page that includes Wizkid", async () => {
    const boardHtml = renderToStaticMarkup(await ComparePage({ searchParams: Promise.resolve({ mode: "country", country: "mexico" }) }));
    expect(text(boardHtml)).toContain("4× Platinum + Gold");
    const pairHtml = renderToStaticMarkup(await ComparePage({ searchParams: Promise.resolve({ a: "burna-boy", b: "wizkid", all: "1" }) }));
    expect(text(pairHtml)).toContain("4× Platinum + Gold");
    // Two unbreakable runs, not one: "4× Platinum + Gold † ‡ §" as a single
    // nowrap run pushed /compare/burna-boy-vs-wizkid 30px past a 390px screen.
    // The phone chip wraps between the halves (chips.tsx PlaqueWords).
    for (const h of [boardHtml, pairHtml]) expect(h).toMatch(/4× Platinum<\/span>\s*<span[^>]*>\+ Gold/);
    // …and a chip with no half step keeps its one run.
    expect(boardHtml).toMatch(/>4× Platinum<\/span><\/span>/);
  });
});
