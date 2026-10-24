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
  export const liveChartsUpdated = "2026-10-24";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-24T20:54Z";
  
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
            "position": 17,
            "movement": 79
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 22,
            "movement": 11
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 26,
            "movement": 5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 30,
            "movement": 17
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 33,
            "movement": 34
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 36,
            "movement": 53
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 54,
            "movement": -15
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 66,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 78,
            "movement": 11
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 98,
            "movement": 98
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 111,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 141,
            "movement": 38
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 152,
            "movement": -15
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 198,
            "movement": -5
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
            "position": 73,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 101,
            "movement": -15
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 122,
            "movement": -1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 153,
            "movement": -31
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 155,
            "movement": 9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 182,
            "movement": -7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 183,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 190,
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
            "position": 27,
            "movement": -6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 87,
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
            "position": 53,
            "movement": 3
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
            "position": 67,
            "movement": -11
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
        "numberOnes": 1,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 1,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 4,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 5,
            "movement": 6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 15,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 21,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 22,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 35,
            "movement": 13
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 50,
            "movement": -9
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 54,
            "movement": -19
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 59,
            "movement": -7
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 62,
            "movement": 19
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 65,
            "movement": -24
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 79,
            "movement": 7
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 117,
            "movement": null,
            "status": "new"
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 184,
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
            "position": 45,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 78,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 81,
            "movement": -2
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 121,
            "movement": -11
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
            "position": 98,
            "movement": -92
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
            "position": 6,
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
            "country": "GM",
            "name": "Gambia",
            "position": 8,
            "movement": 37
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 10,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 11,
            "movement": 2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 11,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 15,
            "movement": 14
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 23,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 24,
            "movement": 6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 46,
            "movement": 19
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 51,
            "movement": -32
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 52,
            "movement": 49
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 59,
            "movement": -16
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 72,
            "movement": 0
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 77,
            "movement": 4
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 178,
            "movement": 12
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 183,
            "movement": -58
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 186,
            "movement": -56
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
            "position": 16,
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
            "position": 7,
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
    "title": "Timeless",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 22,
            "movement": 5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 31,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 32,
            "movement": 10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 33,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 49,
            "movement": 19
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 61,
            "movement": 8
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 68,
            "movement": 102
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 69,
            "movement": 4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 76,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 82,
            "movement": -8
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 87,
            "movement": 13
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 87,
            "movement": 10
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 98,
            "movement": 59
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 161,
            "movement": 10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 163,
            "movement": -52
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 183,
            "movement": -2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 195,
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
            "position": 35,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
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
            "position": 91,
            "movement": 85
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 94,
            "movement": 13
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 95,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 119,
            "movement": -46
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 123,
            "movement": 64
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 146,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 159,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 169,
            "movement": 24
          },
          {
            "country": "KE",
            "name": "Kenya",
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
            "country": "GH",
            "name": "Ghana",
            "position": 8,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 60,
            "movement": -26
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 102,
            "movement": -93
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
            "position": 158,
            "movement": 27
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
            "position": 178,
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
            "position": 63,
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
    "title": "UNAVAILABLE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 16,
            "movement": 32
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 25,
            "movement": 18
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 37,
            "movement": 75
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 38,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 47,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 50,
            "movement": -25
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 71,
            "movement": 9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 81,
            "movement": 5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 93,
            "movement": -7
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 100,
            "movement": 77
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 101,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 105,
            "movement": -20
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 116,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 127,
            "movement": -19
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 191,
            "movement": -28
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
            "country": "LR",
            "name": "Liberia",
            "position": 25,
            "movement": -17
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 33,
            "movement": 14
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 41,
            "movement": -17
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 63,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 93,
            "movement": -4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 105,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 119,
            "movement": 15
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 134,
            "movement": 43
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
            "position": 60,
            "movement": -2
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
            "movement": -18
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
            "position": 43,
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
            "position": 11,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 25,
            "movement": 21
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 36,
            "movement": 147
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 48,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 63,
            "movement": -7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 93,
            "movement": -9
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 111,
            "movement": -17
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 115,
            "movement": 20
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 119,
            "movement": -32
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 121,
            "movement": 8
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 177,
            "movement": -42
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
            "position": 27,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 48,
            "movement": 69
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 68,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 84,
            "movement": 29
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 102,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 113,
            "movement": 18
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 138,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 148,
            "movement": 2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 161,
            "movement": 23
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 171,
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
            "position": 81,
            "movement": -12
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 38,
            "movement": 31
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 51,
            "movement": 33
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 79,
            "movement": 6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 169,
            "movement": 16
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 184,
            "movement": -44
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
            "position": 78,
            "movement": -16
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
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
            "position": 80,
            "movement": 46
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 101,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 104,
            "movement": -7
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 106,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 107,
            "movement": -7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 119,
            "movement": -27
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 183,
            "movement": -17
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 198,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 199,
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
            "position": 65,
            "movement": -7
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
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 65,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 79,
            "movement": 10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 101,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 107,
            "movement": 0
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 125,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 148,
            "movement": 9
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 159,
            "movement": 10
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 198,
            "movement": -7
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
            "position": 93,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b9fd1fc1b331838b6b0ba9b2eacbf31e/500x500-000000-80-0-0.jpg"
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
            "position": 42,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 54,
            "movement": 32
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 100,
            "movement": 2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 138,
            "movement": 28
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 141,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 155,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 156,
            "movement": -20
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
            "position": 128,
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
            "position": 198,
            "movement": 1
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
            "country": "LR",
            "name": "Liberia",
            "position": 49,
            "movement": -6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 52,
            "movement": -6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 58,
            "movement": -10
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 71,
            "movement": 5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 120,
            "movement": -35
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 125,
            "movement": 59
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 192,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 198,
            "movement": -106
          }
        ]
      }
    ],
    "kind": "song",
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 49,
            "movement": -30
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 50,
            "movement": 12
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 104,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 142,
            "movement": -4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 148,
            "movement": -22
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
            "position": 17,
            "movement": -1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 61,
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
    "title": "If",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 15,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 29,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 64,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 76,
            "movement": 4
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 88,
            "movement": 2
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 94,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 29,
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
            "position": 12,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 53,
            "movement": 7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 62,
            "movement": 8
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 89,
            "movement": -16
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 90,
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
            "position": 39,
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
    "title": "Blow My Mind",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 60,
            "movement": 93
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 72,
            "movement": 58
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 78,
            "movement": 10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 122,
            "movement": 49
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 167,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 169,
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
    "title": "NO COMPETITION",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 38,
            "movement": 23
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 68,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 101,
            "movement": -27
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 137,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 144,
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
    "title": "Champion Sound",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 78,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 110,
            "movement": -56
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 167,
            "movement": -69
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/594be4990d2be6af325a4a0825960a9a/500x500-000000-80-0-0.jpg"
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
            "position": 33,
            "movement": 82
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 158,
            "movement": -5
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
            "position": 25,
            "movement": -1
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
            "position": 58,
            "movement": -37
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 110,
            "movement": 60
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a880bf2aaa27d39c446bd9b19effd22e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "FIA",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 66,
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
            "country": "GM",
            "name": "Gambia",
            "position": 48,
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
    "title": "OVER DEM",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 78,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 169,
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
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 177,
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
    "title": "High",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 145,
            "movement": null,
            "status": "new"
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
    "firstSeen": "2026-10-24",
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
    "title": "Yebo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 131,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-24",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Titanium",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 168,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-24",
    "cover": "https://cdn-images.dzcdn.net/images/cover/08304eb172098540c635de98530d4929/500x500-000000-80-0-0.jpg"
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
            "position": 178,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-24",
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
            "position": 180,
            "movement": -7
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
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
            "position": 196,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
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
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-21",
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
            "position": 184,
            "movement": 7
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
            "movement": -1
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
  