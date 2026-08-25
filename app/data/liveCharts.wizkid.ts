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
  export const liveChartsUpdated = "2026-08-25";
  
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
            "position": 36,
            "movement": 1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 63,
            "movement": -2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 79,
            "movement": 7
          },
          {
            "country": "US",
            "name": "United States",
            "position": 83,
            "movement": -2
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 84,
            "movement": 0
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 87,
            "movement": -3
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 88,
            "movement": 16
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 91,
            "movement": -3
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 96,
            "movement": -1
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 100,
            "movement": -18
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 100,
            "movement": 4
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 108,
            "movement": 8
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 109,
            "movement": 20
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 123,
            "movement": 12
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 130,
            "movement": -18
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 132,
            "movement": 3
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 149,
            "movement": -13
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 149,
            "movement": 5
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 166,
            "movement": 15
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 182,
            "movement": 2
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 191,
            "movement": -4
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 29,
            "movement": -24
          },
          {
            "country": "MS",
            "name": "Montserrat",
            "position": 42,
            "movement": 0
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 62,
            "movement": -8
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 64,
            "movement": 3
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 92,
            "movement": 30
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 99,
            "movement": -51
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 101,
            "movement": 79
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 112,
            "movement": -12
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 116,
            "movement": 6
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 121,
            "movement": -9
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 129,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 140,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 148,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 160,
            "movement": 27
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 163,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 164,
            "movement": 19
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 169,
            "movement": 11
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 179,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 182,
            "movement": -30
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 187,
            "movement": 4
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MA",
            "name": "Morocco",
            "position": 72,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 84,
            "movement": 0
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PE",
            "name": "Peru",
            "position": 60,
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
            "country": "PE",
            "name": "Peru",
            "position": 127,
            "movement": 12
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
            "position": 9,
            "movement": -7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 9,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 12,
            "movement": 4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 14,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 22,
            "movement": 5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 26,
            "movement": -9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 29,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 30,
            "movement": -3
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 33,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 46,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 48,
            "movement": -6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 54,
            "movement": 3
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 59,
            "movement": 34
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 81,
            "movement": -6
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 84,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 85,
            "movement": 1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 97,
            "movement": 4
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 109,
            "movement": 26
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 131,
            "movement": -2
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
            "position": 27,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 30,
            "movement": 2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 30,
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
            "position": 80,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 81,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 94,
            "movement": -6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 125,
            "movement": -3
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 132,
            "movement": -17
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
            "position": 33,
            "movement": 4
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
            "position": 39,
            "movement": null,
            "status": "new"
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
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 5,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 7,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 10,
            "movement": 5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 20,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 33,
            "movement": -7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 34,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 36,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 40,
            "movement": 6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 40,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 54,
            "movement": -17
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 57,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 63,
            "movement": 102
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 83,
            "movement": -18
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 86,
            "movement": -13
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 96,
            "movement": -15
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 98,
            "movement": -11
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 118,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 147,
            "movement": 11
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 195,
            "movement": 4
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
            "position": 54,
            "movement": -5
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
            "position": 10,
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
            "position": 11,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 20,
            "movement": 138
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 20,
            "movement": 35
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
            "position": 33,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 44,
            "movement": 12
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 44,
            "movement": 22
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 60,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 61,
            "movement": 101
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 64,
            "movement": 4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 65,
            "movement": -5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 75,
            "movement": 22
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 114,
            "movement": -15
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 120,
            "movement": 76
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 123,
            "movement": 17
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 141,
            "movement": 5
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 153,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 156,
            "movement": -90
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 174,
            "movement": 24
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 190,
            "movement": -24
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
            "country": "LR",
            "name": "Liberia",
            "position": 9,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 14,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 28,
            "movement": 13
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 29,
            "movement": -7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 52,
            "movement": -5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 52,
            "movement": -5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 59,
            "movement": -5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 62,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 75,
            "movement": -43
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 95,
            "movement": 15
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 99,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 110,
            "movement": -1
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 146,
            "movement": -50
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 192,
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
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 27,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 32,
            "movement": -4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 33,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 44,
            "movement": -5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 54,
            "movement": -16
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 64,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 83,
            "movement": -27
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 91,
            "movement": 1
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 98,
            "movement": -60
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 108,
            "movement": 82
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 117,
            "movement": -20
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 129,
            "movement": -1
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
            "position": 49,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
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
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 24,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 25,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 28,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 39,
            "movement": 5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 53,
            "movement": 26
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 57,
            "movement": 35
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 66,
            "movement": -13
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 72,
            "movement": 9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 93,
            "movement": -6
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 104,
            "movement": -54
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 135,
            "movement": -41
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 137,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 168,
            "movement": -27
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
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
            "position": 25,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 58,
            "movement": -20
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 80,
            "movement": -14
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 80,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 100,
            "movement": 5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 112,
            "movement": -7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 117,
            "movement": 45
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 125,
            "movement": -45
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 126,
            "movement": -16
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 128,
            "movement": -2
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 137,
            "movement": -51
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 141,
            "movement": -18
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 169,
            "movement": 7
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
            "position": 93,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Ayo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 43,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 63,
            "movement": 123
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 79,
            "movement": -3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 110,
            "movement": -55
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 157,
            "movement": -92
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 161,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 194,
            "movement": -37
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
            "position": 48,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 66,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 83,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 109,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9be0538ebbb9c6fd3dcb74844e7e2e2a/500x500-000000-80-0-0.jpg"
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
            "position": 44,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 50,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 66,
            "movement": 9
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 73,
            "movement": 116
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 87,
            "movement": -7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 91,
            "movement": -7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 104,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 109,
            "movement": 54
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 139,
            "movement": -35
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 173,
            "movement": -74
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 180,
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
            "position": 102,
            "movement": 0
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
            "position": 13,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 17,
            "movement": 26
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 27,
            "movement": -7
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 66,
            "movement": -7
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 73,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 81,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 114,
            "movement": 10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 117,
            "movement": 23
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 120,
            "movement": -20
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 168,
            "movement": 12
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 192,
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
    "title": "Gimme Dat",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DM",
            "name": "Dominica",
            "position": 33,
            "movement": 52
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 64,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 75,
            "movement": 13
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 88,
            "movement": 78
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 149,
            "movement": 11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 178,
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
            "position": 79,
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
            "position": 19,
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
            "position": 28,
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
            "position": 63,
            "movement": null,
            "status": "re"
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
            "country": "LR",
            "name": "Liberia",
            "position": 61,
            "movement": 13
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 95,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 115,
            "movement": 50
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 142,
            "movement": 58
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 156,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 197,
            "movement": -12
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/bd76a1b1daca04cea85edf1c9b022a27/500x500-000000-80-0-0.jpg"
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
            "position": 24,
            "movement": 5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 29,
            "movement": 17
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 106,
            "movement": 51
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 114,
            "movement": 35
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 122,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 163,
            "movement": -25
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 165,
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
    "title": "Sounds From The Other Side",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 45,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 47,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 80,
            "movement": 86
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 86,
            "movement": 80
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 103,
            "movement": 9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 108,
            "movement": 14
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 127,
            "movement": 3
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
            "country": "NG",
            "name": "Nigeria",
            "position": 83,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 117,
            "movement": -22
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 147,
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
            "position": 74,
            "movement": 16
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
            "position": 75,
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
            "position": 34,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
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
            "position": 47,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 50,
            "movement": 65
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 119,
            "movement": 21
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 162,
            "movement": -40
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
            "position": 165,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6ddb34c26029baeb2bd73c71bb8d839f/500x500-000000-80-0-0.jpg"
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
            "position": 34,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 43,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 100,
            "movement": -5
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 176,
            "movement": -26
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
            "position": 7,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 26,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 79,
            "movement": 14
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
            "movement": 7
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Sponono",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BW",
            "name": "Botswana",
            "position": 91,
            "movement": 5
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 98,
            "movement": -27
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 105,
            "movement": 27
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 106,
            "movement": 13
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f830d11dfb6ee3025b93e60a0e15f075/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ojuelegba",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 69,
            "movement": -15
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 132,
            "movement": -7
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 168,
            "movement": -13
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 186,
            "movement": -41
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9be0538ebbb9c6fd3dcb74844e7e2e2a/500x500-000000-80-0-0.jpg"
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
            "position": 49,
            "movement": 0
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 86,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 98,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 121,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Stay For The Night",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 138,
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
            "position": 176,
            "movement": 3
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
            "position": 77,
            "movement": -15
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/27ab85a0fa9ffa1c5a337c8e8ce43194/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "BIG TIME",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 124,
            "movement": 5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 190,
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
            "position": 188,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0af8d1b7ecebd4fec1dbb6c048f2105f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Final",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 138,
            "movement": 9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 164,
            "movement": 18
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
            "position": 171,
            "movement": -106
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3cda4cca35e5a322d6ad9e71c49dbecf/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "forever be mine",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MW",
            "name": "Malawi",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 168,
            "movement": 32
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 197,
            "movement": -25
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/332d8393d5c9e2d7c5345b8e5fd2a049/500x500-000000-80-0-0.jpg"
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
            "position": 129,
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
            "position": 107,
            "movement": 0
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
            "position": 155,
            "movement": 13
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
            "movement": -9
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Call Me Every Day",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 113,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 125,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/cc269116fe4da8b1054a18ef7f1e39a8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Kese",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 4,
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
    "title": "BROWN SKIN GIRL",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 29,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Bad Girl",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 31,
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
            "position": 105,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2538836fe7ba780c5a3a4c04aef4fac5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Troubled Mind",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 118,
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
    "title": "Bella",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 73,
            "movement": -10
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/72cef83ff7a8c740f94ccf2ea5e0fdb7/500x500-000000-80-0-0.jpg"
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
            "position": 130,
            "movement": 8
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2538836fe7ba780c5a3a4c04aef4fac5/500x500-000000-80-0-0.jpg"
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
            "position": 112,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/76f42907d9ab6c5cd7a89b4c86806f1c/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Cash Flow",
    "platforms": [
      {
        "platform": "iTunes",
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
    "kind": "song"
  },
  {
    "title": "Tonight",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 134,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/67996ba3c56f059ae5a870268c66b39f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "On Top Your Matter",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 173,
            "movement": -104
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5956f4fdf351532267e5538e2373615b/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Jahs Love is True",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 198,
            "movement": -107
          }
        ]
      }
    ],
    "kind": "song"
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
            "position": 106,
            "movement": 16
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b6c9342dc0ab40a9e837ebb16a8b24dd/500x500-000000-80-0-0.jpg"
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
  