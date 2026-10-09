import { describe, it, expect } from "vitest";
import { readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { decl, read, rules } from "./fixtures/cssRules";

/**
 * J0-14 (design review 8 Oct 2026): Ayra Starr's section h2s are ink like
 * every board artist's; her purple keeps its page-only uses (rule 19).
 *
 * Verify-only in its own commit: J0-2 (every section h2 ink) did the work.
 * On main (d3c39eda) one of her h2s was still gold, the phone charts screen's
 * shared `.groupName` (mobileOfficialCharts.module.css), until J0-2 turned it
 * ink; no [data-brand="starrgirl"] rule ever targeted a heading, so no
 * brand-scoped colour was involved. This pins the result, so her brand cannot
 * later reach an h2 by a scoped rule, and lists
 * the purple uses that stay (fix 63 agrees): the name's gradient (.title), her
 * lead figure (.numLead .numValue) and phone total (.total), the phone kicker
 * (.kicker), the selected phone chip (.chipOn) and the one action
 * (.btnPrimary).
 */

const BRAND = '[data-brand="starrgirl"]';
const NOT_INK = /--gold|--brand-|--color-accent|--display-ramp|#945e00|#ffb627/i;

/** Every surface her three pages render an <h2> on: the component, and the sheet its h2 classes live in. */
const SURFACES: [tsx: string, css: string, ns: string][] = [
  ["app/afrobeats/[artist]/page.tsx", "app/afrobeats/[artist]/artist.module.css", "styles"],
  ["app/afrobeats/[artist]/live/page.tsx", "app/live-charts/liveCharts.module.css", "styles"],
  ["app/components/ChartExplorer.tsx", "app/records/charts/charts.module.css", "styles"],
  ["app/components/CertExplorer.tsx", "app/certifications/certifications.module.css", "styles"],
  ["app/components/MobileCerts.tsx", "app/components/mobileCerts.module.css", "styles"],
  ["app/components/MobileOfficialCharts.tsx", "app/components/mobileOfficialCharts.module.css", "styles"],
];

/** The module classes the <h2>s in `tsx` use. */
const h2Classes = (tsx: string, ns: string) =>
  [...new Set([...tsx.matchAll(/<h2\b[^>]*>/g)].flatMap((m) => [...m[0].matchAll(new RegExp(`\\b${ns}\\.(\\w+)\\b`, "g"))].map((x) => x[1])))];

const allSheets = (dir: string, out: string[] = []): string[] => {
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    if (statSync(p).isDirectory()) allSheets(p, out);
    else if (p.endsWith(".css")) out.push(p);
  }
  return out;
};

/** What a sheet does to `cls` in an h2: any rule whose last compound names it. */
const headingRules = (css: string, cls: string) =>
  rules(css).filter((r) => r.selector.split(",").some((s) => new RegExp(`\\.${cls}(?![\\w-])[^\\s]*$`).test(s.trim())));

describe("J0-14: Ayra Starr's section h2s are ink", () => {
  const H2: [css: string, cls: string][] = SURFACES.flatMap(([tsx, css, ns]) => h2Classes(read(tsx), ns).map((c) => [css, c] as [string, string]));

  it("finds her h2 classes (it would pass vacuously otherwise)", () => {
    const names = H2.map(([, c]) => c);
    for (const c of ["h2", "chartCtaTitle", "compareTitle", "logTitle", "groupTitle", "groupName", "group"]) expect(names).toContain(c);
  });

  it("no [data-brand=\"starrgirl\"] rule in any stylesheet targets one of them", () => {
    const names = new Set(H2.map(([, c]) => c));
    const hits = allSheets(join(process.cwd(), "app")).flatMap((f) =>
      rules(read(f))
        .filter((r) => r.selector.includes(BRAND))
        .filter((r) => [...names].some((c) => new RegExp(`\\.${c}(?![\\w-])`).test(r.selector)))
        .map((r) => `${f}: ${r.selector}`),
    );
    expect(hits).toEqual([]);
  });

  it.each(H2.map(([css, c]) => [css, c]))("%s .%s declares no gold or brand colour", (css, cls) => {
    for (const r of headingRules(read(css), cls)) {
      if (/:hover|:focus/.test(r.selector)) continue;
      for (const p of ["color", "-webkit-text-fill-color", "background"]) {
        const v = decl(r.body, p);
        if (v) expect(v, `${r.selector} ${p}`).not.toMatch(NOT_INK);
      }
    }
  });

  it("her purple keeps its page-only uses", () => {
    const brandRules = (f: string) => rules(read(f)).filter((r) => r.selector.includes(BRAND)).map((r) => r.selector.replace(/\s+/g, " "));
    const artist = brandRules("app/afrobeats/[artist]/artist.module.css");
    expect(artist).toContain(`${BRAND} .title`);
    expect(artist).toContain(`${BRAND} .numLead .numValue`);
    const phone = brandRules("app/components/mobileCerts.module.css");
    expect(phone.some((s) => s.includes(`${BRAND} .total`) && s.includes(`${BRAND} .kicker`))).toBe(true);
    expect(phone).toContain(`${BRAND} .chipOn`);
    expect(brandRules("app/globals.css")).toContain(`${BRAND} .btnPrimary`);
  });

  it("negative controls: a shipped gold h2 fails the colour check, and a brand rule on .title is not taken for a heading", () => {
    // app/music/[song]/song.module.css .h2 on main d3c39eda, verbatim: the
    // site's own last gold section h2 (her h2s were never gold, so the
    // control is a real shipped one, read as if it were her sheet).
    const shipped = `.h2 {
  font-family: var(--font-anton), sans-serif;
  font-weight: 400;
  font-size: 34px;
  line-height: 1.05;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  color: var(--gold);
  margin: 0;
}`;
    expect(decl(headingRules(shipped, "h2")[0].body, "color")).toMatch(NOT_INK);
    // A brand rule scoped to a heading class would be caught …
    expect(new RegExp(`\\.h2(?![\\w-])`).test(`${BRAND} .h2`)).toBe(true);
    // … and her real name rule (artist.module.css) is a brand rule but not an h2 class.
    const name = `${BRAND} .title { color: var(--brand-accent-ink); }`;
    expect(rules(name)[0].selector.includes(BRAND)).toBe(true);
    expect(H2.map(([, c]) => c)).not.toContain("title");
  });
});
