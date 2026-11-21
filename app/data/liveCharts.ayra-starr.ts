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
  export const liveChartsBuiltAt = "2026-11-21T07:15Z";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","Spotify Albums","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "Heaven Baby",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 7,
            "movement": 9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 7,
            "movement": -1
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 10,
            "movement": -1
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 12,
            "movement": -3
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 14,
            "movement": -12
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 15,
            "movement": -2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 17,
            "movement": -5
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
            "country": "AO",
            "name": "Angola",
            "position": 29,
            "movement": -2
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
            "position": 39,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 40,
            "movement": -28
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 42,
            "movement": -10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 43,
            "movement": -7
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 44,
            "movement": -3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 44,
            "movement": 22
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 47,
            "movement": 5
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 48,
            "movement": -27
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 49,
            "movement": 8
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
            "position": 52,
            "movement": -4
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 55,
            "movement": 3
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
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 65,
            "movement": 75
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
            "position": 103,
            "movement": -36
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 103,
            "movement": -30
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
            "position": 127,
            "movement": -8
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 129,
            "movement": -33
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 147,
            "movement": -22
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 157,
            "movement": 20
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 184,
            "movement": null,
            "status": "new"
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
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 16,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 16,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 17,
            "movement": -1
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
            "position": 23,
            "movement": 5
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 47,
            "movement": 1
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 56,
            "movement": -8
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 71,
            "movement": -2
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 104,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 146,
            "movement": -2
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 161,
            "movement": -45
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 195,
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 6,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 7,
            "movement": -4
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
            "position": 19,
            "movement": 162
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 53,
            "movement": 16
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
            "country": "FJ",
            "name": "Fiji",
            "position": 5,
            "movement": 10
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 17,
            "movement": 76
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 17,
            "movement": -2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 18,
            "movement": -11
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
            "position": 23,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 24,
            "movement": -11
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 26,
            "movement": -2
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 31,
            "movement": -12
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 36,
            "movement": 9
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 37,
            "movement": 16
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 38,
            "movement": -18
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 40,
            "movement": 34
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 43,
            "movement": -17
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 45,
            "movement": 63
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 47,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 48,
            "movement": -8
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 56,
            "movement": -31
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 57,
            "movement": 12
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 63,
            "movement": 56
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 67,
            "movement": 4
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 71,
            "movement": 6
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 74,
            "movement": 5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 78,
            "movement": -17
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 82,
            "movement": -21
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 85,
            "movement": -6
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 85,
            "movement": -21
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 89,
            "movement": 27
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 94,
            "movement": -20
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 94,
            "movement": 23
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 94,
            "movement": -36
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 112,
            "movement": -33
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 124,
            "movement": -11
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
            "country": "MR",
            "name": "Mauritania",
            "position": 135,
            "movement": -13
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 152,
            "movement": 41
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 164,
            "movement": -28
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 173,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 188,
            "movement": -102
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 198,
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
            "position": 11,
            "movement": 2
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 25,
            "movement": 0
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 59,
            "movement": -4
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 67,
            "movement": -21
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 86,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 181,
            "movement": 7
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 21,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 80,
            "movement": -25
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 112,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 114,
            "movement": -43
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
            "country": "MU",
            "name": "Mauritius",
            "position": 49,
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 79,
            "movement": null,
            "status": "new"
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
            "country": "TD",
            "name": "Chad",
            "position": 84,
            "movement": 95
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 108,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 114,
            "movement": -60
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 137,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 140,
            "movement": 52
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 181,
            "movement": -1
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 197,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 198,
            "movement": -28
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
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 22,
            "movement": -5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 32,
            "movement": -4
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 40,
            "movement": -29
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 44,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 77,
            "movement": 5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 108,
            "movement": -27
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
            "country": "CM",
            "name": "Cameroon",
            "position": 140,
            "movement": -30
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 164,
            "movement": -5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 188,
            "movement": -74
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
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 27,
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
    "title": "Colorado",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 23,
            "movement": 8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 38,
            "movement": 3
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
            "position": 48,
            "movement": -5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 83,
            "movement": -13
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 93,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 158,
            "movement": -13
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 182,
            "movement": -21
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 183,
            "movement": -130
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 197,
            "movement": -7
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
            "position": 185,
            "movement": -9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 187,
            "movement": -14
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
            "position": 50,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4d16c0dbdfcfa22baaec4a11c3f283a/500x500-000000-80-0-0.jpg"
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
            "position": 36,
            "movement": 30
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
            "position": 95,
            "movement": -40
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 102,
            "movement": -18
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
            "position": 156,
            "movement": -7
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
    "title": "Away",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 55,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 91,
            "movement": -37
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 104,
            "movement": -2
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 176,
            "movement": -51
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/24407cf49fdf864463cb5ca5ad974630/500x500-000000-80-0-0.jpg"
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
            "country": "UG",
            "name": "Uganda",
            "position": 120,
            "movement": 73
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 122,
            "movement": 49
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 158,
            "movement": -53
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 187,
            "movement": 8
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 190,
            "movement": -104
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
    "title": "Commas",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 22,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 117,
            "movement": 70
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 139,
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PA",
            "name": "Panama",
            "position": 88,
            "movement": -26
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d096ea1c1019d1af67c0a2e434890e1e/500x500-000000-80-0-0.jpg"
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
            "country": "LR",
            "name": "Liberia",
            "position": 125,
            "movement": 26
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 127,
            "movement": null,
            "status": "new"
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 184,
            "movement": -52
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
            "country": "UG",
            "name": "Uganda",
            "position": 110,
            "movement": -16
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 113,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 130,
            "movement": -21
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 143,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 150,
            "movement": -29
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 196,
            "movement": -58
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4b5a287c8f574407dc5b1b03b5ae0c58/500x500-000000-80-0-0.jpg"
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
    "title": "Tornado",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 99,
            "movement": 24
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 99,
            "movement": -13
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 148,
            "movement": 32
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
            "position": 53,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/faa0b0578b463b8808c25da8f594aced/500x500-000000-80-0-0.jpg"
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
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 126,
            "movement": 5
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-24",
    "cover": "https://cdn-images.dzcdn.net/images/cover/24407cf49fdf864463cb5ca5ad974630/500x500-000000-80-0-0.jpg"
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
            "position": 70,
            "movement": -50
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
    "title": "Wo, man",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 11,
            "movement": 0
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 32,
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
            "position": 136,
            "movement": 13
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c4c1696f82feac0a7fa1e26379b9f7e2/500x500-000000-80-0-0.jpg"
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
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e61faaeb59320961cbd17a1ef7f9e6e7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bloody Samaritan",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 186,
            "movement": -50
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 192,
            "movement": -9
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
    "title": "My Love",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "IE",
            "name": "Ireland",
            "position": 76,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-21",
    "cover": "https://cdn-images.dzcdn.net/images/cover/7ca022ded50772370b6984e9bfa4d1fd/500x500-000000-80-0-0.jpg"
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
            "position": 57,
            "movement": -1
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
    "title": "Gimme Dat",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 61,
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
            "position": 141,
            "movement": 13
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
            "position": 185,
            "movement": 7
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
  