import { render } from "@testing-library/react";
import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/",
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

import CertificationsPage from "../app/certifications/page";
import styles from "../app/certifications/certifications.module.css";
import { read, rules, decl } from "./fixtures/cssRules";
import { colour, contrast, over, tokenColour, tokenContrast, THEMES, type Theme } from "./fixtures/tokenColours";

/**
 * Job 3 · J3-7 (design review 8 Oct 2026; fix 62): the tier share bars.
 *
 * Desktop /certifications: each tier row of the hero rail draws its share as a
 * 2px bar across the gap after its percentage, the tier's own ink
 * (`--tier-*-ink`) on the --bg-soft-2 track (fix 62's `var(--track)` is not a
 * token; C-11), filled to the printed percentage in every view. The phone's
 * bars become solid ink on --bg-soft-2 in light; dark stays as built.
 *
 * Fix 62's failure was the canvas painting the bars in the tier FILL colours,
 * which do not reach 3:1 on paper. Every ratio below is read against the panel
 * beside the bar, from globals.css's own tokens.
 */

const TIERS = ["Diamond", "Platinum", "Gold", "Silver"] as const;
const ink = (t: string) => `--tier-${t.toLowerCase()}-ink`;
const at = (url: string) => window.history.replaceState({}, "", url);
afterEach(() => at("/"));

const parse = (html: string) => new DOMParser().parseFromString(html, "text/html");
const railRows = (root: ParentNode) => [...root.querySelectorAll(`.${styles.tierRail} .${styles.tierRow}`)];

/** Split on top-level commas. */
function topArgs(inner: string): string[] {
  const out: string[] = [];
  let depth = 0;
  let cur = "";
  for (const c of inner) {
    if (c === "(") depth++;
    if (c === ")") depth--;
    if (c === "," && depth === 0) {
      out.push(cur.trim());
      cur = "";
    } else cur += c;
  }
  out.push(cur.trim());
  return out;
}
/** A `linear-gradient(angle, a, b)`'s two colour stops. */
const stops = (g: string) => topArgs(g.slice("linear-gradient(".length, g.lastIndexOf(")"))).slice(1);
/** A value that may be `light-dark(L, D)`, read in one theme. */
const arm = (v: string, theme: Theme) => {
  if (!v.startsWith("light-dark(")) return v;
  const [l, d] = topArgs(v.slice("light-dark(".length, v.lastIndexOf(")")));
  return theme === "light" ? l : d;
};
const same = (a: number[], b: number[]) => a.every((x, i) => Math.abs(x - b[i]) < 0.5);

/** MobileCerts' GRAD map, read from its source (the component keeps it private). */
function phoneGrad(): Record<string, string> {
  const src = read("app/components/MobileCerts.tsx");
  const block = src.slice(src.indexOf("const GRAD"), src.indexOf("};", src.indexOf("const GRAD")));
  return Object.fromEntries([...block.matchAll(/(Diamond|Platinum|Gold|Silver):\s*"([^"]+)"/g)].map((m) => [m[1], m[2]]));
}
/** main's shipped phone fills (MobileCerts.tsx GRAD before J3-7). */
const SHIPPED_GRAD = (t: string) => `linear-gradient(90deg,color-mix(in srgb,var(${ink(t)}) 58%,var(--bg)),var(${ink(t)}))`;
const SHIPPED_TRACK = "color-mix(in srgb, var(--ink-wash-base) 9%, transparent)";

describe("desktop: a share bar on each tier row", () => {
  it("dot · name · count · % · bar, the bar filled with the tier's ink to the printed percentage", () => {
    at("/certifications");
    const doc = parse(renderToStaticMarkup(<CertificationsPage />));
    const rows = railRows(doc);
    expect(rows.map((r) => r.querySelector(`.${styles.tierName}`)!.textContent)).toEqual([...TIERS]);
    for (const r of rows) {
      expect([...r.children].map((c) => c.className)).toEqual([
        styles.tierDot, styles.tierName, styles.tierCount, styles.tierPct, styles.tierBar,
      ]);
      const name = r.querySelector(`.${styles.tierName}`)!.textContent!;
      const pct = r.querySelector(`.${styles.tierPct}`)!.textContent!;
      const fill = r.querySelector(`.${styles.tierBar} > .${styles.tierBarFill}`)!;
      expect(fill.getAttribute("style")).toBe(`width:${pct};background:var(${ink(name)})`);
      expect(r.querySelector(`.${styles.tierBar}`)!.getAttribute("aria-hidden")).toBe("true");
    }
  });

  it.each(["", "#feat=0", "#home=0", "#feat=0&home=0"])("the widths follow the view's own percentages (%s)", (hash) => {
    at(`/certifications${hash}`);
    const { container } = render(<CertificationsPage />);
    const rows = railRows(container);
    expect(rows).toHaveLength(4);
    const pcts = rows.map((r) => r.querySelector(`.${styles.tierPct}`)!.textContent!);
    expect(pcts.reduce((n, p) => n + Number(p.replace("%", "")), 0)).toBe(100);
    rows.forEach((r, i) => {
      expect((r.querySelector(`.${styles.tierBarFill}`) as HTMLElement).style.width).toBe(pcts[i]);
    });
  });

  it("the track is --bg-soft-2, 2px, across the gap with a 24px inset (CSS)", () => {
    const css = rules(read("app/certifications/certifications.module.css"));
    const bar = css.find((r) => r.media === null && r.selector === ".tierBar")!;
    expect(decl(bar.body, "background")).toBe("var(--bg-soft-2)");
    expect(decl(bar.body, "height")).toBe("2px");
    expect(decl(bar.body, "flex")).toBe("1");
    expect(decl(bar.body, "margin-right")).toBe("24px");
    const fill = css.find((r) => r.media === null && r.selector === ".tierBarFill")!;
    expect(decl(fill.body, "height")).toBe("2px");
  });

  it("each ink is 3:1 or better on the track and on the page, both themes", () => {
    for (const theme of THEMES)
      for (const t of TIERS) {
        expect(tokenContrast(ink(t), "--bg-soft-2", theme), `${t} on the track, ${theme}`).toBeGreaterThanOrEqual(3);
        expect(tokenContrast(ink(t), "--bg", theme), `${t} on the page, ${theme}`).toBeGreaterThanOrEqual(3);
      }
  });

  it("negative control: the canvas's Platinum fill on paper (#EFEDE6 on #ffffff) is under 3:1", () => {
    // Ledgers.dc.html's FILL.Platinum, the colour fix 62 rejects.
    expect(contrast(colour("#EFEDE6", "light"), colour("#ffffff", "light"))).toBeLessThan(3);
  });
});

describe("phone: light is solid ink on --bg-soft-2; dark is unchanged", () => {
  const grad = phoneGrad();

  it("every tier's light stops are both its ink; the dark first stop is the shipped 58% mix", () => {
    expect(Object.keys(grad)).toEqual([...TIERS]);
    for (const t of TIERS) {
      const [a, b] = stops(grad[t]);
      const inkL = tokenColour(ink(t), "light");
      expect(same(colour(arm(a, "light"), "light"), inkL), `${t} light left`).toBe(true);
      expect(same(colour(arm(b, "light"), "light"), inkL), `${t} light right`).toBe(true);
      // Dark: exactly the shipped ramp.
      const [sa, sb] = stops(SHIPPED_GRAD(t));
      expect(arm(a, "dark")).toBe(sa);
      expect(arm(b, "dark")).toBe(sb);
    }
  });

  it("the track is --bg-soft-2 in light, the shipped wash in dark (CSS)", () => {
    const css = rules(read("app/components/mobileCerts.module.css"));
    const track = css.find((r) => r.media === null && r.selector === ".tierTrack")!;
    const bg = decl(track.body, "background")!;
    expect(arm(bg, "light")).toBe("var(--bg-soft-2)");
    expect(arm(bg, "dark")).toBe(SHIPPED_TRACK);
  });

  it("each light bar clears 3:1 on its track", () => {
    for (const t of TIERS) expect(tokenContrast(ink(t), "--bg-soft-2", "light"), t).toBeGreaterThanOrEqual(3);
  });

  it("negative control: main's light left stop sat under 3:1 on its track, every tier", () => {
    // main's GRAD.Diamond, live on Tyla's phone page 8 Oct:
    // linear-gradient(90deg,color-mix(in srgb,var(--tier-diamond-ink) 58%,var(--bg)),var(--tier-diamond-ink))
    const page = tokenColour("--bg", "light");
    const trackL = over(colour(SHIPPED_TRACK, "light"), page);
    for (const t of TIERS) {
      const left = over(colour(stops(SHIPPED_GRAD(t))[0], "light"), page);
      expect(contrast(left, trackL), t).toBeLessThan(3);
    }
  });
});
