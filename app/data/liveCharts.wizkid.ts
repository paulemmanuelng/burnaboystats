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
  export const liveChartsUpdated = "2026-09-16";
  
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
            "position": 43,
            "movement": -6
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 62,
            "movement": 4
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 73,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 83,
            "movement": -5
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 100,
            "movement": -2
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 101,
            "movement": 6
          },
          {
            "country": "US",
            "name": "United States",
            "position": 104,
            "movement": -19
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 114,
            "movement": -28
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 115,
            "movement": 71
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 116,
            "movement": 9
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 121,
            "movement": -8
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 128,
            "movement": 12
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 136,
            "movement": -9
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 145,
            "movement": -5
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 150,
            "movement": -3
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 155,
            "movement": -17
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 170,
            "movement": -23
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 189,
            "movement": -2
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 189,
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 199,
            "movement": -15
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MS",
            "name": "Montserrat",
            "position": 42,
            "movement": 0
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 42,
            "movement": 27
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 49,
            "movement": -6
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 61,
            "movement": -5
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 63,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 86,
            "movement": -19
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 92,
            "movement": 20
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 111,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 113,
            "movement": 83
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 121,
            "movement": 5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 127,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 146,
            "movement": 0
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 169,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 186,
            "movement": 3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 191,
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
            "country": "JO",
            "name": "Jordan",
            "position": 2,
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
            "country": "NE",
            "name": "Niger",
            "position": 3,
            "movement": 8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 4,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 6,
            "movement": 3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 9,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 12,
            "movement": -2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 21,
            "movement": 4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 26,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 31,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 34,
            "movement": 14
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 36,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 36,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 41,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 70,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 85,
            "movement": 8
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 149,
            "movement": 5
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 159,
            "movement": -23
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 183,
            "movement": -11
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 186,
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
            "position": 28,
            "movement": 8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 31,
            "movement": -1
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 37,
            "movement": 4
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 44,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 82,
            "movement": 14
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 85,
            "movement": 16
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 94,
            "movement": -14
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
            "position": 30,
            "movement": 8
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
            "country": "KE",
            "name": "Kenya",
            "position": 5,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 8,
            "movement": -3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 11,
            "movement": 10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 17,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 21,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 33,
            "movement": -8
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 36,
            "movement": 11
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 39,
            "movement": 16
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 42,
            "movement": -9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 55,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 79,
            "movement": 0
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 88,
            "movement": 2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 111,
            "movement": 11
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 116,
            "movement": 27
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 124,
            "movement": -17
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 128,
            "movement": -6
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 156,
            "movement": -57
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 186,
            "movement": -53
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
            "position": 197,
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
            "position": 10,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 25,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 25,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 41,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 45,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 54,
            "movement": -7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 59,
            "movement": -19
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 76,
            "movement": 22
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 79,
            "movement": -9
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 87,
            "movement": 13
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 89,
            "movement": -51
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 91,
            "movement": 4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 107,
            "movement": -41
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 111,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 119,
            "movement": -4
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 142,
            "movement": 14
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 156,
            "movement": 0
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 184,
            "movement": -41
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b1eb19b96a5e2985053b8bef3138498f/500x500-000000-80-0-0.jpg"
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
            "position": 23,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 25,
            "movement": 3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 25,
            "movement": 37
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 30,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 34,
            "movement": -9
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 50,
            "movement": -8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 51,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 55,
            "movement": -10
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 79,
            "movement": 89
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 96,
            "movement": -11
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 116,
            "movement": -21
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 133,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 134,
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
            "position": 43,
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
            "position": 25,
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
            "position": 50,
            "movement": null,
            "status": "re"
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
            "position": 20,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 37,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 47,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 52,
            "movement": 26
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 77,
            "movement": -6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 91,
            "movement": -25
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 110,
            "movement": 8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 126,
            "movement": 31
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 155,
            "movement": 27
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 172,
            "movement": 14
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 177,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 184,
            "movement": 10
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 187,
            "movement": -107
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
            "position": 15,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
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
            "position": 15,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 35,
            "movement": -17
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 44,
            "movement": 8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 45,
            "movement": 76
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 60,
            "movement": -12
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 71,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 82,
            "movement": -46
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 82,
            "movement": -15
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 99,
            "movement": -19
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 103,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 131,
            "movement": 42
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 172,
            "movement": -92
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 198,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ad33274548de3455303618bb650b6d86/500x500-000000-80-0-0.jpg"
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
            "position": 63,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 65,
            "movement": 8
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 95,
            "movement": -7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 102,
            "movement": -7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 123,
            "movement": -30
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 150,
            "movement": 38
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 162,
            "movement": -34
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 188,
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
            "position": 19,
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
            "position": 47,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 66,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 78,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 81,
            "movement": -1
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
            "country": "NG",
            "name": "Nigeria",
            "position": 20,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 28,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 29,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 47,
            "movement": 10
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 48,
            "movement": 3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 57,
            "movement": 21
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 62,
            "movement": -38
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 103,
            "movement": -18
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 108,
            "movement": 29
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 112,
            "movement": 17
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 121,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 165,
            "movement": -16
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 180,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
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
            "position": 14,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 41,
            "movement": 41
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 53,
            "movement": -23
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 62,
            "movement": 69
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 65,
            "movement": 85
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 131,
            "movement": 17
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 134,
            "movement": 30
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 140,
            "movement": -66
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 149,
            "movement": -10
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 186,
            "movement": 5
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 197,
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
            "position": 2,
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
    "title": "REAL, Vol. 1 - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 29,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 55,
            "movement": 114
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 67,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 80,
            "movement": -24
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 101,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 104,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 109,
            "movement": -19
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 112,
            "movement": 4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 135,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 146,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 189,
            "movement": 2
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
            "position": 147,
            "movement": -65
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Ojuelegba",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 42,
            "movement": -16
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 69,
            "movement": -7
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 91,
            "movement": 85
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 99,
            "movement": -19
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 166,
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
            "position": 179,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 1,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 1,
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
            "position": 135,
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
    "title": "Sounds From The Other Side",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 43,
            "movement": 4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 55,
            "movement": 5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 131,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 142,
            "movement": -40
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 149,
            "movement": -7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 171,
            "movement": -35
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 190,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 195,
            "movement": -73
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a8dc47ce1fd807b1814e8171a91c1fc9/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Gimme Dat",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 128,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 192,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 197,
            "movement": -81
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
            "position": 5,
            "movement": null,
            "status": "new"
          },
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
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 199,
            "movement": -3
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
            "position": 14,
            "movement": 150
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2e52f4bf8bdb05c98002b714669ee2c2/500x500-000000-80-0-0.jpg"
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
            "position": 65,
            "movement": -52
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 79,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 161,
            "movement": -79
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
            "position": 68,
            "movement": 2
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
            "position": 39,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Jam",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 51,
            "movement": 6
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 54,
            "movement": 45
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 131,
            "movement": -33
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 192,
            "movement": -17
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
            "country": "NA",
            "name": "Namibia",
            "position": 94,
            "movement": 4
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 106,
            "movement": -17
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 119,
            "movement": -6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 130,
            "movement": -19
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 163,
            "movement": -71
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f830d11dfb6ee3025b93e60a0e15f075/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "More Love, Less Ego",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 14,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 34,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 117,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 177,
            "movement": -77
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 192,
            "movement": -43
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e4286ac8a38829b6cf5d225c311bccf7/500x500-000000-80-0-0.jpg"
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
            "position": 81,
            "movement": 6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 168,
            "movement": 17
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 5,
            "movement": null,
            "status": "new"
          },
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
    "cover": "https://cdn-images.dzcdn.net/images/cover/2538836fe7ba780c5a3a4c04aef4fac5/500x500-000000-80-0-0.jpg"
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
            "position": 14,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 32,
            "movement": -11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 200,
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
            "position": 155,
            "movement": 9
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "One Condition",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 66,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 163,
            "movement": -27
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 163,
            "movement": 7
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
            "position": 116,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e53dccb976a98d09db9a195ce84162f2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "forever be mine",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SR",
            "name": "Suriname",
            "position": 37,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 105,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 119,
            "movement": 15
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
            "position": 188,
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
    "title": "Superstar",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 33,
            "movement": 35
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 48,
            "movement": -4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 179,
            "movement": -57
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
            "movement": 8
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6ddb34c26029baeb2bd73c71bb8d839f/500x500-000000-80-0-0.jpg"
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
            "movement": 0
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 88,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 89,
            "movement": 6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 95,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
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
            "position": 192,
            "movement": -18
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
            "position": 120,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0af8d1b7ecebd4fec1dbb6c048f2105f/500x500-000000-80-0-0.jpg"
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
            "movement": 50
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
            "position": 146,
            "movement": 52
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
            "position": 132,
            "movement": 21
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 161,
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
            "position": 90,
            "movement": -7
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
            "position": 98,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2538836fe7ba780c5a3a4c04aef4fac5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Like This",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 47,
            "movement": -40
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a95ad39eeab8749be5d4d8c7d4458615/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Kese",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 49,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b83e12a893bcd9bca6f6e84283dbedaa/500x500-000000-80-0-0.jpg"
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
            "position": 194,
            "movement": -14
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bella",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 99,
            "movement": 101
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e4286ac8a38829b6cf5d225c311bccf7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "One Love",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BB",
            "name": "Barbados",
            "position": 88,
            "movement": -10
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ec91c9f741208370ed9ab6b9029e90cc/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Picture Perfect",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 93,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a8dc47ce1fd807b1814e8171a91c1fc9/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Low",
    "platforms": [
      {
        "platform": "iTunes",
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
    "cover": "https://cdn-images.dzcdn.net/images/cover/b1eb19b96a5e2985053b8bef3138498f/500x500-000000-80-0-0.jpg"
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
            "position": 178,
            "movement": -66
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/27ab85a0fa9ffa1c5a337c8e8ce43194/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Final",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 187,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3cda4cca35e5a322d6ad9e71c49dbecf/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "In My Bed",
    "platforms": [
      {
        "platform": "Shazam",
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
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9be0538ebbb9c6fd3dcb74844e7e2e2a/500x500-000000-80-0-0.jpg"
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
    "title": "S2 - EP",
    "platforms": [
      {
        "platform": "Apple Music",
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
  