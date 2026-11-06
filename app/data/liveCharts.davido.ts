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
  export const liveChartsUpdated = "2026-11-06";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-06T19:29Z";
  
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 22,
            "movement": 11
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 24,
            "movement": 15
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 26,
            "movement": 23
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 35,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 40,
            "movement": 6
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 43,
            "movement": -4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 46,
            "movement": -13
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 72,
            "movement": 17
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 125,
            "movement": 1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 127,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 135,
            "movement": -48
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 146,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 177,
            "movement": 22
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
            "position": 80,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 99,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 139,
            "movement": 11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 166,
            "movement": -11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 178,
            "movement": 8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 186,
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
            "position": 41,
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
            "position": 94,
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
            "position": 38,
            "movement": 32
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
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 3,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 7,
            "movement": 3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 8,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 13,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 23,
            "movement": 7
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 26,
            "movement": 9
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 30,
            "movement": -7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 32,
            "movement": 24
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 40,
            "movement": 4
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 42,
            "movement": -7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 57,
            "movement": -6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 68,
            "movement": 45
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 92,
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
            "position": 64,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 107,
            "movement": -7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 128,
            "movement": -6
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 197,
            "movement": 2
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
            "position": 7,
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
            "position": 12,
            "movement": 51
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
            "position": 66,
            "movement": -48
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
            "position": 7,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 12,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 13,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 14,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 17,
            "movement": 5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 23,
            "movement": 37
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 26,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 30,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 56,
            "movement": -35
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 59,
            "movement": -17
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 64,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 70,
            "movement": -22
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 72,
            "movement": -37
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 77,
            "movement": -31
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 139,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 144,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 200,
            "movement": -22
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
            "movement": 1
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
            "country": "GM",
            "name": "Gambia",
            "position": 22,
            "movement": 76
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 23,
            "movement": 14
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 27,
            "movement": 7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 30,
            "movement": 43
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 39,
            "movement": 45
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 40,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 48,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 56,
            "movement": -11
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 79,
            "movement": -20
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 79,
            "movement": 25
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 81,
            "movement": -18
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 84,
            "movement": -15
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 115,
            "movement": -26
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 122,
            "movement": -2
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 143,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 188,
            "movement": -50
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
            "country": "GM",
            "name": "Gambia",
            "position": 17,
            "movement": 28
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 30,
            "movement": -9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 32,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 37,
            "movement": 10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 44,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 50,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 65,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 68,
            "movement": 21
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 75,
            "movement": -8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 89,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 92,
            "movement": -11
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 100,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 121,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 185,
            "movement": -71
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
            "movement": 9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 39,
            "movement": -15
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 51,
            "movement": 15
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 59,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 75,
            "movement": 37
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 120,
            "movement": 8
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 125,
            "movement": -10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 146,
            "movement": 14
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
            "position": 98,
            "movement": -21
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 111,
            "movement": -20
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 183,
            "movement": -18
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
            "position": 68,
            "movement": 26
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
    "title": "KANTE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 38,
            "movement": 12
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 67,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 77,
            "movement": 45
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 92,
            "movement": 20
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 96,
            "movement": 30
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 101,
            "movement": 31
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 117,
            "movement": 53
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 149,
            "movement": -18
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 156,
            "movement": -28
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 159,
            "movement": -8
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
            "position": 128,
            "movement": -13
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
            "position": 28,
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
            "country": "SN",
            "name": "Senegal",
            "position": 14,
            "movement": 51
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
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
            "position": 29,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 33,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 43,
            "movement": 50
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 43,
            "movement": -14
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 51,
            "movement": -5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 92,
            "movement": -11
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 100,
            "movement": 25
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 110,
            "movement": -10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 115,
            "movement": 24
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 133,
            "movement": 11
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 135,
            "movement": 33
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
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
            "position": 35,
            "movement": 101
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 64,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 78,
            "movement": 11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 92,
            "movement": -7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 128,
            "movement": 22
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 141,
            "movement": -35
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 153,
            "movement": 7
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 153,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 168,
            "movement": -28
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 173,
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
            "position": 86,
            "movement": 7
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
            "country": "LR",
            "name": "Liberia",
            "position": 27,
            "movement": 22
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 28,
            "movement": -8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 35,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 123,
            "movement": 26
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 125,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 129,
            "movement": -51
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 158,
            "movement": 38
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
            "position": 42,
            "movement": 26
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
            "position": 91,
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
            "movement": 28
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 85,
            "movement": 31
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 123,
            "movement": -8
          },
          {
            "country": "ML",
            "name": "Mali",
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
            "country": "BW",
            "name": "Botswana",
            "position": 6,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 24,
            "movement": 5
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 51,
            "movement": 4
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 56,
            "movement": -3
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
            "position": 100,
            "movement": 53
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
    "cover": "https://cdn-images.dzcdn.net/images/cover/6f5e2eeac47abb6bf1bcc293125e0016/500x500-000000-80-0-0.jpg"
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
            "position": 83,
            "movement": 10
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 88,
            "movement": 34
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 92,
            "movement": 25
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 184,
            "movement": -96
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 192,
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
            "position": 131,
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
            "position": 115,
            "movement": -53
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
            "position": 164,
            "movement": 14
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
            "position": 87,
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
    "title": "Blow My Mind",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 52,
            "movement": 11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 92,
            "movement": -12
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 102,
            "movement": 44
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 130,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 133,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 144,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 178,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 181,
            "movement": -24
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b38babe761ad3914bfd843b8c199555/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "NO COMPETITION",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 84,
            "movement": 7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 84,
            "movement": -16
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 119,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 147,
            "movement": -6
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 165,
            "movement": -24
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 185,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 189,
            "movement": -63
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
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
            "position": 47,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 63,
            "movement": 78
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 104,
            "movement": -12
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 115,
            "movement": -16
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 119,
            "movement": 37
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 138,
            "movement": 56
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 156,
            "movement": 1
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
            "position": 118,
            "movement": 10
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
            "position": 37,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 58,
            "movement": -19
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 82,
            "movement": -11
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 86,
            "movement": 20
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 112,
            "movement": -10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 129,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 130,
            "movement": 45
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
            "country": "BW",
            "name": "Botswana",
            "position": 3,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 22,
            "movement": 5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 26,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 44,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 59,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 69,
            "movement": -2
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
            "position": 76,
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
    "title": "5ive",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 41,
            "movement": 126
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 73,
            "movement": 56
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 121,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 137,
            "movement": -17
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 161,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 197,
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
            "position": 61,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/08304eb172098540c635de98530d4929/500x500-000000-80-0-0.jpg"
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
            "position": 17,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 72,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 76,
            "movement": -9
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 98,
            "movement": -25
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
            "position": 35,
            "movement": 27
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
            "position": 129,
            "movement": 22
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 106,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 134,
            "movement": 25
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 141,
            "movement": -50
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 153,
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
            "position": 120,
            "movement": -52
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e8b1b523f139f23bac60bc70528f386a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "PARTY",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 1,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 1,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 8,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 19,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 33,
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
    "title": "FIA",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 1,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 1,
            "movement": 57
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 12,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 42,
            "movement": 0
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
            "position": 72,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 127,
            "movement": 45
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/594be4990d2be6af325a4a0825960a9a/500x500-000000-80-0-0.jpg"
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
            "position": 134,
            "movement": -10
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-27",
    "cover": "https://cdn-images.dzcdn.net/images/cover/da0c3e984d1fa2b9c54158ee1a02fbd1/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Jowo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 193,
            "movement": 6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 196,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-05",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
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
            "position": 10,
            "movement": -9
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-05",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
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
            "position": 42,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-31",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6339d7ca1f42b21412813125ef683020/500x500-000000-80-0-0.jpg"
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
            "position": 79,
            "movement": -19
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Hope In You",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 14,
            "movement": 56
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-06",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5fe158cfee002ea68dd734127252fada/500x500-000000-80-0-0.jpg"
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
            "position": 16,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-27",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "FEEL",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 87,
            "movement": 94
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-04",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
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
            "position": 97,
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
    "title": "Funds",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 121,
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
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d50e6c1e1ff65a58b2ae4051876d7e7e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Aye",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 163,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-06",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9119c622011c2f9e2c0fd2ae9bcaec51/500x500-000000-80-0-0.jpg"
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
            "position": 166,
            "movement": null,
            "status": "new"
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
            "country": "GM",
            "name": "Gambia",
            "position": 171,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-05",
    "cover": "https://cdn-images.dzcdn.net/images/cover/08304eb172098540c635de98530d4929/500x500-000000-80-0-0.jpg"
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
            "position": 180,
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
    "title": "BOP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 186,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-05",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Spend Dat",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 76,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-06",
    "cover": "https://cdn-images.dzcdn.net/images/cover/eeedaecd7be328ebce48a16701042891/500x500-000000-80-0-0.jpg"
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
            "position": 169,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-03",
    "cover": "https://cdn-images.dzcdn.net/images/cover/132d4358890f5675bd291681812647e5/500x500-000000-80-0-0.jpg"
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
            "position": 173,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1d5dfc880396e953e316456a394d7353/500x500-000000-80-0-0.jpg"
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
            "position": 44,
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
  