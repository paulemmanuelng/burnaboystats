// GENERATED FILE — do not edit by hand.
  // Rebuilt hourly by scripts/build-live-charts.mjs --artist=rema from kworb's artist page.
  //
  // PLATFORM chart data for Rema: where each release is sitting RIGHT
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
  export const liveChartsUpdated = "2026-09-09";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","YouTube","iTunes"];
  
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
            "position": 11,
            "movement": -2
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 12,
            "movement": 4
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 15,
            "movement": 0
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 16,
            "movement": 7
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 19,
            "movement": 39
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 30,
            "movement": 0
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 61,
            "movement": 57
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 80,
            "movement": 27
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 81,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 89,
            "movement": -71
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 140,
            "movement": -19
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 168,
            "movement": -9
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 177,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 182,
            "movement": -35
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 183,
            "movement": 10
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 188,
            "movement": -39
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 196,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 200,
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
            "country": "CH",
            "name": "Switzerland",
            "position": 30,
            "movement": 2
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 47,
            "movement": 16
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 54,
            "movement": 10
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 60,
            "movement": 18
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 66,
            "movement": 9
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 95,
            "movement": 20
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 96,
            "movement": 14
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 121,
            "movement": 23
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 123,
            "movement": 19
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 148,
            "movement": 28
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 148,
            "movement": 24
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 159,
            "movement": 36
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 171,
            "movement": 20
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 191,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 199,
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
            "position": 97,
            "movement": 67
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 184,
            "movement": 3
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
            "position": 68,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 89,
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
            "country": "TH",
            "name": "Thailand",
            "position": 182,
            "movement": -78
          }
        ]
      }
    ],
    "kind": "song",
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
            "country": "LR",
            "name": "Liberia",
            "position": 9,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 16,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 19,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 29,
            "movement": 20
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 38,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 40,
            "movement": 6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 58,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 109,
            "movement": 41
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 141,
            "movement": -20
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 147,
            "movement": -8
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
            "position": 27,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 47,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 68,
            "movement": 3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 81,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 92,
            "movement": 10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 105,
            "movement": 3
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 128,
            "movement": -6
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
            "position": 43,
            "movement": -39
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 55,
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
            "position": 9,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 92,
            "movement": -7
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
            "position": 13,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 39,
            "movement": -6
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 45,
            "movement": -19
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 50,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 52,
            "movement": 13
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 71,
            "movement": 30
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 105,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 122,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 123,
            "movement": -46
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 126,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 128,
            "movement": -19
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 137,
            "movement": 22
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 153,
            "movement": -6
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 158,
            "movement": 12
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 189,
            "movement": -15
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 195,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 58,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 60,
            "movement": 117
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 79,
            "movement": 21
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 85,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 89,
            "movement": 6
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 105,
            "movement": 41
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 129,
            "movement": -13
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 136,
            "movement": -15
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 136,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 143,
            "movement": -6
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 144,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 161,
            "movement": -36
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 177,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/47d4b2f030cf6387a1f36dde2ce29e9b/500x500-000000-80-0-0.jpg"
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
            "position": 41,
            "movement": 2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 52,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 64,
            "movement": -11
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 72,
            "movement": 32
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 73,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 83,
            "movement": -7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 101,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 105,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 109,
            "movement": -14
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 123,
            "movement": -40
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 169,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 176,
            "movement": -60
          }
        ]
      }
    ],
    "kind": "album",
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
            "country": "LR",
            "name": "Liberia",
            "position": 42,
            "movement": 17
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 47,
            "movement": 25
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 48,
            "movement": 4
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 52,
            "movement": 10
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 61,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 69,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 74,
            "movement": -31
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 113,
            "movement": 22
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 118,
            "movement": -20
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 177,
            "movement": -18
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
            "position": 148,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "song",
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
            "country": "NG",
            "name": "Nigeria",
            "position": 66,
            "movement": 5
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 70,
            "movement": 114
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 83,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 89,
            "movement": 50
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 104,
            "movement": 78
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 108,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 114,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 141,
            "movement": -9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 161,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 195,
            "movement": -101
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 199,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4891a944de9418f059cabda0c7699160/500x500-000000-80-0-0.jpg"
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
            "position": 28,
            "movement": -20
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 48,
            "movement": 15
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 80,
            "movement": -32
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 146,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 177,
            "movement": -11
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 186,
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
            "country": "MA",
            "name": "Morocco",
            "position": 193,
            "movement": 5
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MA",
            "name": "Morocco",
            "position": 67,
            "movement": 10
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e26def467fccdcadca010b8c0f00fd0f/500x500-000000-80-0-0.jpg"
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
            "position": 121,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 123,
            "movement": 36
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 143,
            "movement": -31
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 28,
            "movement": -1
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 66,
            "movement": -8
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 152,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/07d4291391724a969f243406cc92be66/500x500-000000-80-0-0.jpg"
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
            "position": 2,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 44,
            "movement": 14
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 85,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 94,
            "movement": 18
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 129,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 195,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3a0c90a8279dde44ce6b19d5d41875cd/500x500-000000-80-0-0.jpg"
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
            "position": 36,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 70,
            "movement": 11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 98,
            "movement": -29
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 117,
            "movement": -10
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 123,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 124,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a21fb655cf3e2fc8b05db68fc6eb34b1/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Baby",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 112,
            "movement": 19
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 137,
            "movement": -38
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 195,
            "movement": -11
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 7,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 8,
            "movement": 60
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
            "position": 170,
            "movement": 27
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3208072ca7af2913cacf001dbb11bbec/500x500-000000-80-0-0.jpg"
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
            "position": 48,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 108,
            "movement": -5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 150,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 155,
            "movement": -5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 189,
            "movement": -79
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 198,
            "movement": -49
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1232dc64734f222e05a866a61860169c/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Soundgasm",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 59,
            "movement": 39
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 59,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 85,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 103,
            "movement": 22
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 120,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/813c9474be279f125aba17ccd6e2cea0/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "FUN",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 84,
            "movement": 31
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 134,
            "movement": 13
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
            "position": 47,
            "movement": 3
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
            "position": 46,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c8e5156cfb208f46ca97fd26072becce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Woman",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 89,
            "movement": 60
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 101,
            "movement": -21
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 143,
            "movement": 5
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MA",
            "name": "Morocco",
            "position": 164,
            "movement": -27
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/47d4b2f030cf6387a1f36dde2ce29e9b/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "RAVAGE - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 135,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 176,
            "movement": 21
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 178,
            "movement": 12
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "KELEBU",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 1,
        "entries": [
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 1,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9762353430bf3c5816735dca5d916a96/500x500-000000-80-0-0.jpg"
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
            "position": 144,
            "movement": -84
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/8d26b51a325ab59c594708d1c8c71bf2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bad Commando",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 75,
            "movement": -7
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/159a067af3e7b92c6a6b45c576968b09/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Dumebi",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 90,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 122,
            "movement": 25
          }
        ]
      }
    ],
    "kind": "song",
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
    "cover": "https://cdn-images.dzcdn.net/images/cover/e4c2c39678f951dd57f09d2e98cd4062/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bad Commando - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 59,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d386058066ab6b2b140515ed5c591a1f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "BENIN BOYS",
    "kind": "song",
    "platforms": [
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
    "cover": "https://cdn-images.dzcdn.net/images/cover/5e376f766f35708db51b9c3295fef2ce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "OZEBA",
    "platforms": [],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4891a944de9418f059cabda0c7699160/500x500-000000-80-0-0.jpg"
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
  