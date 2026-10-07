import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { renderToStaticMarkup } from "react-dom/server";
import HubScatter, { type ScatterDot } from "../app/components/HubScatter";
import { sweptArtists, certCount, countryCount, BURNA } from "../app/data/afrobeats";
import { totalAwards, countryCount as burnaCountries } from "../app/data/certifications";

/**
 * "The shape of the field" on /afrobeats — debug item V-afrobeats-03, option
 * (b), Paul's call of 7 Oct 2026.
 *
 * The plot was one SVG in a 1280×330 viewBox scaled to the page, so its
 * 11-unit names and 10-unit figures rendered at ~10px and ~9px at 1440 and at
 * ~7px and ~6.4px at 1024 — under the site's 11px label floor (--type-label).
 * Now the frame has no viewBox, so a user unit is a CSS pixel and every word
 * and figure is set at 11, which renders at 11px whatever the plot's width;
 * and the module is hidden below 1240px, as the phone screen never shows it.
 *
 * Measured in headless Chrome on 7 Oct 2026 (1240–1920, dark and light): every
 * text element 11px, no label box over another label, a dot or an axis rule.
 * This holds the two things a browser is not needed for: the type and the
 * breakpoint.
 */

// The page's own dots (app/afrobeats/page.tsx): Burna Boy, then the board.
const dots: ScatterDot[] = [
  { slug: "burna-boy", name: BURNA.name, countries: burnaCountries, plaques: totalAwards(), anchor: true },
  ...sweptArtists.map((a) => ({ slug: a.slug, name: a.name, countries: countryCount(a), plaques: certCount(a), anchor: false })),
];
const html = renderToStaticMarkup(HubScatter({ dots }));

/** Every <text> and <tspan> in the plot with its font-size, and whether any
 *  <svg> scales its contents (a viewBox shrinks 11 units under 11px). */
const typeOf = (markup: string) => ({
  sizes: [...markup.matchAll(/<(text|tspan)\b([^>]*)>/g)].map((m) => {
    const size = /\bfont-size="([^"]+)"/.exec(m[2])?.[1];
    return size === undefined ? NaN : Number(size);
  }),
  scaled: /<svg\b[^>]*\bviewBox=/.test(markup),
});

describe("the field's type: 11px at every width it is drawn at", () => {
  it("every name, figure, axis count and axis title is set at 11, in a frame that does not scale", () => {
    const { sizes, scaled } = typeOf(html);
    // 6 axis counts + 2 axis titles + a name and a figures line per dot (Tiwa
    // Savage's and Victony's figures ride their names' lines as tspans).
    expect(sizes.length).toBe(8 + 2 * dots.length);
    for (const s of sizes) expect(s).toBe(11);
    expect(scaled).toBe(false);
  });

  it("negative control: the markup that shipped — a 1280×330 viewBox, 10.5 axis counts, 10 figures", () => {
    // burnaboystats.com/afrobeats as served on 7 Oct 2026: the outer svg's
    // opening (aria-label cut), the "0" axis count and Wizkid's figures line.
    const shipped =
      `<svg viewBox="0 0 1280 330" class="hubScatter-module__a1s6gG__svg" role="img">` +
      `<text x="70" y="298" text-anchor="middle" font-family="var(--font-mono), monospace" font-size="10.5" fill="var(--text-muted)">0</text>` +
      `<text x="950.4444444444445" y="128.1153846153846" text-anchor="end" font-family="var(--font-mono), monospace" font-size="10" fill="var(--text-muted)">159<!-- --> · <!-- -->21</text>` +
      `</svg>`;
    const { sizes, scaled } = typeOf(shipped);
    expect(sizes.some((s) => s < 11)).toBe(true);
    expect(scaled).toBe(true);
  });
});

// ── The breakpoint ──────────────────────────────────────────────────────────
type Rule = { media: string | null; selector: string; body: string };
const rules = (css: string): Rule[] => {
  const src = css.replace(/\/\*[\s\S]*?\*\//g, "");
  const out: Rule[] = [];
  const walk = (text: string, media: string | null) => {
    let i = 0;
    while (i < text.length) {
      const open = text.indexOf("{", i);
      if (open < 0) break;
      const head = text.slice(i, open).trim();
      let depth = 1;
      let j = open + 1;
      while (j < text.length && depth > 0) {
        if (text[j] === "{") depth++;
        else if (text[j] === "}") depth--;
        j++;
      }
      const body = text.slice(open + 1, j - 1);
      if (head.startsWith("@media")) walk(body, head);
      else out.push({ media, selector: head, body });
      i = j;
    }
  };
  walk(src, null);
  return out;
};
/** `.wrap`'s winning display at a window width: last applicable rule wins. */
const wrapDisplayAt = (css: string, width: number) => {
  let win: string | undefined;
  for (const r of rules(css)) {
    if (r.media !== null) {
      const m = /^@media \(max-width: (\d+)px\)$/.exec(r.media);
      if (!m || Number(m[1]) < width) continue;
    }
    if (!r.selector.split(",").map((x) => x.trim()).includes(".wrap")) continue;
    const v = /(?:^|;|\s)display\s*:\s*([^;]+)/.exec(r.body)?.[1].trim();
    if (v !== undefined) win = v;
  }
  return win ?? "block";
};
const CSS = readFileSync("app/components/hubScatter.module.css", "utf8");

describe("the field is hidden below 1240px, as the phone never shows it", () => {
  it.each([320, 390, 900, 901, 1024, 1100, 1239])("hidden at %ipx", (w) => {
    expect(wrapDisplayAt(CSS, w)).toBe("none");
  });
  it.each([1240, 1280, 1366, 1440, 1600, 1920])("drawn at %ipx", (w) => {
    expect(wrapDisplayAt(CSS, w)).not.toBe("none");
  });
  it("hidden by display, so no space is held for it", () => {
    expect(rules(CSS).some((r) => r.selector === ".wrap" && /visibility\s*:\s*hidden|opacity\s*:\s*0\b/.test(r.body))).toBe(false);
  });
  it("negative control: the rule that shipped drew it at 901–1239, its type at 7–9px", () => {
    const shipped = `.wrap { padding: 36px 40px 0; }\n@media (max-width: 900px) {\n  .wrap { display: none; }\n}`;
    expect(wrapDisplayAt(shipped, 1024)).toBe("block");
    expect(wrapDisplayAt(shipped, 1239)).toBe("block");
  });
});
