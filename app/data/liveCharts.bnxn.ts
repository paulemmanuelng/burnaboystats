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
  export const liveChartsUpdated = "2026-11-11";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-11T19:40Z";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","Spotify Albums","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
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
            "position": 6,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 11,
            "movement": 11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 12,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 25,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 28,
            "movement": -10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 38,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 57,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 71,
            "movement": -19
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 74,
            "movement": -61
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 75,
            "movement": -15
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 79,
            "movement": -15
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 84,
            "movement": -25
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 97,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 143,
            "movement": -4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 193,
            "movement": -60
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
            "position": 71,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 132,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 194,
            "movement": -3
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
            "position": 60,
            "movement": -23
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
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/8b184fef895cad0601c7d3d8fedc215b/500x500-000000-80-0-0.jpg"
  },
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
            "position": 3,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 9,
            "movement": -6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 10,
            "movement": 5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 12,
            "movement": -3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 24,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 29,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 50,
            "movement": 10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 52,
            "movement": -5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 55,
            "movement": 22
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 75,
            "movement": -48
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 81,
            "movement": -27
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 86,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 88,
            "movement": 22
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 102,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 106,
            "movement": 92
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 128,
            "movement": 20
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 135,
            "movement": -5
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 152,
            "movement": 13
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
            "position": 33,
            "movement": -15
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/dc76fde2737eec1c7bc8e4fb2e29e1b7/500x500-000000-80-0-0.jpg"
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
            "position": 6,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 8,
            "movement": 4
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 15,
            "movement": 11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 27,
            "movement": -12
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 32,
            "movement": -6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 44,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 56,
            "movement": 4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 57,
            "movement": 28
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 84,
            "movement": -6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 101,
            "movement": 4
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 119,
            "movement": -62
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 134,
            "movement": 17
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 150,
            "movement": -53
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 180,
            "movement": -26
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 196,
            "movement": -46
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
            "position": 30,
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
            "position": 32,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/065baff6ae2b9caecf19bb6aa423644a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "If You Like",
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
            "position": 2,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 6,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 32,
            "movement": -19
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 61,
            "movement": 35
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 62,
            "movement": 7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 70,
            "movement": 24
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 73,
            "movement": -7
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 82,
            "movement": 64
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 90,
            "movement": 8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 129,
            "movement": 23
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
            "position": 5,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 189,
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
            "position": 2,
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
            "position": 191,
            "movement": -112
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
            "position": 11,
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
            "position": 23,
            "movement": 10
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/dc76fde2737eec1c7bc8e4fb2e29e1b7/500x500-000000-80-0-0.jpg"
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
            "position": 23,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 58,
            "movement": 12
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 61,
            "movement": -7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 80,
            "movement": 100
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 83,
            "movement": 46
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 137,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 164,
            "movement": -21
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 175,
            "movement": -87
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 178,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 192,
            "movement": 7
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
            "position": 75,
            "movement": 8
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a8c088ce8f133901305e47938b4f981a/500x500-000000-80-0-0.jpg"
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
            "position": 11,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 29,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 35,
            "movement": 47
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 47,
            "movement": -3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 96,
            "movement": 18
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
            "position": 16,
            "movement": 6
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
            "position": 79,
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
            "position": 17,
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
            "position": 36,
            "movement": 7
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d15ec9ac4c6efc3b30a9b12f86283099/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "16",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 29,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 82,
            "movement": 101
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 103,
            "movement": -24
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
            "position": 24,
            "movement": 3
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
            "position": 108,
            "movement": -83
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
            "position": 18,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/8b184fef895cad0601c7d3d8fedc215b/500x500-000000-80-0-0.jpg"
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
            "position": 40,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 61,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 73,
            "movement": 37
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 165,
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
            "position": 34,
            "movement": 0
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
            "position": 47,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
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
            "position": 13,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 96,
            "movement": 11
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 104,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 125,
            "movement": -13
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 138,
            "movement": -1
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
            "position": 11,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/47b72924cef36764e12e24f894bb0bd9/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Very Soon",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 51,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 66,
            "movement": 20
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 84,
            "movement": 53
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
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 44,
            "movement": 15
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/47b72924cef36764e12e24f894bb0bd9/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "my type",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 30,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 71,
            "movement": 61
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 176,
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
            "position": 28,
            "movement": -2
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
            "position": 96,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3772d04a24caee42fd8a775d36258848/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "POE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 104,
            "movement": -24
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 108,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 123,
            "movement": 8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 162,
            "movement": -56
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
            "position": 170,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/12b39d25fb640779483f443dcbedf748/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Deliberate Work",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 48,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 73,
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
            "position": 57,
            "movement": 9
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
            "position": 46,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/dc76fde2737eec1c7bc8e4fb2e29e1b7/500x500-000000-80-0-0.jpg"
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
            "position": 33,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 59,
            "movement": 125
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 132,
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
            "position": 20,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
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
            "position": 40,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 108,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 118,
            "movement": 54
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 133,
            "movement": -18
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/aaf7372a5d512f3beb4dbebfcc391936/500x500-000000-80-0-0.jpg"
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
            "position": 65,
            "movement": 7
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 137,
            "movement": -20
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 191,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 199,
            "movement": -46
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/8b184fef895cad0601c7d3d8fedc215b/500x500-000000-80-0-0.jpg"
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
            "position": 153,
            "movement": -17
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
            "position": 139,
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
            "position": 62,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/aaf7372a5d512f3beb4dbebfcc391936/500x500-000000-80-0-0.jpg"
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
            "position": 97,
            "movement": -1
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
            "position": 73,
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
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/332d8b3586d040e4d5ef670f3987dcfc/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "For Days",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 60,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 87,
            "movement": 63
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/99ab461acf3040d231c824f66893a811/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Laye Mi",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 96,
            "movement": 20
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
            "position": 101,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/47b72924cef36764e12e24f894bb0bd9/500x500-000000-80-0-0.jpg"
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
            "position": 164,
            "movement": 2
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
            "position": 195,
            "movement": -114
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-31",
    "cover": "https://cdn-images.dzcdn.net/images/cover/589173416a36ce1395e49b85c4e6a9f8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Sorry I'm Late",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 173,
            "movement": -25
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
            "position": 116,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/01e3a69fce9ce6cb0acf2e44f1be8280/500x500-000000-80-0-0.jpg"
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
            "position": 66,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/47b72924cef36764e12e24f894bb0bd9/500x500-000000-80-0-0.jpg"
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
            "position": 109,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/7f89da381e2508e30a82f7dc2d18287f/500x500-000000-80-0-0.jpg"
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
            "position": 111,
            "movement": 81
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-03",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e4c2c39678f951dd57f09d2e98cd4062/500x500-000000-80-0-0.jpg"
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
            "position": 76,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/8b184fef895cad0601c7d3d8fedc215b/500x500-000000-80-0-0.jpg"
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
            "position": 120,
            "movement": 34
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-22",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0ce9ce5b82ac7a394e54078a804577ac/500x500-000000-80-0-0.jpg"
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
            "position": 126,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/aaf7372a5d512f3beb4dbebfcc391936/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "I Alone",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 95,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-11",
    "cover": "https://cdn-images.dzcdn.net/images/cover/47b72924cef36764e12e24f894bb0bd9/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ashimolowo",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
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
    "firstSeen": "2026-11-11",
    "cover": "https://cdn-images.dzcdn.net/images/cover/47b72924cef36764e12e24f894bb0bd9/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Feeling",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 145,
            "movement": 23
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-11",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d91495fa367186de1d1e217b5b1bdaaf/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Finesse",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 170,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-10",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3cd08785ca6d2a471c70f774fc3e9b8c/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "In Jesus Name",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 173,
            "movement": -106
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-10",
    "cover": "https://cdn-images.dzcdn.net/images/cover/47b72924cef36764e12e24f894bb0bd9/500x500-000000-80-0-0.jpg"
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
  