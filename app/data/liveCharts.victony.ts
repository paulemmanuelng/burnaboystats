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
  export const liveChartsUpdated = "2026-09-25";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-09-25T17:49Z";
  
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
            "country": "CV",
            "name": "Cape Verde",
            "position": 5,
            "movement": -2
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 6,
            "movement": 3
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 6,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 7,
            "movement": 5
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 8,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 10,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 14,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 16,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 25,
            "movement": -11
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 29,
            "movement": 2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 33,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 39,
            "movement": -7
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 39,
            "movement": -12
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 44,
            "movement": 3
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 46,
            "movement": -7
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 50,
            "movement": 9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 54,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 54,
            "movement": 1
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 66,
            "movement": -7
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 74,
            "movement": 4
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 77,
            "movement": 36
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 83,
            "movement": 5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 87,
            "movement": 8
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 96,
            "movement": -4
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 108,
            "movement": -32
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 128,
            "movement": -72
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 135,
            "movement": -35
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 169,
            "movement": -33
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 185,
            "movement": -86
          },
          {
            "country": "BW",
            "name": "Botswana",
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
            "country": "CM",
            "name": "Cameroon",
            "position": 32,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 33,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 34,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 41,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 47,
            "movement": -10
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 53,
            "movement": -4
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 72,
            "movement": -3
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 76,
            "movement": 1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 77,
            "movement": -5
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 87,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 90,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 96,
            "movement": 16
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 99,
            "movement": 9
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 132,
            "movement": 5
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 142,
            "movement": -6
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 145,
            "movement": 11
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 189,
            "movement": -2
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
            "position": 5,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 9,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 13,
            "movement": -2
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 13,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 26,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 44,
            "movement": -4
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 54,
            "movement": -6
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 72,
            "movement": -6
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 79,
            "movement": -19
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 87,
            "movement": -23
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NO",
            "name": "Norway",
            "position": 42,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FR",
            "name": "France",
            "position": 52,
            "movement": 67
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 52,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 97,
            "movement": -23
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 179,
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
            "country": "TN",
            "name": "Tunisia",
            "position": 10,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 28,
            "movement": -9
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 29,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 45,
            "movement": -13
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 48,
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
            "position": 32,
            "movement": -3
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
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 6,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 8,
            "movement": 9
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 15,
            "movement": -6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 21,
            "movement": 12
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 21,
            "movement": -10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 22,
            "movement": 0
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 26,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 31,
            "movement": 16
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 42,
            "movement": -25
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 59,
            "movement": -29
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 63,
            "movement": 20
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 70,
            "movement": 14
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 75,
            "movement": -15
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 75,
            "movement": 17
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 77,
            "movement": 75
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 87,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 93,
            "movement": -21
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 100,
            "movement": -31
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 101,
            "movement": 16
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 105,
            "movement": -36
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 110,
            "movement": -12
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 114,
            "movement": 5
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 127,
            "movement": 21
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 137,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 142,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 185,
            "movement": -89
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 198,
            "movement": -16
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
            "position": 82,
            "movement": 6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 88,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 98,
            "movement": 12
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 103,
            "movement": 8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 109,
            "movement": -14
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 119,
            "movement": 1
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 134,
            "movement": -12
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 148,
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 33,
            "movement": 14
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 96,
            "movement": -25
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 127,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 156,
            "movement": 36
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
            "position": 67,
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
            "position": 10,
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
            "position": 32,
            "movement": -5
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
            "position": 88,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 152,
            "movement": 11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 152,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 185,
            "movement": -102
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
            "position": 159,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9929af7c4e10861ff55d4cb54ef96c28/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Stubborn",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 106,
            "movement": -73
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 170,
            "movement": -7
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 176,
            "movement": -147
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 194,
            "movement": -71
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
            "position": 130,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/8ecef1fd19cf7846a2fe2cf0e3ef3532/500x500-000000-80-0-0.jpg"
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
            "position": 50,
            "movement": -6
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
            "movement": -2
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
            "position": 63,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/da22875a6742ba991e3fe3ed2a3f8bed/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Risk",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 56,
            "movement": 90
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 99,
            "movement": -12
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 174,
            "movement": -21
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/8ecef1fd19cf7846a2fe2cf0e3ef3532/500x500-000000-80-0-0.jpg"
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
            "position": 153,
            "movement": -7
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 157,
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
            "position": 67,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4446cd79abcc87206d5e47417ba9bde7/500x500-000000-80-0-0.jpg"
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
            "position": 144,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 161,
            "movement": -38
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/42248d8b06dd650f1f1f6eafcca490e0/500x500-000000-80-0-0.jpg"
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
            "position": 133,
            "movement": 41
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 186,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/7c44504f57343c69b9a6e2219cb857ab/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Outlaw",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 98,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 189,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b7f8a994a2879ad8100aab10404627a4/500x500-000000-80-0-0.jpg"
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
    "title": "Jailer",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 64,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/06fec5c27867700f0bdd8938b5ac4abd/500x500-000000-80-0-0.jpg"
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
            "position": 159,
            "movement": -4
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
            "position": 158,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/92d9434341384d2ebdca52fd613a18d6/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Apollo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 191,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b7f8a994a2879ad8100aab10404627a4/500x500-000000-80-0-0.jpg"
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
  