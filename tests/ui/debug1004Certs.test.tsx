import { Fragment, isValidElement, type ReactElement, type ReactNode } from "react";
import { render } from "@testing-library/react";
import { renderToStaticMarkup } from "react-dom/server";
import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";

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
import CertificationsPage from "../../app/certifications/page";
import CertViewSwap from "../../app/components/CertViewSwap";
import { afrobeatsArtists, artistBySlug } from "../../app/data/afrobeats";
import { featuredTitlesOf } from "../../app/lib/certUnits";
import {
  ALL_VIEW, certKicker, certTotals, certsInView, creditSwitchable, homeCodeFor, scopeSwitchable, viewKey, viewsOffered,
} from "../../app/lib/certScope";
import { wholePercents } from "../../app/lib/wholePercents";
import { showsHrefFor } from "../../app/lib/showsBoard";
import { SHOWS_LABEL } from "../../app/lib/showsDeepLink";
import mobileStyles from "../../app/components/mobileCerts.module.css";
import artistStyles from "../../app/afrobeats/[artist]/artist.module.css";
import explorerStyles from "../../app/certifications/certifications.module.css";

/**
 * The live debug pass of 4 Oct 2026, PR Y (layout and accessibility), the
 * certifications pages: /certifications and the board's artist pages, both
 * layouts. Each case keeps the string or value the live site shipped as its
 * negative control.
 */

const read = (p: string) => readFileSync(p, "utf8");
const PHONE_CSS = read("app/components/mobileCerts.module.css");
const ARTIST_CSS = read("app/afrobeats/[artist]/artist.module.css");
const GLOBALS = read("app/globals.css");
const at = (url: string) => window.history.replaceState(null, "", url);
afterEach(() => at("/"));
const artistTree = async (slug: string) => ArtistPage({ params: Promise.resolve({ artist: slug }) });
const text = (el: Element | null | undefined) => (el?.textContent ?? "").replace(/\s+/g, " ").trim();
/** The phone screen and the desktop column of a rendered page. */
const layouts = (c: HTMLElement) => ({
  phone: c.querySelector<HTMLElement>(`.${mobileStyles.screen}`)!,
  desktop: [...c.querySelectorAll<HTMLElement>("*")].find((e) => /desktopOnly/.test(e.className)) ?? c,
});

// ── B-01 (must-fix) ─────────────────────────────────────────────────────────
/** Every CertViewSwap in a server-built tree. */
function swaps(node: unknown, out: ReactElement<{ views: Record<string, ReactNode> }>[] = []) {
  if (Array.isArray(node)) node.forEach((n) => swaps(n, out));
  else if (isValidElement(node)) {
    if (node.type === CertViewSwap) out.push(node as ReactElement<{ views: Record<string, ReactNode> }>);
    for (const v of Object.values(node.props as Record<string, unknown>)) swaps(v, out);
  }
  return out;
}
/**
 * A view as the RSC payload delivers it to CertViewSwap: React's Flight
 * serializer flattens a keyless fragment to its children, so an empty one
 * arrives as undefined (the first test below runs the real serializer).
 */
const flight = (v: ReactNode): ReactNode =>
  isValidElement(v) && v.type === Fragment && v.key == null ? flight((v.props as { children?: ReactNode }).children) : v;
const STRIP = "Where the certifications are";

describe("B-01: an empty view's strip survives the RSC boundary as nothing, not as the all-view", () => {
  it("React's own Flight serializer: `<></>` is sent as $undefined; `false` as false", () => {
    const rows = JSON.parse(
      execFileSync(process.execPath, ["tests/fixtures/flightSerialize.cjs"], {
        env: { ...process.env, NODE_ENV: "production" },
        encoding: "utf8",
      }),
    ) as Record<string, string>;
    expect(rows.fragment).toBe('0:{"v":"$undefined"}');
    expect(rows.false).toBe('0:{"v":false}');
    // The model the tests below use agrees with it.
    expect(flight(<></>)).toBeUndefined();
    expect(flight(false)).toBe(false);
  });

  it("no narrowed view on any artist page or /certifications reaches the client nullish", async () => {
    const pages = [
      ...(await Promise.all(afrobeatsArtists.filter((a) => a.swept).map(async (a) => [a.slug, await artistTree(a.slug)] as const))),
      ["certifications", CertificationsPage()] as const,
    ];
    let checked = 0;
    for (const [slug, tree] of pages)
      for (const s of swaps(tree))
        for (const [k, v] of Object.entries(s.props.views)) {
          if (k === "all") continue;
          checked++;
          // Nullish falls back to the all-view in CertViewSwap (`?? views.all`).
          expect(flight(v), `${slug} ${k}`).not.toBeUndefined();
          expect(flight(v), `${slug} ${k}`).not.toBeNull();
        }
    expect(checked).toBeGreaterThan(50);
  });

  const stripSwap = async (slug: string) => {
    const s = swaps(await artistTree(slug)).find((x) => renderToStaticMarkup(<>{x.props.views.all}</>).includes(STRIP))!;
    expect(s, `${slug}: the strip's swap`).toBeTruthy();
    return s;
  };
  const shown = (views: Record<string, ReactNode>, hash: string) => {
    at(`/afrobeats/x${hash}`);
    const { container, unmount } = render(
      <CertViewSwap views={views as { all: ReactNode }} offered={{ scope: true, credit: true }} />,
    );
    const t = text(container);
    unmount();
    return t;
  };

  it("Tiwa Savage, Nigeria left out and features off: no strip (the live page listed 2× Platinum Nigeria, Gold New Zealand)", async () => {
    const tiwa = artistBySlug("tiwa-savage")!;
    const home = homeCodeFor(tiwa.country);
    const featured = featuredTitlesOf(tiwa.slug);
    expect(certTotals(certsInView(tiwa.releases, { home, featured }, { scope: "intl", credit: "lead" })).total).toBe(0);
    const s = await stripSwap("tiwa-savage");
    const delivered = Object.fromEntries(Object.entries(s.props.views).map(([k, v]) => [k, flight(v)]));
    expect(Object.keys(delivered)).toContain(viewKey({ scope: "intl", credit: "lead" }));
    expect(shown(delivered, "#home=0&feat=0")).not.toContain(STRIP);
    // Its all-view still draws the strip.
    expect(shown(delivered, "")).toContain(STRIP);
  });

  it("negative control: the view as it shipped (`<></>`) arrives undefined and shows the all-view strip", async () => {
    const s = await stripSwap("tiwa-savage");
    const shipped = { ...s.props.views, "intl-lead": flight(<></>) };
    const t = shown(shipped, "#home=0&feat=0");
    expect(t).toContain(STRIP);
    expect(t).toMatch(/Nigeria/);
  });
});

// ── B-02 ───────────────────────────────────────────────────────────────────
describe("B-02: the light kicker band only under a long kicker, so it no longer washes his eyes", () => {
  const scrim = (c: HTMLElement) => c.querySelector(`.${mobileStyles.hero} .${mobileStyles.heroScrimSlot}`)!;
  const long = (c: HTMLElement) => scrim(c).classList.contains(mobileStyles.heroScrimLongKicker);

  it("the rule: longer than “Certified worldwide” — both scoped ones with “Lead credits”, not “Outside Nigeria”", () => {
    const base = certKicker(ALL_VIEW, "Nigeria").length;
    expect(certKicker({ scope: "intl", credit: "lead" }, "Nigeria").length).toBeGreaterThan(base);
    expect(certKicker({ scope: "all", credit: "lead" }, "Nigeria").length).toBeGreaterThan(base);
    expect(certKicker({ scope: "intl", credit: "all" }, "Nigeria").length).toBeLessThan(base);
  });

  it.each([
    ["", false],
    ["#home=0", false],
    ["#feat=0", true],
    ["#home=0&feat=0", true],
  ] as const)("/certifications%s: band %s", (hash, want) => {
    at(`/certifications${hash}`);
    const { container, unmount } = render(<CertificationsPage />);
    expect(long(container)).toBe(want);
    unmount();
  });

  it("the band layer lives only in the long-kicker rule, below 390", () => {
    const band = "light-dark(var(--bg), transparent) 40px";
    const flat = PHONE_CSS.replace(/\/\*[\s\S]*?\*\//g, "");
    const media = flat.slice(flat.indexOf("@media (max-width: 389px)"));
    const rule = (sel: string) => media.match(new RegExp(`${sel.replace(/\./g, "\\.")}\\s*\\{([^}]*)\\}`))![1];
    expect(rule(".heroScrimSlot.heroScrimLongKicker")).toContain(band);
    expect(rule(".heroScrimSlot")).not.toContain(band);
    // Negative control: as shipped, the plain slot rule carried it in every view.
    const SHIPPED_SLOT_320 =
      "linear-gradient(180deg, transparent 0, transparent 110px, color-mix(in srgb, var(--bg) 75%, transparent) 128px), linear-gradient(180deg, light-dark(var(--bg), transparent) 40px, transparent 66px)";
    expect(SHIPPED_SLOT_320).toContain(band);
  });
});

// ── B-04 ───────────────────────────────────────────────────────────────────
describe("B-04: Compare and Biggest shows share a row of their own on the desktop hero", () => {
  const actions = (c: HTMLElement) => c.querySelector(`.${artistStyles.heroActions}`)!;
  it.each(afrobeatsArtists.filter((a) => a.swept).map((a) => a.slug))("%s", async (slug) => {
    const { container, unmount } = render(await artistTree(slug));
    const row = actions(container);
    const pair = row.querySelector(`.${artistStyles.heroPair}`);
    if (showsHrefFor(slug)) {
      expect(pair, slug).not.toBeNull();
      expect([...pair!.querySelectorAll("a")].map((a) => text(a))).toEqual(["Compare ↗", `${SHOWS_LABEL} ↗`]);
    } else {
      expect(pair, slug).toBeNull();
      expect([...row.children].map((a) => text(a))).toContain("Compare ↗");
    }
    unmount();
  });
  it("the pair takes a whole row (flex-basis 100%), so it never splits and always starts one", () => {
    const rule = ARTIST_CSS.replace(/\/\*[\s\S]*?\*\//g, "").match(/\.heroPair\s*\{([^}]*)\}/)![1];
    expect(rule).toMatch(/flex-basis:\s*100%/);
    expect(rule).toMatch(/display:\s*flex/);
    // Negative control: as shipped, the four buttons were siblings in one
    // wrapping row, and "Biggest shows" sat alone on the second (live, 1440).
    const SHIPPED = ["Official chart peaks — 240 entries", "Live charts — 281 placements today", "Compare ↗", "Biggest shows ↗"];
    expect(SHIPPED.length).toBe(4);
  });
});

// ── B-05 / D-10 / E-02 ─────────────────────────────────────────────────────
type RGBA = [number, number, number, number];
const rgba = (s: string): RGBA => {
  const hex = s.match(/^#([0-9a-f]{6})$/i);
  if (hex) return [0, 2, 4].map((i) => parseInt(hex[1].slice(i, i + 2), 16)).concat(1) as RGBA;
  const m = s.match(/rgba?\(([^)]+)\)/)!;
  const p = m[1].split(",").map((x) => Number(x.trim()));
  return [p[0], p[1], p[2], p[3] ?? 1];
};
/** A token's light and dark values, from globals.css. */
const token = (name: string): { light: RGBA; dark: RGBA } => {
  const m = GLOBALS.match(new RegExp(`(?:^|[\\s;{])${name}:\\s*light-dark\\((#[0-9a-fA-F]{6}|rgba?\\([^)]*\\)),\\s*(#[0-9a-fA-F]{6}|rgba?\\([^)]*\\))\\)`))!;
  return { light: rgba(m[1]), dark: rgba(m[2]) };
};
const over = (top: RGBA, under: RGBA): RGBA => [0, 1, 2].map((i) => top[i] * top[3] + under[i] * (1 - top[3])).concat(1) as RGBA;
const lin = (c: number) => {
  const s = c / 255;
  return s <= 0.04045 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
};
const lum = (c: RGBA) => 0.2126 * lin(c[0]) + 0.7152 * lin(c[1]) + 0.0722 * lin(c[2]);
const contrast = (a: RGBA, b: RGBA) => {
  const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p);
  return (x + 0.05) / (y + 0.05);
};

describe("B-05 / D-10 / E-02: the phone controls' only edge is ≥ 3:1 against the bar", () => {
  const ruleOf = (css: string, sel: string) =>
    css.replace(/\/\*[\s\S]*?\*\//g, "").match(new RegExp(`(?:^|\\n|\\})\\s*${sel.replace(/\./g, "\\.")}\\s*\\{([^}]*)\\}`))![1];
  it.each([
    ["app/components/mobileCerts.module.css", ".actionSecondary"],
    ["app/components/mobileCerts.module.css", ".actionIcon"],
    ["app/components/mobileCerts.module.css", ".backBtn"],
    ["app/components/mobileCerts.module.css", ".chip"],
    ["app/components/mobileRevenue.module.css", ".backBtn"],
  ])("%s %s borders on --btn-edge", (file, sel) => {
    expect(ruleOf(read(file), sel)).toMatch(/border:\s*1px solid var\(--btn-edge\)/);
  });
  it("--btn-edge clears 3:1 over the bar in both themes; --line, as shipped, measured 1.28 / 1.31", () => {
    const bg = token("--bg"), bar = token("--scrim"), edge = token("--btn-edge"), line = token("--line");
    for (const t of ["light", "dark"] as const) {
      const ground = over(bar[t], bg[t]);
      expect(contrast(over(edge[t], ground), ground), t).toBeGreaterThanOrEqual(3);
      // Negative control: the shipped edge.
      expect(contrast(over(line[t], ground), ground), t).toBeLessThan(1.4);
    }
  });
});

// ── B-06 / E-08 ────────────────────────────────────────────────────────────
describe("B-06 / E-08: the gold kicker on the light hero card ≥ 4.5:1", () => {
  const scrim = ARTIST_CSS.replace(/\/\*[\s\S]*?\*\//g, "").match(/\.heroScrim\s*\{([^}]*)\}/)![1];
  it("a page-colour band over the kicker's 52px (it sits at 31–47px), light only (dark transparent), one gold kept", () => {
    expect(scrim).toContain(
      "linear-gradient(180deg, light-dark(color-mix(in srgb, var(--bg) 85%, transparent), transparent) 52px, transparent 160px)",
    );
    expect(ARTIST_CSS.replace(/\/\*[\s\S]*?\*\//g, "").match(/\.kicker\s*\{([^}]*)\}/)![1]).toMatch(/color:\s*var\(--gold\)/);
  });
  it("over the darkest ground measured live (Davido, ≈rgb(215,213,209) under the 55% scrim) it clears 4.5:1; as shipped it was 3.7", () => {
    const gold = token("--gold-ink").light;
    const paper = token("--bg").light;
    const measured: RGBA = [215, 213, 209, 1];
    const withBand = over([paper[0], paper[1], paper[2], 0.85], measured);
    expect(contrast(gold, withBand)).toBeGreaterThanOrEqual(4.5);
    // Negative control: the live ground.
    expect(contrast(gold, measured)).toBeLessThan(3.8);
  });
});

// ── B-10 ───────────────────────────────────────────────────────────────────
describe("B-10: tier shares add to 100 in every view", () => {
  it("largest remainder: Olamide 31/24/44 (99) and Rema's international 11/55/26/9 (101) now add to 100; Burna's 3/41/42/14 stays", () => {
    const sum = (xs: number[]) => xs.reduce((a, b) => a + b, 0);
    const olamide = certTotals(artistBySlug("olamide")!.releases).tiers;
    const counts = (t: Record<string, number>) => ["Diamond", "Platinum", "Gold", "Silver"].map((k) => t[k] ?? 0);
    // Negative control: per-row Math.round, as shipped, read 99.
    const shipped = (cs: number[]) => cs.map((c) => Math.round((c * 100) / sum(cs)));
    expect(sum(shipped(counts(olamide)))).toBe(99);
    expect(sum(wholePercents(counts(olamide)))).toBe(100);
    expect(wholePercents([7, 103, 106, 34])).toEqual([3, 41, 42, 14]);
    expect(wholePercents([0, 0, 0, 0])).toEqual([0, 0, 0, 0]);
  });
  it("every artist, every view the switches offer", () => {
    let n = 0;
    for (const a of afrobeatsArtists.filter((x) => x.swept)) {
      const home = homeCodeFor(a.country);
      const featured = featuredTitlesOf(a.slug);
      const offered = { scope: scopeSwitchable(a.releases, home), credit: creditSwitchable(a.releases, featured) };
      for (const v of viewsOffered(offered)) {
        const t = certTotals(certsInView(a.releases, { home, featured }, v));
        if (!t.total) continue;
        const p = wholePercents(["Diamond", "Platinum", "Gold", "Silver"].map((k) => t.tiers[k as "Gold"]));
        expect(p.reduce((x, y) => x + y, 0), `${a.slug} ${viewKey(v)}`).toBe(100);
        n++;
      }
    }
    expect(n).toBeGreaterThan(40);
  });
  it("the phone bars print them: Olamide's column reads 100", async () => {
    const { container, unmount } = render(await artistTree("olamide"));
    const pcts = [...layouts(container).phone.querySelectorAll(`.${mobileStyles.tierPct}`)].map((e) => parseInt(text(e), 10));
    expect(pcts.reduce((a, b) => a + b, 0)).toBe(100);
    unmount();
  });
});

// ── B-11 / B-missed ────────────────────────────────────────────────────────
describe("B-11 / B-missed: an empty view offers no tier controls, on either layout", () => {
  // BNXN was the empty view until 7 Oct 2026 (Rule C made "Finesse" and
  // "Propeller" his leads); Tiwa Savage's is empty now.
  it("Tiwa Savage, both switches off: no “Filter by tier” icon on the phone bar; no Tier or Country row or Clear on desktop", async () => {
    at("/afrobeats/tiwa-savage#home=0&feat=0");
    const { container, unmount } = render(await artistTree("tiwa-savage"));
    const { phone } = layouts(container);
    expect(phone.querySelector('[aria-label="Filter by tier"]')).toBeNull();
    expect(phone.querySelector("#cert-rail")).toBeNull();
    const panel = container.querySelector("#cert-filters")!;
    const labels = [...panel.querySelectorAll(`.${explorerStyles.filterLabel}`)].map((e) => text(e));
    expect(labels).not.toContain("Tier");
    expect(labels).not.toContain("Country");
    expect([...panel.querySelectorAll("button")].map((b) => text(b))).not.toContain("Clear ✕");
    unmount();
  });
  it("negative control: the all view keeps them all — the live empty view showed the icon and the four tiers", async () => {
    // Tiwa Savage's all view: the tier rail and both desktop rows. (Her bar
    // carries a shows button, so the icon gives way there at any view.)
    at("/afrobeats/tiwa-savage");
    const tiwa = render(await artistTree("tiwa-savage"));
    expect(layouts(tiwa.container).phone.querySelector("#cert-rail")).not.toBeNull();
    const panel = tiwa.container.querySelector("#cert-filters")!;
    expect([...panel.querySelectorAll(`.${explorerStyles.filterLabel}`)].map((e) => text(e))).toEqual(["Tier", "Country"]);
    tiwa.unmount();
    // BNXN's bar, the one the live empty view drew the icon on, keeps it.
    at("/afrobeats/bnxn");
    const bnxn = render(await artistTree("bnxn"));
    expect(layouts(bnxn.container).phone.querySelector('[aria-label="Filter by tier"]')).not.toBeNull();
    bnxn.unmount();
  });
});

// ── E-03 / E-15 ────────────────────────────────────────────────────────────
describe("E-03 / E-15: the tier chips say whether they are on, and the names keep their spaces", () => {
  it("/certifications phone: every tier chip carries aria-pressed, All pressed; the chip names read “Diamond 7”", () => {
    at("/certifications");
    const { container, unmount } = render(<CertificationsPage />);
    const rail = container.querySelector("#cert-rail")!;
    const chips = [...rail.querySelectorAll("button")];
    expect(chips.length).toBeGreaterThan(2);
    for (const c of chips) expect(c.getAttribute("aria-pressed"), text(c)).toMatch(/^(true|false)$/);
    expect(chips[0].getAttribute("aria-pressed")).toBe("true");
    // One text node per chip label — as two ("Diamond", " ", "7") the AX tree
    // read "DIAMOND7" (E-15).
    for (const c of chips.slice(1)) {
      const nodes = [...c.childNodes].filter((n) => n.nodeType === Node.TEXT_NODE).map((n) => n.textContent);
      expect(nodes, text(c)).toHaveLength(1);
      expect(nodes[0]).toMatch(/^[A-Z][a-z]+ \d+$/);
    }
    unmount();
  });
  it("the h1's country line is one text node: “26 countries”, never “26COUNTRIES”", () => {
    const html = renderToStaticMarkup(<CertificationsPage />);
    const unit = html.match(new RegExp(`<span class="${mobileStyles.totalUnit}">([\\s\\S]*?)</span>`))![1];
    expect(unit).toMatch(/<br\/>\d+ countries$/);
    // Negative control: the shipped markup, two expressions around a space.
    const SHIPPED = "Awards<br/>26<!-- --> <!-- -->countries";
    expect(SHIPPED).not.toMatch(/<br\/>\d+ countries$/);
  });
});

// ── E-13 ───────────────────────────────────────────────────────────────────
describe("E-13: “Filter by tier” scrolls instantly under reduced motion", () => {
  it("reduce → instant; otherwise smooth", () => {
    const calls: ScrollIntoViewOptions[] = [];
    const proto = Element.prototype as unknown as { scrollIntoView?: (o?: ScrollIntoViewOptions) => void };
    const had = proto.scrollIntoView;
    proto.scrollIntoView = (o) => void calls.push(o!);
    const mm = window.matchMedia;
    try {
      for (const reduce of [true, false]) {
        window.matchMedia = ((q: string) => ({
          matches: reduce && /reduce/.test(q),
          media: q,
          addEventListener() {},
          removeEventListener() {},
          addListener() {},
          removeListener() {},
        })) as unknown as typeof window.matchMedia;
        at("/certifications");
        const { container, unmount } = render(<CertificationsPage />);
        calls.length = 0;
        // By its label, not getByRole: a role query over a whole page takes seconds in jsdom.
        container.querySelector<HTMLButtonElement>('[aria-label="Filter by tier"]')!.click();
        expect(calls.at(-1)?.behavior, `reduce ${reduce}`).toBe(reduce ? "instant" : "smooth");
        unmount();
      }
    } finally {
      window.matchMedia = mm;
      proto.scrollIntoView = had;
    }
    // Negative control: the shipped call, whatever the setting.
    const SHIPPED = 'scrollIntoView({ behavior: "smooth" })';
    expect(SHIPPED).not.toContain("instant");
  });
});
