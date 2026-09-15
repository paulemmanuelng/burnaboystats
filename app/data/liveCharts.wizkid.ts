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
  export const liveChartsUpdated = "2026-09-15";
  
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
            "position": 37,
            "movement": -4
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 66,
            "movement": -3
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 73,
            "movement": -2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 78,
            "movement": 8
          },
          {
            "country": "US",
            "name": "United States",
            "position": 85,
            "movement": -1
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 98,
            "movement": -9
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 107,
            "movement": -12
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 113,
            "movement": -10
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 114,
            "movement": -28
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 125,
            "movement": -15
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 127,
            "movement": 18
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 138,
            "movement": 5
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 140,
            "movement": -7
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 140,
            "movement": 21
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 147,
            "movement": 6
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 147,
            "movement": 36
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 184,
            "movement": 6
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 186,
            "movement": -20
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 187,
            "movement": -7
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 189,
            "movement": -17
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
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 43,
            "movement": -2
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 56,
            "movement": 16
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 67,
            "movement": 1
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 69,
            "movement": 23
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 112,
            "movement": 45
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 126,
            "movement": -69
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 128,
            "movement": 8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 146,
            "movement": -19
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 179,
            "movement": -7
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 181,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 189,
            "movement": -35
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 196,
            "movement": -73
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "IL",
            "name": "Israel",
            "position": 88,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 118,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 139,
            "movement": -127
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 151,
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
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 70,
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
            "position": 3,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 8,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 9,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 10,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 11,
            "movement": 9
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 25,
            "movement": 23
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 30,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 30,
            "movement": -13
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 33,
            "movement": -15
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
            "position": 37,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 48,
            "movement": -23
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 70,
            "movement": -1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 93,
            "movement": -23
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 136,
            "movement": -3
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 154,
            "movement": -14
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 172,
            "movement": -50
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 185,
            "movement": -30
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
            "position": 38,
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
            "position": 70,
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
    "title": "Joro",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 9,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 24,
            "movement": -6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 28,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 38,
            "movement": 7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 40,
            "movement": -5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 42,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 47,
            "movement": 2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 48,
            "movement": -8
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 66,
            "movement": 3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 70,
            "movement": 126
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 95,
            "movement": -1
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 98,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 100,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 107,
            "movement": -7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 115,
            "movement": 12
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 143,
            "movement": -29
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 156,
            "movement": 19
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 156,
            "movement": -51
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 159,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 195,
            "movement": -135
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
            "position": 61,
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
            "country": "KE",
            "name": "Kenya",
            "position": 5,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 5,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 19,
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 21,
            "movement": -6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 22,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 25,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 33,
            "movement": -6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 47,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 54,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 55,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 79,
            "movement": 1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 90,
            "movement": -1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 99,
            "movement": 57
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 107,
            "movement": 24
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 122,
            "movement": -27
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 122,
            "movement": -31
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 133,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 143,
            "movement": -35
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
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
            "movement": -58
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 73,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 88,
            "movement": -14
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 93,
            "movement": -20
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 95,
            "movement": -35
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 114,
            "movement": 30
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 128,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 152,
            "movement": 5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 169,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 182,
            "movement": 0
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 188,
            "movement": -33
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
            "country": "KE",
            "name": "Kenya",
            "position": 80,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 81,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9be0538ebbb9c6fd3dcb74844e7e2e2a/500x500-000000-80-0-0.jpg"
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
            "position": 22,
            "movement": -3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 25,
            "movement": 41
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 28,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 32,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 42,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 45,
            "movement": 21
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 50,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 62,
            "movement": 11
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 85,
            "movement": 36
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 95,
            "movement": -24
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 125,
            "movement": -14
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 129,
            "movement": 9
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 168,
            "movement": -150
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
            "movement": -7
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
            "position": 21,
            "movement": 26
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
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 37,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 49,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 66,
            "movement": 8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 71,
            "movement": -5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 78,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 80,
            "movement": -24
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 118,
            "movement": 3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 131,
            "movement": 46
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 157,
            "movement": -51
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 182,
            "movement": -24
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 186,
            "movement": 4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 194,
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
            "position": 86,
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
            "position": 17,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 18,
            "movement": 34
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 36,
            "movement": 45
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 48,
            "movement": -16
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 52,
            "movement": -17
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 67,
            "movement": -6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 80,
            "movement": -11
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 80,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 94,
            "movement": 105
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 121,
            "movement": -71
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 140,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 173,
            "movement": 19
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 181,
            "movement": 11
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ad33274548de3455303618bb650b6d86/500x500-000000-80-0-0.jpg"
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 24,
            "movement": 26
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 25,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 29,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 51,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 57,
            "movement": 47
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 78,
            "movement": 16
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 85,
            "movement": 28
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 117,
            "movement": -57
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 129,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 137,
            "movement": -18
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 149,
            "movement": 7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 172,
            "movement": 16
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
            "position": 29,
            "movement": 3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 56,
            "movement": 31
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 67,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 90,
            "movement": 6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 104,
            "movement": 6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 104,
            "movement": 21
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 108,
            "movement": 69
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 116,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 132,
            "movement": -25
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 169,
            "movement": -58
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 191,
            "movement": -108
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
            "position": 84,
            "movement": -16
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
            "position": 15,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 30,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 74,
            "movement": 27
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 82,
            "movement": -41
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 131,
            "movement": -89
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 139,
            "movement": -9
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 140,
            "movement": 44
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 148,
            "movement": -59
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 164,
            "movement": -40
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 191,
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
    "title": "Sounds From The Other Side",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 47,
            "movement": -18
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 60,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 102,
            "movement": -9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 122,
            "movement": 18
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 132,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 136,
            "movement": 15
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 142,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 155,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 163,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 174,
            "movement": 16
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a8dc47ce1fd807b1814e8171a91c1fc9/500x500-000000-80-0-0.jpg"
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
            "position": 26,
            "movement": 17
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 62,
            "movement": -35
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 80,
            "movement": -19
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 102,
            "movement": 78
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 162,
            "movement": -55
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 176,
            "movement": -39
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
    "title": "Turbulence",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 13,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 76,
            "movement": 5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 82,
            "movement": 50
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 186,
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
            "position": 70,
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
            "position": 82,
            "movement": -12
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
    "title": "Sponono",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 89,
            "movement": -13
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 92,
            "movement": -32
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 98,
            "movement": -29
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 111,
            "movement": 38
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 113,
            "movement": 7
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 141,
            "movement": -24
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f830d11dfb6ee3025b93e60a0e15f075/500x500-000000-80-0-0.jpg"
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
            "position": 136,
            "movement": -12
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 170,
            "movement": -30
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 197,
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
            "position": 111,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e53dccb976a98d09db9a195ce84162f2/500x500-000000-80-0-0.jpg"
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
            "position": 44,
            "movement": 5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 68,
            "movement": 36
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 122,
            "movement": 19
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 127,
            "movement": -37
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
            "position": 140,
            "movement": -6
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
            "country": "CM",
            "name": "Cameroon",
            "position": 57,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 98,
            "movement": 10
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 99,
            "movement": -26
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 175,
            "movement": 12
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/09422f55197ec57417a5742ce5801f13/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "forever be mine",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 126,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 134,
            "movement": 30
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 151,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 168,
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
            "position": 48,
            "movement": -1
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 90,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 96,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 97,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "album",
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
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 185,
            "movement": -36
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
            "position": 21,
            "movement": 2
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
            "position": 164,
            "movement": 8
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
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 196,
            "movement": -17
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 116,
            "movement": -13
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
            "movement": 43
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
            "position": 31,
            "movement": 7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 100,
            "movement": -15
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 149,
            "movement": 27
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e4286ac8a38829b6cf5d225c311bccf7/500x500-000000-80-0-0.jpg"
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
            "position": 43,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 51,
            "movement": -23
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b83e12a893bcd9bca6f6e84283dbedaa/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Final",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 84,
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
    "title": "BIG TIME",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 174,
            "movement": 10
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
            "position": 116,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0af8d1b7ecebd4fec1dbb6c048f2105f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Stay For The Night",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 196,
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
    "title": "Tonight",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
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
    "title": "Like This",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 8,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a95ad39eeab8749be5d4d8c7d4458615/500x500-000000-80-0-0.jpg"
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
            "position": 83,
            "movement": -17
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
            "position": 101,
            "movement": 0
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
            "position": 180,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Longtime",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 143,
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
    "title": "One Love",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BB",
            "name": "Barbados",
            "position": 78,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ec91c9f741208370ed9ab6b9029e90cc/500x500-000000-80-0-0.jpg"
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
            "position": 162,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/77fc9f281aabc0cfb5c17649afe08c8c/500x500-000000-80-0-0.jpg"
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
    "title": "Bella",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 200,
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
            "position": 153,
            "movement": -17
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
  