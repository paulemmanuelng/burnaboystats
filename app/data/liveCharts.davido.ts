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
  export const liveChartsUpdated = "2026-11-08";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-08T13:30Z";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","Spotify Albums","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "Nakupenda",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MW",
            "name": "Malawi",
            "position": 10,
            "movement": 36
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 15,
            "movement": 7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 16,
            "movement": 8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 22,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 24,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 25,
            "movement": 15
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 27,
            "movement": 6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 45,
            "movement": 27
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 61,
            "movement": 3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 63,
            "movement": -30
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 89,
            "movement": 48
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 94,
            "movement": 17
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 141,
            "movement": -14
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 147,
            "movement": 27
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 153,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 164,
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
            "country": "ZM",
            "name": "Zambia",
            "position": 82,
            "movement": 4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 107,
            "movement": -9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 161,
            "movement": -5
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 179,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 188,
            "movement": -7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 191,
            "movement": -6
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
            "country": "KE",
            "name": "Kenya",
            "position": 91,
            "movement": 8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 95,
            "movement": 4
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
            "position": 40,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/86051e2caa464c95b96cef12d3ae570a/500x500-000000-80-0-0.jpg"
  },
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
            "position": 2,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 3,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 4,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 6,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 12,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 22,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 22,
            "movement": 2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 23,
            "movement": 4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 35,
            "movement": -3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 38,
            "movement": 78
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 40,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 52,
            "movement": 16
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 59,
            "movement": 23
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 77,
            "movement": 15
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 142,
            "movement": -3
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 199,
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
            "position": 61,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 112,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 126,
            "movement": -1
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 186,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "YouTube",
        "numberOnes": 1,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 1,
            "movement": 1
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
            "position": 9,
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
            "position": 13,
            "movement": 8
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
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
            "position": 5,
            "movement": 2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 11,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 14,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 15,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 16,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 19,
            "movement": 11
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 28,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 33,
            "movement": 39
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 35,
            "movement": -12
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 50,
            "movement": 2
          },
          {
            "country": "LA",
            "name": "Laos",
            "position": 52,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 59,
            "movement": 18
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 61,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 64,
            "movement": 11
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 83,
            "movement": -24
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 102,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 125,
            "movement": 14
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 148,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 168,
            "movement": -24
          },
          {
            "country": "SR",
            "name": "Suriname",
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
            "position": 6,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
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
            "position": 17,
            "movement": 13
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 21,
            "movement": 2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 28,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 37,
            "movement": 3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 38,
            "movement": 77
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 39,
            "movement": -13
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 49,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 51,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 55,
            "movement": -16
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 59,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 67,
            "movement": 14
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 81,
            "movement": 84
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 89,
            "movement": -10
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 95,
            "movement": -16
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 100,
            "movement": 43
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 105,
            "movement": 17
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 129,
            "movement": -9
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 165,
            "movement": 6
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
            "position": 33,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
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
            "position": 19,
            "movement": 9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 64,
            "movement": -1
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 70,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 80,
            "movement": -3
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 81,
            "movement": 12
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 110,
            "movement": -14
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 120,
            "movement": -19
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 121,
            "movement": 35
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 135,
            "movement": -121
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 138,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 151,
            "movement": -34
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 163,
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
            "position": 114,
            "movement": 6
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
            "position": 54,
            "movement": -12
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
            "position": 21,
            "movement": -18
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
            "position": 20,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 38,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 61,
            "movement": -10
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 84,
            "movement": -25
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 86,
            "movement": -11
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 110,
            "movement": -16
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 125,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 142,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 147,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 137,
            "movement": -6
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 153,
            "movement": -31
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
            "position": 58,
            "movement": 7
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
            "position": 74,
            "movement": -61
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
            "position": 11,
            "movement": 73
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
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
            "position": 7,
            "movement": 9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 29,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 30,
            "movement": 62
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 32,
            "movement": 5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 35,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 36,
            "movement": 14
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 45,
            "movement": -8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 68,
            "movement": 7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 69,
            "movement": -4
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 88,
            "movement": 7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 131,
            "movement": -24
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 139,
            "movement": -30
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 143,
            "movement": -43
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 163,
            "movement": -36
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "PARTY",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 6,
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
            "country": "TD",
            "name": "Chad",
            "position": 1,
            "movement": 18
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 1,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 1,
            "movement": 3
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 1,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 5,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 19,
            "movement": 12
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 25,
            "movement": 8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 114,
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
            "position": 82,
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
            "position": 22,
            "movement": -8
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
            "position": 12,
            "movement": 40
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
            "country": "TZ",
            "name": "Tanzania",
            "position": 79,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 82,
            "movement": 59
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 85,
            "movement": -50
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 92,
            "movement": 0
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 101,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 128,
            "movement": 52
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 151,
            "movement": 17
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 159,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 165,
            "movement": -12
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 169,
            "movement": -41
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 184,
            "movement": -9
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
            "position": 85,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b9fd1fc1b331838b6b0ba9b2eacbf31e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "I Know Who I Be",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 31,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 34,
            "movement": -7
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 41,
            "movement": -22
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 101,
            "movement": 9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 108,
            "movement": 85
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 111,
            "movement": 47
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 112,
            "movement": 11
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 116,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 132,
            "movement": -48
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 155,
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
            "position": 46,
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
            "position": 40,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9eb91a56d2af511c4024d6eb0ee97f60/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "With You",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 65,
            "movement": 18
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 92,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 140,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 150,
            "movement": -17
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 157,
            "movement": -69
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 174,
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
            "position": 129,
            "movement": -5
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
            "movement": -10
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
            "position": 151,
            "movement": 5
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
            "position": 64,
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
            "country": "CM",
            "name": "Cameroon",
            "position": 16,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/08304eb172098540c635de98530d4929/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Holy Ground",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 32,
            "movement": 11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 34,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 35,
            "movement": -6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 51,
            "movement": -8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 88,
            "movement": 4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 100,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 125,
            "movement": 8
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 150,
            "movement": -90
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 153,
            "movement": -18
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 174,
            "movement": 5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 185,
            "movement": 7
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Fall",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 49,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 100,
            "movement": 23
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 104,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 106,
            "movement": -21
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 153,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 181,
            "movement": -27
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
            "position": 19,
            "movement": 1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 21,
            "movement": -4
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 66,
            "movement": -6
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 85,
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
            "position": 57,
            "movement": 17
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
            "position": 73,
            "movement": -32
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 95,
            "movement": 32
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 113,
            "movement": 24
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 121,
            "movement": 0
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 146,
            "movement": 15
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 194,
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
            "position": 55,
            "movement": 6
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
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 91,
            "movement": 13
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 98,
            "movement": 32
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 125,
            "movement": 31
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 144,
            "movement": -81
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 147,
            "movement": -28
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 177,
            "movement": -39
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
            "movement": -13
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "D & G",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 44,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 47,
            "movement": 35
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 50,
            "movement": 8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 71,
            "movement": 15
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 152,
            "movement": -22
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 177,
            "movement": -16
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b9fd1fc1b331838b6b0ba9b2eacbf31e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Sensational",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DM",
            "name": "Dominica",
            "position": 79,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 103,
            "movement": 21
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 133,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 146,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 165,
            "movement": 12
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 193,
            "movement": -38
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
            "position": 147,
            "movement": -10
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e8b1b523f139f23bac60bc70528f386a/500x500-000000-80-0-0.jpg"
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
            "position": 16,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 59,
            "movement": 17
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 150,
            "movement": -52
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 159,
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
            "position": 39,
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
            "position": 107,
            "movement": 6
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3772d04a24caee42fd8a775d36258848/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "NO COMPETITION",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 69,
            "movement": -5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 78,
            "movement": 6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 93,
            "movement": 21
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 123,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 152,
            "movement": -5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 197,
            "movement": -9
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
            "country": "BW",
            "name": "Botswana",
            "position": 17,
            "movement": -3
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 17,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 26,
            "movement": -1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 69,
            "movement": -6
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 74,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 77,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/7de07d81ce22dcf5be4caa2b2b9faace/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Blow My Mind",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 49,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 105,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 138,
            "movement": -46
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 142,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 151,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 174,
            "movement": 7
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b38babe761ad3914bfd843b8c199555/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "FIA",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 11,
            "movement": -8
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 25,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 39,
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
            "position": 77,
            "movement": null,
            "status": "new"
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
            "country": "NG",
            "name": "Nigeria",
            "position": 76,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 134,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 141,
            "movement": -14
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/594be4990d2be6af325a4a0825960a9a/500x500-000000-80-0-0.jpg"
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
            "position": 92,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 100,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Funds",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 169,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 172,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-06",
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
            "position": 15,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-05",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "FEEL",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 57,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-07",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
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
            "position": 60,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "All over You",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 55,
            "movement": -9
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-31",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6339d7ca1f42b21412813125ef683020/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Fade",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 21,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-27",
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
            "position": 50,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d50e6c1e1ff65a58b2ae4051876d7e7e/500x500-000000-80-0-0.jpg"
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
            "position": 124,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-07",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a880bf2aaa27d39c446bd9b19effd22e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Naughty",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 135,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-07",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6b6509ccfe33e5d2816bfe958d62a1a2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Gimme Dat Ting",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 160,
            "movement": 6
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-06",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "High",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 166,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-07",
    "cover": "https://cdn-images.dzcdn.net/images/cover/08304eb172098540c635de98530d4929/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Nakupenda - I Love You",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 43,
            "movement": -27
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-07",
    "cover": "https://cdn-images.dzcdn.net/images/cover/86051e2caa464c95b96cef12d3ae570a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Risky",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 191,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-27",
    "cover": "https://cdn-images.dzcdn.net/images/cover/da0c3e984d1fa2b9c54158ee1a02fbd1/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "La La",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 192,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Activate",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 171,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1d5dfc880396e953e316456a394d7353/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Father",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 177,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-03",
    "cover": "https://cdn-images.dzcdn.net/images/cover/132d4358890f5675bd291681812647e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Omo Baba Olowo: The Genesis",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 188,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-11-07",
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
  