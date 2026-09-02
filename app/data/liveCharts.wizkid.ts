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
            "country": "OM",
            "name": "Oman",
            "position": 38,
            "movement": 61
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
            "position": 56,
            "movement": 12
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 75,
            "movement": 12
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 105,
            "movement": -9
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 108,
            "movement": -31
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 117,
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
            "country": "UG",
            "name": "Uganda",
            "position": 131,
            "movement": 52
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 134,
            "movement": -24
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 145,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 151,
            "movement": 30
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 189,
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
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 2,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 2,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 10,
            "movement": 0
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
            "position": 26,
            "movement": -4
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
            "country": "CM",
            "name": "Cameroon",
            "position": 37,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 42,
            "movement": 1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 45,
            "movement": -13
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 50,
            "movement": -4
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 66,
            "movement": 6
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 70,
            "movement": -7
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 111,
            "movement": 10
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
            "position": 175,
            "movement": -13
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
            "position": 28,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 31,
            "movement": -1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 44,
            "movement": 1
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 76,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 81,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 90,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 101,
            "movement": -7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 124,
            "movement": -5
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 181,
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
            "position": 34,
            "movement": -2
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 1,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 1,
            "movement": 36
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5b290018c14b243dc3cd77ef4166ee0f/500x500-000000-80-0-0.jpg"
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
            "position": 5,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 6,
            "movement": 4
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
            "position": 16,
            "movement": -1
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
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 45,
            "movement": -4
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
            "country": "NA",
            "name": "Namibia",
            "position": 108,
            "movement": 3
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 112,
            "movement": -17
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 143,
            "movement": -10
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 169,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 194,
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
            "position": 79,
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
            "country": "SN",
            "name": "Senegal",
            "position": 60,
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
    "title": "Joro",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 7,
            "movement": 7
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
            "position": 21,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 29,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 30,
            "movement": 1
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
            "country": "ML",
            "name": "Mali",
            "position": 67,
            "movement": 107
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 78,
            "movement": 0
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
            "position": 102,
            "movement": -9
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 111,
            "movement": -74
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 119,
            "movement": 13
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 128,
            "movement": -3
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 136,
            "movement": -6
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 163,
            "movement": -49
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
            "position": 90,
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
    "title": "Made In Lagos: Deluxe Edition",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 14,
            "movement": 15
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 18,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 58,
            "movement": -8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 70,
            "movement": -18
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 86,
            "movement": -22
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 86,
            "movement": -49
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 105,
            "movement": -16
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 123,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 141,
            "movement": 25
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 155,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 161,
            "movement": -76
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
            "position": 6,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 41,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ad33274548de3455303618bb650b6d86/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Jogodo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 24,
            "movement": 30
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 24,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 25,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 27,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 46,
            "movement": 5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 56,
            "movement": 0
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
            "position": 81,
            "movement": 6
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
            "position": 141,
            "movement": -4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 144,
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
            "position": 31,
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
    "title": "MMS",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 39,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 39,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 53,
            "movement": 9
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 57,
            "movement": 14
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 87,
            "movement": 24
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 89,
            "movement": -2
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
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 163,
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
            "position": 83,
            "movement": -7
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 1,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 1,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
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
            "position": 2,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 66,
            "movement": 17
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 74,
            "movement": 3
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
            "position": 134,
            "movement": -1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 182,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
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
            "country": "GM",
            "name": "Gambia",
            "position": 17,
            "movement": 1
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
            "movement": 0
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
            "position": 72,
            "movement": 4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 79,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9be0538ebbb9c6fd3dcb74844e7e2e2a/500x500-000000-80-0-0.jpg"
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
            "country": "BJ",
            "name": "Benin",
            "position": 74,
            "movement": 28
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 84,
            "movement": 19
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 87,
            "movement": -6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 95,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 102,
            "movement": -9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 111,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 120,
            "movement": 25
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 136,
            "movement": 44
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 177,
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
            "position": 6,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "album"
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
            "country": "LR",
            "name": "Liberia",
            "position": 35,
            "movement": 59
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 36,
            "movement": 23
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 45,
            "movement": -4
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
            "country": "CM",
            "name": "Cameroon",
            "position": 100,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 101,
            "movement": -76
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 115,
            "movement": -6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 116,
            "movement": -6
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
            "position": 168,
            "movement": -11
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2538836fe7ba780c5a3a4c04aef4fac5/500x500-000000-80-0-0.jpg"
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
            "position": 17,
            "movement": 4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 23,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 26,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 27,
            "movement": 8
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
            "position": 101,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 126,
            "movement": -24
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 160,
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
    "title": "Sounds From The Other Side",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 30,
            "movement": 4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 49,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 142,
            "movement": -10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 149,
            "movement": -42
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 158,
            "movement": -51
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 169,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 176,
            "movement": -8
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 195,
            "movement": -14
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a8dc47ce1fd807b1814e8171a91c1fc9/500x500-000000-80-0-0.jpg"
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
            "country": "BJ",
            "name": "Benin",
            "position": 79,
            "movement": 45
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 89,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 128,
            "movement": -47
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 152,
            "movement": -32
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 188,
            "movement": -80
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
    "title": "Turbulence",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 8,
            "movement": 42
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 79,
            "movement": 3
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
            "movement": 6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 92,
            "movement": 18
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 93,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 136,
            "movement": -89
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
            "position": 83,
            "movement": -2
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 90,
            "movement": 11
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 103,
            "movement": 29
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
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/09422f55197ec57417a5742ce5801f13/500x500-000000-80-0-0.jpg"
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
            "position": 30,
            "movement": -4
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
            "position": 87,
            "movement": 80
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
            "position": 124,
            "movement": 5
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
            "position": 93,
            "movement": 7
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e53dccb976a98d09db9a195ce84162f2/500x500-000000-80-0-0.jpg"
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
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 197,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
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
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0af8d1b7ecebd4fec1dbb6c048f2105f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "forever be mine",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 132,
            "movement": 39
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 137,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/332d8393d5c9e2d7c5345b8e5fd2a049/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Tonight",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 147,
            "movement": 46
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 189,
            "movement": -21
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/67996ba3c56f059ae5a870268c66b39f/500x500-000000-80-0-0.jpg"
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
            "position": 47,
            "movement": -1
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 86,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
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
    "title": "Slow",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 85,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2538836fe7ba780c5a3a4c04aef4fac5/500x500-000000-80-0-0.jpg"
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
            "movement": 0
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
            "position": 67,
            "movement": -28
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2538836fe7ba780c5a3a4c04aef4fac5/500x500-000000-80-0-0.jpg"
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
            "position": 112,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/27ab85a0fa9ffa1c5a337c8e8ce43194/500x500-000000-80-0-0.jpg"
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
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2e52f4bf8bdb05c98002b714669ee2c2/500x500-000000-80-0-0.jpg"
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
            "position": 42,
            "movement": -11
          }
        ]
      }
    ],
    "kind": "song"
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
            "position": 110,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "PAMI",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
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
    "title": "Alive",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 165,
            "movement": -21
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/76f42907d9ab6c5cd7a89b4c86806f1c/500x500-000000-80-0-0.jpg"
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
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b6c9342dc0ab40a9e837ebb16a8b24dd/500x500-000000-80-0-0.jpg"
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
            "position": 33,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ad33274548de3455303618bb650b6d86/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bad For You",
    "kind": "song",
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
    "cover": "https://cdn-images.dzcdn.net/images/cover/2538836fe7ba780c5a3a4c04aef4fac5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Fever",
    "platforms": [],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f4b6e3fe68fe1e1f8bcc5749bddf2955/500x500-000000-80-0-0.jpg"
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
  