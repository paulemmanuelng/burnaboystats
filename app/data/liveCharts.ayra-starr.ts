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
  export const liveChartsUpdated = "2026-10-28";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-28T22:39Z";
  
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
            "country": "FJ",
            "name": "Fiji",
            "position": 1,
            "movement": 0
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 2,
            "movement": 4
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
            "movement": -1
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 4,
            "movement": 7
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 4,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 4,
            "movement": -1
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 6,
            "movement": -1
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 6,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 7,
            "movement": 54
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 7,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 8,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 8,
            "movement": -2
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 8,
            "movement": 0
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 8,
            "movement": 0
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 9,
            "movement": -1
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 11,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 12,
            "movement": -2
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 13,
            "movement": 9
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 14,
            "movement": 2
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 14,
            "movement": 1
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 16,
            "movement": -15
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 17,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 19,
            "movement": 6
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 19,
            "movement": -1
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 24,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 30,
            "movement": 3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 30,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 31,
            "movement": 0
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 31,
            "movement": -7
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 32,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 34,
            "movement": -1
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 35,
            "movement": -19
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 38,
            "movement": 104
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 39,
            "movement": 2
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 40,
            "movement": -2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 43,
            "movement": -2
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 45,
            "movement": 3
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 46,
            "movement": 27
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 48,
            "movement": -2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 52,
            "movement": 10
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 60,
            "movement": -5
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 65,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 76,
            "movement": -68
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 87,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 97,
            "movement": -6
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 97,
            "movement": -17
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 105,
            "movement": -47
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 133,
            "movement": 3
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 139,
            "movement": 19
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 156,
            "movement": 36
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 166,
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
            "position": 7,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 8,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 12,
            "movement": -1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 13,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 14,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 15,
            "movement": 0
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 23,
            "movement": 1
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 28,
            "movement": 3
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 48,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 56,
            "movement": -5
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 82,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 110,
            "movement": -4
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 131,
            "movement": 0
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 12,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 36,
            "movement": 9
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 45,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 46,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 62,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 93,
            "movement": -14
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 138,
            "movement": -131
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MA",
            "name": "Morocco",
            "position": 16,
            "movement": -11
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 19,
            "movement": -8
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 52,
            "movement": -36
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 66,
            "movement": -42
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
            "position": 33,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 106,
            "movement": -13
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
            "position": 4,
            "movement": -2
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 8,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 9,
            "movement": -5
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 9,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 9,
            "movement": 21
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 9,
            "movement": -1
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 10,
            "movement": 20
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 11,
            "movement": 6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 12,
            "movement": -1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 14,
            "movement": -6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 15,
            "movement": -2
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 16,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 17,
            "movement": -5
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 18,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 19,
            "movement": -1
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 21,
            "movement": 12
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 22,
            "movement": -13
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 24,
            "movement": 5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 27,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 30,
            "movement": 3
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 33,
            "movement": 1
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 37,
            "movement": -19
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 40,
            "movement": 8
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 41,
            "movement": -1
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 44,
            "movement": -20
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 45,
            "movement": -20
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 46,
            "movement": -14
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 47,
            "movement": 4
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 48,
            "movement": -2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 52,
            "movement": -14
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 58,
            "movement": -22
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 61,
            "movement": 89
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 66,
            "movement": -43
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 69,
            "movement": -11
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 71,
            "movement": -12
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 81,
            "movement": -4
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 83,
            "movement": -11
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 84,
            "movement": -15
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 88,
            "movement": -10
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 94,
            "movement": 49
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 102,
            "movement": -10
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 106,
            "movement": -15
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 110,
            "movement": -2
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 112,
            "movement": -10
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 121,
            "movement": -4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 125,
            "movement": -9
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 171,
            "movement": -122
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 187,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 189,
            "movement": -32
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 195,
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
            "position": 12,
            "movement": -3
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 49,
            "movement": 4
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
            "position": 6,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 6,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 9,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 35,
            "movement": -8
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 47,
            "movement": 19
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 49,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 58,
            "movement": 26
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 65,
            "movement": 61
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 106,
            "movement": 35
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 125,
            "movement": 6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 133,
            "movement": 13
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 170,
            "movement": 21
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
            "position": 16,
            "movement": -1
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
            "position": 174,
            "movement": -151
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
            "position": 155,
            "movement": -5
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
            "country": "SB",
            "name": "Solomon Islands",
            "position": 23,
            "movement": -11
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 71,
            "movement": -23
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 75,
            "movement": 25
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 100,
            "movement": -67
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 138,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 141,
            "movement": 28
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 146,
            "movement": -83
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 157,
            "movement": -29
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 159,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 171,
            "movement": -11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 188,
            "movement": -14
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 200,
            "movement": -82
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
            "position": 69,
            "movement": -10
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
            "position": 19,
            "movement": -2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 42,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 52,
            "movement": 27
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 57,
            "movement": 20
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 82,
            "movement": 17
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 97,
            "movement": 20
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 113,
            "movement": -66
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 126,
            "movement": 4
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
            "position": 109,
            "movement": 9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 145,
            "movement": 1
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
            "position": 143,
            "movement": -5
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
            "position": 58,
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
    "title": "Rush",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 24,
            "movement": -2
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 24,
            "movement": 1
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 42,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 61,
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 82,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 153,
            "movement": -137
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
            "position": 38,
            "movement": -18
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 160,
            "movement": -81
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 200,
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
    "title": "Tornado",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 39,
            "movement": -14
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 69,
            "movement": 9
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 77,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 82,
            "movement": -5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 101,
            "movement": -13
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 126,
            "movement": 39
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 131,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 155,
            "movement": -5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 181,
            "movement": -77
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
            "position": 109,
            "movement": -8
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
            "movement": -9
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 85,
            "movement": 14
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 88,
            "movement": -12
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 103,
            "movement": -10
          },
          {
            "country": "FR",
            "name": "France",
            "position": 104,
            "movement": 7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 113,
            "movement": 0
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 114,
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
            "country": "BJ",
            "name": "Benin",
            "position": 172,
            "movement": 24
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
            "position": 50,
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
    "title": "Last Heartbreak Song",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 43,
            "movement": -39
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 103,
            "movement": 5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 115,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 130,
            "movement": -1
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 178,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 185,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 189,
            "movement": -43
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 192,
            "movement": -56
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 192,
            "movement": -22
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 196,
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
    "title": "Who's Dat Girl",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 40,
            "movement": -7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 47,
            "movement": 122
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 70,
            "movement": -4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 86,
            "movement": -39
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 118,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 118,
            "movement": -20
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 147,
            "movement": -18
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 189,
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
            "position": 46,
            "movement": 25
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
            "country": "SB",
            "name": "Solomon Islands",
            "position": 41,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 82,
            "movement": 7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 99,
            "movement": -5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 105,
            "movement": 20
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 154,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 170,
            "movement": 29
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 178,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 184,
            "movement": -65
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
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 8,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 63,
            "movement": -29
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 108,
            "movement": -79
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 139,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 149,
            "movement": 7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 164,
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
            "position": 131,
            "movement": -6
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
            "country": "SC",
            "name": "Seychelles",
            "position": 83,
            "movement": 29
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 160,
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
            "position": 33,
            "movement": -6
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
            "movement": 1
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 18,
            "movement": 2
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 94,
            "movement": 1
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
            "position": 23,
            "movement": -3
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 72,
            "movement": -21
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c4c1696f82feac0a7fa1e26379b9f7e2/500x500-000000-80-0-0.jpg"
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
            "position": 8,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 29,
            "movement": 65
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 124,
            "movement": 25
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 131,
            "movement": 10
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 180,
            "movement": null,
            "status": "new"
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
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 4,
            "movement": -3
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 20,
            "movement": 47
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 156,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 183,
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
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 176,
            "movement": -54
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
            "position": 34,
            "movement": -6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 132,
            "movement": -129
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6811d7a880826af2be69b81686f629f2/500x500-000000-80-0-0.jpg"
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
            "position": 13,
            "movement": 11
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 121,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 195,
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
    "title": "Hot Body",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 154,
            "movement": 35
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 169,
            "movement": -31
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4b5a287c8f574407dc5b1b03b5ae0c58/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Gimme Dat",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 130,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 182,
            "movement": -9
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 198,
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
    "title": "All The Love",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 65,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 109,
            "movement": -32
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d30dbeb4d445f5cc6f7f100b830731c4/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Beggie Beggie",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 154,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 179,
            "movement": -140
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-27",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b922c719d3a9901f749140e8f532a8d0/500x500-000000-80-0-0.jpg"
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
    "title": "2 Sugar",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 7,
            "movement": 11
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-27",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e4286ac8a38829b6cf5d225c311bccf7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Love Don't Cost A Dime - Re-Up",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 91,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-22",
    "cover": "https://cdn-images.dzcdn.net/images/cover/37efb43b4704415ff51e98e357041982/500x500-000000-80-0-0.jpg"
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
            "position": 78,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-28",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4f920b01bcb9ce9949049741f8720fc7/500x500-000000-80-0-0.jpg"
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
            "position": 69,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-24",
    "cover": "https://cdn-images.dzcdn.net/images/cover/37efb43b4704415ff51e98e357041982/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Comforter",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LY",
            "name": "Libya",
            "position": 50,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-28",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e18f46f5169476d41ff6bf5f188e1127/500x500-000000-80-0-0.jpg"
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
            "position": 158,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-28",
    "cover": "https://cdn-images.dzcdn.net/images/cover/937b1cd4f41db02513dbe7e16b2189d2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Overloading",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 160,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-28",
    "cover": "https://cdn-images.dzcdn.net/images/cover/7861d849c8157fbffc37ccebf0ee75c5/500x500-000000-80-0-0.jpg"
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
            "position": 163,
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
    "title": "Ms. Paper",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 164,
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
    "title": "Cast",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 169,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-28",
    "cover": "https://cdn-images.dzcdn.net/images/cover/937b1cd4f41db02513dbe7e16b2189d2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Amin",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 177,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-28",
    "cover": "https://cdn-images.dzcdn.net/images/cover/937b1cd4f41db02513dbe7e16b2189d2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "In Between",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 180,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-28",
    "cover": "https://cdn-images.dzcdn.net/images/cover/937b1cd4f41db02513dbe7e16b2189d2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Toxic",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 184,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-28",
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
            "movement": -13
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/764fec44b70e643da16fe971e5ad3099/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Fashion Killer",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 176,
            "movement": -139
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-27",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b922c719d3a9901f749140e8f532a8d0/500x500-000000-80-0-0.jpg"
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
            "position": 79,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-10-28",
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
  