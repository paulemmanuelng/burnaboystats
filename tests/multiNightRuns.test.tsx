import { describe, it, expect, vi } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/records/tours/revenue",
  useSearchParams: () => new URLSearchParams(),
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import RevenuePage from "../app/records/tours/revenue/page";
import { revenueStands } from "../app/data/tourRevenue";
import { RUNS_HEADING, RUNS_LEDE } from "../app/lib/multiNightRuns";

/**
 * The runs beneath the revenue board — concerts reported only as one combined
 * total for several nights. The owner, 3 Oct 2026: "the list that shows the
 * concerts with more that one night, ensure they are properly stated so it has
 * a good heading". Until then both layouts headed it with a mono label,
 * "Reported as a stand — one figure for the run", and the phone rows said
 * "· 2 shows" beside "over 2 nights".
 *
 * Both layouts sit in the DOM at once, so one render covers the desktop section
 * (#runs-title) and the phone's (#runs-title-m).
 */

const html = renderToStaticMarkup(<RevenuePage />);

const decode = (s: string) =>
  s.replace(/&amp;/g, "&").replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">");
/** What a reader sees: tags out, entities decoded, whitespace collapsed. */
const text = (s: string) => decode(s.replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();

/** The section a heading id labels, as markup. */
const sectionFor = (src: string, id: string) => {
  const open = src.indexOf(`aria-labelledby="${id}"`);
  if (open < 0) return null;
  const start = src.lastIndexOf("<section", open);
  return src.slice(start, src.indexOf("</section>", open) + "</section>".length);
};
/** Its list rows, as reader text. */
const rowsOf = (section: string) => [...section.matchAll(/<li\b[\s\S]*?<\/li>/g)].map((m) => text(m[0]));

/** Every way the old list put it: the "stand" jargon and "shows" for nights. */
const jargon = (readerText: string) =>
  [/\bstands?\b/i, /\bshows?\b/i].filter((re) => re.test(readerText)).map(String);

const LAYOUTS = [
  { what: "desktop", id: "runs-title", tag: "h2" },
  { what: "phone", id: "runs-title-m", tag: "h2" },
] as const;

describe("multi-night runs: a proper heading on both layouts", () => {
  it.each(LAYOUTS)("$what: the section is headed \"Multi-night runs\" with the one-line lede", ({ id, tag }) => {
    const sec = sectionFor(html, id);
    expect(sec, `no section labelled by #${id}`).not.toBeNull();
    const h = new RegExp(`<${tag}[^>]*id="${id}"[^>]*>([\\s\\S]*?)</${tag}>`).exec(sec!);
    expect(h, `#${id} is not an <${tag}>`).not.toBeNull();
    expect(text(h![1])).toBe(RUNS_HEADING);
    expect(RUNS_HEADING).toBe("Multi-night runs");
    expect(text(sec!)).toContain(RUNS_LEDE);
  });

  it("the lede says what the list is, in one sentence", () => {
    expect(RUNS_LEDE).toMatch(/two or more nights at the same venue/);
    expect(RUNS_LEDE).toMatch(/one combined total/);
    expect(RUNS_LEDE).toMatch(/rather than ranked against single nights\.$/);
    expect(RUNS_LEDE.split(/[.!?](\s|$)/).filter((x) => x && x.trim()).length).toBe(1);
  });

  it.each(LAYOUTS)("$what: one row per run, each naming its artist (his too), venue, city, tour and dates", ({ id }) => {
    const rows = rowsOf(sectionFor(html, id)!);
    expect(rows.length).toBe(revenueStands.length);
    expect(revenueStands.some((s) => s.artist === "Burna Boy"), "no run of his: the 'his too' half proves nothing").toBe(true);
    revenueStands.forEach((s, i) => {
      for (const part of [s.flag, s.venue, s.city, s.artist, s.tour, s.dates]) {
        expect(rows[i], `row ${i + 1} (${s.venue}) is missing "${part}"`).toContain(part);
      }
    });
  });

  it.each(LAYOUTS)("$what: tickets read \"<n> tickets over <k> nights\"", ({ id }) => {
    const rows = rowsOf(sectionFor(html, id)!);
    revenueStands.forEach((s, i) => {
      expect(rows[i]).toContain(`${s.tickets} tickets over ${s.shows} nights`);
    });
  });

  it.each(LAYOUTS)("$what: says \"nights\", never \"shows\" or \"stand\", anywhere in the section", ({ id }) => {
    expect(jargon(text(sectionFor(html, id)!))).toEqual([]);
  });

  it("negative control: the heading and phone row as they shipped at f6048e12 fail the wording check", () => {
    expect(jargon("Reported as a stand — one figure for the run")).not.toEqual([]);
    expect(
      jargon("Scotiabank Arena Toronto · I Told Them… Tour · 24–25 February 2024 · 2 shows $2.802M 29,579 over 2 nights"),
    ).not.toEqual([]);
  });

  it("the source notes say \"multi-night runs\", not \"stands\"", () => {
    const page = text(html);
    expect(page).not.toMatch(/Stands reported only as one combined total/);
    expect(page).not.toMatch(/Reported as a stand/);
    // Since 4 Oct 2026 (debug pass 3 Oct, bo-06) the source notes no longer
    // repeat the runs sentence under the runs section that says it: the
    // section's own lede carries it, once on each layout.
    expect(page.match(/Multi-night runs reported only as one combined total/g)).toBeNull();
    expect(page.split(RUNS_LEDE).length - 1).toBe(2);
  });

  it("his runs keep the gold gross; another artist's does not", () => {
    for (const id of ["runs-title", "runs-title-m"]) {
      const lis = [...sectionFor(html, id)!.matchAll(/<li\b[\s\S]*?<\/li>/g)].map((m) => m[0]);
      revenueStands.forEach((s, i) => {
        const gold = /class="[^"]*(standGrossHis|grossHis)[^"]*"/.test(lis[i]);
        expect(gold, `${id} row ${i + 1} (${s.artist})`).toBe(s.artist === "Burna Boy");
      });
    }
  });
});
