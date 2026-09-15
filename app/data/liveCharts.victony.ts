// GENERATED FILE — do not edit by hand.
  // Rebuilt hourly by scripts/build-live-charts.mjs --artist=victony from kworb's artist page.
  //
  // PLATFORM chart data for Victony: where each release is sitting RIGHT
  // NOW on Spotify, Apple Music, iTunes, Deezer, Shazam and YouTube country
  // charts. This is not official-chart data — the official national peaks that
  // feed the site's headline totals live elsewhere, and the two are kept apart
  // on purpose.
  
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
  export const liveChartsUpdated = "2026-09-15";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","YouTube","iTunes"];
  
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
            "movement": 1
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 2,
            "movement": 1
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 2,
            "movement": -1
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 3,
            "movement": -1
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 5,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 6,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 11,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 11,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 19,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 20,
            "movement": -5
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 20,
            "movement": -9
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 25,
            "movement": -4
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 28,
            "movement": -14
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 32,
            "movement": 8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 35,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 38,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 41,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 45,
            "movement": 60
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 60,
            "movement": -10
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 66,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 75,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 77,
            "movement": 6
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 78,
            "movement": 72
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 94,
            "movement": 1
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 103,
            "movement": -29
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 106,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 131,
            "movement": 42
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 131,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 135,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 140,
            "movement": -12
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 163,
            "movement": -14
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 165,
            "movement": -46
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 181,
            "movement": 3
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
            "position": 12,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 12,
            "movement": -7
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 13,
            "movement": -6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 14,
            "movement": -5
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 17,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 18,
            "movement": -5
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 33,
            "movement": -9
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 35,
            "movement": -3
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 40,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 49,
            "movement": -21
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 49,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 64,
            "movement": -36
          },
          {
            "country": "FR",
            "name": "France",
            "position": 67,
            "movement": -33
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 73,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 74,
            "movement": -5
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 94,
            "movement": -10
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 94,
            "movement": -13
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 126,
            "movement": -64
          },
          {
            "country": "US",
            "name": "United States",
            "position": 129,
            "movement": 32
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 158,
            "movement": -76
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 161,
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
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 6,
            "movement": 33
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 26,
            "movement": -8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 40,
            "movement": -32
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 68,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 100,
            "movement": -87
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
            "position": 35,
            "movement": -22
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 99,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FR",
            "name": "France",
            "position": 120,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 126,
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
            "position": 19,
            "movement": 1
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
            "position": 3,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 7,
            "movement": -1
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
            "position": 10,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 14,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 18,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 18,
            "movement": 28
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 18,
            "movement": 145
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 31,
            "movement": 44
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 33,
            "movement": 4
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 33,
            "movement": -8
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 35,
            "movement": 9
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 36,
            "movement": -3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 37,
            "movement": 6
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 43,
            "movement": -33
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 60,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 62,
            "movement": -21
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 74,
            "movement": -22
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 78,
            "movement": 22
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 80,
            "movement": -58
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 85,
            "movement": -37
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 92,
            "movement": 84
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 108,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 115,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 121,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 129,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 130,
            "movement": -69
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 167,
            "movement": null,
            "status": "new"
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 178,
            "movement": -4
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 200,
            "movement": -106
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
            "country": "GM",
            "name": "Gambia",
            "position": 75,
            "movement": -41
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 88,
            "movement": -13
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 114,
            "movement": -1
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 124,
            "movement": -29
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 125,
            "movement": -37
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 139,
            "movement": -42
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 158,
            "movement": 22
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 172,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 183,
            "movement": -46
          },
          {
            "country": "MW",
            "name": "Malawi",
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 32,
            "movement": 5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 84,
            "movement": 8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 94,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 152,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 167,
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
            "position": 54,
            "movement": 4
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
            "position": 191,
            "movement": -38
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
            "country": "NG",
            "name": "Nigeria",
            "position": 56,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 75,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 78,
            "movement": 112
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 120,
            "movement": 65
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
            "position": 85,
            "movement": 4
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 59,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 162,
            "movement": 15
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
            "position": 38,
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
            "position": 46,
            "movement": 131
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
            "position": 103,
            "movement": -5
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
            "position": 152,
            "movement": 0
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
            "position": 92,
            "movement": 30
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 159,
            "movement": -24
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 190,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/7c44504f57343c69b9a6e2219cb857ab/500x500-000000-80-0-0.jpg"
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
            "movement": -5
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
            "position": 63,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/42248d8b06dd650f1f1f6eafcca490e0/500x500-000000-80-0-0.jpg"
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
            "position": 129,
            "movement": -5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 144,
            "movement": 15
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/8ecef1fd19cf7846a2fe2cf0e3ef3532/500x500-000000-80-0-0.jpg"
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
            "position": 131,
            "movement": 24
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b7f8a994a2879ad8100aab10404627a4/500x500-000000-80-0-0.jpg"
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
            "position": 58,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/06fec5c27867700f0bdd8938b5ac4abd/500x500-000000-80-0-0.jpg"
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
            "position": 105,
            "movement": 30
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/56bbf7807715d0374f6b8084268052e2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Skido",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 100,
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
    "title": "PITY THIS BOY",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 122,
            "movement": 28
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/92d9434341384d2ebdca52fd613a18d6/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "2FRESH",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 155,
            "movement": -15
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/720a729019b9a6c8873652d993302775/500x500-000000-80-0-0.jpg"
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
            "position": 171,
            "movement": 13
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2222c3405fde64a7b5660d7d063f2971/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Stubborn",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 179,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/8ecef1fd19cf7846a2fe2cf0e3ef3532/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Soweto",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AO",
            "name": "Angola",
            "position": 110,
            "movement": 14
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a21fb655cf3e2fc8b05db68fc6eb34b1/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Saturn - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 182,
            "movement": -113
          }
        ]
      }
    ],
    "kind": "album"
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
  export const liveCountryCount = new Set(
    liveCharts.flatMap((r) => r.platforms.flatMap((p) => p.entries.map((e) => e.country)))
  ).size;
  
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
  