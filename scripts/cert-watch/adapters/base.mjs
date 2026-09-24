// Shared pieces of the adapter contract (SPEC §2.5): the typed error every
// adapter throws, the mapping from http.mjs's typed failures to it, and the
// small text helpers the parsers share. Pure.

/** kind: unreachable | challenge | format | mismatch | robots | budget */
export class AdapterError extends Error {
  constructor(kind, message, extra = {}) {
    super(message);
    this.kind = kind;
    Object.assign(this, extra);
  }
}

/** Turn a failed http.mjs result into the AdapterError it means. A fetch that
 *  failed is NEVER an empty read. */
export function failure(res, what) {
  const where = what ? `${what}: ` : "";
  switch (res.kind) {
    case "challenge":
      return new AdapterError("challenge", `${where}bot challenge (${res.detail})`, { http: res.status });
    case "robots":
      return new AdapterError("robots", `${where}${res.detail}`);
    case "budget":
      return new AdapterError("budget", `${where}${res.detail}`);
    case "timeout":
      return new AdapterError("unreachable", `${where}timeout (${res.detail})`, { reason: "timeout" });
    case "network":
      return new AdapterError("unreachable", `${where}network (${res.detail})`, { reason: "network" });
    case "http":
      if (res.redirectTo) return new AdapterError("mismatch", `${where}${res.detail}`, { http: res.status });
      return new AdapterError("unreachable", `${where}HTTP ${res.status}`, { reason: `HTTP ${res.status}`, http: res.status });
    default:
      return new AdapterError("unreachable", `${where}${res.detail ?? res.kind}`);
  }
}

/** Throw unless the request succeeded. */
export function expectOk(res, what) {
  if (!res.ok) throw failure(res, what);
  return res;
}

const ENTITIES = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " ", "#039": "'" };
/** Decode the HTML entities registers actually use. */
export function decodeEntities(s) {
  return String(s ?? "").replace(/&(#x[0-9a-f]+|#\d+|[a-z]+\d*);/gi, (m, e) => {
    if (e[0] === "#") {
      const code = e[1].toLowerCase() === "x" ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10);
      return Number.isFinite(code) ? String.fromCodePoint(code) : m;
    }
    return ENTITIES[e.toLowerCase()] ?? m;
  });
}

export const stripTags = (s) => String(s ?? "").replace(/<[^>]*>/g, "");
export const collapse = (s) => String(s ?? "").replace(/\s+/g, " ").trim();
export const cap = (s, n = 300) => {
  const t = String(s ?? "");
  return t.length > n ? `${t.slice(0, n - 1)}…` : t;
};
