// Cover art for the board's coverless rows — audit, propose, apply.
//
// WHY A SCRIPT AND NOT A SWEEP BY HAND. On 23 Sep 2026 a sweep found 211 rows
// across thirteen artists rendering with no artwork, nearly all of them chart
// entries: the board's chart tables carry far more titles than its plaque
// tables, and the original cover fill never reached them.
//
// The first attempt fed the list to agents by hand and 131 of the 218 titles
// typed out were not rows in this repo at all. So the list is never typed
// here: --audit reads it out of app/data/afrobeats.ts, and --apply writes back
// only to lines it found itself.
//
// THE MATCHING RULE IS THE WHOLE JOB (app/lib/covers.ts has said so since the
// first fill): a title match alone is worthless. Searching "Wizkid System"
// returns Dave's record (right — Wizkid features on it), then "Wicked and
// Bonny", "The System" and "Arc System Works". Three of those four would put
// the wrong picture on a page built to be cited. So a proposal is only made
// when the normalised title matches EXACTLY and the artist is named in the
// track's own credits or its contributor list, and never when the release
// looks like karaoke, a tribute, a chiptune or a compilation.
//
// Anything short of that is left for a person. An uncovered row costs a
// monogram; a wrong sleeve is a false statement about a record.
//
//   node scripts/cover-fill.mjs --audit
//   node scripts/cover-fill.mjs --propose [--artist wizkid] > /tmp/proposals.json
//   node scripts/cover-fill.mjs --apply /tmp/proposals.json [--dry-run]

import { readFileSync, writeFileSync } from "node:fs";
import { execFileSync } from "node:child_process";

const DATA = "app/data/afrobeats.ts";
const args = process.argv.slice(2);
const KNOWN = new Set(["--audit", "--propose", "--apply", "--dry-run", "--artist"]);
const bad = args.filter((a) => a.startsWith("--") && !KNOWN.has(a));
if (bad.length) {
  console.error(`unknown flag: ${bad.join(" ")}`);
  process.exit(2);
}
const flag = (name) => {
  const i = args.indexOf(name);
  return i >= 0 ? args[i + 1] : null;
};

/** How each artist's name appears in a credit. Matching is case-insensitive
 *  and substring-based against these, so "WizKid" and "Wizkid" both pass.
 *  BNXN's former name Buju is deliberately absent: "Buju Banton" is a
 *  different, much older artist and the substring would catch him. */
const NAMES = {
  "burna-boy": ["burna boy"],
  wizkid: ["wizkid"],
  davido: ["davido"],
  rema: ["rema"],
  tems: ["tems"],
  tyla: ["tyla"],
  asake: ["asake"],
  "ayra-starr": ["ayra starr"],
  "omah-lay": ["omah lay"],
  "seyi-vibez": ["seyi vibez"],
  victony: ["victony"],
  "fireboy-dml": ["fireboy dml", "fireboy"],
  ckay: ["ckay"],
  olamide: ["olamide"],
  "black-sherif": ["black sherif"],
  bnxn: ["bnxn"],
};

const JUNK = /karaoke|tribute|8.?bit|chiptune|instrumental|made famous by|made popular by|originally performed|cover version|ringtone|lullaby|piano version|workout mix|sped up|slowed/i;

const norm = (s) =>
  s
    .toLowerCase()
    .replace(/\((?:feat|ft|with)\.?[^)]*\)/g, " ")
    .replace(/\[(?:feat|ft|with)\.?[^\]]*\]/g, " ")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();

/** The board's chart rows often carry the whole credit in the title —
 *  "Activate (Stonebwoy ft. Davido)", "Ke Star (Remix) (Focalistic & Davido ft.
 *  Virgo Deep)" — because that is how the chart printed it. Deezer calls the
 *  record "Activate". Only the LAST parenthetical is dropped, and only when it
 *  reads like a credit, so "Dada (Remix) (Young Jonn ft. Davido)" keeps its
 *  (Remix) and "One Love (Bob Marley: One Love)" keeps everything.
 *
 *  24 Davido rows and a handful of Wizkid's sat unresolved for want of this. */
const stripCredit = (t) => t.replace(/\s*\(([^()]*(?:\bft\.?\b|\bfeat\.?\b|&)[^()]*)\)\s*$/i, "").trim();

/** Every spelling a row's title might match under. */
const variants = (t) => [...new Set([norm(t), norm(stripCredit(t))])].filter(Boolean);

// ── the audit: read the rows out of the data ───────────────────────────────
function audit() {
  const src = readFileSync(DATA, "utf8").split("\n");
  const rows = [];
  let artist = null;
  let section = null;
  for (let i = 0; i < src.length; i++) {
    const line = src[i];
    const slug = line.match(/^\s*slug: "([a-z-]+)",/);
    if (slug) artist = slug[1];
    if (/^\s*releases: \[/.test(line)) section = "certs";
    if (/^\s*charts: \[/.test(line)) section = "charts";
    const m = line.match(/^\s*\{ title: "((?:[^"\\]|\\.)*)", kind: "([^"]+)",/);
    if (!m || !artist || !section) continue;
    if (line.includes('cover: "')) continue;
    rows.push({ artist, title: m[1].replace(/\\"/g, '"'), kind: m[2], section, line: i + 1 });
  }
  return rows;
}

// ── Deezer ─────────────────────────────────────────────────────────────────
const get = (url) => {
  // curl, not fetch: HTTPS from node's fetch is fine here, but curl is what
  // the rest of this repo's tooling uses and what was proven against Deezer.
  const out = execFileSync("curl", ["-s", "--max-time", "25", url], { encoding: "utf8", maxBuffer: 8 << 20 });
  try {
    return JSON.parse(out);
  } catch {
    return null;
  }
};
const sleep = (ms) => execFileSync("sleep", [String(ms / 1000)]);

// d41d8cd98f00b204e9800998ecf8427e is the MD5 of the empty string, and Deezer
// serves it as "no cover". A release with no art answers 302 TO that hash and
// the redirect lands on a grey placeholder ~10KB in size — so following
// redirects and checking the byte count is not enough to catch it. Wizkid's
// "System" reached the proposal stage this way, and would have shipped a blank
// grey square as Dave's album sleeve.
const NO_COVER = "d41d8cd98f00b204e9800998ecf8427e";

/** Sleeves Deezer serves inconsistently — some edge nodes return the art, some
 *  302 to the placeholder above. tests/afrobeats.test.ts pins the one live
 *  case (Dave's "We're All Alone In This Together", which Wizkid's "System"
 *  would point at) after an earlier pass removed it on purpose. A cover that
 *  renders for some readers and as a grey square for others is worse than the
 *  monogram, so it is never proposed again. */
const UNRELIABLE = new Set(["fbf2218aa7d8262098c19097bd10cb21"]);

const coverUrl = (album) => {
  const m = (album?.cover_big || album?.cover_medium || "").match(/\/cover\/([0-9a-f]+)\//);
  if (!m || m[1] === NO_COVER || UNRELIABLE.has(m[1])) return null;
  const url = `https://cdn-images.dzcdn.net/images/cover/${m[1]}/500x500-000000-80-0-0.jpg`;
  // Ask the CDN, without following redirects: a 200 is art, a 302 is the
  // placeholder wearing this release's hash.
  // Twice, because one 302 can be the CDN under load rather than a missing
  // sleeve: Dave's "We're All Alone In This Together" answered 302 inside an
  // 8-way parallel check and 200/38,270 bytes every time since. A single try
  // would have dropped a real cover.
  for (const attempt of [1, 2]) {
    try {
      const head = execFileSync("curl", ["-s", "-o", "/dev/null", "-w", "%{http_code} %{size_download}", "--max-time", "20", url], {
        encoding: "utf8",
      });
      const [code, size] = head.trim().split(" ");
      if (code === "200" && Number(size) >= 5000) return url;
    } catch {
      /* retried below */
    }
    if (attempt === 1) execFileSync("sleep", ["1"]);
  }
  return null;
};

function credits(trackId) {
  const t = get(`https://api.deezer.com/track/${trackId}`);
  if (!t) return [];
  return [t.artist?.name, ...(t.contributors ?? []).map((c) => c.name)].filter(Boolean);
}

function propose(row) {
  const names = NAMES[row.artist] ?? [];
  const wanted = variants(row.title);
  const isAlbum = /Album/i.test(row.kind);
  const q = encodeURIComponent(`${names[0]} ${stripCredit(row.title)}`);
  const res = isAlbum
    ? get(`https://api.deezer.com/search/album?q=${q}&limit=25`)
    : get(`https://api.deezer.com/search?q=${q}&limit=25`);
  const data = res?.data ?? [];
  const out = [];
  for (const hit of data) {
    const album = isAlbum ? hit : hit.album;
    const title = isAlbum ? hit.title : hit.title;
    if (!wanted.includes(norm(title))) continue;
    const who = [hit.artist?.name, album?.title].filter(Boolean).join(" ");
    if (JUNK.test(who)) continue;
    let creditNames = [hit.artist?.name].filter(Boolean);
    let matched = names.some((n) => creditNames.join(" ").toLowerCase().includes(n));
    if (!matched && !isAlbum) {
      creditNames = credits(hit.id);
      matched = names.some((n) => creditNames.join(" ").toLowerCase().includes(n));
    }
    if (!matched) continue;
    if (JUNK.test(creditNames.join(" "))) continue;
    const url = coverUrl(album);
    if (!url) continue;
    out.push({
      url,
      deezerId: String(hit.id),
      albumId: String(album?.id ?? ""),
      matchedTitle: title,
      release: album?.title ?? "",
      creditedTo: hit.artist?.name ?? "",
      contributors: creditNames.join(", "),
      lead: names.some((n) => (hit.artist?.name ?? "").toLowerCase().includes(n)),
    });
  }
  // One sleeve per row. Prefer the artist's OWN release over a guest slot, then
  // the first Deezer returned (its own relevance order).
  const uniq = [];
  for (const o of out) if (!uniq.some((u) => u.url === o.url)) uniq.push(o);
  uniq.sort((a, b) => Number(b.lead) - Number(a.lead));
  const pick = uniq[0];
  if (!pick) return { ...row, status: "none", why: "no Deezer release matched the title with this artist in the credits" };
  // Two different sleeves both qualify: a person decides, not this script.
  const rival = uniq.find((u) => u.url !== pick.url);
  return {
    ...row,
    status: rival ? "ambiguous" : "ok",
    ...pick,
    ...(rival ? { rival: { url: rival.url, release: rival.release, creditedTo: rival.creditedTo } } : {}),
  };
}

// ── apply ──────────────────────────────────────────────────────────────────
function apply(file, dry) {
  const proposals = JSON.parse(readFileSync(file, "utf8")).filter((p) => p.status === "ok" && p.url);
  const src = readFileSync(DATA, "utf8").split("\n");
  const rows = audit();
  let n = 0;
  const misses = [];
  for (const p of proposals) {
    const row = rows.find((r) => r.artist === p.artist && r.title === p.title && r.kind === p.kind && r.section === p.section);
    if (!row) {
      misses.push(`${p.artist} — ${p.title} (${p.kind}): no coverless row by that name; not written`);
      continue;
    }
    const i = row.line - 1;
    if (src[i].includes('cover: "')) {
      misses.push(`${p.artist} — ${p.title}: the line already carries a cover; not overwritten`);
      continue;
    }
    src[i] = src[i].replace(/^(\s*\{ title: "(?:[^"\\]|\\.)*", kind: "[^"]+",)/, `$1 cover: "${p.url}",`);
    n++;
  }
  for (const m of misses) console.error(`  skipped: ${m}`);
  if (dry) {
    console.log(`--dry-run: ${n} row(s) would gain a cover, ${misses.length} skipped.`);
    return;
  }
  writeFileSync(DATA, src.join("\n"));
  console.log(`${n} row(s) gained a cover, ${misses.length} skipped.`);
}

// ── main ───────────────────────────────────────────────────────────────────
if (args.includes("--audit")) {
  const rows = audit();
  const by = {};
  for (const r of rows) by[r.artist] = (by[r.artist] ?? 0) + 1;
  for (const r of rows) console.log(`${r.artist}\t${r.section}:${r.kind}\t${r.title}\t(line ${r.line})`);
  console.error(`\n${rows.length} coverless row(s): ${JSON.stringify(by)}`);
} else if (args.includes("--propose")) {
  const only = flag("--artist");
  const rows = audit().filter((r) => !only || r.artist === only);
  const out = [];
  for (const [i, row] of rows.entries()) {
    process.stderr.write(`\r${i + 1}/${rows.length} ${row.artist} — ${row.title}`.padEnd(78).slice(0, 78));
    out.push(propose(row));
    sleep(120);
  }
  process.stderr.write("\n");
  const tally = out.reduce((m, o) => ({ ...m, [o.status]: (m[o.status] ?? 0) + 1 }), {});
  console.error(JSON.stringify(tally));
  console.log(JSON.stringify(out, null, 1));
} else if (args.includes("--apply")) {
  const file = args.find((a) => !a.startsWith("--") );
  if (!file) {
    console.error("usage: node scripts/cover-fill.mjs --apply <proposals.json> [--dry-run]");
    process.exit(2);
  }
  apply(file, args.includes("--dry-run"));
} else {
  console.error("usage: --audit | --propose [--artist <slug>] | --apply <file> [--dry-run]");
  process.exit(2);
}
