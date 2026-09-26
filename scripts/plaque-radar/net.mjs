// The radar's only door to the network.
//
//   • Two hosts, and only two: BuzzJack's forum (the certification threads)
//     and the Official Charts Company (this week's charts). A certification
//     REGISTER is never requested — not the BPI's, RiSA's, ARIA's or
//     Audiogest's — whether or not its robots.txt would allow it.
//   • robots.txt is read first, per host, and obeyed for Claude-User, for the
//     radar's own token and for *.
//   • An honest User-Agent, and at least 2 seconds between requests (longer
//     if the host asks for a crawl-delay).
//   • Redirects are followed HERE, one hop at a time, never by curl. Each hop
//     passes the host list, the https rule and robots.txt before it is
//     requested, so a redirect cannot carry the radar to a barred host, to
//     plain http, or to a path robots.txt disallows.
//   • curl does the fetching: Python's HTTPS stack fails on this Mac, and a
//     failed read must surface as a failure, never as "nothing found".

import { execFile } from "node:child_process";
import { robotsVerdict, parseRobots } from "./robots.mjs";

export const USER_AGENT = "burnaboystats.com (+https://burnaboystats.com/contact)";
/** The agent tokens robots.txt is checked against. */
export const AGENT_TOKENS = ["Claude-User", "burnaboystats.com"];
export const ALLOWED_HOSTS = ["www.buzzjack.com", "www.officialcharts.com"];
/** Never requested, by rule — listed so a test can prove the door stays shut. */
export const NEVER_HOSTS = [
  "certified-awards.bpi.co.uk",
  "auth.bpi.co.uk",
  "www.bpi.co.uk",
  "risa.org.za",
  "theofficialsacharts.co.za",
  "www.aria.com.au",
  "www.dropbox.com",
  "www.audiogest.pt",
  "audiogest.pt",
  "dutchcharts.nl",
  "portuguesecharts.com",
  "www.ultratop.be",
];
export const MIN_GAP_MS = 2000;
/** Hops the client follows by hand before giving up. */
export const MAX_REDIRECTS = 3;
const REDIRECT_CODES = new Set([301, 302, 303, 307, 308]);

/**
 * @typedef {{ ok: boolean, status: number, url?: string, body: string, location?: string, error?: string }} FetchResult
 * `location` is where a 3xx points, already resolved to an absolute URL.
 */

/** Throws unless the URL is https on an allowed host. */
export function assertAllowed(url) {
  const u = new URL(url);
  if (u.protocol !== "https:") throw new Error(`plaque radar: refusing non-https ${url}`);
  const host = u.hostname.toLowerCase();
  if (NEVER_HOSTS.some((h) => host === h || host.endsWith(`.${h.replace(/^www\./, "")}`))) {
    throw new Error(`plaque radar: ${host} is a certification register or barred source — never requested`);
  }
  if (!ALLOWED_HOSTS.includes(host)) throw new Error(`plaque radar: ${host} is not on the radar's host list`);
  return u;
}

/**
 * curl's arguments for one request. No -L: curl never follows a redirect on
 * its own; it reports the Location and the client decides. --proto =https
 * refuses anything but https even if a caller slipped past assertAllowed.
 */
export function curlArgs(url) {
  return ["-sS", "--proto", "=https", "--compressed", "--max-time", "45", "-A", USER_AGENT, "-w", "\n%{http_code} %{redirect_url}", url];
}

/** Splits curl's stdout (body, then the -w line) into a FetchResult. */
export function parseCurlOutput(stdout, { failed = false, stderr = "" } = {}) {
  const cut = stdout.lastIndexOf("\n");
  const tail = stdout.slice(cut + 1);
  const sp = tail.indexOf(" ");
  const status = Number(sp < 0 ? tail : tail.slice(0, sp)) || 0;
  const location = sp < 0 ? "" : tail.slice(sp + 1).trim();
  const error = failed ? stderr.trim() || "curl failed" : status ? undefined : stderr.trim() || "no response";
  // A transfer curl reports as failed (a timeout mid-body, say) is a failure
  // even when a 200 status line arrived first.
  return { ok: !failed && status >= 200 && status < 300, status, body: cut < 0 ? "" : stdout.slice(0, cut), location: location || undefined, error };
}

/** @returns {Promise<FetchResult>} */
function curl(url) {
  return new Promise((resolve) => {
    execFile("curl", curlArgs(url), { maxBuffer: 64 * 1024 * 1024, encoding: "utf8" }, (err, stdout, stderr) => {
      if (err && !stdout) return resolve({ ok: false, status: 0, body: "", error: (stderr || err.message).trim() });
      resolve(parseCurlOutput(stdout, { failed: Boolean(err), stderr }));
    });
  });
}

/**
 * A polite client. `get(url)` returns { ok, status, url, body, error }; it
 * never throws for a network failure (the caller logs it), but it DOES throw
 * when the URL it is handed is off the host list — that is a bug in the
 * radar. A REDIRECT off the host list, to http, or to a path robots.txt
 * disallows is refused without being requested, and comes back as a failure.
 *
 * @param {{ log?: (s: string) => void, fetcher?: (url: string) => Promise<FetchResult>, sleep?: (ms: number) => Promise<unknown> }} [opts]
 */
export function createClient({ log = () => {}, fetcher = curl, sleep = (ms) => new Promise((r) => setTimeout(r, ms)) } = {}) {
  const robots = new Map();
  let last = 0;
  let gap = MIN_GAP_MS;

  /** One request, spaced from the last. Never follows a redirect. */
  async function polite(url) {
    const wait = last + gap - Date.now();
    if (wait > 0) await sleep(wait);
    const res = await fetcher(url);
    last = Date.now();
    return { ...res, url };
  }

  /** Why a URL may not be requested (host list, https), or null. */
  function hostRefusal(url) {
    try {
      assertAllowed(url);
      return null;
    } catch (err) {
      return err.message;
    }
  }

  /** Why a page may not be requested (host list, https, robots.txt), or null. */
  async function pageRefusal(url) {
    const refused = hostRefusal(url);
    if (refused) return refused;
    const u = new URL(url);
    const groups = await robotsFor(u.origin);
    if (!groups) return "robots.txt unreadable";
    const verdict = robotsVerdict(groups, AGENT_TOKENS, u.pathname + u.search);
    if (!verdict.ok) return `robots.txt disallows it for ${verdict.blockedFor.join(", ")}`;
    if (verdict.crawlDelay) gap = Math.max(gap, verdict.crawlDelay * 1000);
    return null;
  }

  /**
   * Requests `url` (already admitted), then follows redirects by hand: each
   * Location must pass `admit` BEFORE it is requested, or the chain stops
   * there and nothing more is fetched.
   */
  async function follow(url, admit) {
    let cur = url;
    for (let hops = 0; ; hops++) {
      const res = await polite(cur);
      if (!REDIRECT_CODES.has(res.status)) return res;
      const fail = (error) => ({ ...res, ok: false, body: "", error });
      if (!res.location) return fail(`HTTP ${res.status} with no Location`);
      if (hops >= MAX_REDIRECTS) return fail(`more than ${MAX_REDIRECTS} redirects — stopped at ${res.location}`);
      let next;
      try {
        next = new URL(res.location, cur).href;
      } catch {
        return fail(`HTTP ${res.status} to an unreadable Location (${res.location})`);
      }
      const refused = await admit(next);
      if (refused) return fail(`redirected to ${next}, not followed: ${refused}`);
      cur = next;
    }
  }

  async function robotsFor(origin) {
    if (robots.has(origin)) return robots.get(origin);
    // robots.txt's own redirects are followed too, but only within the host
    // list (robots.txt is not itself subject to robots.txt).
    const res = await follow(`${origin}/robots.txt`, async (next) => hostRefusal(next));
    // No robots.txt (404) means no rules; any other failure means we do not
    // know the rules, so nothing on that host is read.
    const groups = res.ok ? parseRobots(res.body) : res.status === 404 ? [] : null;
    if (!groups) log(`robots.txt for ${origin}: ${res.error ?? `HTTP ${res.status}`} — not reading that host`);
    robots.set(origin, groups);
    return groups;
  }

  return {
    /** @returns {Promise<FetchResult>} */
    async get(url) {
      assertAllowed(url);
      const refused = await pageRefusal(url);
      if (refused) return { ok: false, status: 0, url, body: "", error: refused };
      return follow(url, pageRefusal);
    },
  };
}
