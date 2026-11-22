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
  export const liveChartsUpdated = "2026-11-22";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-22T19:45Z";
  
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
            "country": "NE",
            "name": "Niger",
            "position": 10,
            "movement": 14
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 15,
            "movement": -4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 20,
            "movement": 7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 22,
            "movement": 6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 24,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 31,
            "movement": 2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 34,
            "movement": -6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 45,
            "movement": 6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 46,
            "movement": -11
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
            "position": 121,
            "movement": 17
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 142,
            "movement": 43
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 159,
            "movement": -14
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
            "position": 197,
            "movement": -11
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
            "position": 40,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 62,
            "movement": 12
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 103,
            "movement": 1
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 106,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 172,
            "movement": 7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 172,
            "movement": -19
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 181,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 184,
            "movement": 7
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
            "position": 59,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 94,
            "movement": -15
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
            "position": 50,
            "movement": 15
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
            "position": 78,
            "movement": -8
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
            "country": "GM",
            "name": "Gambia",
            "position": 3,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 3,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 5,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 7,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 10,
            "movement": 3
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
            "position": 29,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 33,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 43,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 48,
            "movement": 7
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 52,
            "movement": -17
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 68,
            "movement": -2
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
            "position": 92,
            "movement": -10
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
            "position": 42,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 147,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 170,
            "movement": -7
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 197,
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
            "movement": 6
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
            "position": 23,
            "movement": 38
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
            "position": 14,
            "movement": -1
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 18,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 24,
            "movement": 8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 36,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 48,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 54,
            "movement": -14
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 61,
            "movement": -9
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 62,
            "movement": -31
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 74,
            "movement": 6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 92,
            "movement": -15
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 94,
            "movement": -14
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 98,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 100,
            "movement": -31
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 106,
            "movement": 46
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 117,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 123,
            "movement": -86
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 142,
            "movement": -14
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 164,
            "movement": 11
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 192,
            "movement": -67
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 193,
            "movement": 0
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
            "position": 5,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 12,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 12,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 15,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 20,
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 31,
            "movement": 38
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 31,
            "movement": -9
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 35,
            "movement": -23
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 48,
            "movement": -10
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 53,
            "movement": -34
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 70,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 77,
            "movement": -37
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 78,
            "movement": 14
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 121,
            "movement": -8
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 135,
            "movement": -45
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 157,
            "movement": -20
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 172,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
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
            "country": "CI",
            "name": "Côte d'Ivoire",
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
            "country": "NE",
            "name": "Niger",
            "position": 2,
            "movement": 1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 8,
            "movement": 2
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
            "country": "MR",
            "name": "Mauritania",
            "position": 48,
            "movement": 80
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 94,
            "movement": 21
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 154,
            "movement": -31
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
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 36,
            "movement": 12
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 56,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 70,
            "movement": 7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 154,
            "movement": 14
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
            "position": 180,
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
    "title": "UNAVAILABLE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 16,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 42,
            "movement": -10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 47,
            "movement": 6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 48,
            "movement": -13
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 48,
            "movement": 3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 55,
            "movement": 10
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 58,
            "movement": -6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 65,
            "movement": -24
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 71,
            "movement": 7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 75,
            "movement": 9
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
            "country": "NA",
            "name": "Namibia",
            "position": 157,
            "movement": 14
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 200,
            "movement": null,
            "status": "new"
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
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 73,
            "movement": 6
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
            "position": 101,
            "movement": -11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 135,
            "movement": 12
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 144,
            "movement": 1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 159,
            "movement": 38
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 173,
            "movement": -16
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 177,
            "movement": -45
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 180,
            "movement": -59
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
            "position": 10,
            "movement": null,
            "status": "new"
          },
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
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 76,
            "movement": 31
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
    "title": "Holy Ground",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 18,
            "movement": 4
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 28,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 32,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 44,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 46,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 90,
            "movement": 4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 98,
            "movement": 7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 98,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 119,
            "movement": 8
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 157,
            "movement": -59
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
          },
          {
            "country": "NA",
            "name": "Namibia",
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
    "title": "A Good Time",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 72,
            "movement": -5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 92,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 93,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 94,
            "movement": -35
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 100,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 110,
            "movement": -21
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 130,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 138,
            "movement": -32
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 141,
            "movement": 35
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 142,
            "movement": 13
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 151,
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 43,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 44,
            "movement": -6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 55,
            "movement": 46
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 68,
            "movement": -12
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 79,
            "movement": -23
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 155,
            "movement": -3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 168,
            "movement": -51
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
            "position": 83,
            "movement": 38
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
            "position": 168,
            "movement": 5
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
    "title": "A Better Time",
    "platforms": [
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
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 43,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 89,
            "movement": 48
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 96,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 100,
            "movement": -43
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 117,
            "movement": 11
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 154,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 175,
            "movement": -59
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 192,
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
            "position": 88,
            "movement": -5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 94,
            "movement": 32
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 139,
            "movement": -17
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 164,
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
            "position": 96,
            "movement": 30
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
            "position": 169,
            "movement": 15
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
            "position": 64,
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
    "title": "I Know Who I Be",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 17,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 26,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 39,
            "movement": 8
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 105,
            "movement": 19
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 130,
            "movement": 18
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
            "position": 155,
            "movement": -21
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 185,
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
            "position": 91,
            "movement": 22
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
    "title": "Fall",
    "platforms": [
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
            "position": 59,
            "movement": 7
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 88,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 97,
            "movement": -3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 130,
            "movement": -42
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
            "position": 11,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 36,
            "movement": -1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 72,
            "movement": 2
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 92,
            "movement": -6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 189,
            "movement": -5
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
            "position": 58,
            "movement": -18
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 63,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 81,
            "movement": -14
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
            "position": 121,
            "movement": -20
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 153,
            "movement": -13
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 154,
            "movement": -26
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 169,
            "movement": -49
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 176,
            "movement": 10
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 26,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 27,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 75,
            "movement": 2
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 77,
            "movement": -6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 180,
            "movement": -6
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
            "position": 111,
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
            "position": 129,
            "movement": -11
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
            "country": "UG",
            "name": "Uganda",
            "position": 40,
            "movement": 5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 43,
            "movement": -3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 74,
            "movement": -35
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 89,
            "movement": -8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 133,
            "movement": 45
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 136,
            "movement": 4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 160,
            "movement": 20
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
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 20,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 75,
            "movement": -10
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 87,
            "movement": -8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 121,
            "movement": -7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 126,
            "movement": 21
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 197,
            "movement": -3
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
            "position": 67,
            "movement": 17
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 101,
            "movement": -30
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 103,
            "movement": -22
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
            "position": 185,
            "movement": 7
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 199,
            "movement": -50
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
            "position": 31,
            "movement": 6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 100,
            "movement": 43
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 116,
            "movement": -26
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
            "movement": 9
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
    "title": "Sensational",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 60,
            "movement": 50
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 149,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 153,
            "movement": 30
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 169,
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
            "position": 35,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 184,
            "movement": -5
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
    "title": "Assurance",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 34,
            "movement": 48
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 35,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 108,
            "movement": 92
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
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 39,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 92,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 167,
            "movement": -79
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/594be4990d2be6af325a4a0825960a9a/500x500-000000-80-0-0.jpg"
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
            "position": 190,
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
            "position": 20,
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
            "position": 125,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-12",
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
            "position": 182,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 197,
            "movement": -47
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
            "position": 182,
            "movement": -141
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-21",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
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
            "position": 135,
            "movement": 3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 162,
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
            "country": "TZ",
            "name": "Tanzania",
            "position": 96,
            "movement": -16
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
            "position": 54,
            "movement": 44
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
    "title": "Jowo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 141,
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
            "position": 62,
            "movement": -7
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-07",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "IN THE GARDEN",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 43,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-22"
  },
  {
    "title": "Fade",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 44,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-22"
  },
  {
    "title": "Somebody Baby",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 47,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-22"
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
            "position": 10,
            "movement": 121
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d7997ace25abd1a5cf1a8ae8d541a52a/500x500-000000-80-0-0.jpg"
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
            "position": 77,
            "movement": 34
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
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
            "position": 12,
            "movement": 126
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-22"
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
            "position": 88,
            "movement": -14
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-21",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b19dde3eb91732404d09c18e8bb07d13/500x500-000000-80-0-0.jpg"
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
            "position": 23,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-22"
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
            "position": 35,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-22"
  },
  {
    "title": "Something Fishy",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 39,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-22"
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
            "movement": 8
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "AWAY",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
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
    "title": "FOR THE ROAD",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 49,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-22"
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
    "title": "Tchelete",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 132,
            "movement": -10
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-15",
    "cover": "https://cdn-images.dzcdn.net/images/cover/603c1798522c1b9fae27290d2e877f3f/500x500-000000-80-0-0.jpg"
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
            "position": 176,
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
            "position": 67,
            "movement": -43
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1713aad5a0a697ac1db7ce7b8a167c27/500x500-000000-80-0-0.jpg"
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
            "position": 135,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-22",
    "cover": "https://cdn-images.dzcdn.net/images/cover/fa0e3368a8a8e80b32fe88a276b9e759/500x500-000000-80-0-0.jpg"
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
  