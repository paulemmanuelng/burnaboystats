// The Saturday digest sender. Run through tsx so it can import the site's own
// data and the same selection/template code the tests cover:
//
//   npx tsx scripts/send-digest.mjs --dry-run              # print, send nothing
//   npx tsx scripts/send-digest.mjs --test you@example.com # one real email, to you
//   npx tsx scripts/send-digest.mjs                        # the broadcast, to the audience
//   npx tsx scripts/send-digest.mjs --scheduled            # the same, but only at 18:00 London
//
// --scheduled is what the workflow's two crons pass (17:00 and 18:00 UTC): the
// one that lands at 18:00 in Europe/London sends, the other exits 0 having
// done nothing, so the digest keeps the London hour across the clock change.
//
// Env: RESEND_API_KEY, RESEND_AUDIENCE_ID, RESEND_FROM (optional), SITE_ORIGIN
// (optional, defaults to the live site). The broadcast is created, then sent —
// two calls, so a failed create sends nothing. An empty week exits 0 having
// sent nothing, and says so: silence is the designed outcome, not a failure.
import { writeFile, appendFile } from "node:fs/promises";
import { updates } from "../app/data/updates.ts";
import { selectDigest, digestSubject, digestWindow } from "../app/lib/digest.ts";
import { renderDigestHtml, renderDigestText } from "../app/lib/digestEmail.ts";
import { DIGEST_ZONE, DIGEST_HOUR } from "../app/lib/nextDigest.ts";

const argv = process.argv.slice(2);
const flag = (k) => argv.includes(`--${k}`);
const opt = (k) => { const i = argv.indexOf(`--${k}`); return i >= 0 ? argv[i + 1] : undefined; };

const DRY = flag("dry-run");
const TEST_TO = opt("test");
const SCHEDULED = flag("scheduled");
const origin = (process.env.SITE_ORIGIN || "https://burnaboystats.com").replace(/\/$/, "");
const from = process.env.RESEND_FROM || "Burna Boy Stats <updates@burnaboystats.com>";
const now = opt("now") ? new Date(`${opt("now")}T17:00:00Z`) : new Date();

const summary = async (line) => {
  console.log(line);
  if (process.env.GITHUB_STEP_SUMMARY) await appendFile(process.env.GITHUB_STEP_SUMMARY, `${line}\n`);
};

if (SCHEDULED) {
  const hour = Number(new Intl.DateTimeFormat("en-GB", { timeZone: DIGEST_ZONE, hour: "numeric", hourCycle: "h23" }).format(now));
  if (hour !== DIGEST_HOUR) {
    await summary(`Not ${DIGEST_HOUR}:00 in ${DIGEST_ZONE} (it is ${hour}:00) — this is the other cron; nothing sent.`);
    process.exit(0);
  }
}

const items = selectDigest(updates, now);
const { from: weekFrom, to: weekTo } = digestWindow(now);
if (!items.length) {
  await summary(`Nothing to send: no updates dated ${weekFrom}–${weekTo}. The digest skips empty weeks by design.`);
  process.exit(0);
}

const subject = digestSubject(items, weekTo);
const render = TEST_TO
  ? { origin, now, unsubscribe: `${origin}/updates#subscribe` } // a test send has no per-recipient link to fill
  : { origin, now };
const html = renderDigestHtml(items, render);
const text = renderDigestText(items, render);

await summary(`Digest for ${weekFrom}–${weekTo}: ${items.length} item(s). Subject: ${subject}`);
for (const u of items) await summary(`- ${u.big ? "★ " : ""}${u.date} ${u.category}: ${u.text.slice(0, 110)}…`);

if (DRY) {
  await writeFile("digest-preview.html", html);
  await writeFile("digest-preview.txt", text);
  await summary("Dry run: wrote digest-preview.html and digest-preview.txt, sent nothing.");
  process.exit(0);
}

const key = process.env.RESEND_API_KEY;
const audience = process.env.RESEND_AUDIENCE_ID;
if (!key) { console.error("RESEND_API_KEY is not set — nothing sent."); process.exit(1); }

const resend = async (path, body) => {
  const res = await fetch(`https://api.resend.com${path}`, {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: body === undefined ? undefined : JSON.stringify(body),
  });
  const json = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(`Resend ${path} → ${res.status}: ${JSON.stringify(json).slice(0, 300)}`);
  return json;
};

if (TEST_TO) {
  const r = await resend("/emails", { from, to: TEST_TO, subject: `[test] ${subject}`, html, text });
  await summary(`Test email sent to ${TEST_TO} (id ${r.id}). Nothing went to the audience.`);
  process.exit(0);
}

if (!audience) { console.error("RESEND_AUDIENCE_ID is not set — nothing sent."); process.exit(1); }
const created = await resend("/broadcasts", { audience_id: audience, from, subject, html, text, name: `Digest ${weekTo}` });
await resend(`/broadcasts/${created.id}/send`, {});
await summary(`Broadcast ${created.id} sent to the audience.`);
