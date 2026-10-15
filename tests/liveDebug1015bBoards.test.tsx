import { describe, it, expect, vi } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/",
  useSearchParams: () => new URLSearchParams(),
  notFound: () => {
    throw new Error("notFound() — the fixture slug no longer exists");
  },
}));
vi.mock("next/link", () => ({
  default: ({ href, children, prefetch: _p, ...rest }: { href: string; children: React.ReactNode; prefetch?: boolean | null }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import ArtistPage from "../app/afrobeats/[artist]/page";
import AfrobeatsPage from "../app/afrobeats/page";
import { GET as llmsTxt } from "../app/llms.txt/route";
import { GET as afrobeatsApi } from "../app/api/v1/afrobeats/route";
import { CERTS_VERIFIED_ON } from "../app/data/certifications";
import { AFROBEATS_LAST_FULL_SWEEP } from "../app/data/afrobeats";
import { opponentOf } from "../app/lib/headToHead";
import { artistBySlug } from "../app/data/afrobeats";

/**
 * The live debug pass of 15 Oct 2026 (part 2), certs-boards lane (/afrobeats,
 * /afrobeats/[artist], its charts and live pages). One block per finding; each
 * negative control is what the site shipped (origin/main 6062f806), verbatim.
 */

const text = (h: string) =>
  h
    .replace(/<[^>]+>/g, " ")
    .replace(/&#x27;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/&rsquo;/g, "’")
    .replace(/ /g, " ")
    .replace(/\s+/g, " ");
const artist = async (slug: string) => renderToStaticMarkup(await ArtistPage({ params: Promise.resolve({ artist: slug }) }));
const long = (iso: string) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

// ── cb-1 ────────────────────────────────────────────────────────────────────

describe("cb-1: Burna Boy's half of the board names the day his registers were read, not 'daily'", () => {
  const DAILY = /Burna Boy(?:'|’)s (?:own )?(?:figures|pages)(?: update)? daily/;
  const verified = long(CERTS_VERIFIED_ON);
  const sweep = long(AFROBEATS_LAST_FULL_SWEEP);

  it("the head-to-head note on a page whose rival is Burna Boy (/afrobeats/wizkid)", async () => {
    expect(opponentOf(artistBySlug("wizkid")!).isBurna).toBe(true);
    const t = text(await artist("wizkid"));
    expect(t).toContain(
      `Both counted identically. Burna Boy's registers were last verified ${verified}; the last full board sweep re-read every register on ${sweep}.`,
    );
    expect(t).not.toMatch(DAILY);
  });

  it("the hub's cadence line, both layouts (/afrobeats)", () => {
    const t = text(renderToStaticMarkup(<AfrobeatsPage />));
    expect(t).toContain(`The board is re-read at each register sweep — last on ${sweep}. Burna Boy's registers were last verified ${verified}.`);
    expect(t).toContain(`Re-read at each sweep, last ${sweep} · Burna Boy’s registers last verified ${verified}`);
    expect(t).not.toMatch(DAILY);
  });

  it("llms.txt and /api/v1/afrobeats say the same two dates", async () => {
    const llms = await llmsTxt().text();
    expect(llms.replace(/\s+/g, " ")).toContain(
      `Re-read at each register sweep, the last full one on ${sweep}; Burna Boy's registers were last verified ${verified}.`,
    );
    const api = (await afrobeatsApi().json()) as { description: string };
    expect(api.description).toContain(
      `Re-read at each register sweep, the last full one on ${sweep}; Burna Boy's registers were last verified ${verified}.`,
    );
    expect(llms).not.toMatch(DAILY);
    expect(api.description).not.toMatch(DAILY);
  });

  it("negative control: the four lines the site shipped", () => {
    for (const shipped of [
      "Both counted identically. Burna Boy's figures update daily; the last full board sweep re-read every register on 2 October 2026.",
      "The board is re-read at each register sweep — last on 2 October 2026. Burna Boy's own pages update daily.",
      "Re-read at each sweep, last 2 October 2026 · Burna Boy’s pages daily",
      "side. Re-read at each register sweep; Burna Boy's own pages update daily.",
      "Re-read at each register sweep, where Burna Boy's own pages update daily.",
    ]) {
      expect(shipped).toMatch(DAILY);
    }
  });
});
