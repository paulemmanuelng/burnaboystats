// GENERATED FILE — do not edit by hand.
  // Rebuilt hourly by scripts/build-live-charts.mjs --artist=wizkid from kworb's artist page.
  //
  // PLATFORM chart data for Wizkid: where each release is sitting RIGHT
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
  export const liveChartsUpdated = "2026-09-02";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "One Dance",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 34,
            "movement": -5
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 55,
            "movement": -1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 57,
            "movement": 3
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 70,
            "movement": 3
          },
          {
            "country": "US",
            "name": "United States",
            "position": 74,
            "movement": -14
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 81,
            "movement": 2
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 85,
            "movement": -14
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 89,
            "movement": 8
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 89,
            "movement": 0
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 98,
            "movement": -2
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 108,
            "movement": 9
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 108,
            "movement": 2
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 108,
            "movement": -8
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 111,
            "movement": -1
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 112,
            "movement": 6
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 120,
            "movement": -1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 125,
            "movement": 33
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 139,
            "movement": 3
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 148,
            "movement": -7
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 160,
            "movement": 5
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 162,
            "movement": 6
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 193,
            "movement": 6
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 194,
            "movement": -7
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 19,
            "movement": 10
          },
          {
            "country": "MS",
            "name": "Montserrat",
            "position": 42,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 68,
            "movement": -8
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 87,
            "movement": 9
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 96,
            "movement": 13
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 99,
            "movement": -24
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 108,
            "movement": -31
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 115,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 118,
            "movement": -24
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 124,
            "movement": -94
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 134,
            "movement": -24
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 136,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 145,
            "movement": -19
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 156,
            "movement": -57
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 169,
            "movement": -20
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 181,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 183,
            "movement": -41
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 188,
            "movement": -7
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 189,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 200,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/56bdb7a86a27fadb96332c0c8f1b8e81/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "MONEY CONSTANT",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 1,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 1,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 4,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 10,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 15,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 18,
            "movement": -8
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 19,
            "movement": -6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 22,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 28,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 29,
            "movement": -4
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 32,
            "movement": 7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 37,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 43,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 46,
            "movement": -2
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 63,
            "movement": 22
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 66,
            "movement": 6
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 121,
            "movement": 35
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 126,
            "movement": -5
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 156,
            "movement": -42
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 162,
            "movement": 3
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 30,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 30,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 45,
            "movement": -2
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 74,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 83,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 86,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 94,
            "movement": 4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 119,
            "movement": 1
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 162,
            "movement": 8
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
            "position": 34,
            "movement": -2
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
            "position": 43,
            "movement": -14
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5b290018c14b243dc3cd77ef4166ee0f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Joro",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 14,
            "movement": -1
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 16,
            "movement": 5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 17,
            "movement": -7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 20,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 28,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 31,
            "movement": 48
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 42,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 44,
            "movement": -25
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 49,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 78,
            "movement": -8
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 79,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 85,
            "movement": -29
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 93,
            "movement": -22
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 111,
            "movement": -74
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 125,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 130,
            "movement": -16
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 132,
            "movement": 58
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 163,
            "movement": -49
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 174,
            "movement": -69
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
            "position": 24,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b1eb19b96a5e2985053b8bef3138498f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Come Closer",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 6,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 10,
            "movement": -5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 13,
            "movement": 5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 15,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 17,
            "movement": -5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 22,
            "movement": 19
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 34,
            "movement": 10
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 36,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 41,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 48,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 54,
            "movement": -6
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 81,
            "movement": 4
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 89,
            "movement": 13
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 95,
            "movement": -4
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 111,
            "movement": 46
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 133,
            "movement": 39
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 189,
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
            "position": 15,
            "movement": 102
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 60,
            "movement": 4
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
            "position": 56,
            "movement": -25
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/18e2a836169d9104959e633694424136/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Jogodo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 24,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 26,
            "movement": 8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 30,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 46,
            "movement": 5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 54,
            "movement": -38
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 56,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 64,
            "movement": -5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 87,
            "movement": 7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 101,
            "movement": -6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 112,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 137,
            "movement": -6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 144,
            "movement": -27
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 145,
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
            "position": 31,
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
            "position": 139,
            "movement": -116
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
            "position": 28,
            "movement": 15
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Made In Lagos: Deluxe Edition",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 18,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 29,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 37,
            "movement": -19
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 50,
            "movement": 5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 52,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 64,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 85,
            "movement": 10
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 105,
            "movement": -16
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 112,
            "movement": -12
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 166,
            "movement": -29
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 178,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 191,
            "movement": -123
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 5,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 39,
            "movement": -7
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ad33274548de3455303618bb650b6d86/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "REAL, Vol. 1 - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 28,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 61,
            "movement": -5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 81,
            "movement": 13
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 93,
            "movement": 47
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 97,
            "movement": -17
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 102,
            "movement": -5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 103,
            "movement": -28
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 108,
            "movement": 55
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 114,
            "movement": -31
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 120,
            "movement": 25
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 180,
            "movement": -49
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 190,
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
            "position": 4,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "MMS",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 38,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 39,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 62,
            "movement": -12
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 71,
            "movement": -33
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 87,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 99,
            "movement": 8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 104,
            "movement": -35
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 111,
            "movement": -22
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 126,
            "movement": 11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 136,
            "movement": -54
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
            "position": 83,
            "movement": -7
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
            "position": 3,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Morayo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 17,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 25,
            "movement": 66
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 41,
            "movement": -9
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 81,
            "movement": 94
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 93,
            "movement": 71
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 94,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 103,
            "movement": -7
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 108,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 109,
            "movement": -39
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 110,
            "movement": -20
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 123,
            "movement": 11
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 157,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2538836fe7ba780c5a3a4c04aef4fac5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ayo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 3,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 74,
            "movement": 3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 83,
            "movement": 67
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 121,
            "movement": -47
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 133,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 150,
            "movement": -36
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
            "position": 18,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 35,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 53,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 64,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 77,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 80,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9be0538ebbb9c6fd3dcb74844e7e2e2a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ginger",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 21,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 22,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 27,
            "movement": 8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 28,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 32,
            "movement": 11
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 62,
            "movement": -10
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 81,
            "movement": -29
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 95,
            "movement": -40
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 98,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 126,
            "movement": -24
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Sounds From The Other Side",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 34,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 49,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 107,
            "movement": 17
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 132,
            "movement": -13
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 158,
            "movement": -51
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 168,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 181,
            "movement": -45
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a8dc47ce1fd807b1814e8171a91c1fc9/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Turbulence",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 14,
            "movement": 31
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 82,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 107,
            "movement": 17
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 117,
            "movement": -31
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
            "position": 65,
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
            "position": 40,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ojuelegba",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 4,
            "movement": 3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 47,
            "movement": 56
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 94,
            "movement": -52
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 110,
            "movement": -12
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 175,
            "movement": 24
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
    "cover": "https://cdn-images.dzcdn.net/images/cover/9be0538ebbb9c6fd3dcb74844e7e2e2a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "More Love, Less Ego",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 36,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 81,
            "movement": -42
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 108,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 120,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 124,
            "movement": 3
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 196,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e4286ac8a38829b6cf5d225c311bccf7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Jam",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 45,
            "movement": 12
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 49,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 144,
            "movement": -5
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 161,
            "movement": -8
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 167,
            "movement": -13
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/09422f55197ec57417a5742ce5801f13/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Sponono",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 71,
            "movement": -29
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 81,
            "movement": -14
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 101,
            "movement": -13
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 132,
            "movement": -41
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 168,
            "movement": -79
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f830d11dfb6ee3025b93e60a0e15f075/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Essence",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 9,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 23,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 29,
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
            "position": 178,
            "movement": 15
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "forever be mine",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 140,
            "movement": 18
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 171,
            "movement": 5
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 192,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/332d8393d5c9e2d7c5345b8e5fd2a049/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Made In Lagos",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 46,
            "movement": 0
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 86,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 100,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Superstar",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 53,
            "movement": -5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 167,
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
            "position": 130,
            "movement": 9
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6ddb34c26029baeb2bd73c71bb8d839f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "One Condition",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 116,
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
            "position": 100,
            "movement": 9
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e53dccb976a98d09db9a195ce84162f2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "BIG TIME",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 181,
            "movement": -12
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
            "position": 115,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0af8d1b7ecebd4fec1dbb6c048f2105f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Gimme Dat",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 140,
            "movement": 3
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
            "position": 191,
            "movement": -135
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2e52f4bf8bdb05c98002b714669ee2c2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "PAMI",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 130,
            "movement": -35
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 173,
            "movement": -68
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/bd76a1b1daca04cea85edf1c9b022a27/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Tonight",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 189,
            "movement": -21
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 193,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/67996ba3c56f059ae5a870268c66b39f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "SoundMan, Vol. 1",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 109,
            "movement": 26
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 165,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b6c9342dc0ab40a9e837ebb16a8b24dd/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Kana",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 23,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2538836fe7ba780c5a3a4c04aef4fac5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bad For You",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 51,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2538836fe7ba780c5a3a4c04aef4fac5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Blessed",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 17,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Slow",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 87,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2538836fe7ba780c5a3a4c04aef4fac5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Alaye",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 135,
            "movement": 7
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Time",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 110,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2538836fe7ba780c5a3a4c04aef4fac5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bad Girl",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 45,
            "movement": -13
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2538836fe7ba780c5a3a4c04aef4fac5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Billionaires Club",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 45,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Bella",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 89,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e4286ac8a38829b6cf5d225c311bccf7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Stay For The Night",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 116,
            "movement": 5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/27ab85a0fa9ffa1c5a337c8e8ce43194/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Getting Paid",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 153,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "IDG",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 96,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5b12d64d8d1d710d3bf0abe0b3ac0fa5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Anxious",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BB",
            "name": "Barbados",
            "position": 32,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Kese",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 96,
            "movement": -15
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2538836fe7ba780c5a3a4c04aef4fac5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Smile",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 136,
            "movement": -112
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Steady",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 153,
            "movement": -122
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ad33274548de3455303618bb650b6d86/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Alive",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 144,
            "movement": -13
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/76f42907d9ab6c5cd7a89b4c86806f1c/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "S2 - EP",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 31,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ad33274548de3455303618bb650b6d86/500x500-000000-80-0-0.jpg"
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
  