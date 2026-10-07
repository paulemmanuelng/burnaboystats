/**
 * /music's "Lead vs featured" section, both layouts: every figure it prints,
 * derived here from the data — never typed (tests/ui/musicLeadFeatured.test.tsx
 * fails on a typed streams figure in the section's source).
 *
 *   streams      app/data/roleStreams.ts — kworb's per-song totals, each under
 *                his Spotify credit role on the track, rebuilt daily
 *   songs/top    the same file, by role
 *   certs, No.1s his ledgers' own groups (certifications.ts singles / features
 *                / albums; charts.ts singleCharts / featureCharts / albumCharts),
 *                which the credit-role rule files (tests/creditRoles.test.ts)
 *   cross-check  ChartMasters' figures as printed (africasBiggest.ts
 *                spotifyLeadStreams), with the songs its public table files as
 *                features although Spotify credits him as a main artist
 *                (creditRoles.CM_FEATURES_GROUP_BURNA)
 *
 * Server-only: the page passes the result to the phone screen as props.
 */
import { ROLE_STREAMS, type RoleStreamTrack } from "../data/roleStreams";
import { BURNA_ROLES, CM_FEATURES_GROUP_BURNA, CREDIT_ROLES_READ_ON } from "../data/creditRoles";
import { albums as certAlbums, singles, features } from "../data/certifications";
import { albumCharts, singleCharts, featureCharts, type ChartRelease } from "../data/charts";
import { SPOTIFY_LEAD_STREAMS_READ_ON_LONG, spotifyLeadStreams, streamsShort } from "../data/africasBiggest";
import { daiDaiStoryPage } from "../data/songs";
import { releasePageLinks, releasePathFor } from "./releasePages";
import { andList } from "./coLead";

export interface RoleTopSong {
  title: string;
  streams: number;
  /** "740.2M" */
  figure: string;
  /** Its own page, where it has one. */
  href?: string;
  /** Spotify's other main artists, where it is one of his co-leads. */
  coLead?: readonly string[];
}

export interface RoleSide {
  streams: number;
  /** "9.86B" */
  figure: string;
  songs: number;
  top: RoleTopSong[];
}

export interface LeadFeatured {
  lead: RoleSide;
  featured: RoleSide;
  /** The lead share, in whole percent, for the bar and its label. */
  leadPercent: number;
  /** kworb's list, lead + featured: "11.03B". */
  totalFigure: string;
  pageDate: string;
  pageDateLong: string;
  rolesReadOnLong: string;
  /** Tracks filed by kworb's marker because their credits are not read yet. */
  unmapped: number;
  certs: { lead: number; featured: number; albums: number };
  no1s: { lead: number; featured: number; albums: number };
  cm: { lead: string; feat: string; readOnLong: string; songs: string[]; songsList: string; songsFigure: string };
}

/** "9.86B" for a total, "740.2M" for a song — the hero's two-decimal billions
 *  ("11.15B") and the song tags' one-decimal millions. */
export const streamsFigure = (n: number): string => (n >= 1e9 ? `${(n / 1e9).toFixed(2)}B` : `${(n / 1e6).toFixed(1)}M`);

const longDate = (iso: string) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

const plaques = (rs: readonly { certs: readonly unknown[] }[]) => rs.reduce((n, r) => n + r.certs.length, 0);
const no1s = (rs: readonly ChartRelease[]) => rs.reduce((n, r) => n + r.entries.filter((e) => e.peak === 1).length, 0);

export const TOP_SONGS = 5;

export function leadFeatured(): LeadFeatured {
  const links = releasePageLinks();
  const hrefOf = (title: string) =>
    title === daiDaiStoryPage.title ? daiDaiStoryPage.href : releasePathFor(links, title, "song");
  const side = (role: RoleStreamTrack["role"]): RoleSide => {
    const tracks = ROLE_STREAMS.tracks.filter((t) => t.role === role).sort((a, b) => b.streams - a.streams);
    const streams = tracks.reduce((n, t) => n + t.streams, 0);
    return {
      streams,
      figure: streamsFigure(streams),
      songs: tracks.length,
      top: tracks.slice(0, TOP_SONGS).map((t) => {
        const coLead = BURNA_ROLES[t.title]?.coLeadWith;
        const href = hrefOf(t.title);
        return {
          title: t.title,
          streams: t.streams,
          figure: streamsFigure(t.streams),
          ...(href ? { href } : {}),
          ...(coLead?.length ? { coLead } : {}),
        };
      }),
    };
  };
  const lead = side("lead");
  const featured = side("featured");
  const total = lead.streams + featured.streams;

  const cm = spotifyLeadStreams.find((r) => r.name === "Burna Boy")!;
  const cmSongs: string[] = [...CM_FEATURES_GROUP_BURNA];
  const cmSongsStreams = ROLE_STREAMS.tracks.filter((t) => cmSongs.includes(t.title)).reduce((n, t) => n + t.streams, 0);

  return {
    lead,
    featured,
    leadPercent: Math.round((lead.streams / total) * 100),
    totalFigure: streamsFigure(total),
    pageDate: ROLE_STREAMS.pageDate,
    pageDateLong: longDate(ROLE_STREAMS.pageDate),
    rolesReadOnLong: longDate(CREDIT_ROLES_READ_ON),
    unmapped: ROLE_STREAMS.tracks.filter((t) => !t.mapped).length,
    certs: { lead: plaques(singles), featured: plaques(features), albums: plaques(certAlbums) },
    no1s: { lead: no1s(singleCharts), featured: no1s(featureCharts), albums: no1s(albumCharts) },
    cm: {
      lead: streamsShort(cm.lead),
      feat: streamsShort(cm.feat),
      readOnLong: SPOTIFY_LEAD_STREAMS_READ_ON_LONG,
      songs: cmSongs,
      songsList: andList(cmSongs.map((t) => `“${t}”`)),
      songsFigure: streamsFigure(cmSongsStreams),
    },
  };
}

/** The section's source and cross-check lines, one string each, shared by
 *  both layouts so they never say two things. */
export function leadFeaturedNotes(d: LeadFeatured): { source: string; sum: string; cross: string } {
  return {
    source:
      `kworb's per-song totals (page of ${d.pageDateLong}), each summed under his credit on Spotify ` +
      `(read ${d.rolesReadOnLong}${d.unmapped ? `; ${d.unmapped} new ${d.unmapped === 1 ? "song" : "songs"} not yet read, filed by kworb's marker` : ""}).`,
    sum: `Lead and featured add up to kworb's list, ${d.totalFigure}; the career total above also counts streams that list leaves out.`,
    cross:
      `ChartMasters, read ${d.cm.readOnLong}, counts ${d.cm.lead} as lead and ${d.cm.feat} as featured: most of the gap is ` +
      `${d.cm.songsList}, which it files as features although Spotify credits Burna Boy as a main artist on them ` +
      `(${d.cm.songsFigure} together).`,
  };
}
