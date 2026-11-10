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
  export const liveChartsUpdated = "2026-11-10";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-10T19:47Z";
  
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
            "position": 12,
            "movement": 8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 19,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 24,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 24,
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 27,
            "movement": -13
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 28,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 46,
            "movement": -4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 48,
            "movement": -24
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 51,
            "movement": -20
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 59,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 68,
            "movement": 21
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 87,
            "movement": -4
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 89,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 97,
            "movement": 22
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 123,
            "movement": -10
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 200,
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
            "position": 87,
            "movement": 4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 119,
            "movement": -6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 168,
            "movement": 10
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 187,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 190,
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
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 97,
            "movement": null,
            "status": "new"
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
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 5,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 5,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 6,
            "movement": 4
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
            "position": 16,
            "movement": 16
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
            "position": 30,
            "movement": 11
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 34,
            "movement": 12
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 34,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 55,
            "movement": -5
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
            "position": 63,
            "movement": 4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 91,
            "movement": -45
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 139,
            "movement": 22
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 183,
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
            "position": 63,
            "movement": 4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 110,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 146,
            "movement": -14
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 181,
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
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 16,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 11,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 11,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 14,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 16,
            "movement": 12
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 16,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 17,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 18,
            "movement": 22
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 22,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 23,
            "movement": 6
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 31,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 47,
            "movement": 25
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 57,
            "movement": -10
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 58,
            "movement": 6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 62,
            "movement": -16
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 63,
            "movement": -4
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 94,
            "movement": 62
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 100,
            "movement": -9
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 101,
            "movement": -53
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 110,
            "movement": 52
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
            "country": "GM",
            "name": "Gambia",
            "position": 15,
            "movement": 52
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 27,
            "movement": -17
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 28,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 30,
            "movement": 0
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 41,
            "movement": 23
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 42,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 51,
            "movement": 8
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 58,
            "movement": -21
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 61,
            "movement": -31
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 62,
            "movement": -7
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 71,
            "movement": 12
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 82,
            "movement": 4
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 95,
            "movement": 53
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 105,
            "movement": 19
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 124,
            "movement": -38
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 139,
            "movement": -13
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 187,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
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
    "title": "UNAVAILABLE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 18,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 26,
            "movement": -5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 36,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 36,
            "movement": 7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 37,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 38,
            "movement": -5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 59,
            "movement": 1
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 73,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 78,
            "movement": -11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 81,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 91,
            "movement": 18
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 94,
            "movement": 2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 132,
            "movement": -8
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 178,
            "movement": 13
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 185,
            "movement": -32
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 195,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 197,
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
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 1,
            "movement": 0
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
            "position": 3,
            "movement": -1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 10,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 25,
            "movement": -6
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 46,
            "movement": -39
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 77,
            "movement": -35
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 109,
            "movement": -31
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 138,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 185,
            "movement": -46
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
            "position": 5,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 123,
            "movement": 28
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 146,
            "movement": 36
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
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 81,
            "movement": 0
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
            "country": "KE",
            "name": "Kenya",
            "position": 104,
            "movement": -6
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 108,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 123,
            "movement": 39
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 123,
            "movement": -12
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 137,
            "movement": 26
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 179,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 200,
            "movement": -89
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
            "position": 80,
            "movement": -10
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
    "title": "I Know Who I Be",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 22,
            "movement": 8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 31,
            "movement": 3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 37,
            "movement": -12
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 67,
            "movement": 83
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 70,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 103,
            "movement": -5
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 109,
            "movement": 64
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 111,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 133,
            "movement": -24
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
            "position": 175,
            "movement": -34
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
            "position": 51,
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
            "position": 32,
            "movement": 16
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
            "position": 22,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 39,
            "movement": -12
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 65,
            "movement": 62
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 80,
            "movement": -17
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 84,
            "movement": -13
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 96,
            "movement": -21
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 123,
            "movement": 30
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 128,
            "movement": 1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 135,
            "movement": 20
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
            "position": 154,
            "movement": -13
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 176,
            "movement": -13
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
            "country": "NG",
            "name": "Nigeria",
            "position": 34,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 34,
            "movement": 6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 35,
            "movement": -18
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 43,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 44,
            "movement": -7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 88,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 112,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 120,
            "movement": 3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 139,
            "movement": 28
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 153,
            "movement": 13
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 156,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 167,
            "movement": 19
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 175,
            "movement": 15
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
            "country": "TD",
            "name": "Chad",
            "position": 90,
            "movement": -38
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 103,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 105,
            "movement": 15
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 106,
            "movement": -15
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 125,
            "movement": 7
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 129,
            "movement": -51
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 143,
            "movement": -36
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 173,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 174,
            "movement": -21
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 180,
            "movement": 5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 193,
            "movement": -41
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
            "position": 45,
            "movement": 6
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
            "position": 117,
            "movement": 8
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 117,
            "movement": 3
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 154,
            "movement": 5
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 157,
            "movement": -20
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
            "position": 22,
            "movement": -1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 26,
            "movement": -1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 57,
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 90,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 198,
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
            "position": 55,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6f5e2eeac47abb6bf1bcc293125e0016/500x500-000000-80-0-0.jpg"
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
            "position": 51,
            "movement": -17
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 52,
            "movement": 10
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 77,
            "movement": 11
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 148,
            "movement": 39
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 164,
            "movement": 16
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 182,
            "movement": -33
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 195,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
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
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 106,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 126,
            "movement": 29
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 137,
            "movement": -7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 146,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 169,
            "movement": -41
          },
          {
            "country": "LR",
            "name": "Liberia",
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
            "position": 197,
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
    "title": "With You",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 94,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 122,
            "movement": -38
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 144,
            "movement": 20
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
            "movement": 4
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 9,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 169,
            "movement": -12
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
            "position": 169,
            "movement": -7
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
    "title": "NO COMPETITION",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 68,
            "movement": 19
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 68,
            "movement": 22
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 82,
            "movement": 5
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 85,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 133,
            "movement": 38
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 167,
            "movement": -23
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 173,
            "movement": -5
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
            "movement": 36
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 83,
            "movement": -15
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 101,
            "movement": -10
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
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 188,
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
            "position": 101,
            "movement": -82
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b38babe761ad3914bfd843b8c199555/500x500-000000-80-0-0.jpg"
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
            "position": 20,
            "movement": -1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 22,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 28,
            "movement": -1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 60,
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 75,
            "movement": 7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 81,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 189,
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
            "position": 17,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 88,
            "movement": -40
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 106,
            "movement": 33
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 109,
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
            "position": 104,
            "movement": 0
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
            "country": "TZ",
            "name": "Tanzania",
            "position": 99,
            "movement": 36
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 132,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 188,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 195,
            "movement": -3
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
    "title": "Sensational",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 100,
            "movement": 22
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 119,
            "movement": -74
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 136,
            "movement": 38
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
            "position": 125,
            "movement": -91
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 175,
            "movement": -12
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e8b1b523f139f23bac60bc70528f386a/500x500-000000-80-0-0.jpg"
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
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 22,
            "movement": 1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 30,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 194,
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
            "country": "GM",
            "name": "Gambia",
            "position": 61,
            "movement": 8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 73,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 146,
            "movement": -10
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/594be4990d2be6af325a4a0825960a9a/500x500-000000-80-0-0.jpg"
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
            "position": 88,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 102,
            "movement": 11
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 186,
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
            "position": 51,
            "movement": null,
            "status": "new"
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
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 174,
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
    "title": "Jowo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
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
            "country": "GM",
            "name": "Gambia",
            "position": 66,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-09",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
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
            "position": 199,
            "movement": -5
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
            "position": 115,
            "movement": -89
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "On The Road",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 13,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-10",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Risky",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 15,
            "movement": -9
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-27",
    "cover": "https://cdn-images.dzcdn.net/images/cover/da0c3e984d1fa2b9c54158ee1a02fbd1/500x500-000000-80-0-0.jpg"
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
            "position": 90,
            "movement": 5
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
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
            "position": 35,
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
    "title": "All over You",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 80,
            "movement": -17
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-31",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6339d7ca1f42b21412813125ef683020/500x500-000000-80-0-0.jpg"
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
    "title": "CFMF",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 65,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-10",
    "cover": "https://cdn-images.dzcdn.net/images/cover/08304eb172098540c635de98530d4929/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Electricity",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 103,
            "movement": -83
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-09",
    "cover": "https://cdn-images.dzcdn.net/images/cover/dd374a6d185e39c6c4f847704afc827e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Betty Butter",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 105,
            "movement": -84
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-09",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Stand Strong",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 112,
            "movement": -87
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-09",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b19dde3eb91732404d09c18e8bb07d13/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "AWAY",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 122,
            "movement": -91
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-09",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "GROOVING",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 140,
            "movement": -96
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-09",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0af8d1b7ecebd4fec1dbb6c048f2105f/500x500-000000-80-0-0.jpg"
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
            "position": 165,
            "movement": -6
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
            "position": 172,
            "movement": 12
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1d5dfc880396e953e316456a394d7353/500x500-000000-80-0-0.jpg"
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
            "position": 188,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-09",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f964c43946dc4486205f00b98a75176d/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Hmmm",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 131,
            "movement": -92
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-09",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
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
  