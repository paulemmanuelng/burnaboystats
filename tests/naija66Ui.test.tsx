import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent, waitFor, act, cleanup } from "@testing-library/react";
import { renderToString, renderToStaticMarkup } from "react-dom/server";
import { useEffect, useState } from "react";

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
import Naija66Page from "../app/naija66/page";
import Naija66Banner from "../app/components/Naija66Banner";
import Naija66BannerLive, { bannerLine } from "../app/components/Naija66BannerLive";
import bannerStyles from "../app/components/naija66Banner.module.css";
import Home from "../app/page";
import { CLOSES_MS } from "../app/lib/naija66/clock";
import { ALREADY_WON_LINE, FLOW, PRIZE, WINNER_KEEP_LINE, WINNER_LINE } from "../app/lib/naija66/copy";

const EVE = "2026-09-30T12:00:00Z"; // 1pm WAT the day before
const DAWN = "2026-10-01T05:00:00Z"; // 6am WAT on the day
const BEFORE = "2026-10-01T07:59:59Z";
const AT_0905 = "2026-10-01T08:05:00Z";
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

// ── The reveal card ──────────────────────────────────────────────────────────

/** A fake hunt API: spot answers `spotBody`, reveal answers `revealBody`. */
function stubHunt(spotBody: unknown = {}, revealBody: unknown = {}) {
  const calls: { url: string; method: string; body?: Record<string, unknown> }[] = [];
  vi.stubGlobal(
    "fetch",
    vi.fn(async (url: string, init?: RequestInit) => {
      calls.push({ url, method: init?.method ?? "GET", body: init?.body ? JSON.parse(String(init.body)) : undefined });
      const body = url.includes("/reveal") ? revealBody : spotBody;
      return { ok: true, status: 200, json: async () => body };
    }),
  );
  return calls;
}

/** A page: words in <main> (plain, in a link, in a button), a footer, and the slot. */
function Page() {
  return (
    <>
      <main>
        <p>An ordinary line about the Zebrafinch, its 412,500 fans.</p>
        <a href="#x">Zebrafinch link</a>
        <button type="button">Zebrafinch button</button>
      </main>
      <footer>Zebrafinch footer</footer>
      <HuntKeySlot />
    </>
  );
}
const renderPage = () => render(<Page />);

/**
 * Taps `word` where it sits inside `where` (main's plain paragraph by default).
 * jsdom has no layout, so the caret goes where a real tap would put it: a
 * collapsed selection inside the word (word.ts reads that as its fallback).
 */
async function tapWord(container: HTMLElement, word: string, where = "main p") {
  const el = caretIn(container, word, where);
  await act(async () => {
    fireEvent.click(el);
  });
}

/** Puts the caret inside `word` where it sits inside `where`, as a real tap would. */
function caretIn(container: HTMLElement, word: string, where: string) {
  const el = container.ownerDocument.querySelector(where)!;
  const text = [...el.childNodes].find((n) => n.nodeType === 3 && (n as Text).data.includes(word)) as Text;
  const sel = document.getSelection()!;
  sel.removeAllRanges();
  const r = document.createRange();
  r.setStart(text, text.data.indexOf(word) + 2);
  r.collapse(true);
  sel.addRange(r);
  return el;
}

/**
 * A finger on `word`: pointer down then up, the way an iPhone reports a tap on
 * plain text — with NO click after it (WebKit sends none when nothing up the
 * tree listens for clicks). `click: true` adds the click Android sends too.
 */
async function touchWord(
  container: HTMLElement,
  word: string,
  {
    where = "main p",
    move = 0,
    holdMs = 0,
    cancel = false,
    secondFinger = false,
    click = false,
    pointerType = "touch",
  }: {
    where?: string;
    move?: number;
    holdMs?: number;
    cancel?: boolean;
    secondFinger?: boolean;
    click?: boolean;
    pointerType?: string;
  } = {},
) {
  const el = caretIn(container, word, where);
  const finger = { pointerType, pointerId: 7, isPrimary: true, button: 0, clientY: 20 };
  await act(async () => {
    fireEvent.pointerDown(el, { ...finger, clientX: 20 });
    if (secondFinger) fireEvent.pointerDown(el, { ...finger, pointerId: 8, isPrimary: false, clientX: 80 });
    if (cancel) fireEvent.pointerCancel(el, { ...finger, clientX: 20 });
    if (holdMs) vi.setSystemTime(new Date(Date.now() + holdMs));
    fireEvent.pointerUp(el, { ...finger, clientX: 20 + move });
    if (click) fireEvent.click(el);
  });
}

describe("HuntKeySlot (the word tap)", () => {
  it("renders nothing and asks nothing before the first drop or from the close", async () => {
    for (const t of [EVE, BEFORE, CLOSED, "2026-10-09T00:00:00Z"]) {
      setNow(t);
      const calls = stubHunt({ here: true, prize: 1 });
      const { container, unmount } = render(<HuntKeySlot />);
      await act(async () => {});
      expect(container.innerHTML, t).toBe("");
      expect(calls, t).toEqual([]);
      unmount();
    }
  });

  it("asks spot for this page, no-store, and shows nothing for {}", async () => {
    setNow(AT_0905);
    const calls = stubHunt({});
    const { container } = render(<HuntKeySlot />);
    await waitFor(() => expect(calls).toHaveLength(1));
    expect(calls[0].url).toBe(`/api/naija66/spot?p=${encodeURIComponent(SAMPLE_PATH)}`);
    await act(async () => {});
    expect(container.innerHTML).toBe("");
  });

  it("sends the kept claim token with the spot ask, and makes none for a browser that never tapped", async () => {
    setNow(AT_0905);
    const headersOf = (f: ReturnType<typeof vi.fn>) =>
      new Headers((f.mock.calls[0][1] as RequestInit | undefined)?.headers).get("x-naija66-token");
    const answer = async () => ({ ok: true, status: 200, json: async () => ({}) });

    localStorage.removeItem("naija66-claim");
    const none = vi.fn(answer);
    vi.stubGlobal("fetch", none);
    const first = render(<HuntKeySlot />);
    await waitFor(() => expect(none).toHaveBeenCalledTimes(1));
    expect(headersOf(none)).toBeNull();
    expect(localStorage.getItem("naija66-claim")).toBeNull();
    first.unmount();

    const kept = "0123456789abcdef0123456789abcdef";
    localStorage.setItem("naija66-claim", kept);
    const withToken = vi.fn(answer);
    vi.stubGlobal("fetch", withToken);
    render(<HuntKeySlot />);
    await waitFor(() => expect(withToken).toHaveBeenCalledTimes(1));
    expect(headersOf(withToken)).toBe(kept);
    localStorage.removeItem("naija66-claim");
  });

  it("is never in the server's HTML, so every page's source is the same", () => {
    setNow(AT_0905);
    expect(renderToString(<HuntKeySlot />)).toBe("");
  });

  it("shows nothing on a dropped prize page, here or claimed: no card, no cue", async () => {
    setNow(AT_0905);
    for (const body of [{ here: true, prize: 2 }, { claimed: true, prize: 1, at: "2026-10-01T08:03:00.000Z" }]) {
      const calls = stubHunt(body);
      const { container, unmount } = render(<HuntKeySlot />);
      await waitFor(() => expect(calls).toHaveLength(1));
      await act(async () => {});
      expect(container.innerHTML).toBe("");
      unmount();
    }
  });

  it("the right word wins: posts {p, w, token} and shows the code with the DM lines", async () => {
    setNow(AT_0905);
    localStorage.removeItem("naija66-claim");
    const calls = stubHunt(
      { here: true, prize: 2 },
      { won: true, prize: 2, code: "NG66-2-XXXXXX", at: "2026-10-01T14:31:00.000Z" },
    );
    const { container } = renderPage();
    await waitFor(() => expect(calls).toHaveLength(1));
    await act(async () => {});
    // Nothing is posted until a word is tapped.
    expect(calls.filter((c) => c.method === "POST")).toEqual([]);
    await tapWord(container, "Zebrafinch");
    await waitFor(() => screen.getByText("NG66-2-XXXXXX"));
    expect(screen.getByText(WINNER_LINE)).toBeTruthy();
    expect(screen.getByText(WINNER_KEEP_LINE)).toBeTruthy();
    const post = calls.find((c) => c.method === "POST")!;
    expect(post.url).toBe("/api/naija66/reveal");
    expect(post.body!.p).toBe(SAMPLE_PATH);
    expect(post.body!.w).toBe("Zebrafinch");
    expect(post.body!.token).toMatch(/^[0-9a-f]{32}$/);
    expect(localStorage.getItem("naija66-claim")).toBe(post.body!.token);
  });

  it("a wrong word ({} back) shows nothing at all", async () => {
    setNow(AT_0905);
    const calls = stubHunt({ here: true, prize: 2 }, {});
    const { container } = renderPage();
    await waitFor(() => expect(calls).toHaveLength(1));
    await act(async () => {});
    await tapWord(container, "ordinary");
    await waitFor(() => expect(calls.filter((c) => c.method === "POST")).toHaveLength(1));
    expect(calls.find((c) => c.method === "POST")!.body!.w).toBe("ordinary");
    await act(async () => {});
    expect(document.querySelector("aside")).toBeNull();
    expect(document.querySelector("[role=status]")).toBeNull();
  });

  it("ignores taps on links and buttons, outside <main>, and on selected text", async () => {
    setNow(AT_0905);
    const calls = stubHunt({ here: true, prize: 2 }, { won: true, prize: 2, code: "NG66-2-XXXXXX", at: AT_0905 });
    const { container } = renderPage();
    await waitFor(() => expect(calls).toHaveLength(1));
    await act(async () => {});
    await tapWord(container, "Zebrafinch", "a");
    await tapWord(container, "Zebrafinch", "button");
    await tapWord(container, "Zebrafinch", "footer");
    // A selection across words: the player is selecting text, not tapping a word.
    const p = container.querySelector("main p")!;
    const text = p.firstChild as Text;
    const sel = document.getSelection()!;
    const range = document.createRange();
    range.setStart(text, 0);
    range.setEnd(text, 8);
    sel.removeAllRanges();
    sel.addRange(range);
    await act(async () => {
      fireEvent.click(p);
    });
    expect(calls.filter((c) => c.method === "POST")).toEqual([]);
    expect(screen.queryByText("NG66-2-XXXXXX")).toBeNull();
  });

  it("negative control: the same word in plain text inside <main> does post", async () => {
    setNow(AT_0905);
    const calls = stubHunt({ here: true, prize: 2 }, {});
    const { container } = renderPage();
    await waitFor(() => expect(calls).toHaveLength(1));
    await act(async () => {});
    await tapWord(container, "Zebrafinch");
    await waitFor(() => expect(calls.filter((c) => c.method === "POST")).toHaveLength(1));
  });

  it("a finger's tap on the word posts with no click at all (an iPhone sends none), and wins", async () => {
    setNow(AT_0905);
    const calls = stubHunt({ here: true, prize: 2 }, { won: true, prize: 2, code: "NG66-2-XXXXXX", at: AT_0905 });
    const { container } = renderPage();
    await waitFor(() => expect(calls).toHaveLength(1));
    await act(async () => {});
    await touchWord(container, "Zebrafinch");
    await waitFor(() => screen.getByText("NG66-2-XXXXXX"));
    const posts = calls.filter((c) => c.method === "POST");
    expect(posts).toHaveLength(1);
    expect(posts[0].body!.w).toBe("Zebrafinch");
  });

  it("a tap that also sends a click (Android) posts once, not twice", async () => {
    setNow(AT_0905);
    const posts: unknown[] = [];
    vi.stubGlobal(
      "fetch",
      vi.fn(async (url: string, init?: RequestInit) => {
        if (url.includes("/reveal")) posts.push(init?.body);
        return { ok: true, status: 200, json: async () => (url.includes("/reveal") ? {} : { here: true, prize: 2 }) };
      }),
    );
    const { container } = renderPage();
    await act(async () => {});
    await touchWord(container, "Zebrafinch", { click: true });
    await act(async () => {});
    // Even with the first reply back, the click that trails the tap is skipped.
    expect(posts).toHaveLength(1);
  });

  it("a scroll, a cancelled touch, a pinch, a long press, or a touch on a link posts nothing", async () => {
    setNow(AT_0905);
    const calls = stubHunt({ here: true, prize: 2 }, {});
    const { container } = renderPage();
    await waitFor(() => expect(calls).toHaveLength(1));
    await act(async () => {});
    await touchWord(container, "Zebrafinch", { move: 30 });
    await touchWord(container, "Zebrafinch", { cancel: true });
    await touchWord(container, "Zebrafinch", { secondFinger: true });
    await touchWord(container, "Zebrafinch", { holdMs: 900 });
    await touchWord(container, "Zebrafinch", { where: "a" });
    await touchWord(container, "Zebrafinch", { where: "footer" });
    // A mouse's pointer events are not its tap: its click is.
    await touchWord(container, "Zebrafinch", { pointerType: "mouse" });
    expect(calls.filter((c) => c.method === "POST")).toEqual([]);
    // Negative control: a still finger lifted at once, on the same word, does post.
    await touchWord(container, "Zebrafinch", { move: 3 });
    await waitFor(() => expect(calls.filter((c) => c.method === "POST")).toHaveLength(1));
  });

  it("arms nothing on a page spot says {} for: a tap posts nothing", async () => {
    setNow(AT_0905);
    const calls = stubHunt({}, { won: true, prize: 2, code: "NG66-2-XXXXXX", at: AT_0905 });
    const { container } = renderPage();
    await waitFor(() => expect(calls).toHaveLength(1));
    await act(async () => {});
    await tapWord(container, "Zebrafinch");
    expect(calls.filter((c) => c.method === "POST")).toEqual([]);
  });

  it("the right word after a claim shows it claimed, with the time in WAT; a winner gets one-per-person", async () => {
    setNow(AT_0905);
    stubHunt({ claimed: true, prize: 1, at: "2026-10-01T08:03:00.000Z" }, { claimed: true, prize: 1, at: "2026-10-01T08:03:00.000Z" });
    const first = renderPage();
    await act(async () => {});
    await tapWord(first.container, "Zebrafinch");
    await waitFor(() =>
      screen.getByText("Code 1 was claimed at 09:03 WAT. Follow @paulemmanuelng on X for the next one."),
    );
    first.unmount();
    stubHunt({ here: true, prize: 3 }, { alreadyWon: true });
    const second = renderPage();
    await act(async () => {});
    await tapWord(second.container, "Zebrafinch");
    await waitFor(() => screen.getByText(ALREADY_WON_LINE));
  });

  it("past 40 taps a minute (429) shows the quiet toast, and no card", async () => {
    setNow(AT_0905);
    vi.stubGlobal(
      "fetch",
      vi.fn(async (url: string) =>
        url.includes("/reveal")
          ? { ok: false, status: 429, json: async () => ({ error: "x" }) }
          : { ok: true, status: 200, json: async () => ({ here: true, prize: 2 }) },
      ),
    );
    const { container } = renderPage();
    await act(async () => {});
    await tapWord(container, "Zebrafinch");
    await waitFor(() => screen.getByText("Slow down a little — try again in a minute."));
    expect(document.querySelector("aside")).toBeNull();
  });

  it("one request in flight: a second tap while the first is out posts nothing", async () => {
    setNow(AT_0905);
    let release: (v: unknown) => void = () => {};
    const posts: unknown[] = [];
    vi.stubGlobal(
      "fetch",
      vi.fn(async (url: string, init?: RequestInit) => {
        if (!url.includes("/reveal")) return { ok: true, status: 200, json: async () => ({ here: true, prize: 2 }) };
        posts.push(init?.body);
        await new Promise((r) => (release = r));
        return { ok: true, status: 200, json: async () => ({}) };
      }),
    );
    const { container } = renderPage();
    await act(async () => {});
    await tapWord(container, "Zebrafinch");
    await tapWord(container, "ordinary");
    expect(posts).toHaveLength(1);
    await act(async () => release(null));
  });

  it("asks afresh on every arrival at a page, and never carries a card to the next page", async () => {
    setNow(AT_0905);
    const calls = stubHunt({ here: true, prize: 1 }, { won: true, prize: 1, code: "NG66-1-XXXXXX", at: AT_0905 });
    const { container, rerender } = renderPage();
    await act(async () => {});
    await tapWord(container, "Zebrafinch");
    await waitFor(() => screen.getByText("NG66-1-XXXXXX"));
    stubHunt({});
    nav.path = OTHER_PATH;
    rerender(<Page />);
    expect(screen.queryByText("NG66-1-XXXXXX")).toBeNull();
    await act(async () => {});
    expect(screen.queryByText("NG66-1-XXXXXX")).toBeNull();
    expect(calls.filter((c) => c.method === "GET")).toHaveLength(1);
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

function stubApi(claimBody: unknown = {}, statusBody: unknown = STATUS_0905) {
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
  it("renders both layouts — two h1s, two flow boxes, two boards — from one poll", async () => {
    setNow(AT_0905);
    const calls = stubApi();
    const { container } = render(<Naija66Page />);
    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(2);
    expect(screen.getAllByText(FLOW)).toHaveLength(2);
    expect(screen.queryByLabelText("Your code")).toBeNull();
    expect(container.querySelector("input")).toBeNull();
    expect(container.querySelectorAll("li[data-state]")).toHaveLength(10);
    await waitFor(() => expect(container.querySelectorAll('li[data-state="live"]')).toHaveLength(2));
    expect(calls.filter((c) => c.includes("/status"))).toHaveLength(1);
    expect(screen.getAllByText("One prize per person.")).toHaveLength(2);
    expect(screen.getAllByText("Not affiliated with Spotify or Burna Boy.")).toHaveLength(2);
    expect(container.textContent).toContain("9am, 12pm, 3pm, 6pm and 9pm WAT");
  });

  it("prints the prize from the one copy constant, in both layouts", () => {
    setNow(AT_0905);
    stubApi();
    const { container } = render(<Naija66Page />);
    const text = container.textContent!;
    expect(screen.getAllByText(PRIZE.board)).toHaveLength(10);
    expect(text.split(PRIZE.long).length - 1).toBeGreaterThanOrEqual(6);
    expect(screen.getAllByText(`Each prize is ${PRIZE.long}.`)).toHaveLength(2);
  });

  it("names no page and sends every code to X — in both layouts, with no clue anywhere", () => {
    setNow(AT_0905);
    stubApi();
    const { container } = render(<Naija66Page />);
    const text = container.textContent!;
    expect(text.split("Follow @paulemmanuelng on X for where to look.").length - 1).toBe(4); // flow box + step 1, twice
    expect(screen.getAllByText("Where to look next: @paulemmanuelng on X ↗")).toHaveLength(2);
    expect(text).not.toMatch(/\bclues?\b/i);
    expect(text).not.toMatch(/key badge|enter it first/i);
    const internal = new Set(
      [...container.querySelectorAll("a[href^='/']")].map((a) => a.getAttribute("href")),
    );
    expect([...internal]).toEqual(["/"]);
  });

  it("shows this browser's win in both layouts, from the status cookie", async () => {
    setNow(AT_0905);
    stubApi({}, { ...STATUS_0905, mine: { prize: 1, code: "NG66-1-XXXXXX", at: "2026-10-01T08:07:00.000Z" } });
    render(<Naija66Page />);
    await waitFor(() => expect(screen.getAllByText("You found it.")).toHaveLength(2));
    expect(screen.getAllByText("NG66-1-XXXXXX")).toHaveLength(2);
    expect(screen.getAllByText(WINNER_LINE)).toHaveLength(2);
    expect(screen.getAllByText(/claimed 09:07 WAT/)).toHaveLength(2);
    expect(screen.getAllByText(WINNER_KEEP_LINE)).toHaveLength(2);
  });

  it("misconfigured: says it opens at 9am before then, and not a time already past after", async () => {
    setNow(AT_0905);
    stubApi({}, notReady(AT_0905));
    const { unmount } = render(<Naija66Page />);
    await waitFor(() => expect(screen.getAllByText("The hunt isn't open yet — check back soon.")).toHaveLength(2));
    expect(screen.queryByText(/opens at 9am/)).toBeNull();
    unmount();
    setNow(DAWN);
    stubApi({}, notReady(DAWN));
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

  it("reads the status once for both layouts' banners", async () => {
    // The home page mounts one banner per layout and CSS hides one; both used
    // to fetch, so every load read the status twice (live debug, 1 Oct 2026).
    setNow(AT_0905);
    const calls = stubApi();
    render(
      <>
        <Naija66BannerLive layout="phone" initialPhase="live" />
        <Naija66BannerLive layout="desktop" initialPhase="live" />
      </>,
    );
    await waitFor(() => expect(screen.getAllByText("Naija @ 66 is live — 5 of 5 prizes left")).toHaveLength(2));
    expect(calls).toHaveLength(1);
  });

  it("negative control: two banners each running the shipped effect read it twice", async () => {
    setNow(AT_0905);
    const calls = stubApi();
    // The effect as it shipped, one fetch per mounted banner.
    function ShippedBanner() {
      const [left, setLeft] = useState<number | null>(null);
      useEffect(() => {
        let alive = true;
        fetch("/api/naija66/status", { cache: "no-store" })
          .then((r) => (r.ok ? (r.json() as Promise<{ ready: boolean; prizes: PublicPrize[] }>) : null))
          .then((s) => {
            if (!alive || !s) return;
            setLeft(s.prizes.filter((p) => p.state === "live" || p.state === "sleeping").length);
          })
          .catch(() => {});
        return () => {
          alive = false;
        };
      }, []);
      return <span>{left === null ? "" : `${left} left`}</span>;
    }
    render(
      <>
        <ShippedBanner />
        <ShippedBanner />
      </>,
    );
    await waitFor(() => expect(screen.getAllByText("5 left")).toHaveLength(2));
    expect(calls).toHaveLength(2);
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

describe("Paul's private test code (prize 0) arms the page like a prize", () => {
  it("spotFrom accepts prize 0 and still rejects anything outside 0–5", async () => {
    const { spotFrom } = await import("../app/components/HuntKeySlot");
    expect(spotFrom({ here: true, prize: 0 })).toEqual({ kind: "here", prize: 0 });
    expect(spotFrom({ claimed: true, prize: 0, at: "2026-10-01T19:10:00.000Z" })).toEqual({ kind: "claimed", prize: 0, at: "2026-10-01T19:10:00.000Z" });
    expect(spotFrom({ here: true, prize: 6 })).toBeNull();
    expect(spotFrom({ here: true, prize: -1 })).toBeNull();
  });
  it("negative control: the shipped range check refused prize 0", () => {
    const shipped = (prize: number) => !(!Number.isInteger(prize) || prize < 1 || prize > 5);
    expect(shipped(0)).toBe(false);
  });
});
