import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, cleanup } from "@testing-library/react";
import NavHistoryTracker from "../../app/components/NavHistoryTracker";

vi.mock("next/navigation", () => ({
  usePathname: () => "/on-this-day",
}));

/**
 * V-otd-01 (debug 5 Oct 2026). On the phone calendar, a month jump ("Oct",
 * a plain <a href="#month-october">) made a history entry with no state. Open
 * a day, press Back: the app router ignores a popstate without its state, so
 * the address bar said /on-this-day#month-october and the day page stayed on
 * screen. The same held for every in-page "#…" link on the site.
 *
 * jsdom does what a browser does here — a fragment jump adds an entry with no
 * state, and Back fires popstate with that entry's state — so the router's own
 * condition (`if (!event.state) return`) is what these tests read. jsdom makes
 * the jump a task after the click, as an engine may; Chrome makes it during
 * the click, which the "jumps during the click" case stands in for.
 */

const TREE = ["", { children: ["on-this-day", {}] }];
const ROUTER = { __NA: true, __PRIVATE_NEXTJS_INTERNALS_TREE: TREE };

/** Let the jump, its popstate/hashchange and any settle timer run. */
const settled = async () => {
  for (let i = 0; i < 5; i++) await new Promise((r) => setTimeout(r, 0));
};
const popped = () =>
  new Promise<PopStateEvent>((r) => window.addEventListener("popstate", (e) => r(e), { once: true }));

function link(href: string) {
  const a = document.createElement("a");
  a.href = href;
  a.textContent = "Oct";
  document.body.append(a);
  return a;
}

beforeEach(() => {
  window.history.replaceState(ROUTER, "", "/on-this-day");
});

afterEach(() => {
  cleanup();
  document.body.innerHTML = "";
});

describe("in-page jumps keep the router's history state (V-otd-01)", () => {
  it("control: a bare fragment jump leaves an entry the router would ignore", async () => {
    link("#month-october").click();
    await settled();
    expect(window.location.hash).toBe("#month-october");
    expect(window.history.state ?? null).toBeNull();
  });

  it("the jump's entry carries the router's state, and Back from a day page lands on it", async () => {
    render(<NavHistoryTracker />);
    const before = window.history.length;
    link("#month-october").click();
    await settled();
    expect(window.location.hash).toBe("#month-october");
    // Still an entry of its own: the browser's jump is untouched.
    expect(window.history.length).toBe(before + 1);
    expect(window.history.state).toEqual(ROUTER);

    // Open a day (the router pushes it), then Back.
    window.history.pushState({ __NA: true, __PRIVATE_NEXTJS_INTERNALS_TREE: ["", {}] }, "", "/on-this-day/24-october");
    const pop = popped();
    window.history.back();
    const e = await pop;
    expect(window.location.pathname + window.location.hash).toBe("/on-this-day#month-october");
    expect(e.state?.__NA).toBe(true);
    expect(e.state?.__PRIVATE_NEXTJS_INTERNALS_TREE).toEqual(TREE);
  });

  it("jumps during the click (Chrome's timing): stamped all the same", async () => {
    render(<NavHistoryTracker />);
    const a = link("#months");
    a.addEventListener("click", (e) => {
      e.preventDefault();
      // What Chrome's own fragment navigation leaves, before the click returns.
      window.history.pushState(null, "", "#months");
    });
    a.click();
    expect(window.history.state).toBeNull();
    await settled();
    expect(window.location.hash).toBe("#months");
    expect(window.history.state).toEqual(ROUTER);
  });

  it("only the router's keys go on the new entry, not another entry's view memory", async () => {
    window.history.replaceState({ ...ROUTER, bbsViews: { load: "x", views: { certs: { tier: "gold" } } } }, "", "/on-this-day");
    render(<NavHistoryTracker />);
    link("#month-march").click();
    await settled();
    expect(window.history.state).toEqual(ROUTER);
  });

  it("a cancelled click is left alone", async () => {
    render(<NavHistoryTracker />);
    const a = link("#month-october");
    a.addEventListener("click", (e) => e.preventDefault());
    const spy = vi.spyOn(window.history, "replaceState");
    a.click();
    await settled();
    expect(window.location.hash).toBe("");
    expect(spy).not.toHaveBeenCalled();
    spy.mockRestore();
  });
});
