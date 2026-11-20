// GENERATED FILE — do not edit by hand.
  // Rebuilt several times a day by scripts/build-live-charts.mjs --artist=davido from kworb's artist page.
  //
  // PLATFORM chart data for Davido: where each release is sitting RIGHT
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
  export const liveChartsUpdated = "2026-11-20";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-20T20:26Z";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","Spotify Albums","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "B4 B4",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 3,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 6,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 7,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 12,
            "movement": -7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 13,
            "movement": 2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 25,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 34,
            "movement": -5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 35,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 38,
            "movement": -7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 55,
            "movement": 7
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 66,
            "movement": -25
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 71,
            "movement": 4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 84,
            "movement": -23
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 140,
            "movement": null,
            "status": "new"
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
            "position": 182,
            "movement": -105
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 188,
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
            "position": 44,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 137,
            "movement": -10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 154,
            "movement": -5
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 172,
            "movement": -21
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
            "position": 2,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 11,
            "movement": -4
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
            "position": 12,
            "movement": -2
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
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 28,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Nakupenda",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 14,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 20,
            "movement": 4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 24,
            "movement": -4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 26,
            "movement": 19
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 28,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 34,
            "movement": -20
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 39,
            "movement": -16
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 43,
            "movement": 27
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 51,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 104,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 138,
            "movement": -18
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 144,
            "movement": -39
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 145,
            "movement": 3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 166,
            "movement": 6
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 186,
            "movement": -4
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
            "position": 45,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 83,
            "movement": -17
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 92,
            "movement": -10
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 97,
            "movement": -18
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 137,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 157,
            "movement": -12
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 190,
            "movement": -10
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
            "position": 19,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 62,
            "movement": 0
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
            "movement": -11
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
            "position": 48,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/86051e2caa464c95b96cef12d3ae570a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Timeless",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 19,
            "movement": 9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 24,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 25,
            "movement": 3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 28,
            "movement": -18
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 42,
            "movement": -7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 45,
            "movement": -17
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 51,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 65,
            "movement": 37
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 68,
            "movement": 86
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 84,
            "movement": -4
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 87,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 91,
            "movement": 20
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 108,
            "movement": -20
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 113,
            "movement": -20
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 125,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 140,
            "movement": 34
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 156,
            "movement": -77
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 169,
            "movement": -96
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 200,
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
            "position": 31,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Oriadé",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 7,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 9,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 9,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 15,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 17,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 32,
            "movement": -8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 33,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 39,
            "movement": 6
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 46,
            "movement": -14
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 57,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 62,
            "movement": -10
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 80,
            "movement": -9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 83,
            "movement": -5
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 90,
            "movement": 6
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 100,
            "movement": -21
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 145,
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
            "position": 9,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "PARTY",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 3,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 1,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 1,
            "movement": 0
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 1,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 3,
            "movement": -1
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 11,
            "movement": 1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 16,
            "movement": 11
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 47,
            "movement": -5
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 132,
            "movement": -14
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 139,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 152,
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
            "position": 8,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 53,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 55,
            "movement": 7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 83,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 199,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-06",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4285de11c037b6bce20faa82338358ed/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "A Good Time",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 51,
            "movement": 130
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 91,
            "movement": -22
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 109,
            "movement": 28
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 119,
            "movement": -15
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 133,
            "movement": -57
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 135,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 167,
            "movement": -72
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 173,
            "movement": 6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 174,
            "movement": -57
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 177,
            "movement": 5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 178,
            "movement": -18
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 192,
            "movement": 2
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
        "platform": "Spotify Albums",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 88,
            "movement": 5
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b9fd1fc1b331838b6b0ba9b2eacbf31e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "UNAVAILABLE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 24,
            "movement": 14
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 32,
            "movement": 8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 40,
            "movement": 22
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 51,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 53,
            "movement": -12
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 62,
            "movement": -18
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 83,
            "movement": 4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 84,
            "movement": 4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 84,
            "movement": -27
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 111,
            "movement": -7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 121,
            "movement": 21
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 171,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Already Falling",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 38,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 39,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 51,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 59,
            "movement": -23
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 82,
            "movement": 105
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 117,
            "movement": 17
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 152,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 170,
            "movement": -28
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
            "position": 171,
            "movement": -17
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 179,
            "movement": -94
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
            "position": 120,
            "movement": -13
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
            "position": 90,
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
            "position": 17,
            "movement": -9
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "With You",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 73,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 82,
            "movement": -5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 85,
            "movement": 10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 187,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 193,
            "movement": -34
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
            "position": 90,
            "movement": -80
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 187,
            "movement": -5
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 174,
            "movement": -24
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 191,
            "movement": -17
          }
        ]
      },
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 16,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 95,
            "movement": null,
            "status": "re"
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
            "position": 113,
            "movement": 5
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 75,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/08304eb172098540c635de98530d4929/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "I Know Who I Be",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 25,
            "movement": -5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 27,
            "movement": 6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 50,
            "movement": -24
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 135,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 139,
            "movement": -8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 139,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 148,
            "movement": -19
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 176,
            "movement": -72
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
            "position": 89,
            "movement": -5
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
            "position": 48,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9eb91a56d2af511c4024d6eb0ee97f60/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Holy Ground",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 16,
            "movement": 16
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 43,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 48,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 52,
            "movement": -14
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 94,
            "movement": 5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 100,
            "movement": -57
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 124,
            "movement": -23
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 155,
            "movement": -19
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 161,
            "movement": -60
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 184,
            "movement": -44
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "KANTE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 23,
            "movement": 27
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 79,
            "movement": -7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 90,
            "movement": -11
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 126,
            "movement": 60
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 129,
            "movement": -12
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 157,
            "movement": -5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 181,
            "movement": -76
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 197,
            "movement": -17
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
            "position": 107,
            "movement": -4
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
            "position": 64,
            "movement": 5
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "D & G",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MW",
            "name": "Malawi",
            "position": 33,
            "movement": 24
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 45,
            "movement": -7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 46,
            "movement": -17
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 93,
            "movement": 47
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 98,
            "movement": -9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 171,
            "movement": -27
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 178,
            "movement": -16
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 180,
            "movement": -21
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b9fd1fc1b331838b6b0ba9b2eacbf31e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Blow My Mind",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 79,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 81,
            "movement": -18
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 106,
            "movement": 27
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 129,
            "movement": -14
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 147,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 168,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 194,
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
            "position": 19,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b38babe761ad3914bfd843b8c199555/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Fall",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 11,
            "movement": 2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 43,
            "movement": 6
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 60,
            "movement": -1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 85,
            "movement": -22
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 194,
            "movement": -4
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 72,
            "movement": -15
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 101,
            "movement": -12
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 187,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6f5e2eeac47abb6bf1bcc293125e0016/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "5ive",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 36,
            "movement": 99
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 65,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 123,
            "movement": -24
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 148,
            "movement": -12
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 183,
            "movement": -22
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 195,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 200,
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
            "position": 58,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/08304eb172098540c635de98530d4929/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "A Better Time",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 46,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 95,
            "movement": 6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 112,
            "movement": 19
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 125,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 131,
            "movement": -14
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 167,
            "movement": -14
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
            "position": 113,
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
            "position": 200,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "NO COMPETITION",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 60,
            "movement": 18
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 84,
            "movement": -14
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 90,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 99,
            "movement": 43
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 107,
            "movement": -76
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 173,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 183,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "If",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 9,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 28,
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 29,
            "movement": 6
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 63,
            "movement": -1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 71,
            "movement": -23
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 181,
            "movement": -2
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
            "position": 101,
            "movement": -16
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/7de07d81ce22dcf5be4caa2b2b9faace/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "2am in toronto",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 37,
            "movement": -13
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 76,
            "movement": -9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 161,
            "movement": -43
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 194,
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
            "position": 52,
            "movement": -7
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
            "position": 90,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3772d04a24caee42fd8a775d36258848/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Sensational",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 68,
            "movement": -16
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 72,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 73,
            "movement": 119
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 137,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 180,
            "movement": -13
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e8b1b523f139f23bac60bc70528f386a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ogechi",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 41,
            "movement": -38
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 86,
            "movement": -72
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 118,
            "movement": -83
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 174,
            "movement": -101
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 155,
            "movement": -41
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-12",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d1cb8dda2d94d5ce2aa912b162eedfe0/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "FIA",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 23,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 42,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 189,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/61fc2faba453737555d0b81de1e20c6a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Champion Sound",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 71,
            "movement": 47
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 93,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/594be4990d2be6af325a4a0825960a9a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "FEEL",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TZ",
            "name": "Tanzania",
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
            "country": "UG",
            "name": "Uganda",
            "position": 46,
            "movement": -9
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-07",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Aye",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 186,
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
            "position": 124,
            "movement": 8
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-12",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9119c622011c2f9e2c0fd2ae9bcaec51/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Funds",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 15,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/28cbbe0064bd5b7494523e75b6ebeb95/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Para",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 16,
            "movement": 69
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-19",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Gobe",
    "platforms": [
      {
        "platform": "iTunes",
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
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d7997ace25abd1a5cf1a8ae8d541a52a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Gbagbe Oshi",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 28,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/50d12a3358fb88c810b8c9231ced0cd6/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "1 Milli",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 29,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b9fd1fc1b331838b6b0ba9b2eacbf31e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Maserati",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 4,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1713aad5a0a697ac1db7ce7b8a167c27/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "OVER DEM",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 111,
            "movement": -33
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Shopping Spree",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 43,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "The Best",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 123,
            "movement": -15
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Like",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 52,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d50e6c1e1ff65a58b2ae4051876d7e7e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Jowo",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 67,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-09",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "High",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 146,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/08304eb172098540c635de98530d4929/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Tchelete",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 116,
            "movement": -9
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-15",
    "cover": "https://cdn-images.dzcdn.net/images/cover/603c1798522c1b9fae27290d2e877f3f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Assurance",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MW",
            "name": "Malawi",
            "position": 154,
            "movement": -23
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-07",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a880bf2aaa27d39c446bd9b19effd22e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Dada",
    "platforms": [
      {
        "platform": "iTunes",
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
    "firstSeen": "2026-11-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "On The Road",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 93,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Spend Dat",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 50,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/eeedaecd7be328ebce48a16701042891/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Dami Duro",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 181,
            "movement": -21
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-16",
    "cover": "https://cdn-images.dzcdn.net/images/cover/798485d74c5c9cd451070cd502092ea6/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Omo Baba Olowo: The Genesis",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 167,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-11-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/798485d74c5c9cd451070cd502092ea6/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Son of Mercy - EP",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 43,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/50d12a3358fb88c810b8c9231ced0cd6/500x500-000000-80-0-0.jpg"
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
  