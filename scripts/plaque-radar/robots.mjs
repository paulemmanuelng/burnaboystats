// A small robots.txt reader (RFC 9309). Pure.
//
// The radar reads a page only when EVERY one of these would be allowed:
//   • a group naming Claude-User (the agent a person's request runs as),
//   • a group naming the radar's own User-Agent token,
//   • the * group, when neither of those is named.
// A group aimed only at training crawlers (ClaudeBot, anthropic-ai) does not
// bar a read a person asked for — but nothing here reads around a group that
// names Claude-User or the radar itself.

export function parseRobots(text) {
  const groups = [];
  let cur = null;
  let lastWasAgent = false;
  for (const raw of String(text ?? "").split(/\r?\n/)) {
    const line = raw.replace(/#.*$/, "").trim();
    const m = line.match(/^([A-Za-z-]+)\s*:\s*(.*)$/);
    if (!m) continue;
    const key = m[1].toLowerCase();
    const val = m[2].trim();
    if (key === "user-agent") {
      if (!cur || !lastWasAgent) {
        cur = { agents: [], rules: [], crawlDelay: null };
        groups.push(cur);
      }
      cur.agents.push(val.toLowerCase());
      lastWasAgent = true;
      continue;
    }
    lastWasAgent = false;
    if (!cur) continue;
    if (key === "allow" || key === "disallow") cur.rules.push({ allow: key === "allow", path: val });
    else if (key === "crawl-delay" && Number.isFinite(Number(val))) cur.crawlDelay = Number(val);
  }
  return groups;
}

/** Does a robots path pattern (with * and $) match this path? */
function patternMatches(pattern, path) {
  if (pattern === "") return false;
  const anchored = pattern.endsWith("$");
  const body = (anchored ? pattern.slice(0, -1) : pattern)
    .split("*")
    .map((s) => s.replace(/[.+?^${}()|[\]\\]/g, "\\$&"))
    .join(".*");
  return new RegExp(`^${body}${anchored ? "$" : ""}`).test(path);
}

/** The groups that speak to one agent token: groups naming it, else the * group. */
export function groupsFor(groups, token) {
  const t = token.toLowerCase();
  const named = groups.filter((g) => g.agents.some((a) => a !== "*" && a.length >= 3 && (t === a || t.startsWith(a) || a.startsWith(t))));
  return named.length ? named : groups.filter((g) => g.agents.includes("*"));
}

/** Longest matching rule wins; Allow wins a tie; no matching rule = allowed. */
export function allowedFor(groups, token, path) {
  let best = null;
  for (const g of groupsFor(groups, token)) {
    for (const r of g.rules) {
      if (!patternMatches(r.path, path)) continue;
      if (!best || r.path.length > best.path.length || (r.path.length === best.path.length && r.allow)) best = r;
    }
  }
  return best ? best.allow : true;
}

/** Allowed for every agent the radar answers to. Returns { ok, blockedFor, crawlDelay }. */
export function robotsVerdict(groups, tokens, path) {
  const blockedFor = tokens.filter((t) => !allowedFor(groups, t, path));
  const delays = tokens.flatMap((t) => groupsFor(groups, t).map((g) => g.crawlDelay)).filter((d) => d != null);
  return { ok: blockedFor.length === 0, blockedFor, crawlDelay: delays.length ? Math.max(...delays) : null };
}
