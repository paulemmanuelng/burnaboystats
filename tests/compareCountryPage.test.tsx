import { renderToStaticMarkup } from "react-dom/server";
import { readFileSync } from "node:fs";
import { join } from "node:path";

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
import { certCountryCodes, countrySlug, priceCountry } from "../app/lib/certCountry";

/**
 * /compare in country mode, rendered off the query string the way the server
 * does it. Each case is a defect found on the live board while building it,
 * reproduced by URL — the assertions quote the page's own words.
 */
async function html(sp: Record<string, string>): Promise<string> {
  const tree = await ComparePage({ searchParams: Promise.resolve(sp) });
  return renderToStaticMarkup(tree);
}
const text = (h: string) => h.replace(/<[^>]+>/g, " ").replace(/&#x27;/g, "'").replace(/&amp;/g, "&").replace(/\s+/g, " ");
const hrefs = (h: string) => [...h.matchAll(/href="([^"]+)"/g)].map((m) => m[1].replace(/&amp;/g, "&"));
const fmt = (n: number) => n.toLocaleString("en-US");

describe("a country board", () => {
  it("ranks every artist certified there, and prints the engine's own figures", async () => {
    const board = priceCountry("CA");
    const h = await html({ mode: "country", country: "canada" });
    const t = text(h);
    expect(t).toContain("Certified units in Canada");
    expect(t).toContain(fmt(board.units));
    for (const line of board.lines) {
      expect(t, line.artist.name).toContain(line.artist.name);
      expect(t, `${line.artist.name} units`).toContain(fmt(line.units));
    }
    // Ranked, and the ranking is the engine's: the leader prints first.
    expect(t.indexOf(board.lines[0].artist.name)).toBeLessThan(t.indexOf(board.lines[1].artist.name));
  });

  it("names the country the way it reads in a sentence — 'in the United States', not 'in United States'", async () => {
    const t = text(await html({ mode: "country", country: "united-states" }));
    expect(t).toContain("Certified units in the United States");
    expect(t).not.toMatch(/\bin United States\b/);
    expect(t).not.toMatch(/\bin Netherlands\b/);
  });

  it("prints no figure where the body publishes no threshold, and does not quote it one", async () => {
    // Colombia: two real plaques, no published unit threshold. The first
    // version headlined "at least 0" and told the reader they were priced at
    // "Pro Musica Colombia's own published threshold".
    const h = await html({ mode: "country", country: "colombia" });
    const t = text(h);
    expect(t).toContain("publishes no unit threshold");
    expect(t).not.toContain("own published threshold");
    expect(t).toContain("none priceable");
    expect(t).toContain("not counted");
    // Its link promises a register, not levels it does not publish. Scoped to
    // the card: the programme note below names Sony's own levels, which are
    // real and are the reason that plaque cannot go on Colombia's scale.
    const card = t.slice(t.indexOf("What one plaque is worth here"), t.indexOf("Artists ranked"));
    expect(card).toContain("Pro Musica Colombia's register");
    expect(card).not.toContain("own levels");
  });

  it("honours the features switch, and says which it is on", async () => {
    const on = priceCountry("CA", { includeNigeria: true, includeFeatures: true });
    const off = priceCountry("CA", { includeNigeria: true, includeFeatures: false });
    expect(off.units).toBeLessThan(on.units);
    const h = await html({ mode: "country", country: "canada", feat: "0" });
    const t = text(h);
    expect(t).toContain("off · lead credits only");
    expect(t).toContain(fmt(off.units));
    expect(t).not.toContain(fmt(on.units));
  });

  it("has no Nigeria switch — there the country is the subject, not a term in a sum", async () => {
    const t = text(await html({ mode: "country", country: "nigeria" }));
    expect(t).not.toContain("Nigeria: ");
    expect(t).not.toContain("included · by default");
    // The provenance the separation exists for is still on the page.
    expect(t).toContain("A request-based register");
    expect(t).toContain("certifies on application");
  });

  it("bills a shared record to its lead act first, and only once", async () => {
    // "Bandana" is Fireboy DML featuring Asake. The biggest-plaques list is
    // built from both holders' ledgers and was printing the record twice, then
    // once with Asake — who outranks him on the board — billed as the act.
    const t = text(await html({ mode: "country", country: "nigeria" }));
    const list = t.slice(t.indexOf("Biggest plaques"));
    const bandana = list.indexOf("Bandana");
    expect(bandana).toBeGreaterThan(-1);
    expect(list.slice(bandana, bandana + 90)).toMatch(/Fireboy DML · Asake \(featured\)/);
    expect(list.split("Bandana").length - 1).toBe(1);
  });

  it("links every market from the index, exactly once each", async () => {
    const h = await html({ mode: "country" });
    const links = hrefs(h).filter((x) => x.startsWith("/compare/in/"));
    const want = certCountryCodes().map((c) => `/compare/in/${countrySlug(c)}`).sort();
    expect([...new Set(links)].sort()).toEqual(want);
    expect(links.length).toBe(want.length);
  });

  it("is reachable from the rest of the page, and carries the fourth mode", async () => {
    const h = await html({});
    expect(hrefs(h)).toContain("/compare/in");
    expect(text(h)).toContain("By country");
  });
});

describe("country mode renders one page, not two", () => {
  // A hand-edited URL, or a link that predates the mode, can still carry a=
  // and b=. The first version rendered the whole Burna vs Wizkid comparison
  // UNDER the Canadian board: two headline cards, a second country-by-country
  // table and a second exit card.
  it("ignores stale artist params instead of stacking a comparison underneath", async () => {
    for (const sp of [
      { mode: "country", country: "canada", a: "burna-boy" },
      { mode: "country", country: "canada", a: "burna-boy", b: "wizkid" },
      { mode: "country", country: "canada", a: "burna-boy", b: "burna-boy" },
    ]) {
      const t = text(await html(sp));
      const where = JSON.stringify(sp);
      expect(t, where).toContain("Certified units in Canada");
      expect(t, where).not.toContain("leads by at least");
      expect(t, where).not.toContain("on both sides");
      expect(t, where).not.toContain("The country-by-country table appears");
      // one headline figure on the page: the country's
      expect(t.match(/at least/g)?.length ?? 0, where).toBeLessThan(3);
      // and the mode's own control is still there
      expect(t, where).toContain("every plaque held");
    }
  });

  it("switching modes from a market drops the market, the way it drops a chosen song", async () => {
    const h = await html({ mode: "country", country: "canada" });
    const switches = hrefs(h).filter((x) => /mode=(songs|albums|artists)/.test(x));
    expect(switches.length).toBeGreaterThan(0);
    for (const x of switches) expect(x, x).not.toMatch(/country=/);
  });
});

describe("the country pages' own trail", () => {
  it("lists By country between Compare and the market, in both the bar and the BreadcrumbList", async () => {
    const { CompareView } = await import("../app/compare/page");
    const tree = await CompareView({
      sp: { mode: "country", country: "canada" },
      path: "/compare/in/canada",
      leaf: "Canada",
    });
    const h = renderToStaticMarkup(tree);
    const nav = h.slice(h.indexOf('aria-label="Breadcrumb"'), h.indexOf("</nav>"));
    const visible = [...nav.matchAll(/>([^<>]+)<\/(?:a|span)>/g)].map((m) => m[1]).filter((x) => x.trim() !== "/");
    const ld = JSON.parse(
      h.match(/<script type="application\/ld\+json">(\{"@context":"https:\/\/schema.org","@type":"BreadcrumbList".*?)<\/script>/)![1],
    );
    expect(visible).toEqual(["Home", "Certifications", "Compare", "By country", "Canada"]);
    expect(ld.itemListElement.map((i: { name: string }) => i.name)).toEqual(visible);
  });
});

describe("the boards fit a phone", () => {
  const css = readFileSync(join(process.cwd(), "app/compare/compare.module.css"), "utf8");
  const phone = css.slice(css.lastIndexOf("@media (max-width: 760px)"));

  it("places every cell of both tables explicitly", () => {
    // A cell that spans columns pushes the auto-placed cells after it onto
    // rows of their own: the units landed under the coverage line, in the
    // country column, left-aligned.
    for (const rule of [
      /\.cbIndexTable \.cbUnitsCell \{[^}]*grid-area: 1 \/ 2/,
      /\.cbIndexTable \.cbMetaCell \{[^}]*grid-area: 2 \/ 1 \/ auto \/ -1/,
      /\.cbBoardTable \.cbUnitsCell \{[^}]*grid-area: 1 \/ 3/,
      /\.cbBoardTable \.cbPlaqueCell \{[^}]*grid-area: 2 \/ 2 \/ auto \/ -1/,
    ]) {
      expect(phone, String(rule)).toMatch(rule);
    }
  });

  it("hides a header only where its column has moved, and never with display:none", () => {
    expect(phone).toMatch(/\.cbIndexTable thead th:nth-child\(2\),\s*\n?\s*\.cbBoardTable thead th:nth-child\(3\) \{[^}]*clip: rect/);
    expect(phone).not.toMatch(/thead th:nth-child\(\d\)[^{]*\{[^}]*display: none/);
  });
});

describe("the compare section's own metadata fits the display limits", () => {
  // scripts/check-seo.mjs reads PRERENDERED html, and /compare is
  // server-rendered on demand — so nothing checked the hub's own title and
  // description until a sweep measured them off the dev server and found the
  // description at 179 characters, truncated in every result it appeared in.
  const LIMITS = { title: 60, description: 160 };

  it("holds every state /compare can render inside them", async () => {
    const { generateMetadata } = await import("../app/compare/page");
    const states: Record<string, string>[] = [
      {},
      { mode: "songs" },
      { mode: "albums" },
      { mode: "country" },
      { mode: "country", country: "canada" },
      { mode: "country", country: "united-states" },
      { mode: "country", country: "bogus" },
      { a: "burna-boy" },
      { a: "burna-boy", b: "wizkid" },
      { mode: "songs", a: "burna-boy", sa: "Ye", b: "wizkid", sb: "Essence" },
    ];
    const over: string[] = [];
    for (const sp of states) {
      const m = await generateMetadata({ searchParams: Promise.resolve(sp) });
      const title = String(m.title ?? "");
      const description = String(m.description ?? "");
      const where = JSON.stringify(sp);
      if (!title || title.length > LIMITS.title) over.push(`${where}: title ${title.length}`);
      if (!description || description.length > LIMITS.description) over.push(`${where}: description ${description.length}`);
    }
    expect(over).toEqual([]);
  });
});

describe("a lead shared three ways is named three ways (23 Sep 2026)", () => {
  // The 23 Sep sweep gave Tems and Rema Czech Gold and Slovak Platinum, each
  // level with Burna Boy's (11,261 and 7,834 units). The page said "Burna Boy
  // and Rema lead the Czech Republic" — the string that shipped in review —
  // and left out Tems on the same figure.
  it.each([["czech-republic", "CZ"], ["slovakia", "SK"]])("%s", async (slug, code) => {
    const board = priceCountry(code);
    const top = board.lines.filter((l) => l.units === board.lines[0].units);
    expect(top.length, "the three-way tie this guards").toBeGreaterThan(2);
    const t = text(await html({ mode: "country", country: slug }));
    const names = top.map((l) => l.artist.name);
    expect(t).toContain(`${names.slice(0, -1).join(", ")} and ${names[names.length - 1]} share the lead in ${board.inSentence}.`);
    expect(t).not.toContain(`${names[0]} and ${names[1]} lead ${board.inSentence}.`);
  });

  it("a two-way lead still reads as before", async () => {
    const board = priceCountry("CA");
    expect(board.lines[0].units).not.toBe(board.lines[2]?.units);
    const t = text(await html({ mode: "country", country: "canada" }));
    expect(t).toContain(`${board.lines[0].artist.name} and ${board.lines[1].artist.name} lead ${board.inSentence}.`);
  });
});
