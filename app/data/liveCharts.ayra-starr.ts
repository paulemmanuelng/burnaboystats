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
  export const liveChartsUpdated = "2026-11-15";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-15T18:56Z";
  
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
            "movement": 0
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 6,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 6,
            "movement": -1
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 9,
            "movement": -1
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 10,
            "movement": 147
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 10,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 11,
            "movement": 5
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 12,
            "movement": -8
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 14,
            "movement": -4
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 15,
            "movement": 2
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 19,
            "movement": 19
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 21,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 24,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 27,
            "movement": 2
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 28,
            "movement": -23
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 33,
            "movement": -18
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 34,
            "movement": 3
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 37,
            "movement": 5
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 37,
            "movement": 50
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 40,
            "movement": -15
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 44,
            "movement": -2
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 45,
            "movement": -13
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 45,
            "movement": -26
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 47,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 48,
            "movement": -1
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 49,
            "movement": -5
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 50,
            "movement": -6
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 54,
            "movement": -7
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 62,
            "movement": 46
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 63,
            "movement": -2
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 71,
            "movement": -28
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 78,
            "movement": 27
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 88,
            "movement": 2
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 101,
            "movement": -18
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 110,
            "movement": -56
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 110,
            "movement": 88
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 113,
            "movement": -9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 120,
            "movement": -9
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 127,
            "movement": -51
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 127,
            "movement": -5
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 130,
            "movement": -21
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 140,
            "movement": -2
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 170,
            "movement": 10
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
            "country": "UG",
            "name": "Uganda",
            "position": 14,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 15,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 16,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 19,
            "movement": 2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 30,
            "movement": -3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 35,
            "movement": -1
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 50,
            "movement": -1
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 70,
            "movement": -3
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 97,
            "movement": -5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 129,
            "movement": -6
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 175,
            "movement": -12
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 7,
            "movement": -1
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 7,
            "movement": -5
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 9,
            "movement": -1
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 10,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 12,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 66,
            "movement": -11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 93,
            "movement": -19
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
            "position": 105,
            "movement": -45
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 134,
            "movement": -11
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
            "position": 99,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 99,
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
            "position": 6,
            "movement": 0
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 16,
            "movement": -12
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 18,
            "movement": -6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 19,
            "movement": -3
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 20,
            "movement": -7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 23,
            "movement": 11
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 25,
            "movement": 35
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 27,
            "movement": 51
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 29,
            "movement": 19
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 30,
            "movement": -15
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 33,
            "movement": 8
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 40,
            "movement": 19
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 40,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 47,
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 48,
            "movement": 20
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 59,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 60,
            "movement": -9
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 62,
            "movement": -5
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 71,
            "movement": 3
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 72,
            "movement": 12
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 76,
            "movement": -5
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 76,
            "movement": -41
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 77,
            "movement": -20
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 82,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 86,
            "movement": -8
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 87,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 90,
            "movement": -9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 99,
            "movement": 21
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 102,
            "movement": -33
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 105,
            "movement": 8
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 107,
            "movement": -2
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 119,
            "movement": -55
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 132,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 134,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 137,
            "movement": 7
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 140,
            "movement": -48
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 152,
            "movement": -87
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 163,
            "movement": -3
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 169,
            "movement": 16
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 171,
            "movement": -128
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 180,
            "movement": -49
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 180,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 183,
            "movement": -64
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 188,
            "movement": -76
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 188,
            "movement": -30
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SE",
            "name": "Sweden",
            "position": 11,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 57,
            "movement": -11
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 95,
            "movement": -11
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
            "country": "SZ",
            "name": "Eswatini",
            "position": 11,
            "movement": -2
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 20,
            "movement": 3
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 29,
            "movement": -7
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 52,
            "movement": -11
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 52,
            "movement": -2
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 64,
            "movement": 0
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 70,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 81,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 185,
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
            "position": 55,
            "movement": -43
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 66,
            "movement": -36
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 70,
            "movement": 40
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 125,
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
            "position": 186,
            "movement": -23
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
            "position": 62,
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
            "country": "UG",
            "name": "Uganda",
            "position": 30,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 31,
            "movement": 11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 38,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 93,
            "movement": -12
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 125,
            "movement": 23
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 127,
            "movement": -27
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 141,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 149,
            "movement": -17
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 166,
            "movement": -17
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 177,
            "movement": 13
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 181,
            "movement": -9
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 187,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 190,
            "movement": -159
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
            "position": 141,
            "movement": 8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 175,
            "movement": 14
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
            "position": 138,
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
            "position": 124,
            "movement": -106
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
            "position": 9,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 12,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 13,
            "movement": -1
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 51,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 85,
            "movement": -28
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 94,
            "movement": 7
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 103,
            "movement": -70
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 107,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 122,
            "movement": -23
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 123,
            "movement": -14
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 128,
            "movement": -33
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 141,
            "movement": -5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 151,
            "movement": -35
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 181,
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
            "position": 23,
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
    "title": "The Year I Turned 21",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 63,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 106,
            "movement": -30
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 119,
            "movement": 43
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 125,
            "movement": -105
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 159,
            "movement": -22
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 162,
            "movement": 6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 163,
            "movement": -27
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 168,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 174,
            "movement": -44
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 174,
            "movement": 11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 183,
            "movement": 11
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 199,
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
    "title": "Who's Dat Girl",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 33,
            "movement": 13
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 49,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 57,
            "movement": 34
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 66,
            "movement": -11
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 119,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 129,
            "movement": 19
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 134,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 136,
            "movement": 16
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 189,
            "movement": -52
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
            "position": 25,
            "movement": -6
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
            "position": 48,
            "movement": -10
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 58,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 85,
            "movement": 113
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 86,
            "movement": -5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 98,
            "movement": 11
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 120,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 130,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 132,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 172,
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
            "position": 53,
            "movement": -34
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 117,
            "movement": -59
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 122,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 127,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 129,
            "movement": -12
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 151,
            "movement": 17
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 183,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 186,
            "movement": -7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
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
    "title": "Tornado",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 41,
            "movement": 8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 52,
            "movement": 11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 59,
            "movement": 21
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 179,
            "movement": -6
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 179,
            "movement": -43
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
            "position": 154,
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
            "position": 34,
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
            "position": 51,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 64,
            "movement": 7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 67,
            "movement": 11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 146,
            "movement": 33
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 149,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 172,
            "movement": -22
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
            "country": "LR",
            "name": "Liberia",
            "position": 87,
            "movement": -6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 89,
            "movement": -12
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 117,
            "movement": 17
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 126,
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
            "country": "MW",
            "name": "Malawi",
            "position": 180,
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
            "country": "FJ",
            "name": "Fiji",
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 190,
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
    "title": "Bloody Samaritan",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 127,
            "movement": -10
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 138,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 163,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 170,
            "movement": 22
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
            "position": 131,
            "movement": -38
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 142,
            "movement": 40
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 148,
            "movement": -2
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
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 84,
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
            "position": 23,
            "movement": 24
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 93,
            "movement": -40
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 105,
            "movement": 18
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
            "position": 123,
            "movement": 34
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
            "country": "NE",
            "name": "Niger",
            "position": 79,
            "movement": 35
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 92,
            "movement": 6
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 158,
            "movement": -25
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
            "movement": -1
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 29,
            "movement": -2
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
            "position": 97,
            "movement": 93
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c4c1696f82feac0a7fa1e26379b9f7e2/500x500-000000-80-0-0.jpg"
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
            "position": 71,
            "movement": -19
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 6,
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
    "title": "Bad Vibes",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 101,
            "movement": 27
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 147,
            "movement": 8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 198,
            "movement": -2
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
            "position": 200,
            "movement": -32
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
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 36,
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
    "title": "Treasure",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 66,
            "movement": -59
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
    "firstSeen": "2026-11-13",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Gimme Dat",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 176,
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
            "position": 88,
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
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 168,
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
            "position": 159,
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
    "title": "My Baby",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 177,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-15",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "MON BÉBÉ",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 104,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-14",
    "cover": "https://cdn-images.dzcdn.net/images/cover/bae1d173c270367dfe0b472d30c7305f/500x500-000000-80-0-0.jpg"
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
            "position": 58,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-15",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e18f46f5169476d41ff6bf5f188e1127/500x500-000000-80-0-0.jpg"
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
            "position": 135,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-14",
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
            "position": 168,
            "movement": -9
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-12",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b922c719d3a9901f749140e8f532a8d0/500x500-000000-80-0-0.jpg"
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
            "position": 189,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-15",
    "cover": "https://cdn-images.dzcdn.net/images/cover/7861d849c8157fbffc37ccebf0ee75c5/500x500-000000-80-0-0.jpg"
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
  