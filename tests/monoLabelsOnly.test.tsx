import { describe, it, expect } from "vitest";
import { read, rules, winning } from "./fixtures/cssRules";
import { ANNOUNCED_NOTE, PLAYED_NOTE } from "../app/lib/announcedShows";
import { upcomingShows, festivals } from "../app/data/tours";

/**
 * Job 0 · J0-8 (design review 8 Oct 2026, panel 5): Space Mono names things
 * in three words or fewer; anything read as a sentence or a title is Geist.
 *
 * Moves to Geist: every sentence, the awards work titles, tour and festival
 * meta lines. Stays mono: kickers, chips, buttons, badges, table heads, nav
 * and back-bar labels, meta tokens of three words or fewer.
 *
 * Out of this test, by design: the source notes the provenance component
 * (J0-9) converts, the /afrobeats cadence (J0-3, tests/afrobeatsCadence) and
 * the desktop tours .dateNote, built in Geist by T-09 (tests/toursMeasure).
 */

const GEIST = /^var\(--font-geist-sans\)/;
const MONO = /--font-mono/;
const top = (m: string | null) => m === null;
const face = (file: string, sel: string) => winning(read(file), sel, "font-family", top);
const caseOf = (file: string, sel: string) => winning(read(file), sel, "text-transform", top);
const words = (s: string) => s.trim().split(/\s+/).filter(Boolean).length;

// file, selector, what it prints (the reason it is not a label)
const TO_GEIST: [string, string, string][] = [
  // the visualized captions (phone; desktop .caption is Geist already)
  ["app/components/mobileVisualized.module.css", ".chartSub", "chart subtitle"],
  ["app/components/mobileVisualized.module.css", ".chartNote", "chart takeaway sentence"],
  // the awards work titles (desktop; the second .work block wins the cascade)
  ["app/records/awards/awards.module.css", ".work", "work title"],
  // tour meta lines
  ["app/records/tours/tours.module.css", ".upcomingNote", "Not yet played — no gross, no attendance"],
  ["app/records/tours/tours.module.css", ".upcomingCity", "{city}, {country} · {n} capacity"],
  ["app/records/tours/tours.module.css", ".upcomingSource", "Announced by …, {date}"],
  ["app/components/mobileTours.module.css", ".tourMeta", "{years} · {tour meta}"],
  ["app/components/mobileTours.module.css", ".dateMeta", "{city}, {country} · {date}"],
  ["app/components/mobileTours.module.css", ".upcomingCity", "{city}, {country} · {n} cap"],
  ["app/components/mobileTours.module.css", ".upcomingSource", "Announced by …, {date}"],
  ["app/components/mobileTours.module.css", ".empty", "No date-level Boxscore report for this run."],
  // festival meta lines (phone; the desktop .place/.note are Geist already)
  ["app/components/mobileSections.module.css", ".meta", "{location}"],
  // sentences found in mono elsewhere
  ["app/records/records.module.css", ".headlineNote", "Biggest African crowd in …'s box-office reports"],
  ["app/components/mobileRecords.module.css", ".headlineNote", "the same notes, phone"],
  ["app/components/mobileAwards.module.css", ".honoursNote", "Not counted in the {n} wins"],
  ["app/components/StatCardMaker.module.css", ".note", "Downloads render at …"],
  ["app/components/mobileStatCards.module.css", ".note", "Renders at … Every card carries its source line."],
  ["app/components/mobileLiveCharts.module.css", ".panelNote", "Loading the country list…"],
  ["app/records/cars/cars.module.css", ".garageMeta", "Ranked by reported value · every image is …"],
  ["app/records/cars/[car]/car.module.css", ".perfNote", "Each bar is this car's figure as a share …"],
  ["app/components/BirthdayCelebration.module.css", ".sub", "Damini “Burna Boy” Ogulu · born …"],
];

// Labels: three words or fewer, or a chain of such tokens. They stay mono, so
// this test cannot be passed by converting labels.
const STAY_MONO: [string, string, string][] = [
  ["app/page.module.css", ".scoreSource", "33 countries / Billboard Boxscore"],
  ["app/components/mobileHome.module.css", ".statSource", "the same tokens, phone"],
  ["app/live-charts/liveCharts.module.css", ".platformCardCadence", "Daily chart"],
  ["app/components/mobileLiveCharts.module.css", ".platformCadence", "Daily chart"],
  ["app/components/mobileTours.module.css", ".statNote", "stat-strip note: {n} regions"],
  ["app/components/mobileTours.module.css", ".upcomingFold", "{n} more shows ▾"],
  ["app/components/mobileStatCards.module.css", ".verified", "Site updated {date}"],
];

describe("J0-8: sentences, work titles and tour/festival meta are Geist", () => {
  it.each(TO_GEIST)("%s %s (%s) resolves to Geist", (file, sel) => {
    const f = face(file, sel);
    expect(f, `${file} ${sel}`).toMatch(GEIST);
    expect(f).not.toMatch(MONO);
    // a sentence is not set in label caps
    expect(caseOf(file, sel) ?? "none").not.toBe("uppercase");
  });

  it("the desktop city line resets the caps of the Anton venue line it sits in", () => {
    const css = read("app/records/tours/tours.module.css");
    expect(winning(css, ".upcomingVenue", "text-transform", top)).toBe("uppercase");
    expect(winning(css, ".upcomingCity", "text-transform", top)).toBe("none");
    expect(winning(css, ".upcomingCity", "letter-spacing", top)).toBe("normal");
  });

  it("the converted lines are on the type scale, never under the 11px floor", () => {
    for (const [file, sel] of TO_GEIST) {
      const size = winning(read(file), sel, "font-size", top);
      expect(size, `${file} ${sel}`).toMatch(/^(var\(--type-caption\)|13px)$/);
    }
  });

  it("what they print is read as a sentence or a title, not a label", () => {
    expect(words(ANNOUNCED_NOTE)).toBeGreaterThan(3);
    expect(words(PLAYED_NOTE)).toBeGreaterThan(3);
    expect(upcomingShows.length).toBeGreaterThan(0);
    for (const u of upcomingShows) expect(words(u.source), u.source).toBeGreaterThan(3);
    // every festival row carries a meta line (its location)
    expect(festivals.length).toBeGreaterThan(0);
    for (const f of festivals) expect(f.location.trim().length).toBeGreaterThan(0);
    expect(read("app/components/MobileTours.tsx")).toMatch(/className=\{styles\.empty\}>No date-level Boxscore report for this run\.</);
    expect(read("app/components/MobileAwards.tsx")).toMatch(/className=\{styles\.honoursNote\}>Not counted in the \{wins\} wins</);
    expect(read("app/records/cars/page.tsx")).toMatch(/className=\{styles\.garageMeta\}>Ranked by reported value · every image is an illustration of the model</);
  });
});

describe("J0-8: labels stay mono", () => {
  it.each(STAY_MONO)("%s %s (%s) is still mono", (file, sel) => {
    expect(face(file, sel), `${file} ${sel}`).toMatch(MONO);
  });

  it("the stamp under the phone /share note stays mono although the note is Geist", () => {
    const css = read("app/components/mobileStatCards.module.css");
    const order = rules(css).filter((r) => r.media === null).map((r) => r.selector);
    // .verified is declared after .note, so its mono face wins on <p class="note verified">
    expect(order.indexOf(".verified")).toBeGreaterThan(order.indexOf(".note"));
    expect(read("app/components/MobileStatCards.tsx")).toMatch(/className=\{`\$\{styles\.note\} \$\{styles\.verified\}`\}/);
  });
});

describe("J0-8 negative controls: the shipped rules fail", () => {
  it("awards.module.css as shipped — the second .work block never reset the face, so every work title rendered mono", () => {
    // awards.module.css on d3c39eda, the two .work rules verbatim.
    const shipped = `.work {
  display: block;
  font-family: var(--font-mono), monospace;
  letter-spacing: 0.06em;
  font-size: 0.72rem;
  color: var(--text-muted);
  margin-top: 6px;
}
.work { display: block; font-size: 13px; color: var(--text-muted); margin-top: 2px; }`;
    expect(winning(shipped, ".work", "font-family", top)).toMatch(MONO);
  });

  it("the shipped desktop .upcomingSource and phone .meta fail", () => {
    const upcomingSource = `.upcomingSource {
  font-family: var(--font-mono), monospace;
  font-size: 11px;
  letter-spacing: 0.06em;
  color: var(--text-muted);
  margin-top: 8px;
}`;
    const meta = `.meta {
  font-family: var(--font-mono), monospace;
  font-size: 11px;
  color: var(--text-muted);
  margin-top: 3px;
}`;
    expect(winning(upcomingSource, ".upcomingSource", "font-family", top)).not.toMatch(GEIST);
    expect(winning(meta, ".meta", "font-family", top)).not.toMatch(GEIST);
  });
});
