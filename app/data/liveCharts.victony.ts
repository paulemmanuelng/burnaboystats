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
  export const liveChartsUpdated = "2026-09-24";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-09-24T17:15Z";
  
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
            "position": 3,
            "movement": -2
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 5,
            "movement": -1
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 6,
            "movement": -4
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 9,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 11,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 12,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 14,
            "movement": 8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 14,
            "movement": -5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 18,
            "movement": -1
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 27,
            "movement": 47
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 31,
            "movement": 7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 32,
            "movement": 2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 35,
            "movement": 1
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 39,
            "movement": -16
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 47,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 52,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 55,
            "movement": 0
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 56,
            "movement": 17
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 59,
            "movement": 30
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 59,
            "movement": 80
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 76,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 78,
            "movement": 61
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 88,
            "movement": -1
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 92,
            "movement": 4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 95,
            "movement": 2
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 99,
            "movement": 62
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 100,
            "movement": 48
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 113,
            "movement": -110
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 136,
            "movement": -18
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 168,
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
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 33,
            "movement": 1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 35,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 37,
            "movement": -9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 44,
            "movement": -1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 49,
            "movement": -1
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 69,
            "movement": -1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 72,
            "movement": 4
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 77,
            "movement": -6
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 89,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 90,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 108,
            "movement": 5
          },
          {
            "country": "FR",
            "name": "France",
            "position": 112,
            "movement": 8
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 136,
            "movement": 12
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 137,
            "movement": 1
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 156,
            "movement": 4
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 187,
            "movement": 4
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
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 19,
            "movement": 67
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 31,
            "movement": 55
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 32,
            "movement": 22
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 74,
            "movement": -28
          },
          {
            "country": "FR",
            "name": "France",
            "position": 118,
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
            "position": 30,
            "movement": 2
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
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 6,
            "movement": 2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 8,
            "movement": 9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 11,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 17,
            "movement": -8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 22,
            "movement": -4
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 22,
            "movement": 27
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 28,
            "movement": 45
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 33,
            "movement": -2
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 36,
            "movement": -6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 44,
            "movement": -6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 47,
            "movement": 9
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 69,
            "movement": 117
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 69,
            "movement": -22
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 69,
            "movement": -8
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 72,
            "movement": 30
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 79,
            "movement": -35
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 84,
            "movement": -48
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 85,
            "movement": 61
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 98,
            "movement": -21
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 102,
            "movement": -47
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 111,
            "movement": -25
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 117,
            "movement": -44
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 146,
            "movement": 41
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 146,
            "movement": -23
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 148,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 152,
            "movement": -41
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 156,
            "movement": -72
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 169,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 182,
            "movement": 12
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 186,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 195,
            "movement": -109
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
            "position": 88,
            "movement": -18
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 95,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 110,
            "movement": 42
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 111,
            "movement": 75
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 117,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 120,
            "movement": 0
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 122,
            "movement": -41
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 129,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 181,
            "movement": 7
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
            "position": 47,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 71,
            "movement": -30
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 124,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 192,
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
            "position": 67,
            "movement": 2
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
            "position": 87,
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 83,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 87,
            "movement": 6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 163,
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
            "position": 154,
            "movement": 0
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
            "position": 87,
            "movement": 7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 146,
            "movement": -14
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 153,
            "movement": -23
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
    "cover": "https://cdn-images.dzcdn.net/images/cover/8ecef1fd19cf7846a2fe2cf0e3ef3532/500x500-000000-80-0-0.jpg"
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
            "position": 33,
            "movement": 113
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 123,
            "movement": 34
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 187,
            "movement": -6
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
    "title": "TWIN",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 62,
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
            "position": 73,
            "movement": 3
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
            "position": 55,
            "movement": -2
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 121,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 146,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 160,
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 123,
            "movement": -29
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 142,
            "movement": 5
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
            "position": 174,
            "movement": 23
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 180,
            "movement": -63
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/7c44504f57343c69b9a6e2219cb857ab/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "PINO",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 13,
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
            "position": 65,
            "movement": 0
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
            "position": 155,
            "movement": 14
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
            "position": 161,
            "movement": 8
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/92d9434341384d2ebdca52fd613a18d6/500x500-000000-80-0-0.jpg"
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
  