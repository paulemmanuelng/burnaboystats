import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/music/listeners",
}));

import ListenersPage from "../../app/music/listeners/page";
import phoneStyles from "../../app/components/mobileListeners.module.css";
import deskStyles from "../../app/music/listeners/listeners.module.css";
import {
  listenerCities,
  compactListeners,
  MONTHLY_LISTENERS_ON_READ,
  listenersReadOnLabel,
} from "../../app/data/listeners";
import { read, rules } from "../fixtures/cssRules";

/**
 * listenersNoInsightRow (owner, 16 Oct 2026: "remove this"). Job 5 · J5-5
 * (fix 106, drawn for 1440 by fix 108) put three tiles under the hero lede on
 * both layouts — "33% in the top 50 cities · 20% of the top 50 · Nigeria's 4
 * cities · 42 of 50 outside Africa" — and a meta line under them that
 * repeated the stat line ("15.09M of 45.97M monthly listeners · read
 * 2 October 2026"). The owner had both taken off. Neither layout prints the
 * tiles or the meta; the hero is kicker, title, lede (and, on the laptop, the
 * stat line straight after the lede, as before J5-5); the map, the list and
 * the notes are unchanged. The link preview still prints the share
 * (tests/ogFigureCards.test.tsx).
 *
 * The figures are worked out here from the 50 rows, not from the helpers the
 * page prints with. The shipped strings are main 117b3360's own, as it
 * rendered them (reading of 2 October 2026).
 */
const parse = (html: string) => new DOMParser().parseFromString(html, "text/html");
const doc = () => parse(renderToStaticMarkup(<ListenersPage />));
const norm = (s: string | null | undefined) => (s ?? "").replace(/\s+/g, " ").trim();

const sum = (xs: number[]) => xs.reduce((a, b) => a + b, 0);
const top50 = sum(listenerCities.map((c) => c.listeners));
const n = listenerCities.length;
const AFRICAN = new Set(["Nigeria", "Kenya", "South Africa", "Ghana"]);
const outside = listenerCities.filter((c) => !AFRICAN.has(c.country)).length;
const countries = new Set(listenerCities.map((c) => c.country)).size;
const millions = (x: number) => `${(x / 1e6).toFixed(2)}M`;

/** The row's labels as the page printed them (app/data/listeners.ts on main
 *  117b3360: listenerInsights().tiles[].label), and the meta line's shape. */
const TILE_LABELS = ["in the top 50 cities", "of the top 50 · Nigeria's 4 cities", "outside Africa"];
const META = /[\d.]+M of [\d.]+M monthly listeners · read \d{1,2} \w+ \d{4}/;

/** What main 117b3360 printed between the laptop lede and the stat line (and
 *  under the phone lede): the three tiles' text, then the meta line. */
const SHIPPED_ROW = ["33% in the top 50 cities", "20% of the top 50 · Nigeria's 4 cities", "42 of 50 outside Africa"];
const SHIPPED_META = "15.09M of 45.97M monthly listeners · read 2 October 2026";

/** Every trace of the row in a hero's text: each tile label, and the meta. */
function leftovers(text: string): string[] {
  const t = norm(text);
  const found = TILE_LABELS.filter((l) => t.includes(l));
  const m = t.match(META);
  return m ? [...found, m[0]] : found;
}

const LAYOUTS = [
  ["laptop", () => doc().querySelector(`section.${deskStyles.head}`)!, [deskStyles.kicker, deskStyles.title, deskStyles.lede, deskStyles.counts]],
  ["phone", () => doc().querySelector(`.${phoneStyles.screen} .${phoneStyles.hero}`)!, [phoneStyles.kicker, phoneStyles.title, phoneStyles.lede]],
] as const;

describe("listenersNoInsightRow: the insight row and its meta line are gone from both layouts", () => {
  it.each(LAYOUTS)("%s: the hero is the kicker, the title and the lede (and the laptop's stat line), nothing between", (_, hero, classes) => {
    const h = hero();
    expect(h).not.toBeNull();
    expect([...h.children].map((c) => c.className)).toEqual(classes);
  });

  it.each(LAYOUTS)("%s: the hero prints no tile and no meta line", (_, hero) => {
    expect(leftovers(hero().textContent ?? "")).toEqual([]);
    const t = norm(hero().textContent);
    // The three tile figures as the row printed them ("42 of 50"), from the data.
    expect(t).not.toContain(`${outside} of ${n}`);
    expect(t).not.toContain(`${millions(top50)} of ${millions(MONTHLY_LISTENERS_ON_READ)} monthly listeners`);
    expect(t).not.toMatch(/\d%/);
  });

  it("laptop: the stat line sits straight under the lede and still reads 50 · 29 · 45.97M with the date", () => {
    const d = doc();
    const lede = d.querySelector(`section.${deskStyles.head} .${deskStyles.lede}`)!;
    const counts = lede.nextElementSibling!;
    expect(counts.className).toBe(deskStyles.counts);
    const bigs = [...counts.querySelectorAll(`.${deskStyles.countBig}`)].map((b) => b.textContent);
    expect(bigs).toEqual([String(n), String(countries), compactListeners(MONTHLY_LISTENERS_ON_READ)]);
    expect(norm(counts.textContent)).toContain(`monthly listeners · ${listenersReadOnLabel}`);
  });

  it("phone: the lede closes the hero and the map (its chips, then its card) follows it", () => {
    const hero = doc().querySelector(`.${phoneStyles.screen} .${phoneStyles.hero}`)!;
    expect(hero.lastElementChild?.className).toBe(phoneStyles.lede);
    expect(hero.nextElementSibling?.querySelector(`.${phoneStyles.mapCard}`)).not.toBeNull();
  });

  it.each([
    ["laptop", `.${deskStyles.desktopOnly}`, `.${deskStyles.cityRow}`],
    ["phone", `.${phoneStyles.screen}`, `.${phoneStyles.city}`],
  ] as const)("%s: the map, the 50 and the notes still render", (_, scope, row) => {
    const root = doc().querySelector(scope)!;
    const map = root.querySelector('[role="group"]')!;
    expect(map).not.toBeNull();
    expect(map.querySelectorAll('[role="button"]').length).toBeGreaterThan(0);
    expect(map.querySelector(`[role="button"][aria-label^="${listenerCities[0].city},"]`)).not.toBeNull();
    expect(root.querySelectorAll(row)).toHaveLength(n);
    // The notes keep the facts the row had promoted: "42 of the 50 … outside Africa".
    expect(norm(root.textContent)).toMatch(new RegExp(`${outside} of the ${n}( cities)? are outside Africa`));
  });

  it.each([
    "app/music/listeners/listeners.module.css",
    "app/components/mobileListeners.module.css",
  ])("%s: no rule for the row is left, at any width", (file) => {
    const dead = rules(read(file)).filter((r) => /\.insight(?:s|Value|Of|Label|Meta)?\b/.test(r.selector));
    expect(dead.map((r) => `${r.media ?? ""} ${r.selector}`.trim())).toEqual([]);
  });

  it.each([
    "app/music/listeners/page.tsx",
    "app/components/MobileListeners.tsx",
  ])("%s: no longer calls listenerInsights() or draws styles.insight*", (file) => {
    const src = read(file);
    expect(src).not.toMatch(/listenerInsights\s*\(/);
    expect(src).not.toMatch(/styles\.insight/);
  });

  it("negative control: main's row, as it rendered, trips the check", () => {
    // The laptop hero on main 117b3360 between the lede and the stat line; the
    // phone printed the same row and meta under its lede.
    const shipped = `${SHIPPED_ROW.join(" ")} ${SHIPPED_META}`;
    expect(leftovers(shipped)).toEqual([...TILE_LABELS, SHIPPED_META]);
    // And main's source lines (page.tsx:52 and :86, MobileListeners.tsx:47 and :87).
    for (const line of [
      "  const insights = listenerInsights();",
      "          <p className={styles.insightMeta}>{insights.meta}</p>",
    ]) expect(/listenerInsights\s*\(/.test(line) || /styles\.insight/.test(line)).toBe(true);
    // And main's CSS rule.
    expect(rules(".insightMeta { margin: 10px 0 0; }").some((r) => /\.insight(?:s|Value|Of|Label|Meta)?\b/.test(r.selector))).toBe(true);
  });
});

describe("one format per screen on the phone: the list prints full figures", () => {
  const full = /^\d{1,3}(,\d{3})*$/;

  it("every row of The 50 and every city in By country is a full figure", () => {
    const d = doc();
    const phone = d.querySelector(`.${phoneStyles.screen}`)!;
    const counts = [...phone.querySelectorAll(`.${phoneStyles.cityCount}`)].map((c) => c.textContent!);
    expect(counts).toHaveLength(listenerCities.length);
    for (const c of counts) expect(c).toMatch(full);
    for (const p of phone.querySelectorAll(`.${phoneStyles.regionList}`)) expect(p.textContent).not.toMatch(/\d(?:\.\d+)?[MK]\b/);
  });

  it("negative control: the shipped row printed the compact figure", () => {
    // MobileListeners.tsx:94 on main e85e6efe: {compactListeners(c.listeners)}.
    const shipped = (x: number) => compactListeners(x);
    expect(shipped(listenerCities[0].listeners)).not.toMatch(full);
  });
});
