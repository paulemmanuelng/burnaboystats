import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { renderToStaticMarkup } from "react-dom/server";
import { readFileSync } from "node:fs";
import { join } from "node:path";

/**
 * Naija @ 66 after the hunt (closed 2 Oct 2026, midnight WAT): the /naija66
 * page stays up as the record (Paul: "leave the link functional for now"),
 * in both layouts, fully static and in the past tense; the home page still
 * has no link to it.
 */

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/naija66",
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import Naija66Page from "../app/naija66/page";
import Home from "../app/page";
import { ENDED_KICKER, ENDED_TEXT, FINAL_NOTICE, LEDE, PRIZE } from "../app/lib/naija66/copy";

const ROOT = process.cwd();
const read = (f: string) => readFileSync(join(ROOT, f), "utf8");

const EVE = "2026-09-30T12:00:00Z"; // 1pm WAT the day before the hunt
const AFTER = "2026-10-03T10:00:00Z"; // the morning after the close

/**
 * A live hunt's words: a call to tap, watch or claim, a time a code
 * "appears", or the board's live states. None may show on the finished page.
 */
const LIVE_WORDS =
  /tap the right word first|codes appear|watch the drops|claim your premium|how to win|the code is yours|where to look next|as soon as you get it|refreshes every|live — the code is out|\bsleeping\b|checking…|you found it|and win\b/i;

beforeEach(() => {
  vi.useFakeTimers({ toFake: ["Date"] });
  vi.setSystemTime(new Date(AFTER));
});
afterEach(() => {
  cleanup();
  vi.useRealTimers();
  vi.unstubAllGlobals();
});

describe("/naija66 after the hunt", () => {
  it("renders both layouts with no network call: two h1s, two closed boxes, two final boards", () => {
    const fetch = vi.fn();
    vi.stubGlobal("fetch", fetch);
    const { container } = render(<Naija66Page />);
    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(2);
    expect(screen.getAllByText(ENDED_KICKER)).toHaveLength(2);
    expect(screen.getAllByText(ENDED_TEXT)).toHaveLength(2);
    expect(screen.getAllByText(FINAL_NOTICE)).toHaveLength(2);
    expect(container.querySelectorAll("li[data-state]")).toHaveLength(10);
    expect(container.querySelectorAll('li[data-state="claimed"]')).toHaveLength(10);
    expect(container.querySelector("input, button[type='submit']")).toBeNull();
    expect(fetch).not.toHaveBeenCalled();
  });

  it("prints the past-tense copy it ships, in both layouts", () => {
    const { container } = render(<Naija66Page />);
    const text = container.textContent!;
    expect(ENDED_KICKER).toBe("The hunt has ended");
    expect(ENDED_TEXT).toBe("Claims closed at midnight WAT at the end of 2 October. The board has the final results.");
    expect(FINAL_NOTICE).toBe("The hunt has ended. These are the final results.");
    expect(LEDE).toBe(
      "Five codes hid in words on pages of Burna Boy Stats, one at each drop. The first tap on the right word won a month of Spotify Premium Nigeria (₦3,000).",
    );
    expect(screen.getAllByText(LEDE)).toHaveLength(2);
    expect(text).toContain("The hunt has ended. Codes dropped at 9am, 12pm, 3pm, 6pm and 9pm WAT on 1 October.");
    expect(text).toContain("The hunt has ended. Codes dropped at 9am, 12pm, 3pm, 6pm and 9pm WAT.");
    expect(screen.getAllByText("How it worked")).toHaveLength(2);
    expect(screen.getAllByText("Players followed @paulemmanuelng on X for where to look.")).toHaveLength(2);
    expect(screen.getAllByText("The first tap on the right word won the code. After that it showed as claimed.")).toHaveLength(2);
    expect(screen.getAllByText(`Each prize was ${PRIZE.long}.`)).toHaveLength(2);
    expect(screen.getAllByText("Winners DMed their winner code to @paulemmanuelng on X.")).toHaveLength(2);
    expect(screen.getAllByText("One prize per person.")).toHaveLength(2);
    expect(screen.getAllByText("Not affiliated with Spotify or Burna Boy.")).toHaveLength(2);
    expect(screen.getAllByText("Times are WAT.")).toHaveLength(2);
  });

  it("shows all five prizes won: 1 and 2 claimed, 3 to 5 with the time and tail the live board showed", () => {
    render(<Naija66Page />);
    expect(screen.getAllByText("Claimed")).toHaveLength(4);
    expect(screen.getAllByText("Claimed at 22:01 WAT · ends …EK")).toHaveLength(2);
    expect(screen.getAllByText("Claimed at 21:38 WAT · ends …QR")).toHaveLength(2);
    expect(screen.getAllByText("Claimed at 21:00 WAT · ends …BY")).toHaveLength(2);
    expect(screen.getAllByText(PRIZE.board)).toHaveLength(10);
  });

  it("has no live dot and no call to action, in the render or the source", () => {
    const { container } = render(<Naija66Page />);
    expect(container.textContent).not.toMatch(LIVE_WORDS);
    expect(container.textContent).not.toMatch(/\bclues?\b/i);
    expect(container.querySelector('[data-state="live"], [data-state="sleeping"], [class*="liveDot"]')).toBeNull();
    for (const f of [
      "app/naija66/page.tsx",
      "app/components/MobileNaija66.tsx",
      "app/components/Naija66Play.tsx",
      "app/naija66/naija66.module.css",
      "app/components/mobileNaija66.module.css",
      "app/components/naija66Play.module.css",
    ]) {
      expect(read(f), f).not.toMatch(/liveDot|"use client"|\bfetch\(|\/api\/naija66/);
    }
  });

  it("negative control: the hero lines and board states that shipped live are caught", () => {
    // Literal lines from origin/main before this cleanup (page.tsx,
    // MobileNaija66.tsx, copy.ts, Naija66Play.tsx).
    for (const shipped of [
      "Codes appear at 9am, 12pm, 3pm, 6pm and 9pm WAT on 1 October",
      "Codes appear 9am, 12pm, 3pm, 6pm and 9pm WAT",
      "Where to look next: @paulemmanuelng on X ↗",
      "Tap the right word first and the code is yours. After that it shows as claimed.",
      "Five codes hide in words on pages of Burna Boy Stats, one at each drop. Tap the right word first and win a month of Spotify Premium Nigeria (₦3,000).",
      "Refreshes every 20 seconds. Times are WAT.",
      "Live — the code is out",
      "Sleeping",
    ]) {
      expect(LIVE_WORDS.test(shipped), shipped).toBe(true);
    }
    expect(/liveDot/.test('<span className={styles.liveDot} aria-hidden="true" />')).toBe(true);
  });

  it("names no page: its only internal link is home", () => {
    const { container } = render(<Naija66Page />);
    const internal = new Set([...container.querySelectorAll("a[href^='/']")].map((a) => a.getAttribute("href")));
    expect([...internal]).toEqual(["/"]);
    expect(screen.getAllByText("@paulemmanuelng on X ↗")).toHaveLength(2);
  });

  it("server-renders to the same finished page, whatever the clock says", () => {
    const after = renderToStaticMarkup(<Naija66Page />);
    vi.setSystemTime(new Date(EVE));
    expect(renderToStaticMarkup(<Naija66Page />)).toBe(after);
    expect(after).toContain("The hunt has ended. These are the final results.");
  });
});

describe("the home page", () => {
  it("has no /naija66 link (Paul, 2 Oct 2026: all five codes found), while /naija66 stays up", () => {
    for (const now of [EVE, AFTER]) {
      vi.setSystemTime(new Date(now));
      const html = renderToStaticMarkup(<Home />);
      expect(html, now).not.toContain('href="/naija66"');
      expect(html, now).not.toContain("the Naija @ 66 hunt");
    }
  });

  it("negative control: the home page with the strip that shipped planted back in fails both checks", () => {
    vi.setSystemTime(new Date(EVE));
    const html = renderToStaticMarkup(<Home />);
    // The strip's link and the line its bannerLine() returned the evening
    // before (origin/main Naija66BannerLive.tsx).
    const strip = '<a href="/naija66"><span>Tomorrow 9am WAT: the Naija @ 66 hunt — five ₦3,000 Spotify Premium prizes</span></a>';
    const planted = html.replace("<main", `${strip}<main`);
    expect(planted).not.toBe(html);
    expect(planted).toContain('href="/naija66"');
    expect(planted).toContain("the Naija @ 66 hunt");
  });
});
