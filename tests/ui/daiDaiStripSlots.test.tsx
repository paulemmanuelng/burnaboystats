import { renderToStaticMarkup } from "react-dom/server";
import { readFileSync } from "node:fs";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/dai-dai",
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import DaiDaiPage from "../../app/dai-dai/page";
import DaiDaiPageES from "../../app/dai-dai/es/page";
import heroStyles from "../../app/dai-dai/dai-dai.module.css";
import stripStyles from "../../app/components/daiDaiStrip.module.css";
import { allChartItems, daiDaiNumberOnes, weeksAtPeak } from "../../app/data/charts";
import { daiDaiCertCount } from "../../app/data/certifications";
import { DAI_DAI_SPOTIFY_NO1_DAYS } from "../../app/data/daiDai";
import { read, rules } from "../fixtures/cssRules";

/**
 * daiDaiStripSlots (site review 8 Oct 2026, Job 5 · J5-8, fixes 109 and 111;
 * J5-Q1 "yes"): both editions' heroes carry a four-figure strip between the
 * lede and the actions — the Global 200 peak, the Spotify Global days at
 * No. 1, the countries at No. 1, the certifications — every figure the
 * data's, each tile one whole link to the chapter that tells it (02, 04, 03,
 * 05), with no glyph and no gold. "Skip to the numbers" / "Saltar a las
 * cifras" keep their live labels.
 */
const parse = (html: string) => new DOMParser().parseFromString(html, "text/html");
const ARROWS = /[↗↘→←↓↑▾▸›»]/;
const glb = allChartItems.find((r) => r.title === "Dai Dai")!.entries.find((e) => e.c === "GLB")!;

const EDITIONS = [
  {
    lang: "en",
    Page: DaiDaiPage,
    skip: "Skip to the numbers",
    want: [
      { href: "#dd-ch02", value: `No. ${glb.peak}`, label: `Billboard Global 200\u00a0· ${weeksAtPeak("Dai Dai", "GLB")}\u00a0wks` },
      { href: "#dd-ch04", value: String(DAI_DAI_SPOTIFY_NO1_DAYS), label: "days No. 1 on Spotify Global" },
      { href: "#dd-ch03", value: String(daiDaiNumberOnes), label: "countries at No. 1" },
      { href: "#dd-ch05", value: String(daiDaiCertCount), label: "certifications" },
    ],
  },
  {
    lang: "es",
    Page: DaiDaiPageES,
    skip: "Saltar a las cifras",
    want: [
      { href: "#dd-ch02", value: `N.º ${glb.peak}`, label: `Billboard Global 200\u00a0· ${weeksAtPeak("Dai Dai", "GLB")}\u00a0sem.` },
      { href: "#dd-ch04", value: String(DAI_DAI_SPOTIFY_NO1_DAYS), label: "días en el N.º 1 en Spotify Global" },
      { href: "#dd-ch03", value: String(daiDaiNumberOnes), label: "países en el N.º 1" },
      { href: "#dd-ch05", value: String(daiDaiCertCount), label: "certificaciones" },
    ],
  },
] as const;

/** Which figure each chapter must hold, by what its figure prints. */
const CHAPTER_HOLDS: Record<string, (text: string) => boolean> = {
  "#dd-ch02": (t) => t.includes("Billboard Global 200"),
  "#dd-ch03": (t) => t.includes(String(daiDaiNumberOnes)),
  "#dd-ch04": (t) => /Spotify Global/.test(t) && t.includes(String(DAI_DAI_SPOTIFY_NO1_DAYS)),
  "#dd-ch05": (t) => t.includes(String(daiDaiCertCount)),
};

describe.each(EDITIONS)("daiDaiStripSlots: the $lang edition", ({ Page, skip, want }) => {
  const d = parse(renderToStaticMarkup(<Page />));
  const strip = d.querySelector(`.${stripStyles.strip}`)!;

  it("sits in the hero between the lede and the actions", () => {
    expect(strip).not.toBeNull();
    expect(strip.parentElement!.className).toBe(heroStyles.heroText);
    expect(strip.previousElementSibling!.className).toBe(heroStyles.lede);
    expect(strip.nextElementSibling!.className).toBe(heroStyles.heroActions);
    // Skip keeps its live label.
    expect(strip.nextElementSibling!.querySelector("a")!.textContent).toBe(skip);
  });

  it("four tiles in order, each figure the data's and each a whole-tile link", () => {
    const tiles = [...strip.querySelectorAll("a")];
    expect(tiles.map((a) => ({
      href: a.getAttribute("href"),
      value: a.querySelector(`.${stripStyles.value}`)!.textContent,
      label: a.querySelector(`.${stripStyles.label}`)!.textContent,
    }))).toEqual(want);
    for (const a of tiles) expect(a.textContent, "no glyph in a tile").not.toMatch(ARROWS);
  });

  it("a label never breaks before its “·”, nor between a figure and the word that ends the label", () => {
    // A breakable space there put "· 7 WKS" / "· 7 SEM." at the head of a
    // wrapped label's second line (402 EN, 1440 ES), and "7" / "WKS" on two
    // lines at 320.
    for (const a of strip.querySelectorAll(`.${stripStyles.label}`)) {
      expect(a.textContent!, a.textContent!).not.toMatch(/[ \t\n]·/);
      expect(a.textContent!, a.textContent!).not.toMatch(/\d[ \t\n]\S+$/);
    }
  });

  it("each tile lands on the chapter that tells its figure", () => {
    for (const a of strip.querySelectorAll("a")) {
      const href = a.getAttribute("href")!;
      const chapter = d.getElementById(href.slice(1));
      expect(chapter, `${href} exists`).not.toBeNull();
      expect(CHAPTER_HOLDS[href](chapter!.textContent ?? ""), `${href} holds its figure`).toBe(true);
    }
  });
});

describe("daiDaiStripSlots: ink, no gold, labels muted", () => {
  const css = read("app/components/daiDaiStrip.module.css");
  it("no rule in the strip's sheet paints gold", () => {
    expect(css).not.toMatch(/--gold|#945e00|#ffb627|--ink-on-gold|--display-ramp/i);
  });
  it("figures ink, labels --text-muted mono 700 11px, tiles 96px tall on --rule seams", () => {
    const body = (sel: string) => rules(css).filter((r) => r.media === null && r.selector === sel).map((r) => r.body).join(";");
    expect(body(".value")).toMatch(/color:\s*var\(--text\)/);
    expect(body(".label")).toMatch(/color:\s*var\(--text-muted\)/);
    expect(body(".label")).toMatch(/font-size:\s*11px/);
    expect(body(".label")).toMatch(/font-weight:\s*700/);
    expect(body(".tile")).toMatch(/min-height:\s*96px/);
    expect(body(".strip")).toMatch(/background:\s*var\(--rule\)/);
    // Two by two on the phone.
    const phone = rules(css).find((r) => r.media?.includes("max-width: 900px") && r.selector === ".strip")!;
    expect(phone.body).toMatch(/repeat\(2, minmax\(0, 1fr\)\)/);
  });
  it("no figure is typed into the strip's labels (\"Global 200\" is the chart's name, \"No. 1\" the top spot)", () => {
    const src = readFileSync("app/components/DaiDaiStrip.tsx", "utf8");
    const labels = [...src.matchAll(/^\s+\w+: "([^"]*)",$/gm)].map((m) => m[1].replace(/Global 200|No\. 1|N\.º 1/g, ""));
    expect(labels.length).toBeGreaterThanOrEqual(12);
    for (const l of labels) expect(l, l).not.toMatch(/\d/);
  });
});

describe("daiDaiStripSlots: negative controls (shipped)", () => {
  it("the strip as first built broke before its separator", () => {
    // DaiDaiStrip.tsx:32 on 7eb0fbf4 (J5-8), filled as the tile printed it.
    const built = "Billboard Global 200 · {n} wks".replace("{n}", String(weeksAtPeak("Dai Dai", "GLB")));
    expect(built).toMatch(/[ \t\n]·/);
  });
  it("main had no chapter anchors", () => {
    // DaiDaiStory.tsx:191 on main e85e6efe.
    const shipped = "<div key={s.scene} className={styles.chapter}>";
    expect(shipped).not.toMatch(/\bid=/);
    expect(readFileSync("app/components/DaiDaiStory.tsx", "utf8")).not.toContain(shipped);
  });
  it("the canvas's Spanish skip is not the live one", () => {
    // Data Modules.dc.html §8: "Ir a las cifras ↓".
    const canvas = "Ir a las cifras ↓";
    const d = parse(renderToStaticMarkup(<DaiDaiPageES />));
    expect(d.body.textContent).not.toContain(canvas.replace(" ↓", ""));
    expect(d.body.textContent).toContain("Saltar a las cifras");
  });
});
