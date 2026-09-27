// GENERATED FILE — do not edit by hand.
  // Rebuilt several times a day by scripts/build-live-charts.mjs --artist=victony from kworb's artist page.
  //
  // PLATFORM chart data for Victony: where each release is sitting RIGHT
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
    platforms: LivePlatform[];
  }
  
  /** When this snapshot was taken (ISO date). */
  export const liveChartsUpdated = "2026-09-27";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-09-27T12:07Z";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","Spotify Albums","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "SLICK",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AO",
            "name": "Angola",
            "position": 2,
            "movement": 2
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 2,
            "movement": 2
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 4,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 5,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 6,
            "movement": -1
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 8,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 10,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 18,
            "movement": -2
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 18,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 36,
            "movement": 41
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 40,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 43,
            "movement": -6
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 44,
            "movement": -24
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 50,
            "movement": 4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 53,
            "movement": -1
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 53,
            "movement": 22
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 54,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 84,
            "movement": 1
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 86,
            "movement": -39
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 88,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 90,
            "movement": 25
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 105,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 112,
            "movement": -18
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 136,
            "movement": 27
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 153,
            "movement": -13
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 159,
            "movement": -83
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 168,
            "movement": -62
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 194,
            "movement": -82
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
            "position": 32,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 38,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 42,
            "movement": 1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 42,
            "movement": -6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 48,
            "movement": -1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 50,
            "movement": 8
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 75,
            "movement": 0
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 77,
            "movement": 2
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 78,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 87,
            "movement": 1
          },
          {
            "country": "FR",
            "name": "France",
            "position": 91,
            "movement": 5
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 94,
            "movement": -7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 98,
            "movement": -5
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 148,
            "movement": -10
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 154,
            "movement": -11
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 180,
            "movement": -23
          }
        ]
      },
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AO",
            "name": "Angola",
            "position": 4,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 15,
            "movement": -2
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 15,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 17,
            "movement": -8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 26,
            "movement": -1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 79,
            "movement": -19
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
            "position": 20,
            "movement": -4
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 29,
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
            "position": 32,
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
            "position": 58,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3be386ed5da6f28d57ce4808d7d07802/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "STARLIFE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 5,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 9,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 11,
            "movement": -9
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 19,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 22,
            "movement": -16
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 26,
            "movement": 0
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 29,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 35,
            "movement": 24
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 36,
            "movement": -4
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 43,
            "movement": -17
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 44,
            "movement": 19
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 47,
            "movement": -5
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 60,
            "movement": 125
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 62,
            "movement": 8
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 74,
            "movement": -30
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 83,
            "movement": -8
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 104,
            "movement": -35
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 111,
            "movement": -89
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 113,
            "movement": 19
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 121,
            "movement": 79
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 139,
            "movement": 27
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 154,
            "movement": 28
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 155,
            "movement": -41
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 168,
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
            "position": 4,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4446cd79abcc87206d5e47417ba9bde7/500x500-000000-80-0-0.jpg"
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
            "position": 75,
            "movement": 6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 91,
            "movement": 4
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
            "position": 128,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 152,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 153,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 194,
            "movement": -40
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a21fb655cf3e2fc8b05db68fc6eb34b1/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "FRE$H",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 54,
            "movement": 46
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 56,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 134,
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
            "position": 69,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/720a729019b9a6c8873652d993302775/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "WHO THIS",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 95,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 127,
            "movement": -45
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 193,
            "movement": -49
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
            "position": 174,
            "movement": -15
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9929af7c4e10861ff55d4cb54ef96c28/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "TWIN",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 53,
            "movement": -3
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 81,
            "movement": -1
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
            "position": 67,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/da22875a6742ba991e3fe3ed2a3f8bed/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "STARLIFE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 191,
            "movement": -16
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 196,
            "movement": -35
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
            "position": 41,
            "movement": 16
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4446cd79abcc87206d5e47417ba9bde7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "2FRESH",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 136,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 198,
            "movement": -56
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
            "position": 79,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/eae1950cf642fef40ae06c76d29dc1b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Risk",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 78,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 141,
            "movement": -57
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/8ecef1fd19cf7846a2fe2cf0e3ef3532/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Stubborn",
    "platforms": [
      {
        "platform": "Spotify Albums",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 130,
            "movement": 4
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 172,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/8ecef1fd19cf7846a2fe2cf0e3ef3532/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Soweto(Remix)",
    "platforms": [
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 77,
            "movement": null,
            "status": "re"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a21fb655cf3e2fc8b05db68fc6eb34b1/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Skido",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 52,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ebd3e7b46a4d85fb7a46e4cfc3dcbf14/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Jailer",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 66,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/06fec5c27867700f0bdd8938b5ac4abd/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Jaga Jaga",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 141,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/42248d8b06dd650f1f1f6eafcca490e0/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "OHEMA",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 156,
            "movement": 9
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2222c3405fde64a7b5660d7d063f2971/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "PITY THIS BOY",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 146,
            "movement": 12
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/92d9434341384d2ebdca52fd613a18d6/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Holy Father",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 176,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/7c44504f57343c69b9a6e2219cb857ab/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Tanko",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 185,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/00e716539a3cf1321c20a055ce1f910e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Hello",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 183,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/56bbf7807715d0374f6b8084268052e2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Soweto",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 181,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a21fb655cf3e2fc8b05db68fc6eb34b1/500x500-000000-80-0-0.jpg"
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
  