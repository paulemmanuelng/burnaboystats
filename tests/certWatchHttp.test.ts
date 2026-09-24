// @vitest-environment node
import { describe, it, expect } from "vitest";
import { createHttp, USER_AGENT } from "../scripts/cert-watch/http.mjs";
import { fixture, config } from "./certWatchHelpers";

/**
 * http.mjs with a scripted fetch and a fake clock: typed results, the robots
 * gate, politeness, retries — and what it must never do.
 */
type Reply = { status: number; body?: string; headers?: Record<string, string> };
function harness(script: (url: string, init: RequestInit) => Reply) {
  let t = 1_000_000;
  const calls: { url: string; at: number; headers: Record<string, string> }[] = [];
  const fetchImpl = async (url: string, init: RequestInit) => {
    calls.push({ url, at: t, headers: init.headers as Record<string, string> });
    t += 150; // the server takes 150 ms
    const r = script(url, init);
    return new Response(r.body ?? "", { status: r.status, headers: r.headers ?? {} });
  };
  const http = createHttp({
    config,
    fetchImpl,
    now: () => t,
    sleep: async (ms: number) => {
      t += ms;
    },
    retryBaseMs: 5000,
  });
  return { http, calls, clock: () => t };
}

describe("http.mjs", () => {
  it("always sends the honest User-Agent and refuses any header not on the list", async () => {
    const { http, calls } = harness(() => ({ status: 200, body: "ok" }));
    await http.request({ url: "https://www.riaa.com/gold-platinum/", headers: { Referer: "https://www.riaa.com/gold-platinum/" } });
    expect(calls.every((c) => c.headers["User-Agent"] === USER_AGENT)).toBe(true);
    expect(USER_AGENT).toBe("burnaboystats-cert-watch/1.0 (+https://burnaboystats.com/contact)");
    await expect(http.request({ url: "https://www.riaa.com/x", headers: { "User-Agent": "Mozilla/5.0" } })).rejects.toThrow(/not on the allowed list/);
    await expect(http.request({ url: "https://www.riaa.com/x", headers: { Cookie: "a=b" } })).rejects.toThrow(/not on the allowed list/);
  });

  it("never fetches a path robots.txt disallows — BPI makes no request beyond robots.txt", async () => {
    const bpiRobots = fixture("robots/certified-awards.bpi.co.uk.txt");
    const { http, calls } = harness((url) => (url.endsWith("/robots.txt") ? { status: 200, body: bpiRobots } : { status: 200, body: "page" }));
    const r = await http.request({ url: "https://certified-awards.bpi.co.uk/?search=dai+dai" });
    expect(r).toMatchObject({ ok: false, kind: "robots" });
    expect(calls.map((c) => c.url)).toEqual(["https://certified-awards.bpi.co.uk/robots.txt"]);
  });

  it("reads a 404 robots.txt as no rules, and an unreadable one as unreachable", async () => {
    const a = harness((url) => (url.endsWith("/robots.txt") ? { status: 404 } : { status: 200, body: "page" }));
    expect(await a.http.request({ url: "https://ifpicr.cz/hitparada/30" })).toMatchObject({ ok: true, body: "page" });
    const b = harness((url) => (url.endsWith("/robots.txt") ? { status: 503 } : { status: 200, body: "page" }));
    const r = await b.http.request({ url: "https://ifpicr.cz/hitparada/30" });
    expect(r).toMatchObject({ ok: false, kind: "network" });
    expect(r.detail).toMatch(/robots\.txt unreadable/);
    expect(b.calls.some((c) => c.url.includes("hitparada"))).toBe(false);
  });

  it("keeps at least 1,100 ms between requests to one host", async () => {
    const { http, calls } = harness((url) => (url.endsWith("/robots.txt") ? { status: 404 } : { status: 200, body: "x" }));
    for (const se of ["a", "b", "c"]) await http.request({ url: `https://www.riaa.com/gold-platinum/?se=${se}` });
    const starts = calls.map((c) => c.at);
    for (let i = 1; i < starts.length; i++) expect(starts[i] - (starts[i - 1] + 150)).toBeGreaterThanOrEqual(1100);
  });

  it("retries a 503 twice, backing off 5 s × attempt", async () => {
    let n = 0;
    const { http, calls } = harness((url) => {
      if (url.endsWith("/robots.txt")) return { status: 404 };
      n++;
      return n < 3 ? { status: 503 } : { status: 200, body: "third time" };
    });
    const r = await http.request({ url: "https://www.riaa.com/gold-platinum/" });
    expect(r).toMatchObject({ ok: true, body: "third time" });
    const page = calls.filter((c) => !c.url.endsWith("/robots.txt")).map((c) => c.at);
    expect(page[1] - page[0]).toBeGreaterThanOrEqual(5000);
    expect(page[2] - page[1]).toBeGreaterThanOrEqual(10000);
  });

  it("never retries a bot challenge, and never changes a header to get round one", async () => {
    const wall = fixture("challenge/be-ultratop.html");
    const { http, calls } = harness((url) =>
      url.endsWith("/robots.txt") ? { status: 404 } : { status: 403, body: wall, headers: { "cf-mitigated": "challenge", server: "cloudflare" } }
    );
    const r = await http.request({ url: "https://www.ultratop.be/nl/goud-platina/2026/singles" });
    expect(r).toMatchObject({ ok: false, kind: "challenge", status: 403 });
    expect(calls.filter((c) => !c.url.endsWith("/robots.txt"))).toHaveLength(1);
  });

  it("returns a typed failure — never an empty body — when the network fails", async () => {
    const { http } = createHttpThatThrows();
    const r = await http.request({ url: "https://www.riaa.com/gold-platinum/" });
    expect(r.ok).toBe(false);
    expect(r.kind).toBe("network");
    expect(r).not.toHaveProperty("body");
  });

  it("does not follow a redirect off the host", async () => {
    const { http, calls } = harness((url) =>
      url.endsWith("/robots.txt") ? { status: 404 } : { status: 302, headers: { location: "http://google.com/" } }
    );
    const r = await http.request({ method: "POST", url: "https://www.olis.pl/api/search", body: "{}" });
    expect(r).toMatchObject({ ok: false, kind: "http", status: 302, redirectTo: "http://google.com/" });
    expect(calls.some((c) => c.url.includes("google"))).toBe(false);
  });

  it("makes one in-flight fetch per request", async () => {
    const { http, calls } = harness((url) => (url.endsWith("/robots.txt") ? { status: 404 } : { status: 200, body: "x" }));
    await Promise.all([http.request({ url: "https://www.riaa.com/a" }), http.request({ url: "https://www.riaa.com/a" })]);
    expect(calls.filter((c) => c.url.endsWith("/a"))).toHaveLength(1);
  });

  it("stops at the run budget", async () => {
    const http = createHttp({ config, fetchImpl: async () => new Response("x"), runDeadline: 0 });
    expect(await http.request({ url: "https://www.riaa.com/a" })).toMatchObject({ ok: false, kind: "budget" });
  });
});

function createHttpThatThrows() {
  let t = 0;
  const http = createHttp({
    config,
    now: () => t,
    sleep: async (ms: number) => {
      t += ms;
    },
    fetchImpl: async (url: string) => {
      if (url.endsWith("/robots.txt")) return new Response("", { status: 404 });
      throw Object.assign(new TypeError("fetch failed"), { cause: { code: "ECONNRESET" } });
    },
  });
  return { http };
}
