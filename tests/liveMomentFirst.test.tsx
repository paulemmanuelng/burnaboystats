import { describe, it, expect, vi } from "vitest";
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

import ToursPage from "../app/records/tours/page";
import { liveMoments } from "../app/data/liveMoments";
import type { LiveMoment } from "../app/data/tours";
import { allFirsts } from "../app/data/firsts";
import { FIRST_FLAG, RECORD_PILL, momentFlags } from "../app/lib/tourMeta";
import { onThisDayEvents, dayBySlug } from "../app/lib/onThisDay";
import { decl, read, rules } from "./fixtures/cssRules";

/**
 * Owner call left by the 8 Oct quick wins, answered "defaults" by Paul on
 * 10 Oct 2026: the FIFA World Cup Final halftime show is a FIRST ("the first
 * African artist to do so"), not a record, so /records/tours stops tagging it
 * "Record". It wears the timeline's ink outline "First" flag (Job 0 colour
 * roles, J0-6 with fix 5) from LiveMoment's `first`, and On This Day ranks a
 * first as it ranks a record. The phone /records/tours prints no live-moment
 * list, so the tag is the desktop's alone.
 */

const WORLD_CUP = "FIFA World Cup Final halftime show";

// Each live moment flagged `first` and the firsts.ts line that holds the same
// milestone — the timeline's rule (tests/colourRoles.test.tsx FIRSTS_FOR): a
// flag cannot outlive its first.
const FIRSTS_FOR: Record<string, string> = {
  [WORLD_CUP]: "First African artist to perform at a FIFA World Cup Final halftime show",
};

// app/data/liveMoments.ts on main ca597020 (live 10 Oct 2026), verbatim.
const SHIPPED_ROW: LiveMoment = { year: "2026", date: "2026-07-19", title: "FIFA World Cup Final halftime show", text: "Performed at the 2026 final's halftime show at MetLife Stadium, East Rutherford (19 July) — the first African artist to do so — on a bill with Madonna, Shakira, BTS, Justin Bieber and Coldplay.", record: true };
// app/lib/onThisDay.ts on main ca597020: a live moment's rank.
const shippedRank = (m: LiveMoment) => (m.record ? 88 : 66);

const doc = () => new DOMParser().parseFromString(renderToStaticMarkup(ToursPage()), "text/html");
const css = (sel: string, file: string) =>
  rules(read(file))
    .filter((r) => r.media === null && r.selector.split(",").map((s) => s.trim()).includes(sel))
    .map((r) => r.body)
    .join(";");

describe("the World Cup Final halftime show is a first, not a record", () => {
  const row = liveMoments.find((m) => m.title === WORLD_CUP)!;

  it("the row carries `first`, not `record`, and its text says it is a first", () => {
    expect(row.first).toBe(true);
    expect(row.record).toBeUndefined();
    expect(row.text).toContain("the first African artist to do so");
  });

  it("every `first` maps to a firsts.ts line", () => {
    const titles = new Set(allFirsts.map((f) => f.title));
    expect(liveMoments.filter((m) => m.first).map((m) => m.title).sort()).toEqual(Object.keys(FIRSTS_FOR).sort());
    for (const [title, line] of Object.entries(FIRSTS_FOR)) expect(titles.has(line), `${title} → "${line}"`).toBe(true);
  });

  it("desktop /records/tours: the row's tag reads First; London Stadium's still reads Record", () => {
    const rows = [...doc().querySelectorAll('[class*="_desktopOnly_"] [class*="_moment_"]')];
    const tags = (title: string) => {
      const r = rows.find((x) => x.querySelector('[class*="_momentTitle_"]')?.textContent === title)!;
      return [...r.querySelectorAll('[class*="_recordPill_"]')].map((p) => p.textContent);
    };
    expect(tags(WORLD_CUP)).toEqual([FIRST_FLAG]);
    expect(tags("London Stadium — African concert record")).toEqual([RECORD_PILL]);
    expect(FIRST_FLAG).toBe("First");
  });

  it("the phone /records/tours lists no live moments, so it has no tag to change", () => {
    const phone = doc().querySelector('[class*="_screen_"]')!;
    expect(phone).not.toBeNull();
    expect(phone.querySelectorAll('[class*="_moment"]').length).toBe(0);
    expect(phone.textContent).not.toContain(WORLD_CUP);
  });

  it("the tag is the timeline's First flag: the same word and the same ink outline", () => {
    expect(read("app/timeline/page.tsx")).toContain(`{e.first && <span className={styles.flag}>${FIRST_FLAG}</span>}`);
    const pill = css(".recordPill", "app/records/tours/tours.module.css");
    const flag = css(".flag", "app/timeline/timeline.module.css");
    for (const p of ["border", "border-radius", "color", "font-weight", "letter-spacing", "text-transform", "padding"]) {
      expect(decl(pill, p), p).toBe(decl(flag, p));
    }
    expect(decl(pill, "border")).toBe("1px solid var(--rule)");
  });

  it("On This Day ranks it as a record: 88, and it leads 19 July on both layouts", () => {
    const e = onThisDayEvents.find((x) => x.source.data === "liveMoments" && liveMoments[x.source.index].title === WORLD_CUP)!;
    expect(e.date).toBe("2026-07-19");
    expect(e.rank).toBe(88);
    expect(dayBySlug("19-july")!.lead.id).toBe(e.id);
  });

  it("negative controls: the shipped row prints Record, and the shipped rank would drop a first to 66", () => {
    expect(momentFlags(SHIPPED_ROW)).toEqual([RECORD_PILL]);
    expect(momentFlags(SHIPPED_ROW)).not.toEqual([FIRST_FLAG]);
    expect(shippedRank(SHIPPED_ROW)).toBe(88);
    expect(shippedRank(row)).toBe(66);
  });
});
