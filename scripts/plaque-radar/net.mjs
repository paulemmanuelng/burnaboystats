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

function curl(url) {
  return new Promise((resolve) => {
    execFile(
      "curl",
      ["-sS", "-L", "--max-redirs", "3", "--compressed", "--max-time", "45", "-A", USER_AGENT, "-w", "\n%{http_code} %{url_effective}", url],
      { maxBuffer: 64 * 1024 * 1024, encoding: "utf8" },
      (err, stdout, stderr) => {
        if (err && !stdout) return resolve({ ok: false, status: 0, url, body: "", error: (stderr || err.message).trim() });
        const cut = stdout.lastIndexOf("\n");
        const [code, effective] = stdout.slice(cut + 1).split(" ");
        const status = Number(code);
        resolve({ ok: status >= 200 && status < 300, status, url: effective || url, body: stdout.slice(0, cut), error: status ? undefined : (stderr || "no response").trim() });
      },
    );
  });
}

/**
 * A polite client. `get(url)` returns { ok, status, url, body, error }; it
 * never throws for a network failure (the caller logs it), but it DOES throw
 * for a host the radar must not touch.
 */
export function createClient({ log = () => {}, fetcher = curl, sleep = (ms) => new Promise((r) => setTimeout(r, ms)) } = {}) {
  const robots = new Map();
  let last = 0;
  let gap = MIN_GAP_MS;

  async function polite(url) {
    const wait = last + gap - Date.now();
    if (wait > 0) await sleep(wait);
    const res = await fetcher(url);
    last = Date.now();
    if (res.ok) {
      const host = new URL(res.url).hostname;
      if (!ALLOWED_HOSTS.includes(host)) return { ...res, ok: false, body: "", error: `redirected off the host list, to ${host}` };
    }
    return res;
  }

  async function robotsFor(origin) {
    if (robots.has(origin)) return robots.get(origin);
    const res = await polite(`${origin}/robots.txt`);
    // No robots.txt (404) means no rules; any other failure means we do not
    // know the rules, so nothing on that host is read.
    const groups = res.ok ? parseRobots(res.body) : res.status === 404 ? [] : null;
    if (!groups) log(`robots.txt for ${origin}: ${res.error ?? `HTTP ${res.status}`} — not reading that host`);
    robots.set(origin, groups);
    return groups;
  }

  return {
    async get(url) {
      const u = assertAllowed(url);
      const groups = await robotsFor(u.origin);
      if (!groups) return { ok: false, status: 0, url, body: "", error: "robots.txt unreadable" };
      const verdict = robotsVerdict(groups, AGENT_TOKENS, u.pathname + u.search);
      if (!verdict.ok) return { ok: false, status: 0, url, body: "", error: `robots.txt disallows it for ${verdict.blockedFor.join(", ")}` };
      if (verdict.crawlDelay) gap = Math.max(gap, verdict.crawlDelay * 1000);
      return polite(url);
    },
  };
}
