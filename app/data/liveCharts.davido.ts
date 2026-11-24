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
  export const liveChartsUpdated = "2026-11-24";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-24T22:30Z";
  
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
            "country": "LR",
            "name": "Liberia",
            "position": 6,
            "movement": 4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 6,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 13,
            "movement": 10
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 28,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 34,
            "movement": -7
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 38,
            "movement": -15
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 43,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 49,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 64,
            "movement": -21
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 69,
            "movement": 9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 138,
            "movement": -6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 158,
            "movement": -39
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 181,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 189,
            "movement": -25
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 192,
            "movement": -84
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 59,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 64,
            "movement": -8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 97,
            "movement": 1
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 100,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 150,
            "movement": 5
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 168,
            "movement": -9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 172,
            "movement": 5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 188,
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
            "position": 58,
            "movement": -7
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
            "position": 89,
            "movement": -9
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/86051e2caa464c95b96cef12d3ae570a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Oriadé",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 10,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 12,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 14,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 19,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 25,
            "movement": -4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 26,
            "movement": -9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 36,
            "movement": -14
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 44,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 65,
            "movement": 13
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 67,
            "movement": 10
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 69,
            "movement": -26
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 73,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 92,
            "movement": -17
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 113,
            "movement": 41
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 119,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 130,
            "movement": -34
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 143,
            "movement": 33
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 151,
            "movement": -58
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 151,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 189,
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
            "position": 6,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 7,
            "movement": 4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 9,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 11,
            "movement": -3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 26,
            "movement": 8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 36,
            "movement": -7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 40,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 44,
            "movement": -9
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 56,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 65,
            "movement": -23
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 68,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 93,
            "movement": -31
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 94,
            "movement": -14
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
            "position": 56,
            "movement": -8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 146,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 178,
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
            "position": 13,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
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
            "country": "TZ",
            "name": "Tanzania",
            "position": 21,
            "movement": 7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 25,
            "movement": -5
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 32,
            "movement": 68
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 39,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 45,
            "movement": -11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 56,
            "movement": -3
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 58,
            "movement": -8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 60,
            "movement": 5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 94,
            "movement": 20
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 98,
            "movement": -22
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 102,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 103,
            "movement": -10
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 106,
            "movement": -6
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 125,
            "movement": -54
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 131,
            "movement": -31
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 133,
            "movement": -15
          },
          {
            "country": "SC",
            "name": "Seychelles",
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
    "title": "UNAVAILABLE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 23,
            "movement": 26
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 24,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 44,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 49,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 57,
            "movement": 7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 64,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 74,
            "movement": -30
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 79,
            "movement": -3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 88,
            "movement": -27
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 119,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 132,
            "movement": 23
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 134,
            "movement": -29
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 138,
            "movement": 35
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
            "position": 86,
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
            "position": 2,
            "movement": 2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 12,
            "movement": 2
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 17,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 37,
            "movement": 13
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 101,
            "movement": 3
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
            "position": 7,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 30,
            "movement": 4
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 43,
            "movement": 13
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 67,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 125,
            "movement": 17
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-06",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4285de11c037b6bce20faa82338358ed/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Already Falling",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 62,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 63,
            "movement": -22
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 92,
            "movement": 15
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 93,
            "movement": -10
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 111,
            "movement": 4
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 122,
            "movement": 46
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 158,
            "movement": 24
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 167,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 189,
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
            "position": 106,
            "movement": 1
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
            "position": 179,
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
            "position": 21,
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
    "title": "I Know Who I Be",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 19,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 32,
            "movement": -10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 48,
            "movement": -9
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 92,
            "movement": 3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 116,
            "movement": 74
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 143,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 143,
            "movement": 8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 151,
            "movement": -7
          },
          {
            "country": "CM",
            "name": "Cameroon",
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
            "position": 98,
            "movement": -10
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
            "position": 20,
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
            "position": 20,
            "movement": -9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 28,
            "movement": 10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 44,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 48,
            "movement": 6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 89,
            "movement": 6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 112,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 134,
            "movement": 43
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 135,
            "movement": 61
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 139,
            "movement": 4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 152,
            "movement": -28
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 169,
            "movement": -9
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 194,
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
    "title": "Fall",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 44,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 68,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 68,
            "movement": 41
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 88,
            "movement": 10
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 113,
            "movement": -8
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 167,
            "movement": -91
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
            "position": 14,
            "movement": -3
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 35,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 58,
            "movement": 15
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 80,
            "movement": 11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 182,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6f5e2eeac47abb6bf1bcc293125e0016/500x500-000000-80-0-0.jpg"
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
            "position": 43,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 110,
            "movement": -10
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 110,
            "movement": -1
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 147,
            "movement": -58
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 149,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 181,
            "movement": -39
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 189,
            "movement": -56
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 198,
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
            "position": 199,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
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
            "position": 70,
            "movement": 119
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 74,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 92,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 117,
            "movement": 13
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
            "position": 62,
            "movement": -18
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 109,
            "movement": -88
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
            "position": 142,
            "movement": -19
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
            "position": 171,
            "movement": -15
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
    "title": "KANTE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 37,
            "movement": -6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 76,
            "movement": 21
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 91,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 136,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 143,
            "movement": 6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 149,
            "movement": 45
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 169,
            "movement": -59
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
            "position": 105,
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
    "title": "5ive",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 10,
            "movement": -9
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 60,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 121,
            "movement": -6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 121,
            "movement": 17
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 126,
            "movement": -88
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 143,
            "movement": -79
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 196,
            "movement": -17
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
    "title": "A Good Time",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 86,
            "movement": -19
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 98,
            "movement": 3
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 106,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 120,
            "movement": 30
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 121,
            "movement": -20
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 148,
            "movement": 11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 192,
            "movement": -29
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 195,
            "movement": -21
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
    "title": "D & G",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 21,
            "movement": 32
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 50,
            "movement": -10
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 65,
            "movement": 68
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 88,
            "movement": 2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 128,
            "movement": -13
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 135,
            "movement": 33
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 146,
            "movement": 42
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b9fd1fc1b331838b6b0ba9b2eacbf31e/500x500-000000-80-0-0.jpg"
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
            "position": 12,
            "movement": -3
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 26,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 29,
            "movement": -3
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 61,
            "movement": 15
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 66,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 171,
            "movement": 1
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 53,
            "movement": null,
            "status": "new"
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
            "position": 28,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 126,
            "movement": -20
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 169,
            "movement": -12
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 171,
            "movement": -82
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
            "position": 56,
            "movement": -8
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
            "position": 93,
            "movement": -4
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
            "position": 76,
            "movement": -15
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 78,
            "movement": 78
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 109,
            "movement": -43
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 151,
            "movement": 37
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 174,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
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
            "position": 55,
            "movement": 33
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 66,
            "movement": 17
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 117,
            "movement": -9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 119,
            "movement": 11
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
            "country": "GM",
            "name": "Gambia",
            "position": 23,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 36,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 176,
            "movement": 0
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
            "position": 138,
            "movement": 54
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/61fc2faba453737555d0b81de1e20c6a/500x500-000000-80-0-0.jpg"
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
            "position": 54,
            "movement": 13
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 103,
            "movement": -27
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 140,
            "movement": -9
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 178,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e8b1b523f139f23bac60bc70528f386a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Assurance",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 43,
            "movement": -10
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 168,
            "movement": -7
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-07",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a880bf2aaa27d39c446bd9b19effd22e/500x500-000000-80-0-0.jpg"
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
            "position": 94,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 119,
            "movement": 78
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
            "position": 177,
            "movement": 1
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
            "position": 75,
            "movement": -10
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-07",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ogechi",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 161,
            "movement": 2
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
            "position": 150,
            "movement": -30
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-12",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d1cb8dda2d94d5ce2aa912b162eedfe0/500x500-000000-80-0-0.jpg"
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
            "position": 8,
            "movement": 51
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-19",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
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
            "position": 80,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Offa Me",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 102,
            "movement": -21
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-23",
    "cover": "https://cdn-images.dzcdn.net/images/cover/08304eb172098540c635de98530d4929/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Aye",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 103,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-24",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9119c622011c2f9e2c0fd2ae9bcaec51/500x500-000000-80-0-0.jpg"
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
            "position": 115,
            "movement": 1
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
            "position": 53,
            "movement": -3
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
    "title": "Tell Everybody",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 144,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-24",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Skelewu",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 78,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-21",
    "cover": "https://cdn-images.dzcdn.net/images/cover/23726f80ac87dcce3846c3b638cba30d/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Hmmm",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 99,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-23",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b9fd1fc1b331838b6b0ba9b2eacbf31e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Risky",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 96,
            "movement": -85
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-22",
    "cover": "https://cdn-images.dzcdn.net/images/cover/da0c3e984d1fa2b9c54158ee1a02fbd1/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Funds",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 180,
            "movement": -57
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-23",
    "cover": "https://cdn-images.dzcdn.net/images/cover/28cbbe0064bd5b7494523e75b6ebeb95/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "High",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 187,
            "movement": -87
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
            "position": 195,
            "movement": -40
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-15",
    "cover": "https://cdn-images.dzcdn.net/images/cover/603c1798522c1b9fae27290d2e877f3f/500x500-000000-80-0-0.jpg"
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
            "position": 176,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-21",
    "cover": "https://cdn-images.dzcdn.net/images/cover/329ae36eecf839ca2e82a46203a10cbc/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bahd Baddo Baddest",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 129,
            "movement": -85
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-23",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0c0d1ba509c2a896097f11edcc957edf/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Omo Baba Olowo: The Genesis",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 18,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-11-24",
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
            "position": 47,
            "movement": -4
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
  