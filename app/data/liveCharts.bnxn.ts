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
  export const liveChartsUpdated = "2026-10-19";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-19T13:23Z";
  
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
            "position": 12,
            "movement": 1
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 15,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 33,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 53,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 62,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 84,
            "movement": -15
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 101,
            "movement": -5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 112,
            "movement": -20
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 135,
            "movement": -7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 137,
            "movement": -20
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 144,
            "movement": -32
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 195,
            "movement": -30
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
            "position": 43,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 134,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 164,
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
            "position": 25,
            "movement": 9
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 81,
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
            "position": 24,
            "movement": -1
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
            "position": 137,
            "movement": -38
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
            "movement": -7
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
            "position": 5,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 12,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 12,
            "movement": 4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 27,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 27,
            "movement": 38
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 32,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 35,
            "movement": -15
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 42,
            "movement": -7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 42,
            "movement": 18
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 56,
            "movement": 14
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 76,
            "movement": -44
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 78,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 87,
            "movement": -19
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 107,
            "movement": -13
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 116,
            "movement": -49
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 122,
            "movement": -90
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 125,
            "movement": -17
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 141,
            "movement": -24
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 155,
            "movement": 28
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 181,
            "movement": -80
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
            "position": 8,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 15,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 36,
            "movement": 18
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 40,
            "movement": -2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 42,
            "movement": -7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 46,
            "movement": -22
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 47,
            "movement": 15
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 64,
            "movement": 11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 94,
            "movement": 0
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 104,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 123,
            "movement": -100
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 139,
            "movement": -7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 187,
            "movement": -36
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
            "position": 26,
            "movement": 2
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
            "position": 169,
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
            "position": 34,
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
            "position": 31,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/065baff6ae2b9caecf19bb6aa423644a/500x500-000000-80-0-0.jpg"
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
            "position": 38,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 47,
            "movement": 7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 50,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 65,
            "movement": -13
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 113,
            "movement": 30
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 136,
            "movement": -14
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 142,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 167,
            "movement": -19
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 174,
            "movement": 7
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 189,
            "movement": -118
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 200,
            "movement": -11
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
            "movement": 36
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
            "position": 22,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 76,
            "movement": -6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 199,
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
            "position": 33,
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
            "position": 73,
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
            "position": 96,
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
            "position": 35,
            "movement": 21
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
            "movement": 11
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d15ec9ac4c6efc3b30a9b12f86283099/500x500-000000-80-0-0.jpg"
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
            "position": 10,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 29,
            "movement": -8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 49,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 62,
            "movement": -24
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 126,
            "movement": 10
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 176,
            "movement": -127
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
            "position": 61,
            "movement": -7
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
            "position": 30,
            "movement": -17
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/dc76fde2737eec1c7bc8e4fb2e29e1b7/500x500-000000-80-0-0.jpg"
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
            "position": 17,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 66,
            "movement": 5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 119,
            "movement": -14
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 170,
            "movement": -37
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
            "position": 18,
            "movement": 14
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
            "position": 99,
            "movement": -37
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3772d04a24caee42fd8a775d36258848/500x500-000000-80-0-0.jpg"
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
            "position": 30,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 199,
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
            "position": 20,
            "movement": -4
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
            "position": 48,
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
            "position": 93,
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
            "position": 64,
            "movement": -32
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/8b184fef895cad0601c7d3d8fedc215b/500x500-000000-80-0-0.jpg"
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
            "position": 61,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 71,
            "movement": 23
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 103,
            "movement": -23
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 178,
            "movement": -21
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
            "position": 59,
            "movement": 24
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/47b72924cef36764e12e24f894bb0bd9/500x500-000000-80-0-0.jpg"
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
            "position": 21,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 97,
            "movement": 7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 113,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 144,
            "movement": 23
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
            "position": 13,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/47b72924cef36764e12e24f894bb0bd9/500x500-000000-80-0-0.jpg"
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
            "position": 35,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 144,
            "movement": -53
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 149,
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
            "movement": -3
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a8c088ce8f133901305e47938b4f981a/500x500-000000-80-0-0.jpg"
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
            "position": 71,
            "movement": 7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 154,
            "movement": 20
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 198,
            "movement": -53
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 200,
            "movement": -53
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/99ab461acf3040d231c824f66893a811/500x500-000000-80-0-0.jpg"
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
            "position": 36,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 193,
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
            "position": 19,
            "movement": 6
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
            "position": 73,
            "movement": -37
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/dc76fde2737eec1c7bc8e4fb2e29e1b7/500x500-000000-80-0-0.jpg"
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
            "position": 34,
            "movement": -5
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
            "position": 43,
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
            "position": 159,
            "movement": -12
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
            "position": 94,
            "movement": -41
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/dc76fde2737eec1c7bc8e4fb2e29e1b7/500x500-000000-80-0-0.jpg"
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
            "position": 109,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 148,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 165,
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
    "title": "POE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 133,
            "movement": 10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 138,
            "movement": -7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 150,
            "movement": 5
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/12b39d25fb640779483f443dcbedf748/500x500-000000-80-0-0.jpg"
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
            "position": 47,
            "movement": 2
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 87,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 156,
            "movement": -30
          }
        ]
      }
    ],
    "kind": "album",
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
            "position": 100,
            "movement": -6
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
            "position": 81,
            "movement": -2
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
            "position": 13,
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
    "title": "RnB",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 72,
            "movement": 0
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 86,
            "movement": -43
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 144,
            "movement": -99
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
            "position": 126,
            "movement": 23
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 72,
            "movement": 88
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/aaf7372a5d512f3beb4dbebfcc391936/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "WHO THIS",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 92,
            "movement": 17
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 173,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/eae1950cf642fef40ae06c76d29dc1b8/500x500-000000-80-0-0.jpg"
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
            "position": 179,
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
            "country": "NA",
            "name": "Namibia",
            "position": 46,
            "movement": -12
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c0bc5156d31fbdfdc199a238476f02ec/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Finesse",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 57,
            "movement": 1
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
            "movement": -11
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
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
            "position": 141,
            "movement": -5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 188,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/47b72924cef36764e12e24f894bb0bd9/500x500-000000-80-0-0.jpg"
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
            "position": 81,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/47b72924cef36764e12e24f894bb0bd9/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Rum & Soda",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 86,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/aaf7372a5d512f3beb4dbebfcc391936/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Totori",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 67,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-19",
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
            "position": 155,
            "movement": null,
            "status": "new"
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
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 84,
            "movement": 11
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e4c2c39678f951dd57f09d2e98cd4062/500x500-000000-80-0-0.jpg"
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
            "position": 184,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-18",
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
            "position": 158,
            "movement": 5
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/aaf7372a5d512f3beb4dbebfcc391936/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Sorry I'm Late",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 119,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/01e3a69fce9ce6cb0acf2e44f1be8280/500x500-000000-80-0-0.jpg"
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
  