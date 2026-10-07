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
import { comparableArtists, priceArtist } from "../app/lib/certUnits";
import { readFileSync } from "node:fs";
import {
  baseTitle,
  countryBoards,
  countryCopy,
  priceCountry,
  recordsOf,
  recordTitle,
  type CountryArtistLine,
  type CountryRecord,
} from "../app/lib/certCountry";
import { SHARED_RECORDS } from "../app/data/sharedRecords";

/**
 * A country board counts a RECORD once, however many of its artists are
 * credited on it (Paul, 4 Oct 2026: "South Africa's /compare board counts a
 * plaque shared by two artists twice. fix that if it is a bug").
 *
 * It was a bug: /compare/in/south-africa printed "The board's plaques here ·
 * at least 2,910,000 certified units · 6 of 20 artists certified · 39 of 39
 * plaques counted" — the sum of the six artist lines, which carry Essence
 * (Wizkid, Tems), Ginger (Wizkid, Burna Boy) and No.1 (Tyla, Tems) on both of
 * their holders' lines. Those are three plaques, not six. The lines stay as
 * they are — each is that artist's own standing, and matches /compare.
 */

async function html(sp: Record<string, string>): Promise<string> {
  const tree = await ComparePage({ searchParams: Promise.resolve(sp) });
  return renderToStaticMarkup(tree);
}
const text = (h: string) =>
  h.replace(/<[^>]+>/g, " ").replace(/&#x27;/g, "'").replace(/&amp;/g, "&").replace(/\s+/g, " ");

const lineSum = (b: ReturnType<typeof priceCountry>) =>
  b.programs.reduce((n, p) => n + p.lines.reduce((m, l) => m + l.units, 0), 0);
const sharedTitles = (b: ReturnType<typeof priceCountry>) =>
  b.programs
    .flatMap((p) => p.records)
    .filter((r) => r.holders.length > 1)
    .map((r) => `${r.plaque.title} (${r.holders.map((h) => h.artist.slug).join(", ")})`)
    .sort();

describe("South Africa counts each plaque once", () => {
  const za = priceCountry("ZA");

  it("the three shared records are one plaque each", () => {
    expect(sharedTitles(za)).toEqual([
      "Essence (wizkid, tems)",
      "Ginger (wizkid, burna-boy)",
      "No.1 (tyla, tems)",
    ]);
    expect(za.shared).toBe(3);
  });

  it("the country's figure is the records, the lines are untouched", () => {
    // The shipped figures, as the live page printed them on 3 Oct 2026: the
    // NEGATIVE CONTROL. They are still exactly the lines' sum…
    expect(lineSum(za)).toBe(2_910_000);
    expect(za.lines.reduce((n, l) => n + l.plaques, 0)).toBe(39);
    // …and no longer the country's: Essence 3× (120,000) + Ginger 2× (80,000)
    // + No.1 Gold (20,000) were counted twice.
    expect(za.units).toBe(2_910_000 - 120_000 - 80_000 - 20_000);
    expect(za.units).toBe(2_690_000);
    expect(za.plaques).toBe(36);
    expect(za.counted).toBe(36);
    expect(za.artists).toBe(6);
    // Every artist's own line, as shipped.
    expect(Object.fromEntries(za.lines.map((l) => [l.artist.slug, [l.units, l.plaques]]))).toEqual({
      "burna-boy": [980_000, 5],
      wizkid: [620_000, 13],
      tyla: [550_000, 10],
      davido: [540_000, 7],
      tems: [180_000, 3],
      "omah-lay": [40_000, 1],
    });
  });

  it("the page, its description and its share card print the records' figure", async () => {
    const t = text(await html({ mode: "country", country: "south-africa" }));
    expect(t).toContain("2,690,000");
    expect(t).toContain("6 of 20 artists certified · 36 of 36 plaques counted 3 records shared by two or more artists, counted once");
    // Its own line, never a "·"-led run-on (it wrapped that way at 1440).
    expect(t).not.toContain("· 3 records shared");
    expect(t).toContain("Shared records");
    // The strings the page shipped: gone.
    expect(t).not.toContain("39 of 39 plaques counted");
    expect(t).not.toContain("2,910,000");
    // Each holder's line still prints its own figure.
    for (const l of za.lines) expect(t, l.artist.name).toContain(l.units.toLocaleString("en-US"));
    const copy = countryCopy(za);
    expect(copy.description).toContain("6 artists, 36 plaques, at least 2,690,000 certified units.");
    expect(copy.sub).toBe("6 artists · 36 plaques · at least 2,690,000 units");
  });

  it("the market index prints the same figure", async () => {
    const t = text(await html({ mode: "country" }));
    expect(t).toMatch(/South Africa ZA 6 artists · 36 plaques · RiSA 2,690,000/);
    expect(t).not.toMatch(/South Africa ZA 6 artists · 39 plaques/);
  });

  it("the biggest-plaques list prints a shared record once, both holders named", async () => {
    const t = text(await html({ mode: "country", country: "south-africa" }));
    const section = t.slice(t.indexOf("Biggest plaques in South Africa"));
    expect(section.match(/Essence/g)?.length).toBe(1);
    expect(section).toContain("Wizkid · Tems (featured)");
  });
});

describe("every board: one record, counted once — and only one", () => {
  it("artist totals and every pair are unchanged: the lines still agree with priceArtist", () => {
    // The fix touches only the COUNTRY figures. For every artist, in all four
    // views, the per-country lines sum to the same total priceArtist prints.
    for (const includeNigeria of [true, false])
      for (const includeFeatures of [true, false]) {
        const boards = countryBoards({ includeNigeria: true, includeFeatures });
        for (const a of comparableArtists) {
          const p = priceArtist(a, { includeNigeria, includeFeatures });
          const fromBoards = boards
            .filter((b) => includeNigeria || b.code !== "NG")
            .flatMap((b) => b.programs.flatMap((pr) => pr.lines))
            .filter((l) => l.artist.slug === a.slug)
            .reduce((n, l) => n + l.units, 0);
          expect(fromBoards, `${a.slug} ng=${includeNigeria} feat=${includeFeatures}`).toBe(p.total);
        }
      }
  });

  it("a shared record is one answer: its holders agree on the tier", () => {
    const split: string[] = [];
    for (const b of countryBoards())
      for (const p of b.programs)
        for (const r of p.records) {
          if (r.holders.length < 2) continue;
          const tiers = new Set(
            r.holders.map((h) => {
              const line = p.lines.find((l) => l.artist.slug === h.artist.slug)!;
              // By record title, or — for a record joined on its base title,
              // "Sungba (Remix)" on Burna Boy's line, "Sungba" on Asake's — by that.
              const own =
                line.plaqueList.find((x) => x.format === r.plaque.format && recordTitle(x.title) === recordTitle(r.plaque.title)) ??
                line.plaqueList.find((x) => x.format === r.plaque.format && baseTitle(x.title) === baseTitle(r.plaque.title))!;
              return `${own.level} ${own.x}`;
            }),
          );
          if (tiers.size > 1) split.push(`${b.code} ${r.plaque.title}: ${[...tiers].join(" / ")}`);
        }
    expect(split).toEqual([]);
  });

  // Same record title, different records. The title alone cannot tell these
  // apart, which is why the match needs the ARTISTS too; each is pinned with
  // what separates it. A new collision lands in the failure below and must be
  // decided — merged on evidence (app/data/sharedRecords.ts) or added here.
  const TWO_RECORDS: Record<string, string> = {
    // Cheque ft. Olamide, and Seyi Vibez's own (docs/sweeps/seyi-vibez-certifications-v1.md).
    "NG loml": "Loml[olamide] | Loml[seyi-vibez]",
    // Burna Boy's (Black Panther) and BNXN's own; Platinum against 4× Platinum.
    "NG alone": "Alone[bnxn] | Alone[burna-boy]",
    // Ruger's own, Bella Shmurda & Seyi Vibez, and Rema's (tests/afrobeats.test.ts).
    "NG bounce": "Bounce[rema] | Bounce[ruger] | Bounce[seyi-vibez]",
    // Seyi Vibez's (Thy Kingdom Come) against Olamide & CKay's co-lead single.
    "NG trumpet": "Trumpet (Olamide & CKay)[olamide+ckay] | Trumpet[seyi-vibez]",
    // Davido's AWAY (Timeless, 2023) against Ayra Starr's (2021 EP).
    "NG away": "Away[ayra-starr] | Away[davido]",
    // Asake's "Reason (ft. Russ)" against Omah Lay's; Platinum against 5×.
    "NG reason": "Reason[asake] | Reason[omah-lay]",
    // BNXN's (NG chart 2) against Wizkid's own (tests/afrobeats.test.ts).
    "NG pray": "Pray[bnxn] | Pray[wizkid]",
    // Wizkid's against Fireboy DML's: two sleeves. TCSN tells them apart by
    // filing his as "Everyday (Fireboy Dml)" — its own disambiguator, which
    // stays in the register and off his page (debug pass, 5 Oct 2026).
    "NG everyday": "Everyday[fireboy-dml] | Everyday[wizkid]",
    // TCSN files them as "Outside (Buju)" and "Outside (Fireboy Dml)"; two
    // sleeves, two records, each titled plainly on its own board.
    "NG outside": "Outside[bnxn] | Outside[fireboy-dml]",
    // Wizkid ft. Drake (Silver) against Omah Lay's (Gold): two sleeves, two tiers.
    "NG come closer": "Come Closer[omah-lay] | Come Closer[wizkid]",
    // Wizkid ft. BNXN is one record on both their lines; Asake's "Mood" wears
    // its own sleeve and no credit links it to either — two until one does.
    "NG mood": "Mood[asake] | Mood[wizkid+bnxn]",
    // No credit, sleeve or register line links Olamide's to BNXN's — two until one does.
    "NG modupe": "Modupe[bnxn] | Modupe[olamide]",
  };

  it("every same-title collision on every board is decided", () => {
    const seen: Record<string, string> = {};
    for (const b of countryBoards())
      for (const p of b.programs) {
        const byTitle = new Map<string, typeof p.records>();
        for (const r of p.records) {
          const k = recordTitle(r.plaque.title);
          byTitle.set(k, [...(byTitle.get(k) ?? []), r]);
        }
        for (const [k, rs] of byTitle) {
          if (rs.length < 2) continue;
          seen[`${b.code} ${k}`] = rs
            .map((r) => `${r.plaque.title}[${r.holders.map((h) => h.artist.slug).join("+")}]`)
            .sort()
            .join(" | ");
        }
      }
    expect(seen).toEqual(TWO_RECORDS);
  });

  it("Loml stays two Nigerian plaques: same title, same tier, two records", () => {
    // The trap the title-only key fell into: both are TCSN Silver, both titled
    // "Loml". The old biggest-plaques list keyed on the title and would have
    // printed them as one record held by both.
    const ng = priceCountry("NG");
    const loml = ng.programs[0].records.filter((r) => r.plaque.title === "Loml");
    expect(loml.map((r) => r.holders.map((h) => h.artist.slug))).toEqual(
      expect.arrayContaining([["olamide"], ["seyi-vibez"]]),
    );
    expect(loml.length).toBe(2);
  });

  it("every listed shared record names two board artists who both hold it", () => {
    for (const r of SHARED_RECORDS) {
      expect(r.artists.length, r.title).toBeGreaterThanOrEqual(2);
      for (const slug of r.artists) {
        const a = comparableArtists.find((x) => x.slug === slug);
        expect(a, `${r.title}: ${slug}`).toBeDefined();
        expect(
          a!.releases.some((x) => recordTitle(x.title) === recordTitle(r.title)),
          `${r.title} on ${slug}'s board`,
        ).toBe(true);
      }
      // The credit names every artist it is listed for.
      for (const slug of r.artists) {
        const name = comparableArtists.find((x) => x.slug === slug)!.name.toLowerCase();
        expect(r.credit.toLowerCase(), `${r.title}: ${slug}`).toContain(name);
      }
    }
  });

  it("the boards' figures are their records' — the per-country changes, pinned", () => {
    // Every board this fixes, features on (the default view): the old figure
    // was the lines' sum, the new one counts each shared record once.
    const changed = Object.fromEntries(
      countryBoards()
        .filter((b) => b.shared > 0)
        .map((b) => [b.code, { lines: lineSum(b), units: b.units, shared: b.shared, plaques: b.plaques }]),
    );
    // NG and UK moved again on 5 Oct 2026 (C-01/D-01): "Sungba" (Asake) and
    // "Sungba (Remix)" (Burna Boy's line) are one record in both, "Isaka" and
    // "Isaka (6AM)" one in Nigeria — NG had read 71,050,000 / 68 / 675 and the
    // UK 41,620,000 / 7 / 94, the figures the live boards printed on 4 Oct.
    // NG moved again the same day (debug pass, compareIn-01): Tyla's "Dynamite
    // — Tyla & Wizkid" and Wizkid's "Dynamite (Tyla & Wizkid)" are one record,
    // titled one way since — it had read 70,550,000 / 70 / 673. FR moved by
    // rounding only (compareIn-03): its stream-priced plaques are summed
    // exactly and floored once — it had read 11,283,327 / 11,183,327.
    expect(changed).toEqual({
      NG: { lines: 81_850_000, units: 70_500_000, shared: 71, plaques: 672 },
      US: { lines: 73_940_000, units: 67_440_000, shared: 4, plaques: 46 },
      UK: { lines: 43_620_000, units: 41_420_000, shared: 8, plaques: 93 },
      FR: { lines: 11_283_329, units: 11_183_333, shared: 1, plaques: 59 },
      CA: { lines: 6_920_000, units: 6_560_000, shared: 4, plaques: 65 },
      ZA: { lines: 2_910_000, units: 2_690_000, shared: 3, plaques: 36 },
      NZ: { lines: 2_137_500, units: 2_017_500, shared: 3, plaques: 55 },
      CH: { lines: 755_000, units: 710_000, shared: 2, plaques: 25 },
    });
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// A renamed or subtitled title cannot hide a shared record (debug pass 4 Oct
// 2026, C-01/D-01 and the guard gap beside them). The same-title test above
// buckets by record title, which keeps "(Remix)" and "(6AM)", so it was blind
// to two double counts: Asake's "Sungba" and Burna Boy's "Sungba (Remix)" —
// one BPI row ("ASAKE | SUNGBA"), one TCSN row ("Sungba | Asake ft. Burna
// Boy"), one sleeve — on the Nigerian and UK boards, and Tems's "Isaka" and
// Omah Lay's "Isaka (6AM)" (TCSN: "Isaka (6Am) | Ciza, Tems & Omah Lay"), one
// sleeve, in Nigeria.
// ─────────────────────────────────────────────────────────────────────────────

interface Holder {
  slug: string;
  name: string;
  title: string;
  cover?: string;
  credit?: string;
  format: string;
}

/** Every pair of two artists' plaques in one programme that the evidence says
 *  is ONE record — the same base title and format, AND the same sleeve or a
 *  credit naming the other — but that sit in two records. */
function unmergedPairs(code: string, lines: CountryArtistLine[], records: CountryRecord[]): string[] {
  const recordOf = new Map<string, number>();
  records.forEach((r, i) =>
    r.holders.forEach((h) => {
      const line = lines.find((l) => l.artist.slug === h.artist.slug)!;
      for (const x of line.plaqueList)
        if (x.format === r.plaque.format && baseTitle(x.title) === baseTitle(r.plaque.title)) recordOf.set(`${h.artist.slug}|${x.title}|${x.format}`, i);
    }),
  );
  const items: Holder[] = lines.flatMap((l) =>
    l.plaqueList.map((x) => ({ slug: l.artist.slug, name: l.artist.name, title: x.title, cover: x.cover, credit: x.credit, format: x.format })),
  );
  const names = (credit: string | undefined, name: string) =>
    !!credit && ` ${credit.toLowerCase().replace(/[^a-z0-9]+/g, " ")} `.includes(` ${name.toLowerCase().replace(/[^a-z0-9]+/g, " ")} `);
  const out: string[] = [];
  for (let i = 0; i < items.length; i++)
    for (let j = i + 1; j < items.length; j++) {
      const [a, b] = [items[i], items[j]];
      if (a.slug === b.slug || a.format !== b.format || baseTitle(a.title) !== baseTitle(b.title)) continue;
      const evidence = (!!a.cover && a.cover === b.cover) || names(a.credit, b.name) || names(b.credit, a.name);
      if (!evidence) continue;
      const [ra, rb] = [recordOf.get(`${a.slug}|${a.title}|${a.format}`), recordOf.get(`${b.slug}|${b.title}|${b.format}`)];
      if (ra === undefined || ra !== rb) out.push(`${code} ${[`${a.title}[${a.slug}]`, `${b.title}[${b.slug}]`].sort().join(" | ")}`);
    }
  return out;
}

describe("a renamed or subtitled title cannot hide a shared record", () => {
  const holdersOf = (b: ReturnType<typeof priceCountry>, title: string) =>
    b.programs
      .flatMap((p) => p.records)
      .filter((r) => baseTitle(r.plaque.title) === baseTitle(title))
      .map((r) => `${r.plaque.title} (${r.holders.map((h) => h.artist.slug).join(", ")})`);

  it("Sungba is one record in Nigeria and the UK, Isaka one in Nigeria", () => {
    const ng = priceCountry("NG");
    const uk = priceCountry("UK");
    // The lead's row names the record (recordsOf), as the registers print it.
    expect(holdersOf(ng, "Sungba")).toEqual(["Sungba (asake, burna-boy)"]);
    expect(holdersOf(uk, "Sungba")).toEqual(["Sungba (asake, burna-boy)"]);
    // Both featured since 6 Oct 2026 (afrobeatsB-02), so no lead goes first.
    expect(holdersOf(ng, "Isaka")).toEqual(["Isaka (6AM) (omah-lay, tems)"]);
    // Each artist's own line keeps its plaque: the fix touches the country's
    // figures only.
    const line = (b: typeof ng, slug: string) => b.programs.flatMap((p) => p.lines).find((l) => l.artist.slug === slug)!;
    expect(line(ng, "burna-boy").plaqueList.map((x) => x.title)).toContain("Sungba (Remix)");
    expect(line(ng, "asake").plaqueList.map((x) => x.title)).toContain("Sungba");
    expect(line(uk, "burna-boy").plaqueList.map((x) => x.title)).toContain("Sungba (Remix)");
  });

  it("every board: no two artists' plaques on one sleeve or credit, under one base title, sit in two records", () => {
    const bad = countryBoards({ includeNigeria: true, includeFeatures: true }).flatMap((b) =>
      b.programs.flatMap((p) => unmergedPairs(b.code, p.lines, p.records)),
    );
    expect(bad).toEqual([]);
  });

  it("negative control: the boards as they shipped on 4 Oct 2026 — Sungba in two records — fail it", () => {
    for (const code of ["NG", "UK"]) {
      const p = priceCountry(code).programs[0];
      // Split the merged record back into one record per holder, as it shipped.
      const shipped = p.records.flatMap((r) =>
        baseTitle(r.plaque.title) === "sungba" ? r.holders.map((h) => ({ ...r, holders: [h] })) : [r],
      );
      expect(unmergedPairs(code, p.lines, shipped)).toEqual([`${code} Sungba (Remix)[burna-boy] | Sungba[asake]`]);
    }
  });

  it("the title Tems's line shipped with, plain \"Isaka\", now joins on the sleeve alone", () => {
    const p = priceCountry("NG").programs[0];
    const lines = p.lines.map((l) =>
      l.artist.slug === "tems" ? { ...l, plaqueList: l.plaqueList.map((x) => (x.title === "Isaka (6AM)" ? { ...x, title: "Isaka" } : x)) } : l,
    );
    const isaka = recordsOf(lines).filter((r) => baseTitle(r.plaque.title) === "isaka");
    expect(isaka.map((r) => r.holders.map((h) => h.artist.slug).sort())).toEqual([["omah-lay", "tems"]]);
  });

  it("a base title alone never joins: two artists' different records stay two", () => {
    // Same base title, no shared sleeve and no credit naming the other: two
    // records (the pinned same-title pairs above all pass through this rule).
    const p = priceCountry("NG").programs[0];
    const loml = p.records.filter((r) => baseTitle(r.plaque.title) === "loml");
    expect(loml.length).toBe(2);
  });

  it("the boards print the records' figures, and the strings the live boards shipped are gone", () => {
    const ng = countryCopy(priceCountry("NG"));
    const uk = countryCopy(priceCountry("UK"));
    expect(ng.description).toContain("20 artists, 672 plaques, at least 70,500,000 certified units.");
    expect(uk.description).toContain("17 artists, 93 plaques, at least 41,420,000 certified units.");
    // Live, 5 Oct 2026 (curl; debug pass C-01/D-01).
    expect(ng.description).not.toContain("675 plaques, at least 71,050,000");
    expect(uk.description).not.toContain("94 plaques, at least 41,620,000");
    const hub = countryBoards().reduce((n, b) => n + b.plaques, 0);
    // 1,240 until "Dynamite" was one Nigerian record (5 Oct 2026, compareIn-01).
    // 1,241 since 7 Oct 2026: Turkey's two records, "Dai Dai" and "Water"
    // (label-issued Diamonds, owner's ruling); Colombia's upgrade adds none.
    expect(hub).toBe(1_241);
    expect(hub).not.toBe(1_239);
    expect(hub).not.toBe(1_243);
    expect(ng.description).not.toContain("673 plaques, at least 70,550,000");
  });

  it("the comment that called \"Sungba (Remix)\" a different record from \"Sungba\" is gone", () => {
    const src = readFileSync("app/lib/certCountry.ts", "utf8");
    expect(src).not.toContain('"Sungba (Remix)" is not "Sungba"');
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// A FULLY renamed title — no base title in common — could still hide a shared
// record from the guard above (review of the 4 Oct debug PR: Tems's "Isaka"
// renamed "Isaka 6AM", "Isaka - 6AM" or "6AM" split Nigeria's record again and
// that guard still passed). So these two guards read no title at all:
//   - THE SLEEVE. A guard on any shared sleeve is not workable: 164 cross-
//     artist pairs on the boards share an ALBUM sleeve and are different
//     records (a feature on another's album, the MIL tracks). So it reads a
//     single's own sleeve — one that carries one title per artist across every
//     artist's whole release list — and holds every two artists' plaques on
//     it, in one programme, to one record, unless the pair is listed below as
//     two records.
//   - THE CREDIT. A plaque whose credit names another artist on the same
//     board and programme sits in a record that artist holds too.
// ─────────────────────────────────────────────────────────────────────────────

/** Cross-artist pairs on one single's sleeve that are two different records,
 *  by title and by the registers' own rows. Listed by hand so that a NEW pair
 *  on a shared single sleeve has to be looked at before it can pass. */
const KNOWN_DIFFERENT_ON_ONE_SLEEVE = [
  "NG 2Factor[asake] | Lalala (Young Jonn & Rema)[rema]",
  "NG Last Time[omah-lay] | Many Roads[ayra-starr]",
];

/** Plaques whose credit names another board artist and are rightly not that
 *  artist's record. None today; listed by hand, like the sleeves above. */
const KNOWN_DIFFERENT_BY_CREDIT: string[] = [];

/** Is there one record, of this format, that both artists hold? Merging needs
 *  a shared base title (certCountry rule 5), so the record's own title is one
 *  of the two artists' — no plaque identity is needed to find it. */
const heldTogether = (records: CountryRecord[], format: string, slugs: string[], titles: string[]) =>
  records.some(
    (r) =>
      r.plaque.format === format &&
      slugs.every((s) => r.holders.some((h) => h.artist.slug === s)) &&
      titles.some((t) => baseTitle(t) === baseTitle(r.plaque.title)),
  );

describe("a single's own sleeve, or a credit: two artists' plaques on it are one record, or a listed pair", () => {
  const titlesBySleeve = new Map<string, Map<string, Set<string>>>();
  for (const a of comparableArtists)
    for (const r of a.releases) {
      if (!r.cover) continue;
      const bySlug = titlesBySleeve.get(r.cover) ?? new Map<string, Set<string>>();
      bySlug.set(a.slug, (bySlug.get(a.slug) ?? new Set()).add(baseTitle(r.title)));
      titlesBySleeve.set(r.cover, bySlug);
    }
  /** An album's sleeve carries two or more titles for one artist. */
  const singleSleeve = (cover: string) => [...(titlesBySleeve.get(cover)?.values() ?? [])].every((s) => s.size === 1);

  function splitOnSleeve(code: string, lines: CountryArtistLine[], records: CountryRecord[]): string[] {
    const items = lines.flatMap((l) => l.plaqueList.map((x) => ({ slug: l.artist.slug, title: x.title, cover: x.cover, format: x.format })));
    const out: string[] = [];
    for (let i = 0; i < items.length; i++)
      for (let j = i + 1; j < items.length; j++) {
        const [a, b] = [items[i], items[j]];
        if (a.slug === b.slug || a.format !== b.format || !a.cover || a.cover !== b.cover || !singleSleeve(a.cover)) continue;
        if (!heldTogether(records, a.format, [a.slug, b.slug], [a.title, b.title]))
          out.push(`${code} ${[`${a.title}[${a.slug}]`, `${b.title}[${b.slug}]`].sort().join(" | ")}`);
      }
    return out;
  }

  const norm = (s: string) => ` ${s.toLowerCase().replace(/[^a-z0-9]+/g, " ")} `;
  function splitByCredit(code: string, lines: CountryArtistLine[], records: CountryRecord[]): string[] {
    const out: string[] = [];
    for (const l of lines)
      for (const x of l.plaqueList)
        for (const other of lines)
          if (other.artist.slug !== l.artist.slug && x.credit && norm(x.credit).includes(norm(other.artist.name)))
            if (!heldTogether(records, x.format, [l.artist.slug, other.artist.slug], [x.title]))
              out.push(`${code} ${x.title}[${l.artist.slug}] credits ${other.artist.slug}`);
    return out;
  }

  const boards = countryBoards({ includeNigeria: true, includeFeatures: true });

  it("every board: no unlisted pair on a single's sleeve sits in two records", () => {
    const split = boards.flatMap((b) => b.programs.flatMap((p) => splitOnSleeve(b.code, p.lines, p.records)));
    expect(split.filter((x) => !KNOWN_DIFFERENT_ON_ONE_SLEEVE.includes(x))).toEqual([]);
    // The list holds only pairs that still exist, so it cannot rot into a pass.
    expect([...new Set(split)].sort()).toEqual([...KNOWN_DIFFERENT_ON_ONE_SLEEVE].sort());
  });

  it("every board: a plaque whose credit names another board artist sits in a record that artist holds", () => {
    const split = boards.flatMap((b) => b.programs.flatMap((p) => splitByCredit(b.code, p.lines, p.records)));
    expect(split.filter((x) => !KNOWN_DIFFERENT_BY_CREDIT.includes(x))).toEqual([]);
    expect([...new Set(split)].sort()).toEqual([...KNOWN_DIFFERENT_BY_CREDIT].sort());
    // It is not vacuous: credited plaques naming another board artist exist.
    const credited = boards.flatMap((b) =>
      b.programs.flatMap((p) => p.lines.flatMap((l) => l.plaqueList.filter((x) => p.lines.some((o) => o !== l && !!x.credit && norm(x.credit).includes(norm(o.artist.name)))))),
    );
    expect(credited.length).toBeGreaterThan(0);
  });

  /** Nigeria's lines with one artist's plaque retitled, and the board's own
   *  records rebuilt from them (recordsOf, the function the site runs). */
  const retitled = (slug: string, from: string, to: string) => {
    const p = priceCountry("NG").programs[0];
    const lines = p.lines.map((l) =>
      l.artist.slug === slug ? { ...l, plaqueList: l.plaqueList.map((x) => (x.title === from ? { ...x, title: to } : x)) } : l,
    );
    expect(lines.flatMap((l) => l.plaqueList).some((x) => x.title === to)).toBe(true);
    return { lines, records: recordsOf(lines) };
  };

  it("negative control: Tems's Isaka renamed in full — the board splits it, and the sleeve guard fails", () => {
    const ng = priceCountry("NG").programs[0];
    const format = ng.lines.find((l) => l.artist.slug === "omah-lay")!.plaqueList.find((x) => x.title === "Isaka (6AM)")!.format;
    expect(heldTogether(ng.records, format, ["tems", "omah-lay"], ["Isaka (6AM)"])).toBe(true); // as the board stands
    // The three renames the review ran through the site's recordsOf.
    for (const to of ["Isaka 6AM", "Isaka - 6AM", "6AM"]) {
      const { lines, records } = retitled("tems", "Isaka (6AM)", to);
      // The merge rule alone does not catch it — that is why this guard exists.
      expect(heldTogether(records, format, ["tems", "omah-lay"], ["Isaka (6AM)", to]), to).toBe(false);
      expect(splitOnSleeve("NG", lines, records), to).toContain(`NG ${["Isaka (6AM)[omah-lay]", `${to}[tems]`].sort().join(" | ")}`);
    }
    // And the board as it shipped on 4 Oct 2026, Isaka in two records.
    const p = priceCountry("NG").programs[0];
    const shipped = p.records.flatMap((r) => (baseTitle(r.plaque.title) === "isaka" ? r.holders.map((h) => ({ ...r, holders: [h] })) : [r]));
    expect(splitOnSleeve("NG", p.lines, shipped)).toContain("NG Isaka (6AM)[omah-lay] | Isaka (6AM)[tems]");
  });

  it("negative control: a credited plaque whose other artist's title is renamed in full fails the credit guard", () => {
    const p = priceCountry("NG").programs[0];
    const burna = p.lines.find((l) => l.artist.slug === "burna-boy")!.plaqueList.find((x) => x.title === "Sungba (Remix)")!;
    expect(norm(burna.credit ?? "")).toContain(" asake ");
    const { lines, records } = retitled("asake", "Sungba", "Sungba Remix");
    expect(splitByCredit("NG", lines, records)).toContain("NG Sungba (Remix)[burna-boy] credits asake");
  });
});
