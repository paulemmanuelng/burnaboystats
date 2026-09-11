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
  export const liveChartsUpdated = "2026-09-11";
  
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
            "country": "KW",
            "name": "Kuwait",
            "position": 13,
            "movement": 3
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 14,
            "movement": 5
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 16,
            "movement": -4
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 16,
            "movement": -1
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 25,
            "movement": -14
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 29,
            "movement": 1
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 42,
            "movement": -19
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 45,
            "movement": 16
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 66,
            "movement": 23
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 103,
            "movement": 85
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 129,
            "movement": -44
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 136,
            "movement": 45
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 150,
            "movement": -10
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 180,
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
            "country": "GR",
            "name": "Greece",
            "position": 121,
            "movement": 23
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 129,
            "movement": null,
            "status": "new"
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 148,
            "movement": 28
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
            "position": 133,
            "movement": -2
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 153,
            "movement": 25
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 67,
            "movement": null,
            "status": "new"
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
            "country": "GM",
            "name": "Gambia",
            "position": 9,
            "movement": 22
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 14,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 16,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 22,
            "movement": -13
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 36,
            "movement": 4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 38,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 69,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 100,
            "movement": 9
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 135,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 149,
            "movement": -8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 157,
            "movement": -10
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 166,
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
            "country": "KE",
            "name": "Kenya",
            "position": 34,
            "movement": 26
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 44,
            "movement": -33
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 47,
            "movement": -2
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
            "position": 102,
            "movement": 0
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
            "position": 147,
            "movement": -26
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
            "position": 16,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 44,
            "movement": -3
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
            "position": 15,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6ad6ca24531d374241de87ca5e3211ca/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Calm Down",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 45,
            "movement": 38
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 53,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 54,
            "movement": 33
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 56,
            "movement": 40
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 58,
            "movement": 6
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 70,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 73,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 84,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 91,
            "movement": 5
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
            "position": 25,
            "movement": 3
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 60,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 84,
            "movement": -6
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
            "position": 23,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 126,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/07d4291391724a969f243406cc92be66/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Rave & Roses",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 32,
            "movement": -10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 42,
            "movement": -4
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 53,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 56,
            "movement": 18
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 64,
            "movement": -47
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 74,
            "movement": -12
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 80,
            "movement": 39
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 91,
            "movement": -9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 99,
            "movement": -21
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 101,
            "movement": -56
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 159,
            "movement": -29
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 193,
            "movement": -26
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1d4942d3e1817e9b723eceb6dae28636/500x500-000000-80-0-0.jpg"
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
            "position": 39,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 44,
            "movement": -5
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 61,
            "movement": -41
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 66,
            "movement": 71
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 119,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 132,
            "movement": -7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 134,
            "movement": -8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 141,
            "movement": 12
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 163,
            "movement": 26
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 169,
            "movement": -11
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 183,
            "movement": 13
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 189,
            "movement": -118
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1d4942d3e1817e9b723eceb6dae28636/500x500-000000-80-0-0.jpg"
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
            "position": 76,
            "movement": -40
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 78,
            "movement": -8
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 88,
            "movement": -57
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 98,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 108,
            "movement": -2
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 110,
            "movement": 13
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 120,
            "movement": 50
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 121,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 128,
            "movement": -30
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 144,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 174,
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
    "title": "Who's Dat Girl",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 24,
            "movement": 18
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 33,
            "movement": 61
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 54,
            "movement": -8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 59,
            "movement": 7
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 60,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 95,
            "movement": -21
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 103,
            "movement": 10
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 104,
            "movement": 14
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 171,
            "movement": 6
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 178,
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
            "position": 157,
            "movement": -9
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/fe3deba215d998d74542663a84621852/500x500-000000-80-0-0.jpg"
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
            "position": 59,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 80,
            "movement": -11
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 88,
            "movement": 10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 89,
            "movement": -7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 127,
            "movement": -18
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 138,
            "movement": -53
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 147,
            "movement": -18
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 163,
            "movement": -33
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 170,
            "movement": -28
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/47d4b2f030cf6387a1f36dde2ce29e9b/500x500-000000-80-0-0.jpg"
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
            "position": 65,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 85,
            "movement": -26
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 87,
            "movement": -49
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 101,
            "movement": -16
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 118,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 150,
            "movement": -47
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 198,
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
    "title": "Baby",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 106,
            "movement": 31
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 127,
            "movement": -9
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 189,
            "movement": 6
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
            "position": 31,
            "movement": -18
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 33,
            "movement": -3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 46,
            "movement": -37
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
            "position": 179,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3208072ca7af2913cacf001dbb11bbec/500x500-000000-80-0-0.jpg"
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
            "position": 69,
            "movement": 11
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 91,
            "movement": -43
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 132,
            "movement": 6
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 160,
            "movement": -97
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 172,
            "movement": -12
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 177,
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
            "position": 24,
            "movement": 41
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e26def467fccdcadca010b8c0f00fd0f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Oh No",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 3,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 23,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 117,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 123,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 139,
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
            "country": "DK",
            "name": "Denmark",
            "position": 33,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/fe3deba215d998d74542663a84621852/500x500-000000-80-0-0.jpg"
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
            "position": 45,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 74,
            "movement": 11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 80,
            "movement": 14
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 127,
            "movement": 2
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 151,
            "movement": -111
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 187,
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
    "title": "HEIS",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 23,
            "movement": 2
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 39,
            "movement": -10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 67,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 106,
            "movement": -75
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 194,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 197,
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
    "title": "Ginger Me",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 106,
            "movement": 7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 110,
            "movement": 88
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 117,
            "movement": 33
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 154,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 180,
            "movement": 9
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1232dc64734f222e05a866a61860169c/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Woman",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 129,
            "movement": 9
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 131,
            "movement": -30
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 136,
            "movement": -47
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 188,
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
            "position": 144,
            "movement": -71
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
            "position": 36,
            "movement": 0
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 110,
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
    "title": "DND",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "YE",
            "name": "Yemen",
            "position": 109,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 138,
            "movement": 51
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 178,
            "movement": null,
            "status": "new"
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 194,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 198,
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
            "position": 153,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0dd0b79a37a28f75ab7f61b38d0dccda/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "KELEBU",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 4,
            "movement": 0
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
            "position": 94,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9762353430bf3c5816735dca5d916a96/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "AZAMAN",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 192,
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
            "position": 88,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4891a944de9418f059cabda0c7699160/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "RAVAGE - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 159,
            "movement": 6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 179,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album"
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
            "position": 89,
            "movement": 0
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
            "position": 135,
            "movement": 17
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9f343b559a9382c0d35ba0c9eca79159/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "OZEBA",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 149,
            "movement": 46
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4891a944de9418f059cabda0c7699160/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Dumebi",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 196,
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
    "title": "Bad Commando - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 60,
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
  