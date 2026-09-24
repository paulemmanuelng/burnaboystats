// @vitest-environment node
import { describe, it, expect } from "vitest";
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { gunzipSync } from "node:zlib";
import { join, relative } from "node:path";
import * as certs from "../app/data/certifications";
import * as afro from "../app/data/afrobeats";
import { buildSiteIndex, hydrateSiteIndex } from "../scripts/cert-watch/site.mjs";
import { configProblems } from "../scripts/cert-watch/index.mjs";
import { REGISTRY } from "../scripts/cert-watch/adapters/index.mjs";
import { USER_AGENT, hostGap, redactSaved } from "../scripts/cert-watch/http.mjs";
import { parseRows as bvmiParseRows, selectedYear as bvmiSelectedYear } from "../scripts/cert-watch/adapters/bvmi.mjs";
import { parseSearch as sverigeParseSearch, parseRecord as sverigeParseRecord } from "../scripts/cert-watch/adapters/ifpi-sverige.mjs";
import { parseChart as cnsParseChart } from "../scripts/cert-watch/adapters/cns-ifpi.mjs";
import { parsePage as danmarkParsePage } from "../scripts/cert-watch/adapters/ifpi-danmark.mjs";
import { LIVE_ARTISTS, config, FIX, ROOT, fixture } from "./certWatchHelpers";

const index = hydrateSiteIndex(buildSiteIndex(certs, afro, LIVE_ARTISTS, config), LIVE_ARTISTS);

describe("config.json", () => {
  it("is valid against the REAL site: every ruling names an existing artist and release, with why and on", () => {
    expect(configProblems(config, index)).toEqual([]);
  });

  it("every ruling carries who ruled it", () => {
    for (const list of ["knownDivergences", "heldRows", "leadAliases", "titleAliases"]) {
      for (const e of config[list]) expect(e.ruledBy, `${list}: ${JSON.stringify(e)}`).toBeTruthy();
    }
  });

  it("a divergence ruled on a row printed under another title names the register's title AND credit; the site release it counts as must exist", () => {
    const d = config.knownDivergences.find((x: { printed?: string }) => x.printed);
    expect(d).toMatchObject({ adapter: "promusicae", artist: "ckay", printed: "LOVE NWANTITI (REMIX)", credit: "CKAY / AXEL / DJ YO" });
    // LABELLED EDITS of that entry: no credit; an empty printed title; a site
    // release that does not exist.
    const edit = (e: object) => ({ ...config, knownDivergences: config.knownDivergences.map((x: unknown) => (x === d ? { ...d, ...e } : x)) });
    expect(configProblems(edit({ credit: undefined }), index).join(" ")).toMatch(/needs the row's "credit" too/);
    expect(configProblems(edit({ printed: " " }), index).join(" ")).toMatch(/"printed" must be the register's own text/);
    expect(configProblems(edit({ title: "love nwantiti (remix)" }), index).join(" ")).toMatch(/no release "love nwantiti \(remix\)" for ckay/);
  });

  it("catches a watchlist item naming a release the site does not have", () => {
    const bad = { ...config, watchlist: [{ ...config.watchlist[0], title: "Dai Dai (Remix)" }] };
    expect(configProblems(bad, index).join(" ")).toMatch(/no release "Dai Dai \(Remix\)" for burna-boy/);
    const unknownKey = { ...config, extra: true };
    expect(configProblems(unknownKey)).toContain('unknown key "extra"');
  });

  it("knows the two shapes of a watchlist `until`, and nothing else", () => {
    expect(config.watchlist.map((w: { until: unknown }) => w.until)).toEqual([{ register: "atLeastSite" }, { site: { tier: "Gold", x: 1 } }]);
    const bad = (until: unknown) => configProblems({ ...config, watchlist: [{ ...config.watchlist[0], until }] }).join(" ");
    expect(bad({ register: "above" })).toMatch(/watchlist\[0\]: "until" must be/);
    expect(bad({ site: { tier: "Golden" } })).toMatch(/watchlist\[0\]: "until" must be/);
    expect(bad({ site: { tier: "Gold", x: 0 } })).toMatch(/watchlist\[0\]: "until" must be/);
    // The old free-text "expect" is gone: an unknown key, and "until" missing.
    const old = { ...config.watchlist[0], expect: "above 2X PLATINO" };
    delete (old as { until?: unknown }).until;
    const p = configProblems({ ...config, watchlist: [old] }).join(" ");
    expect(p).toMatch(/unknown key "expect"/);
    expect(p).toMatch(/missing "until"/);
  });

  it("validates staleAfterDays, controls and per-host cookies", () => {
    expect(Object.keys(config.staleAfterDays).filter((k) => k !== "why").every((k) => REGISTRY.some((r) => r.id === k))).toBe(true);
    expect(configProblems({ ...config, staleAfterDays: { ...config.staleAfterDays, "not-a-register": 3 } })).toContain("staleAfterDays.not-a-register: unknown adapter");
    expect(configProblems({ ...config, staleAfterDays: { ...config.staleAfterDays, nvpi: 0 } })).toContain("staleAfterDays.nvpi: must be a positive number of days");
    expect(configProblems({ ...config, controls: { mahasz: { title: "x" } } }).join(" ")).toMatch(/controls\.mahasz: needs "why" and "on"/);
    expect(configProblems({ ...config, controls: { mahasz: { title: "x", why: "y", on: "2027-01-05", when: "tests" } } }).join(" ")).toMatch(/"when" must be "daily" or "deep"/);
    const jar = (cookies: unknown) => configProblems({ ...config, hosts: { ...config.hosts, "www.radioscope.co.nz": { minGapMs: 1100, why: "t", cookies } } });
    expect(jar("run")).toEqual([]);
    expect(jar("persist").join(" ")).toMatch(/"cookies" may only be "run"/);
    expect(configProblems({ ...config, hosts: { ...config.hosts, "*": { minGapMs: 1100, cookies: "run" } } }).join(" ")).toMatch(/cookies are opt-in per host/);
  });

  it("a chart-only ruling names a real chart alias, with why, ruledBy and on", () => {
    expect(config.chartOnlyAliases.map((c: { artist: string; lead: string; title: string }) => `${c.artist} ${c.lead} ${c.title}`)).toEqual(["rema Victony Soweto"]);
    const bad = { ...config, chartOnlyAliases: [{ ...config.chartOnlyAliases[0], lead: "Tempoe" }] };
    expect(configProblems(bad).join(" ")).toMatch(/chartOnlyAliases\[0\]: live-artists\.mjs has no chart alias \(Tempoe, "Soweto"\) for rema/);
    const noWhy = { ...config, chartOnlyAliases: [{ ...config.chartOnlyAliases[0], why: "" }] };
    expect(configProblems(noWhy).join(" ")).toMatch(/chartOnlyAliases\[0\]: missing "why"/);
  });

  it("keeps RiSA and FIMI manual for good — owner ruling, 24 Sep 2026: both ask not to be read by AI tools", () => {
    for (const id of ["risa", "fimi"]) {
      const reg = REGISTRY.find((r) => r.id === id)!;
      // A plain MANUAL row: no adapter built, no hold waiting on a ruling.
      expect(reg).toMatchObject({ class: "MANUAL", built: false, step: null });
      expect((reg as { heldBy?: string }).heldBy).toBeUndefined();
      expect(reg.note).toMatch(/^permanently manual \(owner ruling, 24 Sep 2026\)/);
      expect(config.adapters[id]).toMatchObject({ enabled: false, permanent: true, ruledBy: "Paul", on: "2026-09-24" });
      expect(config.adapters[id].why).toMatch(/^PERMANENTLY MANUAL: .* asks not to be read by AI tools/);
      expect(existsSync(join(ROOT, `scripts/cert-watch/adapters/${id}.mjs`))).toBe(false);
      // Nothing enables it — not a switch, not a written permission record.
      const on = { ...config, adapters: { ...config.adapters, [id]: { ...config.adapters[id], enabled: true } } };
      expect(configProblems(on).join(" ")).toMatch(new RegExp(`adapters\\.${id}: permanently manual by owner ruling \\(Paul, 2026-09-24\\) — it can never be enabled`));
      const permitted = { ...config, adapters: { ...config.adapters, [id]: { ...config.adapters[id], permission: { from: "test", on: "2026-10-01", scope: "test" } } } };
      expect(configProblems(permitted).join(" ")).toMatch(/it can never be enabled/);
      const unsigned = { ...config, adapters: { ...config.adapters, [id]: { ...config.adapters[id], ruledBy: undefined } } };
      expect(configProblems(unsigned).join(" ")).toMatch(new RegExp(`adapters\\.${id}: a permanent ruling needs "ruledBy" and "on"`));
    }
    // BPI is still held by its robots.txt, and a written permission record
    // could enable it (SPEC §11.1) — the permanent rulings are RiSA and FIMI only.
    expect(config.adapters.bpi.permanent).toBeUndefined();
    expect(Object.entries(config.adapters).filter(([, a]) => (a as { permanent?: boolean }).permanent).map(([id]) => id)).toEqual(["risa", "fimi"]);
  });

  it("gives every host an adapter reads a politeness gap of at least 1.1 s", () => {
    for (const r of REGISTRY) for (const h of r.hosts ?? []) expect(hostGap(config, h, null), `${r.id} ${h}`).toBeGreaterThanOrEqual(1100);
  });
});

describe("no personal data", () => {
  // An email address, the pattern SPEC §9 names. NO address is allowed in any
  // scanned file — not a person's, not an organisation's (Paul, 24 Sep 2026:
  // the five office addresses once allowlisted here are redacted too, §0.5).
  // A test that needs one builds a placeholder at run time, from parts, on a
  // reserved domain (RFC 2606), so no scanned file ever holds one.
  const EMAIL = /[\w.+-]+@[\w-]+\.[\w.]+/g;

  // Every OTHER shape personal data takes on a real register page (SPEC
  // §0.4, §0.5) — written here independently of http.mjs's redactSaved, so
  // the scan is a check on it, not a copy of it:
  //   * "@" written another way: BVMI's "<name>[at]<domain>" display text,
  //     "(at)", "{at}", "(a)", an entity (&#64; / &#x40; / &commat;), %40, a
  //     JSON or JS escape — with the dot plain or obfuscated ("[dot]");
  //   * a whole address in entities or escapes (WordPress's antispambot mixes
  //     decimal and hex entities), or in full-width characters: the text is
  //     DECODED first, then searched with the plain pattern;
  //   * the bare word: "<name> at <domain>.de" (prose like "published at
  //     ifpi.dk" and URL paths like "check at riaa.com/…" are not addresses);
  //   * TYPO3's spam-protected link, whose data-mailto-token /
  //     data-mailto-vector pair carries the address encrypted — any value in
  //     them counts, whatever it decrypts to;
  //   * Cloudflare's: the hex in a data-cfemail attribute or after
  //     /cdn-cgi/l/email-protection# — any value counts; it is decoded (XOR
  //     with the first byte) only to say so in the failure;
  //   * mailto: an address that is not "(redacted)";
  //   * a phone number: after a label (Tel, Telefon, Phone, Fax, Tlf, Mobil…),
  //     in a tel: link, or in an hCard tel element;
  //   * a contact block (BVMI's "kontakt", an hCard "vcard") whose person's
  //     name or job title is not blank.
  // A value that is TypeScript template code ("${…}") is a test building a
  // placeholder at run time, not data.
  const AT = String.raw`\s*(?:\[at\]|\(at\)|\{at\}|\(a\)|&#0*64;|&#x0*40;|&commat;|%40|\\u0040|\\x40)\s*`;
  const DOT = String.raw`(?:\s*(?:\[dot\]|\(dot\)|\{dot\})\s*|\.)`;
  const OBFUSCATED = new RegExp(String.raw`[\w.%+-]+${AT}[\w-]+(?:${DOT}[\w-]+)*${DOT}[A-Za-z]{2,}`, "gi");
  const WORD_AT = /(?<![\w.@/:-])([\w.+-]+)\s+at\s+([a-z0-9-]+(?:\.[a-z0-9-]+)*\.[a-z]{2,})(?![\w/.-])/gi;
  const PROSE = new Set(["a", "an", "the", "is", "are", "was", "be", "it", "this", "that", "published", "hosted", "found", "listed", "read", "live", "online", "available", "check", "see", "look", "open", "visit", "listen", "stream", "us", "we", "you", "them", "and", "or", "not", "only", "also", "here", "there", "now"]);
  const TYPO3 = /data-mailto-(?:token|vector)\s*=\s*(["'])([^"']*)\1/gi;
  const CF_ATTR = /data-cfemail\s*=\s*(["'])([^"']*)\1/gi;
  const CF_LINK = /\/cdn-cgi\/l\/email-protection#([0-9a-f]*)/gi;
  const MAILTO = /mailto:(?!\(redacted\))([^"'\s<>`]+)/gi;
  const LABELLED_PHONE = /(?<![a-z-])(?:tel|telefon|telephone|phone|fax|telefax|tlf|mobil|mobile|handy)\.?\s*:?\s*(?:<a\b[^>]*>\s*)?(\+?\(?\d[\d\s().\/-]{4,}\d)/gi;
  const TEL_LINK = /(?<![a-z])tel:(?:\/\/)?(\+?\(?\d[\d\s().\/-]*)/gi;
  const HCARD_TEL = /class=(["'])(?:[^"']*\s)?(?:tel|phone|p-tel)(?:\s[^"']*)?\1[^>]*>\s*(\+?\(?\d[\d\s().\/-]{4,}\d)/gi;
  const CONTACT = /<([a-z][a-z0-9]*)\b[^>]*\bclass=(["'])(?:[^"']*\s)?(?:kontakt|vcard|h-card)(?:\s[^"']*)?\2[^>]*>/gi;
  const PERSON_FIELD = /class=(["'])(?:[^"']*\s)?(?:fn|name|p-name|title|p-job-title|job-title|role)(?:\s[^"']*)?\1[^>]*>([^<]*)</gi;
  const code = (v: string) => v.includes("${");
  const digits = (s: string) => s.replace(/\D/g, "").length;
  const cfDecode = (hex: string) => {
    const k = parseInt(hex.slice(0, 2), 16);
    return (hex.slice(2).match(/../g) ?? []).map((h) => String.fromCharCode(parseInt(h, 16) ^ k)).join("");
  };
  /** Entities, %-escapes, JS/JSON escapes and full-width forms, decoded. */
  const decode = (t: string) =>
    t
      .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(Math.min(parseInt(h, 16), 0x10ffff)))
      .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Math.min(parseInt(d, 10), 0x10ffff)))
      .replace(/&commat;/gi, "@")
      .replace(/&period;/gi, ".")
      .replace(/\\u00([0-9a-f]{2})|\\x([0-9a-f]{2})|%(40|2e)/gi, (_, a, b, c) => String.fromCharCode(parseInt(a ?? b ?? c, 16)))
      .normalize("NFKC");
  const fold = (a: string) =>
    decode(a)
      .replace(new RegExp(AT, "gi"), "@")
      .replace(/\s*(?:\[dot\]|\(dot\)|\{dot\})\s*/gi, ".")
      .replace(/[?#].*$/, "")
      .trim();
  /** Every personal-data-shaped thing in a text, as "<kind>" labels — never
   *  the value itself. */
  const addressesIn = (t: string): string[] => {
    const found: string[] = [];
    const plain = t.match(EMAIL) ?? [];
    for (const _ of plain) found.push("address");
    const decoded = decode(t).match(EMAIL) ?? [];
    for (let i = plain.length; i < decoded.length; i++) found.push("encoded address");
    for (const _ of decode(t).match(OBFUSCATED) ?? []) found.push("obfuscated address");
    for (const m of t.matchAll(WORD_AT)) if (!PROSE.has(m[1].toLowerCase())) found.push('"name at domain" address');
    for (const m of t.matchAll(TYPO3)) if (m[2] !== "" && !code(m[2])) found.push("TYPO3 mailto token");
    for (const m of t.matchAll(CF_ATTR)) if (m[2] !== "" && !code(m[2])) found.push(cfDecode(m[2]).includes("@") ? "Cloudflare data-cfemail address" : "Cloudflare data-cfemail value");
    for (const m of t.matchAll(CF_LINK)) if (m[1] !== "") found.push(cfDecode(m[1]).includes("@") ? "Cloudflare email-protection address" : "Cloudflare email-protection value");
    for (const m of t.matchAll(MAILTO)) if (fold(m[1]).includes("@")) found.push("mailto: address");
    return found;
  };
  const phonesIn = (t: string): string[] => {
    const found: string[] = [];
    for (const m of t.matchAll(LABELLED_PHONE)) if (digits(m[1]) >= 6) found.push("labelled phone number");
    for (const m of t.matchAll(TEL_LINK)) if (digits(m[1]) >= 1) found.push("tel: link");
    for (const m of t.matchAll(HCARD_TEL)) if (digits(m[2]) >= 6) found.push("hCard tel");
    // A contact block runs from its opening tag to the tag that closes it
    // (the same tag name, counted in and out), at most 3,000 characters.
    for (const m of t.matchAll(CONTACT)) {
      const tags = new RegExp(`<(/?)${m[1]}\\b[^>]*>`, "gi");
      let depth = 0;
      let end = Math.min(t.length, m.index! + 3000);
      for (const g of t.slice(m.index!, end).matchAll(tags)) {
        depth += g[1] ? -1 : 1;
        if (depth === 0) {
          end = m.index! + g.index! + g[0].length;
          break;
        }
      }
      for (const f of t.slice(m.index!, end).matchAll(PERSON_FIELD)) if (f[2].trim() && !code(f[2])) found.push("contact's name or job title");
    }
    return found;
  };
  /** A machine's address a page labels as one (PROMUSICAE's "IP:" and
   *  "EX-IP:"), unless it is a documentation-range placeholder (RFC 5737). */
  const LABELLED_IP = /\b(?:EX-)?IP\s*[:=]\s*(\d{1,3}(?:\.\d{1,3}){3})/g;
  const TEST_NET = /^(?:192\.0\.2|198\.51\.100|203\.0\.113)\./;

  const walk = (dir: string): string[] =>
    readdirSync(dir).flatMap((f) => {
      const p = join(dir, f);
      return statSync(p).isDirectory() ? walk(p) : [p];
    });
  // .gz fixtures are read decompressed: the scan sees what a parser sees.
  // UTF-8 when the bytes are UTF-8 (a full-width "@" is then one character),
  // latin-1 otherwise (Ifpi Sverige's and swisscharts' pages).
  const text = (p: string) => {
    const b = p.endsWith(".gz") ? gunzipSync(readFileSync(p)) : readFileSync(p);
    try {
      return new TextDecoder("utf-8", { fatal: true }).decode(b);
    } catch {
      return b.toString("latin1");
    }
  };
  const scanned = () => [
    ...walk(join(ROOT, "scripts/cert-watch")),
    ...walk(FIX),
    ...walk(join(ROOT, "docs/cert-watcher")),
    join(ROOT, ".github/workflows/cert-watch.yml"),
    ...readdirSync(join(ROOT, "tests"))
      .filter((f) => /^certWatch.*\.ts$/.test(f))
      .map((f) => join(ROOT, "tests", f)),
  ];
  // Placeholders, built from parts at run time on reserved names: RFC 2606
  // domains, obviously fake numbers.
  const addr = (local: string) => [local, "example.invalid"].join("@");
  const FAKE_PHONE = "+00 (0)00 000 00 00";
  const FAKE_TEL = "+0000000000";
  const PERSON = ["Placeholder", "Person"].join(" ");

  // BVMI's contact block, as the 23 BVMI fixtures carry it after the clean-up
  // (24 Sep 2026): both contacts' name, job title and direct line blanked,
  // their addresses redacted.
  const KONTAKT_SAVED =
    '<div class="kontakt row"> <div class="data col-sm-8"> <div class="name"><span class="fn"></span></div> <div class="title"></div> <div> <div class="tel phone"></div> </div> <div><a itemprop="email" class="email" href="#" data-mailto-token="" data-mailto-vector="">(redacted)</a></div>';
  // The same block as served, with placeholders where the real values were
  // (LABELLED EDIT). The token is the placeholder "mailto:" link shifted the
  // way TYPO3 shifts it (each character within its range: "+"…":", "@"…"Z",
  // "a"…"z").
  const shift = (s: string, k: number) =>
    s.replace(/[\x2B-\x3A\x40-\x5A\x61-\x7A]/g, (c) => {
      const n = c.charCodeAt(0);
      const [lo, hi] = n <= 0x3a ? [0x2b, 0x3a] : n <= 0x5a ? [0x40, 0x5a] : [0x61, 0x7a];
      return String.fromCharCode(lo + ((n - lo + k) % (hi - lo + 1)));
    });
  it("the User-Agent names the site, not a person", () => {
    expect(USER_AGENT).toBe("burnaboystats-cert-watch/1.0 (+https://burnaboystats.com/contact)");
    expect(USER_AGENT.match(EMAIL)).toBeNull();
    expect(config.userAgent).toBe(USER_AGENT);
  });

  it("no file under scripts/cert-watch, the fixtures (.gz included), docs/cert-watcher, the workflow or these tests holds an address in any shape, a phone number or a contact's name — nothing allowlisted", () => {
    const files = scanned();
    expect(files.length).toBeGreaterThan(80);
    expect(files.filter((f) => f.endsWith(".gz")).length).toBeGreaterThan(100);
    const found: string[] = [];
    for (const f of files) {
      const t = text(f);
      for (const kind of [...addressesIn(t), ...phonesIn(t)]) found.push(`${relative(ROOT, f)}: ${kind}`);
    }
    expect(found).toEqual([]);
  });

  it("no fixture holds a machine's address (PROMUSICAE's footer, BVMI's X-Remote-Addr)", () => {
    const found: string[] = [];
    for (const f of walk(FIX)) {
      const t = text(f);
      for (const m of t.matchAll(LABELLED_IP)) if (!TEST_NET.test(m[1])) found.push(`${relative(ROOT, f)}: a labelled IP address`);
      if (/^x-(?:remote-addr|forwarded-for|real-ip|client-ip):/im.test(t)) found.push(`${relative(ROOT, f)}: a machine-address header`);
    }
    expect(found).toEqual([]);
  });

  it("the scan fires on each shape (negative controls, on placeholders)", () => {
    const full = String.fromCharCode(0xff20);
    const ent = (s: string) => [...s].map((c, i) => (i % 2 ? `&#${c.charCodeAt(0)};` : `&#x${c.charCodeAt(0).toString(16)};`)).join("");
    const cf = (s: string) => "5a" + [...s].map((c) => (c.charCodeAt(0) ^ 0x5a).toString(16).padStart(2, "0")).join("");
    expect(addressesIn(addr("someone"))).toEqual(["address"]);
    expect(addressesIn(`<b>${ent(addr("someone"))}</b>`)).toEqual(["encoded address"]);
    expect(addressesIn(`someone${full}example.invalid`)).toEqual(["encoded address"]);
    const joined = (sep: string) => ["someone", "example.invalid"].join(sep);
    expect(addressesIn(joined("&commat;"))).toContain("encoded address");
    expect(addressesIn(`"${joined("\\x40")}"`)).toContain("encoded address");
    expect(addressesIn(joined("(a)"))).toEqual(["obfuscated address"]);
    expect(addressesIn(`<a data-cfemail="${cf(addr("someone"))}">`)).toEqual(["Cloudflare data-cfemail address"]);
    expect(addressesIn(`<a href="/cdn-cgi/l/email-protection#${cf(addr("someone"))}">`)).toEqual(["Cloudflare email-protection address"]);
    expect(phonesIn(`Tel: ${FAKE_PHONE}`)).toEqual(["labelled phone number"]);
    expect(phonesIn(`<a href="tel:${FAKE_TEL}">x</a>`)).toContain("tel: link");
    expect(phonesIn(`<div class="tel phone">${FAKE_PHONE}</div>`)).toEqual(["hCard tel"]);
    expect(phonesIn(`<div class="kontakt row"><span class="fn">${PERSON}</span></div>`)).toEqual(["contact's name or job title"]);
    // Not personal data: prose and URL paths with " at ", a record label
    // named FAX (Ifpi Sverige's "Märke: FAX RECORDS/EPIC"), Ifpi Sverige's
    // "Titel:" field, a year after "Fax", a contact block with its person
    // blanked (BVMI's, as committed).
    for (const plain of ["published at ifpi.dk", "check at riaa.com/gold-platinum", "Märke: FAX RECORDS/EPIC", "Titel: WATER", "Fax 2026", KONTAKT_SAVED]) {
      expect([...addressesIn(plain), ...phonesIn(plain)], plain).toEqual([]);
    }
  });

  it("--save-raw redacts PROMUSICAE's footer addresses — on the real saved page", () => {
    // The saved week-38 page (24 Sep 2026) carries its footer already
    // redacted: "IP: (redacted)<br/>EX-IP: (redacted)". LABELLED EDIT:
    // documentation-range addresses (RFC 5737) put back where the real ones
    // were — the real ones are exactly what must never be written to a file.
    const page = fixture("promusicae/run-2026-09-24/week-2026-38-p1.html.gz", "latin1");
    const footer = "IP: (redacted)<br/>EX-IP: (redacted)<br/>Frontal: Prod 1";
    expect(page).toContain(footer);
    const served = page.replace(footer, "IP: 198.51.100.7<br/>EX-IP: 192.0.2.10<br/>Frontal: Prod 1");
    expect([...served.matchAll(LABELLED_IP)].map((m) => m[1])).toEqual(["198.51.100.7", "192.0.2.10"]);
    const saved = redactSaved(Buffer.from(served, "latin1")).toString("latin1");
    expect(saved).toBe(page); // byte for byte the committed fixture
    // Latin-1 bytes elsewhere in a body survive the rewrite untouched.
    const latin = Buffer.from("Ljudbärare EX-IP: 192.0.2.10", "latin1");
    expect(redactSaved(latin).toString("latin1")).toBe("Ljudbärare EX-IP: (redacted)");
  });

  const VECTOR = 10;
  const kontaktServed = (local: string, name: string, title: string) =>
    `<div class="kontakt row"> <div class="data col-sm-8"> <div class="name"><span class="fn">${name}</span></div> <div class="title">${title}</div> <div> <div class="tel phone">${FAKE_PHONE}</div> </div> <div><a itemprop="email" class="email" href="#" data-mailto-token="${shift(`mailto:${addr(local)}`, 1)}" data-mailto-vector="${VECTOR}">${addr(local).replace("@", "[at]")}</a></div>`;
  const bvmiServed = (page: string) => {
    expect(page.split(KONTAKT_SAVED)).toHaveLength(3); // two contacts, both redacted
    return page.replace(KONTAKT_SAVED, kontaktServed("jane.doe", PERSON, `${PERSON}'s job title`)).replace(KONTAKT_SAVED, kontaktServed("office", `${PERSON} Two`, "Placeholder role"));
  };

  it("--save-raw redacts BVMI's contact block — addresses ([at] text, TYPO3 token pair), names, job titles and direct lines — on the real saved page", () => {
    const page = fixture("bvmi/name-search-empty-2026-09-24.html", "latin1");
    const served = bvmiServed(page);
    // The scan fires on each shape the real page served…
    expect(addressesIn(served).sort()).toEqual(["TYPO3 mailto token", "TYPO3 mailto token", "TYPO3 mailto token", "TYPO3 mailto token", "obfuscated address", "obfuscated address"]);
    expect(phonesIn(served).sort()).toEqual(["contact's name or job title", "contact's name or job title", "contact's name or job title", "contact's name or job title", "hCard tel", "hCard tel"]);
    // …and --save-raw gives back the committed fixture, byte for byte.
    const saved = redactSaved(Buffer.from(served, "latin1")).toString("latin1");
    expect(saved).toBe(page);
    expect([...addressesIn(saved), ...phonesIn(saved)]).toEqual([]);
  });

  it("the BVMI parser reads the redacted page exactly as it read the page as served — the same 20 rows", () => {
    const page = fixture("bvmi/run-2026-09-24/2026-p1.html.gz", "latin1");
    const served = bvmiServed(page);
    const saved = redactSaved(Buffer.from(served, "latin1")).toString("latin1");
    expect(saved).toBe(page);
    const rows = bvmiParseRows(page);
    expect(rows).toHaveLength(20);
    expect(bvmiParseRows(served)).toEqual(rows);
    expect(bvmiSelectedYear(served)).toBe(bvmiSelectedYear(page));
  });

  it("--save-raw blanks Sverigetopplistan's footer phone and address — on the real saved page; the search parser reads the same rows", () => {
    const page = fixture("sverige/stl-search-tyla.html");
    const footer = '<p class="small">Tel: <a href="tel:"></a><br />E-post: <a href="mailto:(redacted)">(redacted)</a></p>';
    expect(page).toContain(footer);
    // LABELLED EDIT: placeholders where the office's number and address were.
    const served = page.replace(footer, `<p class="small">Tel: <a href="tel:${FAKE_TEL}">${FAKE_PHONE}</a><br />E-post: <a href="mailto:${addr("office")}">${addr("office")}</a></p>`);
    expect([...addressesIn(served), ...phonesIn(served)].sort()).toEqual(["address", "address", "labelled phone number", "mailto: address", "tel: link"]);
    const saved = redactSaved(Buffer.from(served, "utf8")).toString("utf8");
    expect(saved).toBe(page);
    expect(sverigeParseSearch(page).items).toHaveLength(8);
    expect(sverigeParseSearch(served)).toEqual(sverigeParseSearch(page));
  });

  it("--save-raw redacts Grammotex's cover-report links on a real Ifpi Sverige record; the record parser reads the same record", () => {
    const page = fixture("sverige/record-15311162.html", "latin1");
    const links = page.match(/mailto:\(redacted\)/g) ?? [];
    expect(links).toHaveLength(3);
    // LABELLED EDIT: a placeholder where each address was (the link texts too).
    const served = page.replace(/mailto:\(redacted\)/g, `mailto:${addr("covers")}`).replace(">(redacted)</a>", `>${addr("covers")}</a>`);
    expect(addressesIn(served).filter((k) => k === "mailto: address")).toHaveLength(3);
    const saved = redactSaved(Buffer.from(served, "latin1")).toString("latin1");
    expect(saved).toBe(page);
    expect(sverigeParseRecord(served)).toEqual(sverigeParseRecord(page));
    expect(page).toContain("Märke:"); // latin-1, as served
  });

  it("--save-raw blanks ČNS IFPI's header and footer contacts (tel: links, an entity-encoded mailto:) — on the real saved page; the chart parser reads the same rows", () => {
    const page = fixture("cns/cz-w3036.html.gz");
    const head = '<a href="tel:"></a><br>\n\t\t\t\t\t\t\t\t<a href="mailto:(redacted)">(redacted)</a>';
    const foot = '<a href="mailto:(redacted)" class="">(redacted)</a><br>\n\t\t\t\t\t<a href="tel:" class=""></a>';
    expect(page).toContain(head);
    expect(page).toContain(foot);
    // LABELLED EDIT: placeholders as the page wrote them — the footer's
    // mailto: with its "@" as the entity &#64;.
    const served = page
      .replace(head, `<a href="tel:${FAKE_TEL.slice(1)}">${FAKE_PHONE.slice(1)}</a><br>\n\t\t\t\t\t\t\t\t<a href="mailto:${addr("office")}">${addr("office")}</a>`)
      .replace(foot, `<a href="mailto:${addr("office").replace("@", "&#64;")}" class="">${addr("office")}</a><br>\n\t\t\t\t\t<a href="tel:${FAKE_TEL}" class="">${FAKE_PHONE}</a>`);
    expect(phonesIn(served).filter((k) => k === "tel: link")).toHaveLength(2);
    expect(addressesIn(served)).toContain("encoded address");
    const saved = redactSaved(Buffer.from(served, "utf8")).toString("utf8");
    expect(saved).toBe(page);
    const opts = { chart: 30, week: "36. týden 2026" };
    expect(cnsParseChart(served, opts)).toEqual(cnsParseChart(page, opts));
  });

  it("--save-raw redacts IFPI Danmark's footer address — on the real saved page; the page parser reads the same rows", () => {
    const page = fixture("danmark/page0.html.gz");
    expect(page).toContain("<br><span>(redacted)</span>");
    expect(page).toContain('href="mailto:(redacted)">Kontakt os</a>');
    // LABELLED EDIT: a placeholder where the office's address was.
    const served = page.replace("<br><span>(redacted)</span>", `<br><span>${addr("office")}</span>`).replace('href="mailto:(redacted)">Kontakt os</a>', `href="mailto:${addr("office")}">Kontakt os</a>`);
    const saved = redactSaved(Buffer.from(served, "utf8")).toString("utf8");
    expect(saved).toBe(page);
    const rows = danmarkParsePage(page);
    expect(rows.length).toBeGreaterThan(0);
    expect(danmarkParsePage(served)).toEqual(rows);
  });

  it("--save-raw redacts every other shape an address takes (placeholders on a reserved domain)", () => {
    const at = (l: string) => [l, "example.invalid"];
    const full = String.fromCharCode(0xff20);
    const small = String.fromCharCode(0xfe6b);
    // WordPress antispambot: each character a decimal or hex entity, mixed.
    const ent = (s: string) => [...s].map((c, i) => (i % 2 ? `&#${c.charCodeAt(0)};` : `&#x${c.charCodeAt(0).toString(16)};`)).join("");
    // Cloudflare: the address XOR-ed with a key byte, as hex, key first.
    const cf = (s: string, key = 0x42) => key.toString(16).padStart(2, "0") + [...s].map((c) => (c.charCodeAt(0) ^ key).toString(16).padStart(2, "0")).join("");
    const vcard = (name: string, job: string, after: string) =>
      `<div class="vcard"><span class="fn">${name}</span><img alt="${name}"><div class="title">${job}</div></div><div class="title">${after}</div>`;
    const cases: [string, string][] = [
      [`Kontakt: ${at("info").join("(at)")}`, "Kontakt: (redacted)"],
      [`Kontakt: ${at("info").join(" [at] ").replace(".", " [dot] ")}`, "Kontakt: (redacted)"],
      [`<b>${at("press").join("&#64;")}</b>`, "<b>(redacted)</b>"],
      [`<b>${at("press").join("&#x40;")}</b>`, "<b>(redacted)</b>"],
      [`?to=${at("press").join("%40")}&x=1`, "?to=(redacted)&x=1"],
      [`"email":"${at("press").join("\\u0040")}"`, '"email":"(redacted)"'],
      [`write to ${at("jane.doe").join(" at ")} today`, "write to (redacted) today"],
      [`<p>${at("jane.doe").join("@")}</p>`, "<p>(redacted)</p>"],
      [`<a href="MAILTO:${at("jane.doe").join("@")}">`, '<a href="MAILTO:(redacted)">'],
      // The review's gaps (24 Sep 2026):
      [`<a href="${ent(`mailto:${addr("jane.doe")}`)}">${ent(addr("jane.doe"))}</a>`, `<a href="${ent("mailto:")}(redacted)">(redacted)</a>`],
      [`<b>${["j&#97;ne.doe", "example.invalid"].join("@")}</b>`, "<b>(redacted)</b>"],
      [`<b>${at("press").join("&commat;")}</b>`, "<b>(redacted)</b>"],
      [`<b>${["press", "example&period;invalid"].join("&commat;")}</b>`, "<b>(redacted)</b>"],
      [`<a class="__cf_email__" href="#" data-cfemail="${cf(addr("jane.doe"))}">[email&#160;protected]</a>`, '<a class="__cf_email__" href="#" data-cfemail="">[email&#160;protected]</a>'],
      [`<a href="/cdn-cgi/l/email-protection#${cf(addr("jane.doe"), 0x9d)}">x</a>`, '<a href="/cdn-cgi/l/email-protection#">x</a>'],
      [`<p>${at("jane").join(full)}</p>`, "<p>(redacted)</p>"],
      [`<p>${at("jane").join(small)}</p>`, "<p>(redacted)</p>"],
      [`var a = "${at("jane").join("\\x40")}";`, 'var a = "(redacted)";'],
      [`Kontakt: ${at("info").join("(a)")}`, "Kontakt: (redacted)"],
      // Phones: after a label, in a tel: link and its text, in an hCard tel.
      [`Tel.: ${FAKE_PHONE} · Fax ${FAKE_PHONE}`, "Tel.:  · Fax "],
      [`<a href="tel:${FAKE_TEL}">${FAKE_PHONE}</a>`, '<a href="tel:"></a>'],
      [`<span class="p-tel">${FAKE_PHONE}</span>`, '<span class="p-tel"></span>'],
      // A contact block's person: name, job title, photo caption; nothing after the block.
      [vcard(PERSON, `${PERSON}'s job`, "Kept"), vcard("", "", "Kept")],
    ];
    for (const [served, want] of cases) {
      expect([...addressesIn(served), ...phonesIn(served)].length, served).toBeGreaterThan(0);
      const saved = redactSaved(Buffer.from(served, "utf8")).toString("utf8");
      expect(saved, served).toBe(want);
      expect([...addressesIn(saved), ...phonesIn(saved)], saved).toEqual([]);
    }
    // A Cloudflare value that is not an address is left alone (it is not personal data).
    const notAddr = `<a data-cfemail="${cf("not an address")}">`;
    expect(redactSaved(Buffer.from(notAddr)).toString()).toBe(notAddr);
    // Not personal data: prose and URL paths with " at ", a density-suffixed
    // file name, a package pin, a record label called FAX and a year after
    // it, the "Titel:" field of a real Ifpi Sverige record. And a page with
    // nothing to redact is returned untouched (the same buffer).
    for (const plain of ["published at ifpi.dk", "check at riaa.com/gold-platinum", ["logo", "2x.png"].join("@"), ["pkg", "1.2.3"].join("@"), "Märke: FAX RECORDS/EPIC", "FAX RECORDS 2016", "Titel: WATER", "Hotel 1234567"]) {
      expect(redactSaved(Buffer.from(plain, "latin1")).toString("latin1"), plain).toBe(plain);
    }
    const none = Buffer.from("<p>no address</p>");
    expect(redactSaved(none)).toBe(none);
  });

  it("--save-raw redacts a mailto: address — RadioScope's social-links footer, on the real saved page", () => {
    // The saved RadioScope singles page (24 Sep 2026) carries its footer's
    // Email link already redacted: href="mailto:(redacted)". LABELLED EDIT: a
    // placeholder address put back where the real one was — assembled here
    // from parts on a reserved domain (RFC 2606), so no address is written in
    // this file or any other.
    const page = fixture("rmnz/run-2026-09-24/singles-page.html.gz");
    expect(page.match(/href="mailto:[^"]*"/g)).toEqual(['href="mailto:(redacted)"']);
    const placeholder = addr("someone");
    const served = page.replace('href="mailto:(redacted)"', `href="mailto:${placeholder}?subject=hello"`);
    expect(served).toContain(placeholder);
    const saved = redactSaved(Buffer.from(served, "utf8")).toString("utf8");
    expect(saved).toBe(page); // byte for byte the committed fixture
    expect(saved).not.toContain(placeholder);
    expect(saved.match(EMAIL)).toBeNull();
  });

  it("every committed fixture is already redacted: a second pass changes nothing", () => {
    const changed: string[] = [];
    for (const f of walk(FIX)) {
      const b = f.endsWith(".gz") ? gunzipSync(readFileSync(f)) : readFileSync(f);
      if (!redactSaved(b).equals(b)) changed.push(relative(ROOT, f));
    }
    expect(changed).toEqual([]);
  });
});

describe("fixtures", () => {
  const prov: { file: string; source: string; fetched: string; url: string; note: string; replay?: boolean }[] = JSON.parse(
    readFileSync(join(FIX, "PROVENANCE.json"), "utf8")
  );
  const walk = (dir: string): string[] =>
    readdirSync(dir).flatMap((f) => {
      const p = join(dir, f);
      return statSync(p).isDirectory() ? walk(p) : [p];
    });

  it("every fixture has a PROVENANCE entry, and every entry a file", () => {
    const files = walk(FIX)
      .map((p) => relative(FIX, p))
      .filter((f) => f !== "PROVENANCE.json")
      .sort();
    const listed = prov.map((e) => e.file).sort();
    expect(files.filter((f) => !listed.includes(f))).toEqual([]);
    expect(listed.filter((f) => !files.includes(f))).toEqual([]);
  });

  it("every entry says where, when and what", () => {
    for (const e of prov) {
      expect(e.source, e.file).toBeTruthy();
      expect(Number.isNaN(Date.parse(e.fetched)), e.file).toBe(false);
      expect(e.url, e.file).toBeTruthy();
      expect(e.note, e.file).toBeTruthy();
    }
  });

  it("every replayed response was fetched by the watcher's own honest User-Agent", () => {
    for (const e of prov.filter((x) => x.replay)) expect((e as { userAgent?: string }).userAgent, e.file).toBe(USER_AGENT);
  });
});

describe("register-specific strings stay in their adapter", () => {
  // The old stats-monitor hook hardcodes FIMI's "Nessuna certificazione" in a
  // generic helper (scripts/stats-lib.mjs, certWatchStatus). It must never
  // appear in the watcher's code: FIMI is permanently manual (owner ruling,
  // SPEC §0.4), so no adapter will ever carry it.
  const REAL = "Nessuna certificazione";

  it("is proved on the real line the old hook shipped", () => {
    expect(readFileSync(join(ROOT, "scripts/stats-lib.mjs"), "utf8")).toContain(REAL);
  });

  it("never appears in match, report, state, site or the runner", () => {
    for (const f of ["match.mjs", "report.mjs", "state.mjs", "site.mjs", "index.mjs", "http.mjs"]) {
      expect(readFileSync(join(ROOT, "scripts/cert-watch", f), "utf8"), f).not.toContain(REAL);
    }
  });
});

