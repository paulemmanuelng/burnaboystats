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
  export const liveChartsUpdated = "2026-09-29";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-09-29T22:19Z";
  
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
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 1,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 2,
            "movement": 0
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 3,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 4,
            "movement": 0
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 4,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 5,
            "movement": -3
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 7,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 7,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 7,
            "movement": 0
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 9,
            "movement": 1
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 11,
            "movement": -4
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 16,
            "movement": 6
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 18,
            "movement": 3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 18,
            "movement": -10
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 18,
            "movement": 31
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 19,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 20,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 23,
            "movement": -1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 27,
            "movement": 0
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 28,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 28,
            "movement": 0
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 30,
            "movement": 13
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 30,
            "movement": -9
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 38,
            "movement": 3
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 38,
            "movement": 16
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 41,
            "movement": -9
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 42,
            "movement": 23
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 52,
            "movement": -7
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 52,
            "movement": 7
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 54,
            "movement": 1
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 58,
            "movement": 29
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 68,
            "movement": -20
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 72,
            "movement": -2
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 78,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 79,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 79,
            "movement": 0
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 89,
            "movement": 11
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 90,
            "movement": 24
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 97,
            "movement": -30
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 103,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 116,
            "movement": 25
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 132,
            "movement": -44
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 132,
            "movement": -11
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 139,
            "movement": -24
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 149,
            "movement": -70
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 158,
            "movement": -39
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 159,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 163,
            "movement": -9
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
            "position": 3,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 7,
            "movement": 1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 8,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 8,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 12,
            "movement": 0
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 13,
            "movement": 0
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 14,
            "movement": 2
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 19,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 34,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 65,
            "movement": -3
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 67,
            "movement": -1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 114,
            "movement": 23
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 125,
            "movement": 16
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 1,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 1,
            "movement": 0
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 26,
            "movement": -3
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 26,
            "movement": -12
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 29,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 45,
            "movement": -18
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 53,
            "movement": -8
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 91,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 98,
            "movement": -93
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
            "position": 8,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 14,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 17,
            "movement": -10
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 20,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 24,
            "movement": -1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 25,
            "movement": 3
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
            "position": 55,
            "movement": -1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 83,
            "movement": 81
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
        "numberOnes": 1,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 1,
            "movement": 1
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 3,
            "movement": 9
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 5,
            "movement": 4
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 5,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 5,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 5,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 5,
            "movement": 0
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 6,
            "movement": 6
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 7,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 8,
            "movement": -5
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 8,
            "movement": 0
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 11,
            "movement": 12
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 13,
            "movement": -2
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 14,
            "movement": -1
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 15,
            "movement": 19
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 16,
            "movement": 4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 17,
            "movement": -1
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 20,
            "movement": 127
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 20,
            "movement": -3
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 24,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 25,
            "movement": 16
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 28,
            "movement": -2
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 28,
            "movement": 28
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 34,
            "movement": 62
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 34,
            "movement": 6
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 34,
            "movement": 3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 43,
            "movement": -3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 45,
            "movement": -25
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 49,
            "movement": 5
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 52,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 52,
            "movement": -5
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 53,
            "movement": 55
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 57,
            "movement": 31
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 61,
            "movement": -5
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 63,
            "movement": -11
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 73,
            "movement": 36
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 77,
            "movement": -31
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 89,
            "movement": -16
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 92,
            "movement": 4
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 99,
            "movement": 12
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 106,
            "movement": 11
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 112,
            "movement": -22
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 113,
            "movement": -35
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 118,
            "movement": -45
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 121,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 124,
            "movement": 7
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 150,
            "movement": 28
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 156,
            "movement": -10
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 181,
            "movement": -95
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 196,
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
            "position": 8,
            "movement": -3
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 192,
            "movement": -23
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
            "position": 18,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 93,
            "movement": -28
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
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
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 22,
            "movement": -7
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 28,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 61,
            "movement": -7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 85,
            "movement": 7
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 102,
            "movement": 4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 112,
            "movement": 11
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 156,
            "movement": 14
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 179,
            "movement": -116
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
            "position": 82,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 110,
            "movement": 1
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 190,
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
            "position": 90,
            "movement": -8
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
            "position": 39,
            "movement": 27
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 10,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 17,
            "movement": -7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 28,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 113,
            "movement": 39
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 151,
            "movement": 20
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 158,
            "movement": 17
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 171,
            "movement": 16
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 185,
            "movement": -15
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 196,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 200,
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
            "position": 30,
            "movement": 3
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
            "position": 96,
            "movement": -18
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
            "position": 143,
            "movement": 0
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
            "movement": -10
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 45,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 57,
            "movement": 4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 64,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 79,
            "movement": 49
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 92,
            "movement": -24
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 105,
            "movement": -65
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 123,
            "movement": -16
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 131,
            "movement": -34
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 149,
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
            "position": 198,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 15,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 18,
            "movement": -1
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 62,
            "movement": -1
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 63,
            "movement": -29
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 71,
            "movement": -3
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
            "position": 32,
            "movement": 29
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 114,
            "movement": 45
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 191,
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
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 195,
            "movement": -4
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 17,
            "movement": 64
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a73bed954d61b52564118ac926925d76/500x500-000000-80-0-0.jpg"
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
            "position": 7,
            "movement": 0
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 12,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 30,
            "movement": 1
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 42,
            "movement": -3
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 195,
            "movement": 4
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
            "position": 27,
            "movement": -15
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 28,
            "movement": -17
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 35,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 156,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c4c1696f82feac0a7fa1e26379b9f7e2/500x500-000000-80-0-0.jpg"
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
            "position": 35,
            "movement": -8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 68,
            "movement": -17
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 87,
            "movement": 11
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 94,
            "movement": 8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 113,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 185,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 186,
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
            "position": 65,
            "movement": 2
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
            "position": 63,
            "movement": -7
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
            "country": "NE",
            "name": "Niger",
            "position": 59,
            "movement": 113
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 65,
            "movement": 1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 69,
            "movement": 27
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 97,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FR",
            "name": "France",
            "position": 119,
            "movement": 2
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 156,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 159,
            "movement": -48
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 198,
            "movement": -51
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
            "position": 46,
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
            "country": "LR",
            "name": "Liberia",
            "position": 69,
            "movement": 61
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 81,
            "movement": 3
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 92,
            "movement": -55
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 133,
            "movement": 10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 141,
            "movement": -56
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 144,
            "movement": 35
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 163,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 192,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 195,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/24407cf49fdf864463cb5ca5ad974630/500x500-000000-80-0-0.jpg"
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
            "position": 53,
            "movement": -35
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 89,
            "movement": 5
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 93,
            "movement": 31
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 102,
            "movement": -53
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 111,
            "movement": -10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 140,
            "movement": -45
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 168,
            "movement": 7
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
            "position": 56,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "album",
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 39,
            "movement": 0
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 85,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 115,
            "movement": -14
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 128,
            "movement": 13
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 142,
            "movement": 5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 187,
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
            "position": 135,
            "movement": 11
          }
        ]
      }
    ],
    "kind": "album",
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 98,
            "movement": 63
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 106,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 109,
            "movement": 37
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 141,
            "movement": 28
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 142,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 169,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 188,
            "movement": 5
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 114,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 117,
            "movement": -21
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 132,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 194,
            "movement": -30
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
            "position": 20,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 61,
            "movement": -4
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 17,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 115,
            "movement": 10
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 118,
            "movement": 45
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 142,
            "movement": -11
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
            "position": 142,
            "movement": -17
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/12ca87c2ea2fa9506d6fc562bd8f5a01/500x500-000000-80-0-0.jpg"
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
            "position": 10,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 19,
            "movement": 3
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 46,
            "movement": 89
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 119,
            "movement": 29
          }
        ]
      }
    ],
    "kind": "song",
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
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 68,
            "movement": -22
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 76,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 103,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/fee95162ec0b1b078345831eb47b8e99/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "All The Love",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 1,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 1,
            "movement": 2
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 69,
            "movement": 24
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d30dbeb4d445f5cc6f7f100b830731c4/500x500-000000-80-0-0.jpg"
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
            "position": 84,
            "movement": 43
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
            "position": 100,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Dangerous",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 99,
            "movement": 93
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
            "position": 44,
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
    "title": "Bloody Samaritan",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 193,
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
            "position": 30,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "song",
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
            "country": "NG",
            "name": "Nigeria",
            "position": 142,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 143,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e61faaeb59320961cbd17a1ef7f9e6e7/500x500-000000-80-0-0.jpg"
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
            "position": 134,
            "movement": -98
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 185,
            "movement": -47
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d096ea1c1019d1af67c0a2e434890e1e/500x500-000000-80-0-0.jpg"
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
            "country": "BO",
            "name": "Bolivia",
            "position": 90,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/965eeb50245f3178580ac5bda885e56b/500x500-000000-80-0-0.jpg"
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
            "position": 74,
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
    "title": "Hypé",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 74,
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
    "title": "Misunderstood",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 101,
            "movement": -2
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 44,
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
    "title": "Where Do We Go",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SR",
            "name": "Suriname",
            "position": 136,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/227c27e8b3db2fc1be8808745b5c9fc1/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Letter To God",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SR",
            "name": "Suriname",
            "position": 141,
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
    "title": "Won Da Mo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 97,
            "movement": -79
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee5b8bb977ed14449b1a4cdde235ba53/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Escaladizzy II",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 180,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d47d959a99da468afdd69a8f855be482/500x500-000000-80-0-0.jpg"
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
  