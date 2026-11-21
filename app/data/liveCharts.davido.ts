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
  export const liveChartsUpdated = "2026-11-21";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-21T19:21Z";
  
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
            "position": 11,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 20,
            "movement": 4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 24,
            "movement": -4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 26,
            "movement": 19
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 28,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 33,
            "movement": 6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 35,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 43,
            "movement": 27
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 45,
            "movement": 6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 91,
            "movement": 13
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 138,
            "movement": -18
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 144,
            "movement": -39
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 145,
            "movement": 3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 180,
            "movement": -14
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 186,
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
            "position": 38,
            "movement": 7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 74,
            "movement": 9
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 103,
            "movement": -11
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 104,
            "movement": -7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 153,
            "movement": -16
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 179,
            "movement": -22
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 191,
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
            "position": 65,
            "movement": -11
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
            "position": 70,
            "movement": -22
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
            "position": 79,
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
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 2,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 6,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 6,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 10,
            "movement": 3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 12,
            "movement": -7
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 19,
            "movement": 122
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 25,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 34,
            "movement": -5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 35,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 38,
            "movement": -7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 48,
            "movement": 7
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 66,
            "movement": -25
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 77,
            "movement": -6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 82,
            "movement": 2
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 140,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 182,
            "movement": -105
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
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
            "position": 41,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 143,
            "movement": -6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 163,
            "movement": -9
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 198,
            "movement": -26
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
            "position": 12,
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
            "position": 107,
            "movement": -101
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
            "position": 61,
            "movement": -33
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
            "country": "UG",
            "name": "Uganda",
            "position": 13,
            "movement": 12
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 31,
            "movement": -12
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 32,
            "movement": -8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 34,
            "movement": 8
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 37,
            "movement": 31
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 45,
            "movement": -17
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 50,
            "movement": 1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 52,
            "movement": 32
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 57,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 65,
            "movement": 37
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 69,
            "movement": 39
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 77,
            "movement": 36
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 80,
            "movement": -52
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 80,
            "movement": 7
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 91,
            "movement": 20
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 125,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 126,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 152,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 169,
            "movement": -96
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 175,
            "movement": -19
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 186,
            "movement": -46
          },
          {
            "country": "SC",
            "name": "Seychelles",
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
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 9,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 9,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 13,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 18,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 19,
            "movement": 13
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 22,
            "movement": 11
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 38,
            "movement": 8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 39,
            "movement": 6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 66,
            "movement": -9
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 69,
            "movement": -7
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 80,
            "movement": -9
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 90,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 92,
            "movement": -9
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 113,
            "movement": -13
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 137,
            "movement": 8
          },
          {
            "country": "AO",
            "name": "Angola",
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
    "title": "UNAVAILABLE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 24,
            "movement": 14
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 32,
            "movement": 8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 35,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 51,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 52,
            "movement": 10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 53,
            "movement": -12
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 75,
            "movement": 9
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 83,
            "movement": 4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 84,
            "movement": -27
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 101,
            "movement": 10
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 121,
            "movement": 0
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 171,
            "movement": -1
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 200,
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
            "position": 3,
            "movement": -1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 16,
            "movement": 11
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 16,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 47,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 132,
            "movement": -14
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
            "position": 6,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 48,
            "movement": 7
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 58,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 77,
            "movement": 6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 168,
            "movement": 31
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
            "position": 23,
            "movement": 27
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 79,
            "movement": -7
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 90,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 90,
            "movement": -11
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 126,
            "movement": 60
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 132,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 145,
            "movement": -16
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 157,
            "movement": -5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 181,
            "movement": -76
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 197,
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
            "position": 107,
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
    "title": "A Good Time",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 59,
            "movement": -8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 67,
            "movement": 24
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 89,
            "movement": 20
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 90,
            "movement": 29
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 109,
            "movement": 58
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 133,
            "movement": -57
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 155,
            "movement": 23
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 158,
            "movement": 42
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 168,
            "movement": 24
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 173,
            "movement": 6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 177,
            "movement": 5
          },
          {
            "country": "NE",
            "name": "Niger",
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
    "title": "Already Falling",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 38,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 43,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 51,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 56,
            "movement": 3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 82,
            "movement": 105
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 117,
            "movement": 17
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 155,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 170,
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
            "position": 120,
            "movement": -13
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
            "position": 173,
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
            "country": "LR",
            "name": "Liberia",
            "position": 18,
            "movement": 7
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 27,
            "movement": 6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 47,
            "movement": 3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 135,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 137,
            "movement": 2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 139,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 148,
            "movement": -19
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 176,
            "movement": -72
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
            "position": 89,
            "movement": -5
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
            "position": 22,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 36,
            "movement": 16
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 43,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 48,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 90,
            "movement": 4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 100,
            "movement": -57
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 124,
            "movement": -23
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 127,
            "movement": 28
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 161,
            "movement": -60
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 182,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 194,
            "movement": -10
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 82,
            "movement": -9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 85,
            "movement": 10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 122,
            "movement": 71
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 126,
            "movement": -44
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 187,
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
            "position": 113,
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
            "position": 9,
            "movement": 178
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
            "position": 184,
            "movement": 7
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/08304eb172098540c635de98530d4929/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Fall",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 11,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 35,
            "movement": 8
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 74,
            "movement": -14
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 86,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 185,
            "movement": 9
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 13,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 66,
            "movement": 6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 101,
            "movement": -12
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 187,
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
            "country": "HR",
            "name": "Croatia",
            "position": 27,
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
    "title": "5ive",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 40,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 96,
            "movement": 52
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 101,
            "movement": 22
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 120,
            "movement": -55
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 128,
            "movement": 72
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 140,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 181,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 183,
            "movement": -22
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 186,
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
    "title": "A Better Time",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 39,
            "movement": 7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 57,
            "movement": 55
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 93,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 116,
            "movement": 9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 128,
            "movement": 3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 167,
            "movement": -14
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 171,
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
            "country": "MW",
            "name": "Malawi",
            "position": 33,
            "movement": 24
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 40,
            "movement": 6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 45,
            "movement": -7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 81,
            "movement": 17
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 93,
            "movement": 47
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 133,
            "movement": 45
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 160,
            "movement": 20
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 171,
            "movement": -27
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 65,
            "movement": 16
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 79,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 106,
            "movement": 27
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 129,
            "movement": -14
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 147,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 168,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 197,
            "movement": -3
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
            "position": 128,
            "movement": -109
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
            "position": 71,
            "movement": -11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 81,
            "movement": 9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 84,
            "movement": -14
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 99,
            "movement": 43
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 107,
            "movement": -76
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 158,
            "movement": 15
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 183,
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
            "position": 9,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 27,
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 28,
            "movement": 1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 71,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 77,
            "movement": -14
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 174,
            "movement": 7
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
            "position": 118,
            "movement": -17
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/7de07d81ce22dcf5be4caa2b2b9faace/500x500-000000-80-0-0.jpg"
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
            "position": 72,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 110,
            "movement": -42
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 137,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 180,
            "movement": -13
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 194,
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
    "title": "2am in toronto",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 37,
            "movement": -13
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 90,
            "movement": -14
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 143,
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
            "position": 52,
            "movement": -7
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
            "position": 82,
            "movement": 8
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3772d04a24caee42fd8a775d36258848/500x500-000000-80-0-0.jpg"
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
            "movement": 6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 179,
            "movement": 10
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 190,
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
    "title": "Ogechi",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 80,
            "movement": -39
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 166,
            "movement": -48
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 173,
            "movement": -87
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
            "position": 155,
            "movement": -41
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-12",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d1cb8dda2d94d5ce2aa912b162eedfe0/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Assurance",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 35,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 82,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 154,
            "movement": -23
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
            "country": "LR",
            "name": "Liberia",
            "position": 88,
            "movement": -17
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 93,
            "movement": -5
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 98,
            "movement": -82
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 115,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-19",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "AWAY",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 108,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 116,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-21",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Gimme Dat Ting",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 150,
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
            "position": 41,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-21",
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
            "country": "TZ",
            "name": "Tanzania",
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
            "country": "UG",
            "name": "Uganda",
            "position": 55,
            "movement": -9
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-07",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
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
            "position": 186,
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
            "position": 120,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-12",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9119c622011c2f9e2c0fd2ae9bcaec51/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Stand Strong",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 74,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-21",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b19dde3eb91732404d09c18e8bb07d13/500x500-000000-80-0-0.jpg"
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
            "position": 111,
            "movement": -33
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
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
            "position": 51,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d50e6c1e1ff65a58b2ae4051876d7e7e/500x500-000000-80-0-0.jpg"
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
            "position": 123,
            "movement": -15
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
    "title": "High",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 146,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/08304eb172098540c635de98530d4929/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Maserati",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 24,
            "movement": -20
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1713aad5a0a697ac1db7ce7b8a167c27/500x500-000000-80-0-0.jpg"
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
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-21",
    "cover": "https://cdn-images.dzcdn.net/images/cover/23726f80ac87dcce3846c3b638cba30d/500x500-000000-80-0-0.jpg"
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
            "position": 122,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-15",
    "cover": "https://cdn-images.dzcdn.net/images/cover/603c1798522c1b9fae27290d2e877f3f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Gobe",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 131,
            "movement": -108
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d7997ace25abd1a5cf1a8ae8d541a52a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Gbagbe Oshi",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 137,
            "movement": -109
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/50d12a3358fb88c810b8c9231ced0cd6/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Spend Dat",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 80,
            "movement": -30
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/eeedaecd7be328ebce48a16701042891/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "1 Milli",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 138,
            "movement": -109
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b9fd1fc1b331838b6b0ba9b2eacbf31e/500x500-000000-80-0-0.jpg"
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
            "position": 166,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-21",
    "cover": "https://cdn-images.dzcdn.net/images/cover/329ae36eecf839ca2e82a46203a10cbc/500x500-000000-80-0-0.jpg"
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
            "position": 181,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-21",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1d5dfc880396e953e316456a394d7353/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Shopping Spree",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 162,
            "movement": -119
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Dada",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 143,
            "movement": -111
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-20",
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
  