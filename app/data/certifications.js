// ============================================================
//  GLOBAL CERTIFICATIONS DATA
//  Sources: RIAA, BPI, Music Canada, SNEP, BVMI, NVPI, ARIA,
//  RMNZ, Promusicae, IFPI Denmark, IFPI Norway (via Wikipedia
//  and national charts), verified June 2026.
//  Each cert: { c: countryCode, level, x?: multiplier }
// ============================================================

export const COUNTRIES = {
  US: { name: "United States", flag: "🇺🇸", body: "RIAA" },
  UK: { name: "United Kingdom", flag: "🇬🇧", body: "BPI" },
  CA: { name: "Canada", flag: "🇨🇦", body: "Music Canada" },
  FR: { name: "France", flag: "🇫🇷", body: "SNEP" },
  DE: { name: "Germany", flag: "🇩🇪", body: "BVMI" },
  NL: { name: "Netherlands", flag: "🇳🇱", body: "NVPI" },
  AU: { name: "Australia", flag: "🇦🇺", body: "ARIA" },
  NZ: { name: "New Zealand", flag: "🇳🇿", body: "RMNZ" },
  ES: { name: "Spain", flag: "🇪🇸", body: "Promusicae" },
  DK: { name: "Denmark", flag: "🇩🇰", body: "IFPI Denmark" },
  NO: { name: "Norway", flag: "🇳🇴", body: "IFPI Norway" },
};

export const albums = [
  { title: "African Giant", year: 2019, certs: [
    { c: "FR", level: "Platinum" }, { c: "UK", level: "Gold" }, { c: "DE", level: "Gold" },
    { c: "CA", level: "Gold" }, { c: "NL", level: "Gold" },
  ] },
  { title: "Love, Damini", year: 2022, certs: [
    { c: "CA", level: "Platinum" }, { c: "UK", level: "Gold" }, { c: "DE", level: "Gold" },
    { c: "FR", level: "Gold" }, { c: "NL", level: "Gold" },
  ] },
  { title: "I Told Them...", year: 2023, certs: [
    { c: "UK", level: "Gold" }, { c: "CA", level: "Gold" }, { c: "NZ", level: "Gold" },
  ] },
  { title: "Twice as Tall", year: 2020, certs: [
    { c: "UK", level: "Silver" },
  ] },
];

// Burna Boy's own (lead) singles.
export const singles = [
  { title: "Last Last", year: 2022, certs: [
    { c: "CA", level: "Platinum", x: 4 }, { c: "NZ", level: "Platinum", x: 3 }, { c: "UK", level: "Platinum", x: 2 },
    { c: "US", level: "Platinum" }, { c: "AU", level: "Platinum" }, { c: "DE", level: "Platinum" }, { c: "FR", level: "Diamond" },
  ] },
  { title: "On the Low", year: 2018, certs: [
    { c: "FR", level: "Diamond" }, { c: "CA", level: "Platinum", x: 2 }, { c: "UK", level: "Platinum" },
    { c: "DE", level: "Platinum" }, { c: "NZ", level: "Platinum" }, { c: "US", level: "Gold" }, { c: "AU", level: "Gold" },
  ] },
  { title: "Ye", year: 2018, certs: [
    { c: "US", level: "Platinum" }, { c: "UK", level: "Platinum" }, { c: "DE", level: "Platinum" },
    { c: "CA", level: "Platinum" }, { c: "NZ", level: "Platinum" }, { c: "FR", level: "Platinum" },
  ] },
  { title: "For My Hand", credit: "feat. Ed Sheeran", year: 2022, certs: [
    { c: "CA", level: "Platinum", x: 2 }, { c: "UK", level: "Platinum" }, { c: "DE", level: "Platinum" },
    { c: "AU", level: "Gold" }, { c: "NZ", level: "Gold" }, { c: "FR", level: "Gold" },
  ] },
  { title: "City Boys", year: 2023, certs: [
    { c: "CA", level: "Platinum" }, { c: "FR", level: "Platinum" }, { c: "UK", level: "Gold" },
    { c: "US", level: "Gold" }, { c: "NZ", level: "Gold" },
  ] },
  { title: "Gbona", year: 2018, certs: [
    { c: "CA", level: "Platinum" }, { c: "FR", level: "Platinum" }, { c: "DE", level: "Gold" },
    { c: "DK", level: "Gold" }, { c: "UK", level: "Silver" },
  ] },
  { title: "It's Plenty", year: 2022, certs: [
    { c: "CA", level: "Platinum" }, { c: "NZ", level: "Platinum" }, { c: "FR", level: "Gold" }, { c: "UK", level: "Silver" },
  ] },
  { title: "Alone", year: 2022, certs: [
    { c: "US", level: "Gold" }, { c: "NZ", level: "Gold" }, { c: "FR", level: "Gold" }, { c: "UK", level: "Silver" },
  ] },
  { title: "Anybody", year: 2019, certs: [
    { c: "CA", level: "Gold" }, { c: "FR", level: "Gold" }, { c: "UK", level: "Silver" },
  ] },
  { title: "Sittin' on Top of the World", credit: "feat. 21 Savage", year: 2023, certs: [
    { c: "CA", level: "Gold" }, { c: "NZ", level: "Gold" }, { c: "UK", level: "Silver" },
  ] },
  { title: "Gum Body", credit: "feat. Jorja Smith", year: 2019, certs: [
    { c: "CA", level: "Gold" }, { c: "UK", level: "Silver" },
  ] },
  { title: "Tested, Approved & Trusted", year: 2024, certs: [
    { c: "CA", level: "Gold" }, { c: "NZ", level: "Gold" },
  ] },
  { title: "Kilometre", year: 2021, certs: [
    { c: "CA", level: "Gold" },
  ] },
  { title: "Toni-Ann Singh", credit: "feat. Popcaan", year: 2022, certs: [
    { c: "CA", level: "Gold" },
  ] },
  { title: "Talibans II", credit: "with Byron Messia", year: 2023, certs: [
    { c: "CA", level: "Gold" },
  ] },
  { title: "Collateral Damage", year: 2022, certs: [
    { c: "FR", level: "Gold" },
  ] },
  { title: "Secret", credit: "feat. Jeremih & Serani", year: 2018, certs: [
    { c: "UK", level: "Silver" },
  ] },
  { title: "Cheat on Me", credit: "feat. Dave", year: 2023, certs: [
    { c: "UK", level: "Silver" },
  ] },
];

// Songs where Burna Boy is a featured/guest artist.
export const features = [
  { title: "Location", credit: "Dave ft. Burna Boy", year: 2019, certs: [
    { c: "FR", level: "Diamond" }, { c: "UK", level: "Platinum", x: 5 }, { c: "NZ", level: "Platinum", x: 3 },
    { c: "CA", level: "Platinum" }, { c: "NO", level: "Platinum" }, { c: "US", level: "Gold" },
  ] },
  { title: "We Pray", credit: "Coldplay ft. Burna Boy & others", year: 2024, certs: [
    { c: "FR", level: "Diamond" }, { c: "ES", level: "Platinum" }, { c: "AU", level: "Gold" },
    { c: "NZ", level: "Gold" }, { c: "UK", level: "Silver" },
  ] },
  { title: "Be Honest", credit: "Jorja Smith ft. Burna Boy", year: 2019, certs: [
    { c: "FR", level: "Diamond" }, { c: "AU", level: "Platinum" }, { c: "UK", level: "Platinum" },
    { c: "NZ", level: "Platinum" }, { c: "CA", level: "Gold" },
  ] },
  { title: "Own It", credit: "Stormzy ft. Ed Sheeran & Burna Boy", year: 2019, certs: [
    { c: "UK", level: "Platinum", x: 3 }, { c: "NZ", level: "Platinum" }, { c: "AU", level: "Gold" },
  ] },
  { title: "Ginger", credit: "Wizkid ft. Burna Boy", year: 2020, certs: [
    { c: "US", level: "Gold" }, { c: "CA", level: "Gold" }, { c: "UK", level: "Silver" },
  ] },
  { title: "My Oasis", credit: "Sam Smith ft. Burna Boy", year: 2020, certs: [
    { c: "AU", level: "Gold" }, { c: "CA", level: "Gold" }, { c: "UK", level: "Silver" },
  ] },
  { title: "Jerusalema (Remix)", credit: "Master KG, Nomcebo & Burna Boy", year: 2020, certs: [
    { c: "FR", level: "Diamond" },
  ] },
  { title: "Donne-moi l'accord", credit: "Dadju ft. Burna Boy", year: 2020, certs: [
    { c: "FR", level: "Platinum" },
  ] },
  { title: "Play Play", credit: "J Hus ft. Burna Boy", year: 2020, certs: [
    { c: "UK", level: "Platinum" },
  ] },
  { title: "Simmer", credit: "Mahalia ft. Burna Boy", year: 2019, certs: [
    { c: "UK", level: "Gold" }, { c: "CA", level: "Gold" },
  ] },
  { title: "WGFT", credit: "Gunna ft. Burna Boy", year: 2025, certs: [
    { c: "UK", level: "Gold" }, { c: "NZ", level: "Gold" },
  ] },
  { title: "4 Kampé II", credit: "Joé Dwèt Filé ft. Burna Boy", year: 2024, certs: [
    { c: "FR", level: "Gold" },
  ] },
];

// Certifications grouped by the year the award was announced (from dated
// news reports). Newer levels for the same song/country can appear across two
// years — that's an upgrade, not a duplicate (e.g. On the Low: Gold 2025 → Platinum 2026).
export const awardsByYear = {
  2026: [
    { title: "Location", credit: "Dave ft. Burna Boy", c: "FR", level: "Diamond" },
    { title: "Last Last", c: "CA", level: "Platinum", x: 4 },
    { title: "Last Last", c: "NZ", level: "Platinum", x: 3 },
    { title: "Location", credit: "Dave ft. Burna Boy", c: "NZ", level: "Platinum", x: 3 },
    { title: "For My Hand", credit: "feat. Ed Sheeran", c: "CA", level: "Platinum", x: 2 },
    { title: "On the Low", c: "CA", level: "Platinum", x: 2 },
    { title: "On the Low", c: "UK", level: "Platinum" },
    { title: "On the Low", c: "NZ", level: "Platinum" },
    { title: "Love, Damini", c: "CA", level: "Platinum" },
    { title: "It's Plenty", c: "CA", level: "Platinum" },
    { title: "It's Plenty", c: "NZ", level: "Platinum" },
    { title: "Gbona", c: "CA", level: "Platinum" },
    { title: "City Boys", c: "CA", level: "Platinum" },
    { title: "We Pray", credit: "Coldplay ft. Burna Boy", c: "ES", level: "Platinum" },
    { title: "Location", credit: "Dave ft. Burna Boy", c: "NO", level: "Platinum" },
    { title: "I Told Them...", c: "CA", level: "Gold" },
    { title: "Kilometre", c: "CA", level: "Gold" },
    { title: "Toni-Ann Singh", credit: "feat. Popcaan", c: "CA", level: "Gold" },
    { title: "Alone", c: "US", level: "Gold" },
    { title: "Sittin' on Top of the World", c: "CA", level: "Gold" },
    { title: "Tested, Approved & Trusted", c: "CA", level: "Gold" },
    { title: "Talibans II", c: "CA", level: "Gold" },
    { title: "Gbona", c: "DK", level: "Gold" },
    { title: "WGFT", credit: "Gunna ft. Burna Boy", c: "NZ", level: "Gold" },
    { title: "WGFT", credit: "Gunna ft. Burna Boy", c: "UK", level: "Gold" },
    { title: "4 Kampé II", credit: "Joé Dwèt Filé ft. Burna Boy", c: "FR", level: "Gold" },
  ],
  2025: [
    { title: "Donne-moi l'accord", credit: "Dadju ft. Burna Boy", c: "FR", level: "Platinum" },
    { title: "City Boys", c: "FR", level: "Platinum" },
    { title: "On the Low", c: "UK", level: "Gold" },
    { title: "It's Plenty", c: "FR", level: "Gold" },
    { title: "City Boys", c: "US", level: "Gold" },
    { title: "Secret", credit: "feat. Jeremih & Serani", c: "UK", level: "Silver" },
    { title: "My Oasis", credit: "Sam Smith ft. Burna Boy", c: "UK", level: "Silver" },
  ],
};

// Helpers
export function tierOf(level) {
  if (level === "Diamond") return "diamond";
  if (level === "Platinum") return "platinum";
  if (level === "Gold") return "gold";
  return "silver";
}

export const allItems = [...albums, ...singles, ...features];
export const certifiedReleaseCount = allItems.length;
export const countryCount = Object.keys(COUNTRIES).length;
export function totalAwards() {
  return allItems.reduce((sum, it) => sum + it.certs.length, 0);
}
