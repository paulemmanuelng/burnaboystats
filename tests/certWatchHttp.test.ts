// @vitest-environment node
import { describe, it, expect, vi } from "vitest";
import { mkdtempSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { gunzipSync } from "node:zlib";
import { createHttp, createFixtureHttp, USER_AGENT, redactSaved } from "../scripts/cert-watch/http.mjs";
import { parseRobots } from "../scripts/cert-watch/robots.mjs";
import { hostSummary } from "../scripts/cert-watch/index.mjs";
import { parseNextData, rowsHash, toRows } from "../scripts/cert-watch/adapters/tcsn.mjs";
import { parseChart as greeceParseChart } from "../scripts/cert-watch/adapters/ifpi-greece.mjs";
import { FIX, fixture, config } from "./certWatchHelpers";

// The watcher suite reads hundreds of saved register pages (many gzipped) from
// tests/fixtures/cert-watch. On GitHub's two-core runners some tests take longer
// than vitest's 5 s default, so every watcher test file gets a longer limit.
vi.setConfig({ testTimeout: 60_000 });

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

  it("keeps the whole gap even when a timer wakes early (the 24 Sep live run measured 1,099 ms on three hosts)", async () => {
    let t = 1_000_000;
    const starts: number[] = [];
    const http = createHttp({
      config,
      now: () => t,
      // A sleep that wakes 1 ms before it was asked to — as Node's timers can.
      sleep: async (ms: number) => {
        t += ms - 1;
      },
      fetchImpl: async (url: string) => {
        if (!url.endsWith("/robots.txt")) starts.push(t);
        t += 150;
        return new Response(url.endsWith("/robots.txt") ? "" : "x", { status: url.endsWith("/robots.txt") ? 404 : 200 });
      },
    });
    for (const se of ["a", "b", "c"]) await http.request({ url: `https://www.riaa.com/gold-platinum/?se=${se}` });
    expect(starts).toHaveLength(3);
    for (let i = 1; i < starts.length; i++) expect(starts[i] - (starts[i - 1] + 150)).toBeGreaterThanOrEqual(1100);
  });

  it("reports the gap it kept: the request log's gaps come from the same clock reading as the queue's (the 24 Sep evening live run printed 1,099 ms)", async () => {
    // Two things a real clock does, together: a sleep wakes 1 ms early, and
    // a millisecond can pass between two reads of the clock right after a
    // response. The queue keeps 1,100 ms from the end of one request to the
    // start of the next; the run details' smallest gap (hostSummary, over
    // http.log) must report exactly that — never 1,099.
    let t = 1_000_000;
    let tick = false;
    const http = createHttp({
      config,
      now: () => {
        const v = t;
        if (tick) {
          t += 1; // the clock moves on after the first read that follows a response
          tick = false;
        }
        return v;
      },
      sleep: async (ms: number) => {
        t += ms - 1; // wakes 1 ms early
      },
      fetchImpl: async (url: string) => {
        t += 150;
        tick = true;
        return new Response(url.endsWith("/robots.txt") ? "" : "x", { status: url.endsWith("/robots.txt") ? 404 : 200 });
      },
    });
    for (const se of ["a", "b", "c", "d"]) await http.request({ url: `https://www.riaa.com/gold-platinum/?se=${se}` });
    const gaps = hostSummary(http.log).minGapMs;
    expect(Object.keys(gaps)).toEqual(["www.riaa.com"]);
    expect(gaps["www.riaa.com"]).toBe(1100);
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

  it("re-reads a URL only when asked to (repeat), and replays such re-reads in order offline", async () => {
    const { http, calls } = harness((url) => (url.endsWith("/robots.txt") ? { status: 404 } : { status: 200, body: "x" }));
    const url = "http://ifpi.dk/certificeringer-0?page=0";
    await http.request({ url });
    await http.request({ url });
    await http.request({ url, repeat: 1 });
    expect(calls.filter((c) => c.url === url)).toHaveLength(2);
    // Offline: the nth request for one URL gets the response saved as nth.
    const off = createFixtureHttp({
      root: FIX,
      robotsDir: join(FIX, "robots"),
      routes: [
        { method: "GET", match: (u: string) => u === url, file: "danmark/run-2026-09-24/page0__default.html.gz", nth: 1 },
        { method: "GET", match: (u: string) => u === url, file: "danmark/run-2026-09-24/page0__default__2.html.gz", nth: 2 },
      ],
    });
    const a = await off.request({ url });
    const b = await off.request({ url, repeat: 1 });
    expect(a.body).toBe(fixture("danmark/run-2026-09-24/page0__default.html.gz"));
    expect(b.body).toBe(fixture("danmark/run-2026-09-24/page0__default__2.html.gz"));
  });

  it("saves the bytes as served — less its addresses — and decodes a latin-1 register as latin-1", async () => {
    // The committed record (redacted, 24 Sep 2026): its footer's Grammotex
    // links read "mailto:(redacted)" three times, one link text "(redacted)".
    // LABELLED EDIT: a placeholder address — built here from parts, on a
    // reserved domain (RFC 2606) — put back in each place, as served.
    const committed = readFileSync(join(FIX, "sverige/record-15311162.html"));
    const page = committed.toString("latin1");
    expect(page.match(/mailto:\(redacted\)/g)).toHaveLength(3);
    const placeholder = ["covers", "example.invalid"].join("@");
    const served = page.replace(/mailto:\(redacted\)/g, `mailto:${placeholder}`).replace(">(redacted)</a>", `>${placeholder}</a>`);
    expect(served.split(placeholder)).toHaveLength(5);
    const bytes = Buffer.from(served, "latin1");
    const dir = mkdtempSync(join(tmpdir(), "cert-watch-raw-"));
    let t = 0;
    const http = createHttp({
      config,
      saveRawDir: dir,
      now: () => t,
      sleep: async (ms: number) => {
        t += ms;
      },
      fetchImpl: async (url: string) => (url.endsWith("/robots.txt") ? new Response("", { status: 404 }) : new Response(bytes, { status: 200 })),
    });
    const r = await http.request({ url: "https://sys2.ifpi.se/netdata/grp006.MBR/artdata?sart=15311162", encoding: "latin1" });
    expect(r.body).toContain("Ljudbärare:"); // the adapter sees the page as served
    expect(r.body).toContain(placeholder);
    const saved = readFileSync(join(dir, readdirSync(dir).find((f) => f.endsWith(".body"))!));
    // --save-raw writes the committed fixture back, byte for byte: every
    // address redacted, every other byte — latin-1 included — as served.
    expect(saved.equals(committed)).toBe(true);
    expect(saved.includes(Buffer.from("Ljudbärare:", "latin1"))).toBe(true);
  });

  it("keeps a session cookie only for a host that opts in, only for this run, and never writes it", async () => {
    // A host opts in with config.hosts[host].cookies = "run" (SPEC §2.4).
    const cfg = { ...config, hosts: { ...config.hosts, "www.radioscope.co.nz": { minGapMs: 1100, why: "test: per-run jar", cookies: "run" } } };
    const cache = mkdtempSync(join(tmpdir(), "cert-watch-jar-cache-"));
    const raw = mkdtempSync(join(tmpdir(), "cert-watch-jar-raw-"));
    const SECRET = "jar-test-value-7f3a";
    const make = () => {
      let t = 0;
      const sent: { url: string; cookie: string | undefined }[] = [];
      const http = createHttp({
        config: cfg,
        cacheDir: cache,
        saveRawDir: raw,
        now: () => t,
        sleep: async (ms: number) => {
          t += ms;
        },
        fetchImpl: async (url: string, init: RequestInit) => {
          if (url.endsWith("/robots.txt")) return new Response("", { status: 404 });
          sent.push({ url, cookie: (init.headers as Record<string, string>).Cookie });
          return new Response("page", { status: 200, headers: { "set-cookie": `PHPSESSID=${SECRET}; path=/; HttpOnly` } });
        },
      });
      return { http, sent };
    };
    const run1 = make();
    await run1.http.request({ url: "https://www.radioscope.co.nz/2024/00/00/single-cert-search/" });
    await run1.http.request({ url: "https://www.radioscope.co.nz/wp-admin/admin-ajax.php?action=x" });
    // A host that did NOT opt in never gets its cookie back.
    await run1.http.request({ url: "https://www.riaa.com/gold-platinum/" });
    await run1.http.request({ url: "https://www.riaa.com/gold-platinum/?se=x" });
    expect(run1.sent.map((c) => c.cookie)).toEqual([undefined, `PHPSESSID=${SECRET}`, undefined, undefined]);
    // The next run starts with an empty jar.
    const run2 = make();
    await run2.http.request({ url: "https://www.radioscope.co.nz/2024/00/00/single-cert-search/" });
    expect(run2.sent[0].cookie).toBeUndefined();
    // Nothing on disk — cache, robots copies, raw bodies, saved headers — holds it.
    const walk = (d: string): string[] => readdirSync(d, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(join(d, e.name)) : [join(d, e.name)]));
    const files = [...walk(cache), ...walk(raw)];
    expect(files.length).toBeGreaterThan(0);
    for (const f of files) expect(readFileSync(f, "utf8"), f).not.toContain(SECRET);
    // --save-raw keeps the other headers, minus set-cookie.
    const meta = files.filter((f) => f.endsWith(".meta.txt"));
    expect(meta.length).toBeGreaterThan(0);
    for (const f of meta) expect(readFileSync(f, "utf8")).not.toMatch(/set-cookie/i);
  });

  it("--save-raw never writes the fetching machine's address (header or footer)", async () => {
    // A placeholder address in a response header (LABELLED: no register
    // seen so far sends one): the saved headers are redacted like the body.
    const CONTACT = ["webmaster", "example.invalid"].join("@");
    const raw = mkdtempSync(join(tmpdir(), "cert-watch-raw-ip-"));
    let t = 0;
    const http = createHttp({
      config,
      saveRawDir: raw,
      now: () => t,
      sleep: async (ms: number) => {
        t += ms;
      },
      // BVMI echoes X-Remote-Addr; PROMUSICAE prints "IP: <proxy>" and
      // "EX-IP: <address>" in its footer. Documentation-range addresses
      // (RFC 5737) stand in for them — the real ones are never written down.
      fetchImpl: async (url: string) =>
        url.endsWith("/robots.txt")
          ? new Response("", { status: 404 })
          : new Response("<footer>IP: 198.51.100.7<br/>EX-IP: 192.0.2.10<br/></footer>", {
              status: 200,
              headers: { "x-remote-addr": "192.0.2.10", "cf-connecting-ip": "192.0.2.10", server: "OMCnet Webserver", "x-contact": CONTACT },
            }),
    });
    const r = await http.request({ url: "https://www.musikindustrie.de/x" });
    expect(r.body).toContain("EX-IP: 192.0.2.10"); // the adapter still sees the page as served
    const files = readdirSync(raw);
    for (const f of files) {
      const t = readFileSync(join(raw, f), "utf8");
      expect(t, f).not.toContain("192.0.2.10");
      expect(t, f).not.toContain("198.51.100.7");
      expect(t, f).not.toContain(CONTACT); // a header carrying an address is redacted too
    }
    expect(readFileSync(join(raw, files.find((f) => f.endsWith(".meta.txt"))!), "utf8")).toContain("server: OMCnet Webserver");
  });

  it("conditional GET: keeps the body beside its validator, sends it back, and reuses the body on a 304", async () => {
    const cache = mkdtempSync(join(tmpdir(), "cert-watch-cond-"));
    // IFPI Greece's real Last-Modified; TCSN's real ETag (24 Sep 2026).
    const LM = "Wed, 23 Sep 2026 05:48:30 GMT";
    const make = (reply: (h: Record<string, string>) => Reply) => {
      let t = 0;
      const sent: Record<string, string>[] = [];
      const http = createHttp({
        config,
        cacheDir: cache,
        now: () => t,
        sleep: async (ms: number) => {
          t += ms;
        },
        fetchImpl: async (url: string, init: RequestInit) => {
          if (url.endsWith("/robots.txt")) return new Response("", { status: 404 });
          const h = init.headers as Record<string, string>;
          sent.push(h);
          const r = reply(h);
          return new Response(r.status === 304 ? null : r.body ?? "", { status: r.status, headers: r.headers ?? {} });
        },
      });
      return { http, sent };
    };
    const url = "https://www.ifpi.gr/digital_ien.html";
    const first = make(() => ({ status: 200, body: "<table>chart week 37</table>", headers: { "last-modified": LM } }));
    expect(await first.http.request({ url, conditional: true })).toMatchObject({ ok: true, status: 200, body: "<table>chart week 37</table>" });
    expect(first.sent[0]["If-Modified-Since"]).toBeUndefined();
    const second = make((h) => (h["If-Modified-Since"] === LM ? { status: 304 } : { status: 200, body: "changed" }));
    const r = await second.http.request({ url, conditional: true });
    expect(second.sent[0]["If-Modified-Since"]).toBe(LM);
    expect(r).toMatchObject({ ok: true, status: 304, notModified: true, body: "<table>chart week 37</table>" });
    // A request that does not opt in never sends a validator.
    const plain = make(() => ({ status: 200, body: "x" }));
    await plain.http.request({ url });
    expect(plain.sent[0]["If-Modified-Since"]).toBeUndefined();
    // A host that sends no validator (AMPROFON) keeps nothing.
    const noVal = make(() => ({ status: 200, body: "no validators" }));
    await noVal.http.request({ url: "https://amprofon.com.mx/es/pages/certificaciones.php", conditional: true });
    const again = make(() => ({ status: 200, body: "no validators" }));
    await again.http.request({ url: "https://amprofon.com.mx/es/pages/certificaciones.php", conditional: true });
    expect(again.sent[0]["If-None-Match"]).toBeUndefined();
    expect(again.sent[0]["If-Modified-Since"]).toBeUndefined();
  });

  it("conditional GET keeps the body REDACTED, and a 304 parses exactly as the 200 did — on the real TCSN and IFPI Greece pages", async () => {
    // The kept body is only ever parsed again (on a 304), so it is kept as
    // --save-raw writes it. LABELLED EDIT of each real page: a contact block
    // with placeholders (an address, a phone number, a person) put before
    // </body>, where a footer would carry them.
    const addr = ["office", "example.invalid"].join("@");
    const person = ["Placeholder", "Person"].join(" ");
    const phone = ["+00", "(0)00", "000", "00", "00"].join(" ");
    const footer = `<div class="vcard"><span class="fn">${person}</span> Tel: ${phone} <a href="mailto:${addr}">${addr}</a></div>`;
    const withFooter = (html: string) => html.replace("</body>", `${footer}</body>`);
    const pages = [
      {
        url: "https://turntablecharts.com/certification",
        served: withFooter(fixture("tcsn/run-2026-09-24/certification.html.gz")),
        validator: { etag: 'W/"tcsn-24sep"' },
        parse: (b: string) => {
          const d = parseNextData(b);
          return { hash: rowsHash(d.entries), rows: toRows(d.entries) };
        },
      },
      {
        url: "https://www.ifpi.gr/digital_ien.html",
        served: withFooter(fixture("greece/run-2026-09-24/digital_ien.html.gz")),
        validator: { "last-modified": "Wed, 23 Sep 2026 05:48:30 GMT" },
        parse: (b: string) => greeceParseChart(b, "International"),
      },
    ];
    for (const p of pages) {
      expect(p.served, p.url).toContain(addr);
      const cache = mkdtempSync(join(tmpdir(), "cert-watch-cond-redact-"));
      const make = (reply: (h: Record<string, string>) => Reply) => {
        let t = 0;
        return createHttp({
          config,
          cacheDir: cache,
          now: () => t,
          sleep: async (ms: number) => {
            t += ms;
          },
          fetchImpl: async (url: string, init: RequestInit) => {
            if (url.endsWith("/robots.txt")) return new Response("", { status: 404 });
            const r = reply(init.headers as Record<string, string>);
            return new Response(r.status === 304 ? null : r.body ?? "", { status: r.status, headers: r.headers ?? {} });
          },
        });
      };
      const first = await make(() => ({ status: 200, body: p.served, headers: p.validator })).request({ url: p.url, conditional: true, timeoutMs: 90000 });
      expect(first.body).toBe(p.served); // the 200 is parsed as served
      // On disk: the redacted body — no address, no number, no person.
      const kept = gunzipSync(readFileSync(join(cache, "bodies", readdirSync(join(cache, "bodies"))[0]))).toString("utf8");
      for (const x of [addr, person, phone]) expect(kept, `${p.url}: ${x}`).not.toContain(x);
      expect(kept).toBe(redactSaved(Buffer.from(p.served, "utf8")).toString("utf8"));
      // The 304 hands back that body, and it parses to exactly what the 200 did.
      const second = await make(() => ({ status: 304 })).request({ url: p.url, conditional: true, timeoutMs: 90000 });
      expect(second).toMatchObject({ ok: true, status: 304, notModified: true });
      expect(second.body).toBe(kept);
      expect(p.parse(second.body)).toEqual(p.parse(p.served));
    }
  });

  it("keeps the cached robots.txt copy redacted — and it parses to the same rules", async () => {
    // A real saved robots.txt (swisscharts.com, 24 Sep 2026) with a comment
    // naming a webmaster by placeholder address and number (LABELLED EDIT —
    // robots files often carry one).
    const real = readFileSync(join(FIX, "robots/swisscharts.com.txt"), "utf8");
    const addr = ["webmaster", "example.invalid"].join("@");
    const phone = ["+00", "(0)00", "000", "00", "00"].join(" ");
    const served = `# Contact: ${addr}, Tel. ${phone}\n${real}`;
    const cache = mkdtempSync(join(tmpdir(), "cert-watch-robots-"));
    let t = 0;
    const http = createHttp({
      config,
      cacheDir: cache,
      now: () => t,
      sleep: async (ms: number) => {
        t += ms;
      },
      fetchImpl: async (url: string) => (url.endsWith("/robots.txt") ? new Response(served, { status: 200 }) : new Response("ok", { status: 200 })),
    });
    const v = await http.robotsCheck("https://swisscharts.com/edelmetall/2026");
    const kept = readFileSync(join(cache, "robots", "swisscharts.com.txt"), "utf8");
    expect(kept).not.toContain(addr);
    expect(kept).not.toContain(phone);
    expect(kept).toContain(real);
    expect(parseRobots(kept)).toEqual(parseRobots(served));
    expect(v).toMatchObject({ allowed: true, crawlDelay: 10 });
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
