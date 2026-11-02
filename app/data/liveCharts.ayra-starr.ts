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
  export const liveChartsUpdated = "2026-11-02";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-02T16:01Z";
  
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
            "country": "SB",
            "name": "Solomon Islands",
            "position": 2,
            "movement": 1
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 4,
            "movement": 0
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 8,
            "movement": -3
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 8,
            "movement": 5
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 8,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 8,
            "movement": 0
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 9,
            "movement": 4
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 10,
            "movement": 2
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 12,
            "movement": 2
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 13,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 13,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 14,
            "movement": -4
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 17,
            "movement": 4
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 18,
            "movement": -2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 19,
            "movement": -8
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 20,
            "movement": 4
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 22,
            "movement": -9
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 22,
            "movement": -12
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 25,
            "movement": 16
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 27,
            "movement": -1
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 31,
            "movement": -6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 35,
            "movement": -5
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 37,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 38,
            "movement": 3
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 40,
            "movement": -2
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 41,
            "movement": -16
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 48,
            "movement": -9
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 52,
            "movement": -11
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 53,
            "movement": -7
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 54,
            "movement": -5
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 56,
            "movement": -35
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 63,
            "movement": -12
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 64,
            "movement": -19
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 64,
            "movement": 31
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 65,
            "movement": -2
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 68,
            "movement": -42
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 72,
            "movement": 4
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 97,
            "movement": -23
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 106,
            "movement": -6
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 108,
            "movement": 0
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 130,
            "movement": -34
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 173,
            "movement": -10
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 178,
            "movement": -24
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 192,
            "movement": -134
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
            "position": 14,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 15,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 20,
            "movement": -1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 21,
            "movement": 0
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 27,
            "movement": 0
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 42,
            "movement": -7
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 64,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 81,
            "movement": -12
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 103,
            "movement": -2
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 124,
            "movement": -6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 146,
            "movement": -1
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
            "country": "FJ",
            "name": "Fiji",
            "position": 22,
            "movement": 0
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 44,
            "movement": -19
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 77,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 87,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 121,
            "movement": -5
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
            "position": 79,
            "movement": -13
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 103,
            "movement": 10
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
            "position": 49,
            "movement": 41
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
            "position": 3,
            "movement": 3
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 6,
            "movement": 70
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 9,
            "movement": -5
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 9,
            "movement": 4
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 10,
            "movement": 4
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 11,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 12,
            "movement": 11
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 12,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 13,
            "movement": 1
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 15,
            "movement": -2
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 15,
            "movement": -8
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 22,
            "movement": 4
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 22,
            "movement": 1
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 23,
            "movement": -5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 27,
            "movement": -14
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 28,
            "movement": -11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 34,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 37,
            "movement": 2
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 38,
            "movement": 18
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 44,
            "movement": -26
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 45,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 51,
            "movement": 6
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 51,
            "movement": -15
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 54,
            "movement": 2
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 54,
            "movement": -1
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 55,
            "movement": -26
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 57,
            "movement": -28
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 58,
            "movement": 31
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 58,
            "movement": 0
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 62,
            "movement": 4
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 62,
            "movement": -7
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 69,
            "movement": -23
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 71,
            "movement": 5
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 78,
            "movement": -36
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 89,
            "movement": -7
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 98,
            "movement": -44
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 109,
            "movement": -3
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 113,
            "movement": -27
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 119,
            "movement": 5
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 121,
            "movement": -2
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 141,
            "movement": -26
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 152,
            "movement": -84
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 160,
            "movement": 2
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 165,
            "movement": -69
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 176,
            "movement": -68
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 176,
            "movement": -35
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 188,
            "movement": -24
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
            "position": 9,
            "movement": -4
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 11,
            "movement": 23
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 11,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 12,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 74,
            "movement": -11
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 93,
            "movement": -55
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 107,
            "movement": -22
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 110,
            "movement": 28
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 129,
            "movement": 56
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 148,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 155,
            "movement": -7
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 186,
            "movement": -56
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
            "position": 20,
            "movement": 4
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
            "position": 182,
            "movement": -10
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
            "position": 70,
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
            "country": "LR",
            "name": "Liberia",
            "position": 101,
            "movement": -46
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 105,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 118,
            "movement": 3
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 148,
            "movement": -16
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 149,
            "movement": -65
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 163,
            "movement": -26
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 170,
            "movement": -6
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 182,
            "movement": -121
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 187,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 190,
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
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 38,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 43,
            "movement": 4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 45,
            "movement": 5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 91,
            "movement": 1
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 130,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 184,
            "movement": -16
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
            "position": 145,
            "movement": -11
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 171,
            "movement": 13
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
            "movement": 26
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
            "position": 87,
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
            "movement": 38
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 60,
            "movement": 50
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 65,
            "movement": 10
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 80,
            "movement": 34
          },
          {
            "country": "FR",
            "name": "France",
            "position": 104,
            "movement": 6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 109,
            "movement": 21
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 137,
            "movement": 5
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 148,
            "movement": 18
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 178,
            "movement": -52
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
    "title": "Who's Dat Girl",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 52,
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 60,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 87,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 89,
            "movement": 28
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 96,
            "movement": 9
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 106,
            "movement": -16
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 134,
            "movement": 8
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 161,
            "movement": 17
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 194,
            "movement": -9
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
            "movement": -1
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 30,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 32,
            "movement": 3
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 45,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 52,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 200,
            "movement": null,
            "status": "new"
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
            "position": 57,
            "movement": -26
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 192,
            "movement": null,
            "status": "new"
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 197,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 198,
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
    "title": "19 & Dangerous",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 26,
            "movement": -18
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 105,
            "movement": 30
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 142,
            "movement": -13
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 159,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 183,
            "movement": -35
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 185,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 188,
            "movement": -89
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 73,
            "movement": 22
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 99,
            "movement": -25
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 145,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 199,
            "movement": -1
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
            "position": 108,
            "movement": 8
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
            "position": 91,
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
    "title": "Away",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 71,
            "movement": 11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 114,
            "movement": 47
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 130,
            "movement": -51
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 172,
            "movement": -12
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 191,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 194,
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
            "position": 20,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 92,
            "movement": -4
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
            "position": 44,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 45,
            "movement": 24
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
            "position": 76,
            "movement": 20
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 117,
            "movement": 32
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 127,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 135,
            "movement": -4
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
            "position": 14,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 67,
            "movement": -1
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
            "position": 144,
            "movement": 33
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 146,
            "movement": 5
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
            "position": 56,
            "movement": 12
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/12ca87c2ea2fa9506d6fc562bd8f5a01/500x500-000000-80-0-0.jpg"
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
            "position": 111,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 136,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 176,
            "movement": -72
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
            "position": 151,
            "movement": -31
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 191,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 191,
            "movement": -10
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
            "country": "SB",
            "name": "Solomon Islands",
            "position": 28,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 31,
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
    "title": "Ms. Paper",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 118,
            "movement": 3
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
    "title": "Hypé",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 135,
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
            "position": 15,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-01",
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
            "country": "AO",
            "name": "Angola",
            "position": 191,
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
    "title": "Gimme Dat",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 178,
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
            "country": "KE",
            "name": "Kenya",
            "position": 66,
            "movement": -34
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-24",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2e52f4bf8bdb05c98002b714669ee2c2/500x500-000000-80-0-0.jpg"
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
            "position": 74,
            "movement": -57
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
            "position": 138,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-27",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e4286ac8a38829b6cf5d225c311bccf7/500x500-000000-80-0-0.jpg"
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 32,
            "movement": 13
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-29",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
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
            "position": 5,
            "movement": null,
            "status": "new"
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
            "position": 55,
            "movement": -21
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d30dbeb4d445f5cc6f7f100b830731c4/500x500-000000-80-0-0.jpg"
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
            "position": 178,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
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
            "position": 153,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-01",
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
  