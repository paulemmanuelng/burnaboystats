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
  export const liveChartsUpdated = "2026-08-28";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
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
            "position": 12,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 18,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 23,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 28,
            "movement": -4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 33,
            "movement": 6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 33,
            "movement": 2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 35,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 71,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 84,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 87,
            "movement": -19
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 166,
            "movement": -93
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
            "position": 12,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 40,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 65,
            "movement": -5
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 83,
            "movement": -5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 92,
            "movement": -7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 95,
            "movement": -3
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 113,
            "movement": 8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 171,
            "movement": -21
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
            "position": 3,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 77,
            "movement": -9
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
            "position": 6,
            "movement": -1
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
            "position": 22,
            "movement": -5
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
            "country": "UG",
            "name": "Uganda",
            "position": 44,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 59,
            "movement": -12
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 85,
            "movement": -19
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 92,
            "movement": -29
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 97,
            "movement": 12
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 106,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 128,
            "movement": -5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 128,
            "movement": 10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 135,
            "movement": -4
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 164,
            "movement": 28
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 172,
            "movement": -21
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 175,
            "movement": -9
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 179,
            "movement": 12
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
    "title": "Bounce",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 42,
            "movement": -13
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 42,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 84,
            "movement": -9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 155,
            "movement": 21
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 179,
            "movement": -12
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 183,
            "movement": -65
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 187,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 197,
            "movement": -56
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
            "position": 72,
            "movement": -7
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 171,
            "movement": -13
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 187,
            "movement": -20
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
            "position": 185,
            "movement": 5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e26def467fccdcadca010b8c0f00fd0f/500x500-000000-80-0-0.jpg"
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
            "position": 48,
            "movement": -6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 49,
            "movement": -2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 51,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 52,
            "movement": -12
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 53,
            "movement": 90
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 74,
            "movement": -9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 80,
            "movement": -19
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 87,
            "movement": 12
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 117,
            "movement": -32
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 192,
            "movement": -27
          }
        ]
      }
    ],
    "kind": "album",
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
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 79,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 80,
            "movement": 4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 89,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 99,
            "movement": 31
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 108,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 113,
            "movement": 54
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 138,
            "movement": -34
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 153,
            "movement": -33
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 182,
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
    "title": "Who's Dat Girl",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 102,
            "movement": -29
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 104,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 113,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 134,
            "movement": -12
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 153,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 175,
            "movement": -20
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 187,
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
            "position": 75,
            "movement": -1
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
            "position": 18,
            "movement": -13
          }
        ]
      }
    ],
    "kind": "song",
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
            "position": 69,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 87,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 89,
            "movement": 17
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 126,
            "movement": -8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 130,
            "movement": 62
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 134,
            "movement": -20
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 140,
            "movement": -62
          }
        ]
      }
    ],
    "kind": "song",
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
            "country": "UG",
            "name": "Uganda",
            "position": 75,
            "movement": 17
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 157,
            "movement": -37
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 160,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 176,
            "movement": -14
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 182,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 188,
            "movement": -8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 193,
            "movement": -19
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1232dc64734f222e05a866a61860169c/500x500-000000-80-0-0.jpg"
  },
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
            "position": 43,
            "movement": 20
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 77,
            "movement": 35
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 81,
            "movement": 43
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 98,
            "movement": -1
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 153,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 163,
            "movement": -102
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 190,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/123eb0268dfea84370a28c4a2114dc28/500x500-000000-80-0-0.jpg"
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
            "position": 68,
            "movement": -9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 72,
            "movement": 57
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 100,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 134,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 151,
            "movement": 24
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 152,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 157,
            "movement": -44
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4891a944de9418f059cabda0c7699160/500x500-000000-80-0-0.jpg"
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
            "position": 90,
            "movement": -23
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 94,
            "movement": 7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 111,
            "movement": -6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 161,
            "movement": 9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 165,
            "movement": -1
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 184,
            "movement": -22
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a21fb655cf3e2fc8b05db68fc6eb34b1/500x500-000000-80-0-0.jpg"
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
            "position": 51,
            "movement": 4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 97,
            "movement": -12
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 129,
            "movement": 59
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 139,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 175,
            "movement": 4
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
            "position": 96,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 108,
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
            "position": 39,
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
            "position": 44,
            "movement": -7
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
            "position": 88,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 172,
            "movement": -37
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
            "position": 98,
            "movement": -17
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
            "position": 66,
            "movement": 7
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/47d4b2f030cf6387a1f36dde2ce29e9b/500x500-000000-80-0-0.jpg"
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
            "position": 26,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 54,
            "movement": -1
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
            "position": 112,
            "movement": -53
          }
        ]
      }
    ],
    "kind": "song",
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
            "country": "NG",
            "name": "Nigeria",
            "position": 54,
            "movement": -47
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 88,
            "movement": -18
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 166,
            "movement": 12
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3208072ca7af2913cacf001dbb11bbec/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "BENIN BOYS",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "QA",
            "name": "Qatar",
            "position": 99,
            "movement": -18
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
            "position": 81,
            "movement": -41
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5e376f766f35708db51b9c3295fef2ce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "RAVAGE - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 169,
            "movement": -45
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 197,
            "movement": -14
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1b515afac4090505a9f4531e553f82a8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Goals",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TW",
            "name": "Taiwan",
            "position": 78,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
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
            "position": 135,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9f343b559a9382c0d35ba0c9eca79159/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "For Her",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 81,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song"
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
            "position": 173,
            "movement": -23
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9f343b559a9382c0d35ba0c9eca79159/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Lalala",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 193,
            "movement": -12
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0dd0b79a37a28f75ab7f61b38d0dccda/500x500-000000-80-0-0.jpg"
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
            "position": 169,
            "movement": -22
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Favourite Girl",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 107,
            "movement": -17
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "AZAMAN",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 108,
            "movement": -17
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4891a944de9418f059cabda0c7699160/500x500-000000-80-0-0.jpg"
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
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d386058066ab6b2b140515ed5c591a1f/500x500-000000-80-0-0.jpg"
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
  