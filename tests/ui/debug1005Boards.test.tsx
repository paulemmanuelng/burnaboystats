import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/",
  notFound: () => {
    throw new Error("notFound() — the fixture slug no longer exists");
  },
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import ArtistPage from "../../app/afrobeats/[artist]/page";
import ChartsPage from "../../app/afrobeats/[artist]/charts/page";
import LivePage from "../../app/afrobeats/[artist]/live/page";
import AfrobeatsPage from "../../app/afrobeats/page";
import ComparePage from "../../app/compare/page";
import { liveBoardFor } from "../../app/data/liveBoards";
import { priceCountry } from "../../app/lib/certCountry";

/**
 * The debug pass of 5 Oct 2026, boards lane — the cases that need a rendered
 * page. Each keeps the string the live site shipped as its negative control.
 * Data-level cases: tests/debug1005Boards.test.ts.
 */

const text = (h: string) =>
  h
    .replace(/<[^>]+>/g, " ")
    .replace(/&#x27;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/ /g, " ")
    .replace(/\s+/g, " ");
const artist = async (slug: string) => renderToStaticMarkup(await ArtistPage({ params: Promise.resolve({ artist: slug }) }));
const charts = async (slug: string) => renderToStaticMarkup(await ChartsPage({ params: Promise.resolve({ artist: slug }) }));
const live = async (slug: string) => renderToStaticMarkup(await LivePage({ params: Promise.resolve({ artist: slug }) }));
const compare = async (sp: Record<string, string>) => renderToStaticMarkup(await ComparePage({ searchParams: Promise.resolve(sp) }));

describe("the board's artist pages", () => {
  it("afrobeatsB-03: Olamide's page says last verified on the day it was last read", async () => {
    const t = text(await artist("olamide"));
    expect(t).toContain("Last verified 2 October 2026.");
    expect(t).toContain("last verified 2 October 2026.");
    // Negative control: what both layouts printed under the 2 Oct re-read.
    expect(t).not.toContain("6 September 2026");
  });

  it("afrobeatsB-13 / B-14: the chart card names the global charts; the live card counts services", async () => {
    const t = text(await artist("rema"));
    expect(t).toContain("Principal national chart per country, plus 2 Billboard global charts — the standard set out in the methodology.");
    expect(t).not.toContain("Principal national chart per country — the standard");
    const b = liveBoardFor("rema")!;
    expect(t).toContain(`${b.services} platform`);
    if (b.platformTotals.length !== b.services) expect(t).not.toContain(`${b.platformTotals.length} platforms`);
  });

  it("afrobeatsB-08: Black Sherif's phone chart stats are singular at one", async () => {
    const h = await charts("black-sherif");
    const t = text(h);
    expect(t).toMatch(/\b1 No\. 1 peak placements\b/);
    expect(t).toMatch(/\b1 Territory\b/);
    expect(t).not.toMatch(/\b1 No\. 1 peaks\b/);
    expect(t).not.toMatch(/\b1 Territories\b/);
  });

  it("afrobeatsA-17: the desktop charts lede does not set the global charts against a platform listing", async () => {
    const t = text(await charts("rema"));
    expect(t).toContain("plus 2 Billboard global charts, not from a platform or genre listing.");
    expect(t).not.toContain("Billboard global charts rather than a platform or genre listing");
  });

  it("afrobeatsB-16: the phone live notice links to the artist's own chart board by name", async () => {
    const h = await live("wizkid");
    expect(h).toMatch(/Career peaks live on\s*<a href="\/afrobeats\/wizkid\/charts">Wizkid&#x27;s chart board<\/a>/);
    expect(h).not.toMatch(/<a href="\/afrobeats\/wizkid\/charts">Chart Records<\/a>/);
  });
});

describe("afrobeatsA-01 / A-20: the hub dates the board by its last full re-read", () => {
  it("one date, not a range of last-change dates, and a count that is the artists", () => {
    const t = text(renderToStaticMarkup(<AfrobeatsPage />));
    expect(t).toContain("The board is re-read at each register sweep — last on 2 October 2026.");
    expect(t).toContain("Read at source, re-read 2 October 2026");
    expect(t).toContain("All 20 artists' registers — RIAA, BPI, SNEP, TurnTable and their equivalents — re-read at each sweep, last on 2 October 2026.");
    expect(t).toContain("Re-read at each sweep, last 2 October 2026");
    expect(t).toContain("Every register last re-read 2 October 2026.");
    // Negative controls: what the live hub printed.
    expect(t).not.toContain("6 September – 4 October 2026");
    expect(t).not.toContain("19 register sweeps");
  });
});

describe("the /compare/in country boards", () => {
  it("compareIn-04 / -18 / crossSite-09: the index says what it counts, which plaques are not priced at their own body, and marks them", async () => {
    const h = await compare({ mode: "country" });
    const t = text(h);
    expect(t).toContain("plaques — a record two artists share counted once —");
    // Turkey's since 7 Oct 2026: priced at the one level its label has
    // published (Sony Music Türkiye's 75,000 a Diamond single), boards in units order.
    expect(t).toMatch(/Every figure is a floor, priced at the body named beside it — Turkey's at Sony Music Türkiye's own Diamond level and Greece's at IFPI's last published level \(June 2013\), Colombia's not at all ¹ ?\./);
    expect(t).not.toContain("every plaque is priced at the body named beside it");
    // The h1 lede above that sentence made the same promise and contradicted
    // it; the shipped string is the negative control.
    expect(t).toContain("one market, every artist, each plaque priced at the threshold its country's page names.");
    expect(t).not.toContain("priced at that country's own certifying body's published threshold");
    for (const [code, mark] of [["MX", "§"], ["SE", "§"], ["PL", "¶"], ["GR", "¶"]] as const) {
      const b = priceCountry(code);
      expect(t, code).toContain(`${b.units.toLocaleString("en-US")} ${mark}`);
    }
  });

  it("compareIn-16: Change country goes to the canonical index", async () => {
    const change = (h: string) => h.match(/<a href="([^"]+)" class="[^"]*cbChange/)?.[1].replace(/&amp;/g, "&");
    expect(change(await compare({ mode: "country", country: "nigeria" }))).toBe("/compare/in");
    // /compare/in reads no query, so a features-off view keeps the query route.
    expect(change(await compare({ mode: "country", country: "nigeria", feat: "0" }))).toBe("/compare?mode=country&feat=0");
    // Negative control: the twin it linked to, which canonicalises to /compare/in.
    expect(change(await compare({ mode: "country", country: "nigeria" }))).not.toBe("/compare?mode=country");
  });

  it("compareIn-15: no possessive after a parenthesis", async () => {
    const t = text(await compare({ mode: "country", country: "nigeria" }));
    expect(t).toContain("TurnTable's own levels");
    expect(t).not.toContain("TurnTable (TCSN)'s");
    expect(text(await compare({ mode: "country", country: "czech-republic" }))).not.toContain("(Czechia)'s");
  });

  it("compareIn-10: the records level with the tenth are named, not cut", async () => {
    const t = text(await compare({ mode: "country", country: "nigeria" }));
    expect(t).toMatch(/\+ 2 more at 500,000 units: (Reason, Twe Twe|Twe Twe, Reason)\./);
  });

  it("compareIn-11: a tie at second is said to be one", async () => {
    const at = text(await compare({ mode: "country", country: "austria" }));
    expect(at).toContain("Burna Boy leads Austria; CKay and Tyla share second.");
    expect(at).not.toContain("Burna Boy and CKay lead Austria.");
    const no = text(await compare({ mode: "country", country: "norway" }));
    expect(no).toContain("Tyla leads Norway; Burna Boy and Rema share second.");
  });

  it("compareIn-12: Colombia ranks nobody", async () => {
    const h = await compare({ mode: "country", country: "colombia" });
    expect(h).not.toMatch(/<span class="[^"]*cbRank[^"]*">1<\/span>/);
    expect(h).toMatch(/<span class="[^"]*cbRank[^"]*">–<\/span>/);
  });

  it("compareIn-19: RIAA Latin's levels in its own words", async () => {
    const t = text(await compare({ mode: "country", country: "united-states" }));
    expect(t).toContain("Oro 30,000 · Platino 60,000 · Diamante 600,000");
    expect(t).not.toContain("Gold 30,000 · Platinum 60,000");
    expect(t).toMatch(/RIAA Latin \d+ artists? · \d+ plaques? · Platino 60,000/);
  });

  it("compareIn-20: the programme split takes its own line, and no clause can break inside", async () => {
    const h = await compare({ mode: "country", country: "united-states" });
    expect(h).toMatch(/cbFigureShared[^"]*">43 at RIAA, 3 at RIAA Latin</);
    expect(h).not.toContain(" · 43 at RIAA");
  });

  it("compareA-05: the UK board's highest plaque for Asake is his Gold", async () => {
    const t = text(await compare({ mode: "country", country: "united-kingdom" }));
    expect(t).toMatch(/Asake Gold Mr\. Money With The Vibe/);
    expect(t).not.toMatch(/Asake Silver Amapiano/);
  });
});

describe("the pair pages", () => {
  it("compareB-04 / B-07: '1 of 1 plaque counted', and a ratio with a separator and no decimal", async () => {
    const t = text(await compare({ a: "tems", b: "tiwa-savage" }));
    expect(t).toContain("1 of 1 plaque counted");
    expect(t).not.toContain("1 of 1 plaques counted");
    expect(t).toContain("a floor 1,848× the size of Tiwa Savage's");
    expect(t).not.toContain("1848.0×");
  });

  it("compareA-08: the table header counts countries, the US once", async () => {
    const h = await compare({ a: "burna-boy", b: "wizkid" });
    const n = Number(h.match(/thCount[^"]*">(\d+)</)?.[1]);
    const rows = [...h.matchAll(/countryCode[^"]*">([A-Z]{2})(?: · [^<]*)?</g)].map((m) => m[1]);
    expect(n).toBe(new Set(rows).size);
    expect(rows.length).toBeGreaterThan(n); // the US twice, as RIAA and RIAA Latin
  });

  it("compareA-12: the Czech Republic is named one way on a page", async () => {
    const t = text(await compare({ a: "tems", b: "tyla" }));
    expect(t).toContain("Czech Republic");
    expect(t).toMatch(/Streams-based bodies — [^.]*the Czech Republic/);
    expect(t).not.toMatch(/Streams-based bodies — [^.]*Czechia/);
  });

  it("compareB-08: the § note states the conversion once per body, not again in a lead", async () => {
    const t = text(await compare({ a: "burna-boy", b: "wizkid" }));
    expect(t).not.toContain("the body publishes its levels in streams and no download-equivalence, so this page converts at");
    const s = t.slice(t.indexOf("§ Ratio assumed"), t.indexOf("¶ Historic figure") > 0 ? t.indexOf("¶ Historic figure") : undefined);
    expect(s.length).toBeGreaterThan(20);
  });

  it("compareA-03: the fold counts further countries, not market rows", async () => {
    const t = text(await compare({ a: "burna-boy", b: "davido" }));
    // 14 since 7 Oct 2026: Turkey, which Davido does not hold.
    expect(t).toContain("+ 14 further countries where only Burna Boy is certified");
    expect(t).not.toContain("+ 15 further countries");
  });

  it("compareA-04: footnote 1 names both Colombian issuers", async () => {
    const t = text(await compare({ a: "burna-boy", b: "rema" }));
    // "Pro Música", with its accent: one name per body (core-08, #429).
    // Sony Music since 7 Oct 2026: Colombia's Platinum is read off Sony Music's plaque.
    expect(t).toContain("Colombia (Sony Music · Pro Música Colombia)");
  });

  it("compareA-06: Burna Boy's registers carry his last full sweep's date", async () => {
    const t = text(await compare({ a: "burna-boy", b: "wizkid" }));
    expect(t).toContain("both registers read 2 October 2026");
    expect(t).not.toContain("registers read 4 October 2026 (Burna Boy)");
  });

  it("compareA-15: Seyi Vibez vs Black Sherif, Nigeria separated, says it once", async () => {
    const t = text(await compare({ a: "seyi-vibez", b: "black-sherif", ng: "0" }));
    expect(t).toContain("Level — both at least 0 certified units.");
    expect(t).not.toContain("Neither holds a certification outside Nigeria; include it to compare them.");
    expect(t).toContain("Neither Seyi Vibez nor Black Sherif holds a certification outside Nigeria — include Nigeria to compare them.");
  });

  it("compareB-01: the why-line says 'outside Nigeria' for a Ghanaian artist", async () => {
    const t = text(await compare({ a: "burna-boy", b: "black-sherif" }));
    expect(t).toContain("Black Sherif has no certifications outside Nigeria.");
    expect(t).not.toContain("has no international certifications");
  });
});
