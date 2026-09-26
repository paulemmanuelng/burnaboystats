import { render, fireEvent, act, within } from "@testing-library/react";
import { renderToStaticMarkup } from "react-dom/server";
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/dai-dai",
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import { allChartItems, daiDaiNumberOnes, CHART_COUNTRIES } from "../app/data/charts";
import { DAI_DAI_GLOBAL_200_RUN, DAI_DAI_RELEASE_DATE } from "../app/data/daiDai";
import {
  daiDaiRuns,
  daiDaiCountryRuns,
  daiDaiFrames,
  daiDaiReplayFrames,
  daiDaiPeakOnlyCount,
  daiDaiRecordedCount,
  DAI_DAI_RUN_EVIDENCE,
  endBest,
  frameOf,
  replayFrame,
} from "../app/data/daiDaiRuns";
import { buildReplayData } from "../app/components/daiDaiReplayData";
import { EN_REPLAY_LABELS, ES_REPLAY_LABELS } from "../app/components/daiDaiReplayLabels";
import DaiDaiReplay from "../app/components/DaiDaiReplay";
import DaiDaiReplayMultiples from "../app/components/DaiDaiReplayMultiples";
import { GET as spriteGET } from "../app/dai-dai/replay-map.svg/route";
import { worldShapes } from "../app/data/worldShapes";
import DaiDaiPage from "../app/dai-dai/page";
import DaiDaiPageES from "../app/dai-dai/es/page";

/**
 * The Dai Dai replay (PROMPT-DAI-DAI.md, commit 3; research/replay.md §3).
 *
 * The four invariants the brief names, and what the player does with them:
 *   1. the end frame's best positions are the charts.ts peaks, for all 66;
 *   2. no frame ever counts more read No. 1s than the song's 26;
 *   3. no unread week is ever filled from a neighbouring week;
 *   4. EN and ES get the same frames.
 * Every reading is also held to the words of the file it was transcribed from:
 * a position with no sentence behind it cannot get in.
 */

const read = (p: string) => readFileSync(join(process.cwd(), p), "utf8");
/** Whitespace collapsed and markdown bold dropped — how a quote is found. */
const norm = (s: string) => s.replace(/\*\*/g, "").replace(/\s+/g, " ");
const DAY = 86_400_000;
const t = (iso: string) => Date.parse(`${iso}T00:00:00Z`);

const release = allChartItems.find((r) => r.title === "Dai Dai")!;
const entry = (c: string) => release.entries.find((e) => e.c === c)!;
const run = (c: string) => daiDaiRuns.find((r) => r.code === c)!;
const frameIdx = (d: string) => daiDaiFrames.indexOf(frameOf(d));

describe("app/data/daiDaiRuns.ts — the shape and the reads", () => {
  it("holds one run per chart the song is on, in charts.ts order", () => {
    expect(daiDaiRuns.map((r) => r.code)).toEqual(release.entries.map((e) => e.c));
    expect(daiDaiCountryRuns).toHaveLength(66);
    expect(daiDaiRuns).toHaveLength(68);
  });

  it("reads peak, weeks at the peak, weeks on chart and the body from charts.ts — never retypes them", () => {
    for (const r of daiDaiRuns) {
      const e = entry(r.code);
      expect(r.peak, r.code).toBe(e.peak);
      expect(r.weeksAtPeak, r.code).toBe(e.weeksAtPeak);
      expect(r.weeks, r.code).toBe(e.weeks);
      expect(r.body, r.code).toBe(CHART_COUNTRIES[r.code].body);
      expect(r.family).toBe("official");
      expect(r.cadence).toBe("weekly");
    }
    // The transcription carries no peak of its own to drift from charts.ts.
    expect(read("app/data/daiDaiRuns.ts")).not.toMatch(/\bpeak:\s*\d/);
  });

  it("frames are the calendar weeks from the week of release to the week of the latest issue held", () => {
    expect(daiDaiFrames[0]).toBe(frameOf(DAI_DAI_RELEASE_DATE));
    for (let i = 1; i < daiDaiFrames.length; i++) expect(t(daiDaiFrames[i]) - t(daiDaiFrames[i - 1])).toBe(7 * DAY);
    const latest = daiDaiRuns.flatMap((r) => r.points.filter((p) => p.status !== "unread" && p.status !== "off").map((p) => p.chartDate)).sort().at(-1)!;
    expect(daiDaiFrames.at(-1)).toBe(frameOf(latest));
    for (const f of daiDaiFrames) expect(new Date(t(f)).getUTCDay()).toBe(1);
  });

  it("a recorded run has one point per frame, each issue seven days after the last, in its own frame", () => {
    for (const r of daiDaiRuns.filter((x) => x.points.length)) {
      expect(r.points, r.code).toHaveLength(daiDaiFrames.length);
      r.points.forEach((p, i) => {
        expect(p.frame).toBe(daiDaiFrames[i]);
        expect(frameOf(p.chartDate), `${r.code} ${p.chartDate}`).toBe(p.frame);
        if (i) expect(t(p.chartDate) - t(r.points[i - 1].chartDate), r.code).toBe(7 * DAY);
      });
    }
  });

  it("the Billboard Global 200 is chapter 02's own run, read — not a second copy", () => {
    const glb = run("GLB");
    for (const row of DAI_DAI_GLOBAL_200_RUN) {
      const p = glb.points[frameIdx(row.issue)];
      expect(p.chartDate).toBe(row.issue);
      if (row.pos === null) expect(p.status, row.issue).toBe("unread");
      else expect([p.status, p.pos], row.issue).toEqual(["on", row.pos]);
    }
  });
});

describe("1. the end frame is the takeover grid", () => {
  it("every one of the 66 ends on its charts.ts peak", () => {
    for (const r of daiDaiCountryRuns) expect(endBest(r), r.code).toBe(entry(r.code).peak);
    for (const r of daiDaiRuns) expect(endBest(r), r.code).toBe(entry(r.code).peak);
  });

  it("26 of 66 at No. 1, as the grid says", () => {
    expect(daiDaiCountryRuns.filter((r) => endBest(r) === 1)).toHaveLength(daiDaiNumberOnes);
    expect(daiDaiNumberOnes).toBe(26);
  });

  it("no reading is better than the peak, and no run reads more weeks than the body counts", () => {
    for (const r of daiDaiRuns) {
      const on = r.points.filter((p) => p.status === "on");
      for (const p of on) expect(p.pos!, `${r.code} ${p.chartDate}`).toBeGreaterThanOrEqual(r.peak);
      if (r.weeks !== undefined) expect(on.length, r.code).toBeLessThanOrEqual(r.weeks);
      if (r.weeksAtPeak !== undefined) expect(on.filter((p) => p.pos === r.peak).length, r.code).toBeLessThanOrEqual(r.weeksAtPeak);
    }
  });
});

describe("2. numberOnes never exceeds 26", () => {
  it("in any frame, counting READ No. 1s only", () => {
    for (const f of daiDaiReplayFrames) {
      expect(f.numberOnes, f.frame).toBeLessThanOrEqual(daiDaiNumberOnes);
      expect(f.numberOnes).toBe(f.ranked.filter((x) => x.pos === 1).length);
      // The globals are tiles, not countries: never in the count.
      expect(f.ranked.some((x) => x.code === "GLB" || x.code === "GLBX")).toBe(false);
    }
  });
});

describe("3. no unread week is ever filled from a neighbouring week", () => {
  it("every reading traces to the words of a file in the repo", () => {
    for (const { code, evidence } of DAI_DAI_RUN_EVIDENCE) {
      for (const ev of evidence) {
        expect(existsSync(join(process.cwd(), ev.file)), `${code}: ${ev.file}`).toBe(true);
        expect(norm(read(ev.file)).includes(norm(ev.quote)), `${code}: "${ev.quote}" is not in ${ev.file}`).toBe(true);
      }
    }
    for (const r of daiDaiRuns) {
      for (const p of r.points) {
        if (p.status === "unread") {
          expect(p.pos, `${r.code} ${p.chartDate}`).toBeUndefined();
          expect(p.source).toBe("");
        } else {
          expect(existsSync(join(process.cwd(), p.source)), `${r.code} ${p.chartDate}: ${p.source}`).toBe(true);
        }
        if (p.status === "on") expect(Number.isInteger(p.pos), `${r.code} ${p.chartDate}`).toBe(true);
        else expect(p.pos).toBeUndefined();
      }
    }
  });

  it("every read week's own quote is in its own file (ruling of 26 Sep 2026)", () => {
    let read_ = 0;
    for (const r of daiDaiRuns) {
      for (const p of r.points) {
        if (p.status === "unread") {
          expect(p.quote, `${r.code} ${p.chartDate}`).toBe("");
          continue;
        }
        read_++;
        expect(p.quote.length, `${r.code} ${p.chartDate} has no quote`).toBeGreaterThan(0);
        expect(norm(read(p.source)).includes(norm(p.quote)), `${r.code} ${p.chartDate}: "${p.quote}" is not in ${p.source}`).toBe(true);
      }
    }
    expect(read_).toBeGreaterThan(100);
  });

  it("Austria's 3 and 10 July and Luxembourg's September weeks are read only where a line states them", () => {
    const at = run("AT");
    const lu = run("LU");
    const pt = (r: typeof at, d: string) => r.points[frameIdx(d)];
    // Austria: 3 and 10 Jul come from the run that takes them in, and the
    // quote a reader's source points at says so; 4 Sep off Ö3's own chart.
    for (const d of ["2026-07-03", "2026-07-10"]) {
      expect(pt(at, d)).toMatchObject({ chartDate: d, status: "on", pos: 1, source: "docs/sweeps/RESUME-2026-09-06.md" });
      expect(pt(at, d).quote).toContain("No.1 every week from 26.06.2026 to 04.09.2026");
    }
    expect(pt(at, "2026-09-04").quote).toContain("Single Charts vom 4. September 2026");
    // Luxembourg: 5 Sep read at the body, 19 Sep by the "LW 1" printed on the
    // 26 Sep issue, 26 Sep itself.
    expect(pt(lu, "2026-09-05").quote).toContain("Week of September 5, 2026");
    expect(pt(lu, "2026-09-19").quote).toContain("for the week of 26 September 2026 (LW 1)");
    expect(pt(lu, "2026-09-26").quote).toContain("issue of 26 September");
    // The two issues only a count implies stay unread: Austria's 11 Sep (the
    // 13th week) and Luxembourg's 12 Sep (the 12th).
    expect(pt(at, "2026-09-11")).toMatchObject({ chartDate: "2026-09-11", status: "unread", source: "", quote: "" });
    expect(pt(lu, "2026-09-12")).toMatchObject({ chartDate: "2026-09-12", status: "unread", source: "", quote: "" });
    // Negative control: the evidence these weeks carried as shipped (PR 350,
    // c1e3a9aa) names none of them — a count, not the week.
    const SHIPPED = [
      "No. 1 is confirmed on 26 Jun, 17 Jul, 24 Jul, 31 Jul, 7 Aug, 14 Aug, 21 Aug and 28 Aug. 26 Jun → 28 Aug is exactly ten chart weeks.",
      "twelve weeks at No.1 and 17 on the chart, as Billboard's own Luxembourg Songs page prints them for the week of 26 September 2026 (LW 1)",
    ];
    expect(SHIPPED[0]).not.toMatch(/3 Jul|10 Jul|03\.07|10\.07|every week from 26\.06/);
    expect(SHIPPED[1]).not.toMatch(/5 Sep|September 5|12 Sep|12 September|19 Sep/);
  });

  it("the gaps the repo really has stay gaps (the shipped data, not an invented case)", () => {
    // Netherlands: dutchcharts' table is read from 20 June; the three weeks
    // before it are on the chart (17 in all) but unread — and 20 June is a No. 1.
    const nl = run("NL");
    const i20 = frameIdx("2026-06-20");
    expect(nl.points[i20]).toMatchObject({ status: "on", pos: 1 });
    for (let i = 0; i < i20; i++) expect(nl.points[i].status, nl.points[i].chartDate).toBe("unread");
    expect(replayFrame(i20 - 1).unread).toContain("NL");
    expect(replayFrame(i20 - 1).ranked.map((x) => x.code)).not.toContain("NL");

    // Global 200: 114 on 6 June, then five issues nobody has read, then No. 1.
    const glb = run("GLB");
    for (const d of ["2026-06-13", "2026-06-20", "2026-06-27", "2026-07-04", "2026-07-11"]) {
      expect(glb.points[frameIdx(d)].status, d).toBe("unread");
    }

    // Germany: charts.ts counts 11 weeks at No. 1, the repo dates nine of them.
    // The two it does not date are unread, not "probably No. 1".
    const de = run("DE");
    expect(de.points.filter((p) => p.status === "on" && p.pos === 1)).toHaveLength(9);
    expect(de.weeksAtPeak).toBe(11);
    expect(de.points[frameIdx("2026-09-04")].status).toBe("unread");
    expect(de.points[frameIdx("2026-09-11")].status).toBe("unread");

    // Greece: the summer pause is "no chart", not three more No. 1 weeks.
    const gr = run("GR");
    for (const w of ["2026-07-27", "2026-08-03", "2026-08-10"]) expect(gr.points[frameIdx(w)].status, w).toBe("no-chart");
    expect(gr.points[frameIdx("2026-08-17")]).toMatchObject({ status: "on", pos: 1, label: "31-34 (combined)" });

    // Panama: PRODUCE published no chart for the 16 July week.
    expect(run("PA").points[frameIdx("2026-07-16")].status).toBe("no-chart");
  });

  it("a run the repo cannot date is 'run not recorded', never a guessed series", () => {
    // The UK's feed entries name no chart date, so the UK has no points.
    expect(run("UK").points).toEqual([]);
    // Nor does the page's one dated UK line place it (ruling of 26 Sep 2026):
    // "the chart of 24 September" names a Thursday, the last day of the OCC's
    // Friday-to-Thursday week 18–24 Sep, and that week's first day (the date
    // the OCC gives a chart) falls in a different frame from the day the line
    // prints. One line, two frames: not recorded.
    expect(read("app/dai-dai/page.tsx")).toContain("counted through the chart of 24 September (No. 31)");
    expect(new Date(t("2026-09-24")).getUTCDay()).toBe(4); // Thursday
    const firstDay = "2026-09-18";
    expect(new Date(t(firstDay)).getUTCDay()).toBe(5); // Friday
    expect(frameOf(firstDay)).not.toBe(frameOf("2026-09-24"));
    expect(daiDaiFrames).toContain(frameOf(firstDay));
    expect(daiDaiFrames).toContain(frameOf("2026-09-24"));
    // Counts-only and peak-only countries likewise.
    for (const c of ["BE", "SR", "AE", "AR", "IT", "IN", "CZ", "VE", "LB", "IS", "EC", "EE", "US", "SG"]) expect(run(c).points, c).toEqual([]);
    expect(daiDaiRecordedCount + daiDaiPeakOnlyCount).toBe(66);
  });

  it("each frame's tray is exactly its unread countries, and its no-chart line exactly the no-chart ones", () => {
    daiDaiFrames.forEach((_, i) => {
      const f = replayFrame(i);
      const recorded = daiDaiCountryRuns.filter((r) => r.points.length);
      expect(f.unread).toEqual(recorded.filter((r) => r.points[i].status === "unread").map((r) => r.code));
      expect(f.noChart).toEqual(recorded.filter((r) => r.points[i].status === "no-chart").map((r) => r.code));
    });
  });
});

describe("4. EN and ES get the same frames", () => {
  const en = buildReplayData("en");
  const es = buildReplayData("es");
  const shape = (d: ReturnType<typeof buildReplayData>) =>
    [...d.countries, ...d.globals].map((r) => [r.code, r.peak, r.best, r.pts.map((p) => `${p.s}${p.p ?? ""}${p.l ?? ""}`).join(",")]);

  it("the same frames, statuses and positions; only the words differ", () => {
    expect(en.frames).toHaveLength(es.frames.length);
    expect(shape(es)).toEqual(shape(en));
    expect(en.frames[0]).toBe("11 May 2026");
    expect(es.frames[0]).toBe("11 de mayo de 2026");
  });

  it("both pages render the replay, and the no-JS table carries the same cells", () => {
    const cells = (el: React.ReactElement) => {
      const host = document.createElement("div");
      host.innerHTML = renderToStaticMarkup(el);
      return [...host.querySelectorAll("tbody td")].map((td) => `${td.closest("tr")!.getAttribute("data-code")}:${td.getAttribute("data-s")}`);
    };
    expect(cells(<DaiDaiReplayMultiples data={es} labels={ES_REPLAY_LABELS} />)).toEqual(cells(<DaiDaiReplayMultiples data={en} labels={EN_REPLAY_LABELS} />));
    const enHtml = renderToStaticMarkup(<DaiDaiPage />);
    const esHtml = renderToStaticMarkup(<DaiDaiPageES />);
    expect(enHtml).toContain(EN_REPLAY_LABELS.title);
    expect(esHtml).toContain(ES_REPLAY_LABELS.title);
    // Every label is translated: nothing of the English leaks into /es.
    for (const k of ["intro", "peakPicture", "trayUnread", "footnote"] as const) expect(ES_REPLAY_LABELS[k]).not.toBe(EN_REPLAY_LABELS[k]);
    expect(Object.keys(ES_REPLAY_LABELS).sort()).toEqual(Object.keys(EN_REPLAY_LABELS).sort());
  });
});

describe("the player", () => {
  const data = buildReplayData("en");
  const last = data.frames.length - 1;

  beforeEach(() => vi.useFakeTimers());
  afterEach(() => vi.useRealTimers());

  const slider = (c: HTMLElement) => within(c).getByRole("slider");

  it("the poster is the end frame, and nothing plays until Play is pressed", () => {
    const { container } = render(<DaiDaiReplay data={data} labels={EN_REPLAY_LABELS} />);
    const root = container.firstElementChild!;
    expect(root.getAttribute("data-mode")).toBe("poster");
    expect(container.textContent).toContain("The peak picture");
    expect(container.textContent).toContain(`No. 1 in ${daiDaiNumberOnes} countries at their peak`);
    // The world map at the end frame: every charted country in its peak band,
    // 26 of them No. 1 — the takeover grid.
    const world = container.querySelector("svg[role=img]")!;
    const b1 = [...world.querySelectorAll("use[data-code]")].filter((u) => u.getAttribute("class")!.split(/\s+/).some((c) => /(^|_)b1(_|$)/.test(c)));
    expect(new Set(b1.map((u) => u.getAttribute("data-code"))).size).toBe(daiDaiNumberOnes);
    act(() => vi.advanceTimersByTime(30_000));
    expect(root.getAttribute("data-mode")).toBe("poster");
  });

  it("plays a week a second from the first frame, and ends on the peak picture with Replay", () => {
    const { container, getByRole } = render(<DaiDaiReplay data={data} labels={EN_REPLAY_LABELS} />);
    const root = container.firstElementChild!;
    fireEvent.click(getByRole("button", { name: "Play" }));
    expect(root.getAttribute("data-mode")).toBe("playing");
    expect(slider(container).getAttribute("aria-valuenow")).toBe("0");
    act(() => vi.advanceTimersByTime(1000));
    expect(slider(container).getAttribute("aria-valuenow")).toBe("1");
    // Silent while playing.
    expect(container.querySelector("[aria-live]")!.textContent).toBe("");
    act(() => vi.advanceTimersByTime(1000 * (last + 1)));
    expect(root.getAttribute("data-mode")).toBe("end");
    expect(getByRole("button", { name: "Replay" })).toBeInTheDocument();
  });

  it("the scrubber: arrows step, Home and End jump, Space plays and pauses; aria-valuetext reads the frame", () => {
    const { container } = render(<DaiDaiReplay data={data} labels={EN_REPLAY_LABELS} />);
    const s = slider(container);
    fireEvent.keyDown(s, { key: "Home" });
    expect(s.getAttribute("aria-valuenow")).toBe("0");
    const f0 = replayFrame(0);
    expect(s.getAttribute("aria-valuetext")).toBe(
      `Week of ${data.frames[0]}: No. 1 in ${f0.numberOnes} ${f0.numberOnes === 1 ? "country" : "countries"}, ${f0.unread.length} not read`,
    );
    // The live region speaks on pause.
    expect(container.querySelector("[aria-live]")!.textContent).toBe(s.getAttribute("aria-valuetext"));
    fireEvent.keyDown(s, { key: "ArrowRight" });
    expect(s.getAttribute("aria-valuenow")).toBe("1");
    fireEvent.keyDown(s, { key: "ArrowLeft" });
    expect(s.getAttribute("aria-valuenow")).toBe("0");
    fireEvent.keyDown(s, { key: "End" });
    expect(s.getAttribute("aria-valuenow")).toBe(String(last));
    fireEvent.keyDown(s, { key: " " });
    expect(container.firstElementChild!.getAttribute("data-mode")).toBe("playing");
    fireEvent.keyDown(s, { key: " " });
    expect(container.firstElementChild!.getAttribute("data-mode")).toBe("paused");
  });

  it("the counter's 'not read' is the tray's count, frame by frame", () => {
    const { container } = render(<DaiDaiReplay data={data} labels={EN_REPLAY_LABELS} />);
    const s = slider(container);
    fireEvent.keyDown(s, { key: "Home" });
    for (let i = 0; i <= last; i++) {
      const f = replayFrame(i);
      expect(container.textContent, data.frames[i]).toContain(`No. 1 in ${f.numberOnes} ${f.numberOnes === 1 ? "country" : "countries"} this week · ${f.unread.length} not read`);
      const tray = container.querySelector("[class*=trayCount]")!;
      expect(tray.textContent).toBe(String(f.unread.length));
      expect([...container.querySelectorAll("[class*=trayList] li")].map((li) => li.getAttribute("data-code"))).toEqual(f.unread);
      // An unread country is hatched on the map.
      for (const code of f.unread) {
        const u = container.querySelector(`svg[role=img] use[data-code="${code}"]`)!;
        expect(u.getAttribute("style") ?? "", `${code} ${data.frames[i]}`).toContain("ddr-hatch");
      }
      fireEvent.keyDown(s, { key: "ArrowRight" });
    }
  });

  it("the country card shows the chart's own date or label, the status and the source", () => {
    const { container, getByRole } = render(<DaiDaiReplay data={data} labels={EN_REPLAY_LABELS} />);
    const s = slider(container);
    fireEvent.keyDown(s, { key: "Home" });
    const idx = frameIdx("2026-07-19"); // the Swiss chart dated 19 July: a No. 1
    for (let i = 0; i < idx; i++) fireEvent.keyDown(s, { key: "ArrowRight" });
    fireEvent.click(getByRole("button", { name: /^Switzerland: No\. 1/ }));
    const card = getByRole("group", { name: "Switzerland" });
    expect(card.textContent).toContain("Schweizer Hitparade");
    expect(card.textContent).toContain("Chart dated 19 July 2026");
    expect(card.textContent).toMatch(/\d+th week at No\. 1/);
    expect(card.textContent).toContain("Source: app/data/updates.ts");
  });

  it("the ranking is one tab stop: arrows move between countries and the card follows", () => {
    const { container, getByRole } = render(<DaiDaiReplay data={data} labels={EN_REPLAY_LABELS} />);
    const chips = [...container.querySelectorAll<HTMLButtonElement>("button[data-chip]")];
    expect(chips).toHaveLength(66);
    expect(chips.filter((c) => c.tabIndex === 0)).toHaveLength(1);
    act(() => chips[0].focus());
    expect(getByRole("group", { name: data.countries.find((c) => c.code === chips[0].dataset.chip)!.name })).toBeInTheDocument();
    fireEvent.keyDown(chips[0], { key: "ArrowRight" });
    expect(document.activeElement).toBe(chips[1]);
    const second = data.countries.find((c) => c.code === chips[1].dataset.chip)!;
    expect(getByRole("group", { name: second.name })).toBeInTheDocument();
    expect(chips.filter((c) => c.tabIndex === 0)).toEqual([chips[1]]);
  });

  it("on the phone the ranking's chips are labels: no buttons, no tab stop", () => {
    const mm = window.matchMedia;
    window.matchMedia = ((q: string) => ({ matches: q.includes("max-width: 900px"), media: q, addEventListener: () => {}, removeEventListener: () => {} })) as unknown as typeof window.matchMedia;
    try {
      const { container } = render(<DaiDaiReplay data={data} labels={EN_REPLAY_LABELS} />);
      expect(container.querySelectorAll("button[data-chip]")).toHaveLength(0);
      const labels = [...container.querySelectorAll<HTMLElement>("[data-chip-label]")];
      expect(labels).toHaveLength(66);
      for (const l of labels) {
        expect(l.tagName).toBe("SPAN");
        expect(l.hasAttribute("tabindex")).toBe(false);
        expect(l.querySelector("button, a, [tabindex]")).toBeNull();
      }
      // Each still says its country and position to a screen reader.
      const ch = labels.find((l) => l.dataset.chipLabel === "CH")!;
      expect(ch.textContent).toContain("Switzerland: No. 1");
    } finally {
      window.matchMedia = mm;
    }
    // Negative control: at desktop width the same ranking is 66 buttons.
    const { container } = render(<DaiDaiReplay data={data} labels={EN_REPLAY_LABELS} />);
    expect(container.querySelectorAll("button[data-chip]")).toHaveLength(66);
    expect(container.querySelectorAll("[data-chip-label]")).toHaveLength(0);
  });

  it("the country with its card open keeps its band fill: a copy drawn last, outlined under the fill", () => {
    const { container, getByRole } = render(<DaiDaiReplay data={data} labels={EN_REPLAY_LABELS} />);
    fireEvent.click(getByRole("button", { name: /^Switzerland: No\. 1/ }));
    for (const svg of container.querySelectorAll("svg[role=img]")) {
      const uses = [...svg.querySelectorAll("use")];
      const top = uses.at(-1)!;
      // The copy is the last shape in each view, so no neighbour covers its outline…
      expect(top.getAttribute("data-picked")).toBe("CH");
      expect(top.getAttribute("href")).toBe(`/dai-dai/replay-map.svg#s756`);
      // …in the same band fill as the shape under it (No. 1 at the peak picture).
      const base = svg.querySelector('use[data-code="CH"]')!;
      const bands = (el: Element) => el.getAttribute("class")!.split(/\s+/).filter((c) => /(^|_)b1(_|$)/.test(c));
      expect(bands(top)).toEqual(bands(base));
      expect(bands(base)).toHaveLength(1);
      // The outline is on the copy only.
      expect(base.getAttribute("class")).not.toMatch(/picked/);
    }
    // The outline is painted under the fill, so the fill stays whole.
    const css = read("app/components/DaiDaiReplay.module.css");
    const rule = css.match(/\.mapBox svg \.shape\.charted\.picked \{([^}]*)\}/)?.[1] ?? "";
    expect(rule).toMatch(/paint-order:\s*stroke/);
    expect(rule).toMatch(/pointer-events:\s*none/);
    // Negative control: the rule as shipped, a centred 2px outline over the fill.
    const shipped = "stroke: var(--text);\n  stroke-width: 2px;\n  stroke-dasharray: none;";
    expect(shipped).not.toMatch(/paint-order:\s*stroke/);
    // With no card open there is no copy (the sprite test counts every <use>).
    const poster = render(<DaiDaiReplay data={data} labels={EN_REPLAY_LABELS} />);
    expect(poster.container.querySelectorAll("use[data-picked]")).toHaveLength(0);
  });

  it("under reduced motion the small multiples come first, and nothing moves", () => {
    const mm = window.matchMedia;
    window.matchMedia = ((q: string) => ({ matches: q.includes("reduce"), media: q, addEventListener: () => {}, removeEventListener: () => {} })) as unknown as typeof window.matchMedia;
    try {
      const { container, getByRole } = render(<DaiDaiReplay data={data} labels={EN_REPLAY_LABELS} />);
      expect(container.firstElementChild!.getAttribute("data-view")).toBe("multiples");
      expect(container.querySelectorAll("tbody tr")).toHaveLength(68);
      // Every unread week in the table is hatched.
      for (const td of container.querySelectorAll('td[data-s="unread"] span')) expect(td.getAttribute("class")).toMatch(/mUnread/);
      act(() => vi.advanceTimersByTime(30_000));
      expect(container.firstElementChild!.getAttribute("data-mode")).toBe("poster");
      fireEvent.click(getByRole("button", { name: EN_REPLAY_LABELS.openPlayer }));
      expect(container.firstElementChild!.getAttribute("data-view")).toBe("player");
    } finally {
      window.matchMedia = mm;
    }
  });
});

describe("the map", () => {
  it("draws every shape from worldShapes.ts through one static sprite, and ships none of it in the page", async () => {
    const svg = await spriteGET().text();
    expect(spriteGET().headers.get("content-type")).toMatch(/^image\/svg\+xml/);
    for (const s of worldShapes) expect(svg, `s${s.code}`).toContain(`id="s${s.code}" d="${s.d}"`);
    expect(read("app/dai-dai/replay-map.svg/route.ts")).toMatch(/export const dynamic\s*=\s*"force-static"/);
    // The player never bundles the geometry: it only names shapes.
    expect(read("app/components/DaiDaiReplay.tsx")).not.toMatch(/from "\.\.\/data\/worldShapes"/);
    const { container } = render(<DaiDaiReplay data={buildReplayData("en")} labels={EN_REPLAY_LABELS} />);
    const ids = new Set(worldShapes.map((s) => `/dai-dai/replay-map.svg#s${s.code}`));
    const uses = [...container.querySelectorAll("use")];
    expect(uses.length).toBe(worldShapes.length * 2); // the world map and the Europe view
    for (const u of uses) expect(ids.has(u.getAttribute("href")!), u.getAttribute("href")!).toBe(true);
    const geometry = new Set(worldShapes.map((s) => s.d));
    expect([...container.querySelectorAll("path")].filter((el) => geometry.has(el.getAttribute("d")!))).toEqual([]);
  });

  it("Singapore, which has no shape, is a marker; every other charting country has a shape", () => {
    const { container } = render(<DaiDaiReplay data={buildReplayData("en")} labels={EN_REPLAY_LABELS} />);
    const shapes = new Set(worldShapes.map((s) => s.code));
    expect(daiDaiCountryRuns.filter((r) => !shapes.has(r.iso!)).map((r) => r.code)).toEqual(["SG"]);
    expect(container.querySelector('circle[data-code="SG"]')).not.toBeNull();
    // The end frame marks every run not recorded, Singapore included.
    expect(container.querySelectorAll("svg[role=img]:not([viewBox^='4']) circle[class*=peakMark]").length).toBe(daiDaiPeakOnlyCount);
  });
});
