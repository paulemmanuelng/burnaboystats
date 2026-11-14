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
  export const liveChartsUpdated = "2026-11-14";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-14T18:09Z";
  
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
            "country": "TZ",
            "name": "Tanzania",
            "position": 12,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 14,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 15,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 16,
            "movement": 14
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 18,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 23,
            "movement": 15
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 31,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 54,
            "movement": -29
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 62,
            "movement": -13
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 91,
            "movement": -21
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 92,
            "movement": -11
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 138,
            "movement": -16
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 143,
            "movement": -37
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 145,
            "movement": -11
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 147,
            "movement": -6
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
            "position": 75,
            "movement": 4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 83,
            "movement": 13
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 88,
            "movement": -3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 128,
            "movement": 13
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 129,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 152,
            "movement": 16
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 161,
            "movement": 19
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 167,
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
            "position": 45,
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
            "position": 5,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 6,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 7,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 22,
            "movement": -13
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 27,
            "movement": -4
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 31,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 33,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 45,
            "movement": -24
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 54,
            "movement": -10
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 55,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 73,
            "movement": 12
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 156,
            "movement": -84
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
            "position": 51,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 100,
            "movement": 8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 130,
            "movement": 1
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 147,
            "movement": 8
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
            "position": 6,
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
            "position": 31,
            "movement": -25
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
            "position": 6,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 6,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 13,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 13,
            "movement": 10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 22,
            "movement": -1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 29,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 32,
            "movement": -3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 46,
            "movement": -14
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 49,
            "movement": 3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 50,
            "movement": -30
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 54,
            "movement": 10
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 70,
            "movement": 8
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 88,
            "movement": -15
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 95,
            "movement": -31
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 103,
            "movement": -52
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 170,
            "movement": -53
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 176,
            "movement": -92
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 190,
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
            "position": 7,
            "movement": -1
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 1,
            "movement": 0
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 1,
            "movement": 0
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
            "position": 2,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 3,
            "movement": -2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 11,
            "movement": 11
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 24,
            "movement": -14
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 37,
            "movement": -11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 79,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 82,
            "movement": -10
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 127,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 163,
            "movement": -67
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
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 50,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 67,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 92,
            "movement": -12
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
            "position": 31,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 176,
            "movement": -132
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-06",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4285de11c037b6bce20faa82338358ed/500x500-000000-80-0-0.jpg"
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
            "position": 14,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 23,
            "movement": 8
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 33,
            "movement": 9
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 37,
            "movement": -17
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 41,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 49,
            "movement": 11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 50,
            "movement": 3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 54,
            "movement": 48
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 55,
            "movement": 9
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 58,
            "movement": 10
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 81,
            "movement": -30
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 95,
            "movement": -20
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 98,
            "movement": -33
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 103,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 104,
            "movement": 20
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 168,
            "movement": 3
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
    "title": "Already Falling",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 27,
            "movement": -5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 30,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 34,
            "movement": 7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 35,
            "movement": 2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 57,
            "movement": 13
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 79,
            "movement": 76
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 128,
            "movement": -17
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 135,
            "movement": 41
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 146,
            "movement": -12
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
            "position": 48,
            "movement": 17
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 109,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 152,
            "movement": 2
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
            "position": 54,
            "movement": 3
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
    "title": "KANTE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 24,
            "movement": 8
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 30,
            "movement": 94
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 56,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 80,
            "movement": 20
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 124,
            "movement": 18
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 126,
            "movement": 10
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 153,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 158,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 163,
            "movement": -27
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 178,
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
            "position": 95,
            "movement": -3
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
            "position": 158,
            "movement": -25
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
    "title": "UNAVAILABLE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 29,
            "movement": -9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 34,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 37,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 40,
            "movement": -14
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 45,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 45,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 46,
            "movement": 3
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 72,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 90,
            "movement": -18
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 102,
            "movement": 12
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 129,
            "movement": -24
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 177,
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
    "title": "I Know Who I Be",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 24,
            "movement": -8
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 27,
            "movement": 50
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 44,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 50,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 103,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 103,
            "movement": -3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 117,
            "movement": 54
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 128,
            "movement": -10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 167,
            "movement": 22
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 191,
            "movement": -38
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
            "movement": -4
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
    "title": "Fall",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 57,
            "movement": -9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 65,
            "movement": 12
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 85,
            "movement": -3
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 101,
            "movement": -52
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 180,
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
            "position": 16,
            "movement": 2
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 46,
            "movement": -14
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 59,
            "movement": -9
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 78,
            "movement": 0
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
            "position": 133,
            "movement": -26
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6f5e2eeac47abb6bf1bcc293125e0016/500x500-000000-80-0-0.jpg"
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
            "position": 42,
            "movement": 9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 111,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 112,
            "movement": -15
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 118,
            "movement": -5
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 129,
            "movement": -21
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 142,
            "movement": -81
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 144,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 150,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 193,
            "movement": -42
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
            "movement": -8
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
            "position": 45,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 48,
            "movement": 27
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 105,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 112,
            "movement": -56
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 149,
            "movement": -11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 178,
            "movement": -33
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 198,
            "movement": -28
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
            "position": 173,
            "movement": 4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 199,
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
            "position": 117,
            "movement": 14
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
            "country": "TZ",
            "name": "Tanzania",
            "position": 68,
            "movement": 11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 104,
            "movement": -30
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 115,
            "movement": 30
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 116,
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
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 61,
            "movement": -10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 200,
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
            "position": 120,
            "movement": 1
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
            "movement": -7
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "EG",
            "name": "Egypt",
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
            "country": "LR",
            "name": "Liberia",
            "position": 19,
            "movement": 9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 31,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 34,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 41,
            "movement": 12
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 75,
            "movement": 6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 106,
            "movement": -14
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 114,
            "movement": 74
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 162,
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
            "position": 32,
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
    "title": "If",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 14,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 29,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 42,
            "movement": -14
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 62,
            "movement": -9
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 70,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 92,
            "movement": -18
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 106,
            "movement": -91
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 195,
            "movement": 1
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
            "position": 183,
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
    "title": "D & G",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 39,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 40,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 74,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 80,
            "movement": 7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 106,
            "movement": 16
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 135,
            "movement": -57
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 154,
            "movement": 7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 188,
            "movement": -58
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
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 35,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 72,
            "movement": 7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 83,
            "movement": 20
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 90,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 100,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 133,
            "movement": 19
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 190,
            "movement": 3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 195,
            "movement": 5
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
            "country": "UG",
            "name": "Uganda",
            "position": 61,
            "movement": 3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 72,
            "movement": 87
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 87,
            "movement": 21
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 132,
            "movement": -54
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 147,
            "movement": -20
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 173,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 191,
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
            "position": 40,
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
            "position": 55,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 73,
            "movement": -14
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 103,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 134,
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
            "position": 44,
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
            "position": 104,
            "movement": 9
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3772d04a24caee42fd8a775d36258848/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "5ive",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 50,
            "movement": 55
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 50,
            "movement": 8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 116,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 165,
            "movement": -90
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 196,
            "movement": -103
          },
          {
            "country": "TD",
            "name": "Chad",
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
            "position": 59,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/08304eb172098540c635de98530d4929/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Sensational",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 95,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 106,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 124,
            "movement": 7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 163,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 164,
            "movement": -5
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 164,
            "movement": 31
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
            "position": 11,
            "movement": 7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 31,
            "movement": 18
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 87,
            "movement": 21
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 140,
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
            "country": "TZ",
            "name": "Tanzania",
            "position": 31,
            "movement": 16
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 21,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 23,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 50,
            "movement": -14
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/61fc2faba453737555d0b81de1e20c6a/500x500-000000-80-0-0.jpg"
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
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
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
            "country": "GH",
            "name": "Ghana",
            "position": 88,
            "movement": -19
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-27",
    "cover": "https://cdn-images.dzcdn.net/images/cover/da0c3e984d1fa2b9c54158ee1a02fbd1/500x500-000000-80-0-0.jpg"
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
            "position": 61,
            "movement": 20
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 75,
            "movement": 1
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
            "position": 55,
            "movement": 126
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 98,
            "movement": -34
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-10",
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
            "country": "LR",
            "name": "Liberia",
            "position": 86,
            "movement": 49
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 121,
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
    "title": "Aye",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 113,
            "movement": 54
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
            "position": 124,
            "movement": 27
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-12",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9119c622011c2f9e2c0fd2ae9bcaec51/500x500-000000-80-0-0.jpg"
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
            "position": 184,
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
    "title": "Omo Baba Olowo: The Genesis",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 56,
            "movement": -44
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 167,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-11-13",
    "cover": "https://cdn-images.dzcdn.net/images/cover/798485d74c5c9cd451070cd502092ea6/500x500-000000-80-0-0.jpg"
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
            "movement": 2
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
            "position": 80,
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
    "title": "The Best",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 85,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "FEM",
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
    "firstSeen": "2026-11-14",
    "cover": "https://cdn-images.dzcdn.net/images/cover/fa0e3368a8a8e80b32fe88a276b9e759/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Tell Everybody",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 98,
            "movement": 16
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-12",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "PEPE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 109,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-13",
    "cover": "https://cdn-images.dzcdn.net/images/cover/23726f80ac87dcce3846c3b638cba30d/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ke Star",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 114,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-14",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5a54ff0e04934271e7acec9af3dd55d8/500x500-000000-80-0-0.jpg"
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
    "title": "FEEL",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 134,
            "movement": 31
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-07",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Dun Rich",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 95,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-13",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f964c43946dc4486205f00b98a75176d/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "All",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 107,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-13",
    "cover": "https://cdn-images.dzcdn.net/images/cover/798485d74c5c9cd451070cd502092ea6/500x500-000000-80-0-0.jpg"
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
            "position": 179,
            "movement": 12
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Tire You",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 133,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-13",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b9fd1fc1b331838b6b0ba9b2eacbf31e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Get to You",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 128,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-13",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b9fd1fc1b331838b6b0ba9b2eacbf31e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Once Debe",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 176,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-13",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4781f64b668edd25ec97abb7ad0e38af/500x500-000000-80-0-0.jpg"
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
            "position": 182,
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
            "position": 195,
            "movement": -22
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-03",
    "cover": "https://cdn-images.dzcdn.net/images/cover/132d4358890f5675bd291681812647e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Give Me Chance",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 170,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-14",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f021602c626ca793a7fe87154225499d/500x500-000000-80-0-0.jpg"
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
  