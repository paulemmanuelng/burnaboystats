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
  export const liveChartsUpdated = "2026-10-02";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-02T22:18Z";
  
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
            "position": 4,
            "movement": 0
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 4,
            "movement": 5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 5,
            "movement": 16
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 6,
            "movement": -1
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 8,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 12,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 19,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 24,
            "movement": -3
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 36,
            "movement": -11
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 39,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 41,
            "movement": 31
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 47,
            "movement": 35
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 48,
            "movement": -7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 54,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 55,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 58,
            "movement": -2
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 89,
            "movement": -42
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 98,
            "movement": -48
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 102,
            "movement": -4
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 128,
            "movement": 43
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 138,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 146,
            "movement": 33
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 154,
            "movement": 44
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 178,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 195,
            "movement": -33
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
            "position": 34,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 37,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 40,
            "movement": -3
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 47,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 52,
            "movement": 5
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 65,
            "movement": 2
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 67,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 68,
            "movement": -1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 91,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 96,
            "movement": -16
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 113,
            "movement": -10
          },
          {
            "country": "FR",
            "name": "France",
            "position": 114,
            "movement": -13
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 118,
            "movement": -7
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 165,
            "movement": 19
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 185,
            "movement": -1
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
            "country": "NG",
            "name": "Nigeria",
            "position": 14,
            "movement": -5
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
            "country": "UG",
            "name": "Uganda",
            "position": 42,
            "movement": -16
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 50,
            "movement": -6
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 67,
            "movement": -13
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 72,
            "movement": 0
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 84,
            "movement": -5
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 36,
            "movement": -26
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 61,
            "movement": -24
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 104,
            "movement": -63
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 146,
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
            "position": 14,
            "movement": -6
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 46,
            "movement": 9
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 94,
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
            "position": 32,
            "movement": -1
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
            "position": 9,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 18,
            "movement": 11
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 27,
            "movement": -12
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 31,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 32,
            "movement": -10
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 34,
            "movement": 7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 35,
            "movement": -4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 48,
            "movement": 8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 59,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 60,
            "movement": 40
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 63,
            "movement": 54
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 65,
            "movement": 19
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 68,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 70,
            "movement": 1
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 81,
            "movement": -29
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 117,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 126,
            "movement": -84
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 136,
            "movement": -19
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 139,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 139,
            "movement": 4
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 165,
            "movement": -109
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 182,
            "movement": -75
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 196,
            "movement": -69
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
            "movement": 0
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
            "position": 73,
            "movement": -10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 76,
            "movement": 5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 101,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 105,
            "movement": -17
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 121,
            "movement": -7
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 127,
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 148,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 170,
            "movement": -65
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 190,
            "movement": null,
            "status": "new"
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
            "position": 42,
            "movement": 43
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 67,
            "movement": -7
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 123,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 175,
            "movement": -25
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
            "movement": -8
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
            "position": 54,
            "movement": -22
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/720a729019b9a6c8873652d993302775/500x500-000000-80-0-0.jpg"
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
            "position": 54,
            "movement": -4
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
            "position": 110,
            "movement": -12
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
            "position": 71,
            "movement": 1
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 4,
            "movement": 2
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
            "position": 94,
            "movement": null,
            "status": "re"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/da22875a6742ba991e3fe3ed2a3f8bed/500x500-000000-80-0-0.jpg"
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
            "position": 107,
            "movement": -11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 152,
            "movement": -41
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 196,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9929af7c4e10861ff55d4cb54ef96c28/500x500-000000-80-0-0.jpg"
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
            "position": 70,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 154,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/8ecef1fd19cf7846a2fe2cf0e3ef3532/500x500-000000-80-0-0.jpg"
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
            "position": 149,
            "movement": -12
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
            "position": 75,
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
    "title": "Holy Father",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 88,
            "movement": -8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 192,
            "movement": -60
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/7c44504f57343c69b9a6e2219cb857ab/500x500-000000-80-0-0.jpg"
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
            "position": 129,
            "movement": 1
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
            "position": 200,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/8ecef1fd19cf7846a2fe2cf0e3ef3532/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "PINO",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 3,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/eae1950cf642fef40ae06c76d29dc1b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "STARLIFE",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 7,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4446cd79abcc87206d5e47417ba9bde7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "TOO LIT",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 16,
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
    "title": "Jailer",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 67,
            "movement": 0
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
            "position": 129,
            "movement": -9
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
            "position": 149,
            "movement": 5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2222c3405fde64a7b5660d7d063f2971/500x500-000000-80-0-0.jpg"
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
            "position": 160,
            "movement": -53
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/eae1950cf642fef40ae06c76d29dc1b8/500x500-000000-80-0-0.jpg"
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
            "position": 167,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/92d9434341384d2ebdca52fd613a18d6/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Very Stubborn",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 59,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9006b3beadf51c1be30df723a7edc6c0/500x500-000000-80-0-0.jpg"
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
  