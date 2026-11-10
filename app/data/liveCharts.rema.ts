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
  export const liveChartsUpdated = "2026-11-10";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-10T19:47Z";
  
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
            "position": 16,
            "movement": 5
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 24,
            "movement": 2
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 24,
            "movement": -2
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 48,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 64,
            "movement": 3
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 70,
            "movement": -12
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 87,
            "movement": -73
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 91,
            "movement": 3
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 95,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 108,
            "movement": -18
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 113,
            "movement": 76
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 120,
            "movement": 24
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 134,
            "movement": -2
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 138,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 139,
            "movement": 15
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 150,
            "movement": 39
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 157,
            "movement": 10
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 159,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 160,
            "movement": 11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 176,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 197,
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
            "position": 12,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 42,
            "movement": -2
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 47,
            "movement": 14
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 77,
            "movement": 70
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 95,
            "movement": 0
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 99,
            "movement": -14
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 103,
            "movement": -6
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 122,
            "movement": -15
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 141,
            "movement": -11
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 145,
            "movement": -21
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 146,
            "movement": null,
            "status": "new"
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 177,
            "movement": 2
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 184,
            "movement": -30
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 188,
            "movement": -17
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
            "position": 86,
            "movement": 60
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 123,
            "movement": -29
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 158,
            "movement": 15
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 172,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 179,
            "movement": 8
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
            "position": 8,
            "movement": -2
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
        "numberOnes": 1,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 1,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 6,
            "movement": 3
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 6,
            "movement": -5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 9,
            "movement": 5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 11,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 13,
            "movement": -3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 30,
            "movement": -24
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 35,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 36,
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 58,
            "movement": -17
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 82,
            "movement": -20
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 96,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 112,
            "movement": -1
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 115,
            "movement": -44
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 118,
            "movement": -8
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 146,
            "movement": -28
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 186,
            "movement": 14
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
            "position": 7,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 8,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 14,
            "movement": 1
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 42,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 51,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 151,
            "movement": -4
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 161,
            "movement": 0
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
            "position": 8,
            "movement": 0
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
            "country": "LR",
            "name": "Liberia",
            "position": 41,
            "movement": -11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 44,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 55,
            "movement": 9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 73,
            "movement": 10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 74,
            "movement": -7
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 85,
            "movement": 8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 87,
            "movement": -23
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 123,
            "movement": -11
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 128,
            "movement": -24
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 133,
            "movement": 40
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 144,
            "movement": 9
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 156,
            "movement": -24
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 173,
            "movement": -35
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 184,
            "movement": -70
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 200,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1d4942d3e1817e9b723eceb6dae28636/500x500-000000-80-0-0.jpg"
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
            "position": 30,
            "movement": -4
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 32,
            "movement": 41
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 56,
            "movement": 9
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 62,
            "movement": -12
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 122,
            "movement": -19
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 124,
            "movement": -20
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 147,
            "movement": -3
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
            "position": 37,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 41,
            "movement": -1
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
            "position": 31,
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
            "position": 59,
            "movement": -21
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
    "title": "Charm",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 50,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 54,
            "movement": -11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 113,
            "movement": 27
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 114,
            "movement": 17
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 128,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 145,
            "movement": 36
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 148,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 158,
            "movement": -119
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 173,
            "movement": -26
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 178,
            "movement": -45
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 186,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1d4942d3e1817e9b723eceb6dae28636/500x500-000000-80-0-0.jpg"
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
            "position": 68,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 90,
            "movement": 21
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 96,
            "movement": -24
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 99,
            "movement": 2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 125,
            "movement": -45
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 134,
            "movement": 0
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 135,
            "movement": -38
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 138,
            "movement": -31
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 143,
            "movement": -36
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 155,
            "movement": 41
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 169,
            "movement": -37
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 178,
            "movement": -23
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a21fb655cf3e2fc8b05db68fc6eb34b1/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Who's Dat Girl",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 39,
            "movement": 37
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 39,
            "movement": -7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 57,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 57,
            "movement": -9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 62,
            "movement": 10
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 82,
            "movement": -18
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 115,
            "movement": -29
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 118,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 132,
            "movement": -42
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 159,
            "movement": -44
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
    "title": "Rema Compilation",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 72,
            "movement": 28
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 79,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 97,
            "movement": -20
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 103,
            "movement": -41
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 117,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 122,
            "movement": 58
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 123,
            "movement": -6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 135,
            "movement": -22
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 157,
            "movement": -41
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 159,
            "movement": -67
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
            "position": 68,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/47d4b2f030cf6387a1f36dde2ce29e9b/500x500-000000-80-0-0.jpg"
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
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 71,
            "movement": 17
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 80,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 103,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 110,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 126,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 151,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 152,
            "movement": 42
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 172,
            "movement": -20
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 195,
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
    "title": "Best",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 14,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 20,
            "movement": -6
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 27,
            "movement": 15
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 29,
            "movement": -6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 37,
            "movement": 6
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 38,
            "movement": 16
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 55,
            "movement": -7
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 132,
            "movement": -14
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5e376f766f35708db51b9c3295fef2ce/500x500-000000-80-0-0.jpg"
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
            "position": 51,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 66,
            "movement": -36
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 84,
            "movement": 4
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 115,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 175,
            "movement": 13
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 181,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
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
            "position": 62,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4891a944de9418f059cabda0c7699160/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ginger Me",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 56,
            "movement": 22
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 85,
            "movement": 77
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 87,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 103,
            "movement": -18
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 149,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 168,
            "movement": -13
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 39,
            "movement": -20
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1232dc64734f222e05a866a61860169c/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Calm Down",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 106,
            "movement": -88
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 155,
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
            "country": "AU",
            "name": "Australia",
            "position": 30,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 61,
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
            "position": 33,
            "movement": -5
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
    "title": "Wine",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 76,
            "movement": 21
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 76,
            "movement": 14
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 118,
            "movement": 15
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
            "position": 77,
            "movement": 39
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 142,
            "movement": 55
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-30",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e43cc1d22a556fa87272c55c933bb4d7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Woman",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 57,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 110,
            "movement": -8
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 136,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 182,
            "movement": -57
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 188,
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
    "title": "Bounce",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 140,
            "movement": -43
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 144,
            "movement": -46
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 184,
            "movement": 8
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 186,
            "movement": -41
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 194,
            "movement": -7
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e26def467fccdcadca010b8c0f00fd0f/500x500-000000-80-0-0.jpg"
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
            "position": 43,
            "movement": -7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 129,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 182,
            "movement": 16
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 194,
            "movement": -29
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3a0c90a8279dde44ce6b19d5d41875cd/500x500-000000-80-0-0.jpg"
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
            "position": 37,
            "movement": 0
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 138,
            "movement": 51
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
            "movement": -49
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c8e5156cfb208f46ca97fd26072becce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Baby",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 6,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 45,
            "movement": -1
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 192,
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
    "title": "RAVAGE - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 163,
            "movement": -14
          },
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
    "kind": "album",
    "firstSeen": "2026-01-01"
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
            "position": 58,
            "movement": 17
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-07",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4891a944de9418f059cabda0c7699160/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Dumebi",
    "platforms": [
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
    "firstSeen": "2026-11-10",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e01c854fc22ac6a5c685a89bd686d36d/500x500-000000-80-0-0.jpg"
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
    "firstSeen": "2026-11-04",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e4c2c39678f951dd57f09d2e98cd4062/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Holiday",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 139,
            "movement": 33
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-08",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d4f61945703f34bba42311d1ec703f94/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Dimension",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MT",
            "name": "Malta",
            "position": 49,
            "movement": -12
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-07",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1a396a54bf82fb0a7cc1eb27daaf3eea/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "DND",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 192,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-10",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9f343b559a9382c0d35ba0c9eca79159/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "American Love",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 144,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-09",
    "cover": "https://cdn-images.dzcdn.net/images/cover/933233acfe76868af75bef186c53ac77/500x500-000000-80-0-0.jpg"
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
            "movement": 2
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1d4942d3e1817e9b723eceb6dae28636/500x500-000000-80-0-0.jpg"
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
  