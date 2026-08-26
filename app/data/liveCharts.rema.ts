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
  export const liveChartsUpdated = "2026-08-26";
  
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
            "position": 9,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 17,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 22,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 24,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 35,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 36,
            "movement": -3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 39,
            "movement": -11
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 68,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 68,
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 73,
            "movement": 49
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 74,
            "movement": -9
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 175,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 11,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 41,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 56,
            "movement": -3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 77,
            "movement": 11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 82,
            "movement": -6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 88,
            "movement": -4
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 125,
            "movement": -18
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 149,
            "movement": -7
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 195,
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
            "position": 5,
            "movement": 0
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
            "position": 24,
            "movement": 7
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
            "country": "MR",
            "name": "Mauritania",
            "position": 37,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 43,
            "movement": 6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 54,
            "movement": -18
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 63,
            "movement": 24
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 66,
            "movement": 49
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 101,
            "movement": -28
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 112,
            "movement": -3
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 114,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 123,
            "movement": -3
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 126,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 131,
            "movement": -1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 141,
            "movement": -7
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 151,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 166,
            "movement": -66
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 175,
            "movement": -6
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 191,
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
            "country": "OM",
            "name": "Oman",
            "position": 67,
            "movement": 22
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 70,
            "movement": -10
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 97,
            "movement": -2
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 118,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 141,
            "movement": -38
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 147,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 167,
            "movement": 15
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 171,
            "movement": -24
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 176,
            "movement": -12
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 193,
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
            "country": "MA",
            "name": "Morocco",
            "position": 62,
            "movement": -2
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 144,
            "movement": 7
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 151,
            "movement": 5
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
            "position": 190,
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
            "position": 42,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 42,
            "movement": -12
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 46,
            "movement": 6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 48,
            "movement": -21
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 49,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 68,
            "movement": 21
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 77,
            "movement": -23
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 84,
            "movement": -15
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 150,
            "movement": 31
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 186,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 189,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 191,
            "movement": -29
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 200,
            "movement": null,
            "status": "new"
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
            "position": 55,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 74,
            "movement": 10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 86,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 94,
            "movement": 4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 104,
            "movement": -12
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 120,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 139,
            "movement": -36
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 177,
            "movement": -20
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 177,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 192,
            "movement": null,
            "status": "new"
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 194,
            "movement": -48
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 196,
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
    "title": "Calm Down",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 59,
            "movement": -43
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 163,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 187,
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
            "country": "SZ",
            "name": "Swaziland",
            "position": 24,
            "movement": 2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 57,
            "movement": 1
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 81,
            "movement": 37
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "IT",
            "name": "Italy",
            "position": 68,
            "movement": 1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 76,
            "movement": -18
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 194,
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
    "title": "Soundgasm",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 78,
            "movement": 8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 82,
            "movement": -11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 87,
            "movement": -7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 114,
            "movement": -6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 117,
            "movement": -34
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 118,
            "movement": -1
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 186,
            "movement": -82
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 192,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 199,
            "movement": -18
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
            "position": 89,
            "movement": 8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 120,
            "movement": -55
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 146,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 157,
            "movement": -8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 162,
            "movement": -15
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 172,
            "movement": -41
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 180,
            "movement": -28
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 182,
            "movement": 16
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
            "country": "LB",
            "name": "Lebanon",
            "position": 62,
            "movement": 17
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 97,
            "movement": -6
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 104,
            "movement": -64
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 138,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 169,
            "movement": 21
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 174,
            "movement": -16
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 190,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/123eb0268dfea84370a28c4a2114dc28/500x500-000000-80-0-0.jpg"
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
            "position": 73,
            "movement": 34
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 111,
            "movement": -37
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 115,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 136,
            "movement": -27
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 140,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 163,
            "movement": -75
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
            "position": 74,
            "movement": 7
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
            "country": "LR",
            "name": "Liberia",
            "position": 134,
            "movement": 29
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 178,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 198,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 200,
            "movement": -33
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
            "position": 27,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 49,
            "movement": -29
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
            "position": 71,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3208072ca7af2913cacf001dbb11bbec/500x500-000000-80-0-0.jpg"
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
            "position": 63,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 89,
            "movement": 43
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 135,
            "movement": -39
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 137,
            "movement": -3
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 177,
            "movement": -116
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 178,
            "movement": 12
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 195,
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
    "title": "Soweto",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "OM",
            "name": "Oman",
            "position": 77,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 102,
            "movement": 8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 105,
            "movement": -12
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 164,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 170,
            "movement": -18
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 198,
            "movement": -57
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
            "position": 56,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 102,
            "movement": -26
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 135,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 179,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 188,
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
    "title": "Woman",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 74,
            "movement": 23
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 118,
            "movement": 11
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 199,
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
            "country": "GH",
            "name": "Ghana",
            "position": 60,
            "movement": -30
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
            "position": 93,
            "movement": 21
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/47d4b2f030cf6387a1f36dde2ce29e9b/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "FUN",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 38,
            "movement": 7
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
            "position": 94,
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
    "title": "RAVAGE - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 132,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 156,
            "movement": 23
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 181,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1b515afac4090505a9f4531e553f82a8/500x500-000000-80-0-0.jpg"
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
            "position": 147,
            "movement": 23
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
            "position": 77,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Lalala",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 200,
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
            "position": 181,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0dd0b79a37a28f75ab7f61b38d0dccda/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Amina",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 107,
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
            "position": 115,
            "movement": 13
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9f343b559a9382c0d35ba0c9eca79159/500x500-000000-80-0-0.jpg"
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
            "position": 68,
            "movement": -28
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5e376f766f35708db51b9c3295fef2ce/500x500-000000-80-0-0.jpg"
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
            "position": 69,
            "movement": -29
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
            "position": 70,
            "movement": -29
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4891a944de9418f059cabda0c7699160/500x500-000000-80-0-0.jpg"
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
            "position": 75,
            "movement": -11
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
            "position": 155,
            "movement": 39
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9f343b559a9382c0d35ba0c9eca79159/500x500-000000-80-0-0.jpg"
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
            "position": 56,
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
  