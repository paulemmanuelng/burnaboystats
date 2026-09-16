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
            "position": 44,
            "movement": -1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 62,
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 75,
            "movement": -2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 80,
            "movement": 3
          },
          {
            "country": "US",
            "name": "United States",
            "position": 94,
            "movement": 10
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 98,
            "movement": 3
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 99,
            "movement": 1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 104,
            "movement": 11
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 110,
            "movement": 6
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 114,
            "movement": -28
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 123,
            "movement": -2
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 129,
            "movement": 16
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 132,
            "movement": 4
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 147,
            "movement": 8
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 152,
            "movement": -2
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 160,
            "movement": -32
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 179,
            "movement": 10
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 183,
            "movement": 6
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 200,
            "movement": -1
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
            "position": 46,
            "movement": 3
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 59,
            "movement": -17
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 87,
            "movement": 34
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 107,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 115,
            "movement": -54
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 115,
            "movement": 54
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 120,
            "movement": 7
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 146,
            "movement": -33
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 159,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 164,
            "movement": -18
          },
          {
            "country": "LA",
            "name": "Laos",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 187,
            "movement": -124
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 187,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MG",
            "name": "Madagascar",
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
            "position": 8,
            "movement": -6
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 78,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 90,
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
            "country": "NZ",
            "name": "New Zealand",
            "position": 50,
            "movement": 132
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
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 10,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 10,
            "movement": -4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 10,
            "movement": -7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 10,
            "movement": 2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 22,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 26,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 26,
            "movement": 8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 37,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 37,
            "movement": -6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 39,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 49,
            "movement": -13
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 63,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 74,
            "movement": -4
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 116,
            "movement": -31
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 134,
            "movement": 15
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 162,
            "movement": -3
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 164,
            "movement": 22
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 179,
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
            "position": 28,
            "movement": 17
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 29,
            "movement": 1
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 43,
            "movement": 31
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 48,
            "movement": -18
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 80,
            "movement": 6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 81,
            "movement": 13
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 84,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 184,
            "movement": -65
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
            "position": 35,
            "movement": -5
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
            "position": 6,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 6,
            "movement": 2
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
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 30,
            "movement": 6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 35,
            "movement": 7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 36,
            "movement": -3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 40,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 52,
            "movement": -31
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 53,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 84,
            "movement": -5
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 89,
            "movement": -1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 94,
            "movement": 30
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 107,
            "movement": 4
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 115,
            "movement": 13
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 152,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 153,
            "movement": 3
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 168,
            "movement": 18
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
            "movement": -2
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
            "position": 135,
            "movement": -75
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
            "position": 13,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 26,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 28,
            "movement": -3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 31,
            "movement": 14
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 31,
            "movement": 28
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 38,
            "movement": 51
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 48,
            "movement": 6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 50,
            "movement": -9
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 66,
            "movement": 21
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 83,
            "movement": 24
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 90,
            "movement": -11
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 100,
            "movement": -9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 117,
            "movement": 2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 118,
            "movement": -7
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 144,
            "movement": 12
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 150,
            "movement": -8
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
            "position": 22,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 28,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 30,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 38,
            "movement": 12
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 48,
            "movement": 7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 52,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 54,
            "movement": -29
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 88,
            "movement": -54
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 93,
            "movement": 3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 97,
            "movement": 19
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 114,
            "movement": 20
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 130,
            "movement": 3
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
            "position": 40,
            "movement": 3
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
            "movement": -40
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
    "title": "Ayo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 43,
            "movement": 80
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 64,
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 65,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 83,
            "movement": 12
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 133,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 134,
            "movement": 16
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 139,
            "movement": -37
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 171,
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
            "position": 48,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 66,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 81,
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
            "position": 34,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 54,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 61,
            "movement": -14
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 76,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 77,
            "movement": 14
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 115,
            "movement": -5
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 148,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 170,
            "movement": -15
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 181,
            "movement": 3
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 188,
            "movement": -16
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 192,
            "movement": -5
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
            "position": 88,
            "movement": -5
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
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
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
            "country": "KE",
            "name": "Kenya",
            "position": 22,
            "movement": 7
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
            "position": 30,
            "movement": 17
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 40,
            "movement": 22
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 53,
            "movement": -5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 59,
            "movement": 62
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 64,
            "movement": 39
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 65,
            "movement": -8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 155,
            "movement": 10
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 186,
            "movement": -6
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 187,
            "movement": -75
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
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
            "position": 78,
            "movement": -16
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 111,
            "movement": -12
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 131,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 145,
            "movement": 21
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 172,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 179,
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
            "position": 142,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 182,
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
            "position": 165,
            "movement": 14
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
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 34,
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
    "title": "Made In Lagos: Deluxe Edition",
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
            "position": 26,
            "movement": 9
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 52,
            "movement": -7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 58,
            "movement": 24
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 66,
            "movement": 16
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 67,
            "movement": -23
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 72,
            "movement": 27
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 81,
            "movement": -21
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 142,
            "movement": -11
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 161,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 194,
            "movement": -47
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
            "country": "LR",
            "name": "Liberia",
            "position": 46,
            "movement": 9
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 56,
            "movement": 24
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 69,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 79,
            "movement": 30
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 105,
            "movement": 7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 111,
            "movement": -7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 118,
            "movement": 28
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 121,
            "movement": -20
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 136,
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
            "position": 150,
            "movement": -66
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
            "position": 16,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 20,
            "movement": 21
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 52,
            "movement": 79
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 55,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 90,
            "movement": 50
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 120,
            "movement": -58
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 121,
            "movement": 13
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 149,
            "movement": -84
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 192,
            "movement": -43
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
            "country": "NG",
            "name": "Nigeria",
            "position": 55,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 61,
            "movement": -18
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 142,
            "movement": -11
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 148,
            "movement": 42
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 155,
            "movement": -13
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 167,
            "movement": 4
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 176,
            "movement": -27
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 187,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a8dc47ce1fd807b1814e8171a91c1fc9/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "forever be mine",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 78,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 91,
            "movement": 28
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 138,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 144,
            "movement": -39
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 186,
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
    "title": "Turbulence",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 74,
            "movement": -61
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 76,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 76,
            "movement": 85
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
            "position": 69,
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
            "position": 46,
            "movement": 5
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 69,
            "movement": -15
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 152,
            "movement": -21
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 180,
            "movement": 12
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 185,
            "movement": null,
            "status": "new"
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
            "position": 80,
            "movement": 14
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 100,
            "movement": 6
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 111,
            "movement": 52
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 141,
            "movement": -11
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 147,
            "movement": -28
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
            "country": "NG",
            "name": "Nigeria",
            "position": 30,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 55,
            "movement": -41
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 118,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 154,
            "movement": 23
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 197,
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
    "title": "Superstar",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 46,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 68,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 100,
            "movement": -67
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 137,
            "movement": 42
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
            "position": 133,
            "movement": 7
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 68,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 88,
            "movement": 75
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 107,
            "movement": 56
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
            "position": 101,
            "movement": 15
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e53dccb976a98d09db9a195ce84162f2/500x500-000000-80-0-0.jpg"
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
            "position": 83,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 138,
            "movement": 30
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
            "position": 104,
            "movement": -100
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
            "position": 34,
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
            "position": 167,
            "movement": -12
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
            "position": 188,
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
    "title": "Tonight",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SR",
            "name": "Suriname",
            "position": 99,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 177,
            "movement": -30
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
            "position": 97,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 198,
            "movement": null,
            "status": "new"
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
            "movement": 1
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 88,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 92,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 96,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album",
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
            "position": 190,
            "movement": 9
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
            "position": 199,
            "movement": -2
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
    "cover": "https://cdn-images.dzcdn.net/images/cover/2e52f4bf8bdb05c98002b714669ee2c2/500x500-000000-80-0-0.jpg"
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
            "position": 81,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 121,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 164,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3cda4cca35e5a322d6ad9e71c49dbecf/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Alive",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 3,
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
            "country": "UK",
            "name": "United Kingdom",
            "position": 195,
            "movement": -51
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/76f42907d9ab6c5cd7a89b4c86806f1c/500x500-000000-80-0-0.jpg"
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
            "position": 139,
            "movement": -40
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 151,
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
    "title": "SoundMan, Vol. 1",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 118,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 131,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b6c9342dc0ab40a9e837ebb16a8b24dd/500x500-000000-80-0-0.jpg"
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
            "position": 24,
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
    "title": "Kana",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 99,
            "movement": -16
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
            "position": 100,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2538836fe7ba780c5a3a4c04aef4fac5/500x500-000000-80-0-0.jpg"
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
            "position": 115,
            "movement": 5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0af8d1b7ecebd4fec1dbb6c048f2105f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Après Minuit",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 85,
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
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b83e12a893bcd9bca6f6e84283dbedaa/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Piece of My Heart",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MA",
            "name": "Morocco",
            "position": 92,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/23dec0c82a7bb91327d048b0019004bd/500x500-000000-80-0-0.jpg"
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
            "position": 54,
            "movement": -22
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a95ad39eeab8749be5d4d8c7d4458615/500x500-000000-80-0-0.jpg"
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
            "position": 191,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Blessed",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 149,
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
            "position": 90,
            "movement": -10
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ec91c9f741208370ed9ab6b9029e90cc/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "BROWN SKIN GIRL",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 200,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/38dc027b0eae49a8e7fd7af3312a00a6/500x500-000000-80-0-0.jpg"
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
            "position": 174,
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
    "title": "Don't Dull",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 196,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3aff665181b245d2bd9c43afb536db2e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "IDG",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 156,
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
    "title": "Picture Perfect",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 176,
            "movement": -125
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
            "position": 137,
            "movement": -112
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b1eb19b96a5e2985053b8bef3138498f/500x500-000000-80-0-0.jpg"
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
  