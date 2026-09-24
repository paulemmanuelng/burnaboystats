// Shared pieces of the adapter contract (SPEC §2.5): the typed error every
// adapter throws, the mapping from http.mjs's typed failures to it, and the
// small text helpers the parsers share. Pure.

import { createHash } from "node:crypto";

/** A row's identity for a ROLLING control (SPEC §3.4): a short digest of the
 *  fields that must not change between two reads of the same row. The state
 *  carries the digest, never the verbatim row (§6.1). */
export const rowDigest = (row, fields) =>
  createHash("sha256")
    .update(fields.map((f) => String(row?.[f] ?? "")).join("\u0001"))
    .digest("hex")
    .slice(0, 16);

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
      // A decoy (RiSA's `<title>ai/…` tarpit, HTTP 200) is a bot wall too.
      return new AdapterError("challenge", `${where}${/^decoy page/.test(res.detail ?? "") ? "" : "bot challenge "}(${res.detail})`, { http: res.status, decoy: /^decoy page/.test(res.detail ?? "") });
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
/** The Latin-1 named entities, and the typographic ones registers print
 *  (AMPROFON writes JULI&Oacute;N, &iquest;QUI&Eacute;N?, &rsquo;). */
const NAMED = { nbsp: 160, iexcl: 161, cent: 162, pound: 163, curren: 164, yen: 165, brvbar: 166, sect: 167, uml: 168, copy: 169, ordf: 170, laquo: 171, not: 172, shy: 173, reg: 174, macr: 175, deg: 176, plusmn: 177, sup2: 178, sup3: 179, acute: 180, micro: 181, para: 182, middot: 183, cedil: 184, sup1: 185, ordm: 186, raquo: 187, frac14: 188, frac12: 189, frac34: 190, iquest: 191, Agrave: 192, Aacute: 193, Acirc: 194, Atilde: 195, Auml: 196, Aring: 197, AElig: 198, Ccedil: 199, Egrave: 200, Eacute: 201, Ecirc: 202, Euml: 203, Igrave: 204, Iacute: 205, Icirc: 206, Iuml: 207, ETH: 208, Ntilde: 209, Ograve: 210, Oacute: 211, Ocirc: 212, Otilde: 213, Ouml: 214, times: 215, Oslash: 216, Ugrave: 217, Uacute: 218, Ucirc: 219, Uuml: 220, Yacute: 221, THORN: 222, szlig: 223, agrave: 224, aacute: 225, acirc: 226, atilde: 227, auml: 228, aring: 229, aelig: 230, ccedil: 231, egrave: 232, eacute: 233, ecirc: 234, euml: 235, igrave: 236, iacute: 237, icirc: 238, iuml: 239, eth: 240, ntilde: 241, ograve: 242, oacute: 243, ocirc: 244, otilde: 245, ouml: 246, divide: 247, oslash: 248, ugrave: 249, uacute: 250, ucirc: 251, uuml: 252, yacute: 253, thorn: 254, yuml: 255, OElig: 338, oelig: 339, Scaron: 352, scaron: 353, Yuml: 376, circ: 710, tilde: 732, ndash: 8211, mdash: 8212, lsquo: 8216, rsquo: 8217, sbquo: 8218, ldquo: 8220, rdquo: 8221, bdquo: 8222, dagger: 8224, bull: 8226, hellip: 8230, permil: 8240, prime: 8242, lsaquo: 8249, rsaquo: 8250, euro: 8364, trade: 8482, infin: 8734 };
/** Decode the HTML entities registers actually use. An all-caps name the
 *  register invented ("&EACUTE;", AMPROFON) is read as its proper case. */
export function decodeEntities(s) {
  return String(s ?? "").replace(/&(#x[0-9a-f]+|#\d+|[a-z]+\d*);/gi, (m, e) => {
    if (e[0] === "#") {
      const code = e[1].toLowerCase() === "x" ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10);
      return Number.isFinite(code) ? String.fromCodePoint(code) : m;
    }
    const basic = ENTITIES[e.toLowerCase()];
    if (basic !== undefined) return basic;
    const cp = NAMED[e] ?? NAMED[`${e[0]}${e.slice(1).toLowerCase()}`];
    return cp ? String.fromCodePoint(cp) : m;
  });
}

export const stripTags = (s) => String(s ?? "").replace(/<[^>]*>/g, "");
export const collapse = (s) => String(s ?? "").replace(/\s+/g, " ").trim();
export const cap = (s, n = 300) => {
  const t = String(s ?? "");
  return t.length > n ? `${t.slice(0, n - 1)}…` : t;
};
