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
import { gunzipSync, gzipSync } from "node:zlib";
import path from "node:path";
import { parseRobots, robotsVerdict } from "./robots.mjs";
import { isDecoy } from "./health.mjs";

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
 * Cloudflare challenge form — or, with ANY status, a decoy page (RiSA's
 * tarpit serves `<title>ai/…` with HTTP 200) — each WITHOUT the adapter's
 * success marker, which is checked first.
 */
export function isChallenge({ status, headers, body }, success) {
  const text = String(body ?? "");
  if (success && (typeof success === "string" ? text.includes(success) : success.test(text))) return false;
  if (isDecoy(text)) return true;
  if (status !== 403 && status !== 503) return false;
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
  const bits = [isDecoy(res.body) ? `decoy page, HTTP ${res.status}` : `HTTP ${res.status}`];
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

/** Headers that name the MACHINE that fetched (its address) — never saved. */
const MACHINE_HEADERS = new Set([
  "set-cookie",
  "x-remote-addr",
  "x-forwarded-for",
  "x-real-ip",
  "x-client-ip",
  "cf-connecting-ip",
  "true-client-ip",
  "forwarded",
  "x-original-forwarded-for",
  "x-envoy-external-address",
]);

// ── Redaction of saved bodies (pure) ────────────────────────────────────────
// The shapes personal data takes on a real register page. An address becomes
// "(redacted)", a phone number or a contact's name is blanked, and the text
// around each stays byte for byte. None of these touch a row a parser reads:
// every committed fixture parses to the same rows before and after
// (certWatchConfig.test.ts proves it on the real pages).
const R = "(redacted)";
/** A dot, plain or obfuscated ("[dot]", "(dot)", "{dot}"). */
const DOT_FORMS = String.raw`(?:\s*(?:\[dot\]|\(dot\)|\{dot\})\s*|\.)`;
/** An address's domain: labels joined by dots, ending in an alphabetic
 *  top-level label. */
const DOMAIN = String.raw`[A-Za-z0-9-]+(?:${DOT_FORMS}[A-Za-z0-9-]+)*${DOT_FORMS}[A-Za-z]{2,24}(?![A-Za-z0-9-])`;
/** "@" written some other way: BVMI's "[at]" display text, "(at)", "{at}",
 *  "(a)", an HTML entity (&#64; / &#x40; / &commat;), URL-encoding (%40), a
 *  JSON or JS escape (\u0040, \x40), or a full-width or small commercial
 *  at (U+FF20, U+FE6B: UTF-8 bytes, seen here as latin-1). */
const OBF_AT = String.raw`\s*(?:\[at\]|\(at\)|\{at\}|\(a\)|&#0*64;|&#[xX]0*40;|&commat;|%40|\\u0040|\\x40|\u00ef\u00bc\u00a0|\u00ef\u00b9\u00ab)\s*`;
const OBFUSCATED_RE = new RegExp(String.raw`[A-Za-z0-9._%+-]+${OBF_AT}${DOMAIN}`, "gi");
/** "<name> at <domain>.de" / "<name> at <domain> dot de" — the bare-word
 *  form. Only where the word before "at" could be a mailbox, not prose (a
 *  page saying it was "published at" a site), and never a URL path. */
const WORD_AT_RE = new RegExp(
  String.raw`(?<![\w.%+@/:-])([A-Za-z0-9][A-Za-z0-9._%+-]*)\s+at\s+([A-Za-z0-9-]+(?:(?:\.|\s+dot\s+)[A-Za-z0-9-]+)*(?:\.|\s+dot\s+)[A-Za-z]{2,24})(?![\w/.-])`,
  "gi"
);
const PROSE_WORDS = new Set(
  "a an the is are was were be been being am it its this that these those there here now today online live read found hosted published available listed stay look see check open find visit shop buy listen watch download stream only also us we you he she they him her them me my our your his their one all more less anyone someone somebody people and or but not no yes up down out in on off over from by with for of to as so if then than when where who what which how".split(
    " "
  )
);
/** A plain address. A file name with a density suffix (an image's "@2x"
 *  variant) or a package pinned to a version is not one. */
const EMAIL_RE = /(?<![\w.%+-])[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)*\.([A-Za-z]{2,24})(?![\w-])/g;
const FILE_EXT = /^(?:png|jpe?g|gif|svg|webp|avif|ico|bmp|js|mjs|cjs|css|map|json|woff2?|ttf|otf|eot|pdf|html?)$/i;

/** One character of an address, however a page wrote it: itself, a numeric
 *  HTML entity (decimal or hex — WordPress's antispambot writes an address
 *  that way, mixing the two character by character), &commat; / &period;, a
 *  JSON or JS escape (\u00XX, \xXX), URL-encoding (%XX), or a full-width at
 *  or dot or a small at (U+FF20, U+FF0E, U+FE6B: UTF-8 bytes, seen here as
 *  latin-1). Each decodes to exactly one character. A plain "@" is a unit
 *  too, so an address with only its local part encoded is one run. */
const ENC_UNIT_RE =
  /&#\d{1,7};|&#[xX][0-9A-Fa-f]{1,6};|&(?:commat|period);|\\u00[0-9A-Fa-f]{2}|\\x[0-9A-Fa-f]{2}|%[0-9A-Fa-f]{2}|\u00ef\u00bc[\u00a0\u008e]|\u00ef\u00b9\u00ab|[A-Za-z0-9._%+@-]/g;
const ENC_RUN_RE = new RegExp(`(?:${ENC_UNIT_RE.source})+`, "g");
const PLAIN_UNIT = /^[A-Za-z0-9._%+@-]$/;
function decodeUnit(u) {
  if (u.length === 1) return u;
  let m;
  if ((m = u.match(/^&#[xX]([0-9A-Fa-f]+);$/)) || (m = u.match(/^\\u00([0-9A-Fa-f]{2})$/)) || (m = u.match(/^\\x([0-9A-Fa-f]{2})$/)) || (m = u.match(/^%([0-9A-Fa-f]{2})$/))) {
    const n = parseInt(m[1], 16);
    return n <= 0x10ffff ? String.fromCodePoint(n) : "\ufffd";
  }
  if ((m = u.match(/^&#(\d+);$/))) {
    const n = parseInt(m[1], 10);
    return n <= 0x10ffff ? String.fromCodePoint(n) : "\ufffd";
  }
  if (u === "&commat;" || u === "\u00ef\u00bc\u00a0" || u === "\u00ef\u00b9\u00ab") return "@";
  if (u === "&period;" || u === "\u00ef\u00bc\u008e") return ".";
  return "\ufffd";
}
const DECODED_EMAIL_RE = /[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)*\.([A-Za-z]{2,24})(?![A-Za-z0-9-])/g;
/** An address written wholly or partly in encoded characters: the encoded
 *  units that spell it become "(redacted)"; the rest of the run (a
 *  "mailto&#58;" before it, say) stays as served. A run with no encoded unit
 *  is left to the plain-address rule. */
function redactEncodedRun(run) {
  const units = run.match(ENC_UNIT_RE);
  if (units.every((u) => PLAIN_UNIT.test(u))) return run;
  const decoded = units.map(decodeUnit);
  // Offsets of each unit's decoded character(s) in the decoded string.
  const starts = [];
  let text = "";
  for (const d of decoded) {
    starts.push(text.length);
    text += d;
  }
  const unitAt = (off) => {
    let i = 0;
    while (i + 1 < starts.length && starts[i + 1] <= off) i++;
    return i;
  };
  const cut = [];
  for (const m of text.matchAll(DECODED_EMAIL_RE)) {
    if (FILE_EXT.test(m[1])) continue;
    cut.push([unitAt(m.index), unitAt(m.index + m[0].length - 1)]);
  }
  if (!cut.length) return run;
  let out = "";
  let i = 0;
  for (const [a, b] of cut) {
    out += units.slice(i, a).join("") + R;
    i = b + 1;
  }
  return out + units.slice(i).join("");
}

/** Cloudflare's email obfuscation: the address XOR-ed with the first byte,
 *  as hex, in a `data-cfemail` attribute and after
 *  `/cdn-cgi/l/email-protection#`. */
export function cfDecode(hex) {
  if (!/^(?:[0-9A-Fa-f]{2}){2,}$/.test(hex)) return null;
  const key = parseInt(hex.slice(0, 2), 16);
  let out = "";
  for (let i = 2; i < hex.length; i += 2) out += String.fromCharCode(parseInt(hex.slice(i, i + 2), 16) ^ key);
  return out;
}
const cfIsAddress = (hex) => {
  const d = cfDecode(hex);
  return d !== null && /@/.test(d);
};
const CF_ATTR_RE = /(data-cfemail\s*=\s*)(["'])([0-9A-Fa-f]*)\2/gi;
const CF_LINK_RE = /(\/cdn-cgi\/l\/email-protection#)([0-9A-Fa-f]+)/gi;
/** TYPO3's spam-protected link: the address, encrypted, in these two. */
const TYPO3_RE = /(data-mailto-(?:token|vector)\s*=\s*)(["'])([^"']*)\2/gi;
/** An address after a label that says it is one: PROMUSICAE's footer
 *  ("IP: <proxy>", "EX-IP: <the visitor's address>"), a JSON "ip" field,
 *  "Your IP", REMOTE_ADDR, Cloudflare's block-page footer. */
const IP_VALUE = String.raw`(?:\d{1,3}(?:\.\d{1,3}){3}|[0-9A-Fa-f]{0,4}(?::[0-9A-Fa-f]{0,4}){2,7})`;
const IP_LABEL_RE = new RegExp(
  String.raw`(\b(?:EX-)?IP(?:[ -]?[Aa]ddress)?\s*[:=]\s*|\byour\s+IP(?:\s+address)?(?:\s+is)?\s*[:=]?\s*|\b(?:REMOTE_ADDR|remote[_ -]addr(?:ess)?|client[_ -]?ip|x-forwarded-for)["']?\s*[:=]\s*["']?|["'](?:ip|ip_?address|clientIp|remoteAddr)["']\s*:\s*["']|id=["']cf-footer-ip["'][^>]*>\s*)${IP_VALUE}(?![\w.:])`,
  "gi"
);

// Phone numbers. A number is blanked only where the page says it is one —
// after a label (Tel, Telefon, Phone, Fax, Tlf, Mobil…), in a tel: link and
// that link's text, or in an hCard "tel" element — and only when it has at
// least six digits, so a year, a chart position or a catalogue number after
// a word like "Fax" (Ifpi Sverige prints the label "FAX RECORDS/EPIC") is
// never touched.
const PHONE = String.raw`\+?\(?\d(?:[\d ().\/-]|\u00a0|\u00c2\u00a0|&nbsp;|&#160;){4,}\d`;
const sixDigits = (s) => (String(s).match(/\d/g) ?? []).length >= 6;
const TEL_LINK_RE = new RegExp(String.raw`((?<![A-Za-z])tel:(?:\/\/)?)(${PHONE})`, "gi");
const TEL_TEXT_RE = new RegExp(String.raw`(<a\b[^>]*?\bhref\s*=\s*(["'])tel:[^"']*\2[^>]*>\s*)(${PHONE})`, "gi");
const PHONE_LABEL_RE = new RegExp(
  String.raw`((?<![A-Za-z-])(?:tel|telefon|telephone|phone|fax|telefax|tlf|mobil|mobile|handy)\.?\s*(?::\s*)?(?:<a\b[^>]*>\s*)?)(${PHONE})`,
  "gi"
);
const HCARD_TEL_RE = new RegExp(String.raw`(\bclass\s*=\s*(["'])[^"']*(?<![\w-])(?:tel|phone|p-tel)(?![\w-])[^"']*\2[^>]*>\s*)(${PHONE})`, "gi");
/** A contact block — BVMI's `<div class="kontakt row">`, an hCard `vcard` /
 *  `h-card` — names a person: their name (`fn`, `name`, `p-name`), job title
 *  (`title`, `p-job-title`, `role`) and photo caption (`alt`) are blanked,
 *  inside the block only: from its opening tag to the tag that closes it,
 *  at most 4,000 characters on. */
const CONTACT_OPEN_RE = /<([A-Za-z][A-Za-z0-9]*)\b[^>]*\bclass\s*=\s*(["'])[^"']*(?<![\w-])(?:kontakt|vcard|h-card)(?![\w-])[^"']*\2[^>]*>/gi;
/** Where the element opened at `start` closes (its own tag name, nested
 *  alike), capped at 4,000 characters. */
function blockEnd(s, start, tag) {
  const limit = Math.min(s.length, start + 4000);
  const re = new RegExp(`<(/?)${tag}\\b[^>]*>`, "gi");
  re.lastIndex = start;
  let depth = 0;
  for (let m = re.exec(s); m && m.index < limit; m = re.exec(s)) {
    depth += m[1] ? -1 : 1;
    if (depth === 0) return Math.min(m.index + m[0].length, limit);
  }
  return limit;
}
const CONTACT_FIELD_RE = /(<[A-Za-z][A-Za-z0-9]*\b[^>]*\bclass\s*=\s*(["'])[^"']*(?<![\w-])(?:fn|name|p-name|title|p-job-title|job-title|role)(?![\w-])[^"']*\2[^>]*>)([^<]+)(?=<)/gi;
const ALT_RE = /(\balt\s*=\s*)(["'])([^"']+)\2/gi;
function redactContacts(s) {
  const opens = [...s.matchAll(CONTACT_OPEN_RE)];
  if (!opens.length) return s;
  let out = "";
  let at = 0;
  for (const o of opens) {
    if (o.index < at) continue; // inside a block already redacted
    const end = blockEnd(s, o.index, o[1]);
    const block = s
      .slice(o.index, end)
      .replace(CONTACT_FIELD_RE, (m, open, q, text) => (text.trim() ? open : m))
      .replace(ALT_RE, (m, attr, q) => `${attr}${q}${q}`);
    out += s.slice(at, o.index) + block;
    at = end;
  }
  return out + s.slice(at);
}

/**
 * Bytes as served, less the personal data a register page prints:
 *   * any mailto: address — RadioScope's social-links footer carries a
 *     person's (`href="mailto:<address>"`). Everything after "mailto:" up to
 *     the closing quote, whitespace or angle bracket goes, query included;
 *   * TYPO3's spam-protected links — BVMI's contact block carries a staff
 *     member's address and a role address as `data-mailto-token` /
 *     `data-mailto-vector` pairs: both values are blanked;
 *   * Cloudflare's obfuscated address (`data-cfemail`, `/cdn-cgi/l/
 *     email-protection#`): decoded to check it is one, then blanked;
 *   * an address written wholly or partly in HTML entities (decimal, hex,
 *     &commat;), JS/JSON escapes (\x40, \u0040), URL-encoding or full-width
 *     characters;
 *   * an address written some other way: "<name>[at]<domain>" (BVMI's
 *     display text), "(at)", "{at}", "(a)", " at ", and an obfuscated dot
 *     ("[dot]");
 *   * a plain address, "<name>@<domain>";
 *   * a machine's address after a label that says so — PROMUSICAE's footer
 *     reads "IP: <proxy> … EX-IP: <the visitor's address>";
 *   * a phone number after a label, in a tel: link (its href and its text)
 *     or an hCard tel element — BVMI's contact block prints a staff
 *     member's direct line, Ifpi Sverige's and ČNS IFPI's footers their
 *     offices' — which is blanked;
 *   * the person a contact block names (BVMI: name and job title), blanked.
 * ASCII-only rewrite through latin1, so every other byte stays as served (Ifpi
 * Sverige's records are latin-1).
 */
export function redactSaved(bytes) {
  const buf = Buffer.isBuffer(bytes) ? bytes : Buffer.from(String(bytes ?? ""), "utf8");
  const s = buf.toString("latin1");
  const r = redactContacts(
    s
      .replace(/(mailto:)(?!\(redacted\))[^"'\s<>]+/gi, `$1${R}`)
      .replace(TYPO3_RE, (m, attr, q, v) => (v === "" ? m : `${attr}${q}${q}`))
      .replace(CF_ATTR_RE, (m, attr, q, v) => (v !== "" && cfIsAddress(v) ? `${attr}${q}${q}` : m))
      .replace(CF_LINK_RE, (m, pre, v) => (cfIsAddress(v) ? pre : m))
      .replace(ENC_RUN_RE, redactEncodedRun)
      .replace(OBFUSCATED_RE, R)
      .replace(WORD_AT_RE, (m, local) => (PROSE_WORDS.has(local.toLowerCase()) ? m : R))
      .replace(EMAIL_RE, (m, tld) => (FILE_EXT.test(tld) ? m : R))
      .replace(IP_LABEL_RE, `$1${R}`)
      .replace(TEL_TEXT_RE, (m, pre, q, num) => (sixDigits(num) ? pre : m))
      .replace(TEL_LINK_RE, (m, pre, num) => (sixDigits(num) ? pre : m))
      .replace(PHONE_LABEL_RE, (m, pre, num) => (sixDigits(num) ? pre : m))
      .replace(HCARD_TEL_RE, (m, pre, q, num) => (sixDigits(num) ? pre : m))
  );
  return r === s ? buf : Buffer.from(r, "latin1");
}
const safeName = (s) => s.replace(/[^A-Za-z0-9._-]+/g, "_").slice(0, 150);

/** config.hosts[host] (or its bare form without www.), else "*". */
export function hostConfig(config, host) {
  const hosts = config?.hosts ?? {};
  const bare = host.replace(/^www\./, "");
  return hosts[host] ?? hosts[bare] ?? hosts["*"] ?? {};
}

/** A host's minimum gap: config.hosts[host] or "*", raised to the robots
 *  Crawl-delay when that is longer. */
export function hostGap(config, host, crawlDelaySec) {
  const base = hostConfig(config, host).minGapMs ?? DEFAULT_GAP_MS;
  return Math.max(base, crawlDelaySec != null ? crawlDelaySec * 1000 : 0);
}

/** "name=value; Path=/; HttpOnly" → ["name", "value"], or null. */
export function cookiePair(setCookie) {
  const first = String(setCookie ?? "").split(";")[0];
  const eq = first.indexOf("=");
  if (eq <= 0) return null;
  return [first.slice(0, eq).trim(), first.slice(eq + 1).trim()];
}

const matches = (m, text) => (typeof m === "string" ? text.includes(m) : m.test(text));

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
  // The per-run cookie jar (SPEC §2.4): only for a host whose config says
  // `cookies: "run"`, only in memory, gone when the run ends. Never written to
  // the cache, a fixture or a saved header.
  const jar = new Map(); // host → Map(name → value)
  let rawSeq = 0;

  // Conditional GET (SPEC §2.4): validators for the hosts that send them
  // (ifpi.gr's Last-Modified, turntablecharts.com's ETag), with the body kept
  // gzipped beside them so a 304 can reuse it. Only for a request that opts in.
  // The kept body is only ever PARSED again (on a 304), so it is kept
  // redacted, exactly as --save-raw writes it: the Actions cache never holds
  // an address, a phone number or a contact's name. Redaction never touches
  // a row a parser reads (certWatchHttp.test.ts parses both and compares).
  let validators = null;
  const validatorsFile = cacheDir ? path.join(cacheDir, "validators.json") : null;
  const bodyFile = (url) => (cacheDir ? path.join(cacheDir, "bodies", `${safeName(url)}.gz`) : null);
  async function loadValidators() {
    if (validators) return validators;
    try {
      validators = validatorsFile ? JSON.parse(await readFile(validatorsFile, "utf8")) : {};
    } catch {
      validators = {};
    }
    return validators;
  }
  async function conditionalHeaders(url) {
    const v = (await loadValidators())[url];
    const f = bodyFile(url);
    if (!v || !f) return {};
    try {
      await stat(f);
    } catch {
      return {};
    }
    return { ...(v.etag ? { "If-None-Match": v.etag } : {}), ...(v.lastModified ? { "If-Modified-Since": v.lastModified } : {}) };
  }
  async function keepBody(url, res) {
    const etag = res.headers?.etag ?? null;
    const lastModified = res.headers?.["last-modified"] ?? null;
    const f = bodyFile(url);
    if (!f || (!etag && !lastModified)) return;
    await mkdir(path.dirname(f), { recursive: true });
    await writeFile(f, gzipSync(redactSaved(res.bytes ?? Buffer.from(res.body ?? ""))));
    const v = await loadValidators();
    v[url] = { etag, lastModified, savedAt: new Date(now()).toISOString() };
    await writeFile(validatorsFile, JSON.stringify(v, null, 1));
  }

  const jarFor = (host) => (hostConfig(config, host).cookies === "run" ? jar.get(host) ?? jar.set(host, new Map()).get(host) : null);
  const cookieHeader = (host) => {
    const j = jarFor(host);
    if (!j || !j.size) return null;
    return [...j].map(([k, v]) => `${k}=${v}`).join("; ");
  };

  const enqueue = (host, fn) => {
    const prev = queues.get(host) ?? Promise.resolve();
    const next = prev.catch(() => {}).then(fn);
    queues.set(host, next.catch(() => {}));
    return next;
  };

  async function waitGap(host, crawlDelay) {
    const gap = hostGap(config, host, crawlDelay);
    const last = lastEnd.get(host);
    if (last == null) return;
    // A timer can wake a millisecond early (the 24 Sep live run measured
    // 1,099 ms on three hosts): sleep a millisecond past the gap, and again
    // if the clock still says it is short. Each sleep is at least 1 ms.
    for (let wait = last + gap - now(); wait > 0; wait = last + gap - now()) await sleep(wait + 1);
  }

  async function saveRaw(meta, bodyBytes, headers) {
    if (!saveRawDir) return;
    await mkdir(saveRawDir, { recursive: true });
    const base = `${String(++rawSeq).padStart(3, "0")}-${safeName(`${meta.method}-${meta.url.replace(/^https?:\/\//, "")}`)}`;
    // Cookies are dropped from saved headers: they are session tokens, not
    // evidence, and nothing a fixture needs. So is anything that names the
    // machine that fetched (BVMI echoes X-Remote-Addr; PROMUSICAE prints the
    // visitor's address in its footer) or a person (RadioScope's mailto:
    // footer link) — personal data, never saved.
    const hdrs = Object.entries(headers ?? {})
      .filter(([k]) => !MACHINE_HEADERS.has(k.toLowerCase()))
      .map(([k, v]) => `${k}: ${v}`)
      .join("\n");
    await writeFile(path.join(saveRawDir, `${base}.body`), redactSaved(bodyBytes));
    await writeFile(
      path.join(saveRawDir, `${base}.meta.txt`),
      redactSaved(`${meta.method} ${meta.url}\n${meta.reqBody ? `body: ${meta.reqBody}\n` : ""}status: ${meta.status}\nfetched: ${new Date(now()).toISOString()}\n\n${hdrs}\n`)
    );
  }

  async function rawFetch({ method, url, headers, body, timeoutMs, encoding }) {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), timeoutMs);
    const host = hostOf(url);
    try {
      const cookie = cookieHeader(host);
      const res = await fetchImpl(url, {
        method,
        headers: { "User-Agent": USER_AGENT, "Accept-Encoding": "gzip, br", ...headers, ...(cookie ? { Cookie: cookie } : {}) },
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
      const j = jarFor(host);
      if (j) {
        const sets = typeof res.headers.getSetCookie === "function" ? res.headers.getSetCookie() : hdrs["set-cookie"] ? [hdrs["set-cookie"]] : [];
        for (const sc of sets) {
          const pair = cookiePair(sc);
          if (pair) j.set(pair[0], pair[1]);
        }
      }
      return { status: res.status, headers: hdrs, body: text, bytes: buf };
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
        // One reading of the clock for both: the gap the queue keeps and the
        // gap the request log reports are then measured from the same end.
        const end = now();
        lastEnd.set(host, end);
        log.push({ host, method: "GET", url, status: res.status ?? null, kind: res.error ?? "robots", ms: end - t0, at: new Date(t0).toISOString() });
        return res;
      });
      if (!r.error && r.status < 500) {
        if (file) {
          await mkdir(path.dirname(file), { recursive: true });
          // Kept redacted, like every body on disk: a robots.txt comment
          // can name a webmaster (the rules never hold an address).
          await writeFile(file, r.status === 200 ? redactSaved(r.body) : "");
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
      repeat = 0,
      conditional = false,
    } = req;
    checkHeaders(headers);
    // `repeat` asks for a deliberate re-read of the same URL (IFPI Danmark's
    // pager shuffles rows that share a date between requests, so the adapter
    // reads the same pages more than once and unions them). Anything else
    // shares one in-flight request per (method, url, body).
    const key = `${method} ${url} ${body ?? ""}${repeat ? `#${repeat}` : ""}`;
    if (memo.has(key)) return memo.get(key);
    const p = (async () => {
      const host = hostOf(url);
      if (now() > Math.min(runDeadline, adapterDeadline)) return { ok: false, kind: "budget", detail: "run or adapter budget spent" };
      const rv = await robotsCheck(url);
      if (rv.unreadable) return { ok: false, kind: "network", detail: rv.detail };
      if (!rv.allowed) return { ok: false, kind: "robots", detail: `robots.txt disallows ${new URL(url).pathname} (${rv.by === "*" ? "User-agent: *" : "our User-agent"}: Disallow: ${rv.rule?.path})` };

      let attempt = 0;
      let current = url;
      const cond = conditional && method === "GET" ? await conditionalHeaders(url) : {};
      for (;;) {
        if (now() > Math.min(runDeadline, adapterDeadline)) return { ok: false, kind: "budget", detail: "run or adapter budget spent" };
        const res = await enqueue(host, async () => {
          await waitGap(host, rv.crawlDelay);
          const t0 = now();
          const r = await rawFetch({ method, url: current, headers: { ...headers, ...cond }, body, timeoutMs, encoding });
          // One reading of the clock for both (see loadRobots): read twice, a
          // millisecond could pass between them, and the log would report a
          // gap one millisecond shorter than the one the queue kept — the
          // 1,099 ms the 24 Sep evening live run printed for one host.
          const end = now();
          lastEnd.set(host, end);
          log.push({
            adapter: adapterId,
            host,
            method,
            url: current,
            status: r.status ?? null,
            kind: r.error ?? "http",
            ms: end - t0,
            at: new Date(t0).toISOString(),
            attempt,
            // What the first Actions run needs to see host by host (§2.4):
            // the front's server header, Cloudflare's ray, the adapter's marker.
            server: r.headers?.server ?? null,
            cfRay: !!r.headers?.["cf-ray"],
            marker: success && !r.error ? matches(success, String(r.body ?? "")) : null,
          });
          return r;
        });
        // The bytes as served (a latin-1 page stays latin-1 on disk).
        if (!res.error) await saveRaw({ method, url: current, reqBody: body, status: res.status }, res.bytes ?? res.body, res.headers);

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

        // 304: unchanged since the body kept last time — that body, as it was.
        if (!res.error && res.status === 304 && Object.keys(cond).length) {
          try {
            const bytes = gunzipSync(await readFile(bodyFile(url)));
            return { ok: true, status: 304, notModified: true, headers: res.headers, body: new TextDecoder(encoding ?? "utf-8").decode(bytes), url: current, fromCache: true };
          } catch (e) {
            return { ok: false, kind: "network", detail: `304 but the kept body is unreadable (${e.code ?? e.message})` };
          }
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
        if (conditional && method === "GET" && res.status === 200) await keepBody(url, res);
        return { ok: true, status: res.status, headers: res.headers, body: res.body, url: current, fromCache: false };
      }
    })();
    memo.set(key, p);
    return p;
  }

  return { request, robotsCheck, log, userAgent: USER_AGENT, offline: false, jarSize: () => [...jar.values()].reduce((n, j) => n + j.size, 0) };
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
  const seen = new Map(); // (method, url, body) → how many times asked
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
    // Keep this request's own entry: adapters run concurrently, so the last
    // entry in the log may be another request's by the time this one returns.
    const entry = { adapter: adapterId, host: hostOf(url), method, url, status: null, kind: "offline", ms: 0, at: new Date(0).toISOString() };
    log.push(entry);
    const rv = await robotsCheck(url);
    if (!rv.allowed) return { ok: false, kind: "robots", detail: `robots.txt disallows ${new URL(url).pathname}` };
    if (failUrls.some((f) => url.includes(f))) return { ok: false, kind: "network", detail: "offline: this fixture fetch is set to fail" };
    // A URL read more than once live (a deliberate re-read) replays its
    // responses in order: the nth request gets the route saved as nth.
    const k = `${method} ${url} ${body ?? ""}`;
    const nth = (seen.get(k) ?? 0) + 1;
    seen.set(k, nth);
    const fits = routes.filter((r) => (r.method ?? "GET") === method && r.match(url, body ?? ""));
    const route = fits.find((r) => (r.nth ?? 1) === nth) ?? fits.find((r) => r.nth == null) ?? fits[0];
    if (!route) return { ok: false, kind: "network", detail: `offline: no fixture for ${method} ${url}` };
    // The adapter's own encoding wins, as it does live; the saved route's is
    // only a fallback (PROVENANCE records it for a reader of the file).
    const text = await readBody(route.file, encoding ?? route.encoding);
    let hdrs = route.headers ?? {};
    if (route.headersFile) {
      hdrs = {};
      for (const line of (await readBody(route.headersFile)).split(/\r?\n/)) {
        const m = line.match(/^([A-Za-z0-9-]+):\s*(.*)$/);
        if (m) hdrs[m[1].toLowerCase()] = m[2];
      }
    }
    const res = { status: route.status ?? 200, headers: hdrs, body: text };
    Object.assign(entry, {
      status: res.status,
      server: hdrs.server ?? null,
      cfRay: !!hdrs["cf-ray"],
      marker: success ? matches(success, text) : null,
    });
    if (res.status >= 300 && res.status < 400 && hdrs.location) {
      return { ok: false, kind: "http", status: res.status, detail: `redirected to ${hdrs.location}`, redirectTo: hdrs.location, headers: hdrs, body: text };
    }
    if (isChallenge(res, success)) return { ok: false, kind: "challenge", status: res.status, detail: challengeDetail(res), headers: hdrs, body: text };
    if (res.status >= 400) return { ok: false, kind: "http", status: res.status, detail: `HTTP ${res.status}`, headers: hdrs, body: text };
    return { ok: true, status: res.status, headers: hdrs, body: text, url, fromCache: true };
  }
  return { request, robotsCheck, log, userAgent: USER_AGENT, offline: true };
}
