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
  export const liveChartsUpdated = "2026-11-14";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-14T18:09Z";
  
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
            "movement": 159
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 2,
            "movement": 80
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 3,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 4,
            "movement": -2
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 5,
            "movement": 2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 5,
            "movement": 0
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 6,
            "movement": 1
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 8,
            "movement": -1
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 15,
            "movement": -4
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 16,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 16,
            "movement": 3
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 17,
            "movement": -4
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 18,
            "movement": -9
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 19,
            "movement": -6
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 26,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 29,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 30,
            "movement": -5
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 32,
            "movement": 2
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 34,
            "movement": -7
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 34,
            "movement": 9
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 38,
            "movement": -6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 38,
            "movement": -10
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 42,
            "movement": -8
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 43,
            "movement": -26
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 44,
            "movement": -21
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 44,
            "movement": -9
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 47,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 49,
            "movement": -12
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 54,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 61,
            "movement": -23
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 76,
            "movement": 46
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 84,
            "movement": -62
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 92,
            "movement": 5
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 97,
            "movement": -20
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 102,
            "movement": -21
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 105,
            "movement": 5
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 109,
            "movement": -58
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 111,
            "movement": -18
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 129,
            "movement": 35
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 133,
            "movement": -40
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 134,
            "movement": -16
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 143,
            "movement": 46
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 157,
            "movement": -52
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 193,
            "movement": -84
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
            "position": 14,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
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
            "country": "KE",
            "name": "Kenya",
            "position": 21,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 27,
            "movement": 2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 34,
            "movement": 1
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 49,
            "movement": 10
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 67,
            "movement": -5
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 92,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 123,
            "movement": -6
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 163,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 197,
            "movement": -8
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
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 2,
            "movement": -1
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 5,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 8,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 10,
            "movement": 0
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 51,
            "movement": -9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 72,
            "movement": -18
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
            "position": 60,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 123,
            "movement": -1
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
            "position": 40,
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
            "position": 4,
            "movement": 18
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 6,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 13,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 15,
            "movement": 9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 16,
            "movement": -6
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 18,
            "movement": -4
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 21,
            "movement": 6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 25,
            "movement": -7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 26,
            "movement": -6
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 35,
            "movement": -15
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 42,
            "movement": 10
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 43,
            "movement": -15
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 48,
            "movement": -27
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 50,
            "movement": -27
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 51,
            "movement": -27
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 51,
            "movement": -6
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 53,
            "movement": -35
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 53,
            "movement": -15
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 56,
            "movement": 9
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 57,
            "movement": -11
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 64,
            "movement": -35
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 65,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 70,
            "movement": -7
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 71,
            "movement": 38
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 72,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 78,
            "movement": 66
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 78,
            "movement": -14
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 80,
            "movement": 7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 83,
            "movement": -5
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 83,
            "movement": 75
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 87,
            "movement": 29
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 97,
            "movement": -45
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 112,
            "movement": -4
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 119,
            "movement": -49
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 120,
            "movement": 8
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 140,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 144,
            "movement": -36
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 146,
            "movement": -2
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 185,
            "movement": -6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 187,
            "movement": -36
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
            "movement": 1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 109,
            "movement": -21
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
            "position": 46,
            "movement": -5
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 82,
            "movement": -8
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
            "country": "TD",
            "name": "Chad",
            "position": 12,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 30,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 105,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 122,
            "movement": 32
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 135,
            "movement": -43
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 155,
            "movement": 39
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 175,
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
            "country": "SZ",
            "name": "Eswatini",
            "position": 9,
            "movement": 0
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 22,
            "movement": -5
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 23,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 41,
            "movement": -14
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 50,
            "movement": 1
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 63,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 78,
            "movement": -16
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
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 163,
            "movement": 11
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
            "position": 31,
            "movement": -13
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 32,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 34,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 42,
            "movement": 6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 67,
            "movement": -3
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 71,
            "movement": -29
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 100,
            "movement": -31
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 107,
            "movement": 24
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 130,
            "movement": -23
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 132,
            "movement": -43
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 148,
            "movement": -15
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 182,
            "movement": -22
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 190,
            "movement": -15
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
            "position": 149,
            "movement": -6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 189,
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
            "position": 133,
            "movement": 1
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
            "position": 18,
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
            "position": 7,
            "movement": 1
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
            "country": "GM",
            "name": "Gambia",
            "position": 33,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 54,
            "movement": -22
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 77,
            "movement": -4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 77,
            "movement": -17
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 97,
            "movement": -7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 101,
            "movement": -22
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 107,
            "movement": -26
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 109,
            "movement": -31
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 132,
            "movement": -21
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 176,
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
            "position": 19,
            "movement": -2
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
            "country": "LR",
            "name": "Liberia",
            "position": 46,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 46,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 54,
            "movement": 2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 60,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 95,
            "movement": 32
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 137,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 149,
            "movement": -31
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 152,
            "movement": 22
          },
          {
            "country": "TD",
            "name": "Chad",
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
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 19,
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
    "title": "19 & Dangerous",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 9,
            "movement": 147
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 74,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 91,
            "movement": -43
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 103,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 125,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 125,
            "movement": 9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 146,
            "movement": -36
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 188,
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
            "position": 126,
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
    "title": "The Year I Turned 21",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 20,
            "movement": -16
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 108,
            "movement": -10
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 135,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 141,
            "movement": 51
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 151,
            "movement": 13
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 174,
            "movement": -1
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 180,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 199,
            "movement": -94
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
            "position": 65,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "album",
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
            "position": 72,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 78,
            "movement": -6
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 79,
            "movement": -3
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 105,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 150,
            "movement": -33
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 159,
            "movement": 28
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 168,
            "movement": 10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 179,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4b5a287c8f574407dc5b1b03b5ae0c58/500x500-000000-80-0-0.jpg"
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
            "position": 63,
            "movement": -16
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 66,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 80,
            "movement": 4
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 136,
            "movement": -19
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 165,
            "movement": -22
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
            "position": 140,
            "movement": -7
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
            "position": 49,
            "movement": -7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 81,
            "movement": 23
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 102,
            "movement": 27
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 129,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 130,
            "movement": 30
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 142,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/24407cf49fdf864463cb5ca5ad974630/500x500-000000-80-0-0.jpg"
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
            "position": 27,
            "movement": -13
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 53,
            "movement": -45
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 123,
            "movement": -13
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 81,
            "movement": -40
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
            "position": 157,
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
    "title": "No love",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 55,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 113,
            "movement": -46
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 114,
            "movement": 54
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 135,
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
            "country": "LR",
            "name": "Liberia",
            "position": 81,
            "movement": 50
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 87,
            "movement": 11
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 123,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 134,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 169,
            "movement": -66
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d096ea1c1019d1af67c0a2e434890e1e/500x500-000000-80-0-0.jpg"
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
            "position": 89,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 139,
            "movement": -26
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 192,
            "movement": -59
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
            "position": 37,
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
    "title": "Ngozi",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 93,
            "movement": -48
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 151,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 167,
            "movement": 16
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 182,
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
            "position": 27,
            "movement": 0
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
            "position": 153,
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
    "title": "Bad Vibes",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 128,
            "movement": 17
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 155,
            "movement": -10
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
    "cover": "https://cdn-images.dzcdn.net/images/cover/e61faaeb59320961cbd17a1ef7f9e6e7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Santa",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PA",
            "name": "Panama",
            "position": 168,
            "movement": 6
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
    "title": "Dangerous",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 100,
            "movement": -14
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
            "position": 123,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-14",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
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
            "position": 7,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-13",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
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
    "title": "Amazing",
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
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-13",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
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
    "title": "Beggie Beggie",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 129,
            "movement": 33
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-12",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b922c719d3a9901f749140e8f532a8d0/500x500-000000-80-0-0.jpg"
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
            "position": 166,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-13",
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
            "country": "FJ",
            "name": "Fiji",
            "position": 170,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-13",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d30dbeb4d445f5cc6f7f100b830731c4/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Comforter",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 110,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-14",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e18f46f5169476d41ff6bf5f188e1127/500x500-000000-80-0-0.jpg"
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
            "position": 167,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-14",
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
            "country": "AO",
            "name": "Angola",
            "position": 85,
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
  