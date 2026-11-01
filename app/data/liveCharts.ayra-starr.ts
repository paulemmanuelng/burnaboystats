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
  export const liveChartsUpdated = "2026-11-01";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-01T06:12Z";
  
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
            "movement": 7
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 3,
            "movement": 2
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 4,
            "movement": -1
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 5,
            "movement": 2
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 6,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 8,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 10,
            "movement": -5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 10,
            "movement": -1
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 10,
            "movement": 7
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 12,
            "movement": -7
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 13,
            "movement": 7
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 13,
            "movement": 5
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 13,
            "movement": -2
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 13,
            "movement": -5
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 14,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 14,
            "movement": -3
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 16,
            "movement": -8
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 21,
            "movement": -8
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 21,
            "movement": 5
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 24,
            "movement": -12
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 25,
            "movement": -5
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 25,
            "movement": -13
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 26,
            "movement": -6
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 26,
            "movement": 2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 30,
            "movement": -7
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 37,
            "movement": -9
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 38,
            "movement": -18
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 39,
            "movement": -10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 41,
            "movement": -8
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 41,
            "movement": 9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 41,
            "movement": -14
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 45,
            "movement": -14
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 46,
            "movement": -5
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 49,
            "movement": -5
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 51,
            "movement": -14
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 58,
            "movement": 5
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 63,
            "movement": -31
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 74,
            "movement": -17
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 76,
            "movement": -6
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 95,
            "movement": 54
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 96,
            "movement": 20
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 100,
            "movement": 1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 108,
            "movement": -27
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 154,
            "movement": -26
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 163,
            "movement": -7
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 168,
            "movement": 0
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
            "country": "FJ",
            "name": "Fiji",
            "position": 5,
            "movement": 15
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 5,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 7,
            "movement": null,
            "status": "re"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 8,
            "movement": -6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 9,
            "movement": null,
            "status": "re"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 9,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 11,
            "movement": -4
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 14,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 20,
            "movement": -8
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 22,
            "movement": -5
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 58,
            "movement": -46
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 60,
            "movement": -27
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 70,
            "movement": -36
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 81,
            "movement": -43
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
            "position": 9,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 10,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 14,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 16,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 17,
            "movement": -5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 18,
            "movement": 0
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 26,
            "movement": -2
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 35,
            "movement": -4
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 56,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 69,
            "movement": -8
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 89,
            "movement": -2
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 122,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 135,
            "movement": -7
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MT",
            "name": "Malta",
            "position": 11,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 22,
            "movement": -4
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 72,
            "movement": -14
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 109,
            "movement": -30
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 145,
            "movement": -135
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 177,
            "movement": -152
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
            "position": 66,
            "movement": -21
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 113,
            "movement": -12
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
            "position": 65,
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
    "title": "Starrgirl",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 4,
            "movement": -2
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 6,
            "movement": -5
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 7,
            "movement": -3
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 13,
            "movement": 6
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 13,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 13,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 13,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 13,
            "movement": -4
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 14,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 14,
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 16,
            "movement": 0
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 17,
            "movement": 4
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 18,
            "movement": 18
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 18,
            "movement": 8
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 23,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 23,
            "movement": 5
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 29,
            "movement": 0
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 29,
            "movement": 8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 32,
            "movement": -2
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 36,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 39,
            "movement": -5
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 42,
            "movement": 0
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 42,
            "movement": 35
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 46,
            "movement": -11
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 53,
            "movement": -1
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 54,
            "movement": 62
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 55,
            "movement": 113
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 55,
            "movement": -21
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 56,
            "movement": 12
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 56,
            "movement": -13
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 57,
            "movement": 3
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 58,
            "movement": -2
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 66,
            "movement": 20
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 68,
            "movement": -35
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 76,
            "movement": -14
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 76,
            "movement": -32
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 82,
            "movement": -15
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 86,
            "movement": -12
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 89,
            "movement": -17
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 96,
            "movement": 26
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 106,
            "movement": 19
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 108,
            "movement": -64
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 115,
            "movement": -21
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 119,
            "movement": -10
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 124,
            "movement": 51
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 141,
            "movement": -46
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 148,
            "movement": -2
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 162,
            "movement": -20
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 164,
            "movement": -86
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
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 9,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 12,
            "movement": -2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 15,
            "movement": 29
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 38,
            "movement": -23
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 63,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 85,
            "movement": -21
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 130,
            "movement": 50
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 138,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 147,
            "movement": -21
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 148,
            "movement": -11
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 185,
            "movement": -57
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
            "position": 24,
            "movement": -4
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
            "position": 170,
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
            "position": 74,
            "movement": -19
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
            "position": 21,
            "movement": -5
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
            "country": "LR",
            "name": "Liberia",
            "position": 55,
            "movement": 10
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 61,
            "movement": -9
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 84,
            "movement": -53
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 117,
            "movement": 45
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 121,
            "movement": 7
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 125,
            "movement": 65
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 132,
            "movement": -18
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 137,
            "movement": -26
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 164,
            "movement": -6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 200,
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
    "title": "Rush",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 20,
            "movement": -2
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 30,
            "movement": -6
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 35,
            "movement": 3
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 41,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 54,
            "movement": -13
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 200,
            "movement": -11
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
            "position": 31,
            "movement": 7
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 80,
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
            "position": 65,
            "movement": null,
            "status": "re"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 88,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a73bed954d61b52564118ac926925d76/500x500-000000-80-0-0.jpg"
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
            "position": 27,
            "movement": -5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 40,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 47,
            "movement": -8
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 50,
            "movement": 22
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 92,
            "movement": 1
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 128,
            "movement": -31
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 168,
            "movement": -11
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
            "position": 131,
            "movement": -13
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 177,
            "movement": -30
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
            "position": 158,
            "movement": -30
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
            "country": "MR",
            "name": "Mauritania",
            "position": 67,
            "movement": -58
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 75,
            "movement": 1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 110,
            "movement": 55
          },
          {
            "country": "FR",
            "name": "France",
            "position": 112,
            "movement": -7
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 114,
            "movement": -84
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 126,
            "movement": -16
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 130,
            "movement": -5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 142,
            "movement": 7
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 166,
            "movement": 0
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
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 8,
            "movement": 17
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 99,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 129,
            "movement": -20
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 135,
            "movement": -30
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 148,
            "movement": 40
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 180,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 192,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
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
    "title": "Tornado",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 74,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 95,
            "movement": 21
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 141,
            "movement": 24
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 187,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 198,
            "movement": -28
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
            "position": 116,
            "movement": -3
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
            "position": 73,
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
            "position": 95,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/faa0b0578b463b8808c25da8f594aced/500x500-000000-80-0-0.jpg"
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
            "position": 53,
            "movement": -8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 84,
            "movement": -6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 90,
            "movement": 20
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 105,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 117,
            "movement": 58
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 142,
            "movement": -25
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 178,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 185,
            "movement": -46
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/fe3deba215d998d74542663a84621852/500x500-000000-80-0-0.jpg"
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
            "position": 5,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 96,
            "movement": 43
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 126,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 131,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 149,
            "movement": -30
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 177,
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
    "title": "Away",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 79,
            "movement": -6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 82,
            "movement": -30
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 160,
            "movement": -5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 161,
            "movement": -14
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 193,
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
    "title": "Ngozi",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 123,
            "movement": -62
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 151,
            "movement": -19
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 177,
            "movement": -42
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 199,
            "movement": -75
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
            "position": 82,
            "movement": 41
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
            "position": 9,
            "movement": -1
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 20,
            "movement": 1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 91,
            "movement": 7
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
            "position": 68,
            "movement": 7
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c4c1696f82feac0a7fa1e26379b9f7e2/500x500-000000-80-0-0.jpg"
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
            "position": 24,
            "movement": null,
            "status": "re"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 40,
            "movement": 1
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BB",
            "name": "Barbados",
            "position": 66,
            "movement": -8
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
            "country": "LR",
            "name": "Liberia",
            "position": 104,
            "movement": 66
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 107,
            "movement": -6
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 153,
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
    "title": "Santa",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 127,
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
    "title": "Ms. Paper",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 124,
            "movement": 40
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LV",
            "name": "Latvia",
            "position": 48,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-28",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
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
            "position": 189,
            "movement": -58
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
            "position": 32,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6811d7a880826af2be69b81686f629f2/500x500-000000-80-0-0.jpg"
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
            "position": 120,
            "movement": 5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 181,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e61faaeb59320961cbd17a1ef7f9e6e7/500x500-000000-80-0-0.jpg"
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
            "position": 17,
            "movement": -9
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-24",
    "cover": "https://cdn-images.dzcdn.net/images/cover/24407cf49fdf864463cb5ca5ad974630/500x500-000000-80-0-0.jpg"
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
            "position": 34,
            "movement": 38
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d30dbeb4d445f5cc6f7f100b830731c4/500x500-000000-80-0-0.jpg"
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
            "position": 45,
            "movement": -41
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-29",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "2 Sugar",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 17,
            "movement": 45
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-27",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e4286ac8a38829b6cf5d225c311bccf7/500x500-000000-80-0-0.jpg"
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
            "position": 13,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-24",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2e52f4bf8bdb05c98002b714669ee2c2/500x500-000000-80-0-0.jpg"
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
            "position": 86,
            "movement": -56
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-28",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e18f46f5169476d41ff6bf5f188e1127/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Love Don't Cost A Dime",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 123,
            "movement": -51
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-24",
    "cover": "https://cdn-images.dzcdn.net/images/cover/37efb43b4704415ff51e98e357041982/500x500-000000-80-0-0.jpg"
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
            "position": 182,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-31",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Dangerous",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 199,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
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
  