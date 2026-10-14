import { renderToStaticMarkup } from "react-dom/server";
import type { ReactElement } from "react";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/records/charts",
  useSearchParams: () => new URLSearchParams(),
  notFound: () => {
    throw new Error("notFound()");
  },
}));
vi.mock("next/link", () => ({
  default: ({ href, children, prefetch: _p, ...rest }: { href: string; children: React.ReactNode; prefetch?: boolean | null }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import ChartsPage from "../../app/records/charts/page";
import ArtistChartsPage from "../../app/afrobeats/[artist]/charts/page";
import { BURNA_LAST_CHART_SWEEP } from "../../app/data/charts";
import { provDateText } from "../../app/lib/provenance";

/**
 * /records/charts on the phone (design review 8 Oct 2026, J1-17): the note at
 * the foot is dated, "Checked {BURNA_LAST_CHART_SWEEP}" — the day the chart
 * bodies were last read by hand, so "Checked" (fix 10), never "As of", which
 * is for a month (C-29) — through the P3's own `date`. A board artist's
 * charts page carries no sweep date of Burna Boy's, so its P3 prints none.
 */

const parse = (html: string) => new DOMParser().parseFromString(html, "text/html");
const words = (el: Element | null | undefined) => (el?.textContent ?? "").replace(/ /g, " ").replace(/\s+/g, " ").trim();
const desktop = (el: Element) => !!el.closest('[class*="desktopOnly"], [class*="desktopBody"], [data-build="desktop"]');
const phoneP3 = (doc: Document) => [...doc.querySelectorAll('[data-provenance="p3"]')].filter((n) => !desktop(n));

const BURNA = parse(renderToStaticMarkup(<ChartsPage />));
const TYLA = parse(
  renderToStaticMarkup(
    await (ArtistChartsPage as (p: { params: Promise<{ artist: string }> }) => Promise<ReactElement>)({ params: Promise.resolve({ artist: "tyla" }) }),
  ),
);

describe("the phone P3 on /records/charts carries its date", () => {
  it("'Checked {BURNA_LAST_CHART_SWEEP}.' at the end of the note, before the data line", () => {
    const p3s = phoneP3(BURNA);
    expect(p3s).toHaveLength(1);
    const note = p3s[0].querySelector("[data-provenance-note]")!;
    const time = note.querySelector("time")!;
    expect(time.getAttribute("datetime")).toBe(BURNA_LAST_CHART_SWEEP);
    expect(words(note)).toMatch(new RegExp(`Genre charts excluded\\. Checked ${provDateText({ label: "Checked", day: BURNA_LAST_CHART_SWEEP })}\\.$`));
    expect(words(note).startsWith("Peaks on each country's principal national chart —")).toBe(true);
    // The data line still follows the note.
    expect(p3s[0].querySelector("[data-provenance-data]")).not.toBeNull();
  });

  it("a board artist's charts page prints no date", () => {
    const p3s = phoneP3(TYLA);
    expect(p3s).toHaveLength(1);
    expect(p3s[0].querySelector("time")).toBeNull();
    expect(words(p3s[0])).not.toMatch(/\bChecked\b/);
  });
});

describe("negative controls", () => {
  it("the note as it shipped on 8 Oct 2026 has no date", () => {
    // Verbatim from burnaboystats.com/records/charts, 8 Oct 2026.
    const shipped = parse(
      `<p class="mobileOfficialCharts-module__6EDslq__footNote">Peaks on each country&#x27;s principal national chart — 37 national bodies, 18 airplay or monitor charts where a country has no other, 14 Billboard country charts and 2 worldwide. Genre charts excluded.</p>`,
    );
    expect(shipped.querySelector("time")).toBeNull();
    expect(words(shipped.body)).not.toMatch(/Checked \d{1,2} \w{3} \d{4}\.$/);
  });

  it("the response's 'As of {day}' breaks fix 10: 'As of' takes a month", () => {
    // The response drew "As of 6 Oct 2026"; the closed set gives a day its own label.
    const asOfDay = /As of \d{1,2} (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) \d{4}/;
    expect("As of 6 Oct 2026").toMatch(asOfDay);
    expect(words(phoneP3(BURNA)[0])).not.toMatch(asOfDay);
  });
});
