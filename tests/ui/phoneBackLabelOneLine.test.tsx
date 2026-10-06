import { renderToStaticMarkup } from "react-dom/server";
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

import ArtistChartsPage from "../../app/afrobeats/[artist]/charts/page";
import ArtistLivePage from "../../app/afrobeats/[artist]/live/page";
import ChartsPage from "../../app/records/charts/page";
import LiveChartsPage from "../../app/live-charts/page";
import { afrobeatsArtists } from "../../app/data/afrobeats";
import { hasLiveBoard } from "../../app/data/liveBoards";
import mobileCharts from "../../app/components/mobileOfficialCharts.module.css";
import mobileLive from "../../app/components/mobileLiveCharts.module.css";

/**
 * V-afrobeats-05 (debug of 5 Oct 2026): the phone back bar on the board's
 * live and charts screens printed "{Name} · live charts" / "{Name} · charts"
 * with nothing holding it to one line. Read live in headless Chrome on 6 Oct:
 * at 320 the live label broke in two on all 19 boards (Davido and Asake too)
 * and the charts label on 6 of them; at 390 the live label broke on Ayra
 * Starr, Black Sherif, Fireboy DML, Kizz Daniel, Seyi Vibez and Tiwa Savage
 * ("FIREBOY DML · LIVE / CHARTS", 35px tall).
 *
 * Now the name and the detail are two flex items in a box one line tall, so
 * where both do not fit the detail wraps out of sight whole (it repeats the H1
 * and the Live pill), and the name alone ellipses rather than breaks. jsdom
 * does no layout, so this pins the markup on every real page and reads the
 * rules. Grafted onto the live pages in headless Chrome at 320, 360, 375, 390
 * and 430, dark and light: every label is one 17.6px line, the bar stays 69px,
 * no name is cut, and where the whole label fits the bar is pixel-identical to
 * the shipped one.
 */

const html = (el: React.ReactElement) => {
  const div = document.createElement("div");
  div.innerHTML = renderToStaticMarkup(el);
  return div;
};
/** The phone screen's back-bar label: the one .backLabel in the screen's styles. */
const label = (root: HTMLElement, styles: Record<string, string>) => {
  const found = root.querySelectorAll(`.${styles.backLabel}`);
  expect(found.length).toBe(1);
  const el = found[0] as HTMLElement;
  return {
    text: el.textContent,
    name: el.querySelector(`.${styles.backName}`)?.textContent ?? null,
    detail: el.querySelector(`.${styles.backDetail}`)?.textContent ?? null,
    children: el.children.length,
  };
};

const withLive = afrobeatsArtists.filter((a) => hasLiveBoard(a.slug));
const withCharts = afrobeatsArtists.filter((a) => a.charts.length > 0);

describe("the board screens' back-bar label is a name and a detail that can drop", () => {
  it("covers the boards the sweep named", () => {
    for (const slug of ["fireboy-dml", "black-sherif", "kizz-daniel", "ayra-starr", "seyi-vibez", "tiwa-savage", "davido"]) {
      expect(withLive.map((a) => a.slug)).toContain(slug);
    }
    expect(withCharts.map((a) => a.slug)).toContain("black-sherif");
  });

  it.each(withLive.map((a) => [a.slug, a.name]))("/afrobeats/%s/live", async (slug, name) => {
    const l = label(html(await ArtistLivePage({ params: Promise.resolve({ artist: slug }) })), mobileLive);
    // The words are unchanged; only the two halves are now separate boxes.
    expect(l.text).toBe(`${name} · live charts`);
    expect(l.name).toBe(name);
    expect(l.detail).toBe(" · live charts");
  });

  it.each(withCharts.map((a) => [a.slug, a.name]))("/afrobeats/%s/charts", async (slug, name) => {
    const l = label(html(await ArtistChartsPage({ params: Promise.resolve({ artist: slug }) })), mobileCharts);
    expect(l.text).toBe(`${name} · charts`);
    expect(l.name).toBe(name);
    expect(l.detail).toBe(" · charts");
  });

  it("Burna Boy's own screens keep their one-part label", () => {
    expect(label(html(<LiveChartsPage />), mobileLive)).toEqual({ text: "Live Charts", name: "Live Charts", detail: null, children: 1 });
    expect(label(html(<ChartsPage />), mobileCharts)).toEqual({ text: "Official charts", name: "Official charts", detail: null, children: 1 });
  });
});

const decls = (css: string, selector: string) => {
  const clean = css.replace(/\/\*[\s\S]*?\*\//g, "");
  const out: Record<string, string> = {};
  for (const m of clean.matchAll(/([^{}]+)\{([^{}]*)\}/g)) {
    if (m[1].trim() !== selector) continue;
    for (const part of m[2].split(";")) {
      const i = part.indexOf(":");
      if (i > 0) out[part.slice(0, i).trim()] = part.slice(i + 1).trim();
    }
  }
  return out;
};

/** What holds the label to one line: what is wrong with a stylesheet, [] when nothing. */
const oneLine = (css: string) => {
  const box = decls(css, ".backLabel");
  const name = decls(css, ".backName");
  const detail = decls(css, ".backDetail");
  const want: [string, Record<string, string>, string, string][] = [
    // The two halves wrap as wholes, onto a second line nobody sees.
    [".backLabel", box, "display", "flex"],
    [".backLabel", box, "flex-wrap", "wrap"],
    [".backLabel", box, "height", "1lh"],
    [".backLabel", box, "overflow", "hidden"],
    [".backLabel", box, "min-width", "0"],
    // The name never breaks: past the bar's width it ellipses.
    [".backName", name, "white-space", "nowrap"],
    [".backName", name, "overflow", "hidden"],
    [".backName", name, "text-overflow", "ellipsis"],
    [".backName", name, "min-width", "0"],
    // The detail is one piece, its leading space kept.
    [".backDetail", detail, "white-space", "pre"],
  ];
  return want.filter(([, d, prop, value]) => d[prop] !== value).map(([sel, d, prop, value]) => `${sel} ${prop}: ${d[prop] ?? "(unset)"}, want ${value}`);
};

// The rule both screens shipped with (origin/main cfbc4146), verbatim.
const SHIPPED = `
.backLabel {
  font-family: var(--font-mono), monospace;
  font-weight: 700;
  font-size: 11px;
  letter-spacing: 0.11em;
  text-transform: uppercase;
}
`;

describe("the label's rules hold it to one line", () => {
  it.each([
    ["live charts", "app/components/mobileLiveCharts.module.css"],
    ["official charts", "app/components/mobileOfficialCharts.module.css"],
  ])("%s screen", (_screen, file) => {
    const css = readFileSync(file, "utf8");
    expect(oneLine(css)).toEqual([]);
    // Nothing else about the label's type changed.
    expect(decls(css, ".backLabel")).toMatchObject(decls(SHIPPED, ".backLabel"));
  });

  it("negative control: the shipped rule lets the label wrap", () => {
    expect(oneLine(SHIPPED).length).toBeGreaterThan(0);
  });
});
