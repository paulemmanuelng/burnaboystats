import { render, fireEvent, within, cleanup } from "@testing-library/react";
import { readFileSync } from "node:fs";
import { join } from "node:path";

import DaiDaiReplay from "../../app/components/DaiDaiReplay";
import { buildReplayData, sourceOf } from "../../app/components/daiDaiReplayData";
import { EN_REPLAY_LABELS, ES_REPLAY_LABELS, type ReplayLabels, type ReplaySource } from "../../app/components/daiDaiReplayLabels";
import { fillIn } from "../../app/components/DaiDaiReplayMultiples";
import { daiDaiRuns } from "../../app/data/daiDaiRuns";

/**
 * V-music-06 (debug pass, 5 Oct 2026): the replay's country card on /dai-dai
 * and /dai-dai/es ("How it got there") printed the repo file a reading was
 * transcribed from as its source — "Source: app/data/charts.ts" on every card
 * at the end frame, "Source: app/data/updates.ts" for Switzerland's chart
 * dated 13 September, "Fuente: app/data/updates.ts" on /es (read live in
 * headless Chrome at 1440 and 390, from a chip, a map tap and the Europe view).
 * A reader can do nothing with a path. The card now names the record that
 * holds the reading — the site's chart records, its Latest Updates, this page,
 * or its research notes — in the edition's language; the path stays on the
 * server, where tests/daiDaiRuns.test.tsx finds each quote in its file.
 */

/** A repo path, or a file name with a source extension. */
const PATH = /\b(?:app|docs)\/[\w./-]+|\.(?:tsx?|md)\b/;

const KINDS: ReplaySource[] = ["charts", "feed", "page", "notes"];

afterEach(cleanup);

describe("V-music-06: the replay card names its source in words, not a repo path", () => {
  it("negative control: the guard catches the lines the live card printed", () => {
    for (const shipped of ["Source: app/data/charts.ts", "Source: app/data/updates.ts", "Fuente: app/data/updates.ts"]) {
      expect(shipped).toMatch(PATH);
    }
  });

  it("every reading's file maps to a record a reader knows; none is dropped", () => {
    const files = new Set(daiDaiRuns.flatMap((r) => r.points.map((p) => p.source)).filter(Boolean));
    expect(files.size).toBeGreaterThan(0);
    for (const f of files) expect(sourceOf(f), f).toBeDefined();
    // All four records are in use, so all four labels are reachable.
    expect(new Set([...files].map(sourceOf))).toEqual(new Set(KINDS));
  });

  it.each([
    ["en", EN_REPLAY_LABELS],
    ["es", ES_REPLAY_LABELS],
  ] as const)("the %s labels name every record without a path, and the data ships no path", (lang, labels) => {
    for (const k of KINDS) {
      expect(labels.sources[k], k).toBeTruthy();
      expect(fillIn(labels.cardSource, { src: labels.sources[k] })).not.toMatch(PATH);
    }
    const data = buildReplayData(lang);
    for (const r of [...data.countries, ...data.globals]) {
      r.pts.forEach((p, i) => {
        if (p.s === "unread") return;
        expect(p.src, `${r.code} frame ${i}`).toBeDefined();
        expect(KINDS, `${r.code} frame ${i}`).toContain(p.src);
      });
    }
    expect(JSON.stringify(data)).not.toMatch(/\b(?:app|docs)\/[\w-]+\//);
  });

  it("the player has no file path to print", () => {
    const src = readFileSync(join(process.cwd(), "app/components/DaiDaiReplay.tsx"), "utf8");
    expect(src).not.toMatch(/"(?:app|docs)\/[^"]*"/);
  });

  describe.each([
    ["en", EN_REPLAY_LABELS],
    ["es", ES_REPLAY_LABELS],
  ] as const)("the card, %s", (lang, labels: ReplayLabels) => {
    const data = buildReplayData(lang);
    const line = (k: ReplaySource) => fillIn(labels.cardSource, { src: labels.sources[k] });
    const card = (c: HTMLElement, name: string) => within(c).getByRole("group", { name });
    const tapMap = (c: HTMLElement, code: string) => fireEvent.click(c.querySelector(`svg[role=img] [data-code="${code}"]`)!);

    it("at the end frame: the site's chart records", () => {
      const { container } = render(<DaiDaiReplay data={data} labels={labels} />);
      const ch = data.countries.find((r) => r.code === "CH")!;
      tapMap(container, "CH");
      const text = card(container, ch.name).textContent!;
      expect(text).toContain(line("charts"));
      expect(text).not.toMatch(PATH);
    });

    it.each(KINDS)("on a week whose reading is in %s", (kind) => {
      // The first country and week the data holds for this record.
      let hit: { code: string; name: string; frame: number } | undefined;
      for (const r of data.countries) {
        if (r.code === "SG") continue;
        const i = r.pts.findIndex((p) => p.src === kind);
        if (i >= 0) {
          hit = { code: r.code, name: r.name, frame: i };
          break;
        }
      }
      expect(hit, kind).toBeDefined();
      const { container } = render(<DaiDaiReplay data={data} labels={labels} />);
      const s = within(container).getByRole("slider");
      fireEvent.keyDown(s, { key: "Home" });
      for (let i = 0; i < hit!.frame; i++) fireEvent.keyDown(s, { key: "ArrowRight" });
      expect(s.getAttribute("aria-valuenow")).toBe(String(hit!.frame));
      tapMap(container, hit!.code);
      const text = card(container, hit!.name).textContent!;
      expect(text).toContain(line(kind));
      expect(text).not.toMatch(PATH);
    });
  });
});
