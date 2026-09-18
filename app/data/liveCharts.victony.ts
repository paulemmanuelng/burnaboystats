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
  export const liveChartsUpdated = "2026-09-18";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-09-18T21:45Z";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","Spotify Albums","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "SLICK",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 1,
        "entries": [
          {
            "country": "SR",
            "name": "Suriname",
            "position": 1,
            "movement": 1
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 2,
            "movement": -1
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 3,
            "movement": 2
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 5,
            "movement": -1
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 7,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 8,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 9,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 10,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 14,
            "movement": 17
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 17,
            "movement": 38
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 21,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 22,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 38,
            "movement": -2
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 39,
            "movement": -11
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 39,
            "movement": -13
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 44,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 49,
            "movement": -10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 53,
            "movement": -15
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 69,
            "movement": 18
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 89,
            "movement": -4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 91,
            "movement": -16
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 105,
            "movement": -8
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 140,
            "movement": -79
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 146,
            "movement": -5
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 152,
            "movement": -66
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 155,
            "movement": -8
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 180,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 183,
            "movement": -122
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
            "position": 20,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 22,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 23,
            "movement": -2
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 23,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 34,
            "movement": -1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 37,
            "movement": -3
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 52,
            "movement": -2
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 57,
            "movement": -1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 70,
            "movement": 2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 75,
            "movement": -5
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 80,
            "movement": -7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 86,
            "movement": -7
          },
          {
            "country": "FR",
            "name": "France",
            "position": 101,
            "movement": -4
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 121,
            "movement": -10
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 122,
            "movement": -2
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 135,
            "movement": -7
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 171,
            "movement": -4
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
            "position": 6,
            "movement": 4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 6,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 11,
            "movement": -1
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 11,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 25,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 40,
            "movement": 6
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 48,
            "movement": 4
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 60,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 64,
            "movement": 15
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 66,
            "movement": 7
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PT",
            "name": "Portugal",
            "position": 26,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 81,
            "movement": -13
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 100,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FR",
            "name": "France",
            "position": 161,
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
            "position": 38,
            "movement": -19
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 49,
            "movement": 38
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 72,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 73,
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
            "position": 4,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 6,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 8,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 10,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 16,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 21,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 22,
            "movement": 6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 22,
            "movement": -4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 29,
            "movement": -8
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 30,
            "movement": -15
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 31,
            "movement": -15
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 32,
            "movement": -22
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 36,
            "movement": -3
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 46,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 55,
            "movement": 47
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 56,
            "movement": -19
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 60,
            "movement": 106
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 80,
            "movement": -45
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 87,
            "movement": -49
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 94,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 95,
            "movement": -41
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 108,
            "movement": -48
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 111,
            "movement": -24
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 112,
            "movement": -12
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 135,
            "movement": -8
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 152,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 155,
            "movement": -68
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 156,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 161,
            "movement": -43
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 171,
            "movement": -53
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 193,
            "movement": -137
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
            "position": 3,
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
            "position": 85,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 93,
            "movement": 9
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 97,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 110,
            "movement": -61
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 114,
            "movement": -35
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 115,
            "movement": 5
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 121,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 123,
            "movement": -37
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 132,
            "movement": -20
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 149,
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
            "position": 45,
            "movement": 7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 63,
            "movement": -12
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 118,
            "movement": -19
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 171,
            "movement": -40
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
            "position": 57,
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
            "position": 109,
            "movement": -84
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
            "movement": 2
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 49,
            "movement": 114
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 81,
            "movement": -14
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 184,
            "movement": -71
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
            "movement": -3
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
            "position": 36,
            "movement": 2
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
            "position": 76,
            "movement": -10
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
            "position": 46,
            "movement": 1
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
            "country": "UG",
            "name": "Uganda",
            "position": 96,
            "movement": -5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 108,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 151,
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
    "title": "STARLIFE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 92,
            "movement": 40
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 144,
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
            "position": 175,
            "movement": -27
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4446cd79abcc87206d5e47417ba9bde7/500x500-000000-80-0-0.jpg"
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
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 163,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 189,
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
    "title": "Stubborn",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 170,
            "movement": 20
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 191,
            "movement": -30
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
            "position": 134,
            "movement": -16
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/8ecef1fd19cf7846a2fe2cf0e3ef3532/500x500-000000-80-0-0.jpg"
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
            "position": 100,
            "movement": 34
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 191,
            "movement": -26
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/720a729019b9a6c8873652d993302775/500x500-000000-80-0-0.jpg"
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
            "position": 183,
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
            "position": 36,
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
    "title": "TOO LIT",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 6,
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
    "title": "Different Size",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "YE",
            "name": "Yemen",
            "position": 22,
            "movement": 10
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b1a616ee2bb150d5293c0d732ae4d516/500x500-000000-80-0-0.jpg"
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
            "position": 62,
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
            "position": 138,
            "movement": -17
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/42248d8b06dd650f1f1f6eafcca490e0/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "TYPO",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 196,
            "movement": -7
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b7f8a994a2879ad8100aab10404627a4/500x500-000000-80-0-0.jpg"
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
            "position": 180,
            "movement": -19
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2222c3405fde64a7b5660d7d063f2971/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Outlaw",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 84,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
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
  