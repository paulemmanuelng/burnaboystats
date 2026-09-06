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
  export const liveChartsUpdated = "2026-09-06";
  
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
            "position": 3,
            "movement": 3
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 16,
            "movement": 0
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 24,
            "movement": -6
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 24,
            "movement": -2
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 46,
            "movement": -7
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 78,
            "movement": -39
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 88,
            "movement": -11
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 96,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 140,
            "movement": -23
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 150,
            "movement": -90
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 183,
            "movement": -3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 186,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 196,
            "movement": 1
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 200,
            "movement": -61
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
            "movement": -56
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 184,
            "movement": -16
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "IN",
            "name": "India",
            "position": 159,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 168,
            "movement": -105
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
            "position": 13,
            "movement": 9
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 18,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 21,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 27,
            "movement": 7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 35,
            "movement": -6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 37,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 72,
            "movement": -13
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 106,
            "movement": 4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 116,
            "movement": 22
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 151,
            "movement": -6
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 181,
            "movement": -47
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 200,
            "movement": -102
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
            "position": 5,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 85,
            "movement": null,
            "status": "re"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 93,
            "movement": -16
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
            "position": 4,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 195,
            "movement": -22
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
            "position": 10,
            "movement": -1
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
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 54,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 65,
            "movement": 5
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 72,
            "movement": -43
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 84,
            "movement": -79
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 86,
            "movement": -12
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 99,
            "movement": 44
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 101,
            "movement": -7
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 127,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 129,
            "movement": 8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 136,
            "movement": -8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 160,
            "movement": -26
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 170,
            "movement": -77
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 188,
            "movement": -31
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 40,
            "movement": 75
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 43,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 46,
            "movement": -12
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 61,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 62,
            "movement": 14
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 65,
            "movement": -1
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 67,
            "movement": 65
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 80,
            "movement": 11
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 111,
            "movement": -24
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 134,
            "movement": -97
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 167,
            "movement": -31
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 181,
            "movement": -108
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 184,
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
            "country": "NE",
            "name": "Niger",
            "position": 58,
            "movement": 79
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 71,
            "movement": -15
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 81,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 101,
            "movement": 23
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 123,
            "movement": 4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 169,
            "movement": 1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 178,
            "movement": 10
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 180,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 194,
            "movement": -72
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 197,
            "movement": -120
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
            "position": 184,
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
            "country": "OM",
            "name": "Oman",
            "position": 52,
            "movement": 95
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 77,
            "movement": -35
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 79,
            "movement": 11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 93,
            "movement": -15
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 103,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 124,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 131,
            "movement": -11
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 133,
            "movement": -6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 153,
            "movement": -18
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 153,
            "movement": -42
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
            "position": 166,
            "movement": -107
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a21fb655cf3e2fc8b05db68fc6eb34b1/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Rema Compilation",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 51,
            "movement": 62
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 66,
            "movement": 38
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 67,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 84,
            "movement": 5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 86,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 86,
            "movement": 11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 110,
            "movement": 13
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 142,
            "movement": -17
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 162,
            "movement": -7
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 190,
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
            "position": 33,
            "movement": 6
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 50,
            "movement": 12
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 51,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 64,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 66,
            "movement": -10
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 75,
            "movement": -14
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 133,
            "movement": 7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 139,
            "movement": -35
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 146,
            "movement": -40
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
            "position": 141,
            "movement": -9
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
    "title": "HEIS",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 57,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 67,
            "movement": -14
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 73,
            "movement": 2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 89,
            "movement": 37
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 93,
            "movement": 21
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 118,
            "movement": 65
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 146,
            "movement": 16
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 178,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 182,
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
    "title": "Calm Down",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 25,
            "movement": 1
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 42,
            "movement": -35
          },
          {
            "country": "IN",
            "name": "India",
            "position": 199,
            "movement": -62
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
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 62,
            "movement": -6
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 182,
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
    "title": "Baby",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 76,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 112,
            "movement": 15
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 119,
            "movement": 26
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 195,
            "movement": -5
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
            "position": 4,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 23,
            "movement": 100
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
            "position": 159,
            "movement": 30
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
            "movement": 32
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 96,
            "movement": -6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 141,
            "movement": 7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 148,
            "movement": 7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 148,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 171,
            "movement": -54
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 178,
            "movement": null,
            "status": "new"
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
            "country": "UG",
            "name": "Uganda",
            "position": 55,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 58,
            "movement": 32
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 90,
            "movement": 8
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 116,
            "movement": 83
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 121,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 121,
            "movement": -39
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
            "position": 93,
            "movement": 107
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 184,
            "movement": -64
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
            "position": 46,
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
            "position": 45,
            "movement": -1
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
            "movement": 8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 78,
            "movement": 29
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 89,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 126,
            "movement": -1
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
            "position": 85,
            "movement": -11
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 164,
            "movement": -21
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
    "title": "Goals",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TH",
            "name": "Thailand",
            "position": 52,
            "movement": -30
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
    "title": "Bad Commando",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 50,
            "movement": -35
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/159a067af3e7b92c6a6b45c576968b09/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "AZAMAN",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 102,
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
    "title": "Trouble Maker",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 145,
            "movement": 32
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
            "country": "LR",
            "name": "Liberia",
            "position": 162,
            "movement": -25
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d4f61945703f34bba42311d1ec703f94/500x500-000000-80-0-0.jpg"
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
            "position": 162,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e4c2c39678f951dd57f09d2e98cd4062/500x500-000000-80-0-0.jpg"
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
            "position": 190,
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
    "title": "Mara",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 156,
            "movement": -22
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
            "position": 15,
            "movement": -2
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
  