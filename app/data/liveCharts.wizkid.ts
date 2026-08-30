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
  export const liveChartsUpdated = "2026-08-30";
  
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
            "position": 27,
            "movement": 10
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 55,
            "movement": 6
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 65,
            "movement": -2
          },
          {
            "country": "US",
            "name": "United States",
            "position": 65,
            "movement": 10
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 69,
            "movement": 13
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 85,
            "movement": 14
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 87,
            "movement": 4
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 87,
            "movement": 6
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 90,
            "movement": 10
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 95,
            "movement": 24
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 98,
            "movement": -2
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 111,
            "movement": -20
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 112,
            "movement": 10
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 117,
            "movement": 27
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 120,
            "movement": 16
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 137,
            "movement": 18
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 140,
            "movement": 23
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 154,
            "movement": -36
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 169,
            "movement": 6
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 180,
            "movement": -21
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 180,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 181,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MA",
            "name": "Morocco",
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
            "country": "MR",
            "name": "Mauritania",
            "position": 42,
            "movement": null,
            "status": "new"
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
            "position": 47,
            "movement": 10
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 58,
            "movement": -38
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 63,
            "movement": -10
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 85,
            "movement": 67
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 118,
            "movement": 31
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 122,
            "movement": -41
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 126,
            "movement": 65
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 130,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 134,
            "movement": 16
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 134,
            "movement": -13
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 141,
            "movement": 29
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 150,
            "movement": -10
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 174,
            "movement": 7
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 195,
            "movement": -17
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 200,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 200,
            "movement": -11
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
            "position": 21,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 98,
            "movement": -62
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "RO",
            "name": "Romania",
            "position": 99,
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
            "position": 7,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 8,
            "movement": 7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 8,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 18,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 20,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 22,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 27,
            "movement": 5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 31,
            "movement": -9
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 34,
            "movement": 10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 39,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 43,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 48,
            "movement": 1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 59,
            "movement": 14
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 88,
            "movement": 0
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 102,
            "movement": 3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 135,
            "movement": -6
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 140,
            "movement": -6
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
            "position": 32,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 37,
            "movement": -1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 42,
            "movement": 2
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 74,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 83,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 92,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 99,
            "movement": 2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 134,
            "movement": -2
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 182,
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
            "position": 34,
            "movement": 1
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
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 6,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 10,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 18,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 19,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 24,
            "movement": 4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 34,
            "movement": -6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 38,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 44,
            "movement": -8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 56,
            "movement": -9
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 68,
            "movement": 0
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 71,
            "movement": 6
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 76,
            "movement": 27
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 85,
            "movement": 57
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 93,
            "movement": -2
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 108,
            "movement": -11
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 147,
            "movement": -10
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 167,
            "movement": 3
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 194,
            "movement": -30
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
            "position": 36,
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
            "position": 66,
            "movement": -2
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
            "country": "GM",
            "name": "Gambia",
            "position": 11,
            "movement": 19
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 13,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 20,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 27,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 30,
            "movement": 6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 31,
            "movement": 20
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 32,
            "movement": 3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 47,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 62,
            "movement": -20
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 69,
            "movement": 8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 73,
            "movement": -3
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 78,
            "movement": 6
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 87,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 94,
            "movement": -5
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 100,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 100,
            "movement": 12
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 146,
            "movement": 2
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 152,
            "movement": -59
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 183,
            "movement": -4
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
            "position": 71,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 19,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 26,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 36,
            "movement": 31
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 38,
            "movement": 21
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 43,
            "movement": 31
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 55,
            "movement": 7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 63,
            "movement": 4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 64,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 88,
            "movement": 9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 122,
            "movement": -49
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 143,
            "movement": -81
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 150,
            "movement": 40
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 185,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
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
            "country": "NG",
            "name": "Nigeria",
            "position": 25,
            "movement": -15
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
            "position": 25,
            "movement": -3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 27,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 29,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 32,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 45,
            "movement": -17
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 60,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 81,
            "movement": 32
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 91,
            "movement": -7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 108,
            "movement": -13
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 108,
            "movement": 22
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 111,
            "movement": 77
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 124,
            "movement": 11
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 191,
            "movement": -44
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
            "position": 32,
            "movement": 2
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
            "position": 17,
            "movement": 9
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
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 18,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 64,
            "movement": 91
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 81,
            "movement": 2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 125,
            "movement": -44
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 137,
            "movement": 60
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 184,
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
            "position": 49,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 67,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 77,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 89,
            "movement": -3
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
            "position": 30,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 56,
            "movement": 28
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 77,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 80,
            "movement": -21
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 86,
            "movement": 8
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 92,
            "movement": 84
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 94,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 105,
            "movement": 57
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 108,
            "movement": 14
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 112,
            "movement": 8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 150,
            "movement": 6
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 159,
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
            "position": 11,
            "movement": -10
          }
        ]
      }
    ],
    "kind": "album"
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
            "movement": 0
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
            "position": 25,
            "movement": 3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 43,
            "movement": -9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 47,
            "movement": 7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 64,
            "movement": -26
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 64,
            "movement": 21
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 99,
            "movement": 16
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 132,
            "movement": -51
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 143,
            "movement": -41
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 163,
            "movement": -38
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 178,
            "movement": -39
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
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
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 41,
            "movement": 5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 51,
            "movement": 15
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 63,
            "movement": -17
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 86,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 93,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 95,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 104,
            "movement": -9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 194,
            "movement": -11
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
            "movement": 9
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
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Sounds From The Other Side",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 31,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 32,
            "movement": -3
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 53,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 56,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 91,
            "movement": 26
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 103,
            "movement": 44
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 103,
            "movement": 69
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 113,
            "movement": 11
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 134,
            "movement": -8
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 148,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 167,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a8dc47ce1fd807b1814e8171a91c1fc9/500x500-000000-80-0-0.jpg"
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
            "position": 15,
            "movement": 3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 61,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 64,
            "movement": 57
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 83,
            "movement": -36
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 85,
            "movement": 31
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 105,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 115,
            "movement": -35
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 142,
            "movement": 0
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 188,
            "movement": -90
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2538836fe7ba780c5a3a4c04aef4fac5/500x500-000000-80-0-0.jpg"
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
            "position": 23,
            "movement": -11
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 79,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 83,
            "movement": 7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 147,
            "movement": -58
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
            "position": 63,
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
            "position": 34,
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
    "title": "Sponono",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 27,
            "movement": 4
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 57,
            "movement": 3
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 78,
            "movement": -4
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 83,
            "movement": 18
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 124,
            "movement": 2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 167,
            "movement": null,
            "status": "new"
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 3,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 46,
            "movement": 34
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 102,
            "movement": 25
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 114,
            "movement": 69
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 179,
            "movement": 17
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9be0538ebbb9c6fd3dcb74844e7e2e2a/500x500-000000-80-0-0.jpg"
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
            "position": 40,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 68,
            "movement": -5
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 83,
            "movement": 100
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 117,
            "movement": 0
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 159,
            "movement": -18
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/09422f55197ec57417a5742ce5801f13/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "PAMI",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 92,
            "movement": 24
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 97,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 130,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 137,
            "movement": 8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 193,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/bd76a1b1daca04cea85edf1c9b022a27/500x500-000000-80-0-0.jpg"
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
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 14,
            "movement": -3
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 24,
            "movement": 0
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
            "position": 195,
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
    "title": "Gimme Dat",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 143,
            "movement": -33
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 179,
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
            "position": 133,
            "movement": 5
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
            "position": 52,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2e52f4bf8bdb05c98002b714669ee2c2/500x500-000000-80-0-0.jpg"
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
            "position": 37,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 107,
            "movement": 5
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 200,
            "movement": -134
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e4286ac8a38829b6cf5d225c311bccf7/500x500-000000-80-0-0.jpg"
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
            "position": 50,
            "movement": 1
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 86,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 96,
            "movement": -2
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
            "position": 50,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 147,
            "movement": 22
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
            "position": 144,
            "movement": 1
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
            "movement": -9
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
            "position": 110,
            "movement": 1
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
            "position": 175,
            "movement": 20
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
            "position": 119,
            "movement": 8
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
            "country": "DM",
            "name": "Dominica",
            "position": 153,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
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
    "title": "Slow",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 93,
            "movement": 9
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2538836fe7ba780c5a3a4c04aef4fac5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Mood",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 101,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ad33274548de3455303618bb650b6d86/500x500-000000-80-0-0.jpg"
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
            "position": 147,
            "movement": 13
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
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
            "position": 42,
            "movement": -20
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2538836fe7ba780c5a3a4c04aef4fac5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Sweet One",
    "platforms": [
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
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
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
            "position": 116,
            "movement": 13
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2538836fe7ba780c5a3a4c04aef4fac5/500x500-000000-80-0-0.jpg"
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
            "position": 15,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
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
            "position": 122,
            "movement": -10
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/27ab85a0fa9ffa1c5a337c8e8ce43194/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "In My Bed",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 170,
            "movement": -36
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9be0538ebbb9c6fd3dcb74844e7e2e2a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Joy",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 113,
            "movement": -102
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
            "position": 115,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/76f42907d9ab6c5cd7a89b4c86806f1c/500x500-000000-80-0-0.jpg"
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
            "position": 137,
            "movement": -104
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
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
            "position": 189,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3cda4cca35e5a322d6ad9e71c49dbecf/500x500-000000-80-0-0.jpg"
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
            "position": 161,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/67996ba3c56f059ae5a870268c66b39f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "DYNAMITE",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 162,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Like That",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 192,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/297e4e155f1664a3f76bd0fd24d15452/500x500-000000-80-0-0.jpg"
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
            "position": 15,
            "movement": -11
          }
        ]
      }
    ],
    "kind": "album"
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
            "position": 125,
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
  