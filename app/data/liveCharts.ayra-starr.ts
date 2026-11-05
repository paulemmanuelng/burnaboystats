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
  export const liveChartsUpdated = "2026-11-05";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-05T06:53Z";
  
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
            "country": "SC",
            "name": "Seychelles",
            "position": 2,
            "movement": 0
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 4,
            "movement": 0
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 5,
            "movement": 0
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 5,
            "movement": 11
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 6,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 7,
            "movement": 13
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 7,
            "movement": -1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 7,
            "movement": 2
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 8,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 10,
            "movement": 6
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 11,
            "movement": 6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 12,
            "movement": 33
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 13,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 14,
            "movement": 0
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 14,
            "movement": -5
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 14,
            "movement": -6
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 16,
            "movement": -9
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 18,
            "movement": 7
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 19,
            "movement": -6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 20,
            "movement": 5
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 20,
            "movement": 5
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 24,
            "movement": -1
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 28,
            "movement": 0
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 30,
            "movement": -3
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 31,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 32,
            "movement": 5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 35,
            "movement": 2
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 35,
            "movement": 12
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 37,
            "movement": 37
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 38,
            "movement": -3
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 39,
            "movement": 2
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 45,
            "movement": 7
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 50,
            "movement": 69
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 50,
            "movement": -7
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 54,
            "movement": 2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 60,
            "movement": 85
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 72,
            "movement": -22
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 78,
            "movement": -9
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 95,
            "movement": 21
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 101,
            "movement": 2
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 116,
            "movement": -34
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 119,
            "movement": 39
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 131,
            "movement": 8
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 141,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 156,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 175,
            "movement": -33
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 199,
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
            "position": 11,
            "movement": 3
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 12,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 15,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 20,
            "movement": -1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 23,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 23,
            "movement": -3
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 34,
            "movement": -2
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 50,
            "movement": -4
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 69,
            "movement": -6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 87,
            "movement": -1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 116,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 157,
            "movement": -8
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 159,
            "movement": -22
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
        "numberOnes": 1,
        "entries": [
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 1,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 24,
            "movement": 61
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 32,
            "movement": -9
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 51,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 91,
            "movement": -24
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 174,
            "movement": -21
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
            "position": 53,
            "movement": -9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 120,
            "movement": 1
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
            "movement": 0
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 97,
            "movement": 0
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
            "position": 5,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 8,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 10,
            "movement": 6
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 11,
            "movement": -3
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 16,
            "movement": -3
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 19,
            "movement": 30
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 20,
            "movement": 7
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 20,
            "movement": -6
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 20,
            "movement": -6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 21,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 24,
            "movement": -11
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 29,
            "movement": 4
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 32,
            "movement": -11
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 35,
            "movement": -23
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 35,
            "movement": -12
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 35,
            "movement": -23
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 35,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 41,
            "movement": 63
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 45,
            "movement": -40
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 47,
            "movement": -22
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 47,
            "movement": 101
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 49,
            "movement": -1
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 49,
            "movement": 111
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 54,
            "movement": 24
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 54,
            "movement": 22
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 55,
            "movement": -17
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 57,
            "movement": 4
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 57,
            "movement": -24
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 58,
            "movement": 11
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 58,
            "movement": 27
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 60,
            "movement": -14
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 60,
            "movement": 5
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 65,
            "movement": -11
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 67,
            "movement": 50
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 96,
            "movement": 26
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 101,
            "movement": 68
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 107,
            "movement": 15
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 111,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 112,
            "movement": 5
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 128,
            "movement": -25
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 139,
            "movement": -22
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 140,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 141,
            "movement": -81
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 141,
            "movement": 6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 148,
            "movement": -54
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 155,
            "movement": -75
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 176,
            "movement": -17
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 179,
            "movement": -74
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
    "title": "Rush",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 1,
        "entries": [
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 1,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 2,
            "movement": -1
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
            "position": 25,
            "movement": 6
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 26,
            "movement": -24
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
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 93,
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
            "country": "TD",
            "name": "Chad",
            "position": 38,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 52,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 69,
            "movement": 5
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 100,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 109,
            "movement": 35
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 130,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 189,
            "movement": 7
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
            "position": 7,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 12,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 13,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 38,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 59,
            "movement": 13
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 65,
            "movement": 17
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 83,
            "movement": 35
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 119,
            "movement": 13
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 143,
            "movement": 6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 160,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 184,
            "movement": -119
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 188,
            "movement": -10
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
            "position": 21,
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
    "title": "Colorado",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 28,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 39,
            "movement": 10
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 57,
            "movement": -28
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 80,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 83,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 103,
            "movement": -40
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 117,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 121,
            "movement": -8
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
            "position": 169,
            "movement": -7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 195,
            "movement": -9
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
            "position": 172,
            "movement": -21
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
    "title": "No love",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 41,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 56,
            "movement": 31
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 73,
            "movement": -9
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 89,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 95,
            "movement": -8
          },
          {
            "country": "FR",
            "name": "France",
            "position": 102,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 112,
            "movement": -55
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 117,
            "movement": 5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 131,
            "movement": 9
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 138,
            "movement": -3
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
            "movement": -1
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
            "country": "GM",
            "name": "Gambia",
            "position": 49,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 74,
            "movement": -17
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 87,
            "movement": 32
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 89,
            "movement": 28
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 89,
            "movement": -10
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 105,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 114,
            "movement": 2
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 137,
            "movement": 34
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 200,
            "movement": -6
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
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/fe3deba215d998d74542663a84621852/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "The Year I Turned 21",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 53,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 104,
            "movement": null,
            "status": "new"
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 106,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 113,
            "movement": -15
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 125,
            "movement": -35
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 172,
            "movement": 11
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 178,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 180,
            "movement": -57
          },
          {
            "country": "KW",
            "name": "Kuwait",
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
    "title": "Tornado",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 69,
            "movement": 13
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 100,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 116,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 179,
            "movement": -71
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 191,
            "movement": 4
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
            "position": 44,
            "movement": -18
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 155,
            "movement": -132
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
            "position": 141,
            "movement": -9
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
            "country": "FM",
            "name": "Micronesia",
            "position": 24,
            "movement": 160
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 113,
            "movement": -60
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 121,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 175,
            "movement": -20
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 191,
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
    "title": "Last Heartbreak Song",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 89,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 116,
            "movement": 8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 129,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 145,
            "movement": -26
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 168,
            "movement": -62
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
            "movement": 0
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
            "country": "TD",
            "name": "Chad",
            "position": 65,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 174,
            "movement": -12
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 185,
            "movement": -25
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 196,
            "movement": -73
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
            "position": 43,
            "movement": 6
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/12ca87c2ea2fa9506d6fc562bd8f5a01/500x500-000000-80-0-0.jpg"
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
            "position": 70,
            "movement": -6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 73,
            "movement": -11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 92,
            "movement": 4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 149,
            "movement": 14
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 160,
            "movement": 9
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
            "position": 11,
            "movement": -1
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 19,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 136,
            "movement": -33
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
            "position": 113,
            "movement": null,
            "status": "new"
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
            "position": 17,
            "movement": 0
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 77,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 141,
            "movement": 28
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 171,
            "movement": -90
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-24",
    "cover": "https://cdn-images.dzcdn.net/images/cover/24407cf49fdf864463cb5ca5ad974630/500x500-000000-80-0-0.jpg"
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
            "position": 106,
            "movement": 30
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
            "position": 196,
            "movement": -131
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
    "title": "Ms. Paper",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 179,
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
            "position": 102,
            "movement": 16
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
    "title": "All The Love",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 78,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 112,
            "movement": -40
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
            "position": 75,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d30dbeb4d445f5cc6f7f100b830731c4/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bloody Samaritan",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 110,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 196,
            "movement": -29
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
            "position": 30,
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
            "country": "GM",
            "name": "Gambia",
            "position": 139,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 169,
            "movement": 8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 176,
            "movement": -32
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e61faaeb59320961cbd17a1ef7f9e6e7/500x500-000000-80-0-0.jpg"
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
            "position": 140,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 199,
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
            "country": "TD",
            "name": "Chad",
            "position": 49,
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
    "title": "Amazing",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 95,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-05",
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
            "position": 93,
            "movement": -24
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-02",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6d6d6db9d6a54f8735971b8cab496784/500x500-000000-80-0-0.jpg"
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
            "position": 136,
            "movement": null,
            "status": "new"
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
  