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
  export const liveChartsUpdated = "2026-08-24";
  
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
            "position": 17,
            "movement": -5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 20,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 20,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 21,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 21,
            "movement": 6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 35,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 37,
            "movement": 4
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 45,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 62,
            "movement": -5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 63,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 90,
            "movement": -25
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 171,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 196,
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
            "position": 10,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 43,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 52,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 78,
            "movement": -7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 84,
            "movement": -1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 89,
            "movement": 8
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 105,
            "movement": -8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 143,
            "movement": -10
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
            "position": 51,
            "movement": -9
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 71,
            "movement": -41
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 88,
            "movement": -32
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
            "position": 54,
            "movement": 10
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 86,
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
            "position": 37,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 52,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 67,
            "movement": 82
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 69,
            "movement": 55
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 72,
            "movement": -17
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 79,
            "movement": 74
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 80,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 113,
            "movement": 43
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 136,
            "movement": 5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 139,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 157,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 168,
            "movement": -14
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 188,
            "movement": -52
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 188,
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
            "position": 173,
            "movement": 20
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
            "country": "LR",
            "name": "Liberia",
            "position": 36,
            "movement": -30
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 42,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 47,
            "movement": -12
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 50,
            "movement": 13
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 58,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 65,
            "movement": -18
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 71,
            "movement": -9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 92,
            "movement": 8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 95,
            "movement": 64
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
            "position": 134,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 182,
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
    "title": "Calm Down",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "IT",
            "name": "Italy",
            "position": 55,
            "movement": 16
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 61,
            "movement": 22
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 65,
            "movement": 20
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 72,
            "movement": 25
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 74,
            "movement": 8
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 86,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 93,
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
            "position": 66,
            "movement": -56
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 186,
            "movement": -52
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
            "movement": -4
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 63,
            "movement": 1
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
            "position": 195,
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
    "title": "Soweto",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "OM",
            "name": "Oman",
            "position": 88,
            "movement": -32
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 90,
            "movement": -7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 115,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 128,
            "movement": 17
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 154,
            "movement": 44
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 155,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 163,
            "movement": -9
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 168,
            "movement": 22
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 172,
            "movement": -10
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 182,
            "movement": -14
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 199,
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
    "title": "HEIS",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 61,
            "movement": 20
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 71,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 79,
            "movement": -68
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 89,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 128,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 129,
            "movement": -58
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 152,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 156,
            "movement": -14
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 162,
            "movement": -11
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 181,
            "movement": 0
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 187,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 192,
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
            "country": "OM",
            "name": "Oman",
            "position": 49,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 68,
            "movement": -14
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 81,
            "movement": -6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 156,
            "movement": 38
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 168,
            "movement": 0
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 185,
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
            "position": 138,
            "movement": -8
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 140,
            "movement": 3
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
            "position": 180,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e26def467fccdcadca010b8c0f00fd0f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Rema Compilation",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 41,
            "movement": 19
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 53,
            "movement": -15
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 83,
            "movement": -6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 85,
            "movement": 26
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 102,
            "movement": 12
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 104,
            "movement": -34
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 111,
            "movement": -7
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 146,
            "movement": 36
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 178,
            "movement": 4
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
            "country": "CV",
            "name": "Cape Verde",
            "position": 60,
            "movement": 20
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 71,
            "movement": -18
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 72,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 78,
            "movement": -34
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 106,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 118,
            "movement": 3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 156,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 182,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 192,
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
    "title": "Beamer",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 62,
            "movement": 13
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 62,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 143,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 147,
            "movement": -6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 174,
            "movement": -43
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 182,
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
    "title": "Ginger Me",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 64,
            "movement": -11
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 99,
            "movement": 10
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 102,
            "movement": 27
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 143,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 156,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 160,
            "movement": 15
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1232dc64734f222e05a866a61860169c/500x500-000000-80-0-0.jpg"
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
            "position": 91,
            "movement": 34
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 104,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 139,
            "movement": -19
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 161,
            "movement": 24
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 197,
            "movement": -25
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
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/fe3deba215d998d74542663a84621852/500x500-000000-80-0-0.jpg"
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
            "position": 20,
            "movement": 26
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 54,
            "movement": 10
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 83,
            "movement": 26
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 175,
            "movement": -21
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
            "position": 109,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 169,
            "movement": -48
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
            "position": 48,
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
            "position": 78,
            "movement": -15
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 100,
            "movement": 42
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 154,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 44,
            "movement": null,
            "status": "new"
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
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 198,
            "movement": 1
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
            "position": 189,
            "movement": -1
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
            "position": 186,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0dd0b79a37a28f75ab7f61b38d0dccda/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Dumebi",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 80,
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
            "position": 67,
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
    "title": "Baby",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 115,
            "movement": 60
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
            "position": 62,
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
    "title": "BENIN BOYS",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "QA",
            "name": "Qatar",
            "position": 7,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5e376f766f35708db51b9c3295fef2ce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "BUBALU",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CO",
            "name": "Colombia",
            "position": 35,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "KELEBU",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 81,
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
    "title": "For Her",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 57,
            "movement": -44
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 131,
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
    "title": "DND",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 151,
            "movement": 37
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9f343b559a9382c0d35ba0c9eca79159/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Holiday",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 174,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d4f61945703f34bba42311d1ec703f94/500x500-000000-80-0-0.jpg"
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
            "position": 178,
            "movement": -17
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
            "position": 164,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Bout U",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 162,
            "movement": -22
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6d2d72d718d4ad08f355e40b0ec94a33/500x500-000000-80-0-0.jpg"
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
            "position": 54,
            "movement": -15
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d386058066ab6b2b140515ed5c591a1f/500x500-000000-80-0-0.jpg"
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
            "position": 184,
            "movement": -27
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1b515afac4090505a9f4531e553f82a8/500x500-000000-80-0-0.jpg"
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
  