// GENERATED FILE — do not edit by hand.
  // Rebuilt several times a day by scripts/build-live-charts.mjs --artist=rema from kworb's artist page.
  //
  // PLATFORM chart data for Rema: where each release is sitting RIGHT
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
  export const liveChartsUpdated = "2026-11-13";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-13T19:46Z";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","Spotify Albums","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "Secondhand",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 10,
            "movement": 3
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 26,
            "movement": 2
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 29,
            "movement": 11
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 30,
            "movement": -5
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 52,
            "movement": -7
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 59,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 61,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LA",
            "name": "Laos",
            "position": 80,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 89,
            "movement": 7
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 97,
            "movement": -38
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 101,
            "movement": -1
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 106,
            "movement": -37
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 126,
            "movement": 6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 128,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 133,
            "movement": 19
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 134,
            "movement": 2
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 136,
            "movement": -4
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 157,
            "movement": 7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 163,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 177,
            "movement": -31
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 183,
            "movement": -25
          },
          {
            "country": "MM",
            "name": "Myanmar",
            "position": 194,
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
            "country": "ID",
            "name": "Indonesia",
            "position": 9,
            "movement": 0
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 29,
            "movement": 5
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 46,
            "movement": 8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 47,
            "movement": 0
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 73,
            "movement": 14
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 112,
            "movement": -11
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 141,
            "movement": -4
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 141,
            "movement": 47
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 160,
            "movement": -7
          },
          {
            "country": "CN",
            "name": "China",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 193,
            "movement": -26
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 111,
            "movement": -16
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 167,
            "movement": 2
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 179,
            "movement": -25
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
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/123eb0268dfea84370a28c4a2114dc28/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Oh No",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 2,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 5,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 6,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 13,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 14,
            "movement": -2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 16,
            "movement": -9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 25,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 36,
            "movement": -3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 53,
            "movement": 16
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 58,
            "movement": 7
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 102,
            "movement": -13
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 109,
            "movement": 8
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 149,
            "movement": -22
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 168,
            "movement": -27
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 172,
            "movement": -58
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 173,
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
            "country": "UG",
            "name": "Uganda",
            "position": 7,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 8,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 17,
            "movement": 1
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 41,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 53,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 179,
            "movement": -3
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
            "position": 9,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 27,
            "movement": 12
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 28,
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
            "position": 6,
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
            "position": 197,
            "movement": -103
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
            "position": 36,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/fe3deba215d998d74542663a84621852/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Rave & Roses",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 44,
            "movement": -6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 58,
            "movement": 19
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 59,
            "movement": 41
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 59,
            "movement": 20
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 64,
            "movement": -26
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 83,
            "movement": -24
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 91,
            "movement": -12
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 118,
            "movement": -11
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 123,
            "movement": -29
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 127,
            "movement": -64
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 127,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 132,
            "movement": -48
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 157,
            "movement": 19
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 161,
            "movement": 2
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 179,
            "movement": -102
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1d4942d3e1817e9b723eceb6dae28636/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Who's Dat Girl",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 44,
            "movement": -8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 46,
            "movement": 32
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 56,
            "movement": 7
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 87,
            "movement": -22
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 118,
            "movement": 12
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 127,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 137,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 152,
            "movement": 22
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 175,
            "movement": 0
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 19,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 101,
            "movement": -72
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
            "position": 92,
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
            "country": "KE",
            "name": "Kenya",
            "position": 77,
            "movement": null,
            "status": "re"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/fe3deba215d998d74542663a84621852/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "TEA",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 36,
            "movement": -7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 40,
            "movement": 18
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 53,
            "movement": 7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 99,
            "movement": -16
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 110,
            "movement": 5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 159,
            "movement": -19
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 162,
            "movement": -44
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
            "position": 33,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 36,
            "movement": 1
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
            "position": 29,
            "movement": 4
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
            "position": 57,
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
            "position": 30,
            "movement": -7
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6ad6ca24531d374241de87ca5e3211ca/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Soweto",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "OM",
            "name": "Oman",
            "position": 70,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 108,
            "movement": 11
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 108,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 128,
            "movement": -50
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 137,
            "movement": -7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 142,
            "movement": -8
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 163,
            "movement": 14
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 165,
            "movement": 32
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 195,
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
            "country": "EG",
            "name": "Egypt",
            "position": 19,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a21fb655cf3e2fc8b05db68fc6eb34b1/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Best",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 15,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 17,
            "movement": -3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 28,
            "movement": 3
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 28,
            "movement": -4
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 43,
            "movement": -3
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 46,
            "movement": 19
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 52,
            "movement": 0
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 68,
            "movement": 16
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 140,
            "movement": -39
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5e376f766f35708db51b9c3295fef2ce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Soundgasm",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 58,
            "movement": -9
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 74,
            "movement": 32
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 83,
            "movement": -13
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 111,
            "movement": -4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 120,
            "movement": 6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 131,
            "movement": -36
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 141,
            "movement": 38
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 151,
            "movement": 13
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 170,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/813c9474be279f125aba17ccd6e2cea0/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Charm",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 36,
            "movement": 20
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 54,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 103,
            "movement": 36
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 119,
            "movement": -35
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 125,
            "movement": -6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 129,
            "movement": 9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 132,
            "movement": -18
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 150,
            "movement": -51
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1d4942d3e1817e9b723eceb6dae28636/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Calm Down",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 25,
            "movement": 5
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 45,
            "movement": 66
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 68,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 84,
            "movement": 0
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 50,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 140,
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
            "country": "CH",
            "name": "Switzerland",
            "position": 87,
            "movement": -22
          }
        ]
      },
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 93,
            "movement": null,
            "status": "re"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/07d4291391724a969f243406cc92be66/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Rema Compilation",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 76,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 77,
            "movement": 20
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 78,
            "movement": -4
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 119,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 129,
            "movement": -17
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 131,
            "movement": -16
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 147,
            "movement": -24
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
            "position": 67,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/47d4b2f030cf6387a1f36dde2ce29e9b/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ginger Me",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 80,
            "movement": -13
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 147,
            "movement": -11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 158,
            "movement": -17
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 171,
            "movement": -75
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 177,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 186,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 193,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1232dc64734f222e05a866a61860169c/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Wine",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 40,
            "movement": 10
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 43,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 54,
            "movement": 10
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 64,
            "movement": 12
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 106,
            "movement": 11
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
            "position": 15,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-30",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e43cc1d22a556fa87272c55c933bb4d7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Beamer",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 57,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 112,
            "movement": 18
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 126,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 179,
            "movement": 8
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 184,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 200,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3a0c90a8279dde44ce6b19d5d41875cd/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "HEIS",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 55,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 171,
            "movement": -38
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 193,
            "movement": -31
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
            "position": 52,
            "movement": 10
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4891a944de9418f059cabda0c7699160/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Baby",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BW",
            "name": "Botswana",
            "position": 52,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 191,
            "movement": -103
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
            "position": 184,
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
            "country": "LR",
            "name": "Liberia",
            "position": 104,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3208072ca7af2913cacf001dbb11bbec/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Woman",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 95,
            "movement": 9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 121,
            "movement": -21
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 185,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/47d4b2f030cf6387a1f36dde2ce29e9b/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "FUN",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 24,
            "movement": 4
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
            "position": 51,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c8e5156cfb208f46ca97fd26072becce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bounce",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 132,
            "movement": -30
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 174,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e26def467fccdcadca010b8c0f00fd0f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Holiday",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 168,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 177,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-12",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d4f61945703f34bba42311d1ec703f94/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Peace of Mind",
    "platforms": [
      {
        "platform": "iTunes",
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
    "firstSeen": "2026-11-13"
  },
  {
    "title": "NOW I KNOW",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 57,
            "movement": -9
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-07",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4891a944de9418f059cabda0c7699160/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Goals",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TH",
            "name": "Thailand",
            "position": 188,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-13"
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
            "position": 130,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-04",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e4c2c39678f951dd57f09d2e98cd4062/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Trouble Maker",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 157,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-12",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9f343b559a9382c0d35ba0c9eca79159/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "DND",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 188,
            "movement": 7
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-10",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9f343b559a9382c0d35ba0c9eca79159/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Rave & Roses Ultra",
    "platforms": [
      {
        "platform": "Spotify Albums",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 19,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1d4942d3e1817e9b723eceb6dae28636/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "RAVAGE - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 132,
            "movement": 14
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01"
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
  