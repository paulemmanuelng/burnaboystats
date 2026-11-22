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
  export const liveChartsUpdated = "2026-11-22";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-22T19:45Z";
  
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
            "country": "TD",
            "name": "Chad",
            "position": 1,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 1,
            "movement": 1
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 7,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 8,
            "movement": -1
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 17,
            "movement": 7
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 19,
            "movement": -4
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 19,
            "movement": -8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 21,
            "movement": -7
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 22,
            "movement": -16
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 23,
            "movement": 0
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 25,
            "movement": -9
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 26,
            "movement": -17
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 29,
            "movement": -12
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 33,
            "movement": -9
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 34,
            "movement": 24
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 35,
            "movement": 6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 37,
            "movement": 8
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 46,
            "movement": -17
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 46,
            "movement": -21
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 47,
            "movement": -29
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
            "country": "BB",
            "name": "Barbados",
            "position": 63,
            "movement": -21
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 68,
            "movement": -17
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 70,
            "movement": -20
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 75,
            "movement": -1
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 75,
            "movement": -34
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 75,
            "movement": -33
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 76,
            "movement": -24
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 76,
            "movement": 6
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 80,
            "movement": -47
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 88,
            "movement": 18
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 92,
            "movement": -32
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 102,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 108,
            "movement": 49
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 112,
            "movement": -25
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 118,
            "movement": -53
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 119,
            "movement": -28
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 126,
            "movement": 1
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
            "position": 164,
            "movement": 1
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 172,
            "movement": -21
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 175,
            "movement": 14
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 189,
            "movement": -73
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
            "position": 18,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 21,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 26,
            "movement": 0
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 57,
            "movement": 5
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 59,
            "movement": -4
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 76,
            "movement": -3
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 115,
            "movement": -7
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 155,
            "movement": -9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 156,
            "movement": -8
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 1,
        "entries": [
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 1,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 15,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 17,
            "movement": -8
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 20,
            "movement": -4
          },
          {
            "country": "MO",
            "name": "Macau",
            "position": 25,
            "movement": -17
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
            "position": 144,
            "movement": 16
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 147,
            "movement": -7
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
            "position": 60,
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
            "country": "DM",
            "name": "Dominica",
            "position": 6,
            "movement": 9
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 15,
            "movement": 45
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 16,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 19,
            "movement": 3
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 20,
            "movement": 29
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 23,
            "movement": -5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 24,
            "movement": 10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 25,
            "movement": -6
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 28,
            "movement": -8
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 30,
            "movement": -21
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 31,
            "movement": -9
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 45,
            "movement": 54
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 49,
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 50,
            "movement": -41
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 55,
            "movement": -12
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 58,
            "movement": 26
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 66,
            "movement": -37
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 67,
            "movement": 24
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 72,
            "movement": -8
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 72,
            "movement": 36
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 74,
            "movement": -57
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 75,
            "movement": 35
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 81,
            "movement": 1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 82,
            "movement": -1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 84,
            "movement": -14
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 86,
            "movement": 25
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 91,
            "movement": -7
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 121,
            "movement": -45
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 130,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 133,
            "movement": -66
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 133,
            "movement": -71
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 139,
            "movement": -34
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 143,
            "movement": -27
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 145,
            "movement": -57
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 145,
            "movement": 11
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 152,
            "movement": -9
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 155,
            "movement": -93
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 161,
            "movement": -65
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 181,
            "movement": -76
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 186,
            "movement": 10
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 191,
            "movement": -41
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 194,
            "movement": -69
          },
          {
            "country": "ML",
            "name": "Mali",
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
            "position": 7,
            "movement": 1
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 12,
            "movement": 0
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 28,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 29,
            "movement": -3
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 67,
            "movement": -5
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 73,
            "movement": -6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 96,
            "movement": -5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 190,
            "movement": -4
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 70,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 108,
            "movement": -28
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 116,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 156,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 173,
            "movement": -33
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
            "country": "FM",
            "name": "Micronesia",
            "position": 5,
            "movement": 87
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 27,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 45,
            "movement": -41
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 105,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 110,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 117,
            "movement": -42
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 120,
            "movement": -53
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 127,
            "movement": 47
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 130,
            "movement": -99
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 131,
            "movement": 9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 138,
            "movement": 7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 147,
            "movement": 3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 163,
            "movement": 16
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 188,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 193,
            "movement": -27
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
            "country": "NG",
            "name": "Nigeria",
            "position": 21,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 22,
            "movement": -12
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 30,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 40,
            "movement": -2
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
            "position": 91,
            "movement": -62
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 127,
            "movement": -42
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 139,
            "movement": -25
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
            "country": "KE",
            "name": "Kenya",
            "position": 189,
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
            "position": 33,
            "movement": 7
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
            "position": 44,
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
            "position": 8,
            "movement": 33
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 24,
            "movement": 19
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 43,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 57,
            "movement": 3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 113,
            "movement": 10
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 113,
            "movement": -18
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 125,
            "movement": -1
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 185,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 191,
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
            "position": 165,
            "movement": 32
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
            "position": 192,
            "movement": -9
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
            "country": "UG",
            "name": "Uganda",
            "position": 39,
            "movement": 5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 64,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 71,
            "movement": 123
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 77,
            "movement": -34
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 77,
            "movement": 6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 99,
            "movement": -10
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 100,
            "movement": 76
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 125,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 128,
            "movement": 17
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
            "position": 182,
            "movement": -13
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
            "position": 53,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 74,
            "movement": 4
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 74,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 100,
            "movement": -54
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 102,
            "movement": 91
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 117,
            "movement": -12
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 122,
            "movement": 2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 141,
            "movement": 22
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 186,
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
            "position": 42,
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
    "title": "19 & Dangerous",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 76,
            "movement": -30
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 83,
            "movement": -20
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 108,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 119,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 142,
            "movement": -26
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 167,
            "movement": -21
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 194,
            "movement": -12
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
    "title": "Hot Body",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 64,
            "movement": -11
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 86,
            "movement": 24
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 118,
            "movement": 41
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 133,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 155,
            "movement": 41
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 163,
            "movement": -5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 189,
            "movement": -54
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4b5a287c8f574407dc5b1b03b5ae0c58/500x500-000000-80-0-0.jpg"
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
            "position": 19,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 99,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 120,
            "movement": 24
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 130,
            "movement": 6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 188,
            "movement": 9
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 189,
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
            "country": "FM",
            "name": "Micronesia",
            "position": 21,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 175,
            "movement": -58
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
            "position": 76,
            "movement": -28
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 80,
            "movement": 13
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 92,
            "movement": 26
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
            "position": 133,
            "movement": 19
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
            "position": 83,
            "movement": -57
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
            "position": 54,
            "movement": 17
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 125,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 150,
            "movement": 36
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 186,
            "movement": -56
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
    "title": "Wo, man",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "IT",
            "name": "Italy",
            "position": 41,
            "movement": 137
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 132,
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
            "country": "BG",
            "name": "Bulgaria",
            "position": 13,
            "movement": 0
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 34,
            "movement": -1
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
            "country": "SB",
            "name": "Solomon Islands",
            "position": 74,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 149,
            "movement": 37
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 152,
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
    "title": "Bad Vibes",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 108,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 129,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 164,
            "movement": 25
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 172,
            "movement": -1
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
            "country": "TZ",
            "name": "Tanzania",
            "position": 137,
            "movement": 22
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 161,
            "movement": 33
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
    "title": "Pray",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 45,
            "movement": 15
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
            "position": 52,
            "movement": 15
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
            "position": 21,
            "movement": -10
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e18f46f5169476d41ff6bf5f188e1127/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Misunderstood",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MO",
            "name": "Macau",
            "position": 26,
            "movement": -17
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-21",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
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
            "position": 27,
            "movement": -17
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
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 79,
            "movement": -25
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-21",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2e52f4bf8bdb05c98002b714669ee2c2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Escaladizzy II",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 114,
            "movement": 56
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-22",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d47d959a99da468afdd69a8f855be482/500x500-000000-80-0-0.jpg"
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
            "position": 198,
            "movement": -21
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b922c719d3a9901f749140e8f532a8d0/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Love Don't Cost A Dime",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 138,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-22",
    "cover": "https://cdn-images.dzcdn.net/images/cover/37efb43b4704415ff51e98e357041982/500x500-000000-80-0-0.jpg"
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
            "movement": -37
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
            "position": 193,
            "movement": -3
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
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 188,
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
  