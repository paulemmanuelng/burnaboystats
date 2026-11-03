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
  export const liveChartsUpdated = "2026-11-03";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-03T14:21Z";
  
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
            "country": "SB",
            "name": "Solomon Islands",
            "position": 1,
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 3,
            "movement": 16
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 4,
            "movement": 4
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 4,
            "movement": 6
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 4,
            "movement": -3
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 6,
            "movement": -2
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 7,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 7,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 8,
            "movement": 0
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 9,
            "movement": -1
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 9,
            "movement": 9
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 11,
            "movement": -2
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 11,
            "movement": 45
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 12,
            "movement": 8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 12,
            "movement": 1
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 14,
            "movement": -2
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 14,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 17,
            "movement": -3
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 24,
            "movement": 3
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 25,
            "movement": -3
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 27,
            "movement": 13
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 29,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 29,
            "movement": -4
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 30,
            "movement": 7
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 32,
            "movement": -19
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 34,
            "movement": 4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 34,
            "movement": 14
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 37,
            "movement": -2
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 43,
            "movement": -2
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 44,
            "movement": 24
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 46,
            "movement": 19
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 56,
            "movement": -3
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 59,
            "movement": -5
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 62,
            "movement": 1
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 67,
            "movement": -15
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 68,
            "movement": 29
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 70,
            "movement": -6
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 85,
            "movement": -63
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 90,
            "movement": 18
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 94,
            "movement": -30
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 101,
            "movement": -29
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 107,
            "movement": 23
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 108,
            "movement": -2
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 113,
            "movement": 79
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 138,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 166,
            "movement": 12
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 172,
            "movement": 1
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 181,
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
            "country": "MZ",
            "name": "Mozambique",
            "position": 10,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 14,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 15,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 19,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 20,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 23,
            "movement": -2
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 32,
            "movement": -5
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 46,
            "movement": -4
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 63,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 86,
            "movement": -5
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 113,
            "movement": -10
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 137,
            "movement": -13
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 149,
            "movement": -3
          }
        ]
      },
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NA",
            "name": "Namibia",
            "position": 2,
            "movement": null,
            "status": "re"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 3,
            "movement": 2
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 5,
            "movement": 15
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 7,
            "movement": null,
            "status": "re"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 8,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 9,
            "movement": null,
            "status": "re"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 13,
            "movement": -5
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 14,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 15,
            "movement": -4
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 30,
            "movement": -10
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 31,
            "movement": -9
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 83,
            "movement": -25
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 91,
            "movement": -21
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 6,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 16,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 23,
            "movement": -1
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 53,
            "movement": -9
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 76,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 138,
            "movement": -17
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
            "position": 69,
            "movement": 10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 123,
            "movement": -20
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
            "position": 9,
            "movement": 40
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 97,
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
    "title": "Starrgirl",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 2,
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 4,
            "movement": 18
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 5,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 8,
            "movement": 4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 10,
            "movement": 2
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 11,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 11,
            "movement": 2
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 12,
            "movement": -1
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 20,
            "movement": -5
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 21,
            "movement": 1
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 23,
            "movement": -17
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 23,
            "movement": 15
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 26,
            "movement": -11
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 27,
            "movement": 35
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 31,
            "movement": -4
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 32,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 33,
            "movement": 1
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 34,
            "movement": 118
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 35,
            "movement": -12
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 37,
            "movement": 20
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 39,
            "movement": -2
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 41,
            "movement": 147
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 44,
            "movement": -35
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 46,
            "movement": 16
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 51,
            "movement": 20
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 57,
            "movement": -12
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 57,
            "movement": -6
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 58,
            "movement": 0
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 64,
            "movement": 34
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 69,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 69,
            "movement": -11
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 69,
            "movement": -14
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 72,
            "movement": -18
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 81,
            "movement": -3
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 81,
            "movement": -37
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 82,
            "movement": -28
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 83,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 86,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 88,
            "movement": -37
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 96,
            "movement": 13
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 112,
            "movement": 64
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 116,
            "movement": 25
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 126,
            "movement": -5
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 127,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 140,
            "movement": 25
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 152,
            "movement": 24
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 152,
            "movement": 8
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 153,
            "movement": -40
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 160,
            "movement": -71
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
            "position": 16,
            "movement": -4
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 61,
            "movement": -12
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
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
            "position": 5,
            "movement": 4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 12,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 17,
            "movement": -6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 28,
            "movement": 65
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 50,
            "movement": -39
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 56,
            "movement": 18
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 69,
            "movement": 38
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 73,
            "movement": 37
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 128,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 128,
            "movement": 20
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 147,
            "movement": 8
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
            "position": 23,
            "movement": -3
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
            "position": 52,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 27,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a88a32de107d134d181e111b3ae5f780/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "The Year I Turned 21",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 107,
            "movement": 42
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 125,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 128,
            "movement": -10
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 130,
            "movement": 52
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 140,
            "movement": 23
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 146,
            "movement": 8
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 176,
            "movement": -28
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 180,
            "movement": -10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 182,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 191,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 191,
            "movement": -90
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
            "position": 71,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d096ea1c1019d1af67c0a2e434890e1e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Colorado",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 25,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 26,
            "movement": 12
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 56,
            "movement": -13
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 93,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 105,
            "movement": -14
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 109,
            "movement": -64
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 112,
            "movement": 18
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 153,
            "movement": 31
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
            "position": 162,
            "movement": -17
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 186,
            "movement": -15
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
            "position": 149,
            "movement": -17
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
            "position": 60,
            "movement": 27
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4d16c0dbdfcfa22baaec4a11c3f283a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "No love",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ML",
            "name": "Mali",
            "position": 65,
            "movement": -5
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 69,
            "movement": -4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 72,
            "movement": 8
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 84,
            "movement": -55
          },
          {
            "country": "FR",
            "name": "France",
            "position": 106,
            "movement": -2
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 127,
            "movement": 51
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 138,
            "movement": -29
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 164,
            "movement": -16
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 165,
            "movement": -28
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
            "position": 47,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/7b49d51e89ff07824c8c62043775a2ab/500x500-000000-80-0-0.jpg"
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
            "position": 54,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 76,
            "movement": 11
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 98,
            "movement": -2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 99,
            "movement": 35
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 157,
            "movement": -68
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 163,
            "movement": 31
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 174,
            "movement": -13
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 182,
            "movement": -76
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
            "position": 58,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/fe3deba215d998d74542663a84621852/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Rush",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 21,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 31,
            "movement": 1
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 31,
            "movement": -2
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 46,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 52,
            "movement": -2
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 25,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 55,
            "movement": 2
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 174,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a73bed954d61b52564118ac926925d76/500x500-000000-80-0-0.jpg"
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
            "position": 44,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 103,
            "movement": -30
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 138,
            "movement": -39
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 151,
            "movement": -6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 190,
            "movement": null,
            "status": "new"
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
            "position": 132,
            "movement": -24
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 11,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 90,
            "movement": 5
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/faa0b0578b463b8808c25da8f594aced/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "19 & Dangerous",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 19,
            "movement": 7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 111,
            "movement": -6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 111,
            "movement": 72
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 159,
            "movement": -17
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 176,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 196,
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
            "position": 133,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b922c719d3a9901f749140e8f532a8d0/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Away",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 29,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 77,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 80,
            "movement": 34
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 92,
            "movement": 38
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 167,
            "movement": 27
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 169,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/24407cf49fdf864463cb5ca5ad974630/500x500-000000-80-0-0.jpg"
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
            "position": 10,
            "movement": 0
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 19,
            "movement": 1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 103,
            "movement": -11
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PA",
            "name": "Panama",
            "position": 71,
            "movement": -28
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 74,
            "movement": -38
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c4c1696f82feac0a7fa1e26379b9f7e2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Last Heartbreak Song",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 82,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 110,
            "movement": 17
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 110,
            "movement": 7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 120,
            "movement": 15
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 42,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d096ea1c1019d1af67c0a2e434890e1e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Commas",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 56,
            "movement": -44
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 83,
            "movement": -16
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 176,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 61,
            "movement": null,
            "status": "re"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d096ea1c1019d1af67c0a2e434890e1e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ngozi",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 152,
            "movement": -8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 158,
            "movement": -12
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 195,
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
            "country": "GH",
            "name": "Ghana",
            "position": 49,
            "movement": 7
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/12ca87c2ea2fa9506d6fc562bd8f5a01/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Pray",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 4,
            "movement": 24
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 13,
            "movement": 18
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 187,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-24",
    "cover": "https://cdn-images.dzcdn.net/images/cover/24407cf49fdf864463cb5ca5ad974630/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bloody Samaritan",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 17,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 180,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DM",
            "name": "Dominica",
            "position": 31,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6811d7a880826af2be69b81686f629f2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ms. Paper",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 124,
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
            "country": "SN",
            "name": "Senegal",
            "position": 118,
            "movement": 0
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
            "position": 68,
            "movement": null,
            "status": "re"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-28",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Santa",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 95,
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
    "title": "Hypé",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 95,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 57,
            "movement": -44
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Hot Body",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 117,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 152,
            "movement": -16
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4b5a287c8f574407dc5b1b03b5ae0c58/500x500-000000-80-0-0.jpg"
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
            "position": 161,
            "movement": -10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 186,
            "movement": 5
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e61faaeb59320961cbd17a1ef7f9e6e7/500x500-000000-80-0-0.jpg"
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
            "position": 50,
            "movement": 5
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d30dbeb4d445f5cc6f7f100b830731c4/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Sability",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 34,
            "movement": -30
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-02",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6d6d6db9d6a54f8735971b8cab496784/500x500-000000-80-0-0.jpg"
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
            "position": 140,
            "movement": -108
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-29",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Gimme Dat",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 96,
            "movement": -31
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-24",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2e52f4bf8bdb05c98002b714669ee2c2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Running",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 194,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-03",
    "cover": "https://cdn-images.dzcdn.net/images/cover/937b1cd4f41db02513dbe7e16b2189d2/500x500-000000-80-0-0.jpg"
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
            "position": 191,
            "movement": -38
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ayra Starr - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 77,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-11-03",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a73bed954d61b52564118ac926925d76/500x500-000000-80-0-0.jpg"
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
  