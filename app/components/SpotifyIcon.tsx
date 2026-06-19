// Shared Spotify glyph — used by the discography modal and the features folder.
export default function SpotifyIcon({ className = "spotifyIcon" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm4.59 14.43a.62.62 0 01-.86.21c-2.35-1.44-5.3-1.76-8.79-.97a.62.62 0 11-.27-1.22c3.8-.86 7.07-.49 9.71 1.12.3.18.39.57.21.86zm1.23-2.74a.78.78 0 01-1.07.26c-2.69-1.66-6.79-2.14-9.97-1.17a.78.78 0 11-.45-1.49c3.63-1.1 8.15-.57 11.24 1.33.36.22.48.71.25 1.07zm.1-2.85C14.8 8.9 9.5 8.72 6.47 9.64a.94.94 0 11-.54-1.8c3.47-1.05 9.32-.85 13.02 1.35a.94.94 0 01-.96 1.61z" />
    </svg>
  );
}
