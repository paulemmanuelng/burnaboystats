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
  export const liveChartsUpdated = "2026-11-27";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-27T21:22Z";
  
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
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 3,
            "movement": 2
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 3,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 11,
            "movement": 1
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 12,
            "movement": 15
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 14,
            "movement": 4
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 15,
            "movement": -5
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 16,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 20,
            "movement": -1
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 25,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 27,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 31,
            "movement": -5
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 34,
            "movement": 54
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 38,
            "movement": -1
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 41,
            "movement": -13
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 42,
            "movement": -27
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 46,
            "movement": -30
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 48,
            "movement": -24
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 53,
            "movement": -6
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 62,
            "movement": 10
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 69,
            "movement": 7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 70,
            "movement": -35
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 71,
            "movement": 11
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 71,
            "movement": -26
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 73,
            "movement": -4
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 78,
            "movement": -20
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 87,
            "movement": -13
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 88,
            "movement": -8
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 90,
            "movement": 5
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 95,
            "movement": -34
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 104,
            "movement": 40
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 109,
            "movement": -29
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 124,
            "movement": 30
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 132,
            "movement": 26
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 135,
            "movement": -55
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 154,
            "movement": -11
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 163,
            "movement": 21
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 164,
            "movement": -28
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 180,
            "movement": -8
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 186,
            "movement": -45
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 197,
            "movement": -59
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
            "position": 18,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 19,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 30,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 38,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 39,
            "movement": -9
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 47,
            "movement": 12
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 68,
            "movement": -2
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 94,
            "movement": -3
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 142,
            "movement": 1
          },
          {
            "country": "MY",
            "name": "Malaysia",
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
            "position": 4,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 5,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 28,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 48,
            "movement": -5
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 97,
            "movement": 90
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
            "position": 27,
            "movement": -22
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 68,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 81,
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
            "position": 122,
            "movement": -28
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 172,
            "movement": 8
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
            "country": "UG",
            "name": "Uganda",
            "position": 19,
            "movement": 4
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 24,
            "movement": 6
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 24,
            "movement": -6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 25,
            "movement": 3
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 26,
            "movement": 16
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 28,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 29,
            "movement": -6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 31,
            "movement": -4
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 45,
            "movement": -16
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 45,
            "movement": -26
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 53,
            "movement": 0
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 56,
            "movement": -6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 61,
            "movement": -3
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 64,
            "movement": -13
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 66,
            "movement": -9
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 66,
            "movement": -40
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 83,
            "movement": -60
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 89,
            "movement": 77
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 91,
            "movement": 6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 94,
            "movement": 2
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 94,
            "movement": 37
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 96,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 99,
            "movement": -45
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 105,
            "movement": -27
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 108,
            "movement": -24
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 112,
            "movement": -31
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 129,
            "movement": -55
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 141,
            "movement": -30
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 145,
            "movement": -76
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 146,
            "movement": null,
            "status": "new"
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 150,
            "movement": -3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 153,
            "movement": -36
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 156,
            "movement": 4
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 162,
            "movement": -70
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 168,
            "movement": -81
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 173,
            "movement": -95
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 184,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 185,
            "movement": -38
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 188,
            "movement": 2
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
            "position": 19,
            "movement": 1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 156,
            "movement": -17
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
            "country": "FJ",
            "name": "Fiji",
            "position": 51,
            "movement": -23
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 76,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 81,
            "movement": -58
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 111,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 126,
            "movement": -52
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 148,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 196,
            "movement": -3
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 198,
            "movement": -42
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 12,
            "movement": 1
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 16,
            "movement": -1
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 40,
            "movement": -6
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 63,
            "movement": 1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 72,
            "movement": -15
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 78,
            "movement": 6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 181,
            "movement": -3
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
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 196,
            "movement": -5
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
            "position": 10,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 18,
            "movement": 2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 27,
            "movement": 18
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 48,
            "movement": 6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 67,
            "movement": 6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 98,
            "movement": -21
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 126,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 138,
            "movement": -40
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 149,
            "movement": 10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 187,
            "movement": -11
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 192,
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
            "position": 37,
            "movement": -3
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
            "position": 140,
            "movement": -115
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
            "position": 23,
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
            "country": "UG",
            "name": "Uganda",
            "position": 37,
            "movement": 12
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 48,
            "movement": -19
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 51,
            "movement": -20
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 61,
            "movement": -10
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 80,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 114,
            "movement": -30
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
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
            "position": 196,
            "movement": -9
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
            "movement": -38
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
            "position": 24,
            "movement": 46
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 58,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 65,
            "movement": -42
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 77,
            "movement": 4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 90,
            "movement": -13
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 116,
            "movement": 51
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 144,
            "movement": 20
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 166,
            "movement": -47
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
    "title": "The Year I Turned 21",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 71,
            "movement": -8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 103,
            "movement": 11
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 108,
            "movement": -89
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 142,
            "movement": 0
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 168,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 177,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 199,
            "movement": -7
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
            "position": 68,
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
    "title": "Commas",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 143,
            "movement": -52
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 187,
            "movement": -10
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
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 70,
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
    "title": "19 & Dangerous",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 33,
            "movement": -12
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 114,
            "movement": 3
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 148,
            "movement": -59
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 158,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 171,
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
            "position": 121,
            "movement": 4
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
            "position": 52,
            "movement": 30
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 97,
            "movement": -18
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 124,
            "movement": -38
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 142,
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
            "position": 37,
            "movement": null,
            "status": "new"
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
            "position": 17,
            "movement": 30
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 94,
            "movement": 11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 119,
            "movement": 65
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 184,
            "movement": 6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 189,
            "movement": -15
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
            "country": "TM",
            "name": "Turkmenistan",
            "position": 93,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 147,
            "movement": -5
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 160,
            "movement": 22
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 165,
            "movement": 8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 187,
            "movement": -11
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
            "country": "UG",
            "name": "Uganda",
            "position": 71,
            "movement": 14
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 118,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 173,
            "movement": -52
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 189,
            "movement": -16
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
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 74,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 167,
            "movement": -23
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
            "position": 14,
            "movement": 1
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 58,
            "movement": -11
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c4c1696f82feac0a7fa1e26379b9f7e2/500x500-000000-80-0-0.jpg"
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
            "position": 5,
            "movement": -4
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 77,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e18f46f5169476d41ff6bf5f188e1127/500x500-000000-80-0-0.jpg"
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
            "position": 34,
            "movement": 104
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 176,
            "movement": 19
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-24",
    "cover": "https://cdn-images.dzcdn.net/images/cover/24407cf49fdf864463cb5ca5ad974630/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Gimme Dat",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DM",
            "name": "Dominica",
            "position": 137,
            "movement": 1
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
            "position": 33,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-26",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2e52f4bf8bdb05c98002b714669ee2c2/500x500-000000-80-0-0.jpg"
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
            "position": 152,
            "movement": 41
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
            "position": 51,
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
    "title": "Overloading",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 126,
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
            "country": "GH",
            "name": "Ghana",
            "position": 187,
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
    "title": "Bloody Samaritan",
    "platforms": [
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
    "title": "Escaladizzy II",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 109,
            "movement": 71
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-26",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c51686553cfcb775a4abbe6ab4518bfc/500x500-000000-80-0-0.jpg"
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
            "position": 153,
            "movement": -51
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-23",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d30dbeb4d445f5cc6f7f100b830731c4/500x500-000000-80-0-0.jpg"
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
            "position": 191,
            "movement": -42
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-24",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4f920b01bcb9ce9949049741f8720fc7/500x500-000000-80-0-0.jpg"
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
  