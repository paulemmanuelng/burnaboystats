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
  export const liveChartsUpdated = "2026-08-20";
  
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 8,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 9,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 13,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 21,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 32,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 35,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 39,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 42,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 42,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 52,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 72,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 95,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 123,
            "movement": 0
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
            "position": 8,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 57,
            "movement": -11
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 70,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 72,
            "movement": 6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 91,
            "movement": 4
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 100,
            "movement": 3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 117,
            "movement": 34
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 158,
            "movement": 5
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 182,
            "movement": -9
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 197,
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
            "position": 2,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 19,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 61,
            "movement": null,
            "status": "re"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 68,
            "movement": null,
            "status": "re"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 95,
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
            "position": 4,
            "movement": 0
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "RO",
            "name": "Romania",
            "position": 121,
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
            "position": 26,
            "movement": -13
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
            "position": 33,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 48,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 87,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 94,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 98,
            "movement": 0
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 98,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 111,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 113,
            "movement": 0
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 133,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 139,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 145,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 152,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 153,
            "movement": 0
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 165,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 173,
            "movement": 0
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 183,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 190,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 191,
            "movement": 0
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 192,
            "movement": 0
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
            "position": 164,
            "movement": -14
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
            "position": 38,
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
    "title": "Rave & Roses",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 33,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 47,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 49,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 58,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 66,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 72,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 106,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 121,
            "movement": 0
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 121,
            "movement": 0
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 140,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 147,
            "movement": 0
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 154,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 185,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 185,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1d4942d3e1817e9b723eceb6dae28636/500x500-000000-80-0-0.jpg"
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
            "position": 59,
            "movement": 0
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 77,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 88,
            "movement": 0
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 91,
            "movement": 0
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 112,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 115,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 131,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 136,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 137,
            "movement": 0
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 151,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 155,
            "movement": 0
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 171,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 184,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 191,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4891a944de9418f059cabda0c7699160/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Rema Compilation",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 23,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 36,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 74,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 77,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 99,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 102,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 116,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 120,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 127,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 132,
            "movement": 0
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 191,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album",
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
            "movement": -1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 51,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 88,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IN",
            "name": "India",
            "position": 134,
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
            "country": "AU",
            "name": "Australia",
            "position": 71,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 74,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 90,
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
            "country": "MM",
            "name": "Myanmar",
            "position": 192,
            "movement": 0
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
            "position": 70,
            "movement": null,
            "status": "re"
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
            "country": "CV",
            "name": "Cape Verde",
            "position": 33,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 67,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 87,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 102,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 124,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 168,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 172,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 178,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 188,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/813c9474be279f125aba17ccd6e2cea0/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bounce",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "OM",
            "name": "Oman",
            "position": 35,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 54,
            "movement": -42
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 75,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 179,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 200,
            "movement": 0
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
            "position": 73,
            "movement": -2
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 161,
            "movement": 13
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 184,
            "movement": -5
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
            "position": 174,
            "movement": -18
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
            "country": "OM",
            "name": "Oman",
            "position": 74,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 79,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 100,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 121,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 124,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 127,
            "movement": 0
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 130,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 151,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 170,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a21fb655cf3e2fc8b05db68fc6eb34b1/500x500-000000-80-0-0.jpg"
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
            "position": 70,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 84,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 111,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 111,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 134,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 176,
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
            "position": 49,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/fe3deba215d998d74542663a84621852/500x500-000000-80-0-0.jpg"
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
            "position": 142,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 180,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 191,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 192,
            "movement": 0
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 10,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 123,
            "movement": -103
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
            "country": "LR",
            "name": "Liberia",
            "position": 65,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 103,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 158,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 160,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 170,
            "movement": 0
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
            "position": 36,
            "movement": 0
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 80,
            "movement": 0
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 84,
            "movement": 0
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 142,
            "movement": 0
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 172,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/123eb0268dfea84370a28c4a2114dc28/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "FUN",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 9,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 165,
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
            "position": 36,
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
            "position": 37,
            "movement": null,
            "status": "re"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c8e5156cfb208f46ca97fd26072becce/500x500-000000-80-0-0.jpg"
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
            "position": 58,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 98,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 148,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 162,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3a0c90a8279dde44ce6b19d5d41875cd/500x500-000000-80-0-0.jpg"
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
            "position": 66,
            "movement": 0
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 108,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 169,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 193,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/47d4b2f030cf6387a1f36dde2ce29e9b/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Lalala",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 95,
            "movement": 23
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 167,
            "movement": 11
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 189,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 184,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0dd0b79a37a28f75ab7f61b38d0dccda/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "For Her",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 103,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 184,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a8333ffad3f9910430485cdb9ae8f55e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "DND",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 140,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 200,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9f343b559a9382c0d35ba0c9eca79159/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "RAVAGE - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 155,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 189,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1b515afac4090505a9f4531e553f82a8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "KELEBU",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 63,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9762353430bf3c5816735dca5d916a96/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Jo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "YE",
            "name": "Yemen",
            "position": 108,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e43cc1d22a556fa87272c55c933bb4d7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "BENIN BOYS",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 186,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5e376f766f35708db51b9c3295fef2ce/500x500-000000-80-0-0.jpg"
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
            "position": 192,
            "movement": 0
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
            "country": "KE",
            "name": "Kenya",
            "position": 193,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e01c854fc22ac6a5c685a89bd686d36d/500x500-000000-80-0-0.jpg"
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
            "position": 194,
            "movement": null,
            "status": "new"
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
            "position": 37,
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
  