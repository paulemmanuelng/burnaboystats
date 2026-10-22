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
  export const liveChartsUpdated = "2026-10-22";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-22T11:58Z";
  
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
            "country": "UG",
            "name": "Uganda",
            "position": 31,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 33,
            "movement": -4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 39,
            "movement": 49
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 47,
            "movement": -9
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 67,
            "movement": -46
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 67,
            "movement": 45
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 89,
            "movement": -9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 89,
            "movement": -7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 96,
            "movement": -50
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 109,
            "movement": -13
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 137,
            "movement": 20
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 179,
            "movement": 7
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 193,
            "movement": -33
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 196,
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
            "position": 73,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 87,
            "movement": 5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 120,
            "movement": -12
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 126,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 164,
            "movement": 11
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 168,
            "movement": 7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 175,
            "movement": 5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 175,
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
            "position": 60,
            "movement": -3
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
            "position": 2,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 11,
            "movement": -7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 17,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 22,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 25,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 35,
            "movement": 2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 41,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 41,
            "movement": -11
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 48,
            "movement": -5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 52,
            "movement": 13
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 81,
            "movement": 62
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 86,
            "movement": -12
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 178,
            "movement": -154
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 181,
            "movement": 14
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
            "position": 41,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 74,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 79,
            "movement": -7
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 103,
            "movement": 1
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
            "position": 8,
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
            "position": 3,
            "movement": 31
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
            "position": 4,
            "movement": 15
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
            "movement": 8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 11,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 13,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 16,
            "movement": -1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 19,
            "movement": 8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 24,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 29,
            "movement": -12
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 30,
            "movement": -14
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 43,
            "movement": -7
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 45,
            "movement": -36
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 65,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 72,
            "movement": 3
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 81,
            "movement": 19
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 101,
            "movement": 4
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 105,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 125,
            "movement": -71
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 130,
            "movement": 42
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 168,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 190,
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
            "position": 5,
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
    "title": "Timeless",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 27,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 28,
            "movement": -10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 35,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 42,
            "movement": 13
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 68,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 69,
            "movement": -10
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 73,
            "movement": 48
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 74,
            "movement": 12
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 91,
            "movement": 79
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 97,
            "movement": 12
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 100,
            "movement": -27
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 111,
            "movement": 68
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 131,
            "movement": -63
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 157,
            "movement": -13
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 163,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 171,
            "movement": -37
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 181,
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
            "position": 34,
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
    "title": "UNAVAILABLE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 25,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 36,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 43,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 44,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 48,
            "movement": -22
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 80,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 85,
            "movement": 21
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 86,
            "movement": -15
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
            "position": 108,
            "movement": 21
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 112,
            "movement": -4
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 142,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 163,
            "movement": -98
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 177,
            "movement": -35
          }
        ]
      }
    ],
    "kind": "song",
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
            "country": "TD",
            "name": "Chad",
            "position": 35,
            "movement": -26
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 73,
            "movement": 44
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 107,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 176,
            "movement": -68
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 187,
            "movement": -107
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 193,
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
            "position": 19,
            "movement": -2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 81,
            "movement": -12
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 134,
            "movement": -95
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
            "position": 172,
            "movement": -1
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
            "position": 174,
            "movement": -2
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 46,
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
            "position": 14,
            "movement": 14
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 46,
            "movement": -28
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 50,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 56,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 84,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 87,
            "movement": 14
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 94,
            "movement": 22
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 129,
            "movement": -31
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 135,
            "movement": 24
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 135,
            "movement": -19
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 178,
            "movement": -6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 183,
            "movement": -124
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
            "country": "SB",
            "name": "Solomon Islands",
            "position": 70,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 89,
            "movement": 49
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 94,
            "movement": -67
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 97,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 107,
            "movement": 1
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 121,
            "movement": 31
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 157,
            "movement": 10
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 157,
            "movement": 14
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 169,
            "movement": 16
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 191,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 193,
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
            "movement": 3
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
            "position": 8,
            "movement": 25
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 24,
            "movement": -7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 47,
            "movement": -26
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 58,
            "movement": 14
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 89,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 134,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 177,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
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
            "position": 56,
            "movement": -1
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
            "position": 96,
            "movement": -2
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
    "title": "Already Falling",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 69,
            "movement": -10
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 84,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 85,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 140,
            "movement": 9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 185,
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
            "position": 25,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 95,
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
            "position": 108,
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
            "position": 78,
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
    "title": "A Better Time",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 41,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 86,
            "movement": 42
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 102,
            "movement": -7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 136,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 143,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 158,
            "movement": -7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 166,
            "movement": -27
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 174,
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
            "position": 133,
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
            "position": 193,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "album",
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
            "position": 29,
            "movement": 4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 113,
            "movement": -11
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 117,
            "movement": -26
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 131,
            "movement": -28
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 150,
            "movement": 24
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 171,
            "movement": -29
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 184,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 184,
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
            "position": 97,
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
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 60,
            "movement": -8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 70,
            "movement": 3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 73,
            "movement": 2
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 161,
            "movement": -65
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 174,
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
            "movement": -5
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
            "country": "LR",
            "name": "Liberia",
            "position": 43,
            "movement": -7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 46,
            "movement": -5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 48,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 76,
            "movement": -8
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 85,
            "movement": 15
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 92,
            "movement": 5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 184,
            "movement": -33
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
            "country": "KE",
            "name": "Kenya",
            "position": 62,
            "movement": -4
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 79,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 126,
            "movement": 5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 138,
            "movement": -38
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 192,
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
            "position": 18,
            "movement": 3
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 49,
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
    "title": "Blow My Mind",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 39,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 88,
            "movement": 7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 130,
            "movement": 17
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 153,
            "movement": -20
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 167,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 171,
            "movement": -37
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
            "position": 86,
            "movement": -2
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
            "country": "TZ",
            "name": "Tanzania",
            "position": 92,
            "movement": -20
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 97,
            "movement": 25
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 100,
            "movement": 10
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 126,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 145,
            "movement": -50
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 166,
            "movement": 25
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
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album",
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
            "country": "LR",
            "name": "Liberia",
            "position": 61,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 68,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 74,
            "movement": -6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 144,
            "movement": 8
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 169,
            "movement": -29
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 173,
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
    "title": "If",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 16,
            "movement": 3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 31,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 52,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 82,
            "movement": 2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 89,
            "movement": 2
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 93,
            "movement": -7
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/7de07d81ce22dcf5be4caa2b2b9faace/500x500-000000-80-0-0.jpg"
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
            "position": 54,
            "movement": 42
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 74,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 98,
            "movement": 28
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
            "position": 115,
            "movement": 22
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 153,
            "movement": 21
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
            "position": 22,
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
            "position": 16,
            "movement": 27
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 170,
            "movement": -47
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 27,
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
            "position": 47,
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
    "title": "Yaya",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FR",
            "name": "France",
            "position": 182,
            "movement": -132
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 13,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
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
            "position": 96,
            "movement": 4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 184,
            "movement": -1
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
            "position": 191,
            "movement": 6
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 195,
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
    "title": "Father",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 28,
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
            "movement": -15
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Maserati",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 33,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-21",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1713aad5a0a697ac1db7ce7b8a167c27/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Drift",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 30,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-22",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b9fd1fc1b331838b6b0ba9b2eacbf31e/500x500-000000-80-0-0.jpg"
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
            "position": 55,
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
    "title": "La La",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 173,
            "movement": 16
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
            "position": 191,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1d5dfc880396e953e316456a394d7353/500x500-000000-80-0-0.jpg"
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
            "position": 184,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-22",
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
            "movement": 1
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
  