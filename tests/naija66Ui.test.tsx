import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent, waitFor, act, cleanup } from "@testing-library/react";
import { renderToString, renderToStaticMarkup } from "react-dom/server";

/**
 * Naija @ 66 on the page: the key slot every page carries, the /naija66 page
 * in both layouts, and the home banner in both layouts.
 *
 * The pathname here is made up. The slot is identical on every page, so no
 * real one is needed — and a real one in a public test would be a hint.
 */

const SAMPLE_PATH = "/a/sample-page";
const OTHER_PATH = "/another/sample";

/** The pathname usePathname() returns; a test moves it to navigate. */
const nav = vi.hoisted(() => ({ path: "/a/sample-page" }));

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => nav.path,
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import HuntKeySlot from "../app/components/HuntKeySlot";
import slotStyles from "../app/components/huntKeySlot.module.css";
import Naija66Page from "../app/naija66/page";
import Naija66Banner from "../app/components/Naija66Banner";
import Naija66BannerLive, { bannerLine } from "../app/components/Naija66BannerLive";
import bannerStyles from "../app/components/naija66Banner.module.css";
import Home from "../app/page";
import { CLOSES_MS } from "../app/lib/naija66/clock";
import {
  CODE1_PAGE,
  LAST_CODE_LINE,
  NEXT_CODE_LINE,
  PRIZE,
  WINNER_KEEP_LINE,
  WINNER_LINE,
} from "../app/lib/naija66/copy";
import { nothingLeft, outcomeLine } from "../app/components/Naija66Play";
import type { PublicPrize } from "../app/lib/naija66/state";

const EVE = "2026-09-30T12:00:00Z"; // 1pm WAT the day before
const DAWN = "2026-10-01T05:00:00Z"; // 6am WAT on the day
const BEFORE = "2026-10-01T07:59:59Z";
const AT_0905 = "2026-10-01T08:05:00Z";
const AT_2105 = "2026-10-01T20:05:00Z";
const CLOSED = "2026-10-02T23:00:00Z";

const setNow = (iso: string) => vi.setSystemTime(new Date(iso));

beforeEach(() => {
  vi.useFakeTimers({ toFake: ["Date"] });
  nav.path = SAMPLE_PATH;
});
afterEach(() => {
  cleanup();
  vi.useRealTimers();
  vi.unstubAllGlobals();
});

// ── The key slot ─────────────────────────────────────────────────────────────

describe("HuntKeySlot", () => {
  it("renders nothing before the first drop or from the close", () => {
    for (const t of [EVE, BEFORE, CLOSED, "2026-10-09T00:00:00Z"]) {
      setNow(t);
      const { container, unmount } = render(<HuntKeySlot />);
      expect(container.innerHTML, t).toBe("");
      unmount();
    }
  });

  it("asks for this page's badge between them, lazily, with no alt text and no space", () => {
    const cases = [
      ["2026-10-01T08:00:30Z", "1"], // 30 s after the first drop
      [AT_0905, "1b"], // past the 90-second recheck
      ["2026-10-01T20:01:29Z", "5"],
      [AT_2105, "5b"],
      [new Date(CLOSES_MS - 1).toISOString(), "5b"],
    ] as const;
    for (const [t, round] of cases) {
      setNow(t);
      const { container, unmount } = render(<HuntKeySlot />);
      const img = container.querySelector("img")!;
      expect(img.getAttribute("src"), t).toBe(`/api/naija66/badge?p=${encodeURIComponent(SAMPLE_PATH)}&v=${round}&n=0`);
      expect(img.getAttribute("alt")).toBe("");
      expect(img.getAttribute("loading")).toBe("lazy");
      expect(container.firstElementChild!.className).toBe(slotStyles.slot);
      unmount();
    }
  });

  it("asks again 90 seconds after a drop, for a phone whose clock runs ahead", () => {
    setNow("2026-10-01T11:00:10Z"); // prize 2's drop, by a fast phone clock
    const { container, rerender } = render(<HuntKeySlot />);
    const first = container.querySelector("img")!.getAttribute("src");
    expect(first).toContain("&v=2&");
    setNow("2026-10-01T11:01:31Z");
    rerender(<HuntKeySlot />);
    const second = container.querySelector("img")!.getAttribute("src");
    expect(second).toContain("&v=2b&");
    setNow("2026-10-01T11:40:00Z");
    rerender(<HuntKeySlot />);
    expect(container.querySelector("img")!.getAttribute("src")).toBe(second); // and only once
  });

  it("asks afresh on every arrival at a page, so a blank never sticks to a revisit", () => {
    setNow(AT_0905);
    const { container, rerender } = render(<HuntKeySlot />);
    const src = () => container.querySelector("img")!.getAttribute("src");
    const firstVisit = src();
    const img = container.querySelector("img")!;
    Object.defineProperty(img, "naturalWidth", { configurable: true, value: 360 });
    fireEvent.load(img);
    expect(container.firstElementChild!.classList.contains(slotStyles.found)).toBe(true);

    nav.path = OTHER_PATH;
    rerender(<HuntKeySlot />);
    expect(src()).toBe(`/api/naija66/badge?p=${encodeURIComponent(OTHER_PATH)}&v=1b&n=1`);
    expect(container.firstElementChild!.classList.contains(slotStyles.found)).toBe(false);

    nav.path = SAMPLE_PATH; // back to the first page
    rerender(<HuntKeySlot />);
    expect(src()).toBe(`/api/naija66/badge?p=${encodeURIComponent(SAMPLE_PATH)}&v=1b&n=2`);
    expect(src()).not.toBe(firstVisit); // a new URL: the browser cannot answer it from the first visit's image
    // The slot waits for the new answer rather than showing the old one.
    expect(container.firstElementChild!.classList.contains(slotStyles.found)).toBe(false);
    expect(container.querySelector("a")).toBeNull();
  });

  it("negative control: re-rendering the same page asks nothing new", () => {
    setNow(AT_0905);
    const { container, rerender } = render(<HuntKeySlot />);
    const before = container.querySelector("img")!.getAttribute("src");
    rerender(<HuntKeySlot />);
    rerender(<HuntKeySlot />);
    expect(container.querySelector("img")!.getAttribute("src")).toBe(before);
  });

  it("is never in the server's HTML, so every page's source is the same", () => {
    setNow(AT_0905);
    expect(renderToString(<HuntKeySlot />)).toBe("");
  });

  it("stays shut for a blank 1x1 and opens for a real badge", () => {
    setNow(AT_0905);
    const { container } = render(<HuntKeySlot />);
    const img = container.querySelector("img")!;
    Object.defineProperty(img, "naturalWidth", { configurable: true, value: 1 });
    fireEvent.load(img);
    expect(container.firstElementChild!.classList.contains(slotStyles.found)).toBe(false);
    expect(container.querySelector("a")).toBeNull();
    Object.defineProperty(img, "naturalWidth", { configurable: true, value: 360 });
    fireEvent.load(img);
    expect(container.firstElementChild!.classList.contains(slotStyles.found)).toBe(true);
    expect(container.querySelector("a")!.getAttribute("href")).toBe("/naija66");
  });
});

// ── /naija66 ─────────────────────────────────────────────────────────────────

const STATUS_0905 = {
  ready: true,
  now: AT_0905,
  closesAt: "2026-10-02T23:00:00Z",
  prizes: [
    { prize: 1, dropsAt: "2026-10-01T08:00:00Z", state: "live" },
    { prize: 2, dropsAt: "2026-10-01T11:00:00Z", state: "sleeping" },
    { prize: 3, dropsAt: "2026-10-01T14:00:00Z", state: "sleeping" },
    { prize: 4, dropsAt: "2026-10-01T17:00:00Z", state: "sleeping" },
    { prize: 5, dropsAt: "2026-10-01T20:00:00Z", state: "sleeping" },
  ],
};

function stubApi(claimBody: unknown = { wrong: true }, statusBody: unknown = STATUS_0905) {
  const calls: string[] = [];
  const sent: Record<string, unknown>[] = [];
  vi.stubGlobal(
    "fetch",
    vi.fn(async (url: string, init?: RequestInit) => {
      calls.push(url);
      if (init?.body) sent.push(JSON.parse(String(init.body)));
      const body = url.includes("/claim") ? claimBody : statusBody;
      return { ok: true, status: 200, json: async () => body };
    }),
  );
  return Object.assign(calls, { sent });
}

/** The board a misconfigured deploy serves (state.ts notReadyStatus), at `now`. */
const notReady = (now: string) => ({
  ...STATUS_0905,
  ready: false,
  now,
  prizes: STATUS_0905.prizes.map((p) => ({ ...p, state: "sleeping" })),
});

describe("/naija66", () => {
  it("renders both layouts — two h1s, two key boxes, two boards — from one poll", async () => {
    setNow(AT_0905);
    const calls = stubApi();
    const { container } = render(<Naija66Page />);
    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(2);
    expect(screen.getAllByLabelText("Your code")).toHaveLength(2);
    expect(container.querySelectorAll("li[data-state]")).toHaveLength(10);
    await waitFor(() => expect(container.querySelectorAll('li[data-state="live"]')).toHaveLength(2));
    expect(calls.filter((c) => c.includes("/status"))).toHaveLength(1);
    // Both layouts print the same rules.
    expect(screen.getAllByText("One prize per person.")).toHaveLength(2);
    expect(screen.getAllByText("Not affiliated with Spotify or Burna Boy.")).toHaveLength(2);
    expect(container.textContent).toContain("9am, 12pm, 3pm, 6pm and 9pm WAT");
  });

  it("prints the prize from the one copy constant, in both layouts", () => {
    setNow(AT_0905);
    stubApi();
    const { container } = render(<Naija66Page />);
    const text = container.textContent!;
    // Five board rows in each layout, each the board's own words for the prize.
    expect(screen.getAllByText(PRIZE.board)).toHaveLength(10);
    // The heroes (desktop and phone), step 4 twice, and the rule twice.
    expect(text.split(PRIZE.long).length - 1).toBeGreaterThanOrEqual(6);
    expect(screen.getAllByText(`Each prize is ${PRIZE.long}.`)).toHaveLength(2);
    expect(text).not.toMatch(/\b(1|one|five) months? of Spotify Premium\b(?! Nigeria)/i);
  });

  it("names code 1's page, links it, and sends codes 2 to 5 to X — in both layouts, with no clue anywhere", () => {
    setNow(AT_0905);
    stubApi();
    const { container } = render(<Naija66Page />);
    const text = container.textContent!;
    expect(text.split("Code 1 appears at 9am WAT on the Where the World Listens page.").length - 1).toBe(4); // hero + step 1, twice
    const named = [...container.querySelectorAll(`a[href="${CODE1_PAGE.href}"]`)];
    expect(named).toHaveLength(4);
    for (const a of named) expect(a.textContent).toBe("Where the World Listens");
    expect(text.split("For codes 2 to 5, follow @paulemmanuelng on X to find out where to look.").length - 1).toBe(2);
    expect(screen.getAllByText("Where to look next: @paulemmanuelng on X ↗")).toHaveLength(2);
    expect(text).not.toMatch(/\bclues?\b/i);
    // The page links to no other page on the site but the ones it always did.
    const internal = new Set(
      [...container.querySelectorAll("a[href^='/']")].map((a) => a.getAttribute("href")),
    );
    expect([...internal].sort()).toEqual(["/", CODE1_PAGE.href].sort());
  });

  it("shows a win in both layouts, with the code and the DM line", async () => {
    setNow(AT_0905);
    stubApi({ won: true, prize: 1, code: "NG66-1-7QK4MZ", at: "2026-10-01T08:07:00.000Z" });
    render(<Naija66Page />);
    const [box] = screen.getAllByLabelText("Your code");
    fireEvent.change(box, { target: { value: "ng66-abcdef" } });
    await act(async () => {
      fireEvent.submit(box.closest("form")!);
    });
    await waitFor(() => expect(screen.getAllByText("You found it.")).toHaveLength(2));
    expect(screen.getAllByText("NG66-1-7QK4MZ")).toHaveLength(2);
    expect(screen.getAllByText(WINNER_LINE)).toHaveLength(2);
    expect(screen.getAllByText(/claimed 09:07 WAT/)).toHaveLength(2);
    // Keep the code, and keep it to yourself: the first DM with it is paid.
    expect(screen.getAllByText(WINNER_KEEP_LINE)).toHaveLength(2);
    expect(WINNER_KEEP_LINE).toMatch(/don't post it/);
    expect(screen.queryByText("Only this browser can show this code. Screenshot it to be safe.")).toBeNull();
    expect(WINNER_LINE).toContain(PRIZE.long);
  });

  it("points a too-slow player at X while a drop is still to come", async () => {
    setNow(AT_0905);
    stubApi({ claimed: true, prize: 1, at: "2026-10-01T08:03:00.000Z", tail: "MZ" });
    render(<Naija66Page />);
    const [box] = screen.getAllByLabelText("Your code");
    fireEvent.change(box, { target: { value: "NG66-AAAAAA" } });
    await act(async () => {
      fireEvent.submit(box.closest("form")!);
    });
    const line =
      "Too slow — prize 1 was claimed at 09:03 WAT (winner code ends …MZ). Follow @paulemmanuelng on X for where to look next.";
    await waitFor(() => expect(screen.getAllByText(line)).toHaveLength(2));
  });

  /** The board at 21:30 WAT, prize 5 just claimed, with `rest` as prizes 1 to 4. */
  const at2130 = (rest: string[]) => ({
    ...STATUS_0905,
    now: "2026-10-01T20:30:00Z",
    prizes: STATUS_0905.prizes.map((p, i) =>
      i < 4
        ? { ...p, state: rest[i], ...(rest[i] === "claimed" ? { claimedAt: "2026-10-01T12:00:00Z", tail: "AB" } : {}) }
        : { ...p, state: "claimed", claimedAt: "2026-10-01T20:30:00Z", tail: "XD" },
    ),
  });
  const tooSlowOn5 = async (statusBody: unknown) => {
    setNow("2026-10-01T20:30:00Z");
    stubApi({ claimed: true, prize: 5, at: "2026-10-01T20:30:00.000Z", tail: "XD" }, statusBody);
    render(<Naija66Page />);
    const [box] = screen.getAllByLabelText("Your code");
    fireEvent.change(box, { target: { value: "NG66-AAAAAA" } });
    await act(async () => {
      fireEvent.submit(box.closest("form")!);
    });
  };
  const TOO_SLOW_5 = "Too slow — prize 5 was claimed at 21:30 WAT (winner code ends …XD).";

  it("after the last drop, still points at X while the board shows a code out — in both layouts", async () => {
    await tooSlowOn5(at2130(["live", "live", "live", "claimed"]));
    await waitFor(() => expect(screen.getAllByText(`${TOO_SLOW_5} ${NEXT_CODE_LINE}`)).toHaveLength(2));
    expect(screen.queryByText(/That was the last code/)).toBeNull();
  });

  it("says it was the last code once the board shows every prize claimed — in both layouts", async () => {
    await tooSlowOn5(at2130(["claimed", "claimed", "claimed", "claimed"]));
    await waitFor(() => expect(screen.getAllByText(`${TOO_SLOW_5} ${LAST_CODE_LINE}`)).toHaveLength(2));
  });

  it("says the same thing for a wrong key in both layouts", async () => {
    setNow(AT_0905);
    stubApi({ wrong: true });
    render(<Naija66Page />);
    const [box] = screen.getAllByLabelText("Your code");
    fireEvent.change(box, { target: { value: "NG66-AAAAAA" } });
    await act(async () => {
      fireEvent.submit(box.closest("form")!);
    });
    await waitFor(() => expect(screen.getAllByText(/doesn't open anything/)).toHaveLength(2));
  });

  it("sends this browser's claim token with every claim, the same one each time", async () => {
    setNow(AT_0905);
    localStorage.removeItem("naija66-claim");
    const calls = stubApi({ wrong: true });
    render(<Naija66Page />);
    const [box] = screen.getAllByLabelText("Your code");
    for (const key of ["NG66-AAAAAA", "NG66-BBBBBB"]) {
      fireEvent.change(box, { target: { value: key } });
      await act(async () => {
        fireEvent.submit(box.closest("form")!);
      });
      await waitFor(() => expect(calls.sent.filter((b) => b.key === key)).toHaveLength(1));
    }
    const tokens = calls.sent.map((b) => b.token);
    expect(tokens[0]).toMatch(/^[0-9a-f]{32}$/);
    expect(tokens[1]).toBe(tokens[0]);
    expect(localStorage.getItem("naija66-claim")).toBe(tokens[0]);
  });

  it("keeps Claim disabled in the server's HTML, and names no field, so a pre-hydration tap cannot reload with the key", async () => {
    setNow(AT_0905);
    const html = renderToString(<Naija66Page />);
    const buttons = [...html.matchAll(/<button type="submit"[^>]*>/g)].map((m) => m[0]);
    expect(buttons).toHaveLength(2);
    for (const b of buttons) expect(b).toMatch(/ disabled=""/);
    expect(html).not.toMatch(/<input[^>]*\bname=/);
    // Once React runs the page, Claim works.
    stubApi();
    render(<Naija66Page />);
    for (const b of screen.getAllByRole("button", { name: "Claim" })) expect(b.hasAttribute("disabled")).toBe(false);
  });

  it("reads the key from the field itself, so a key pasted before hydration is the key sent", async () => {
    setNow(AT_0905);
    const calls = stubApi({ wrong: true });
    render(<Naija66Page />);
    const [box] = screen.getAllByLabelText("Your code") as HTMLInputElement[];
    box.value = "NG66-CCCCCC"; // no React change event, as when the page was still plain HTML
    await act(async () => {
      fireEvent.submit(box.closest("form")!);
    });
    await waitFor(() => expect(calls.sent.map((b) => b.key)).toEqual(["NG66-CCCCCC"]));
  });

  it("misconfigured: says it opens at 9am before then, and not a time already past after", async () => {
    setNow(AT_0905);
    stubApi({ error: "The hunt isn't open yet." }, notReady(AT_0905));
    const { unmount } = render(<Naija66Page />);
    await waitFor(() => expect(screen.getAllByText("The hunt isn't open yet — check back soon.")).toHaveLength(2));
    expect(screen.queryByText(/opens at 9am/)).toBeNull();
    unmount();
    setNow(DAWN);
    stubApi({ wrong: true }, notReady(DAWN));
    render(<Naija66Page />);
    await waitFor(() => expect(screen.getAllByText("The hunt opens at 9am WAT on 1 October.")).toHaveLength(2));
  });
});

// ── The home banner ──────────────────────────────────────────────────────────

describe("the home banner", () => {
  it("is on both layouts of the home page until the close", () => {
    setNow(EVE);
    const html = renderToStaticMarkup(<Home />);
    const banners = [...html.matchAll(/<a href="\/naija66" class="([^"]+)"/g)].map((m) => m[1]);
    expect(banners).toHaveLength(2);
    expect(banners.some((c) => c.includes(bannerStyles.phone))).toBe(true);
    expect(banners.some((c) => c.includes(bannerStyles.desktop))).toBe(true);
    expect(html.split("Tomorrow 9am WAT: the Naija @ 66 hunt — five ₦3,000 Spotify Premium prizes").length - 1).toBe(2);
    // The phone strip precedes the phone screen; the desktop one sits in the desktop wrapper.
    expect(html.indexOf(bannerStyles.phone)).toBeLessThan(html.indexOf("Burna Boy</h1>"));
  });

  it("says Today on the morning itself, and is gone from the close", () => {
    setNow(DAWN);
    expect(renderToStaticMarkup(<Naija66Banner layout="phone" now={new Date()} />)).toContain("Today 9am WAT");
    setNow(CLOSED);
    expect(renderToStaticMarkup(<Naija66Banner layout="phone" now={new Date()} />)).toBe("");
    expect(renderToStaticMarkup(<Naija66Banner layout="desktop" now={new Date()} />)).toBe("");
    expect(renderToStaticMarkup(<Home />)).not.toContain('href="/naija66"');
  });

  it("carries the pre-paint check that hides a cached copy after the close", () => {
    setNow(EVE);
    const html = renderToStaticMarkup(<Naija66Banner layout="desktop" now={new Date()} />);
    expect(html).toContain(`if(Date.now()>=${CLOSES_MS})document.documentElement.dataset.naija66="over"`);
  });

  it("does not call a misconfigured hunt live, in either layout", async () => {
    setNow(AT_0905);
    stubApi({ wrong: true }, notReady(AT_0905));
    render(
      <>
        <Naija66BannerLive layout="phone" initialPhase="live" />
        <Naija66BannerLive layout="desktop" initialPhase="live" />
      </>,
    );
    await waitFor(() => expect(screen.getAllByText("Naija @ 66 — starting soon")).toHaveLength(2));
    expect(screen.queryByText(/is live/)).toBeNull();
    expect(screen.getAllByText(/How it works/)).toHaveLength(2);
    expect(screen.queryByText(/Play/)).toBeNull();
  });

  it("negative control: a ready hunt's banner does say live, and counts", async () => {
    setNow(AT_0905);
    stubApi();
    render(<Naija66BannerLive layout="phone" initialPhase="live" />);
    await waitFor(() => expect(screen.getByText("Naija @ 66 is live — 5 of 5 prizes left")).toBeTruthy());
    expect(screen.getByText(/Play/)).toBeTruthy();
  });

  it("counts the prizes still out once the hunt is live", () => {
    expect(bannerLine("live", 3, false)).toBe("Naija @ 66 — starting soon");
    expect(bannerLine("live", null)).toBe("Naija @ 66 is live — five ₦3,000 Spotify Premium prizes");
    expect(bannerLine("live", 3)).toBe("Naija @ 66 is live — 3 of 5 prizes left");
    expect(bannerLine("live", 0)).toBe("Naija @ 66 — all five prizes claimed. See the winners");
    expect(bannerLine("tomorrow", null)).toBe("Tomorrow 9am WAT: the Naija @ 66 hunt — five ₦3,000 Spotify Premium prizes");
    expect(bannerLine("today", null)).toBe("Today 9am WAT: the Naija @ 66 hunt — five ₦3,000 Spotify Premium prizes");
    for (const phase of ["tomorrow", "today"] as const) expect(bannerLine(phase, null)).toContain(PRIZE.banner);
  });
});

// ── The too-slow line ────────────────────────────────────────────────────────

describe("the too-slow line", () => {
  const claimed = (prize: number) => ({ kind: "claimed" as const, prize, at: "2026-10-01T11:02:00Z", tail: "Q7" });
  type State = "sleeping" | "live" | "claimed" | "closed";
  /** A board in prize order: board("claimed", "live", …) is prize 1 claimed, prize 2 live… */
  const board = (...states: State[]): PublicPrize[] =>
    states.map((state, i) => ({ prize: i + 1, dropsAt: STATUS_0905.prizes[i].dropsAt, state }));

  it("sends the player to X while a drop is still to come", () => {
    expect(outcomeLine(claimed(2), board("claimed", "claimed", "sleeping", "sleeping", "sleeping"))).toBe(
      `Too slow — prize 2 was claimed at 12:02 WAT (winner code ends …Q7). ${NEXT_CODE_LINE}`,
    );
    expect(NEXT_CODE_LINE).toBe("Follow @paulemmanuelng on X for where to look next.");
    expect(
      outcomeLine({ kind: "claimed", prize: 4, at: null, tail: null }, board("claimed", "claimed", "claimed", "claimed", "sleeping")),
    ).toBe(`Too slow — prize 4 has already been claimed. ${NEXT_CODE_LINE}`);
  });

  it("sends the player to X after the last drop while an earlier code is still out", () => {
    // The state the builder's own 21:30 shot caught: prize 5 just claimed,
    // prizes 1 to 3 still live. The line the page printed then is wrong here.
    const shipped = "Too slow — prize 5 was claimed at 21:30 WAT (winner code ends …XD). That was the last code.";
    const at2130 = { kind: "claimed" as const, prize: 5, at: "2026-10-01T20:30:00Z", tail: "XD" };
    const line = outcomeLine(at2130, board("live", "live", "live", "claimed", "claimed"));
    expect(line).not.toBe(shipped);
    expect(line).toBe(`Too slow — prize 5 was claimed at 21:30 WAT (winner code ends …XD). ${NEXT_CODE_LINE}`);
    // 21:05: too slow on prize 3 while prize 5 is live.
    expect(outcomeLine(claimed(3), board("claimed", "claimed", "claimed", "claimed", "live"))).toMatch(
      /\. Follow @paulemmanuelng on X for where to look next\.$/,
    );
  });

  it("says it was the last code only once every other prize is claimed", () => {
    expect(outcomeLine(claimed(5), board("claimed", "claimed", "claimed", "claimed", "claimed"))).toBe(
      `Too slow — prize 5 was claimed at 12:02 WAT (winner code ends …Q7). ${LAST_CODE_LINE}`,
    );
    // The board may not have caught up with this claim yet: its own row does not count.
    expect(outcomeLine(claimed(2), board("claimed", "live", "claimed", "claimed", "claimed"))).toMatch(
      /\. That was the last code\.$/,
    );
    expect(outcomeLine(claimed(1), board("claimed", "claimed", "closed", "claimed", "claimed"))).toMatch(
      /\. That was the last code\.$/,
    );
    expect(LAST_CODE_LINE).toBe("That was the last code.");
  });

  it("never says it was the last code without a board that shows it", () => {
    expect(outcomeLine(claimed(5), undefined)).toMatch(/\. Follow @paulemmanuelng on X for where to look next\.$/);
    // A board missing a row (here prize 5's) proves nothing about that row.
    expect(outcomeLine(claimed(1), board("claimed", "claimed", "claimed", "claimed"))).toMatch(/where to look next\.$/);
    for (const s of ["live", "sleeping"] as const) {
      for (let other = 1; other <= 4; other++) {
        const states: State[] = ["claimed", "claimed", "claimed", "claimed", "claimed"];
        states[other - 1] = s;
        expect(nothingLeft(5, board(...states)), `prize ${other} ${s}`).toBe(false);
      }
    }
  });

  it("never says clue", () => {
    const boards = [board("claimed", "live", "sleeping", "sleeping", "sleeping"), board("claimed", "claimed", "claimed", "claimed", "claimed")];
    const lines = [1, 2, 3, 4, 5].flatMap((p) => boards.map((b) => outcomeLine(claimed(p), b)));
    lines.push(outcomeLine({ kind: "wrong" }, boards[0]));
    for (const l of lines) expect(l).not.toMatch(/\bclues?\b/i);
  });
});
