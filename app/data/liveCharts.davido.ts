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
  export const liveChartsUpdated = "2026-11-11";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-11T19:39Z";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","Spotify Albums","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "B4 B4",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 1,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 1,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 3,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 3,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 4,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 10,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 18,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 23,
            "movement": 1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 25,
            "movement": 5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 34,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 39,
            "movement": -5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 42,
            "movement": 13
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 61,
            "movement": -36
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 71,
            "movement": 4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 95,
            "movement": -4
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 157,
            "movement": 26
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 188,
            "movement": -49
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
            "position": 60,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 115,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 139,
            "movement": 7
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 174,
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
            "position": 2,
            "movement": -1
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
            "position": 101,
            "movement": -82
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
            "position": 16,
            "movement": 0
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
            "position": 16,
            "movement": 4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 17,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 22,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 24,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 28,
            "movement": 20
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 28,
            "movement": -4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 48,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 50,
            "movement": -4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 56,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 82,
            "movement": 5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 109,
            "movement": -41
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 123,
            "movement": -64
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 184,
            "movement": -31
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 190,
            "movement": -93
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
            "position": 88,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 116,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 155,
            "movement": 13
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 168,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 189,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 195,
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
            "position": 18,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 62,
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
            "position": 40,
            "movement": 2
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
            "country": "NG",
            "name": "Nigeria",
            "position": 10,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 11,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 12,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 13,
            "movement": 3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 21,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 21,
            "movement": -4
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 25,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 30,
            "movement": -7
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 63,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 63,
            "movement": -47
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 68,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 73,
            "movement": -16
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 80,
            "movement": -22
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 82,
            "movement": -35
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 113,
            "movement": -51
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 114,
            "movement": -20
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 128,
            "movement": -28
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 158,
            "movement": -48
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
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
            "country": "TZ",
            "name": "Tanzania",
            "position": 17,
            "movement": 11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 27,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 32,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 37,
            "movement": 5
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 42,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 42,
            "movement": 16
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 52,
            "movement": -37
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 55,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 68,
            "movement": -6
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 69,
            "movement": 2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 85,
            "movement": -3
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 110,
            "movement": 40
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 112,
            "movement": 27
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 115,
            "movement": -54
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 129,
            "movement": -24
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 142,
            "movement": -18
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 186,
            "movement": -91
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
    "title": "PARTY",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 2,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 1,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 1,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 2,
            "movement": -1
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 2,
            "movement": 0
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 5,
            "movement": -2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 12,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 36,
            "movement": -11
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 46,
            "movement": -39
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 77,
            "movement": 61
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 77,
            "movement": -35
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 121,
            "movement": 6
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
            "position": 3,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 98,
            "movement": 25
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 107,
            "movement": 39
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 165,
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
            "position": 29,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-06",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4285de11c037b6bce20faa82338358ed/500x500-000000-80-0-0.jpg"
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
            "position": 30,
            "movement": -12
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 30,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 38,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 39,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 40,
            "movement": -4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 65,
            "movement": -16
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 67,
            "movement": -25
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 78,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 78,
            "movement": -11
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 108,
            "movement": 18
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 112,
            "movement": -21
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 127,
            "movement": 51
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 182,
            "movement": -88
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 196,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 200,
            "movement": -5
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
            "position": 37,
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
    "title": "I Know Who I Be",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 20,
            "movement": 17
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 34,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 40,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 76,
            "movement": -6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 100,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 122,
            "movement": -11
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 133,
            "movement": -24
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 149,
            "movement": -40
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 157,
            "movement": -31
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 163,
            "movement": -46
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 167,
            "movement": 8
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
            "position": 47,
            "movement": 8
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
            "position": 163,
            "movement": -103
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
            "position": 42,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9eb91a56d2af511c4024d6eb0ee97f60/500x500-000000-80-0-0.jpg"
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
            "position": 19,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 39,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 67,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 84,
            "movement": -13
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 127,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 133,
            "movement": -53
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 143,
            "movement": -20
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 146,
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
            "position": 98,
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
            "position": 163,
            "movement": -9
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
            "position": 44,
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
            "position": 8,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
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
            "position": 26,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 35,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 43,
            "movement": -6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 44,
            "movement": -7
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 58,
            "movement": -15
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 93,
            "movement": -5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 112,
            "movement": -3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 137,
            "movement": 38
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 139,
            "movement": 14
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 149,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 162,
            "movement": -42
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 163,
            "movement": 10
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
            "position": 20,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 87,
            "movement": 8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 90,
            "movement": -1
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 92,
            "movement": -28
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 94,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 107,
            "movement": -26
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 112,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 141,
            "movement": -37
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 191,
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
            "position": 137,
            "movement": -8
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
            "position": 103,
            "movement": -20
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
            "position": 69,
            "movement": null,
            "status": "re"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
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
            "position": 58,
            "movement": 48
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 86,
            "movement": 19
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 99,
            "movement": -9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 106,
            "movement": -3
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 111,
            "movement": 18
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 112,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 161,
            "movement": 19
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 166,
            "movement": -41
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 168,
            "movement": -25
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 176,
            "movement": 17
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
    "title": "Fall",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 50,
            "movement": -5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 108,
            "movement": -20
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 119,
            "movement": -46
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 126,
            "movement": -9
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 157,
            "movement": -20
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 194,
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
            "country": "SZ",
            "name": "Eswatini",
            "position": 23,
            "movement": -1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 27,
            "movement": -1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 55,
            "movement": 2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 79,
            "movement": 11
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
            "position": 54,
            "movement": 1
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
            "position": 44,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 73,
            "movement": 73
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 108,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 135,
            "movement": -9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 149,
            "movement": -12
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 162,
            "movement": 38
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 169,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
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
            "position": 131,
            "movement": -13
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
            "position": 189,
            "movement": 8
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
            "country": "LR",
            "name": "Liberia",
            "position": 81,
            "movement": 72
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 94,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 167,
            "movement": -49
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 188,
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
            "position": 4,
            "movement": -3
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 21,
            "movement": -12
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 191,
            "movement": -19
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
            "position": 147,
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
            "position": 166,
            "movement": 3
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
            "country": "LR",
            "name": "Liberia",
            "position": 62,
            "movement": 27
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 75,
            "movement": -15
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 130,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 143,
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
            "position": 102,
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
    "title": "D & G",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 36,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 50,
            "movement": 4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 69,
            "movement": 8
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 75,
            "movement": -29
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 146,
            "movement": 40
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 182,
            "movement": -33
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 185,
            "movement": -37
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b9fd1fc1b331838b6b0ba9b2eacbf31e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "NO COMPETITION",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 47,
            "movement": 21
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 82,
            "movement": 5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 123,
            "movement": 44
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 126,
            "movement": -58
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 135,
            "movement": 32
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 179,
            "movement": -6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 191,
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
            "position": 21,
            "movement": -1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 23,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 29,
            "movement": -1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 58,
            "movement": 2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 71,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 75,
            "movement": 8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 195,
            "movement": -3
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
            "country": "GM",
            "name": "Gambia",
            "position": 70,
            "movement": 31
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 76,
            "movement": -15
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 89,
            "movement": -17
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 115,
            "movement": -10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 129,
            "movement": -17
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 164,
            "movement": -10
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b38babe761ad3914bfd843b8c199555/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "5ive",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 109,
            "movement": 23
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 113,
            "movement": -14
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 114,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 140,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 148,
            "movement": 47
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
    "title": "FIA",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 19,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 22,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 31,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 199,
            "movement": -2
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
            "position": 74,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 128,
            "movement": -67
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 130,
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
    "title": "Para",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 5,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 95,
            "movement": -44
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-10",
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
            "position": 85,
            "movement": -15
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
            "position": 46,
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
    "title": "Assurance",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 86,
            "movement": 2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 175,
            "movement": -77
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-07",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a880bf2aaa27d39c446bd9b19effd22e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Risky",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 160,
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
            "position": 36,
            "movement": -18
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-27",
    "cover": "https://cdn-images.dzcdn.net/images/cover/da0c3e984d1fa2b9c54158ee1a02fbd1/500x500-000000-80-0-0.jpg"
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
            "position": 83,
            "movement": 22
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 136,
            "movement": 38
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e8b1b523f139f23bac60bc70528f386a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Awuke",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 7,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-11",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a087ecbb3b04710409cd98ae120c6550/500x500-000000-80-0-0.jpg"
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
            "position": 93,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "10 Kilo",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 48,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-11",
    "cover": "https://cdn-images.dzcdn.net/images/cover/08304eb172098540c635de98530d4929/500x500-000000-80-0-0.jpg"
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
    "title": "Offa Me",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 54,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-11",
    "cover": "https://cdn-images.dzcdn.net/images/cover/08304eb172098540c635de98530d4929/500x500-000000-80-0-0.jpg"
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
            "position": 129,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-11",
    "cover": "https://cdn-images.dzcdn.net/images/cover/28cbbe0064bd5b7494523e75b6ebeb95/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Don't Know",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 63,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-11",
    "cover": "https://cdn-images.dzcdn.net/images/cover/08304eb172098540c635de98530d4929/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Holy Water",
    "platforms": [
      {
        "platform": "iTunes",
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
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-11",
    "cover": "https://cdn-images.dzcdn.net/images/cover/08304eb172098540c635de98530d4929/500x500-000000-80-0-0.jpg"
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
            "position": 66,
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
    "title": "R&B",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 66,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-11",
    "cover": "https://cdn-images.dzcdn.net/images/cover/08304eb172098540c635de98530d4929/500x500-000000-80-0-0.jpg"
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
            "position": 117,
            "movement": -37
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-31",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6339d7ca1f42b21412813125ef683020/500x500-000000-80-0-0.jpg"
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
            "position": 155,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-11",
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
            "position": 192,
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
    "title": "Nwa Baby",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 119,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-11",
    "cover": "https://cdn-images.dzcdn.net/images/cover/74fb63756975ed8644a5519be4ad39fc/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "FEEL",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 132,
            "movement": -92
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-07",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
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
            "position": 173,
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
    "title": "Bless Me",
    "platforms": [
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
    "firstSeen": "2026-11-11",
    "cover": "https://cdn-images.dzcdn.net/images/cover/798485d74c5c9cd451070cd502092ea6/500x500-000000-80-0-0.jpg"
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
            "position": 198,
            "movement": -26
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1d5dfc880396e953e316456a394d7353/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "CFMF",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 187,
            "movement": -111
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-10",
    "cover": "https://cdn-images.dzcdn.net/images/cover/08304eb172098540c635de98530d4929/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Omo Baba Olowo: The Genesis",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 71,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-11-11",
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
  