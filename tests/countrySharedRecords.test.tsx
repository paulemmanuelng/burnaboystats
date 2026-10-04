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
import { countryBoards, countryCopy, priceCountry, recordTitle } from "../app/lib/certCountry";
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
              const own = line.plaqueList.find(
                (x) => x.format === r.plaque.format && recordTitle(x.title) === recordTitle(r.plaque.title),
              )!;
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
    // Wizkid's against Fireboy DML's, TCSN's own disambiguator on his.
    "NG everyday": "Everyday (Fireboy Dml)[fireboy-dml] | Everyday[wizkid]",
    // TCSN files them as "Outside (Buju)" and "Outside (Fireboy Dml)".
    "NG outside": "Outside (Buju)[bnxn] | Outside (Fireboy Dml)[fireboy-dml]",
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
    expect(changed).toEqual({
      NG: { lines: 81_850_000, units: 71_050_000, shared: 68, plaques: 675 },
      US: { lines: 73_940_000, units: 67_440_000, shared: 4, plaques: 46 },
      UK: { lines: 43_620_000, units: 41_620_000, shared: 7, plaques: 94 },
      FR: { lines: 11_283_327, units: 11_183_327, shared: 1, plaques: 59 },
      CA: { lines: 6_920_000, units: 6_560_000, shared: 4, plaques: 65 },
      ZA: { lines: 2_910_000, units: 2_690_000, shared: 3, plaques: 36 },
      NZ: { lines: 2_137_500, units: 2_017_500, shared: 3, plaques: 55 },
      CH: { lines: 755_000, units: 710_000, shared: 2, plaques: 25 },
    });
  });
});
