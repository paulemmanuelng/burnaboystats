import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/on-this-day",
  notFound: () => {
    throw new Error("notFound() — the fixture day no longer exists");
  },
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import DayPage from "../app/on-this-day/[day]/page";
import MobileOnThisDayDay from "../app/components/MobileOnThisDayDay";
import { dayBySlug, onThisDayDays, onThisDayEvents } from "../app/lib/onThisDay";
import { dayPostCard, dayPreview } from "../app/lib/onThisDayShare";
import { honours } from "../app/data/awards";
import { concerts } from "../app/data/tours";

/**
 * The data copy the design response flagged (§5, change list 22; Paul, 26 Sep
 * 2026): "Burna Boy Day" takes curly quotes like every other title; a detail
 * that repeats its source prints once; "Xperience" and "Experience" stay, as
 * both are the shows' own names.
 */

const STRAIGHT = /"/;

describe("“Burna Boy Day” in curly quotes", () => {
  it("the honour reads as the other titles do", () => {
    const h = honours.find((x) => x.date === "2024-03-02");
    expect(h?.title).toBe("“Burna Boy Day” Proclamation");
    expect(h?.note).toContain("declared “Burna Boy Day” by the Boston City Council");
  });

  it("no milestone's headline or detail carries a straight double quote", () => {
    const bad = onThisDayEvents.filter((e) => STRAIGHT.test(e.headline) || STRAIGHT.test(e.detail));
    expect(bad.map((e) => e.headline)).toEqual([]);
  });

  it("a negative control: the check catches the title the first build printed", () => {
    // app/data/awards.ts @ 78c816c2.
    expect(STRAIGHT.test("\"Burna Boy Day\" Proclamation")).toBe(true);
    expect(STRAIGHT.test("“Burna Boy Day” Proclamation")).toBe(false);
  });
});

describe("a detail that repeats its source prints once", () => {
  // 146 of the 228 events when the design was drawn: a tour name, a place,
  // "IFPI Sverige" or "BPI" as both. The pages print the detail; the post
  // card prints the source, and only a publisher; neither prints it twice.
  const repeats = onThisDayEvents.filter((e) => e.detail === e.body);
  const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/'/g, "&#x27;").replace(/"/g, "&quot;");
  const alone = (html: string, t: string) => html.split(`>${esc(t)}<`).length - 1;

  it("there are such details to check", () => {
    expect(repeats.length).toBeGreaterThan(0);
  });

  it("each day page prints it once per event, in each layout, and nowhere else", async () => {
    const days = onThisDayDays.filter((d) => d.events.some((e) => e.detail === e.body));
    const bad: string[] = [];
    for (const d of days) {
      const page = renderToStaticMarkup(await DayPage({ params: Promise.resolve({ day: d.slug }) }));
      const phone = renderToStaticMarkup(<MobileOnThisDayDay day={d} />);
      const desk = page.replace(phone, "");
      for (const t of new Set(d.events.filter((e) => e.detail === e.body).map((e) => e.detail))) {
        const want = d.events.filter((e) => e.detail === t).length;
        if (alone(desk, t) !== want || alone(phone, t) !== want) bad.push(`${d.slug}: ${t}`);
      }
    }
    expect(bad).toEqual([]);
  }, 60000);

  it("the post card never prints its record line and its source as the same words", () => {
    const bad = onThisDayDays.filter((d) => {
      const c = dayPostCard(d);
      if (!c.record || !c.source) return false;
      const r = c.record.toUpperCase();
      return r.includes(c.source) || c.source.includes(r);
    });
    expect(bad.map((d) => d.slug)).toEqual([]);
  });

  it("the link preview prints neither: its meta line is the year, the kind and the count", () => {
    const bad = onThisDayDays.filter((d) => {
      const p = dayPreview(d);
      const lead = d.lead;
      return lead.detail === lead.body && (p.meta.includes(lead.detail.toUpperCase()) || p.kicker.includes(lead.detail.toUpperCase()));
    });
    expect(bad.map((d) => d.slug)).toEqual([]);
  });
});

describe("“Xperience” and “Experience” stay as written", () => {
  it("both are the shows' own names, on their own days", () => {
    expect(concerts.map((c) => c.name)).toEqual(expect.arrayContaining(["Burna Boy Xperience", "Burna Boy Experience"]));
    expect(dayBySlug("22-march")?.events.map((e) => e.headline)).toContain("Burna Boy Xperience");
    expect(dayBySlug("23-march")?.events.map((e) => e.headline)).toContain("Burna Boy Experience");
  });
});
