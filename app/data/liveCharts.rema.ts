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
  export const liveChartsUpdated = "2026-10-27";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-27T18:07Z";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","Spotify Albums","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 9,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 11,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 12,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 13,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 20,
            "movement": -6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 36,
            "movement": 2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 45,
            "movement": 9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 58,
            "movement": -14
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 64,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 66,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 114,
            "movement": -14
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 117,
            "movement": 0
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 118,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 126,
            "movement": 2
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 149,
            "movement": 31
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 152,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 168,
            "movement": -52
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
            "position": 10,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 13,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 15,
            "movement": 0
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 33,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 38,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 111,
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
            "position": 9,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 42,
            "movement": 11
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 62,
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
            "position": 7,
            "movement": -2
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
            "position": 26,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/fe3deba215d998d74542663a84621852/500x500-000000-80-0-0.jpg"
  },
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
            "position": 13,
            "movement": 10
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 24,
            "movement": 3
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 25,
            "movement": 0
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 33,
            "movement": 0
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 34,
            "movement": 21
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 64,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 91,
            "movement": 9
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 156,
            "movement": 0
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 165,
            "movement": 0
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 185,
            "movement": -23
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 187,
            "movement": 0
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
            "position": 117,
            "movement": -14
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 194,
            "movement": -8
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
            "position": 149,
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
            "country": "MA",
            "name": "Morocco",
            "position": 24,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/123eb0268dfea84370a28c4a2114dc28/500x500-000000-80-0-0.jpg"
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
            "position": 19,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 52,
            "movement": -17
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 62,
            "movement": -26
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 67,
            "movement": 6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 71,
            "movement": 10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 143,
            "movement": 2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 160,
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
            "position": 31,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 43,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 180,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 189,
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
            "position": 23,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 97,
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
            "position": 34,
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
            "country": "KE",
            "name": "Kenya",
            "position": 79,
            "movement": 12
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 86,
            "movement": 36
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 94,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 95,
            "movement": -14
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 117,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 121,
            "movement": 0
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 129,
            "movement": -22
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 135,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 139,
            "movement": 7
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 166,
            "movement": 0
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 186,
            "movement": 6
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 191,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 197,
            "movement": -117
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a21fb655cf3e2fc8b05db68fc6eb34b1/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Rave & Roses",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 27,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 39,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 43,
            "movement": 48
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 76,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 79,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 81,
            "movement": 10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 85,
            "movement": -8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 109,
            "movement": 0
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 126,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 165,
            "movement": 0
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 182,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 184,
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
    "title": "Rema Compilation",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 61,
            "movement": 15
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 65,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 85,
            "movement": 4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 94,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 102,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 113,
            "movement": 0
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 113,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 120,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 131,
            "movement": -25
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 135,
            "movement": 18
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 138,
            "movement": -14
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
            "position": 73,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/47d4b2f030cf6387a1f36dde2ce29e9b/500x500-000000-80-0-0.jpg"
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
            "position": 10,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 11,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 14,
            "movement": 0
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 16,
            "movement": 3
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 17,
            "movement": -1
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 18,
            "movement": 0
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 19,
            "movement": -13
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 21,
            "movement": 9
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 83,
            "movement": -12
          },
          {
            "country": "FR",
            "name": "France",
            "position": 164,
            "movement": -12
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5e376f766f35708db51b9c3295fef2ce/500x500-000000-80-0-0.jpg"
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
            "position": 39,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 39,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 97,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 123,
            "movement": 2
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 127,
            "movement": -47
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 138,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 148,
            "movement": -56
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 152,
            "movement": 15
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 167,
            "movement": 10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 171,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "song",
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
            "country": "SB",
            "name": "Solomon Islands",
            "position": 13,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 34,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 82,
            "movement": -6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 83,
            "movement": 66
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 86,
            "movement": 4
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 121,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 138,
            "movement": -49
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 150,
            "movement": 14
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 179,
            "movement": -4
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
            "position": 71,
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
    "title": "HEIS",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 34,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 81,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 103,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 119,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 143,
            "movement": -79
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 152,
            "movement": 22
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 199,
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
            "position": 63,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4891a944de9418f059cabda0c7699160/500x500-000000-80-0-0.jpg"
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
            "position": 38,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 82,
            "movement": -7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 103,
            "movement": 10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 107,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 117,
            "movement": 20
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 133,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 150,
            "movement": 43
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 198,
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
    "title": "Ginger Me",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 77,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 80,
            "movement": -11
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 86,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 146,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 156,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 169,
            "movement": -14
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 189,
            "movement": -85
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1232dc64734f222e05a866a61860169c/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bounce",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 70,
            "movement": 72
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 88,
            "movement": 7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 109,
            "movement": -4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 171,
            "movement": 24
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 171,
            "movement": 3
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 192,
            "movement": null,
            "status": "new"
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
            "country": "SR",
            "name": "Suriname",
            "position": 32,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 41,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 101,
            "movement": -9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 126,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 133,
            "movement": -22
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3a0c90a8279dde44ce6b19d5d41875cd/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Calm Down",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MV",
            "name": "Maldives",
            "position": 84,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 155,
            "movement": -72
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
            "position": 29,
            "movement": -8
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 112,
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
    "title": "Baby",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 10,
            "movement": 14
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 141,
            "movement": -130
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
            "position": 151,
            "movement": 0
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 173,
            "movement": 0
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
            "position": 75,
            "movement": 18
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 142,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 177,
            "movement": 5
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
            "position": 55,
            "movement": -1
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 95,
            "movement": 42
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c8e5156cfb208f46ca97fd26072becce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Dumebi",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 68,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 173,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e01c854fc22ac6a5c685a89bd686d36d/500x500-000000-80-0-0.jpg"
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
            "position": 165,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-24",
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
            "position": 187,
            "movement": -13
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-20",
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
            "position": 21,
            "movement": -3
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
            "position": 154,
            "movement": 0
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
  