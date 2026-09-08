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
  export const liveChartsUpdated = "2026-09-08";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "Secondhand",
    "platforms": [
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
            "country": "DE",
            "name": "Germany",
            "position": 92,
            "movement": 25
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 6,
            "movement": -3
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 15,
            "movement": 1
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 19,
            "movement": 5
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 22,
            "movement": 2
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 28,
            "movement": 50
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 32,
            "movement": 14
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 94,
            "movement": -6
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 125,
            "movement": 25
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 137,
            "movement": 3
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 138,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 180,
            "movement": 16
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 184,
            "movement": 2
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 185,
            "movement": null,
            "status": "new"
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 187,
            "movement": 13
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
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
            "position": 164,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 187,
            "movement": -3
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
            "position": 180,
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
            "country": "SN",
            "name": "Senegal",
            "position": 90,
            "movement": 0
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 19,
            "movement": -6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 19,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 22,
            "movement": -4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 31,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 35,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 36,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 67,
            "movement": 5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 101,
            "movement": 5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 110,
            "movement": 6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 132,
            "movement": 19
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
            "position": 85,
            "movement": null,
            "status": "re"
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
            "position": 11,
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
            "position": 182,
            "movement": -156
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
            "position": 40,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 58,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 65,
            "movement": -11
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 67,
            "movement": 5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 72,
            "movement": -7
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 90,
            "movement": -6
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 105,
            "movement": -6
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 111,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 117,
            "movement": 12
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 135,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 137,
            "movement": 23
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 141,
            "movement": -14
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 148,
            "movement": -62
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 178,
            "movement": 10
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
            "position": 57,
            "movement": 10
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 63,
            "movement": -12
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 72,
            "movement": 14
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 91,
            "movement": -5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 101,
            "movement": -17
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 117,
            "movement": -7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 123,
            "movement": -57
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 135,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 148,
            "movement": -6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 149,
            "movement": 13
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 185,
            "movement": 5
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
            "country": "UG",
            "name": "Uganda",
            "position": 32,
            "movement": 14
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 43,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 51,
            "movement": 9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 65,
            "movement": 15
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 91,
            "movement": -51
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 99,
            "movement": -34
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 103,
            "movement": -36
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 103,
            "movement": -41
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 106,
            "movement": 5
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 197,
            "movement": -30
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 39,
            "movement": 27
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 46,
            "movement": -13
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 46,
            "movement": 5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 64,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 72,
            "movement": -22
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 94,
            "movement": 52
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 114,
            "movement": -39
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 125,
            "movement": 14
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 144,
            "movement": -11
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
            "movement": -11
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
            "position": 82,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/fe3deba215d998d74542663a84621852/500x500-000000-80-0-0.jpg"
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
            "position": 14,
            "movement": 109
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 55,
            "movement": 16
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 120,
            "movement": -62
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 123,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 145,
            "movement": -64
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 152,
            "movement": 26
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 167,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 197,
            "movement": -17
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
            "position": 198,
            "movement": -14
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
    "title": "Soweto",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 84,
            "movement": 69
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 87,
            "movement": -8
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 88,
            "movement": -36
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 92,
            "movement": 39
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 115,
            "movement": 18
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 122,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 131,
            "movement": -38
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 175,
            "movement": -22
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 185,
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
    "title": "Calm Down",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 27,
            "movement": 0
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 54,
            "movement": -12
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 100,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 133,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 86,
            "movement": -24
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 140,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 164,
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
            "country": "CH",
            "name": "Switzerland",
            "position": 69,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 74,
            "movement": 0
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 78,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/07d4291391724a969f243406cc92be66/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Soundgasm",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 63,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 64,
            "movement": -9
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 82,
            "movement": 8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 85,
            "movement": 36
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 116,
            "movement": 5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 142,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 191,
            "movement": -75
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 195,
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
            "country": "NL",
            "name": "Netherlands",
            "position": 121,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/813c9474be279f125aba17ccd6e2cea0/500x500-000000-80-0-0.jpg"
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
            "position": 69,
            "movement": 4
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 106,
            "movement": 12
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 108,
            "movement": -19
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 144,
            "movement": -51
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 146,
            "movement": -79
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 149,
            "movement": -92
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 176,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4891a944de9418f059cabda0c7699160/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Baby",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 68,
            "movement": 8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 106,
            "movement": 6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 188,
            "movement": -69
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 193,
            "movement": 2
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
            "position": 5,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 64,
            "movement": -28
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
            "position": 197,
            "movement": -38
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 67,
            "movement": 81
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 91,
            "movement": 5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 106,
            "movement": 65
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 123,
            "movement": -58
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 133,
            "movement": 8
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 148,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 148,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1232dc64734f222e05a866a61860169c/500x500-000000-80-0-0.jpg"
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
            "position": 57,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 93,
            "movement": -15
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 114,
            "movement": -25
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
            "position": 199,
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
    "title": "FUN",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 155,
            "movement": -62
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 157,
            "movement": 27
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
            "position": 50,
            "movement": -4
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
            "country": "KE",
            "name": "Kenya",
            "position": 98,
            "movement": -13
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 149,
            "movement": 15
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
            "country": "BJ",
            "name": "Benin",
            "position": 139,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 191,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album"
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
            "position": 64,
            "movement": 92
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/8d26b51a325ab59c594708d1c8c71bf2/500x500-000000-80-0-0.jpg"
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
    "title": "Bad Commando",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 68,
            "movement": -19
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/159a067af3e7b92c6a6b45c576968b09/500x500-000000-80-0-0.jpg"
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
            "position": 139,
            "movement": 6
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9f343b559a9382c0d35ba0c9eca79159/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Dumebi",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 175,
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
    "title": "Runaway",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 176,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/94b1e9031894dcb640cde34d86c1175f/500x500-000000-80-0-0.jpg"
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
            "position": 174,
            "movement": -12
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e4c2c39678f951dd57f09d2e98cd4062/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Mara",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 192,
            "movement": -24
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e43cc1d22a556fa87272c55c933bb4d7/500x500-000000-80-0-0.jpg"
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
            "position": 58,
            "movement": -44
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d386058066ab6b2b140515ed5c591a1f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "BENIN BOYS",
    "platforms": [],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5e376f766f35708db51b9c3295fef2ce/500x500-000000-80-0-0.jpg"
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
  