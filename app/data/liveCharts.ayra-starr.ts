// GENERATED FILE — do not edit by hand.
  // Rebuilt several times a day by scripts/build-live-charts.mjs --artist=ayra-starr from kworb's artist page.
  //
  // PLATFORM chart data for Ayra Starr: where each release is sitting RIGHT
  // NOW on Spotify, Apple Music, iTunes, Deezer, Shazam and YouTube country
  // charts. This is not official-chart data — the official national peaks that
  // feed the site's headline totals live elsewhere, and the two are kept apart
  // on purpose.
  
  import { countriesOf } from "../lib/liveChartMeta";
  
  export interface LiveEntry {
    country: string; // ISO alpha-2
    name: string;
    position: number;
    // Movement against the chart's previous edition: 0 = no change, null = the
    // source flagged a new/re-entry, absent = the source reports no movement for
    // this platform at all (YouTube). Absent and null are different facts.
    movement?: number | null;
    /** Why there is no movement: the source flagged a new entry or a re-entry. */
    status?: "new" | "re";
  }
  
  export interface LivePlatform {
    platform: string;
    numberOnes: number;
    entries: LiveEntry[];
  }
  
  export interface LiveRelease {
    title: string;
    kind: "song" | "album";
    /** Release artwork, resolved at build time. Absent means unresolved — the
     *  page draws a monogram rather than borrowing another release's cover. */
    cover?: string;
    /** The snapshot date (ISO) this release first appeared on this board,
     *  carried from run to run. A new release's missing cover has a 7-day
     *  grace before it counts against the artwork floor (scripts/live-artists.mjs).
     *  "2026-01-01" means it was already here when the date began to be
     *  recorded (18 Oct 2026). Absent on a file whose covers are not resolved
     *  at build time. Bookkeeping only: the live-charts API leaves it out
     *  (withApiCountryCodes, app/lib/liveChartMeta.ts). */
    firstSeen?: string;
    platforms: LivePlatform[];
  }
  
  /** When this snapshot was taken (ISO date). */
  export const liveChartsUpdated = "2026-10-19";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-19T13:23Z";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","Spotify Albums","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "Heaven Baby",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 2,
        "entries": [
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 1,
            "movement": 0
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 1,
            "movement": 0
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 2,
            "movement": 0
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 2,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 3,
            "movement": 4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 3,
            "movement": 0
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 5,
            "movement": 0
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 5,
            "movement": -2
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 5,
            "movement": 0
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 6,
            "movement": 0
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 7,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 8,
            "movement": 2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 8,
            "movement": -2
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 9,
            "movement": -2
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 10,
            "movement": -5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 10,
            "movement": 6
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 10,
            "movement": 43
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 10,
            "movement": -2
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 11,
            "movement": -1
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 12,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 14,
            "movement": -1
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 14,
            "movement": -8
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 14,
            "movement": 3
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 17,
            "movement": -3
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 18,
            "movement": 0
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 19,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 20,
            "movement": -4
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 21,
            "movement": 8
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 21,
            "movement": -3
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 27,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 29,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 30,
            "movement": 44
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 30,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 33,
            "movement": -14
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 33,
            "movement": -8
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 35,
            "movement": -28
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 35,
            "movement": -1
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 38,
            "movement": -27
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 38,
            "movement": -3
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 39,
            "movement": 10
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 39,
            "movement": -9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 49,
            "movement": -1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 58,
            "movement": -22
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 66,
            "movement": -23
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 83,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 85,
            "movement": -31
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 100,
            "movement": -48
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 122,
            "movement": -8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 128,
            "movement": -4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 130,
            "movement": -37
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 186,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 2,
            "movement": 1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 2,
            "movement": null,
            "status": "re"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 2,
            "movement": 1
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 5,
            "movement": 15
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 5,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 7,
            "movement": null,
            "status": "re"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 7,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 9,
            "movement": null,
            "status": "re"
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 12,
            "movement": 45
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 12,
            "movement": 0
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 14,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 17,
            "movement": 28
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 33,
            "movement": 28
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 34,
            "movement": 31
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 38,
            "movement": 37
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 49,
            "movement": 15
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 51,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 57,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 60,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 61,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 62,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 63,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 64,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FR",
            "name": "France",
            "position": 85,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 92,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 96,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 1,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 1,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 2,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 4,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 5,
            "movement": 1
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 6,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 7,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 8,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 15,
            "movement": 0
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 24,
            "movement": -3
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 33,
            "movement": -7
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 37,
            "movement": 4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 52,
            "movement": -9
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 69,
            "movement": 17
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 115,
            "movement": -12
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 133,
            "movement": -55
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 152,
            "movement": -35
          },
          {
            "country": "FR",
            "name": "France",
            "position": 162,
            "movement": -9
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 1,
        "entries": [
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 1,
            "movement": 18
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 9,
            "movement": -5
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 15,
            "movement": -6
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 17,
            "movement": 0
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 19,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 22,
            "movement": 0
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 29,
            "movement": -5
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 58,
            "movement": -9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 69,
            "movement": 101
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 99,
            "movement": -28
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 30,
            "movement": -19
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 45,
            "movement": 44
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 84,
            "movement": 6
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 48,
            "movement": -8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 63,
            "movement": 22
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Starrgirl",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 3,
            "movement": -2
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 3,
            "movement": -1
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 4,
            "movement": -1
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 4,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 5,
            "movement": 1
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 6,
            "movement": 2
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 8,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 8,
            "movement": 4
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 9,
            "movement": 3
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 9,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 9,
            "movement": 5
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 10,
            "movement": -1
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 10,
            "movement": -6
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 13,
            "movement": -4
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 14,
            "movement": 5
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 14,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 15,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 16,
            "movement": -3
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 20,
            "movement": -8
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 22,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 24,
            "movement": -1
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 24,
            "movement": -10
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 25,
            "movement": -2
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 26,
            "movement": -5
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 26,
            "movement": 102
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 28,
            "movement": 11
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 30,
            "movement": -1
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 31,
            "movement": -25
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 33,
            "movement": 36
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 34,
            "movement": -3
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 34,
            "movement": -10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 37,
            "movement": -6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 39,
            "movement": -14
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 41,
            "movement": -26
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 43,
            "movement": -16
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 45,
            "movement": -15
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 47,
            "movement": -9
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 53,
            "movement": 12
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 53,
            "movement": -38
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 59,
            "movement": -2
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 65,
            "movement": -19
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 66,
            "movement": -11
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 69,
            "movement": -23
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 71,
            "movement": -1
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 79,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 88,
            "movement": 0
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 88,
            "movement": -6
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 98,
            "movement": -33
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 115,
            "movement": -10
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 129,
            "movement": -47
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 130,
            "movement": 37
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 133,
            "movement": -74
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 140,
            "movement": -45
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 187,
            "movement": -114
          }
        ]
      },
      {
        "platform": "Spotify Albums",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 9,
            "movement": 3
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 53,
            "movement": 67
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 15,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Rush",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 13,
            "movement": 0
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 18,
            "movement": -5
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 21,
            "movement": 1
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 25,
            "movement": -1
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 39,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 60,
            "movement": 6
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 89,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 93,
            "movement": 0
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 119,
            "movement": -76
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 3,
            "movement": 135
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 34,
            "movement": -3
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 81,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 118,
            "movement": null,
            "status": "new"
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 127,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 181,
            "movement": 18
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 181,
            "movement": 11
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 185,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 56,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 86,
            "movement": null,
            "status": "re"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a73bed954d61b52564118ac926925d76/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "treat u right",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 4,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 7,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 12,
            "movement": -4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 55,
            "movement": -6
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 64,
            "movement": -30
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 76,
            "movement": -12
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 80,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 100,
            "movement": -29
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 103,
            "movement": -68
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 111,
            "movement": -5
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 111,
            "movement": 15
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 126,
            "movement": 32
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 133,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 170,
            "movement": -12
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 11,
            "movement": 3
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 128,
            "movement": -2
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 39,
            "movement": -24
          }
        ]
      },
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 16,
            "movement": 25
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a88a32de107d134d181e111b3ae5f780/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Colorado",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 20,
            "movement": 44
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 23,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 36,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 40,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 80,
            "movement": 20
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 116,
            "movement": -7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 140,
            "movement": -2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 178,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 119,
            "movement": -7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 129,
            "movement": -6
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 112,
            "movement": 13
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 14,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4d16c0dbdfcfa22baaec4a11c3f283a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "The Year I Turned 21",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 2,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 77,
            "movement": -10
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 88,
            "movement": -29
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 138,
            "movement": 45
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 142,
            "movement": -68
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 152,
            "movement": -29
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 152,
            "movement": -17
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 153,
            "movement": -13
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 168,
            "movement": 28
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 169,
            "movement": -29
          }
        ]
      },
      {
        "platform": "Spotify Albums",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 59,
            "movement": 13
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d096ea1c1019d1af67c0a2e434890e1e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Who's Dat Girl",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 41,
            "movement": 6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 48,
            "movement": 5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 60,
            "movement": 26
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 71,
            "movement": -24
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 104,
            "movement": 37
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 123,
            "movement": -27
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 154,
            "movement": 23
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 184,
            "movement": 12
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 167,
            "movement": 28
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/fe3deba215d998d74542663a84621852/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "No love",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 70,
            "movement": 3
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 108,
            "movement": 81
          },
          {
            "country": "FR",
            "name": "France",
            "position": 114,
            "movement": 5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 122,
            "movement": -46
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 130,
            "movement": 12
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 132,
            "movement": 15
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 139,
            "movement": 7
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 148,
            "movement": 26
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 51,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/7b49d51e89ff07824c8c62043775a2ab/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "19 & Dangerous",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 1,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 1,
            "movement": 5
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 87,
            "movement": -51
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 88,
            "movement": 24
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 104,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 149,
            "movement": -15
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 185,
            "movement": -114
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 186,
            "movement": -26
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 192,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "Spotify Albums",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 125,
            "movement": 20
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b922c719d3a9901f749140e8f532a8d0/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Tornado",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 41,
            "movement": -11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 60,
            "movement": 6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 104,
            "movement": -66
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 108,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 161,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 183,
            "movement": -59
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 72,
            "movement": 29
          }
        ]
      },
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 87,
            "movement": -10
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/faa0b0578b463b8808c25da8f594aced/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Away",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 45,
            "movement": 76
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 78,
            "movement": 85
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 98,
            "movement": -11
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 134,
            "movement": 27
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 169,
            "movement": -8
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 177,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 179,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 198,
            "movement": -46
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/24407cf49fdf864463cb5ca5ad974630/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Last Heartbreak Song",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 32,
            "movement": 165
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 61,
            "movement": 17
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 111,
            "movement": 46
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 117,
            "movement": -14
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 138,
            "movement": -11
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 144,
            "movement": -25
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 192,
            "movement": -44
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d096ea1c1019d1af67c0a2e434890e1e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Wo, man",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 8,
            "movement": -1
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 17,
            "movement": -2
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 47,
            "movement": 0
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 99,
            "movement": -12
          },
          {
            "country": "KR",
            "name": "South Korea",
            "position": 178,
            "movement": 8
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "IT",
            "name": "Italy",
            "position": 92,
            "movement": 49
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c4c1696f82feac0a7fa1e26379b9f7e2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bloody Samaritan",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 135,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 137,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 176,
            "movement": 7
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 13,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 49,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6811d7a880826af2be69b81686f629f2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Commas",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 168,
            "movement": -9
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 41,
            "movement": -5
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "IL",
            "name": "Israel",
            "position": 94,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 41,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d096ea1c1019d1af67c0a2e434890e1e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Hot Body",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 96,
            "movement": 54
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 131,
            "movement": -6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 181,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 197,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4b5a287c8f574407dc5b1b03b5ae0c58/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ngozi",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 14,
            "movement": -13
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 133,
            "movement": 6
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 195,
            "movement": -34
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/12ca87c2ea2fa9506d6fc562bd8f5a01/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Santa",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PA",
            "name": "Panama",
            "position": 157,
            "movement": -6
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 4,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/965eeb50245f3178580ac5bda885e56b/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Overloading",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 52,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 85,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/7861d849c8157fbffc37ccebf0ee75c5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Dangerous",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 38,
            "movement": -15
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 136,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Misunderstood",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 73,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 102,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bad Vibes",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 83,
            "movement": 51
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 191,
            "movement": 6
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e61faaeb59320961cbd17a1ef7f9e6e7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Treasure",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 119,
            "movement": -55
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 130,
            "movement": 10
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Rhythm & Blues",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 22,
            "movement": -18
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4f920b01bcb9ce9949049741f8720fc7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Toxic",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 27,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/937b1cd4f41db02513dbe7e16b2189d2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Amazing",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 44,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Jazzy's Song",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 53,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d096ea1c1019d1af67c0a2e434890e1e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Comforter",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 63,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e18f46f5169476d41ff6bf5f188e1127/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Gimme Dat",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 140,
            "movement": 43
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2e52f4bf8bdb05c98002b714669ee2c2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "My Baby",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 94,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/764fec44b70e643da16fe971e5ad3099/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "All The Love",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 188,
            "movement": -79
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d30dbeb4d445f5cc6f7f100b830731c4/500x500-000000-80-0-0.jpg"
  }
];
  
  /** Totals, derived so they can never disagree with the data above. */
  export const livePlacementCount = liveCharts.reduce(
    (n, r) => n + r.platforms.reduce((m, p) => m + p.entries.length, 0),
    0
  );
  export const liveNumberOnes = liveCharts.reduce(
    (n, r) => n + r.platforms.reduce((m, p) => m + p.numberOnes, 0),
    0
  );
  // Counted by the site's own rule (app/lib/liveChartMeta.ts): kworb labels
  // Britain "UK" on five platforms and "GB" on Spotify's, and emits "WW" for
  // its worldwide chart. A raw code count claimed the UK twice and the world
  // as a nation — the share card said 151 countries where the page said 149.
  export const liveCountryCount = countriesOf(
    liveCharts.flatMap((r) => r.platforms.flatMap((p) => p.entries))
  );
  
  /** Placements per platform, biggest first — powers the summary row. */
  export const livePlatformTotals: { platform: string; placements: number; numberOnes: number }[] =
    livePlatforms
      .map((platform) => {
        const blocks = liveCharts.flatMap((r) => r.platforms.filter((p) => p.platform === platform));
        return {
          platform,
          placements: blocks.reduce((n, p) => n + p.entries.length, 0),
          numberOnes: blocks.reduce((n, p) => n + p.numberOnes, 0),
        };
      })
      .sort((a, b) => b.placements - a.placements);
  