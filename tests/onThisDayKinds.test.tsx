import { describe, it, expect } from "vitest";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { renderToStaticMarkup } from "react-dom/server";
import { KIND_MARK, KIND_ORDER, onThisDayEvents, type OnThisDayKind } from "../app/lib/onThisDay";
import { KindMark, KindPill } from "../app/components/OnThisDayKind";

/**
 * On this day's kinds are shape plus word, in ink (design response §1,
 * approved by Paul 26 Sep 2026). Two ways that breaks, one test each:
 *
 *   - a kind gets a colour again. The first build's kinds wore the update
 *     feed's inks: Certification in the brand gold, Charts in the Top 10 peak
 *     band's cyan, Awards in the Top 40 band's silver, shows in the LIVE
 *     green — every one of them already meant something else here.
 *   - a kind is called "Live" again. "Live" on this site means happening now;
 *     the shows are "Show".
 */

const KINDS = Object.keys(KIND_MARK) as OnThisDayKind[];

/** A colour anywhere in a value: a token, a hex, a colour function, or the
 *  name of a palette a kind once borrowed. currentColor is ink, not a colour. */
const COLOUR = /var\(--[\w-]+\)|#[0-9a-f]{3,8}\b|\b(?:rgba?|hsla?|oklch|color-mix)\(|\b(?:gold|cyan|silver|ember|green|orange|amber)\b/i;
const colourIn = (value: string) => COLOUR.test(value.replace(/currentColor/g, ""));

/** Every attribute a rendered mark carries that could paint it. */
const paints = (html: string) =>
  [...html.matchAll(/\b(fill|stroke|color|style|class)="([^"]*)"/g)].map((m) => ({ attr: m[1], value: m[2] }));

describe("no kind resolves to a colour", () => {
  it("covers all six kinds, in the legend's order", () => {
    expect(KIND_ORDER).toEqual(["release", "chart", "streaming", "certification", "award", "show"]);
    expect([...KINDS].sort()).toEqual([...KIND_ORDER].sort());
    expect(new Set(onThisDayEvents.map((e) => e.kind)).size).toBeLessThanOrEqual(KINDS.length);
    for (const e of onThisDayEvents) expect(KINDS).toContain(e.kind);
  });

  it("each kind's entry in the mark map names no colour", () => {
    const bad = KINDS.filter((k) => Object.values(KIND_MARK[k]).some((v) => colourIn(String(v))));
    expect(bad).toEqual([]);
  });

  it("the six shapes are six different shapes", () => {
    const shapes = KINDS.map((k) => KIND_MARK[k].shape);
    const paths = KINDS.map((k) => KIND_MARK[k].d);
    expect(new Set(shapes).size).toBe(KINDS.length);
    expect(new Set(paths).size).toBe(KINDS.length);
  });

  it("a rendered mark and pill paint only in currentColor", () => {
    const bad: string[] = [];
    for (const k of KINDS) {
      for (const html of [
        renderToStaticMarkup(<KindMark kind={k} />),
        renderToStaticMarkup(<KindMark kind={k} alone />),
        renderToStaticMarkup(<KindPill kind={k} />),
      ]) {
        for (const { attr, value } of paints(html)) {
          if (attr === "style") bad.push(`${k}: inline style ${value}`);
          else if ((attr === "fill" || attr === "stroke") && value !== "currentColor" && value !== "none") bad.push(`${k}: ${attr}=${value}`);
          else if (colourIn(value)) bad.push(`${k}: ${attr}=${value}`);
        }
      }
    }
    expect(bad).toEqual([]);
  });

  // The files that draw a kind. None of them may reach for a kind colour map
  // or the inks the kinds used to borrow.
  const files = [
    "app/lib/onThisDay.ts",
    "app/lib/onThisDayKinds.ts",
    "app/components/OnThisDayKind.tsx",
    ...readdirSync("app/components")
      .filter((f) => /onthisday/i.test(f))
      .map((f) => join("app/components", f)),
    ...(function walk(dir: string): string[] {
      return readdirSync(dir).flatMap((f) => {
        const p = join(dir, f);
        return statSync(p).isDirectory() ? walk(p) : /\.(tsx?|css)$/.test(f) ? [p] : [];
      });
    })("app/on-this-day"),
  ];
  const BORROWED = /KIND_INK|var\(--(?:ember|cyan|silver|tier-[\w-]+|green)\)/;

  it("no file that draws a kind uses a kind colour map or a borrowed ink", () => {
    expect(files.length).toBeGreaterThan(5);
    const bad = files.filter((f) => BORROWED.test(readFileSync(f, "utf8")));
    expect(bad).toEqual([]);
  });

  it("a negative control: the guards catch the lines the first build shipped", () => {
    // app/lib/onThisDay.ts @ 78c816c2, KIND_INK, and the pill that wore it.
    expect(colourIn(`show: "var(--green)"`)).toBe(true);
    expect(colourIn(`certification: "var(--gold)"`)).toBe(true);
    expect(BORROWED.test(`style={{ color: KIND_INK[e.kind], borderColor: KIND_INK[e.kind] }}`)).toBe(true);
    expect(BORROWED.test(`chart: "var(--cyan)",`)).toBe(true);
    // And they leave ink alone.
    expect(colourIn(`fill="currentColor"`)).toBe(false);
  });
});

describe("no kind is labelled \"Live\"", () => {
  const LIVE = /\blive\b/i;

  it("no kind's word or screen-reader label says Live", () => {
    const bad = KINDS.filter((k) => LIVE.test(KIND_MARK[k].word) || LIVE.test(KIND_MARK[k].aria));
    expect(bad).toEqual([]);
    expect(KIND_MARK.show.word).toBe("Show");
  });

  it("no rendered pill or lone mark says Live", () => {
    const bad = KINDS.filter((k) =>
      [renderToStaticMarkup(<KindPill kind={k} />), renderToStaticMarkup(<KindMark kind={k} alone />)].some((h) =>
        LIVE.test(h.replace(/<[^>]*\baria-hidden="true"[^>]*>/g, "")),
      ),
    );
    expect(bad).toEqual([]);
  });

  it("the research data carries the renamed word on every row", () => {
    // docs/design/on-this-day/research/events.json is the event list the
    // design was drawn from; its 140 shows were migrated from "Live".
    const rows: { kind: OnThisDayKind; kindLabel: string }[] = JSON.parse(
      readFileSync("docs/design/on-this-day/research/events.json", "utf8"),
    );
    expect(rows.length).toBeGreaterThan(0);
    expect(rows.filter((r) => LIVE.test(r.kindLabel)).length).toBe(0);
    expect(rows.filter((r) => r.kindLabel !== KIND_MARK[r.kind]?.word)).toEqual([]);
  });

  it("a negative control: the check catches the label the first build shipped", () => {
    // app/lib/onThisDay.ts @ 78c816c2, KIND_LABEL.
    expect(LIVE.test(`show: "Live",`)).toBe(true);
    expect(LIVE.test("Show")).toBe(false);
  });
});
