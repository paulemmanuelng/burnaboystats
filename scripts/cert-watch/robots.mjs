// robots.txt, parsed without a dependency — pure, so the tests can run it on
// the real files each register served (tests/fixtures/cert-watch/robots/).
//
// The rule this watcher holds itself to is STRICTER than RFC 9309: a path is
// read only when neither the group naming our own product token NOR the `*`
// group disallows it. RFC 9309 would let a group for our token override `*`;
// no register names us, so in practice the two agree, and where they could
// differ the stricter reading is the polite one. That rule is why BPI
// (`User-agent: *` / `Disallow: /`), ARIA's Dropbox `/sh/` zip and audiogest's
// `/uploads` PDFs are human checks and never fetched.

/** Our product token, the part of the User-Agent a robots.txt group can name. */
export const PRODUCT_TOKEN = "burnaboystats-cert-watch";

/**
 * Parse robots.txt into groups. A group is one or more consecutive
 * `User-agent` lines followed by its rules; `Crawl-delay` is kept per group.
 * Unknown fields (Sitemap, Content-Usage, DisallowAITraining…) are kept in
 * `other` so a test can see them, and never change a verdict.
 */
export function parseRobots(text) {
  const groups = [];
  let current = null;
  let lastWasAgent = false;
  for (const rawLine of String(text ?? "").split(/\r?\n/)) {
    const line = rawLine.replace(/#.*$/, "").trim();
    if (!line) continue;
    const m = line.match(/^([A-Za-z-]+)\s*:\s*(.*)$/);
    if (!m) continue;
    const field = m[1].toLowerCase();
    const value = m[2].trim();
    if (field === "user-agent") {
      if (!current || !lastWasAgent) {
        current = { agents: [], rules: [], crawlDelay: null, other: [] };
        groups.push(current);
      }
      current.agents.push(value.toLowerCase());
      lastWasAgent = true;
      continue;
    }
    lastWasAgent = false;
    if (!current) continue; // rules before any User-agent line belong to no group
    if (field === "allow" || field === "disallow") {
      // An empty Disallow means "nothing is disallowed" — it adds no rule.
      if (value === "") continue;
      current.rules.push({ allow: field === "allow", path: value });
    } else if (field === "crawl-delay") {
      const n = Number(value);
      if (Number.isFinite(n) && n >= 0) current.crawlDelay = n;
    } else {
      current.other.push({ field, value });
    }
  }
  return groups;
}

/** Does a group's agent line name this product token? Case-insensitive, and
 *  the agent value must be the token itself — "ClaudeBot" never names us. */
const namesUs = (agent, token) => agent === token.toLowerCase();

/** Turn a robots path pattern into a RegExp: `*` is any run, a trailing `$`
 *  anchors the end; everything else is literal and matches as a prefix. */
function patternToRegExp(pattern) {
  let p = pattern;
  let anchored = false;
  if (p.endsWith("$")) {
    anchored = true;
    p = p.slice(0, -1);
  }
  const body = p
    .split("*")
    .map((s) => s.replace(/[.+?^${}()|[\]\\]/g, "\\$&"))
    .join(".*");
  return new RegExp(`^${body}${anchored ? "$" : ""}`);
}

/** Longest-match verdict of one set of rules for a path; ties go to Allow. */
function verdictFor(rules, pathAndQuery) {
  let best = null;
  for (const r of rules) {
    if (!patternToRegExp(r.path).test(pathAndQuery)) continue;
    const len = r.path.length;
    if (!best || len > best.len || (len === best.len && r.allow && !best.rule.allow)) {
      best = { len, rule: r };
    }
  }
  return best ? best.rule : null;
}

/**
 * The verdict for a path. `groups` is parseRobots' output.
 * Returns { allowed, by: "ours" | "*" | null, rule, crawlDelay }.
 */
export function robotsVerdict(groups, pathAndQuery, token = PRODUCT_TOKEN) {
  const ours = groups.filter((g) => g.agents.some((a) => namesUs(a, token)));
  const star = groups.filter((g) => g.agents.includes("*"));
  const merged = (gs) => gs.flatMap((g) => g.rules);
  const delayOf = (gs) => {
    const ds = gs.map((g) => g.crawlDelay).filter((d) => d != null);
    return ds.length ? Math.max(...ds) : null;
  };
  const oursRule = ours.length ? verdictFor(merged(ours), pathAndQuery) : null;
  const starRule = star.length ? verdictFor(merged(star), pathAndQuery) : null;
  const crawlDelay = ours.length && delayOf(ours) != null ? delayOf(ours) : delayOf(star);
  if (oursRule && !oursRule.allow) return { allowed: false, by: "ours", rule: oursRule, crawlDelay };
  if (starRule && !starRule.allow) return { allowed: false, by: "*", rule: starRule, crawlDelay };
  return { allowed: true, by: oursRule ? "ours" : starRule ? "*" : null, rule: oursRule ?? starRule, crawlDelay };
}

/** Would a named agent (e.g. "ClaudeBot") be refused `path`? For tests and
 *  the report's notes only — the watcher itself only ever asks about its own
 *  token. Uses the RFC reading: the agent's own group if one exists, else `*`. */
export function agentVerdict(groups, agent, pathAndQuery) {
  const own = groups.filter((g) => g.agents.includes(agent.toLowerCase()));
  const use = own.length ? own : groups.filter((g) => g.agents.includes("*"));
  const rule = verdictFor(use.flatMap((g) => g.rules), pathAndQuery);
  return { allowed: !rule || rule.allow, rule };
}
