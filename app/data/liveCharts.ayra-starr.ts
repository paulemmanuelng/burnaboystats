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
  export const liveChartsUpdated = "2026-11-21";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-21T19:21Z";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","Spotify Albums","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "Heaven Baby",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 1,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 1,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 2,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 4,
            "movement": 0
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 5,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 7,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 9,
            "movement": -4
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 11,
            "movement": -1
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 12,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 14,
            "movement": 26
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 14,
            "movement": -12
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 17,
            "movement": -5
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 19,
            "movement": -4
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 23,
            "movement": -10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 23,
            "movement": 0
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 24,
            "movement": -10
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 25,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 27,
            "movement": 5
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 32,
            "movement": 5
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 33,
            "movement": 6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 41,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 44,
            "movement": 22
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 46,
            "movement": -17
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 50,
            "movement": 7
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 51,
            "movement": 1
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 52,
            "movement": 3
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 53,
            "movement": -9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 54,
            "movement": -5
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 58,
            "movement": -11
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 58,
            "movement": -23
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 60,
            "movement": -18
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 63,
            "movement": -21
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 74,
            "movement": 38
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 77,
            "movement": 30
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 82,
            "movement": -19
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 87,
            "movement": 16
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 103,
            "movement": -30
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 118,
            "movement": -53
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 120,
            "movement": -55
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 126,
            "movement": 1
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 151,
            "movement": -22
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 157,
            "movement": -109
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 158,
            "movement": -1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 165,
            "movement": -18
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 189,
            "movement": -28
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 198,
            "movement": -42
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
            "movement": 0
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 5,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 5,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 7,
            "movement": null,
            "status": "re"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 9,
            "movement": null,
            "status": "re"
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 12,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 13,
            "movement": 4
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 14,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 20,
            "movement": -3
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 28,
            "movement": 4
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 45,
            "movement": -11
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
            "position": 15,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 15,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 16,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 19,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 26,
            "movement": -3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 55,
            "movement": -8
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 62,
            "movement": -6
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 73,
            "movement": -2
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 108,
            "movement": -4
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 146,
            "movement": 15
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 148,
            "movement": -2
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MO",
            "name": "Macau",
            "position": 6,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 9,
            "movement": -8
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 10,
            "movement": -5
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 16,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 118,
            "movement": -107
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
            "position": 88,
            "movement": -15
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 141,
            "movement": -7
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 48,
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 9,
            "movement": 14
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 9,
            "movement": -4
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 15,
            "movement": 2
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 17,
            "movement": 46
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 19,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 19,
            "movement": 4
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 20,
            "movement": 6
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 22,
            "movement": 9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 22,
            "movement": -5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 34,
            "movement": -10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 38,
            "movement": -18
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 43,
            "movement": -17
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 43,
            "movement": 4
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 49,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 50,
            "movement": -2
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 56,
            "movement": -31
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 60,
            "movement": -23
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 62,
            "movement": 62
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 62,
            "movement": 73
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 64,
            "movement": 3
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 70,
            "movement": 24
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 71,
            "movement": 6
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 76,
            "movement": -36
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 81,
            "movement": 4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 82,
            "movement": -4
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 82,
            "movement": -21
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 84,
            "movement": 10
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 84,
            "movement": -48
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 105,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 105,
            "movement": 7
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 108,
            "movement": -23
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 110,
            "movement": -16
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 111,
            "movement": -37
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 116,
            "movement": 36
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 125,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 133,
            "movement": -78
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 134,
            "movement": -14
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 143,
            "movement": -86
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 150,
            "movement": -61
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 156,
            "movement": 42
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 188,
            "movement": -102
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 196,
            "movement": -23
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
            "position": 20,
            "movement": -4
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 139,
            "movement": -30
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
            "position": 8,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 12,
            "movement": 1
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 26,
            "movement": -1
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 62,
            "movement": -5
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 67,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 91,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 186,
            "movement": 10
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 80,
            "movement": -25
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 114,
            "movement": -43
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 116,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 140,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 151,
            "movement": 10
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 161,
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
            "position": 41,
            "movement": 6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 56,
            "movement": 9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 58,
            "movement": -3
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 63,
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
    "title": "The Year I Turned 21",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 13,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 53,
            "movement": 2
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 75,
            "movement": -26
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 79,
            "movement": -12
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 83,
            "movement": -67
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 114,
            "movement": -60
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 140,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 150,
            "movement": -13
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 166,
            "movement": 15
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 179,
            "movement": 19
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 188,
            "movement": -104
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 194,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 197,
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
            "position": 72,
            "movement": -7
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d096ea1c1019d1af67c0a2e434890e1e/500x500-000000-80-0-0.jpg"
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
            "position": 10,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 22,
            "movement": -5
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 24,
            "movement": -5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 38,
            "movement": -6
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 73,
            "movement": -29
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 77,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 114,
            "movement": 15
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 124,
            "movement": 68
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 140,
            "movement": -32
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 142,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 174,
            "movement": -10
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 193,
            "movement": -36
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
            "position": 31,
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
            "position": 33,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a88a32de107d134d181e111b3ae5f780/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Who's Dat Girl",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 43,
            "movement": 17
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 44,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 76,
            "movement": -9
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 83,
            "movement": 12
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 89,
            "movement": 13
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 124,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 131,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 145,
            "movement": 11
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 194,
            "movement": -41
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 88,
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
            "position": 72,
            "movement": 5
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/fe3deba215d998d74542663a84621852/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Colorado",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 41,
            "movement": 15
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 43,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 46,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 60,
            "movement": -12
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 83,
            "movement": -13
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 158,
            "movement": -13
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 183,
            "movement": -130
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
            "position": 183,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 185,
            "movement": 2
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
            "position": 178,
            "movement": -5
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
            "position": 56,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4d16c0dbdfcfa22baaec4a11c3f283a/500x500-000000-80-0-0.jpg"
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
            "position": 46,
            "movement": 45
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 55,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 78,
            "movement": 98
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 105,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 124,
            "movement": 2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 144,
            "movement": -18
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 164,
            "movement": -42
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 165,
            "movement": -82
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 196,
            "movement": null,
            "status": "new"
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
            "country": "UG",
            "name": "Uganda",
            "position": 101,
            "movement": -9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 122,
            "movement": -14
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 144,
            "movement": 40
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 155,
            "movement": -109
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 181,
            "movement": -64
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 181,
            "movement": -54
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 197,
            "movement": -72
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
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 23,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 26,
            "movement": null,
            "status": "re"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 39,
            "movement": null,
            "status": "re"
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 117,
            "movement": 70
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 190,
            "movement": -51
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SE",
            "name": "Sweden",
            "position": 192,
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
    "title": "Tornado",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 48,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 93,
            "movement": 6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 118,
            "movement": -19
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 155,
            "movement": -7
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
            "position": 148,
            "movement": -4
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
            "position": 26,
            "movement": 27
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/faa0b0578b463b8808c25da8f594aced/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Hot Body",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 53,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 110,
            "movement": -16
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 130,
            "movement": -21
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 135,
            "movement": -22
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 196,
            "movement": -58
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 196,
            "movement": -46
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4b5a287c8f574407dc5b1b03b5ae0c58/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "19 & Dangerous",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 32,
            "movement": -13
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 116,
            "movement": 42
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 122,
            "movement": 49
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 146,
            "movement": -26
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 182,
            "movement": 5
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
            "movement": 1
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b922c719d3a9901f749140e8f532a8d0/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "No love",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 29,
            "movement": -23
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 100,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 125,
            "movement": -9
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 164,
            "movement": -37
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
            "position": 48,
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
    "title": "Bad Vibes",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SR",
            "name": "Suriname",
            "position": 48,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 73,
            "movement": -9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 171,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 189,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e61faaeb59320961cbd17a1ef7f9e6e7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ngozi",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 91,
            "movement": -33
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 146,
            "movement": -43
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 147,
            "movement": 8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 194,
            "movement": 5
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/12ca87c2ea2fa9506d6fc562bd8f5a01/500x500-000000-80-0-0.jpg"
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
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 185,
            "movement": 7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 186,
            "movement": -50
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
            "position": 25,
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
    "title": "Wo, man",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 13,
            "movement": -2
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 33,
            "movement": -1
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
            "position": 178,
            "movement": -124
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c4c1696f82feac0a7fa1e26379b9f7e2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Pray",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 60,
            "movement": -6
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 109,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 119,
            "movement": -43
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-24",
    "cover": "https://cdn-images.dzcdn.net/images/cover/24407cf49fdf864463cb5ca5ad974630/500x500-000000-80-0-0.jpg"
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
            "position": 67,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 167,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 74,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-21",
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 161,
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
            "country": "MO",
            "name": "Macau",
            "position": 7,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-21",
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
            "country": "NG",
            "name": "Nigeria",
            "position": 158,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 54,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-21",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2e52f4bf8bdb05c98002b714669ee2c2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Santa",
    "platforms": [
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
    "title": "Treasure",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 8,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-21",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
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
            "position": 38,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-21",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4f920b01bcb9ce9949049741f8720fc7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Amazing",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MO",
            "name": "Macau",
            "position": 8,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-21",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ms. Paper",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 34,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-21",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
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
            "position": 55,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e18f46f5169476d41ff6bf5f188e1127/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Beggie Beggie",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 177,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b922c719d3a9901f749140e8f532a8d0/500x500-000000-80-0-0.jpg"
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
            "position": 154,
            "movement": -13
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-15",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Overloading",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 190,
            "movement": 10
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-15",
    "cover": "https://cdn-images.dzcdn.net/images/cover/7861d849c8157fbffc37ccebf0ee75c5/500x500-000000-80-0-0.jpg"
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
            "position": 26,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-11-20",
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
  