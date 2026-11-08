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
  export const liveChartsUpdated = "2026-11-08";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-08T06:07Z";
  
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
            "country": "BH",
            "name": "Bahrain",
            "position": 26,
            "movement": -9
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 26,
            "movement": -1
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 31,
            "movement": -17
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 52,
            "movement": -20
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 52,
            "movement": -5
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 56,
            "movement": -4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 72,
            "movement": 30
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 119,
            "movement": -45
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 122,
            "movement": -43
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 124,
            "movement": -3
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 126,
            "movement": -47
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 133,
            "movement": -22
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 137,
            "movement": -2
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 141,
            "movement": -48
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 142,
            "movement": 11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 143,
            "movement": -20
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 184,
            "movement": -31
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 186,
            "movement": -6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 188,
            "movement": -65
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 190,
            "movement": -60
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 191,
            "movement": -78
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
            "position": 21,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 52,
            "movement": 13
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 80,
            "movement": 15
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 92,
            "movement": 11
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 115,
            "movement": 5
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 132,
            "movement": 4
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 134,
            "movement": 8
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 135,
            "movement": 42
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 150,
            "movement": 33
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 178,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 197,
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
            "country": "CH",
            "name": "Switzerland",
            "position": 76,
            "movement": -13
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 164,
            "movement": -2
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 164,
            "movement": 5
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 177,
            "movement": -16
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 177,
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
            "position": 4,
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
        "numberOnes": 1,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 1,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 5,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 9,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 12,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 15,
            "movement": -3
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 24,
            "movement": -7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 32,
            "movement": 2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 34,
            "movement": -9
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 43,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 65,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 77,
            "movement": 63
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 79,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 109,
            "movement": 16
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 110,
            "movement": 11
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 146,
            "movement": -41
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 151,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 193,
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
            "position": 6,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 9,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 17,
            "movement": 4
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 41,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 44,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 121,
            "movement": -4
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 200,
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
            "country": "KE",
            "name": "Kenya",
            "position": 37,
            "movement": 25
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 39,
            "movement": 3
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
            "position": 7,
            "movement": 15
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 26,
            "movement": 22
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 42,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 54,
            "movement": 23
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 73,
            "movement": 6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 83,
            "movement": 28
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 90,
            "movement": -14
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 102,
            "movement": -4
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 114,
            "movement": 19
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 121,
            "movement": -90
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 126,
            "movement": 34
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 128,
            "movement": -15
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 129,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 136,
            "movement": 36
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 146,
            "movement": 7
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 171,
            "movement": -109
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 181,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 192,
            "movement": -39
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1d4942d3e1817e9b723eceb6dae28636/500x500-000000-80-0-0.jpg"
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
            "position": 38,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 39,
            "movement": 12
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 99,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 129,
            "movement": 4
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 135,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 137,
            "movement": 48
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 145,
            "movement": 5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 146,
            "movement": 8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 170,
            "movement": -21
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 171,
            "movement": 14
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 178,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 181,
            "movement": -64
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 184,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 192,
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
    "title": "TEA",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 28,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 51,
            "movement": -6
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 55,
            "movement": -18
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 91,
            "movement": -28
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 109,
            "movement": -19
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 131,
            "movement": 25
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 145,
            "movement": 20
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 148,
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
            "position": 37,
            "movement": 4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 41,
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
            "position": 23,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 78,
            "movement": 19
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
            "movement": -1
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
            "position": 17,
            "movement": 34
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 70,
            "movement": 75
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 72,
            "movement": 3
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 88,
            "movement": 20
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 92,
            "movement": 6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 96,
            "movement": -1
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 135,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 140,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 148,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 155,
            "movement": 36
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 199,
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
    "title": "Rema Compilation",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 63,
            "movement": 15
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 75,
            "movement": 57
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 78,
            "movement": -40
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 81,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 81,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 107,
            "movement": -20
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 117,
            "movement": 8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 128,
            "movement": -24
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 148,
            "movement": 50
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 185,
            "movement": -4
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
    "title": "Who's Dat Girl",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 31,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 36,
            "movement": 10
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 58,
            "movement": -7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 76,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 81,
            "movement": 24
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 97,
            "movement": 55
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 110,
            "movement": 77
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 118,
            "movement": -10
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 190,
            "movement": -111
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
            "position": 18,
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
    "title": "Soundgasm",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 41,
            "movement": 6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 66,
            "movement": 16
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 79,
            "movement": 15
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 115,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 120,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 127,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 128,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 144,
            "movement": -15
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 176,
            "movement": -6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 192,
            "movement": 0
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
            "position": 12,
            "movement": 1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 13,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 22,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 35,
            "movement": -18
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 42,
            "movement": -1
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 44,
            "movement": -8
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 48,
            "movement": 118
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 73,
            "movement": -5
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 166,
            "movement": -31
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5e376f766f35708db51b9c3295fef2ce/500x500-000000-80-0-0.jpg"
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
            "position": 62,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 143,
            "movement": -16
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 189,
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
            "country": "IT",
            "name": "Italy",
            "position": 82,
            "movement": null,
            "status": "new"
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 84,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 97,
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
            "position": 30,
            "movement": 2
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 68,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/07d4291391724a969f243406cc92be66/500x500-000000-80-0-0.jpg"
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
            "position": 36,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 74,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 94,
            "movement": 8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 106,
            "movement": -5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 115,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 138,
            "movement": 16
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 157,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1232dc64734f222e05a866a61860169c/500x500-000000-80-0-0.jpg"
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
            "position": 43,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 108,
            "movement": -64
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 120,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 186,
            "movement": -25
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
    "title": "Beamer",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 47,
            "movement": -7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 96,
            "movement": 22
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 128,
            "movement": 10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 130,
            "movement": 4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 186,
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
    "title": "Bounce",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 94,
            "movement": 95
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 95,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 106,
            "movement": 11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 191,
            "movement": -9
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e26def467fccdcadca010b8c0f00fd0f/500x500-000000-80-0-0.jpg"
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
            "position": 101,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 117,
            "movement": 39
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 164,
            "movement": -16
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 198,
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
    "title": "Baby",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 171,
            "movement": -59
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
            "position": 39,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3208072ca7af2913cacf001dbb11bbec/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Wine",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 107,
            "movement": 19
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 143,
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
    "title": "Dumebi",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 194,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-07",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e01c854fc22ac6a5c685a89bd686d36d/500x500-000000-80-0-0.jpg"
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
            "position": 35,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c8e5156cfb208f46ca97fd26072becce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ballerina",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BZ",
            "name": "Belize",
            "position": 19,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-29",
    "cover": "https://cdn-images.dzcdn.net/images/cover/cacc033009d32a006d32029e5a95d197/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bout U",
    "platforms": [
      {
        "platform": "iTunes",
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
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-07",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6d2d72d718d4ad08f355e40b0ec94a33/500x500-000000-80-0-0.jpg"
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
            "position": 110,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-07",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4891a944de9418f059cabda0c7699160/500x500-000000-80-0-0.jpg"
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
            "position": 24,
            "movement": null,
            "status": "new"
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
            "position": 157,
            "movement": -11
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-27",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9f343b559a9382c0d35ba0c9eca79159/500x500-000000-80-0-0.jpg"
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
            "position": 199,
            "movement": -68
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-03",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9f343b559a9382c0d35ba0c9eca79159/500x500-000000-80-0-0.jpg"
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
            "position": 175,
            "movement": -27
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-04",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e4c2c39678f951dd57f09d2e98cd4062/500x500-000000-80-0-0.jpg"
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
            "position": 144,
            "movement": 12
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
  