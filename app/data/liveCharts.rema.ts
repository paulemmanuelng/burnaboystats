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
  export const liveChartsUpdated = "2026-09-16";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
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
            "position": 2,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 2,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 2,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 2,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 3,
            "movement": 5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 4,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 6,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 11,
            "movement": -3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 16,
            "movement": 0
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 17,
            "movement": -7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 20,
            "movement": 2
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 31,
            "movement": 97
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 38,
            "movement": 8
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 41,
            "movement": 20
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 44,
            "movement": 3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 50,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 54,
            "movement": 3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 58,
            "movement": -25
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 62,
            "movement": 44
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 66,
            "movement": 22
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 76,
            "movement": 51
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 77,
            "movement": 36
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 96,
            "movement": 6
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 102,
            "movement": 0
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 103,
            "movement": null,
            "status": "new"
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 111,
            "movement": -49
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 141,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 177,
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
            "position": 33,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 64,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 142,
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
            "country": "KE",
            "name": "Kenya",
            "position": 7,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 24,
            "movement": -18
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 28,
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
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 46,
            "movement": -5
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 169,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 1,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 1,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/fe3deba215d998d74542663a84621852/500x500-000000-80-0-0.jpg"
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
            "position": 17,
            "movement": 6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 17,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 21,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 38,
            "movement": -21
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 44,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 56,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 57,
            "movement": 5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 117,
            "movement": -10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 146,
            "movement": -11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 148,
            "movement": -12
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 164,
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
            "country": "UG",
            "name": "Uganda",
            "position": 24,
            "movement": 15
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 35,
            "movement": 31
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 54,
            "movement": -37
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 81,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 105,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 119,
            "movement": -24
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 138,
            "movement": 0
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 1,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 1,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 18,
            "movement": -6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 23,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 64,
            "movement": -2
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
            "position": 7,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 81,
            "movement": 11
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
            "position": 14,
            "movement": 1
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
            "position": 90,
            "movement": 6
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6ad6ca24531d374241de87ca5e3211ca/500x500-000000-80-0-0.jpg"
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
            "position": 4,
            "movement": 4
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 16,
            "movement": -1
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 23,
            "movement": 12
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 28,
            "movement": -1
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 30,
            "movement": 11
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 39,
            "movement": -6
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 70,
            "movement": -22
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 101,
            "movement": -15
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 167,
            "movement": -20
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 175,
            "movement": -3
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
            "country": "CA",
            "name": "Canada",
            "position": 159,
            "movement": 36
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 171,
            "movement": 20
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 174,
            "movement": -26
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
            "country": "VN",
            "name": "Vietnam",
            "position": 37,
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
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 48,
            "movement": 13
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 52,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 55,
            "movement": 56
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 77,
            "movement": -31
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 86,
            "movement": -23
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 88,
            "movement": -5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 90,
            "movement": -21
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 127,
            "movement": 49
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 158,
            "movement": -52
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 174,
            "movement": -42
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 196,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 196,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 197,
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
    "title": "Charm",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 35,
            "movement": 6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 36,
            "movement": 76
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 61,
            "movement": -15
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 64,
            "movement": -16
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 116,
            "movement": -16
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 131,
            "movement": 2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 132,
            "movement": -9
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 147,
            "movement": -47
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 160,
            "movement": 9
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 162,
            "movement": -13
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 187,
            "movement": -86
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 188,
            "movement": -32
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 197,
            "movement": -40
          }
        ]
      }
    ],
    "kind": "song",
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
            "country": "UG",
            "name": "Uganda",
            "position": 32,
            "movement": 6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 49,
            "movement": -5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 57,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 58,
            "movement": -30
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 69,
            "movement": 1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 78,
            "movement": 18
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 119,
            "movement": -9
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 144,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 166,
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
            "position": 156,
            "movement": 1
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
            "position": 55,
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
    "title": "Soweto",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 75,
            "movement": -41
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 88,
            "movement": -13
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 114,
            "movement": -1
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 124,
            "movement": -29
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 125,
            "movement": -37
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 139,
            "movement": -42
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 158,
            "movement": 22
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 172,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 183,
            "movement": -46
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 190,
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
            "position": 25,
            "movement": -1
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 63,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 70,
            "movement": -4
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 91,
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
            "country": "MV",
            "name": "Maldives",
            "position": 120,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 169,
            "movement": -10
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 174,
            "movement": 12
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 88,
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
            "country": "UG",
            "name": "Uganda",
            "position": 76,
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
    "title": "HEIS",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 64,
            "movement": -52
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 66,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 78,
            "movement": -7
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 124,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 126,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 139,
            "movement": -38
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 161,
            "movement": -92
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 179,
            "movement": -29
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 58,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 75,
            "movement": 18
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 89,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 103,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 108,
            "movement": -15
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 140,
            "movement": -39
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 141,
            "movement": -19
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 162,
            "movement": -56
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 180,
            "movement": -13
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/47d4b2f030cf6387a1f36dde2ce29e9b/500x500-000000-80-0-0.jpg"
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
            "position": 24,
            "movement": 82
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 90,
            "movement": -23
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 118,
            "movement": -40
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 153,
            "movement": 36
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 157,
            "movement": 43
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 177,
            "movement": -6
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
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 64,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e26def467fccdcadca010b8c0f00fd0f/500x500-000000-80-0-0.jpg"
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
            "position": 149,
            "movement": 10
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 155,
            "movement": -28
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 178,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 193,
            "movement": -24
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
            "position": 7,
            "movement": 96
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 53,
            "movement": -2
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
            "position": 176,
            "movement": -3
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
            "position": 53,
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
    "title": "Soundgasm",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 59,
            "movement": 4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 110,
            "movement": -20
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 111,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 116,
            "movement": -66
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 127,
            "movement": 12
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 127,
            "movement": -18
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
            "position": 57,
            "movement": 69
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 70,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 96,
            "movement": 5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 142,
            "movement": 7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 194,
            "movement": -79
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 200,
            "movement": -66
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1232dc64734f222e05a866a61860169c/500x500-000000-80-0-0.jpg"
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
            "position": 88,
            "movement": 36
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 128,
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
            "position": 41,
            "movement": -2
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
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 65,
            "movement": -15
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
            "position": 82,
            "movement": 7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 142,
            "movement": 34
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 177,
            "movement": 5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 195,
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
    "title": "Lalala",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 101,
            "movement": 90
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 169,
            "movement": -6
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
            "position": 135,
            "movement": 6
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
            "position": 118,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0dd0b79a37a28f75ab7f61b38d0dccda/500x500-000000-80-0-0.jpg"
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
            "movement": -5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 114,
            "movement": 4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 128,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3a0c90a8279dde44ce6b19d5d41875cd/500x500-000000-80-0-0.jpg"
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
            "position": 181,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 190,
            "movement": null,
            "status": "new"
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
        "numberOnes": 0,
        "entries": [
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 9,
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
            "country": "US",
            "name": "United States",
            "position": 181,
            "movement": -98
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/8d26b51a325ab59c594708d1c8c71bf2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Fi Kan We Kan",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 69,
            "movement": -19
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e4c2c39678f951dd57f09d2e98cd4062/500x500-000000-80-0-0.jpg"
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
            "position": 179,
            "movement": -18
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
            "position": 59,
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
  