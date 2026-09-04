import { apiJson } from "../../../lib/api";
import { songs } from "../../../data/songs";
import { siteUrl } from "../../../site";

export const dynamic = "force-static";

/**
 * The base62 track ID out of what data/songs.ts actually stores.
 *
 * `spotifyTrackId` used to serialise `s.spotify` unchanged — and that field
 * holds the full share URL ("https://open.spotify.com/track/4LPNkxES0z…"), not
 * an ID. Both the field name and the /api docs page ("verified Spotify track
 * IDs") promised an ID, so a consumer doing the obvious thing — GET
 * https://api.spotify.com/v1/tracks/{spotifyTrackId} — sent Spotify a URL as a
 * path segment and got 400 back, every time, for every song.
 *
 * Accepts either form so a future hand-edit that stores a bare ID still
 * resolves, and returns null for anything else: an unparseable value is "no
 * verified ID", never a guess. Spotify IDs are 22 base62 characters.
 */
const TRACK_ID = /^(?:https?:\/\/open\.spotify\.com\/track\/)?([A-Za-z0-9]{22})(?:[?#/].*)?$/;
const trackId = (value: string | undefined) => value?.match(TRACK_ID)?.[1] ?? null;

const catalogue = songs.map((s) => {
  // Only present when the track ID was verified via Spotify's oEmbed endpoint —
  // never guessed.
  const id = trackId(s.spotify);
  return {
    slug: s.slug,
    title: s.title,
    credit: s.credit ?? "Burna Boy",
    year: s.year,
    album: s.album,
    spotifyTrackId: id,
    // Added alongside the repaired ID rather than instead of it: a consumer who
    // had been reading the old URL out of `spotifyTrackId` still has a field
    // that holds one. Rebuilt from the parsed ID, so the two can never disagree.
    spotifyUrl: id ? `https://open.spotify.com/track/${id}` : null,
    spotifyStreams: s.spotifyStreams ?? null,
    youtubeVideoViews: s.ytViews ?? null,
    url: `${siteUrl}/music/${s.slug}`,
  };
});

export function GET() {
  return apiJson({
    endpoint: "/songs",
    description:
      "The song catalogue behind the per-song pages. `spotifyTrackId` is the bare base62 ID for Spotify's own API; `spotifyUrl` is the same track as a link. Streaming figures are display strings refreshed automatically; `null` means no verified figure exists.",
    count: catalogue.length,
    countOf: "songs",
    data: catalogue,
  });
}
