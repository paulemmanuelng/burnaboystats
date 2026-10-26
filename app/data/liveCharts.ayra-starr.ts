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
  export const liveChartsUpdated = "2026-10-26";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-26T13:10Z";
  
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
            "country": "SC",
            "name": "Seychelles",
            "position": 2,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 3,
            "movement": -1
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 4,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 4,
            "movement": 0
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 5,
            "movement": 0
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 5,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 6,
            "movement": -1
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 7,
            "movement": 1
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 8,
            "movement": 5
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 9,
            "movement": -1
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 9,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 9,
            "movement": 0
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 10,
            "movement": -6
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 13,
            "movement": -1
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 14,
            "movement": -2
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 17,
            "movement": 1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 17,
            "movement": -4
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 18,
            "movement": -9
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 20,
            "movement": -6
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 20,
            "movement": -3
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 21,
            "movement": -5
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 23,
            "movement": 15
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 24,
            "movement": -17
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 25,
            "movement": -6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 28,
            "movement": -1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 30,
            "movement": -3
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 30,
            "movement": -16
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 30,
            "movement": -1
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 32,
            "movement": 7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 35,
            "movement": 14
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 38,
            "movement": 6
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 38,
            "movement": -2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 41,
            "movement": -9
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 45,
            "movement": -7
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 48,
            "movement": -1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 50,
            "movement": -12
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 53,
            "movement": -15
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 59,
            "movement": 34
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 69,
            "movement": -5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 70,
            "movement": -45
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 70,
            "movement": -12
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 87,
            "movement": -15
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 90,
            "movement": -3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 93,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 117,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 133,
            "movement": -8
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 144,
            "movement": -4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 154,
            "movement": -51
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 166,
            "movement": -10
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 175,
            "movement": -118
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
            "country": "CM",
            "name": "Cameroon",
            "position": 7,
            "movement": -1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 7,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 11,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 13,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 13,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 15,
            "movement": -1
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 29,
            "movement": -1
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 29,
            "movement": 6
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 43,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 49,
            "movement": 0
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 72,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 100,
            "movement": -3
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 141,
            "movement": -18
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
            "position": 3,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 20,
            "movement": -18
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 40,
            "movement": 9
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 41,
            "movement": -38
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 42,
            "movement": -38
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 55,
            "movement": -1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 74,
            "movement": -27
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 169,
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
            "country": "JM",
            "name": "Jamaica",
            "position": 14,
            "movement": 46
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 14,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 21,
            "movement": 46
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
            "position": 67,
            "movement": -23
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 74,
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 6,
            "movement": 1
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 7,
            "movement": -4
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 8,
            "movement": 0
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 10,
            "movement": 3
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 10,
            "movement": 8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 10,
            "movement": 0
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 11,
            "movement": -2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 12,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 15,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 15,
            "movement": -3
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 16,
            "movement": 13
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 20,
            "movement": 0
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 22,
            "movement": -13
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 23,
            "movement": 10
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 25,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 25,
            "movement": 0
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 26,
            "movement": -4
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 27,
            "movement": 38
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 32,
            "movement": 6
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 34,
            "movement": 7
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 37,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 38,
            "movement": -5
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 38,
            "movement": -18
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 41,
            "movement": -7
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 45,
            "movement": -16
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 45,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 45,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 47,
            "movement": -2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 48,
            "movement": -3
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 49,
            "movement": -10
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 52,
            "movement": -13
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 53,
            "movement": -26
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 56,
            "movement": 8
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 57,
            "movement": 53
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 61,
            "movement": 37
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 61,
            "movement": -29
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 68,
            "movement": -45
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 73,
            "movement": -17
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 78,
            "movement": 25
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 81,
            "movement": -35
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 97,
            "movement": -14
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 98,
            "movement": -40
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 105,
            "movement": -12
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 111,
            "movement": 2
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 118,
            "movement": -1
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 142,
            "movement": -102
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 158,
            "movement": -64
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 161,
            "movement": 37
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 163,
            "movement": -66
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
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 118,
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 45,
            "movement": 111
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 63,
            "movement": -12
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 112,
            "movement": -14
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 143,
            "movement": -93
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 185,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 199,
            "movement": -42
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
            "position": 18,
            "movement": 7
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 22,
            "movement": -2
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 43,
            "movement": -1
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 53,
            "movement": -29
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
            "position": 78,
            "movement": -2
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
    "title": "treat u right",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 4,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 8,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 14,
            "movement": -4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 61,
            "movement": -13
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 71,
            "movement": -7
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 82,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 88,
            "movement": -25
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 125,
            "movement": -13
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 140,
            "movement": -12
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 152,
            "movement": 11
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
            "position": 14,
            "movement": 0
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
            "position": 161,
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
            "position": 51,
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
    "title": "Colorado",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 23,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 42,
            "movement": -26
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 49,
            "movement": 7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 63,
            "movement": -29
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 77,
            "movement": -26
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 85,
            "movement": 7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 106,
            "movement": -10
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 173,
            "movement": -52
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
            "position": 55,
            "movement": -5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 91,
            "movement": -38
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
            "position": 124,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 142,
            "movement": -12
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
            "movement": 16
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4d16c0dbdfcfa22baaec4a11c3f283a/500x500-000000-80-0-0.jpg"
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
            "position": 14,
            "movement": -9
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 23,
            "movement": 23
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 55,
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
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 108,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 122,
            "movement": -28
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 127,
            "movement": -27
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 141,
            "movement": -5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 144,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 184,
            "movement": -21
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 197,
            "movement": 3
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
    "title": "No love",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 67,
            "movement": 62
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 69,
            "movement": 30
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 99,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 106,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 133,
            "movement": 3
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 137,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 138,
            "movement": 25
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 158,
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
            "position": 50,
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
    "title": "Tornado",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 60,
            "movement": 22
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 68,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 72,
            "movement": 24
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 137,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 139,
            "movement": -29
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 152,
            "movement": -68
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 155,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
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
            "position": 84,
            "movement": 10
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
            "position": 37,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 76,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 89,
            "movement": -26
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 90,
            "movement": 30
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 119,
            "movement": 6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 149,
            "movement": -26
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 164,
            "movement": 8
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 175,
            "movement": -50
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
            "country": "SB",
            "name": "Solomon Islands",
            "position": 35,
            "movement": -18
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 45,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 112,
            "movement": 6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 147,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 189,
            "movement": -21
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 198,
            "movement": -72
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
            "country": "FM",
            "name": "Micronesia",
            "position": 86,
            "movement": -19
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 157,
            "movement": -24
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 190,
            "movement": -21
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
            "position": 23,
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
            "position": 19,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 94,
            "movement": -5
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 144,
            "movement": -8
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
            "position": 28,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 33,
            "movement": 27
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
            "country": "FM",
            "name": "Micronesia",
            "position": 39,
            "movement": -23
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 64,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 122,
            "movement": -17
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 138,
            "movement": 47
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 163,
            "movement": -38
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 191,
            "movement": -28
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
            "position": 69,
            "movement": -10
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 92,
            "movement": 34
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 103,
            "movement": 15
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 113,
            "movement": 16
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 138,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 164,
            "movement": 0
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
            "country": "UG",
            "name": "Uganda",
            "position": 127,
            "movement": 10
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 134,
            "movement": -17
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 186,
            "movement": -28
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 190,
            "movement": -20
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/12ca87c2ea2fa9506d6fc562bd8f5a01/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bloody Samaritan",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 138,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 172,
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
            "position": 29,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6811d7a880826af2be69b81686f629f2/500x500-000000-80-0-0.jpg"
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
            "position": 11,
            "movement": 18
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 39,
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
    "title": "Dangerous",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 96,
            "movement": -63
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 154,
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
            "country": "UG",
            "name": "Uganda",
            "position": 123,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 163,
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
    "title": "Bad Vibes",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 133,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 181,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e61faaeb59320961cbd17a1ef7f9e6e7/500x500-000000-80-0-0.jpg"
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
            "position": 100,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 200,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-26",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e18f46f5169476d41ff6bf5f188e1127/500x500-000000-80-0-0.jpg"
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
            "country": "PE",
            "name": "Peru",
            "position": 91,
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
    "title": "Woman Commando",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MA",
            "name": "Morocco",
            "position": 5,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-26",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d096ea1c1019d1af67c0a2e434890e1e/500x500-000000-80-0-0.jpg"
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
            "position": 92,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-22",
    "cover": "https://cdn-images.dzcdn.net/images/cover/37efb43b4704415ff51e98e357041982/500x500-000000-80-0-0.jpg"
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
            "position": 77,
            "movement": 10
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d30dbeb4d445f5cc6f7f100b830731c4/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Goodbye",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 87,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-26",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d096ea1c1019d1af67c0a2e434890e1e/500x500-000000-80-0-0.jpg"
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
            "position": 72,
            "movement": 18
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-24",
    "cover": "https://cdn-images.dzcdn.net/images/cover/37efb43b4704415ff51e98e357041982/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Gimme Dat",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 191,
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
    "title": "My Baby",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 150,
            "movement": -28
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/764fec44b70e643da16fe971e5ad3099/500x500-000000-80-0-0.jpg"
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
            "position": 175,
            "movement": -113
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-10-24",
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
  