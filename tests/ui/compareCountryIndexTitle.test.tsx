import { render, cleanup } from "@testing-library/react";
import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/compare",
  useSearchParams: () => new URLSearchParams(),
  notFound: () => {
    throw new Error("notFound()");
  },
}));
vi.mock("next/link", () => ({
  default: ({ href, children, prefetch: _p, scroll: _s, ...rest }: { href: string; children: React.ReactNode; prefetch?: boolean; scroll?: boolean }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import { readFileSync } from "node:fs";
import ComparePage, { generateMetadata } from "../../app/compare/page";
import CountryIndexPage, { metadata as indexMetadata } from "../../app/compare/in/page";
import styles from "../../app/compare/compare.module.css";
import { countryBoards, type CountryBoard } from "../../app/lib/certCountry";
import { comparableArtists } from "../../app/lib/certUnits";
import { numberWord } from "../../app/lib/homeData";
import { rules, winning } from "../fixtures/cssRules";

/**
 * V-compareA-11, the full-site debug of 5 Oct 2026. The country mode's index
 * reached by query — /compare?mode=country, /compare?mode=country&feat=0
 * (where the By-country segment and the index's own "Featured appearances"
 * switch go with features off) and a country slug that names no market — drew
 * the h1 "Certified units by country" under the hub's title. Read live in
 * headless Chrome: the tab said "Compare Certified Units — Burna Boy vs Wizkid
 * & More" on all three, with the canonical already /compare/in, whose own
 * title is "Certified Units by Country — Afrobeats Artists".
 *
 * Each state must carry /compare/in's head — title, description, canonical
 * and share card — and its title must begin with the words of the h1 it sits
 * over. HeadSync puts the same title on the tab after a client-side toggle.
 */
const SHIPPED_TITLE = "Compare Certified Units — Burna Boy vs Wizkid & More";

const states: [string, Record<string, string>][] = [
  ["/compare?mode=country", { mode: "country" }],
  ["/compare?mode=country&feat=0", { mode: "country", feat: "0" }],
  ["/compare?mode=country&country=atlantis", { mode: "country", country: "atlantis" }],
];

const head = (sp: Record<string, string>) => generateMetadata({ searchParams: Promise.resolve(sp) });
const h1Of = async (sp: Record<string, string>) => {
  const root = document.createElement("div");
  root.innerHTML = renderToStaticMarkup(await ComparePage({ searchParams: Promise.resolve(sp) }));
  return [...root.querySelectorAll("h1")].map((h) => h.textContent!.replace(/\s+/g, " ").trim());
};

afterEach(() => {
  cleanup();
  document.head.innerHTML = "";
});

describe("the country index by query carries the index's own head", () => {
  it.each(states)("%s", async (_url, sp) => {
    const m = await head(sp);
    expect(m.title).toBe(indexMetadata.title);
    expect(m.description).toBe(indexMetadata.description);
    expect(m.alternates?.canonical).toBe("/compare/in");
    expect(m.openGraph).toEqual(indexMetadata.openGraph);
    expect(m.twitter).toEqual(indexMetadata.twitter);
  });

  it.each(states)("%s: the title names what the h1 says", async (_url, sp) => {
    const [h1] = await h1Of(sp);
    expect(h1).toBe("Certified units by country");
    const title = String((await head(sp)).title);
    expect(title.toLowerCase().startsWith(h1.toLowerCase())).toBe(true);
  });

  it("negative control: the title the live site shipped does not name its h1", () => {
    // The literal string read off the three URLs, against the same rule.
    expect(SHIPPED_TITLE.toLowerCase().startsWith("certified units by country")).toBe(false);
  });

  it("a toggle onto the index by query puts the index's title on the tab", async () => {
    // /compare/in → "Featured appearances" off is a client-side navigation to
    // /compare?mode=country&feat=0; HeadSync writes what generateMetadata gives.
    document.head.innerHTML = `<title>${SHIPPED_TITLE}</title><link rel="canonical" href="https://burnaboystats.com/compare">`;
    render(await ComparePage({ searchParams: Promise.resolve({ mode: "country", feat: "0" }) }));
    expect(document.title).toBe(indexMetadata.title);
    expect(document.head.querySelector('link[rel="canonical"]')!.getAttribute("href")).toBe("https://burnaboystats.com/compare/in");
  });
});

describe("the hub and a named board keep their own heads", () => {
  it("plain /compare", async () => {
    expect((await head({})).title).toBe(SHIPPED_TITLE);
  });

  it("a board by query", async () => {
    const m = await head({ mode: "country", country: "canada" });
    expect(m.title).not.toBe(indexMetadata.title);
    expect(m.alternates?.canonical).toBe("/compare/in/canada");
  });
});

describe("the Leads column (J2-10, fixes 39, 44, 52, 53)", () => {
  // Leads is the first line of the country's OWN body's table, every line
  // tied with it sharing the lead, rebuilt here from the board's lines — not
  // through the page's marketLeader.
  const leaderOf = (b: CountryBoard) => {
    const lines = b.programs[0]?.lines ?? [];
    if (!b.counted || !lines[0] || lines[0].units <= 0) return { text: "Not counted ¹", units: null as number | null, his: false };
    const tied = lines.filter((l) => l.units === lines[0].units).map((l) => l.artist.name);
    const names = tied.length < 2 ? tied[0] : `${tied.slice(0, -1).join(", ")} and ${tied[tied.length - 1]}`;
    return { text: tied.length > 1 ? `Level: ${names}` : names, units: lines[0].units, his: tied.length === 1 && lines[0].artist.slug === "burna-boy" };
  };
  const fmt = (n: number) => n.toLocaleString("en-US");
  const norm = (x: string | null | undefined) => (x ?? "").replace(/\u00a0/g, " ").replace(/\s+/g, " ").trim();
  const page = async (sp?: Record<string, string>) => {
    const d = document.createElement("div");
    d.innerHTML = renderToStaticMarkup(sp ? await ComparePage({ searchParams: Promise.resolve(sp) }) : await CountryIndexPage());
    return d;
  };
  const rowsOf = (d: Element) =>
    new Map(
      [...d.querySelectorAll(`table.${styles.cbIndexTable} tbody tr`)].map((tr) => [norm(tr.querySelector(`.${styles.countryCode}`)?.textContent), tr] as const),
    );
  const CSS = readFileSync("app/compare/compare.module.css", "utf8");

  it("four columns: Country · {n}, Certified there, Leads, Certified units", async () => {
    const d = await page();
    const n = countryBoards({ includeNigeria: true, includeFeatures: true }).length;
    expect([...d.querySelectorAll(`table.${styles.cbIndexTable} thead th`)].map((th) => norm(th.textContent))).toEqual([`Country · ${n}`, "Certified there", "Leads", "Certified units"]);
  });

  it.each([
    ["features on", undefined, true],
    ["features off", { mode: "country", feat: "0" }, false],
  ] as const)("every row's leader and units are its own body's top line (%s)", async (_l, sp, includeFeatures) => {
    const d = await page(sp);
    const boards = countryBoards({ includeNigeria: true, includeFeatures });
    const rows = rowsOf(d);
    expect(rows.size).toBe(boards.length);
    for (const b of boards) {
      const tr = rows.get(b.code)!;
      const want = leaderOf(b);
      const cell = tr.querySelector(`.${styles.cbLeadsCell}`)!;
      // Desktop reads the name (the phone's "Leads: " word aside) and the units once.
      const name = norm(cell.querySelector(`.${styles.cbLeadName}, .${styles.cbLeadNone}`)?.textContent).replace(/^Leads: /, "");
      expect(name, b.code).toBe(want.text);
      const units = [...cell.querySelectorAll(`.${styles.cbLeadUnits}`)].map((u) => norm(u.textContent));
      expect(units, b.code).toEqual(want.units === null ? [] : [fmt(want.units)]);
      expect(Boolean(cell.querySelector(`.${styles.cbLeadUnitsHis}`)), b.code).toBe(want.his);
    }
  });

  it("the United States names RIAA's leader: never the market total, never RIAA + RIAA Latin", async () => {
    const us = countryBoards({ includeNigeria: true, includeFeatures: true }).find((b) => b.code === "US")!;
    expect(us.programs.length).toBeGreaterThan(1);
    const cell = rowsOf(await page()).get("US")!.querySelector(`.${styles.cbLeadsCell}`)!;
    const shown = norm(cell.querySelector(`.${styles.cbLeadUnits}`)?.textContent);
    expect(shown).toBe(fmt(us.programs[0].lines[0].units));
    expect(shown).not.toBe(fmt(us.units));
    const a = us.programs[0].lines[0].artist.slug;
    const summed = us.programs.reduce((n, p) => n + (p.lines.find((l) => l.artist.slug === a)?.units ?? 0), 0);
    if (summed !== us.programs[0].lines[0].units) expect(shown).not.toBe(fmt(summed));
    // The whole cell is RIAA's top line, read from the engine, never typed (a sweep moves it).
    expect(norm(cell.textContent).replace(/Leads: /, "")).toBe(`${leaderOf(us).text} ${fmt(leaderOf(us).units!)}`);
  });

  it("ties: Greece 'Level: Tyla and Wizkid', the units once; the Czech Republic and Slovakia three ways, never gold", async () => {
    const rows = rowsOf(await page());
    const gr = rows.get("GR")!.querySelector(`.${styles.cbLeadsCell}`)!;
    expect(norm(gr.querySelector(`.${styles.cbLeadName}`)?.textContent)).toBe("Level: Tyla and Wizkid");
    expect(gr.querySelectorAll(`.${styles.cbLeadUnits}`)).toHaveLength(1);
    expect(gr.querySelector("img")).toBeNull();
    for (const code of ["CZ", "SK"]) {
      const cell = rows.get(code)!.querySelector(`.${styles.cbLeadsCell}`)!;
      expect(norm(cell.querySelector(`.${styles.cbLeadName}`)?.textContent), code).toBe("Level: Burna Boy, Rema and Tems");
      expect(cell.querySelector(`.${styles.cbLeadUnitsHis}`), code).toBeNull();
    }
  });

  it("Colombia: 'Not counted ¹', no units and no bar", async () => {
    const tr = rowsOf(await page()).get("CO")!;
    expect(norm(tr.querySelector(`.${styles.cbLeadsCell}`)?.textContent)).toBe("Not counted ¹");
    expect(tr.querySelector(`.${styles.cbLeadUnits}`)).toBeNull();
    expect(tr.querySelector(`.${styles.cbShareFill}`)).toBeNull();
  });

  it("his units are gold exactly where he leads alone; his name stays ink and no row is washed", async () => {
    const d = await page();
    const boards = countryBoards({ includeNigeria: true, includeFeatures: true });
    const his = boards.filter((b) => leaderOf(b).his).map((b) => b.code);
    expect(his.length).toBeGreaterThan(0);
    const gold = [...d.querySelectorAll(`.${styles.cbLeadUnitsHis}`)].map((u) => norm(u.closest("tr")!.querySelector(`.${styles.countryCode}`)?.textContent));
    expect(gold.sort()).toEqual([...his].sort());
    const at = (m: string | null) => m === null || /min-width: 901px/.test(m);
    expect(winning(CSS, ".cbLeadUnitsHis", "color", at)).toBe("var(--gold)");
    expect(winning(CSS, ".cbLeadName", "color", at)).toBe("var(--text)");
    expect(winning(CSS, ".cbLeadUnits", "color", at)).toBe("var(--text-muted)");
    for (const r of rules(CSS).filter((x) => /\.cbIndexTable[^{]*tr\b/.test(x.selector))) expect(r.body, r.selector).not.toMatch(/--gold-wash/);
  });

  it("each market's bar is its share of the largest, from the same boards, never under 2px, in --other", async () => {
    const d = await page();
    const boards = countryBoards({ includeNigeria: true, includeFeatures: true });
    const largest = Math.max(...boards.filter((b) => b.counted).map((b) => b.units));
    const rows = rowsOf(d);
    for (const b of boards.filter((x) => x.counted)) {
      const fill = rows.get(b.code)!.querySelector(`.${styles.cbShareFill}`)!;
      // jsdom drops a max() it cannot parse, so read the attribute as served.
      const m = (fill.getAttribute("style") ?? "").match(/width:\s*max\(2px,\s*([\d.e-]+)%\)/);
      expect(m, b.code).not.toBeNull();
      expect(Number(m![1]), b.code).toBeCloseTo((b.units / largest) * 100, 6);
    }
    const sk = boards.find((b) => b.code === "SK")!;
    expect((sk.units / largest) * 100 * 1.6).toBeLessThan(2); // under 2px of a 160px track: the floor draws it
    expect(winning(CSS, ".cbShareFill", "background", (m) => m === null)).toBe("var(--other)");
    expect(winning(CSS, ".cbShare", "width", (m) => m === null)).toBe("160px");
    expect(winning(CSS, ".cbShare", "width", (m) => m === null || /max-width: 900px/.test(m))).toBe("96px");
  });

  it("every leader's face sits in a <picture>, so a prefetch fetches none", async () => {
    const faces = [...(await page()).querySelectorAll(`.${styles.cbLeadsCell} img`)];
    expect(faces.length).toBeGreaterThan(0);
    for (const img of faces) expect(img.closest("picture"), img.getAttribute("src") ?? "").not.toBeNull();
  });

  it("fix 53: the lede, both numbers derived", async () => {
    for (const [sp, includeFeatures] of [[undefined, true], [{ mode: "country", feat: "0" }, false]] as const) {
      const lede = norm((await page(sp)).querySelector(`.${styles.lede}`)?.textContent);
      const n = countryBoards({ includeNigeria: true, includeFeatures }).length;
      expect(lede).toBe(
        `Who leads where — the ${n} countries where the board's ${numberWord(comparableArtists.length).toLowerCase()} artists hold a certification, the artist on top in each, and the certified units its priced certifications add up to.`,
      );
    }
    // The index's own lead paragraph is unchanged (fix 47).
    expect(norm((await page()).querySelector(`.${styles.cbIndexLead}`)?.textContent)).toMatch(/^\d+ countries, [\d,]+ certifications — a record two artists share counted once — /);
  });

  it("negative controls: the live index had three cells and the old lede", () => {
    // live/in.html (burnaboystats.com, 8 Oct 2026): the UK row as served.
    const live =
      '<table><tbody><tr role="row"><td role="cell" class="compare-module__-ZWgpW__cbNameCell"><a class="compare-module__-ZWgpW__cbCountryLink" href="/compare/in/united-kingdom"><span class="compare-module__-ZWgpW__flag" aria-hidden="true">🇬🇧</span><span class="compare-module__-ZWgpW__cbCountryName">United Kingdom</span><span class="compare-module__-ZWgpW__countryCode">UK</span></a></td><td role="cell" class="compare-module__-ZWgpW__cbMetaCell"><span class="compare-module__-ZWgpW__cbCoverage">17<!-- --> artist<!-- -->s<!-- --> · <!-- -->93<!-- --> plaque<!-- -->s<!-- --> · <!-- -->BPI</span></td><td role="cell" class="compare-module__-ZWgpW__tdNum compare-module__-ZWgpW__cbUnitsCell"><span class="compare-module__-ZWgpW__units compare-module__-ZWgpW__unitsLead">41,420,000</span><span class="compare-module__-ZWgpW__cbGo" aria-hidden="true">→</span></td></tr></tbody></table>';
    const d = document.createElement("div");
    d.innerHTML = live;
    expect(d.querySelectorAll("td")).toHaveLength(3);
    expect(d.textContent).not.toContain("Burna Boy");
    const lede = "The rest of this page asks who has more. This asks who has more <em>where</em> — one market, every artist, each plaque priced at the threshold its country&#x27;s page names.";
    expect(lede).not.toMatch(/Who leads where/);
  });
});
