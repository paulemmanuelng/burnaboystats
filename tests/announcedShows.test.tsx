import { describe, it, expect, vi, afterEach } from "vitest";
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

import ToursPage, { revalidate } from "../app/records/tours/page";
import { upcomingShows } from "../app/data/tours";
import { lastPossibleDay, splitAnnounced, splitPlayed, PLAYED_NOTE, PLAYED_NOTE_SHORT } from "../app/lib/announcedShows";
import { londonDate } from "../app/lib/onThisDay";

/**
 * T-02 of the design review of 8 Oct 2026: announced shows never expired.
 * `upcomingShows` was printed as stored on a static page, so from 26 Oct 2026
 * /records/tours would still have listed the 25 Oct Stade de France halftime
 * show under "Announced · Not yet played", on both layouts. The page now reads
 * each show's date against London's day (lib/announcedShows) and files a show
 * whose day has gone by as "Played · awaiting a box-office report".
 */

const parse = (html: string) => new DOMParser().parseFromString(html, "text/html");
const clean = (s: string | null | undefined) => (s ?? "").replace(/\s+/g, " ").trim();

/** Both layouts' announced boxes, as rendered on `iso` (noon UTC). */
function boxesOn(iso: string) {
  vi.useFakeTimers({ toFake: ["Date"] });
  vi.setSystemTime(new Date(`${iso}T12:00:00Z`));
  const doc = parse(renderToStaticMarkup(ToursPage()));
  const desktop = doc.querySelector('[class*="_desktopOnly_"]')!;
  const phone = doc.querySelector('[class*="_screen_"]')!;
  // `_upcoming_` is the box itself; its parts are _upcomingHead_, _upcomingRow_ …
  const boxes = (root: Element) =>
    [...root.querySelectorAll('[class*="_upcoming_"]')].map((b) => ({
      tag: clean(b.querySelector('[class*="_upcomingTag_"]')?.textContent),
      head: clean(b.querySelector('[class*="_upcomingHead_"]')?.textContent),
      text: clean(b.textContent),
    }));
  return { desktop: boxes(desktop), phone: boxes(phone) };
}

afterEach(() => {
  vi.useRealTimers();
});

describe("an announced show's date is read against today", () => {
  it("every stored `when` is a form that can expire", () => {
    // An unreadable date would never move out of "Not yet played".
    for (const u of upcomingShows) expect(lastPossibleDay(u.when), `${u.venue}: "${u.when}"`).not.toBeNull();
    expect(lastPossibleDay("25 Oct 2026")).toBe("2026-10-25");
    expect(lastPossibleDay("2027")).toBe("2027-12-31");
  });

  it("the show's own day is still announced; the day after, it is played", () => {
    const nfl = upcomingShows.find((u) => u.venue === "Stade de France")!;
    expect(nfl.when).toBe("25 Oct 2026");
    expect(splitAnnounced([nfl], "2026-10-25").played).toEqual([]);
    expect(splitAnnounced([nfl], "2026-10-26").played).toEqual([nfl]);
    // A bare year waits for the year to be out.
    const london = upcomingShows.find((u) => u.venue === "London Stadium")!;
    expect(splitAnnounced([london], "2027-12-31").played).toEqual([]);
    expect(splitAnnounced([london], "2028-01-01").played).toEqual([london]);
  });
});

describe("/records/tours on 26 Oct 2026, the day after the Stade de France show", () => {
  // The NFL halftime show will never report a gross (Paul, "defaults",
  // 10 Oct 2026: `noBoxOffice`), so its Played box reads just "Played".
  it("desktop: no 'Not yet played' box lists it; a 'Played' box with no awaiting line does", () => {
    const { desktop } = boxesOn("2026-10-26");
    const notYet = desktop.filter((b) => b.head.includes("Not yet played"));
    expect(notYet.length).toBe(1);
    expect(notYet[0].text).not.toContain("Stade de France");
    expect(notYet[0].text).toContain("Apple Music Hall");
    const played = desktop.filter((b) => b.tag === "Played");
    expect(played.length).toBe(1);
    expect(played[0].head).toBe("Played");
    expect(played[0].text).not.toContain("Awaiting");
    expect(played[0].text).toContain("Stade de France");
    expect(played[0].text).toContain("25 Oct 2026");
  });

  it("phone: the Announced card counts and lists the two still to come; the Played card holds it, with no awaiting line", () => {
    const { phone } = boxesOn("2026-10-26");
    const announced = phone.filter((b) => b.tag === "Announced");
    expect(announced.length).toBe(1);
    expect(announced[0].text).not.toContain("Stade de France");
    expect(announced[0].head).toContain("2 shows");
    const played = phone.filter((b) => b.tag === "Played");
    expect(played.length).toBe(1);
    expect(played[0].head).toBe("Played");
    expect(played[0].text).not.toContain("Awaiting");
    expect(played[0].text).toContain("Stade de France");
    expect(played[0].text).toContain("25 Oct 2026");
  });

  it("on 30 Oct both October shows are played and read just 'Played'; London Stadium (2027) is still announced", () => {
    const { desktop, phone } = boxesOn("2026-10-30");
    for (const layout of [desktop, phone]) {
      const played = layout.filter((b) => b.tag === "Played");
      expect(played.length).toBe(1);
      expect(played[0].head).toBe("Played");
      expect(played[0].text).not.toContain("Awaiting");
      expect(played[0].text).toContain("Stade de France");
      expect(played[0].text).toContain("Apple Music Hall");
      const announced = layout.find((b) => b.tag === "Announced")!;
      expect(announced.text).toContain("London Stadium");
      expect(announced.text).not.toContain("Apple Music Hall");
    }
  });

  it("a played row prints the one-line short, not the announcement written before the night", () => {
    // Review of fix/dr-tours: desktop printed each played show's full note, so
    // from 30 Oct "Played" would have held Apple Music Hall's "On-sale details
    // are still to come." The phone already printed `short`.
    const apple = upcomingShows.find((u) => u.venue === "Apple Music Hall")!;
    expect(apple.note).toContain("On-sale details are still to come.");
    const { desktop, phone } = boxesOn("2026-10-30");
    for (const layout of [desktop, phone]) {
      const played = layout.find((b) => b.tag === "Played")!;
      expect(played.text).not.toContain("On-sale details are still to come.");
      for (const u of upcomingShows.filter((s) => played.text.includes(s.venue))) {
        expect(played.text).toContain(clean(u.short));
        expect(played.text).not.toContain(clean(u.note));
      }
    }
    // While it is still to come, desktop keeps the full note.
    const announced = boxesOn("2026-10-08").desktop.find((b) => b.tag === "Announced")!;
    expect(announced.text).toContain(clean(apple.note));
  });

  it("before the show nothing changes: all three announced, no Played box", () => {
    const { desktop, phone } = boxesOn("2026-10-08");
    for (const layout of [desktop, phone]) {
      expect(layout.map((b) => b.tag)).toEqual(["Announced"]);
      for (const venue of upcomingShows.map((u) => u.venue)) expect(layout[0].text).toContain(venue);
    }
    expect(phoneHeadOn("2026-10-08")).toContain(`${upcomingShows.length} shows`);
  });
});

const phoneHeadOn = (iso: string) => boxesOn(iso).phone.find((b) => b.tag === "Announced")!.head;

describe("a show that will never report a gross reads just 'Played' (Paul, \"defaults\", 10 Oct 2026)", () => {
  it("exactly the NFL halftime show and the 600-capacity Apple Music Hall show are flagged; London Stadium is not", () => {
    expect(upcomingShows.filter((u) => u.noBoxOffice).map((u) => `${u.venue}, ${u.when}`)).toEqual([
      "Stade de France, 25 Oct 2026",
      "Apple Music Hall, 29 Oct 2026",
    ]);
    expect(upcomingShows.find((u) => u.venue === "Apple Music Hall")!.cap).toBe(600);
    expect(upcomingShows.find((u) => u.venue === "London Stadium")!.noBoxOffice).toBeUndefined();
  });

  it("splitPlayed keeps a show awaiting a report apart from one that never will", () => {
    const played = splitAnnounced(upcomingShows, "2028-01-01").played;
    const { awaiting, noReport } = splitPlayed(played);
    expect(awaiting.map((u) => u.venue)).toEqual(["London Stadium"]);
    expect(noReport.map((u) => u.venue)).toEqual(["Stade de France", "Apple Music Hall"]);
  });

  it("1 Jan 2028, all three played: London Stadium keeps the awaiting line, the October nights do not, on both layouts", () => {
    const { desktop, phone } = boxesOn("2028-01-01");
    for (const [layout, note] of [[desktop, PLAYED_NOTE], [phone, PLAYED_NOTE_SHORT]] as const) {
      const played = layout.filter((b) => b.tag === "Played");
      expect(played.map((b) => b.head)).toEqual([clean(`Played${note}`), "Played"]);
      expect(played[0].text).toContain("London Stadium");
      expect(played[0].text).not.toContain("Stade de France");
      expect(played[1].text).toContain("Stade de France");
      expect(played[1].text).toContain("Apple Music Hall");
      expect(played[1].text).not.toContain("Awaiting");
    }
  });

  it("negative control: the heads main printed over Stade de France on 26 Oct fail the plain 'Played' check", () => {
    // records/tours/page.tsx and MobileTours.tsx on main ca597020 printed one
    // Played box whose head always carried the awaiting note — the head's
    // text as boxesOn reads it (the shipped test only asked it to contain
    // "Awaiting a box-office report").
    const SHIPPED = {
      desktop: "PlayedAwaiting a box-office report — no gross, no attendance yet",
      phone: "PlayedAwaiting a box-office report",
    };
    expect(SHIPPED.desktop).toBe(clean(`${"Played"}${PLAYED_NOTE}`));
    expect(SHIPPED.phone).toBe(clean(`${"Played"}${PLAYED_NOTE_SHORT}`));
    for (const head of Object.values(SHIPPED)) {
      expect(head).not.toBe("Played");
      expect(head).toContain("Awaiting");
    }
  });
});

describe("the label turns over with no deploy", () => {
  it("the page revalidates at least daily", () => {
    // The stats bot redeploys only when a figure moves, so a static page could
    // sit on yesterday's "Not yet played" for days. Hourly, as the home page.
    expect(typeof revalidate).toBe("number");
    expect(revalidate).toBeGreaterThan(0);
    expect(revalidate).toBeLessThanOrEqual(86_400);
  });
});

/**
 * The deadline alarm, in the pattern of tests/awardsPending.test.ts: it goes
 * red the day after a show with nothing in the repo having changed. The page
 * is already right by then ("Played · awaiting a box-office report"); what the
 * alarm asks for is the edit only a person can make — move the night into the
 * record (tours, concerts or liveMoments, as tours.ts's comments say) with
 * what the reports show, or delete it if it did not happen, and take it out of
 * `upcomingShows`. Skipped only in the stats bot's publishing gate, where a red
 * alarm would stop the live refresh rather than tell anyone
 * (.github/workflows/stats-live.yml); it still fails in ci.yml on every push.
 */
const PUBLISHING_GATE = process.env.PUBLISH_GATE === "1";

/**
 * What the alarm asks for each overdue show. A `noBoxOffice` show (10 Oct
 * 2026) is no longer printed as awaiting anything, so nothing on the page
 * says it is unfinished: the alarm is the one prompt, and it says there is
 * nothing to wait for. A show awaiting a report is moved with what the
 * reports show, as before.
 */
const overdueLine = (u: (typeof upcomingShows)[number]) =>
  u.noBoxOffice
    ? `${u.venue}, ${u.when}: played, and no gross will be reported — move it into the record now (concerts or liveMoments)`
    : `${u.venue}, ${u.when}: played — move it into the record with what the box-office reports show`;

describe("announced shows (deadline alarm)", () => {
  it.skipIf(PUBLISHING_GATE)("none of them has already been played", () => {
    const today = londonDate(new Date());
    const overdue = splitAnnounced(upcomingShows, today).played.map(overdueLine);
    expect(overdue, `played and still in upcomingShows on ${today}`).toEqual([]);
  });

  it("negative control: on 26 Oct 2026 the stored list rings for Stade de France, with nothing to wait for", () => {
    expect(splitAnnounced(upcomingShows, "2026-10-26").played.map(overdueLine)).toEqual([
      "Stade de France, 25 Oct 2026: played, and no gross will be reported — move it into the record now (concerts or liveMoments)",
    ]);
  });

  it("negative control: on 30 Oct 2026 it rings for both October shows, each with nothing to wait for", () => {
    expect(splitAnnounced(upcomingShows, "2026-10-30").played.map(overdueLine)).toEqual([
      "Stade de France, 25 Oct 2026: played, and no gross will be reported — move it into the record now (concerts or liveMoments)",
      "Apple Music Hall, 29 Oct 2026: played, and no gross will be reported — move it into the record now (concerts or liveMoments)",
    ]);
  });

  it("negative control: on 1 Jan 2028 London Stadium rings as awaiting its report", () => {
    const lines = splitAnnounced(upcomingShows, "2028-01-01").played.map(overdueLine);
    expect(lines.length).toBe(3);
    expect(lines).toContain("London Stadium, 2027: played — move it into the record with what the box-office reports show");
  });
});
