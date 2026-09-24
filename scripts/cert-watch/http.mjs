// The only network code in the cert watcher.
// Spec: docs/cert-watcher/SPEC.md §2.4.
//
// Every request:
//   * carries the honest User-Agent — never a browser's. RiSA shows its REAL
//     page to this UA and a decoy to Chrome's, so honesty is also the recipe;
//   * passes the robots.txt gate first (robots.mjs), for our token AND `*`;
//   * waits its turn on a per-host queue (≥ 1,100 ms between requests, more
//     where the host's Crawl-delay says so);
//   * comes back TYPED: {ok:true,…} or {ok:false, kind, …}. It never returns an
//     empty value on failure — an error dressed as "nothing found" is exactly
//     the lie this watcher exists not to tell (a cover matcher once reported
//     0/73 matched: 73 network failures).
//
// It never retries a bot challenge, a 403 or a robots refusal, and never
// changes a header to get round one.

import { mkdir, readFile, writeFile, stat } from "node:fs/promises";
import { gunzipSync } from "node:zlib";
import path from "node:path";
import { parseRobots, robotsVerdict } from "./robots.mjs";

export const USER_AGENT = "burnaboystats-cert-watch/1.0 (+https://burnaboystats.com/contact)";

/** The only headers an adapter may add: the ones the register's own page
 *  sends for its XHR (§2.4). Anything else is a bug and throws. */
export const ALLOWED_HEADERS = new Set([
  "referer",
  "x-requested-with",
  "hx-request",
  "accept-language",
  "content-type",
  "accept",
  "if-none-match",
  "if-modified-since",
]);

const DEFAULT_GAP_MS = 1100;
const ROBOTS_FRESH_MS = 24 * 3600 * 1000;
const ROBOTS_STALE_MS = 7 * 24 * 3600 * 1000;

// ── Challenge / page classification (pure) ──────────────────────────────────
// Challenge markers (SPEC §2.4). `/cdn-cgi/challenge-platform/` is on every
// Cloudflare challenge page — and on every WORKING RIAA page too, so a marker
// alone never makes a challenge: the status must be 403 or 503, and the
// adapter's own success marker is tested first.
const CHALLENGE_BODY_RE =
  /<title>\s*Just a moment|Checking your browser|cf_chl_opt|challenges\.cloudflare\.com\/turnstile|Enable JavaScript and cookies to continue|\/cdn-cgi\/challenge-platform\//i;

const header = (headers, name) => {
  if (!headers) return undefined;
  if (typeof headers.get === "function") return headers.get(name) ?? undefined;
  const k = Object.keys(headers).find((h) => h.toLowerCase() === name.toLowerCase());
  return k ? headers[k] : undefined;
};

/**
 * Is this response a bot challenge? A 403 or 503 carrying `cf-mitigated:
 * challenge`, `server: hcdn`, "Just a moment", "Checking your browser" or a
 * Cloudflare challenge form — WITHOUT the adapter's success marker, which is
 * checked first.
 */
export function isChallenge({ status, headers, body }, success) {
  if (status !== 403 && status !== 503) return false;
  const text = String(body ?? "");
  if (success && (typeof success === "string" ? text.includes(success) : success.test(text))) return false;
  if (String(header(headers, "cf-mitigated") ?? "").toLowerCase() === "challenge") return true;
  if (String(header(headers, "server") ?? "").toLowerCase() === "hcdn") return true;
  return CHALLENGE_BODY_RE.test(text);
}

/**
 * Classify a fetched page for an adapter:
 *   challenge — a bot wall (see isChallenge);
 *   mismatch  — the page served is not the page requested (the identity
 *               marker is missing: a decoy, a redirect target, another page);
 *   format    — it is the register's page, but the success marker is gone;
 *   ok.
 * `identity` proves "this is the register's page"; `success` proves "and it
 * has rows (or says, in its own words, that it has none)".
 */
export function classifyPage(res, { identity, success }) {
  const body = String(res.body ?? "");
  const has = (m) => (typeof m === "string" ? body.includes(m) : m.test(body));
  if (isChallenge(res, success)) return { kind: "challenge", detail: challengeDetail(res) };
  if (identity && !has(identity)) return { kind: "mismatch", detail: `the served page lacks ${String(identity)}` };
  if (success && !has(success)) return { kind: "format", detail: `the page lacks ${String(success)}` };
  return { kind: "ok" };
}

export function challengeDetail(res) {
  const bits = [`HTTP ${res.status}`];
  const server = header(res.headers, "server");
  if (server) bits.push(`server: ${server}`);
  if (header(res.headers, "cf-mitigated")) bits.push(`cf-mitigated: ${header(res.headers, "cf-mitigated")}`);
  const title = String(res.body ?? "").match(/<title>([^<]{0,80})<\/title>/i);
  if (title) bits.push(`"${title[1].trim()}"`);
  return bits.join(", ");
}

// ── Shared helpers ──────────────────────────────────────────────────────────
function checkHeaders(headers) {
  for (const k of Object.keys(headers ?? {})) {
    if (!ALLOWED_HEADERS.has(k.toLowerCase())) {
      throw new Error(`http.mjs: header "${k}" is not on the allowed list — the watcher never sends it`);
    }
  }
}

const hostOf = (url) => new URL(url).host;
const safeName = (s) => s.replace(/[^A-Za-z0-9._-]+/g, "_").slice(0, 150);

/** A host's minimum gap: config.hosts[host] or "*", raised to the robots
 *  Crawl-delay when that is longer. */
export function hostGap(config, host, crawlDelaySec) {
  const hosts = config?.hosts ?? {};
  const bare = host.replace(/^www\./, "");
  const cfg = hosts[host] ?? hosts[bare] ?? hosts["*"] ?? {};
  const base = cfg.minGapMs ?? DEFAULT_GAP_MS;
  return Math.max(base, crawlDelaySec != null ? crawlDelaySec * 1000 : 0);
}

// ── Live HTTP ───────────────────────────────────────────────────────────────
/**
 * opts: { config, cacheDir, saveRawDir, fetchImpl, now, sleep, runDeadline,
 *         retryBaseMs }
 */
export function createHttp(opts = {}) {
  const {
    config = {},
    cacheDir = null,
    saveRawDir = null,
    fetchImpl = globalThis.fetch,
    now = () => Date.now(),
    sleep = (ms) => new Promise((r) => setTimeout(r, ms)),
    runDeadline = Infinity,
    retryBaseMs = 5000,
  } = opts;
  const queues = new Map(); // host → promise chain
  const lastEnd = new Map(); // host → ms
  const robots = new Map(); // host → Promise<{groups|null, unreadable?, detail}>
  const memo = new Map();
  const log = [];
  let rawSeq = 0;

  const enqueue = (host, fn) => {
    const prev = queues.get(host) ?? Promise.resolve();
    const next = prev.catch(() => {}).then(fn);
    queues.set(host, next.catch(() => {}));
    return next;
  };

  async function waitGap(host, crawlDelay) {
    const gap = hostGap(config, host, crawlDelay);
    const last = lastEnd.get(host);
    if (last != null) {
      const wait = last + gap - now();
      if (wait > 0) await sleep(wait);
    }
  }

  async function saveRaw(meta, bodyText, headers) {
    if (!saveRawDir) return;
    await mkdir(saveRawDir, { recursive: true });
    const base = `${String(++rawSeq).padStart(3, "0")}-${safeName(`${meta.method}-${meta.url.replace(/^https?:\/\//, "")}`)}`;
    // Cookies are dropped from saved headers: they are session tokens, not
    // evidence, and nothing a fixture needs.
    const hdrs = Object.entries(headers ?? {})
      .filter(([k]) => k.toLowerCase() !== "set-cookie")
      .map(([k, v]) => `${k}: ${v}`)
      .join("\n");
    await writeFile(path.join(saveRawDir, `${base}.body`), bodyText);
    await writeFile(
      path.join(saveRawDir, `${base}.meta.txt`),
      `${meta.method} ${meta.url}\n${meta.reqBody ? `body: ${meta.reqBody}\n` : ""}status: ${meta.status}\nfetched: ${new Date(now()).toISOString()}\n\n${hdrs}\n`
    );
  }

  async function rawFetch({ method, url, headers, body, timeoutMs, encoding }) {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), timeoutMs);
    try {
      const res = await fetchImpl(url, {
        method,
        headers: { "User-Agent": USER_AGENT, "Accept-Encoding": "gzip, br", ...headers },
        body,
        redirect: "manual",
        signal: ctrl.signal,
      });
      const buf = Buffer.from(await res.arrayBuffer());
      const text = new TextDecoder(encoding ?? "utf-8").decode(buf);
      const hdrs = {};
      res.headers.forEach((v, k) => {
        hdrs[k] = v;
      });
      return { status: res.status, headers: hdrs, body: text };
    } catch (e) {
      if (e?.name === "AbortError") return { error: "timeout", detail: `no response in ${timeoutMs / 1000}s` };
      return { error: "network", detail: String(e?.cause?.code ?? e?.message ?? e) };
    } finally {
      clearTimeout(timer);
    }
  }

  async function loadRobots(proto, host) {
    if (robots.has(host)) return robots.get(host);
    const p = (async () => {
      const file = cacheDir ? path.join(cacheDir, "robots", `${safeName(host)}.txt`) : null;
      const metaFile = file ? `${file}.json` : null;
      let cached = null;
      if (file) {
        try {
          const meta = JSON.parse(await readFile(metaFile, "utf8"));
          const text = await readFile(file, "utf8");
          cached = { text, fetchedAt: meta.fetchedAt, status: meta.status };
        } catch {
          cached = null;
        }
      }
      const age = cached ? now() - Date.parse(cached.fetchedAt) : Infinity;
      if (cached && age < ROBOTS_FRESH_MS) {
        return { groups: cached.status >= 400 ? [] : parseRobots(cached.text), fromCache: true };
      }
      const url = `${proto}//${host}/robots.txt`;
      const r = await enqueue(host, async () => {
        await waitGap(host, null);
        const t0 = now();
        const res = await rawFetch({ method: "GET", url, headers: {}, timeoutMs: 30000 });
        lastEnd.set(host, now());
        log.push({ host, method: "GET", url, status: res.status ?? null, kind: res.error ?? "robots", ms: now() - t0, at: new Date(t0).toISOString() });
        return res;
      });
      if (!r.error && r.status < 500) {
        if (file) {
          await mkdir(path.dirname(file), { recursive: true });
          await writeFile(file, r.status === 200 ? r.body : "");
          await writeFile(metaFile, JSON.stringify({ fetchedAt: new Date(now()).toISOString(), status: r.status }));
        }
        // 404 or any other 4xx: no rules — everything is allowed.
        return { groups: r.status === 200 ? parseRobots(r.body) : [], fromCache: false };
      }
      if (cached && age < ROBOTS_STALE_MS) {
        return { groups: cached.status >= 400 ? [] : parseRobots(cached.text), fromCache: true, stale: true };
      }
      return { groups: null, unreadable: true, detail: r.error ? r.detail : `HTTP ${r.status}` };
    })();
    robots.set(host, p);
    return p;
  }

  /** The robots verdict for a URL, without fetching the URL itself. */
  async function robotsCheck(url) {
    const u = new URL(url);
    const rb = await loadRobots(u.protocol, u.host);
    if (rb.unreadable) return { allowed: false, unreadable: true, detail: `robots.txt unreadable (${rb.detail})` };
    const v = robotsVerdict(rb.groups, u.pathname + u.search);
    return { ...v, stale: !!rb.stale };
  }

  async function request(req) {
    const {
      method = "GET",
      url,
      headers = {},
      body,
      timeoutMs = 30000,
      success,
      adapterDeadline = Infinity,
      encoding,
      adapterId = null,
    } = req;
    checkHeaders(headers);
    const key = `${method} ${url} ${body ?? ""}`;
    if (memo.has(key)) return memo.get(key);
    const p = (async () => {
      const host = hostOf(url);
      if (now() > Math.min(runDeadline, adapterDeadline)) return { ok: false, kind: "budget", detail: "run or adapter budget spent" };
      const rv = await robotsCheck(url);
      if (rv.unreadable) return { ok: false, kind: "network", detail: rv.detail };
      if (!rv.allowed) return { ok: false, kind: "robots", detail: `robots.txt disallows ${new URL(url).pathname} (${rv.by === "*" ? "User-agent: *" : "our User-agent"}: Disallow: ${rv.rule?.path})` };

      let attempt = 0;
      let current = url;
      for (;;) {
        if (now() > Math.min(runDeadline, adapterDeadline)) return { ok: false, kind: "budget", detail: "run or adapter budget spent" };
        const res = await enqueue(host, async () => {
          await waitGap(host, rv.crawlDelay);
          const t0 = now();
          const r = await rawFetch({ method, url: current, headers, body, timeoutMs, encoding });
          lastEnd.set(host, now());
          log.push({ adapter: adapterId, host, method, url: current, status: r.status ?? null, kind: r.error ?? "http", ms: now() - t0, at: new Date(t0).toISOString(), attempt });
          return r;
        });
        if (!res.error) await saveRaw({ method, url: current, reqBody: body, status: res.status }, res.body, res.headers);

        // Redirects: follow on the same host (≤ 3); off-host is a different page.
        if (!res.error && res.status >= 300 && res.status < 400 && res.headers.location) {
          const next = new URL(res.headers.location, current).href;
          if (hostOf(next) === host && attempt < 3) {
            current = next;
            attempt++;
            continue;
          }
          return { ok: false, kind: "http", status: res.status, detail: `redirected to ${next}`, redirectTo: next, headers: res.headers, body: res.body };
        }

        const retryable =
          res.error === "network" || res.error === "timeout" || (!res.error && (res.status >= 500 || res.status === 429));
        if (!res.error && isChallenge(res, success)) {
          return { ok: false, kind: "challenge", status: res.status, detail: challengeDetail(res), headers: res.headers, body: res.body };
        }
        if (retryable && attempt < 2) {
          attempt++;
          const ra = Number(res.headers?.["retry-after"]);
          const wait = Number.isFinite(ra) && ra > 0 ? Math.min(ra, 60) * 1000 : retryBaseMs * attempt;
          if (now() + wait > Math.min(runDeadline, adapterDeadline)) {
            return { ok: false, kind: "budget", detail: `retry would pass the budget (${res.error ?? `HTTP ${res.status}`})` };
          }
          await sleep(wait);
          continue;
        }
        if (res.error) return { ok: false, kind: res.error, detail: res.detail };
        if (res.status >= 400) return { ok: false, kind: "http", status: res.status, detail: `HTTP ${res.status}`, headers: res.headers, body: res.body };
        return { ok: true, status: res.status, headers: res.headers, body: res.body, url: current, fromCache: false };
      }
    })();
    memo.set(key, p);
    return p;
  }

  return { request, robotsCheck, log, userAgent: USER_AGENT, offline: false };
}

// ── Offline HTTP: the saved responses under tests/fixtures/cert-watch ────────
/**
 * routes: [{ method, match(url, body) → bool, file, status?, headersFile?,
 *            headers?, encoding? }] — the fixture map each adapter exports.
 * robotsDir: tests/fixtures/cert-watch/robots (host.txt; a missing file is
 *            read as a 404, i.e. no rules).
 * failUrls: URLs that reject as a network failure (tests).
 */
export function createFixtureHttp({ root, routes, robotsDir, failUrls = [] }) {
  const log = [];
  const readBody = async (file, encoding) => {
    const full = path.join(root, file);
    let buf = await readFile(full);
    if (file.endsWith(".gz")) buf = gunzipSync(buf);
    return new TextDecoder(encoding ?? "utf-8").decode(buf);
  };
  const robotsCache = new Map();
  async function robotsCheck(url) {
    const u = new URL(url);
    if (!robotsCache.has(u.host)) {
      const f = path.join(robotsDir, `${u.host}.txt`);
      let groups = [];
      try {
        await stat(f);
        groups = parseRobots(await readFile(f, "utf8"));
      } catch {
        groups = [];
      }
      robotsCache.set(u.host, groups);
    }
    return robotsVerdict(robotsCache.get(u.host), u.pathname + u.search);
  }
  async function request(req) {
    const { method = "GET", url, headers = {}, body, success, encoding, adapterId = null } = req;
    checkHeaders(headers);
    log.push({ adapter: adapterId, host: hostOf(url), method, url, status: null, kind: "offline", ms: 0, at: new Date(0).toISOString() });
    const rv = await robotsCheck(url);
    if (!rv.allowed) return { ok: false, kind: "robots", detail: `robots.txt disallows ${new URL(url).pathname}` };
    if (failUrls.some((f) => url.includes(f))) return { ok: false, kind: "network", detail: "offline: this fixture fetch is set to fail" };
    const route = routes.find((r) => (r.method ?? "GET") === method && r.match(url, body ?? ""));
    if (!route) return { ok: false, kind: "network", detail: `offline: no fixture for ${method} ${url}` };
    const text = await readBody(route.file, route.encoding ?? encoding);
    let hdrs = route.headers ?? {};
    if (route.headersFile) {
      hdrs = {};
      for (const line of (await readBody(route.headersFile)).split(/\r?\n/)) {
        const m = line.match(/^([A-Za-z0-9-]+):\s*(.*)$/);
        if (m) hdrs[m[1].toLowerCase()] = m[2];
      }
    }
    const res = { status: route.status ?? 200, headers: hdrs, body: text };
    log[log.length - 1].status = res.status;
    if (res.status >= 300 && res.status < 400 && hdrs.location) {
      return { ok: false, kind: "http", status: res.status, detail: `redirected to ${hdrs.location}`, redirectTo: hdrs.location, headers: hdrs, body: text };
    }
    if (isChallenge(res, success)) return { ok: false, kind: "challenge", status: res.status, detail: challengeDetail(res), headers: hdrs, body: text };
    if (res.status >= 400) return { ok: false, kind: "http", status: res.status, detail: `HTTP ${res.status}`, headers: hdrs, body: text };
    return { ok: true, status: res.status, headers: hdrs, body: text, url, fromCache: true };
  }
  return { request, robotsCheck, log, userAgent: USER_AGENT, offline: true };
}
