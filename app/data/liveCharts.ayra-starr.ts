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
    platforms: LivePlatform[];
  }
  
  /** When this snapshot was taken (ISO date). */
  export const liveChartsUpdated = "2026-10-09";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-09T22:42Z";
  
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
            "country": "TZ",
            "name": "Tanzania",
            "position": 3,
            "movement": -1
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 4,
            "movement": -2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 5,
            "movement": 1
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 6,
            "movement": -1
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 6,
            "movement": -1
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 6,
            "movement": 0
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 7,
            "movement": 21
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 7,
            "movement": 0
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 8,
            "movement": -1
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 9,
            "movement": 17
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 9,
            "movement": -2
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 10,
            "movement": 0
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 11,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 12,
            "movement": -5
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 12,
            "movement": 2
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 13,
            "movement": 2
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 14,
            "movement": -1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 15,
            "movement": -1
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 17,
            "movement": -3
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 18,
            "movement": 0
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 19,
            "movement": 2
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 24,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 24,
            "movement": -5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 25,
            "movement": 2
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 26,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 26,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 29,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 31,
            "movement": -10
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 32,
            "movement": 1
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 34,
            "movement": -9
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 40,
            "movement": 1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 41,
            "movement": 0
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 47,
            "movement": -29
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 48,
            "movement": -22
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 64,
            "movement": -24
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 77,
            "movement": -11
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 78,
            "movement": 11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 82,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 94,
            "movement": -2
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 100,
            "movement": -44
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 102,
            "movement": 12
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 103,
            "movement": 41
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 113,
            "movement": -9
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 120,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 128,
            "movement": 9
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 132,
            "movement": -31
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 156,
            "movement": 3
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
            "position": 5,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 5,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 6,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 7,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 11,
            "movement": 1
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 13,
            "movement": 2
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 15,
            "movement": 6
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 20,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 42,
            "movement": 0
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 57,
            "movement": 12
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 71,
            "movement": 9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 75,
            "movement": 4
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 146,
            "movement": 43
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 181,
            "movement": 6
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
            "country": "CM",
            "name": "Cameroon",
            "position": 7,
            "movement": null,
            "status": "re"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 8,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 12,
            "movement": 2
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
            "movement": 0
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 21,
            "movement": 4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 26,
            "movement": -2
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 78,
            "movement": null,
            "status": "re"
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 1,
        "entries": [
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 1,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 3,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 6,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 8,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 24,
            "movement": -11
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 26,
            "movement": -7
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 61,
            "movement": -55
          },
          {
            "country": "FR",
            "name": "France",
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
            "country": "ZA",
            "name": "South Africa",
            "position": 39,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 66,
            "movement": 9
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
            "position": 15,
            "movement": -2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 48,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 3,
            "movement": 0
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 3,
            "movement": 33
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 4,
            "movement": 5
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 8,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 8,
            "movement": -1
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 11,
            "movement": 6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 11,
            "movement": -2
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 13,
            "movement": -1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 14,
            "movement": 6
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 15,
            "movement": 19
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 15,
            "movement": 14
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 16,
            "movement": -5
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 21,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 21,
            "movement": -10
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 24,
            "movement": 9
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 24,
            "movement": 1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 25,
            "movement": -8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 25,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 27,
            "movement": 24
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 30,
            "movement": -4
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 31,
            "movement": -17
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 31,
            "movement": 0
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 34,
            "movement": -5
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 34,
            "movement": -5
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 35,
            "movement": 4
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 38,
            "movement": -2
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 38,
            "movement": -3
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 44,
            "movement": 26
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 48,
            "movement": 9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 49,
            "movement": -9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 50,
            "movement": -13
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 50,
            "movement": -37
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 51,
            "movement": -30
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 57,
            "movement": -9
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 59,
            "movement": -22
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 63,
            "movement": -7
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 64,
            "movement": -30
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 74,
            "movement": null,
            "status": "new"
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 77,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 79,
            "movement": -6
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 93,
            "movement": -42
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 102,
            "movement": -12
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 102,
            "movement": 15
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 104,
            "movement": -5
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 108,
            "movement": -3
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 111,
            "movement": -54
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 116,
            "movement": -35
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 143,
            "movement": 3
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 164,
            "movement": 33
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 178,
            "movement": -56
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 179,
            "movement": 0
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 196,
            "movement": -88
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
            "position": 120,
            "movement": 34
          }
        ]
      }
    ],
    "kind": "album",
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
            "country": "NG",
            "name": "Nigeria",
            "position": 5,
            "movement": 17
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 6,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 8,
            "movement": 22
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 35,
            "movement": -16
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 36,
            "movement": 46
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 53,
            "movement": 19
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 67,
            "movement": 32
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 69,
            "movement": 4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 70,
            "movement": 30
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 106,
            "movement": 34
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 116,
            "movement": -33
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 116,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 190,
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
            "position": 25,
            "movement": 5
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
            "position": 129,
            "movement": 5
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
            "position": 172,
            "movement": 8
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
            "position": 31,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
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
            "country": "FM",
            "name": "Micronesia",
            "position": 71,
            "movement": -12
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 78,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 88,
            "movement": -4
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 99,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 120,
            "movement": -25
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 131,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 153,
            "movement": 20
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 174,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 175,
            "movement": -106
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 179,
            "movement": 7
          },
          {
            "country": "UG",
            "name": "Uganda",
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
            "position": 72,
            "movement": -9
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d096ea1c1019d1af67c0a2e434890e1e/500x500-000000-80-0-0.jpg"
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
            "position": 45,
            "movement": -3
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 154,
            "movement": -90
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 174,
            "movement": -17
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 175,
            "movement": -3
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 177,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 200,
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 15,
            "movement": -4
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 18,
            "movement": 0
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 50,
            "movement": 7
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 57,
            "movement": 2
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 63,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 82,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 21,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 30,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 39,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 92,
            "movement": -6
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 95,
            "movement": -23
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 106,
            "movement": -14
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 189,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
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
            "country": "UG",
            "name": "Uganda",
            "position": 75,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 84,
            "movement": 9
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
            "position": 88,
            "movement": 12
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 44,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 65,
            "movement": 21
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 79,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 85,
            "movement": -21
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 94,
            "movement": -21
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 101,
            "movement": -5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 129,
            "movement": -7
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 136,
            "movement": 11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 153,
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
            "position": 199,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/fe3deba215d998d74542663a84621852/500x500-000000-80-0-0.jpg"
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
            "position": 39,
            "movement": 21
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 62,
            "movement": 16
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 80,
            "movement": -23
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 139,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 159,
            "movement": -45
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 168,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 172,
            "movement": -61
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
            "position": 82,
            "movement": 7
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
            "position": 69,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "song",
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
            "country": "SN",
            "name": "Senegal",
            "position": 74,
            "movement": -8
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 112,
            "movement": 19
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 115,
            "movement": 12
          },
          {
            "country": "FR",
            "name": "France",
            "position": 122,
            "movement": -4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 125,
            "movement": -38
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 127,
            "movement": -9
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 170,
            "movement": -18
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 185,
            "movement": -11
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
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/7b49d51e89ff07824c8c62043775a2ab/500x500-000000-80-0-0.jpg"
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
            "position": 64,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 70,
            "movement": -5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 72,
            "movement": -19
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 155,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 155,
            "movement": 4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 191,
            "movement": -49
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
            "position": 142,
            "movement": -128
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 74,
            "movement": -12
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 115,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 152,
            "movement": -17
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 166,
            "movement": -14
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 186,
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
            "position": 145,
            "movement": -10
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b922c719d3a9901f749140e8f532a8d0/500x500-000000-80-0-0.jpg"
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
            "movement": 0
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 10,
            "movement": 1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 31,
            "movement": -3
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 57,
            "movement": -1
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 7,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 32,
            "movement": 16
          }
        ]
      }
    ],
    "kind": "song",
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
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 67,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 148,
            "movement": -26
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 165,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 170,
            "movement": -54
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
            "position": 73,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 96,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e61faaeb59320961cbd17a1ef7f9e6e7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Last Heartbreak Song",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 85,
            "movement": 45
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 93,
            "movement": -11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 96,
            "movement": -33
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 101,
            "movement": 12
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 130,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d096ea1c1019d1af67c0a2e434890e1e/500x500-000000-80-0-0.jpg"
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
            "position": 51,
            "movement": 33
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 148,
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
            "position": 45,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 46,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
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
            "position": 111,
            "movement": -1
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 116,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 168,
            "movement": -17
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 187,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
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
            "country": "NG",
            "name": "Nigeria",
            "position": 93,
            "movement": 40
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 104,
            "movement": 5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 112,
            "movement": 8
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 112,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/37efb43b4704415ff51e98e357041982/500x500-000000-80-0-0.jpg"
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
            "position": 136,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 167,
            "movement": -81
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
            "position": 46,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 120,
            "movement": -47
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 164,
            "movement": -53
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 174,
            "movement": -49
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4b5a287c8f574407dc5b1b03b5ae0c58/500x500-000000-80-0-0.jpg"
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
            "position": 130,
            "movement": -10
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 200,
            "movement": -4
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 87,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "song",
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 169,
            "movement": 28
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
            "position": 27,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6811d7a880826af2be69b81686f629f2/500x500-000000-80-0-0.jpg"
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
            "position": 150,
            "movement": -38
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
            "position": 100,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d30dbeb4d445f5cc6f7f100b830731c4/500x500-000000-80-0-0.jpg"
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
            "position": 45,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Sability",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 67,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6d6d6db9d6a54f8735971b8cab496784/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Gimme Dat",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 82,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2e52f4bf8bdb05c98002b714669ee2c2/500x500-000000-80-0-0.jpg"
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
            "position": 174,
            "movement": 5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/37efb43b4704415ff51e98e357041982/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Beggie Beggie",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 134,
            "movement": 5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b922c719d3a9901f749140e8f532a8d0/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ms. Paper",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 173,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
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
  