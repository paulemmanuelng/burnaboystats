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
  export const liveChartsUpdated = "2026-11-06";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-06T19:29Z";
  
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
            "country": "SC",
            "name": "Seychelles",
            "position": 1,
            "movement": 1
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 5,
            "movement": 2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 5,
            "movement": 1
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 7,
            "movement": 7
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 7,
            "movement": 1
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 7,
            "movement": -6
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 8,
            "movement": 3
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 10,
            "movement": -3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 10,
            "movement": -3
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 11,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 13,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 14,
            "movement": -1
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 14,
            "movement": 0
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 19,
            "movement": -3
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 19,
            "movement": -9
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 19,
            "movement": -17
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 20,
            "movement": -8
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 21,
            "movement": 17
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 24,
            "movement": -7
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 26,
            "movement": 25
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 28,
            "movement": 9
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 28,
            "movement": -6
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 29,
            "movement": -10
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 30,
            "movement": 8
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 31,
            "movement": -7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 31,
            "movement": 11
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 32,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 35,
            "movement": 3
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 37,
            "movement": 86
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 38,
            "movement": -3
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 39,
            "movement": -4
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 39,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 42,
            "movement": 77
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 45,
            "movement": 10
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 46,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 49,
            "movement": -7
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 51,
            "movement": 3
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 70,
            "movement": 2
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 72,
            "movement": 71
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 79,
            "movement": 5
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 92,
            "movement": -42
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 96,
            "movement": -12
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 101,
            "movement": 0
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 121,
            "movement": 3
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 127,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 136,
            "movement": -5
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
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 11,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 14,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 15,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 21,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 24,
            "movement": -2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 35,
            "movement": -7
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 45,
            "movement": -1
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 55,
            "movement": -4
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 78,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 98,
            "movement": -4
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 127,
            "movement": -6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 156,
            "movement": 5
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 1,
        "entries": [
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 1,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 8,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 31,
            "movement": -25
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 88,
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
            "country": "ZA",
            "name": "South Africa",
            "position": 78,
            "movement": -25
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 120,
            "movement": 0
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
            "position": 25,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 29,
            "movement": -17
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
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 7,
            "movement": 6
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 8,
            "movement": 3
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 9,
            "movement": 3
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 9,
            "movement": 4
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 10,
            "movement": 33
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 12,
            "movement": 14
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 13,
            "movement": 36
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 17,
            "movement": 15
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 18,
            "movement": 9
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 20,
            "movement": 8
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 21,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 21,
            "movement": -11
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 27,
            "movement": 12
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 37,
            "movement": -17
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 37,
            "movement": -2
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 43,
            "movement": 6
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 44,
            "movement": 1
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 45,
            "movement": -12
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 47,
            "movement": 20
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 50,
            "movement": -25
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 51,
            "movement": 6
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 52,
            "movement": 26
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 52,
            "movement": -5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 53,
            "movement": -12
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 55,
            "movement": 121
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 55,
            "movement": -21
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 69,
            "movement": -9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 69,
            "movement": -6
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 69,
            "movement": 61
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 71,
            "movement": -5
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 71,
            "movement": 25
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 72,
            "movement": -37
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 74,
            "movement": -16
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 82,
            "movement": -13
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 90,
            "movement": 26
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 94,
            "movement": 80
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 102,
            "movement": 61
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 115,
            "movement": -21
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 117,
            "movement": 42
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 130,
            "movement": -43
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 133,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 142,
            "movement": -3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 144,
            "movement": -64
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 145,
            "movement": 8
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 152,
            "movement": -109
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
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "EG",
            "name": "Egypt",
            "position": 6,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 98,
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
    "title": "treat u right",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 11,
            "movement": -7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 11,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 12,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 62,
            "movement": 21
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 65,
            "movement": -6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 70,
            "movement": -5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 90,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 110,
            "movement": 24
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 112,
            "movement": 32
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 117,
            "movement": 2
          },
          {
            "country": "LY",
            "name": "Libya",
            "position": 130,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 165,
            "movement": 23
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 183,
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
            "position": 19,
            "movement": 2
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
            "position": 40,
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
    "title": "Rush",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BW",
            "name": "Botswana",
            "position": 2,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 2,
            "movement": 0
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 4,
            "movement": -3
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 22,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 23,
            "movement": 2
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 45,
            "movement": 1
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 57,
            "movement": -26
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 57,
            "movement": -3
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
            "position": 46,
            "movement": 23
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 68,
            "movement": -16
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 103,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 107,
            "movement": -25
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 131,
            "movement": 63
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 68,
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
    "title": "No love",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 19,
            "movement": 26
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 26,
            "movement": 30
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 36,
            "movement": 27
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 54,
            "movement": 9
          },
          {
            "country": "FR",
            "name": "France",
            "position": 81,
            "movement": 17
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 95,
            "movement": 22
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 100,
            "movement": -5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 124,
            "movement": 7
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 135,
            "movement": 3
          },
          {
            "country": "BE",
            "name": "Belgium",
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
            "country": "NE",
            "name": "Niger",
            "position": 47,
            "movement": 0
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
            "position": 44,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/7b49d51e89ff07824c8c62043775a2ab/500x500-000000-80-0-0.jpg"
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
            "position": 29,
            "movement": -1
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 34,
            "movement": 77
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 42,
            "movement": -7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 42,
            "movement": 7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 60,
            "movement": 26
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 115,
            "movement": -12
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 118,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 129,
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
            "position": 167,
            "movement": 5
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
            "position": 157,
            "movement": 13
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
            "position": 47,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4d16c0dbdfcfa22baaec4a11c3f283a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Tornado",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 40,
            "movement": 121
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 41,
            "movement": 61
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 58,
            "movement": 6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 170,
            "movement": -54
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 179,
            "movement": 12
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 185,
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
            "position": 116,
            "movement": 25
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
            "position": 103,
            "movement": -53
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
    "title": "Who's Dat Girl",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 51,
            "movement": 40
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 61,
            "movement": 13
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 78,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 79,
            "movement": 110
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 105,
            "movement": -31
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 107,
            "movement": -58
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 108,
            "movement": 6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 152,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 188,
            "movement": -99
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
            "position": 80,
            "movement": -7
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 85,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 124,
            "movement": -40
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 146,
            "movement": -61
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 148,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 154,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 157,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 187,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/24407cf49fdf864463cb5ca5ad974630/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "The Year I Turned 21",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 9,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 88,
            "movement": 81
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 123,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 151,
            "movement": -26
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 154,
            "movement": -15
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 166,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 178,
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
    "title": "19 & Dangerous",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 35,
            "movement": -11
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 89,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 135,
            "movement": 14
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 172,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 177,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 177,
            "movement": -32
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 197,
            "movement": -4
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
    "title": "Ngozi",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 117,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 129,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 147,
            "movement": 27
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 158,
            "movement": 11
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 175,
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
            "position": 51,
            "movement": -10
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/12ca87c2ea2fa9506d6fc562bd8f5a01/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Last Heartbreak Song",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 11,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 89,
            "movement": 82
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 107,
            "movement": 29
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 146,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 150,
            "movement": -54
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 13,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 56,
            "movement": 91
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
    "title": "Pray",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 21,
            "movement": -4
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 27,
            "movement": 75
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 91,
            "movement": -14
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-24",
    "cover": "https://cdn-images.dzcdn.net/images/cover/24407cf49fdf864463cb5ca5ad974630/500x500-000000-80-0-0.jpg"
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
            "position": 83,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 113,
            "movement": 60
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 122,
            "movement": 18
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4b5a287c8f574407dc5b1b03b5ae0c58/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bloody Samaritan",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 153,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 182,
            "movement": 14
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
            "position": 42,
            "movement": -12
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6811d7a880826af2be69b81686f629f2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "All the People",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 62,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 68,
            "movement": null,
            "status": "new"
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 95,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-06",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0dda3f7dc6c530814d51c9cb6eca57be/500x500-000000-80-0-0.jpg"
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
            "position": 22,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c4c1696f82feac0a7fa1e26379b9f7e2/500x500-000000-80-0-0.jpg"
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
            "position": 51,
            "movement": 72
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
            "position": 29,
            "movement": -25
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-05",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
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
            "position": 89,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 171,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-05",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
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
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 32,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/965eeb50245f3178580ac5bda885e56b/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Running",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 28,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-06",
    "cover": "https://cdn-images.dzcdn.net/images/cover/937b1cd4f41db02513dbe7e16b2189d2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ms. Paper",
    "platforms": [
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
    "title": "Comforter",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 24,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-06",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e18f46f5169476d41ff6bf5f188e1127/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Sability",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 45,
            "movement": 19
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-02",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6d6d6db9d6a54f8735971b8cab496784/500x500-000000-80-0-0.jpg"
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
            "position": 147,
            "movement": -35
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d30dbeb4d445f5cc6f7f100b830731c4/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bad Vibes",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 167,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e61faaeb59320961cbd17a1ef7f9e6e7/500x500-000000-80-0-0.jpg"
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
            "position": 192,
            "movement": -31
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-05",
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 197,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-06",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Overloading",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 199,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-05",
    "cover": "https://cdn-images.dzcdn.net/images/cover/7861d849c8157fbffc37ccebf0ee75c5/500x500-000000-80-0-0.jpg"
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
            "position": 174,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-06",
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
            "position": 80,
            "movement": 56
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-11-04",
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
  