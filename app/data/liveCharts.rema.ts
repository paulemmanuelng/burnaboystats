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
  export const liveChartsUpdated = "2026-09-05";
  
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
            "movement": 0
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 16,
            "movement": -4
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 18,
            "movement": -4
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 22,
            "movement": -5
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 39,
            "movement": -10
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 39,
            "movement": -7
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 60,
            "movement": 15
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 77,
            "movement": 3
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 117,
            "movement": 1
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 139,
            "movement": 5
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 144,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 180,
            "movement": -59
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 184,
            "movement": -63
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 186,
            "movement": -18
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 197,
            "movement": 2
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
            "position": 108,
            "movement": -19
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 168,
            "movement": -35
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
            "position": 55,
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
            "country": "LR",
            "name": "Liberia",
            "position": 22,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 22,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 23,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 29,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 34,
            "movement": -24
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
            "position": 59,
            "movement": 4
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 98,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 110,
            "movement": 30
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 134,
            "movement": 54
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 138,
            "movement": 20
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 145,
            "movement": 11
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 155,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 193,
            "movement": -107
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
            "position": 6,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 170,
            "movement": -19
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
            "position": 9,
            "movement": -3
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
            "position": 5,
            "movement": 15
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 13,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 29,
            "movement": -7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 35,
            "movement": 8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 55,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 70,
            "movement": 23
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 74,
            "movement": 67
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 93,
            "movement": 90
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 94,
            "movement": -7
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 122,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 128,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 134,
            "movement": 12
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 137,
            "movement": -7
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 143,
            "movement": -10
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 157,
            "movement": 37
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 180,
            "movement": 12
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
            "country": "UG",
            "name": "Uganda",
            "position": 34,
            "movement": -4
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 37,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 42,
            "movement": 2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 60,
            "movement": -8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 64,
            "movement": 11
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 73,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 76,
            "movement": 4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 87,
            "movement": 11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 91,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 115,
            "movement": 32
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 118,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 132,
            "movement": -42
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 132,
            "movement": -63
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 136,
            "movement": 11
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
            "position": 39,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 49,
            "movement": 65
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 56,
            "movement": 32
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 60,
            "movement": 64
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 61,
            "movement": 85
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 62,
            "movement": 134
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 104,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 106,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 140,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 184,
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
            "position": 132,
            "movement": -5
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
            "position": 196,
            "movement": -17
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
    "title": "Rema Compilation",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 66,
            "movement": -8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 83,
            "movement": 4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 89,
            "movement": 31
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 97,
            "movement": -25
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 104,
            "movement": 66
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 113,
            "movement": 71
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 122,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 123,
            "movement": -5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 125,
            "movement": 32
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 133,
            "movement": -63
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 155,
            "movement": -27
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 200,
            "movement": -118
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/47d4b2f030cf6387a1f36dde2ce29e9b/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "HEIS",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 53,
            "movement": -36
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 75,
            "movement": -5
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 114,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 114,
            "movement": -75
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 126,
            "movement": -33
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 137,
            "movement": -79
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 158,
            "movement": -100
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 185,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 193,
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
            "country": "KH",
            "name": "Cambodia",
            "position": 6,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 28,
            "movement": -4
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 61,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IN",
            "name": "India",
            "position": 126,
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
            "position": 56,
            "movement": -29
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 191,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 194,
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
            "movement": null,
            "status": "new"
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 74,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 78,
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
            "country": "CV",
            "name": "Cape Verde",
            "position": 42,
            "movement": 57
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 78,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 90,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 111,
            "movement": -17
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 120,
            "movement": -29
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 123,
            "movement": 4
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 126,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 127,
            "movement": -18
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 135,
            "movement": -16
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 147,
            "movement": -104
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a21fb655cf3e2fc8b05db68fc6eb34b1/500x500-000000-80-0-0.jpg"
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
            "position": 56,
            "movement": 46
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 77,
            "movement": 0
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 84,
            "movement": -14
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 122,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 124,
            "movement": 2
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 127,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 137,
            "movement": 42
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 170,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
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
    "title": "Soundgasm",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 56,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 82,
            "movement": 51
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 90,
            "movement": 47
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 96,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 98,
            "movement": 35
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 116,
            "movement": -81
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 117,
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 199,
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
    "title": "Ginger Me",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 57,
            "movement": -28
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 90,
            "movement": -19
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 97,
            "movement": 7
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 117,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 148,
            "movement": 40
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 155,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 193,
            "movement": -114
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1232dc64734f222e05a866a61860169c/500x500-000000-80-0-0.jpg"
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
            "position": 81,
            "movement": 75
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 127,
            "movement": -14
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 138,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 190,
            "movement": 8
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
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 120,
            "movement": -20
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
            "position": 189,
            "movement": -26
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3208072ca7af2913cacf001dbb11bbec/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "FUN",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 120,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 182,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 200,
            "movement": -94
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
            "position": 45,
            "movement": 1
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
            "movement": 35
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 143,
            "movement": 24
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 156,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 159,
            "movement": -61
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
    "title": "Beamer",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 66,
            "movement": -5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 91,
            "movement": -28
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 107,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 125,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3a0c90a8279dde44ce6b19d5d41875cd/500x500-000000-80-0-0.jpg"
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
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 195,
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
    "title": "Goals",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TH",
            "name": "Thailand",
            "position": 24,
            "movement": 7
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
            "position": 15,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/159a067af3e7b92c6a6b45c576968b09/500x500-000000-80-0-0.jpg"
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
            "position": 137,
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
            "position": 177,
            "movement": -23
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
            "position": 163,
            "movement": 6
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
            "position": 131,
            "movement": -20
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
            "position": 13,
            "movement": 46
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
            "position": 189,
            "movement": null,
            "status": "new"
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
  