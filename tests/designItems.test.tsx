import { renderToStaticMarkup } from "react-dom/server";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { readFileSync } from "node:fs";
import { join } from "node:path";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/certifications",
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
import PairPage from "../app/compare/[pair]/page";
import { DAI_DAI_OG_PILL, daiDaiOgId, ogStats, DAYS_AT_NO1 } from "../app/dai-dai/ogId";
import { ogId, cardUrl } from "../app/lib/og-image";
import { garage, totalValueUsd } from "../app/data/cars";
import { carDescription, rankLabel, rankText, valueRank } from "../app/lib/garage";
import MobileCerts from "../app/components/MobileCerts";
import MobileApi from "../app/components/MobileApi";
import CopyButton from "../app/components/CopyButton";
import { performedCountries } from "../app/data/performedCountries";
import type { Country, Release } from "../app/data/certifications";
import { afrobeatsArtists, certCount, countryCount, countryMeta, type AfroArtist } from "../app/data/afrobeats";

/**
 * The design items Paul approved on 24 Sep 2026 ("all with your suggestions"),
 * each held to what it was approved as. Where a string changed, the line the
 * site shipped until then is kept verbatim as the negative control.
 */

const ROOT = join(__dirname, "..");
const read = (f: string) => readFileSync(join(ROOT, f), "utf8");
const text = (h: string) => h.replace(/<[^>]+>/g, " ").replace(/&amp;/g, "&").replace(/\s+/g, " ");
const h1s = (h: string) => [...h.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map((m) => text(m[1]).trim());

// ── NPD-03 ──────────────────────────────────────────────────────────────────
describe("NPD-03: a pair page's h1 names the pair", () => {
  it("/compare/asake-vs-tems: h1 'Asake vs Tems', the shared title kept as its kicker", async () => {
    const h = renderToStaticMarkup(await PairPage({ params: Promise.resolve({ pair: "asake-vs-tems" }) }));
    expect(h1s(h)).toEqual(["Asake vs Tems"]);
    expect(text(h)).toContain("Certified units, compared");
  });

  it("every one of the 120 pairs names its own pair, once", async () => {
    const { allPairs, pairSlug } = await import("../app/lib/comparePairs");
    const seen = new Set<string>();
    for (const [a, b] of allPairs()) {
      const h = renderToStaticMarkup(await PairPage({ params: Promise.resolve({ pair: pairSlug(a, b) }) }));
      const one = h1s(h);
      expect(one.length, pairSlug(a, b)).toBe(1);
      expect(one[0]).toBe(`${a.name} vs ${b.name}`);
      seen.add(one[0]);
    }
    expect(seen.size).toBe(120);
  });

  it("/compare itself is unchanged", async () => {
    const h = renderToStaticMarkup(await ComparePage({ searchParams: Promise.resolve({}) }));
    expect(h1s(h)).toEqual(["Certified units, compared"]);
    expect(text(h)).toContain("Certifications › Compare");
  });

  it("negative control: the h1 all 120 pair pages shipped until 24 Sep 2026", () => {
    const SHIPPED_PAIR_H1 = "Certified units, compared";
    expect(SHIPPED_PAIR_H1).not.toBe("Asake vs Tems");
  });
});

// ── NPD-04 ──────────────────────────────────────────────────────────────────
describe("NPD-04: the Dai Dai card's pill says Performed, and the card re-versions", () => {
  const SHIPPED_PILL_UNTIL_2026_09_24 = "Live · World Cup Final · 19 July";
  const ROUTE = read("app/dai-dai/opengraph-image.tsx");

  it("the card prints the pill constant, and the shipped words are gone", () => {
    expect(DAI_DAI_OG_PILL).toBe("Performed · World Cup Final · 19 July");
    expect(ROUTE).toContain("{DAI_DAI_OG_PILL}");
    expect(ROUTE).not.toContain(SHIPPED_PILL_UNTIL_2026_09_24);
  });

  it("the pill is in the id: the card's URL moved when its words did", () => {
    const idWith = (pill: string) => ogId([...ogStats.map((s) => s.v), DAYS_AT_NO1, cardUrl("/dai-dai"), pill].join("-"));
    expect(daiDaiOgId).toBe(idWith(DAI_DAI_OG_PILL));
    expect(daiDaiOgId).not.toBe(idWith(SHIPPED_PILL_UNTIL_2026_09_24));
    // …and not the id it had before the pill joined it at all.
    expect(daiDaiOgId).not.toBe(ogId([...ogStats.map((s) => s.v), DAYS_AT_NO1, cardUrl("/dai-dai")].join("-")));
  });
});

// ── NPD-05 ──────────────────────────────────────────────────────────────────
describe("NPD-05: tied cars share a rank", () => {
  const SHIPPED_DESCRIPTION_UNTIL_2026_09_24 = (c: (typeof garage)[number]) =>
    `${c.make}: ranked ${c.rank} of ${garage.length} in Burna Boy's garage (joint with ${c.jointWith} others)`;

  it("the $1,000,000 cars are all 3rd and the $700,000 cars all 8th (competition ranking)", () => {
    const at = (usd: number) => garage.filter((c) => c.valueUsd === usd);
    expect(at(1_000_000).length).toBe(5);
    expect(at(700_000).length).toBe(3);
    for (const c of at(1_000_000)) {
      expect(valueRank(c), c.slug).toBe(3);
      expect(rankText(c)).toBe("joint 3rd");
      expect(rankLabel(valueRank(c))).toBe("03");
    }
    for (const c of at(700_000)) {
      expect(valueRank(c), c.slug).toBe(8);
      expect(rankText(c)).toBe("joint 8th");
    }
  });

  it("every printed rank is the place of the first car at that value", () => {
    for (const c of garage) {
      const first = garage.findIndex((o) => o.valueUsd === c.valueUsd) + 1;
      expect(valueRank(c), c.slug).toBe(first);
      if (!c.jointWith) expect(rankText(c)).toBe(String(c.rank));
    }
  });

  it("order, positions and the garage total are unchanged", () => {
    garage.forEach((c, i) => expect(c.rank).toBe(i + 1));
    for (let i = 1; i < garage.length; i++) expect(garage[i - 1].valueUsd).toBeGreaterThanOrEqual(garage[i].valueUsd);
    expect(totalValueUsd).toBe(17_540_000);
  });

  it("a tied car's description says 'joint 3rd', not its place", () => {
    const tied = garage.filter((c) => c.jointWith > 0);
    for (const c of tied) {
      expect(carDescription(c)).toContain(`ranked ${rankText(c)} of ${garage.length}`);
      expect(carDescription(c)).not.toContain(SHIPPED_DESCRIPTION_UNTIL_2026_09_24(c).split(": ")[1]);
    }
    // Negative control: the shipped line for the 7th-placed car did say "ranked 7".
    const seventh = garage[6];
    expect(seventh.jointWith).toBeGreaterThan(0);
    expect(SHIPPED_DESCRIPTION_UNTIL_2026_09_24(seventh)).toContain("ranked 7 of");
    expect(carDescription(seventh)).toContain("ranked joint 3rd of");
  });

  it("the pages print the shared rank, not the place", () => {
    const page = read("app/records/cars/[car]/page.tsx");
    const index = read("app/records/cars/page.tsx");
    const og = read("app/records/cars/[car]/opengraph-image.tsx");
    for (const src of [page, index, og]) expect(src).not.toMatch(/rankLabel\((car|c)\.rank\)/);
    expect(page).not.toContain("Position by value");
    expect(og).toMatch(/\$\{car \? valueRank\(car\) : ""\}/);
  });
});

// ── NPD-06 and C-05 (phone) ─────────────────────────────────────────────────
const propsFor = (a: AfroArtist) => {
  const releases: Release[] = a.releases.map((r) => ({
    title: r.title,
    certs: r.certs.map((c) => ({ c: c.c, level: c.level, ...(c.x ? { x: c.x } : {}) })),
  }));
  const countries: Record<string, Country> = Object.fromEntries(
    [...new Set(a.releases.flatMap((r) => r.certs.map((c) => c.c)))].map((code) => [code, countryMeta(code)]),
  );
  return {
    releases,
    albums: releases.filter((_, i) => a.releases[i].kind === "Albums"),
    history: [],
    countries,
    total: certCount(a),
    countryCount: countryCount(a),
    covers: Object.fromEntries(a.releases.map((r) => [r.title, r.cover])),
    portraitSlug: a.slug,
    backHref: "/afrobeats",
    backLabel: a.name,
    subject: a.name,
    showActionBar: false,
  };
};
const withAlbums = afrobeatsArtists.find((a) => a.swept && a.releases.some((r) => r.kind === "Albums" && r.certs.length) && a.releases.some((r) => r.kind !== "Albums" && r.certs.length))!;

describe("NPD-06: the phone's most-certified list labels its two blocks", () => {
  afterEach(() => {
    window.history.replaceState(null, "", "/");
  });

  it(`${withAlbums.name}: 'Albums' then 'Songs', each numbered from 01`, () => {
    const { container } = render(<MobileCerts {...propsFor(withAlbums)} />);
    const labels = [...container.querySelectorAll('[class*="blockLabel"]')].map((e) => e.textContent);
    expect(labels).toEqual(["Albums", "Songs"]);
    // Walk the list in order: the rank restarts at 01 after each label.
    const seq: string[] = [];
    for (const el of container.querySelectorAll('[class*="blockLabel"], [class*="rank"]')) {
      if ((el.className as string).includes("blockLabel")) seq.push(`#${el.textContent}`);
      else seq.push(el.textContent ?? "");
    }
    const songsAt = seq.indexOf("#Songs");
    expect(seq[1]).toBe("01");
    expect(seq[songsAt + 1]).toBe("01");
  });

  it("negative control: one running count, as shipped, would number the first song after the albums", () => {
    const albumRows = propsFor(withAlbums).albums.filter((r) => r.certs.length).length;
    expect(String(albumRows + 1).padStart(2, "0")).not.toBe("01");
  });
});

describe("C-05 (phone): the certifications list has an empty state", () => {
  afterEach(() => {
    window.history.replaceState(null, "", "/");
  });

  it("a #release= that names nothing: message, and Clear filters clears the focus", async () => {
    window.history.replaceState(null, "", "/certifications#release=Nope");
    render(<MobileCerts {...propsFor(withAlbums)} />);
    expect(await screen.findByText("Nothing matches these filters.")).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Clear filters" }));
    await waitFor(() => expect(screen.queryByText("Nothing matches these filters.")).toBeNull());
    expect(window.location.hash).toBe("");
    expect(screen.queryByText(/Showing every certification for/)).toBeNull();
  });

  it("a focus plus a tier that match nothing: Clear filters drops both", async () => {
    const a = withAlbums;
    const target = a.releases.find((r) => r.certs.length && r.certs.every((c) => c.level !== "Diamond"))!;
    const hasDiamond = a.releases.some((r) => r.certs.some((c) => c.level === "Diamond"));
    window.history.replaceState(null, "", `/certifications#release=${encodeURIComponent(target.title)}`);
    render(<MobileCerts {...propsFor(a)} />);
    if (hasDiamond) {
      fireEvent.click(screen.getAllByRole("button").find((b) => /^Diamond \d+$/.test(b.textContent ?? ""))!);
      expect(await screen.findByText("Nothing matches these filters.")).toBeInTheDocument();
      fireEvent.click(screen.getByRole("button", { name: "Clear filters" }));
      await waitFor(() => expect(screen.queryByText("Nothing matches these filters.")).toBeNull());
      expect(window.location.hash).toBe("");
    }
  });

  it("no empty state while something matches", () => {
    render(<MobileCerts {...propsFor(withAlbums)} />);
    expect(screen.queryByText("Nothing matches these filters.")).toBeNull();
  });
});

// ── D-14 ────────────────────────────────────────────────────────────────────
describe("D-14: the phone /api attribution has its own Copy button", () => {
  afterEach(() => vi.restoreAllMocks());

  const props = {
    version: "v1",
    lede: "x",
    pills: ["a"],
    endpoints: [],
    downloads: [],
    caveats: [],
    curl: "curl https://burnaboystats.com/api/v1",
    attribution: "Data from Burna Boy Stats — https://burnaboystats.com",
    base: "/api/v1",
  };

  it("sits beside the attribution and copies it", async () => {
    Object.defineProperty(navigator, "clipboard", { value: { writeText: vi.fn(() => Promise.resolve()) }, configurable: true, writable: true });
    const { container } = render(<MobileApi {...props} />);
    const row = container.querySelector('[class*="attrRow"]')!;
    expect(row.textContent).toContain(props.attribution);
    const btn = row.querySelector("button")!;
    expect(btn.textContent).toBe("Copy");
    expect(btn.querySelector("[aria-live]")).not.toBeNull();
    await userEvent.click(btn);
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(props.attribution);
    await waitFor(() => expect(btn).toHaveTextContent("Copied ✓"));
  });

  it("falls back to the textarea route when the Clipboard API refuses", async () => {
    Object.defineProperty(navigator, "clipboard", { value: { writeText: vi.fn(() => Promise.reject(new Error("NotAllowedError"))) }, configurable: true, writable: true });
    const exec = vi.fn(() => true);
    Object.defineProperty(document, "execCommand", { value: exec, configurable: true, writable: true });
    render(<CopyButton value="hello" fallback />);
    const btn = screen.getByRole("button");
    btn.focus();
    await userEvent.click(btn);
    await waitFor(() => expect(btn).toHaveTextContent("Copied ✓"));
    expect(exec).toHaveBeenCalledWith("copy");
    expect(document.querySelector("textarea")).toBeNull(); // cleaned up
    expect(document.activeElement).toBe(btn); // focus comes back
  });

  it("without the opt-in, a refusal still says nothing (the other copy buttons are unchanged)", async () => {
    Object.defineProperty(navigator, "clipboard", { value: { writeText: vi.fn(() => Promise.reject(new Error("NotAllowedError"))) }, configurable: true, writable: true });
    const exec = vi.fn(() => true);
    Object.defineProperty(document, "execCommand", { value: exec, configurable: true, writable: true });
    render(<CopyButton value="hello" />);
    const btn = screen.getByRole("button");
    await userEvent.click(btn);
    await waitFor(() => expect(navigator.clipboard.writeText).toHaveBeenCalled());
    expect(exec).not.toHaveBeenCalled();
    expect(btn).toHaveTextContent("Copy");
  });
});

// ── C-12 ────────────────────────────────────────────────────────────────────
describe("C-12: St Kitts & Nevis and Antigua & Barbuda are both reachable on the map", () => {
  const SHIPPED = { kitts: { x: 296.5, y: 177.1 }, antigua: { x: 298.8, y: 177.8 } };
  const R = 3.2;
  const STROKE = 1;
  const m = (name: string) => performedCountries.find((c) => c.name === name)!.marker!;
  const dist = (p: { x: number; y: number }, q: { x: number; y: number }) => Math.hypot(p.x - q.x, p.y - q.y);

  it("the two dots, stroke included, no longer overlap", () => {
    expect(dist(m("St Kitts & Nevis"), m("Antigua & Barbuda"))).toBeGreaterThanOrEqual(2 * (R + STROKE / 2) - 0.01);
  });

  it("they keep their true relative direction (Antigua east and a touch south of St Kitts)", () => {
    const angle = (p: { x: number; y: number }, q: { x: number; y: number }) => (Math.atan2(q.y - p.y, q.x - p.x) * 180) / Math.PI;
    expect(Math.abs(angle(m("St Kitts & Nevis"), m("Antigua & Barbuda")) - angle(SHIPPED.kitts, SHIPPED.antigua))).toBeLessThan(1);
  });

  it("negative control: at the shipped positions St Kitts' centre lay inside Antigua's dot", () => {
    expect(dist(SHIPPED.kitts, SHIPPED.antigua)).toBeLessThan(R);
  });

  it("no other marker moved", () => {
    const others = Object.fromEntries(performedCountries.filter((c) => c.marker && !["St Kitts & Nevis", "Antigua & Barbuda"].includes(c.name)).map((c) => [c.name, c.marker]));
    expect(others).toMatchObject({
      "Curaçao": { x: 273.5, y: 194 },
      Barbados: { x: 303, y: 190.8 },
      Dominica: { x: 299.2, y: 183.4 },
      "Saint Lucia": { x: 299.7, y: 188.4 },
    });
  });
});

// ── D-06, NPD-07, NPD-08: CSS held by rule ──────────────────────────────────
const decls = (css: string, selector: string) => {
  const out: Record<string, string> = {};
  const clean = css.replace(/\/\*[\s\S]*?\*\//g, "");
  for (const m of clean.matchAll(/([^{}]+)\{([^{}]*)\}/g)) {
    if (m[1].trim() !== selector) continue;
    for (const d of m[2].split(";")) {
      const i = d.indexOf(":");
      if (i > 0) out[d.slice(0, i).trim()] = d.slice(i + 1).trim();
    }
  }
  return out;
};

describe("D-06: the region row headers are set in Anton 17px", () => {
  for (const f of ["app/music/listeners/listeners.module.css", "app/records/tours/map/map.module.css"]) {
    it(f, () => {
      const d = decls(read(f), ".table th.regionCell");
      expect(d["font-family"]).toContain("var(--font-anton)");
      expect(d["font-size"]).toBe("17px");
      expect(d["vertical-align"]).toBe("top");
      expect(d["color"]).toBe("var(--text)");
    });
  }
  it("negative control: the shipped bare .regionCell is outranked by '.table th'", () => {
    const shipped = `.table th { font-size: 11px; }\n.regionCell { font-size: 17px; }`;
    expect(decls(shipped, ".table th.regionCell")["font-size"]).toBeUndefined();
  });
});

describe("NPD-07: the home closer is one gold on paper", () => {
  it("the gradient's warm stops are the band tokens, flat #945e00 in light and the old stops in dark", () => {
    const d = decls(read("app/page.module.css"), ".closer");
    expect(d["background-image"]).toContain("var(--gold-band-a) 76%, var(--gold-band-b) 100%");
    expect(d["background-image"]).not.toMatch(/#f08a12|#d96c0c/);
    const g = read("app/globals.css");
    expect(g).toContain("--gold-band-a: light-dark(#945e00, #f08a12);");
    expect(g).toContain("--gold-band-b: light-dark(#945e00, #d96c0c);");
    expect(g).toContain("--ink-on-gold: light-dark(#ffffff, #14100a);");
    // The corner sheen fades out on paper (it put the white kicker at 3.25:1)
    // and is the literal it replaced on black.
    expect(d["background-image"]).toContain("var(--gold-band-sheen)");
    expect(d["background-image"]).not.toContain("rgba(255, 246, 214, 0.5)");
    expect(g).toContain("--gold-band-sheen: light-dark(transparent, rgba(255, 246, 214, 0.5));");
  });
});

describe("NPD-08: the board's tier badge has a solid dark pill", () => {
  it(".topBadge's ground is the (photo-pinned dark) page ground, opaque", () => {
    expect(decls(read("app/afrobeats/afrobeats.module.css"), ".topBadge")["background"]).toBe("var(--bg)");
    // Every tile that carries one is a .photoTile, which pins the dark palette.
    const page = read("app/afrobeats/page.tsx");
    expect(page).toMatch(/className=\{`\$\{styles\.tile\} photoTile`\}[\s\S]{0,600}styles\.topBadge/);
  });
});

// ── NPD-01 ──────────────────────────────────────────────────────────────────
describe("NPD-01: faded text fades by one token, and only as far as AA allows", () => {
  // Every rule that faded a muted or gold ink under 4.5:1 on the live site on
  // 24 Sep 2026 (axe color-contrast, 42 templates × 390/1280 × both themes),
  // with the opacity it shipped with — the negative controls.
  const FADED: [string, string, string][] = [
    ["app/updates/updates.module.css", ".chipCount", "0.75"],
    ["app/records/tours/revenue/revenue.module.css", ".chipCount", "0.7"],
    ["app/search/search.module.css", ".chipCount", "0.7"],
    ["app/records/firsts/firsts.module.css", ".jumpCount", "0.7"],
    ["app/live-charts/liveCharts.module.css", ".platformCardCadence", "0.75"],
    ["app/timeline/timeline.module.css", ".entryMore", "0.8"],
    ["app/certifications/certifications.module.css", ".yearCount", "0.7"],
    ["app/certifications/certifications.module.css", ".badgeProgram", "0.85"],
    ["app/components/mobileCerts.module.css", ".chipCount", "0.7"],
    ["app/music/[song]/song.module.css", ".pickYear", "0.65"],
    ["app/music/[song]/song.module.css", ".peakName", "0.75"],
    ["app/music/[song]/song.module.css", ".certCountry", "0.75"],
    ["app/music/albums/[album]/album.module.css", ".trackMore", "0.75"],
    ["app/afrobeats/afrobeats.module.css", ".cadence", "0.85"],
    ["app/components/mobileAfrobeatsHub.module.css", ".cadence", "0.85"],
    ["app/records/cars/cars.module.css", ".mFormerRow", "0.75"],
  ];
  for (const [f, sel, shipped] of FADED) {
    it(`${f} ${sel}: opacity is var(--text-fade), not ${shipped}`, () => {
      expect(decls(read(f), sel)["opacity"]).toBe("var(--text-fade)");
    });
  }
  it("the cars' no-longer-counted rows: the rule that wins (the later .formerRow) uses the token", () => {
    const clean = read("app/records/cars/cars.module.css").replace(/\/\*[\s\S]*?\*\//g, "");
    const all = [...clean.matchAll(/(^|\})\s*\.formerRow\s*\{([^}]*)\}/g)].map((m) => /opacity:\s*([^;]+);/.exec(m[2])?.[1]?.trim());
    expect(all.filter(Boolean).at(-1)).toBe("var(--text-fade)");
  });
  it("the token: 0.9 on black, 1 on paper, and a photo tile resolves the dark value", () => {
    const g = read("app/globals.css").replace(/\/\*[\s\S]*?\*\//g, "");
    // Declared twice: in the token-declaring ":root, .photoTile" rule (which
    // nests rules, so it is found by position, not by brace-matching) and in
    // the light override block.
    const values = [...g.matchAll(/--text-fade:\s*([^;]+);/g)].map((m) => m[1].trim());
    expect(values).toEqual(["0.9", "1"]);
    expect(g.indexOf("--text-fade: 0.9")).toBeGreaterThan(g.indexOf(":root,"));
    const light = [...g.matchAll(/:root\[data-theme="light"\]\s*\{([^}]*)\}/g)].map((m) => m[1]).join("\n");
    expect(/--text-fade:\s*([^;]+);/.exec(light)![1]).toBe("1");
  });
  it("negative control: the shipped rules did not use it", () => {
    const shipped = ".chipCount { font-family: var(--font-mono), monospace; font-size: 11px; opacity: 0.75; }";
    expect(decls(shipped, ".chipCount")["opacity"]).not.toBe("var(--text-fade)");
  });
});

// ── NPD-02 ──────────────────────────────────────────────────────────────────
describe("NPD-02: links inside running prose are underlined", () => {
  it("globals.css underlines a link in a paragraph: 1px, 2px offset, its own colour", () => {
    const d = decls(read("app/globals.css"), ":where(p:not(footer p)) a:where(:not(.btn))");
    expect(d["text-decoration-line"]).toBe("underline");
    expect(d["text-decoration-thickness"]).toBe("1px");
    expect(d["text-underline-offset"]).toBe("2px");
    expect(d["text-decoration-color"]).toBeUndefined(); // currentColor
  });
  it("the two prose links that switched it off no longer do (unmerge page, phone board foot)", () => {
    expect(decls(read("app/analysis/spotify-unmerge/unmerge.module.css"), ".link")["text-decoration"]).toBeUndefined();
    expect(decls(read("app/components/mobileAfrobeatsHub.module.css"), ".foot a")["text-decoration"]).toBeUndefined();
    // Negative control: the phone board's shipped rule.
    expect(decls(".foot a { color: var(--gold); text-decoration: none; }", ".foot a")["text-decoration"]).toBe("none");
  });
  it("negative control: the shipped rule for every link was no decoration at all", () => {
    const shipped = "a {\n  color: inherit;\n  text-decoration: none;\n}";
    expect(decls(shipped, ":where(p:not(footer p)) a:where(:not(.btn))")["text-decoration-line"]).toBeUndefined();
  });
});

// ── A-34 (tail) ─────────────────────────────────────────────────────────────
describe("A-34: the methodology's contrast sentence covers both themes", () => {
  const SHIPPED = "text meets AA contrast\n            against the dark ground";
  it("says both themes, and no longer only the dark ground", () => {
    const src = read("app/methodology/page.tsx");
    expect(src.replace(/\s+/g, " ")).toContain("text meets AA contrast in both the dark and the light theme");
    expect(src).not.toContain(SHIPPED);
    expect(src.replace(/\s+/g, " ")).not.toContain("AA contrast against the dark ground");
  });
});
