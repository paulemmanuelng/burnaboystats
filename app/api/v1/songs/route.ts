import { apiJson } from "../../../lib/api";
import { songs } from "../../../data/songs";
import { siteUrl } from "../../../site";

export const dynamic = "force-static";

const catalogue = songs.map((s) => ({
  slug: s.slug,
  title: s.title,
  credit: s.credit ?? "Burna Boy",
  year: s.year,
  album: s.album,
  // Only present when the track ID was verified via Spotify's oEmbed endpoint —
  // never guessed.
  spotifyTrackId: s.spotify ?? null,
  spotifyStreams: s.spotifyStreams ?? null,
  youtubeVideoViews: s.ytViews ?? null,
  url: `${siteUrl}/music/${s.slug}`,
}));

export function GET() {
  return apiJson({
    endpoint: "/songs",
    description:
      "The song catalogue behind the per-song pages. Streaming figures are display strings refreshed automatically; `null` means no verified figure exists.",
    count: catalogue.length,
    data: catalogue,
  });
}
