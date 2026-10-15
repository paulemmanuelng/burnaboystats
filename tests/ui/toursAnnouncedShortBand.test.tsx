import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/records/tours",
  useSearchParams: () => new URLSearchParams(),
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import ToursPage from "../../app/records/tours/page";
import styles from "../../app/records/tours/tours.module.css";
import { upcomingShows } from "../../app/data/tours";
import { splitAnnounced } from "../../app/lib/announcedShows";
import { decl, read, rules } from "../fixtures/cssRules";

/**
 * C-20 (Job 3's PR #488, "for you"; Paul, 14 Oct 2026, "yes all"): at
 * 901–1239 the desktop tours hero's Announced panel prints each show's
 * one-line `short` (tours.ts) instead of its full note. The panel is 360px
 * beside the lede there, and with three full notes it ran past the left
 * column — measured on the dev server at 1024, the panel ended at y 871.4 and
 * the left column at 563.7, 307.7px lower (light and dark alike; 221.7px at
 * 901, 350.1px at 1239). 1240 and up keep the full note; the phone
 * (MobileTours) is its own component and already prints `short`.
 */

const CSS = read("app/records/tours/tours.module.css");
const parse = (html: string) => new DOMParser().parseFromString(html, "text/html");
const clean = (s: string | null | undefined) => (s ?? "").replace(/\s+/g, " ").trim();

/** Does a `@media` prelude (min-/max-width only, as this sheet writes them) hold at W? */
function holds(media: string | null, W: number): boolean {
  if (media === null) return true;
  const parts = [...media.matchAll(/\((min|max)-width:\s*(\d+)px\)/g)];
  if (parts.length === 0) return false;
  return parts.every(([, kind, n]) => (kind === "min" ? W >= Number(n) : W <= Number(n)));
}
/** The `display` the sheet gives a single class at W (equal specificity: the last rule wins). */
function display(cls: string, W: number, css = CSS): string | undefined {
  let v: string | undefined;
  for (const r of rules(css)) {
    if (!holds(r.media, W)) continue;
    if (!r.selector.split(",").map((s) => s.trim()).includes(`.${cls}`)) continue;
    v = decl(r.body, "display") ?? v;
  }
  return v;
}
/** The words a note paragraph prints at W: its text, less any of its two spans the sheet hides there. */
function printed(p: Element, W: number, css = CSS): string {
  const local = (el: Element) => (["upcomingFull", "upcomingShort"] as const).find((k) => el.classList.contains(styles[k]));
  return clean(
    [...p.childNodes]
      .map((n) => {
        if (n.nodeType === 3) return n.textContent;
        const k = local(n as Element);
        return k && display(k, W, css) === "none" ? "" : (n as Element).textContent;
      })
      .join(""),
  );
}

function panelOn(iso: string) {
  vi.useFakeTimers({ toFake: ["Date"] });
  vi.setSystemTime(new Date(`${iso}T12:00:00Z`));
  const doc = parse(renderToStaticMarkup(ToursPage()));
  vi.useRealTimers();
  return doc.querySelector(`.${styles.desktopOnly} .${styles.ticketPanel}`)!;
}
const noteOf = (row: Element) => row.querySelector(`.${styles.upcomingText}`)!;

describe("the Announced panel at 901–1239 prints each show's short", () => {
  const panel = panelOn("2026-10-08");
  const { announced } = splitAnnounced(upcomingShows, "2026-10-08");
  const rows = [...panel.querySelectorAll('[data-announced="announced"] .' + styles.upcomingRow)];

  it("every announced show has a one-line short to print (none falls back)", () => {
    expect(rows.length).toBe(announced.length);
    expect(announced.length).toBeGreaterThan(0);
    for (const u of announced) expect(u.short.trim(), u.venue).not.toBe("");
  });

  it.each([901, 1024, 1100, 1239])("at %ipx each row prints its short, not its note", (W) => {
    rows.forEach((row, i) => {
      expect(printed(noteOf(row), W)).toBe(clean(announced[i].short));
    });
  });

  it.each([1240, 1440, 1920])("at %ipx each row prints its full note, as before", (W) => {
    rows.forEach((row, i) => {
      expect(printed(noteOf(row), W)).toBe(clean(announced[i].note));
    });
  });

  it("the phone is untouched: MobileTours uses neither class, and the switch is a ≤1239 rule, which only the 901–1239 band sees", () => {
    expect(read("app/components/MobileTours.tsx")).not.toMatch(/upcomingFull|upcomingShort/);
    const own = rules(CSS).filter((r) => /\.upcoming(Full|Short)\b/.test(r.selector));
    expect(own.map((r) => [r.media, r.selector])).toEqual([
      [null, ".upcomingShort"],
      ["@media (max-width: 1239px)", ".upcomingFull"],
      ["@media (max-width: 1239px)", ".upcomingShort"],
    ]);
    // The desktop tree, panel and all, is hidden up to 900.
    expect(display("desktopOnly", 900)).toBe("none");
    expect(display("desktopOnly", 901)).toBe("block");
  });

  it("a played show keeps the one short line it always printed, at every width", () => {
    const played = panelOn("2026-10-30");
    const box = played.querySelector('[data-announced="played"]')!;
    expect(box).not.toBeNull();
    for (const p of box.querySelectorAll(`.${styles.upcomingText}`)) {
      expect(p.querySelector(`.${styles.upcomingFull}, .${styles.upcomingShort}`)).toBeNull();
      expect(upcomingShows.map((u) => clean(u.short))).toContain(printed(p, 1024));
    }
  });

  it("negative control: main's row printed the full note at 1024", () => {
    // records/tours/page.tsx on main (9873d85a) rendered each announced row's
    // note as `<p className={styles.upcomingText}>{g.text(u)}</p>`, g.text
    // being `u.note`, with no rule for the band: Stade de France's, as served.
    const nfl = upcomingShows.find((u) => u.venue === "Stade de France")!;
    const shipped = parse(`<p class="${styles.upcomingText}">${nfl.note}</p>`).querySelector("p")!;
    const SHIPPED_CSS = `.upcomingText { font-size: 13px; line-height: 1.5; color: var(--text-body); margin-top: 4px; max-width: var(--measure); }`;
    expect(printed(shipped, 1024, SHIPPED_CSS)).toBe(clean(nfl.note));
    expect(printed(shipped, 1024, SHIPPED_CSS)).not.toBe(clean(nfl.short));
  });
});
