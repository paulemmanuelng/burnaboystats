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
  export const liveChartsUpdated = "2026-11-12";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-12T19:59Z";
  
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
            "country": "DM",
            "name": "Dominica",
            "position": 2,
            "movement": 0
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 3,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 5,
            "movement": 0
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 7,
            "movement": 5
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 7,
            "movement": 1
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 7,
            "movement": -1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 9,
            "movement": -2
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 11,
            "movement": 2
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 13,
            "movement": 5
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 13,
            "movement": 7
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 15,
            "movement": -4
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 17,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 19,
            "movement": -6
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 23,
            "movement": 5
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 23,
            "movement": -15
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 24,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 25,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 25,
            "movement": -9
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 27,
            "movement": 11
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 28,
            "movement": 0
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 32,
            "movement": 1
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 34,
            "movement": 6
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 34,
            "movement": 10
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 35,
            "movement": -12
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 37,
            "movement": 4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 38,
            "movement": 5
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 43,
            "movement": 7
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 48,
            "movement": -5
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 51,
            "movement": 4
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 53,
            "movement": -10
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 77,
            "movement": -9
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 78,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 81,
            "movement": -3
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 82,
            "movement": -54
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 93,
            "movement": 1
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 93,
            "movement": -5
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 97,
            "movement": -8
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 105,
            "movement": -85
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 109,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 110,
            "movement": -45
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 118,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 122,
            "movement": 58
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 160,
            "movement": -141
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 164,
            "movement": -14
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 178,
            "movement": -15
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 189,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 192,
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
            "position": 15,
            "movement": 0
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
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 23,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 29,
            "movement": 1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 36,
            "movement": 5
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 57,
            "movement": -2
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 57,
            "movement": 1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 84,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 117,
            "movement": 7
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 150,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 194,
            "movement": -6
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
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 12,
            "movement": null,
            "status": "new"
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
            "position": 17,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 17,
            "movement": -2
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 32,
            "movement": -1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 34,
            "movement": -4
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 8,
            "movement": -2
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 10,
            "movement": 0
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 13,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 35,
            "movement": -16
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 39,
            "movement": -13
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 53,
            "movement": -27
          },
          {
            "country": "FR",
            "name": "France",
            "position": 65,
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
            "position": 59,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 126,
            "movement": 0
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
            "position": 50,
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
            "country": "FJ",
            "name": "Fiji",
            "position": 7,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 10,
            "movement": 4
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 14,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 15,
            "movement": -9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 18,
            "movement": 4
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 20,
            "movement": 24
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 20,
            "movement": -1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 21,
            "movement": -4
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 22,
            "movement": -9
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 23,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 24,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 24,
            "movement": 23
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 27,
            "movement": -10
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 28,
            "movement": -8
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 29,
            "movement": 1
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 38,
            "movement": -25
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 43,
            "movement": -30
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 45,
            "movement": -2
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 46,
            "movement": -7
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 52,
            "movement": -37
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 52,
            "movement": 7
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 61,
            "movement": 21
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 63,
            "movement": 7
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 64,
            "movement": -8
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 65,
            "movement": -23
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 70,
            "movement": -12
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 73,
            "movement": -17
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 78,
            "movement": 12
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 87,
            "movement": -17
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 98,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 108,
            "movement": -33
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 108,
            "movement": -17
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 109,
            "movement": -73
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 115,
            "movement": 17
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 116,
            "movement": 21
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 122,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 127,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 128,
            "movement": -49
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 144,
            "movement": -13
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 144,
            "movement": -69
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 151,
            "movement": 17
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 158,
            "movement": -40
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 179,
            "movement": -50
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 181,
            "movement": -8
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
            "position": 17,
            "movement": -1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 88,
            "movement": -27
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
            "position": 37,
            "movement": -10
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 70,
            "movement": -14
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 12,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 25,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 92,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 141,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 142,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 154,
            "movement": -31
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 194,
            "movement": -46
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 9,
            "movement": -2
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 16,
            "movement": -1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 25,
            "movement": -3
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 25,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 50,
            "movement": 0
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 58,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 63,
            "movement": 0
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
            "position": 47,
            "movement": null,
            "status": "re"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 55,
            "movement": null,
            "status": "re"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 65,
            "movement": null,
            "status": "re"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 96,
            "movement": null,
            "status": "re"
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
            "position": 74,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 86,
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
    "title": "Colorado",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 18,
            "movement": 39
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 31,
            "movement": 17
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 33,
            "movement": -7
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 37,
            "movement": 16
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 48,
            "movement": 17
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 64,
            "movement": 3
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 66,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 69,
            "movement": 34
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 89,
            "movement": 16
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 104,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 107,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 131,
            "movement": 11
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 133,
            "movement": 56
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 160,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 175,
            "movement": 7
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 140,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 186,
            "movement": -2
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
            "position": 128,
            "movement": 8
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
            "position": 32,
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
    "title": "treat u right",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 8,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 9,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 12,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 27,
            "movement": 16
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 33,
            "movement": 10
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 60,
            "movement": 9
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 73,
            "movement": -19
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 78,
            "movement": -9
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 79,
            "movement": 8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 81,
            "movement": 16
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 90,
            "movement": -12
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 111,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 120,
            "movement": -16
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 144,
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
            "position": 18,
            "movement": 3
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
            "position": 17,
            "movement": -4
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
            "position": 34,
            "movement": -7
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
            "country": "UG",
            "name": "Uganda",
            "position": 44,
            "movement": -8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 46,
            "movement": 32
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 56,
            "movement": 7
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 66,
            "movement": -33
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 97,
            "movement": 69
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 118,
            "movement": 12
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 127,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 174,
            "movement": -72
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 175,
            "movement": 0
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 187,
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
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 19,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 29,
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
            "position": 77,
            "movement": null,
            "status": "re"
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
            "country": "DZ",
            "name": "Algeria",
            "position": 4,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 62,
            "movement": -34
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 98,
            "movement": -16
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 105,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 139,
            "movement": 19
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 164,
            "movement": -24
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 171,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 173,
            "movement": -9
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 191,
            "movement": -15
          },
          {
            "country": "UG",
            "name": "Uganda",
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
            "position": 69,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "album",
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
            "country": "UG",
            "name": "Uganda",
            "position": 42,
            "movement": 16
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 104,
            "movement": -22
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 125,
            "movement": 8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 129,
            "movement": 30
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 134,
            "movement": 9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 186,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 197,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 198,
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
            "country": "SB",
            "name": "Solomon Islands",
            "position": 48,
            "movement": -6
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 101,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 110,
            "movement": 8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 134,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 156,
            "movement": -32
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 180,
            "movement": 17
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 199,
            "movement": -33
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
            "position": 127,
            "movement": 6
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
            "position": 47,
            "movement": 9
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 57,
            "movement": 23
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 84,
            "movement": -24
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 117,
            "movement": 72
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 143,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 143,
            "movement": -5
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 187,
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
            "position": 108,
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
    "title": "Hot Body",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 68,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 72,
            "movement": -8
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 85,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 98,
            "movement": -22
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 117,
            "movement": -9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 178,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 180,
            "movement": -75
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 187,
            "movement": -27
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
            "country": "ML",
            "name": "Mali",
            "position": 67,
            "movement": -15
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 107,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 127,
            "movement": -15
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 168,
            "movement": -87
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 176,
            "movement": -23
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 188,
            "movement": -24
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
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 60,
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
    "title": "Last Heartbreak Song",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 71,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 98,
            "movement": 24
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 103,
            "movement": 25
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 117,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 131,
            "movement": 10
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 193,
            "movement": -33
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
            "country": "FM",
            "name": "Micronesia",
            "position": 8,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 14,
            "movement": -6
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 75,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 110,
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
    "title": "Commas",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 83,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 134,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 189,
            "movement": -40
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
            "position": 25,
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
            "country": "FM",
            "name": "Micronesia",
            "position": 45,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 151,
            "movement": -9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 183,
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
            "position": 173,
            "movement": -33
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
            "movement": 0
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 26,
            "movement": 2
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
            "position": 100,
            "movement": -24
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
            "country": "UG",
            "name": "Uganda",
            "position": 113,
            "movement": 86
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 133,
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
            "position": 38,
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
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 97,
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
            "position": 60,
            "movement": 8
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-28",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Love Don't Cost A Dime",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 74,
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
            "position": 158,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-07",
    "cover": "https://cdn-images.dzcdn.net/images/cover/37efb43b4704415ff51e98e357041982/500x500-000000-80-0-0.jpg"
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
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 145,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e61faaeb59320961cbd17a1ef7f9e6e7/500x500-000000-80-0-0.jpg"
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
    "title": "Comforter",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 84,
            "movement": -50
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-09",
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
            "position": 119,
            "movement": -74
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-02",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6d6d6db9d6a54f8735971b8cab496784/500x500-000000-80-0-0.jpg"
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
            "position": 162,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-12",
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
            "position": 181,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-11-10",
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
  