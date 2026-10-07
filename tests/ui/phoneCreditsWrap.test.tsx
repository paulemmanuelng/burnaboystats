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

import AwardsPage from "../../app/records/awards/page";
import ChartsPage from "../../app/records/charts/page";
import AfricasBiggestPage from "../../app/records/africas-biggest/page";
import mobileAwards from "../../app/components/mobileAwards.module.css";
import mobileCharts from "../../app/components/mobileOfficialCharts.module.css";
import mobileAfrica from "../../app/components/mobileAfricasBiggest.module.css";

/**
 * V-records-10 (debug of 5 Oct 2026): on a phone the line under each row's
 * name — the awarded work on /records/awards, the credit and year on
 * /records/charts, the song on /records/africas-biggest — was held to one line
 * with an ellipsis, and nothing on the screen revealed the rest (no title, no
 * tap, no unfold). Read live in headless Chrome on 6 Oct, dark and light: 11
 * works, 6 credits and 1 song line cut at 390; 28, 16 and 7 at 320 —
 * "Sungba (Remix) (As…", "YoungBoy Never Broke Again & Burna Boy · …" (the
 * year gone), "“Calm Down” (Remix) / “Water” & “Ch…".
 *
 * The lines wrap now and the row grows, as the award category above the work
 * already did and as desktop's lines always have. jsdom does no layout, so this
 * pins the markup the lines carry and reads the rules; the same check runs on
 * the rules the site shipped (origin/main 7c284c03, verbatim) so a vacuous guard
 * would show. Grafted onto the live pages in headless Chrome at 320, 360, 390
 * and 430, dark and light: no line cut on any of the three pages, at most two
 * lines for a credit or a song and four for one award work at 320 ("Yaba
 * Buluku (Remix) (DJ Tárico & Burna Boy ft. Preck & Nelson Tivane)"), and no
 * sideways scroll.
 */

const html = (el: React.ReactElement) => {
  const div = document.createElement("div");
  div.innerHTML = renderToStaticMarkup(el);
  return div;
};
const texts = (root: HTMLElement, cls: string) =>
  [...root.querySelectorAll(`.${cls}`)].map((e) => (e.textContent ?? "").trim());

const decls = (css: string, cls: string) => {
  // Every rule whose selector ends on the class (".x", ".a .x", ".a .x, .b"),
  // so a rule elsewhere in the sheet cannot put the cut back.
  const clean = css.replace(/\/\*[\s\S]*?\*\//g, "");
  const out: Record<string, string> = {};
  const ends = new RegExp(`\\.${cls}$`);
  for (const m of clean.matchAll(/([^{}]+)\{([^{}]*)\}/g)) {
    if (!m[1].split(",").some((sel) => ends.test(sel.trim()))) continue;
    for (const part of m[2].split(";")) {
      const i = part.indexOf(":");
      if (i > 0) out[part.slice(0, i).trim()] = part.slice(i + 1).trim();
    }
  }
  return out;
};
const block = (css: string, selector: string) => {
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

/** What stops the line from showing whole: [] when nothing does. */
const cuts = (css: string, cls: string) => {
  const d = decls(css, cls);
  const wrong: string[] = [];
  if (/^(nowrap|pre)$/.test(d["white-space"] ?? "")) wrong.push(`white-space: ${d["white-space"]}`);
  if (d["text-overflow"] && d["text-overflow"] !== "clip") wrong.push(`text-overflow: ${d["text-overflow"]}`);
  if (/^(hidden|clip)$/.test(d["overflow"] ?? "")) wrong.push(`overflow: ${d["overflow"]}`);
  for (const p of ["-webkit-line-clamp", "line-clamp", "max-height", "height"]) if (d[p]) wrong.push(`${p}: ${d[p]}`);
  return wrong;
};

const SHEETS = [
  { screen: "awards", file: "app/components/mobileAwards.module.css", line: "work", column: ".nomMain" },
  { screen: "official charts", file: "app/components/mobileOfficialCharts.module.css", line: "rowCredit", column: ".rowMain" },
  { screen: "Africa's biggest", file: "app/components/mobileAfricasBiggest.module.css", line: "rowSub", column: ".rowMain" },
];

// The rules the three screens shipped with (origin/main 7c284c03), verbatim.
const SHIPPED: Record<string, string> = {
  work: `
.work {
  font-family: var(--font-geist-sans), system-ui, sans-serif;
  font-size: var(--type-caption);
  color: var(--text-muted);
  margin-top: 3px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}`,
  rowCredit: `
.rowToggle .rowTitle,
.rowToggle .rowCredit,
.rowToggle .rowBest,
.rowToggle .rowCount { display: block; }
.rowCredit {
  font-family: var(--font-geist-sans), system-ui, sans-serif;
  font-size: var(--type-caption);
  color: var(--text-muted);
  margin-top: 3px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}`,
  rowSub: `
.rowSub {
  display: block;
  font-family: var(--font-geist-sans), system-ui, sans-serif;
  font-size: var(--type-caption);
  color: var(--text-muted);
  margin-top: 2px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.rowHis .rowSub { color: var(--gold-dim); }`,
};

describe("phone records screens: the line under a row's name is never cut", () => {
  it("the classes carry the lines the sweep found cut", () => {
    const awards = texts(html(<AwardsPage />), mobileAwards.work);
    // The credit line's own text, before the "co-lead" tag the credit-role
    // rule added after it (7 Oct 2026) — both rows below are co-leads.
    const chartsPage = html(<ChartsPage />);
    const tagged = [...chartsPage.querySelectorAll(`.${mobileCharts.rowCredit}`)].filter((e) => e.querySelector(`.${mobileCharts.roleTag}`));
    for (const t of chartsPage.querySelectorAll(`.${mobileCharts.roleTag}`)) t.remove();
    const charts = texts(chartsPage, mobileCharts.rowCredit);
    expect(tagged.some((e) => /^YoungBoy Never Broke Again & Burna Boy · \d{4}$/.test(e.textContent!.trim()))).toBe(true);
    const africa = texts(html(<AfricasBiggestPage />), mobileAfrica.rowSub);
    expect(awards).toContain("Sungba (Remix) (Asake ft. Burna Boy)");
    expect(awards).toContain("Yaba Buluku (Remix) (DJ Tárico & Burna Boy ft. Preck & Nelson Tivane)");
    // The credit ends on the year: the part an ellipsis took first.
    expect(charts.some((t) => /^YoungBoy Never Broke Again & Burna Boy · \d{4}$/.test(t))).toBe(true);
    expect(charts.some((t) => /^Coldplay ft\. Little Simz, Burna Boy, Elyanna & TINI · \d{4}$/.test(t))).toBe(true);
    expect(africa.some((t) => t.includes("“Water” & “Chanel”"))).toBe(true);
  });

  it.each(SHEETS.map((s) => [s.screen, s]))("%s: the line wraps and its column can narrow", (_screen, s) => {
    const css = readFileSync(s.file, "utf8");
    expect(cuts(css, s.line)).toEqual([]);
    // A grid/flex child that cannot narrow would push the row sideways instead.
    expect(block(css, s.column)["min-width"]).toBe("0");
    // Nothing else about the line's type changed.
    const { overflow: _o, "text-overflow": _t, "white-space": _w, ...rest } = decls(SHIPPED[s.line], s.line);
    expect(decls(css, s.line)).toMatchObject(rest);
  });

  it.each(SHEETS.map((s) => [s.screen, s.line]))("negative control: the shipped %s rule cuts the line", (_screen, line) => {
    expect(cuts(SHIPPED[line], line)).toEqual(["white-space: nowrap", "text-overflow: ellipsis", "overflow: hidden"]);
  });
});
