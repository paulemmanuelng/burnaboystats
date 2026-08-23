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
  export const liveChartsUpdated = "2026-08-23";
  
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
            "position": 12,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 16,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 18,
            "movement": -3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 19,
            "movement": -6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 27,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 33,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 41,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 57,
            "movement": -4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 62,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 65,
            "movement": 11
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 125,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 171,
            "movement": -18
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 188,
            "movement": 12
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 199,
            "movement": -12
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
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 45,
            "movement": 9
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 49,
            "movement": 7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 71,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 83,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 97,
            "movement": 16
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 97,
            "movement": 4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 133,
            "movement": 6
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 184,
            "movement": 0
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 188,
            "movement": -4
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
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 68,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 95,
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
            "country": "SI",
            "name": "Slovenia",
            "position": 24,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 29,
            "movement": -24
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 55,
            "movement": -41
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
            "position": 29,
            "movement": -21
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 38,
            "movement": -27
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
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 48,
            "movement": -5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 55,
            "movement": 41
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 59,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 109,
            "movement": -41
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 124,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 135,
            "movement": 6
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 136,
            "movement": 16
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 141,
            "movement": -12
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 149,
            "movement": 16
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 153,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 154,
            "movement": -9
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 156,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 160,
            "movement": 21
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 161,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 200,
            "movement": -4
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
            "movement": -31
          }
        ]
      }
    ],
    "kind": "song",
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
            "country": "CH",
            "name": "Switzerland",
            "position": 58,
            "movement": 8
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 64,
            "movement": 6
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 76,
            "movement": -10
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 78,
            "movement": -15
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 80,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 83,
            "movement": -16
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 85,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 86,
            "movement": -12
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
            "position": 10,
            "movement": 49
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 134,
            "movement": null,
            "status": "new"
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 193,
            "movement": -68
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
            "position": 21,
            "movement": 4
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 63,
            "movement": 19
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
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/07d4291391724a969f243406cc92be66/500x500-000000-80-0-0.jpg"
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
            "position": 38,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 60,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 70,
            "movement": -12
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 77,
            "movement": 3
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 101,
            "movement": -64
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 104,
            "movement": 33
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 111,
            "movement": -58
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 111,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 114,
            "movement": 7
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 140,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 143,
            "movement": -15
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 182,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 182,
            "movement": -46
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
            "country": "LR",
            "name": "Liberia",
            "position": 6,
            "movement": 125
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 35,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 41,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 47,
            "movement": 44
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 61,
            "movement": 5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 62,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 63,
            "movement": 13
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 100,
            "movement": 38
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 159,
            "movement": -13
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 163,
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
    "title": "Bounce",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 54,
            "movement": 17
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 75,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 168,
            "movement": 9
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 189,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 194,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 194,
            "movement": -26
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
            "position": 60,
            "movement": 2
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 130,
            "movement": -3
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 143,
            "movement": 4
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
            "movement": -13
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
            "position": 56,
            "movement": 66
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 83,
            "movement": 9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 119,
            "movement": 8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 145,
            "movement": -23
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 154,
            "movement": -82
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 162,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 168,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 190,
            "movement": -24
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 198,
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
            "position": 198,
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
            "country": "NE",
            "name": "Niger",
            "position": 11,
            "movement": 13
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 71,
            "movement": -35
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 73,
            "movement": -10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 81,
            "movement": -31
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 141,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 142,
            "movement": 21
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 151,
            "movement": -46
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 181,
            "movement": -21
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 184,
            "movement": -63
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4891a944de9418f059cabda0c7699160/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Who's Dat Girl",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 80,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 100,
            "movement": -9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 120,
            "movement": -11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 125,
            "movement": 52
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 160,
            "movement": -21
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 172,
            "movement": 26
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
            "movement": -20
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
            "country": "LR",
            "name": "Liberia",
            "position": 44,
            "movement": 58
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 53,
            "movement": 28
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 71,
            "movement": 5
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 80,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 121,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 182,
            "movement": -1
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
            "country": "LR",
            "name": "Liberia",
            "position": 53,
            "movement": 78
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 109,
            "movement": -24
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 129,
            "movement": 62
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 151,
            "movement": 4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 193,
            "movement": -80
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
            "position": 46,
            "movement": 27
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 64,
            "movement": 20
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 109,
            "movement": -22
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 154,
            "movement": 25
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 189,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/123eb0268dfea84370a28c4a2114dc28/500x500-000000-80-0-0.jpg"
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
            "position": 64,
            "movement": -8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 75,
            "movement": 35
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 131,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 141,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 141,
            "movement": 7
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
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 51,
            "movement": -14
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
            "position": 121,
            "movement": 8
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
            "movement": 11
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
            "position": 63,
            "movement": 14
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 98,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 142,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 188,
            "movement": 5
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
            "position": 178,
            "movement": -21
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0dd0b79a37a28f75ab7f61b38d0dccda/500x500-000000-80-0-0.jpg"
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
            "position": 175,
            "movement": -4
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
            "position": 71,
            "movement": -41
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3208072ca7af2913cacf001dbb11bbec/500x500-000000-80-0-0.jpg"
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
            "position": 161,
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
            "position": 86,
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
    "title": "DND",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 200,
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
    "title": "RAVAGE - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 157,
            "movement": 10
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 186,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1b515afac4090505a9f4531e553f82a8/500x500-000000-80-0-0.jpg"
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
            "position": 7,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
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
            "position": 126,
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
    "title": "BENIN BOYS",
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
    "cover": "https://cdn-images.dzcdn.net/images/cover/5e376f766f35708db51b9c3295fef2ce/500x500-000000-80-0-0.jpg"
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
            "position": 198,
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
    "title": "Bout U",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 139,
            "movement": -47
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
            "position": 39,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d386058066ab6b2b140515ed5c591a1f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Charm (Sped Up)",
    "kind": "song",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 26,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "cover": "https://cdn-images.dzcdn.net/images/cover/ab70dde3639fa6c2851aeff25ef01379/500x500-000000-80-0-0.jpg"
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
  