import { readFileSync } from "node:fs";
import { join } from "node:path";
import { renderToStaticMarkup } from "react-dom/server";
import { render, fireEvent } from "@testing-library/react";

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

import MethodologyPage from "../app/methodology/page";
import DaiDaiPageES from "../app/dai-dai/es/page";
import SongPage from "../app/music/[song]/page";
import MusicPage from "../app/music/page";
import ArtistPage from "../app/afrobeats/[artist]/page";
import CertificationsPage from "../app/certifications/page";
import StatCardMaker from "../app/components/StatCardMaker";
import MobileStatCards from "../app/components/MobileStatCards";
import { COUNTRIES, certSources, certIssuerIn, allItems, certHistory } from "../app/data/certifications";
import { allChartItems } from "../app/data/charts";
import { ceremonies } from "../app/data/awards";
import { albums } from "../app/data/albums";
import { liveMoments } from "../app/data/tours";
import { CERT_THRESHOLDS } from "../app/data/certThresholds";
import { firstGroups } from "../app/data/firsts";
import { revenueShows } from "../app/data/tourRevenue";
import { updates } from "../app/data/updates";
import { songs, songPageCount, daiDaiStoryPage } from "../app/data/songs";
import { afrobeatsArtists } from "../app/data/afrobeats";
import { allPairs, pairSlug, compareWithLinks } from "../app/lib/comparePairs";
import { exploreFor } from "../app/lib/links";
import { sectionLinksEs } from "../app/components/KeepExploring";
import { buildSearchDocs } from "../app/lib/buildSearchDocs";
import { coverFor } from "../app/lib/covers";
import { getStatCards } from "../app/lib/statCards";

/**
 * The twelve owner rulings of 24 Sep 2026 ("from 1 to 12 fixes, i agree with
 * you in all"), on the items the full-site debug left for Paul. Each negative
 * control is a string the live site shipped that day.
 *
 * Two rulings are held where their surfaces were already tested: 3 (the home
 * No. 1s button) in tests/homeScoreboardParity.test.ts, and 12 (twitter:creator)
 * in tests/siteDebugA11y.test.tsx.
 */

const read = (p: string) => readFileSync(join(process.cwd(), p), "utf8");
const doc = (html: string) => new DOMParser().parseFromString(html, "text/html");
const textOf = (html: string) => (doc(html).body.textContent ?? "").replace(/\s+/g, " ");

// ── 1. NPC-02 / A-13: the Colombian label plaque ─────────────────────────────
describe("the Colombian Gold is Sony Music Colombia's, and the rule says so", () => {
  it("names one issuer for the plaque, and keeps Pro Música Colombia as the register", () => {
    expect(certIssuerIn("CO")).toBe("Sony Music Colombia");
    // The US plaques name two programmes, not one issuer: the body stays.
    expect(certIssuerIn("US")).toBe("RIAA");
    // The register link is untouched.
    expect(COUNTRIES.CO.body).toBe("Pro Musica Colombia");
    expect(COUNTRIES.CO.url).toBe("https://pro-musica.co/");
  });

  it("the /certifications sources line and the search entry name the issuer", () => {
    // Shipped: "…TCSN (Nigeria), Pro-Música Brasil, Pro Musica Colombia, IFPI (Denmark, …"
    expect(certSources()).not.toContain("Pro-Música Brasil, Pro Musica Colombia, IFPI (");
    expect(certSources()).toContain("Sony Music Colombia");
    const co = buildSearchDocs().find((d) => d.path === "/certifications#country=CO");
    expect(co?.description).toBe("Certifications awarded in Colombia by Sony Music Colombia.");
    // Shipped: "Certifications awarded in Colombia by Pro Musica Colombia."
    expect(co?.description).not.toBe("Certifications awarded in Colombia by Pro Musica Colombia.");
  });

  it("the methodology rule states the exception it has always had", () => {
    const t = textOf(renderToStaticMarkup(<MethodologyPage />));
    const RULE = "A certification is only counted once it appears in the awarding body's own searchable database.";
    expect(t).toContain(RULE);
    // The rule as it shipped ended there, over a plaque no register lists.
    expect(t).toContain(
      `${RULE} The one exception is a market with no current public register, where the label's own plaque stands: “Dai Dai”'s Gold in Colombia, issued by Sony Music Colombia.`,
    );
  });

  it("every other copy of the rule carries the same exception", () => {
    expect(read("app/curator/page.tsx")).toContain("(or, in a market with no current public register, on the label's own plaque)");
    expect(read("app/lib/statCards.ts")).toContain("or, in a market with no current public register, on the label's own plaque.");
    expect(read("app/certifications/page.tsx").replace(/\s+/g, " ")).toContain(
      "(or, in a market with no current public register, from the label&apos;s own plaque)",
    );
    expect(read("app/api/v1/certifications/route.ts")).toContain("in a market with no current public register, the label's own plaque");
  });
});

// ── 2. NPC-03: the Stade de France is a headline, not a sell-out ────────────
describe("the Stade de France first", () => {
  const all = firstGroups.flatMap((g) => g.items);
  const row = revenueShows.find((r) => r.artist === "Burna Boy" && r.venue === "Stade de France")!;

  it("is a headline, dated, with the Boxscore gross read off the row", () => {
    const first = all.find((f) => /Stade de France/.test(f.title));
    expect(first?.title).toBe("First African artist to headline the Stade de France");
    expect(first?.text).toBe(`The Paris stadium, April 2025 — a $${(row.revenue / 1e6).toFixed(2)}M night.`);
    expect(first?.text).toContain("$4.53M");
    expect(row.tickets).toBe("43,881");
  });

  it("refuses the claim the site shipped, on /records/firsts and /timeline", () => {
    const shown = [JSON.stringify(all), read("app/data/timeline.ts")];
    for (const src of shown) {
      expect(src).not.toContain("sell out the Stade de France");
      expect(src).not.toContain("80,000-capacity Paris stadium");
    }
    expect(read("app/data/timeline.ts")).toContain("first African artist to headline the Stade de France");
  });

  it("/records/tours prints the same gross, read off the same row", () => {
    const moment = liveMoments.find((m) => m.title === "Stade de France, Paris");
    expect(moment?.text).toBe(
      `First African artist to headline the Stade de France (April 2025) — a $${(row.revenue / 1e6).toFixed(2)}M gross.`,
    );
    // The gross is derived, not a second typed copy.
    expect(read("app/data/tours.ts")).not.toContain("— a $4.53M gross.");
  });
});

// ── 4. A-14: IFPI Sverige ───────────────────────────────────────────────────
describe("Sweden's certifier is IFPI Sverige everywhere", () => {
  it("in the ledger, the thresholds, the feed and the search index", () => {
    expect(COUNTRIES.SE.body).toBe("IFPI Sverige");
    // GLF's Grammotex is still where the plaques are read.
    expect(COUNTRIES.SE.url).toContain("grammotex.se");
    expect(CERT_THRESHOLDS.SE.body.startsWith("IFPI Sverige")).toBe(true);
    expect(CERT_THRESHOLDS.SE.body).not.toContain("GLF");
    for (const u of updates) {
      expect(u.text).not.toContain("(GLF, Platinum");
      expect(u.text).not.toContain("IFPI Sweden");
    }
    const docs = JSON.stringify(buildSearchDocs());
    // Shipped: "Certifications awarded in Sweden by GLF." and "priced at GLF's own thresholds".
    expect(docs).not.toContain("Certifications awarded in Sweden by GLF.");
    expect(docs).not.toContain("priced at GLF's own thresholds");
    expect(docs).toContain("Certifications awarded in Sweden by IFPI Sverige.");
  });
});

// ── 5. A-18: the Deezer line ────────────────────────────────────────────────
describe("the Dai Dai Deezer line is dated and sourced", () => {
  const EN = read("app/dai-dai/page.tsx");
  const ES = read("app/dai-dai/es/page.tsx");

  it("drops the unsourced 23 in both editions", () => {
    expect(EN).not.toContain("charting in 57 countries and No. 1 in 23 of them");
    expect(ES).not.toContain("y el número 1 en 23 de ellos");
  });

  it("keeps the dated No. 13 peak and the 57 countries, in the past tense", () => {
    expect(EN).toContain("Deezer Worldwide Top 100 — its peak, reached on 26 July 2026, when it was charting in 57 countries");
    expect(ES).toContain("en el Deezer Worldwide Top 100 — su pico, alcanzado el 26 de julio de 2026, cuando estaba en las listas de 57 países");
    // The feed entry the peak is read from.
    expect(updates.some((u) => u.date === "2026-07-26" && u.text.includes("Deezer Worldwide Top 100 peak of No. 13, charting in 57 countries"))).toBe(true);
  });
});

// ── 6. A-24: the Spanish edition carries what the English one does ─────────
describe("the Spanish Dai Dai page has the English page's navigation", () => {
  const html = renderToStaticMarkup(<DaiDaiPageES />);
  const d = doc(html);
  const EN = read("app/dai-dai/page.tsx");

  it("has the skip-to-the-numbers button, to a section that exists", () => {
    const skip = [...d.querySelectorAll("a")].find((a) => a.getAttribute("href") === "#numbers");
    expect(skip?.textContent).toBe("Saltar a las cifras");
    expect(d.getElementById("numbers")).not.toBeNull();
  });

  it("has every outro link the English page has", () => {
    const outroHrefs = (src: string) =>
      [...(src.match(/className=\{styles\.outroLinks\}>([\s\S]*?)<\/div>/)?.[1] ?? "").matchAll(/href=(?:"([^"]+)"|\{(\w+)\})/g)].map(
        (m) => m[1] ?? m[2],
      );
    const en = outroHrefs(EN);
    expect(en).toEqual(["/records/charts?song=Dai%20Dai", "/records/africas-biggest", "/music"]);
    const es = outroHrefs(read("app/dai-dai/es/page.tsx"));
    for (const h of en) expect(es).toContain(h);
  });

  it("renders the Keep-exploring rail, translated, with the English page's three cards", () => {
    expect(exploreFor["/dai-dai/es"]).toEqual(exploreFor["/dai-dai"]);
    for (const k of exploreFor["/dai-dai/es"]) expect(sectionLinksEs[k]).toBeDefined();
    const rail = d.querySelector('nav[aria-label="Explora más páginas"]');
    expect(rail?.textContent).toContain("Sigue explorando");
    expect([...(rail?.querySelectorAll("a") ?? [])].map((a) => a.getAttribute("href"))).toEqual(["/live-charts", "/records/charts", "/share"]);
  });

  it("chapter 07 carries the English chapter's facts", () => {
    const t = textOf(html);
    expect(t).toContain("junto a Madonna, BTS y Justin Bieber");
    expect(t).toContain("ante una audiencia global de miles de millones");
    // Shipped: the chapter named only the Ghetto Kids.
    expect(t).not.toContain("en el MetLife Stadium, acompañados en el escenario por los Triplets Ghetto Kids de Uganda.");
  });
});

// ── 7. A-38: fifteen song pages, counted the same way twice ────────────────
describe("the song pages count Dai Dai's story, and link it", () => {
  it("the picker on every song page lists 15, Dai Dai first, to /dai-dai", async () => {
    expect(songPageCount).toBe(songs.length + 1);
    const el = await SongPage({ params: Promise.resolve({ song: songs[0].slug }) });
    const d = doc(renderToStaticMarkup(el));
    const t = (d.body.textContent ?? "").replace(/\s+/g, " ");
    expect(t).toContain(`All ${songPageCount} song pages`);
    // Shipped: "All 14 song pages".
    expect(t).not.toContain(`All ${songs.length} song pages`);
    const picks = [...d.querySelectorAll("a")].filter((a) => /^\/(music\/[^/]+|dai-dai)$/.test(a.getAttribute("href") ?? ""));
    expect(picks[0]?.getAttribute("href")).toBe(daiDaiStoryPage.href);
  });

  it("the /music hub prints the same count", () => {
    const t = textOf(renderToStaticMarkup(<MusicPage />));
    expect(t).toContain(`${songPageCount} pages`);
  });
});

// ── 8. A-49: the crowd claim, scoped to its source ─────────────────────────
describe("/records' crowd tile says whose figures it is", () => {
  it("is the biggest crowd in the Boxscore rows, and says so", () => {
    const top = [...revenueShows].sort((a, b) => b.revenue - a.revenue)[0];
    const tickets = (s: string | undefined) => Number((s ?? "0").replace(/,/g, ""));
    expect(tickets(top.tickets)).toBe(Math.max(...revenueShows.map((r) => tickets(r.tickets))));
    const src = read("app/records/page.tsx");
    expect(src).toContain(`note: "Biggest African crowd in Billboard's box-office figures",`);
    expect(src).not.toContain(`note: "Biggest reported African crowd",`);
  });
});

// ── 9. F-10: Talibans II is Byron Messia's record ──────────────────────────
describe("Talibans II carries one credit, Byron Messia's lead", () => {
  const CREDIT = "Byron Messia ft. Burna Boy";

  it("in the chart row, the certification row and every dated plaque", () => {
    expect(allChartItems.filter((r) => r.title === "Talibans II").map((r) => r.credit)).toEqual([CREDIT]);
    expect(allItems.filter((r) => r.title === "Talibans II").map((r) => r.credit)).toEqual([CREDIT]);
    const log = certHistory.filter((e) => e.title === "Talibans II");
    expect(log.length).toBeGreaterThan(0);
    for (const e of log) expect(e.credit).toBe(CREDIT);
  });

  it("on the award and in the album's tracklist too", () => {
    const works = ceremonies.flatMap((c) => c.noms.map((n) => n.work ?? "")).filter((w) => w.startsWith("Talibans II"));
    expect(works).toEqual([`Talibans II (${CREDIT})`]);
    const tracks = albums.flatMap((a) => a.tracks).filter((t) => t.startsWith("Talibans II"));
    expect(tracks).toEqual([`Talibans II (${CREDIT})`]);
  });

  it("keeps its sleeve on /certifications and /records/charts after the tracklist credit changed", () => {
    // Both pages resolve art through coverFor, which found "Talibans II" in the
    // I Told Them… tracklist while the entry read "(with Byron Messia)" — the
    // live /certifications row shows that sleeve. The full credit line is a
    // bracket key() does not strip, so the row went blank until the tracklist
    // lookup learned to drop it.
    const album = albums.find((a) => a.tracks.includes(`Talibans II (${CREDIT})`))!;
    expect(album.title).toBe("I Told Them…");
    expect(coverFor("Talibans II")).toBe(album.cover);
  });

  it("refuses the credit the site shipped, which read as a record Burna Boy leads", () => {
    // Shipped on /certifications and in the search index: "with Byron Messia".
    const shipped = "with Byron Messia";
    for (const f of ["app/data/certifications.ts", "app/data/awards.ts", "app/data/albums.ts"]) {
      expect(read(f), f).not.toContain(`credit: "${shipped}"`);
      expect(read(f), f).not.toContain(`"Talibans II (${shipped})"`);
    }
    const doc = buildSearchDocs().find((d) => d.title === "Talibans II");
    expect(doc?.description.startsWith(CREDIT)).toBe(true);
    expect(doc?.description.startsWith(shipped)).toBe(false);
  });
});

// ── 10. C-14: /share shares the stat's own page ────────────────────────────
describe("/share links the chosen stat's own page", () => {
  const CARDS = [
    { id: "african-giant", chip: "Certifications", value: "248", label: "certifications", detail: "d", source: "s", href: "/certifications" },
    { id: "dai-dai", chip: "Dai Dai", value: "17", label: "Dai Dai certifications", detail: "d", source: "s", href: "/dai-dai" },
  ];
  const shareHrefs = (root: HTMLElement) =>
    [...root.querySelectorAll("a")]
      .map((a) => a.getAttribute("href") ?? "")
      .filter((h) => h.startsWith("https://x.com/intent/tweet") || h.startsWith("https://wa.me/"));

  it("every real card's page is a plain path, so origin + href is a canonical URL", () => {
    const cards = getStatCards();
    expect(cards.length).toBeGreaterThan(0);
    for (const c of cards) expect(c.href, c.id).toMatch(/^\/[a-z0-9/-]*$/);
    // /share passes the origin, not a finished URL.
    const src = read("app/share/page.tsx");
    expect(src).not.toContain("pageUrl=");
    expect(src.match(/origin=\{CANONICAL_ORIGIN\}/g)).toHaveLength(2);
  });

  it.each([
    ["StatCardMaker", StatCardMaker],
    ["MobileStatCards", MobileStatCards],
  ] as const)("%s", (_, Comp) => {
    const { container, getAllByText } = render(<Comp cards={CARDS} verified="24 September 2026" origin="https://burnaboystats.com" />);
    let hrefs = shareHrefs(container);
    expect(hrefs).toHaveLength(2);
    for (const h of hrefs) expect(decodeURIComponent(h)).toContain("https://burnaboystats.com/certifications");
    fireEvent.click(getAllByText("Dai Dai")[0]);
    hrefs = shareHrefs(container);
    for (const h of hrefs) {
      const url = decodeURIComponent(h);
      expect(url).toContain("https://burnaboystats.com/dai-dai");
      // Shipped: every card shared https://burnaboystats.com/share.
      expect(url).not.toContain("burnaboystats.com/share");
      expect(url).not.toContain("?stat=");
    }
  });
});

// ── 11. E-10: every pair page is linked by its own URL ─────────────────────
describe("every head-to-head page has a direct internal link", () => {
  const canonical = new Set(allPairs().map(([a, b]) => `/compare/${pairSlug(a, b)}`));

  // One link per other artist on the roster (Burna Boy included): fifteen of
  // 120 pairs until 25 Sep 2026, nineteen of 190 since Kizz Daniel, Ruger,
  // Oxlade and Tiwa Savage joined. Derived from the board, so the next
  // artist moves both without an edit here.
  const others = afrobeatsArtists.length; // the board less oneself, plus Burna Boy
  it("the helper links each artist to every other artist, canonical URLs only", () => {
    expect(canonical.size).toBe(((others + 1) * others) / 2);
    for (const a of afrobeatsArtists) {
      const links = compareWithLinks(a.slug);
      expect(links).toHaveLength(others);
      for (const l of links) expect(canonical.has(l.href), `${a.slug} → ${l.href}`).toBe(true);
    }
  });

  it("the board pages link every pair page, in both layouts", async () => {
    const linked = new Set<string>();
    for (const a of afrobeatsArtists) {
      const el = await ArtistPage({ params: Promise.resolve({ artist: a.slug }) });
      const d = doc(renderToStaticMarkup(el));
      const navs = [...d.querySelectorAll(`nav[aria-label="Compare ${a.name} with…"]`)];
      // One in the phone screen, one in the desktop half.
      expect(navs, a.slug).toHaveLength(2);
      for (const nav of navs) {
        const hrefs = [...nav.querySelectorAll("a")].map((x) => x.getAttribute("href")!);
        expect(hrefs, a.slug).toEqual(compareWithLinks(a.slug).map((l) => l.href));
        for (const h of hrefs) linked.add(h);
      }
    }
    expect([...canonical].filter((h) => !linked.has(h))).toEqual([]);
  }, 120_000);

  it("Burna Boy's own ledger, /certifications, carries one per board artist in both layouts", () => {
    const d = doc(renderToStaticMarkup(<CertificationsPage />));
    const navs = [...d.querySelectorAll('nav[aria-label="Compare Burna Boy with…"]')];
    expect(navs).toHaveLength(2);
    const want = compareWithLinks("burna-boy").map((l) => l.href);
    expect(want).toHaveLength(afrobeatsArtists.length);
    for (const h of want) expect(canonical.has(h), h).toBe(true);
    for (const nav of navs) {
      expect(nav.textContent).toContain("Compare with…");
      expect([...nav.querySelectorAll("a")].map((x) => x.getAttribute("href"))).toEqual(want);
    }
  });
});
