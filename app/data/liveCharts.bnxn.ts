// GENERATED FILE — do not edit by hand.
  // Rebuilt several times a day by scripts/build-live-charts.mjs --artist=bnxn from kworb's artist page.
  //
  // PLATFORM chart data for BNXN: where each release is sitting RIGHT
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
  export const liveChartsUpdated = "2026-10-04";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-04T12:26Z";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","Spotify Albums","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "Still In Charge - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 2,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 2,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 2,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 3,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 3,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 5,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 5,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 6,
            "movement": -2
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 6,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 8,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 9,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 11,
            "movement": -1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 12,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 13,
            "movement": -2
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 14,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 15,
            "movement": -6
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 17,
            "movement": -1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 22,
            "movement": 12
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 28,
            "movement": 24
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 29,
            "movement": 20
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 30,
            "movement": -20
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 34,
            "movement": -6
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 34,
            "movement": -1
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 43,
            "movement": -21
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 55,
            "movement": -4
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 62,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 64,
            "movement": -4
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 65,
            "movement": 2
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 65,
            "movement": -30
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 82,
            "movement": -15
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 86,
            "movement": -70
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 94,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 98,
            "movement": -47
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 100,
            "movement": -70
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 104,
            "movement": -16
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 104,
            "movement": -59
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 117,
            "movement": 1
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 117,
            "movement": -12
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 121,
            "movement": 36
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 121,
            "movement": -6
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 144,
            "movement": -4
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 155,
            "movement": 20
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 156,
            "movement": 8
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 182,
            "movement": -64
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LA",
            "name": "Laos",
            "position": 191,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 198,
            "movement": -108
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
            "position": 3,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Eja Meja",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 2,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 19,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 20,
            "movement": -11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 20,
            "movement": -4
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 33,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 34,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 36,
            "movement": 6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 38,
            "movement": 14
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 41,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 51,
            "movement": -17
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 88,
            "movement": 8
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 97,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 105,
            "movement": -46
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 151,
            "movement": -94
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 159,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 160,
            "movement": 12
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 167,
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
            "position": 11,
            "movement": -6
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
            "position": 110,
            "movement": -91
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
            "position": 127,
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
            "position": 25,
            "movement": 11
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/065baff6ae2b9caecf19bb6aa423644a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Back Outside",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 15,
            "movement": 3
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 24,
            "movement": 78
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 36,
            "movement": 8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 50,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 51,
            "movement": -5
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 72,
            "movement": 25
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 104,
            "movement": 35
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 107,
            "movement": -11
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 111,
            "movement": 9
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 120,
            "movement": 26
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 126,
            "movement": -52
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 152,
            "movement": 17
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 193,
            "movement": -16
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
            "position": 50,
            "movement": 5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 85,
            "movement": 19
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 125,
            "movement": -6
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
            "position": 27,
            "movement": -1
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
            "position": 164,
            "movement": -127
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
            "position": 15,
            "movement": 1
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
            "movement": 7
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/8b184fef895cad0601c7d3d8fedc215b/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "16",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 1,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 1,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 16,
            "movement": -5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 17,
            "movement": -9
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 18,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 34,
            "movement": -9
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 36,
            "movement": 10
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 40,
            "movement": -19
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 43,
            "movement": -7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 49,
            "movement": -10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 111,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 124,
            "movement": -66
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 142,
            "movement": -17
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 169,
            "movement": -38
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 172,
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
            "position": 5,
            "movement": -3
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
            "position": 36,
            "movement": -30
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/8b184fef895cad0601c7d3d8fedc215b/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "If You Like",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 5,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 21,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 25,
            "movement": 13
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 28,
            "movement": -9
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 67,
            "movement": 6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 72,
            "movement": -20
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 101,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 103,
            "movement": -15
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 126,
            "movement": 51
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 137,
            "movement": 45
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 143,
            "movement": 8
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 198,
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
            "position": 4,
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
            "position": 166,
            "movement": -127
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
            "position": 135,
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
            "position": 63,
            "movement": -59
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/dc76fde2737eec1c7bc8e4fb2e29e1b7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Online",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 6,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 26,
            "movement": -7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 46,
            "movement": 5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 49,
            "movement": -32
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 73,
            "movement": -10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 106,
            "movement": -31
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 114,
            "movement": -37
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 115,
            "movement": -17
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 167,
            "movement": -12
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GD",
            "name": "Grenada",
            "position": 42,
            "movement": -6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 170,
            "movement": -125
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
            "position": 2,
            "movement": -1
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
            "position": 31,
            "movement": -1
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
            "position": 28,
            "movement": 36
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
            "position": 22,
            "movement": -12
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d15ec9ac4c6efc3b30a9b12f86283099/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Shamaya",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 7,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 26,
            "movement": 31
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 34,
            "movement": -7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 53,
            "movement": 37
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 68,
            "movement": -6
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 79,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 102,
            "movement": 9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 113,
            "movement": 20
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
            "position": 8,
            "movement": -5
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
            "position": 65,
            "movement": 32
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/dc76fde2737eec1c7bc8e4fb2e29e1b7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "CAPTAIN",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 18,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 58,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 82,
            "movement": -42
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 131,
            "movement": -34
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 134,
            "movement": 44
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 165,
            "movement": 6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
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
            "position": 10,
            "movement": 0
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
            "position": 38,
            "movement": -7
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/47b72924cef36764e12e24f894bb0bd9/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Pidgin & English",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 36,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 43,
            "movement": -12
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 52,
            "movement": 12
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 60,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 73,
            "movement": 21
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 122,
            "movement": 42
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 128,
            "movement": -28
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 146,
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
            "position": 86,
            "movement": -13
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a8c088ce8f133901305e47938b4f981a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "The Game Needs Us - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 33,
            "movement": 4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 101,
            "movement": -22
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 194,
            "movement": -18
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 197,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 197,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Very Soon",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 48,
            "movement": -18
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 52,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 91,
            "movement": 37
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
            "position": 62,
            "movement": -13
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/47b72924cef36764e12e24f894bb0bd9/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "For Days",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 54,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 57,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 100,
            "movement": 35
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 178,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/99ab461acf3040d231c824f66893a811/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "POE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 87,
            "movement": 12
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 131,
            "movement": -3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 155,
            "movement": 45
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
            "position": 191,
            "movement": -40
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/12b39d25fb640779483f443dcbedf748/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Sincerely, Benson",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 29,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 57,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 130,
            "movement": 48
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
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a8c088ce8f133901305e47938b4f981a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "RnB",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 67,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 79,
            "movement": -15
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 154,
            "movement": -17
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 196,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/8b184fef895cad0601c7d3d8fedc215b/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Finesse",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 22,
            "movement": -6
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 31,
            "movement": -5
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
            "position": 61,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3cd08785ca6d2a471c70f774fc3e9b8c/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Laye Mi",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 105,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 178,
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
            "position": 188,
            "movement": 8
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/47b72924cef36764e12e24f894bb0bd9/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "WHO THIS",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 117,
            "movement": -10
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 191,
            "movement": -39
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/eae1950cf642fef40ae06c76d29dc1b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bad Since '97",
    "platforms": [
      {
        "platform": "Spotify Albums",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 94,
            "movement": 14
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 62,
            "movement": 2
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 8,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/332d8b3586d040e4d5ef670f3987dcfc/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Sorry I'm Late",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 131,
            "movement": -96
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 185,
            "movement": 5
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
            "position": 124,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/01e3a69fce9ce6cb0acf2e44f1be8280/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Deliberate Work",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 14,
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
            "position": 10,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/dc76fde2737eec1c7bc8e4fb2e29e1b7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "PRAY",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 135,
            "movement": -40
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 111,
            "movement": -37
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0ce9ce5b82ac7a394e54078a804577ac/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Jies",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 69,
            "movement": -3
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
    "cover": "https://cdn-images.dzcdn.net/images/cover/47b72924cef36764e12e24f894bb0bd9/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Outside",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 97,
            "movement": -6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 183,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/8b184fef895cad0601c7d3d8fedc215b/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bae Bae",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 135,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/332d8b3586d040e4d5ef670f3987dcfc/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "GWAGWALADA",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 121,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/7f89da381e2508e30a82f7dc2d18287f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Already",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 125,
            "movement": -41
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/aaf7372a5d512f3beb4dbebfcc391936/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Fi Kan We Kan",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 184,
            "movement": -29
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e4c2c39678f951dd57f09d2e98cd4062/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Emotional High",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 146,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/aaf7372a5d512f3beb4dbebfcc391936/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ilashe",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 190,
            "movement": -11
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/589173416a36ce1395e49b85c4e6a9f8/500x500-000000-80-0-0.jpg"
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
  