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
  export const liveChartsUpdated = "2026-09-06";
  
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
            "position": 21,
            "movement": -1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 51,
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 54,
            "movement": 13
          },
          {
            "country": "US",
            "name": "United States",
            "position": 56,
            "movement": 9
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 68,
            "movement": -7
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 73,
            "movement": 6
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 77,
            "movement": 10
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 86,
            "movement": 12
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 93,
            "movement": 8
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 95,
            "movement": 10
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 99,
            "movement": 7
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 101,
            "movement": 13
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 103,
            "movement": 5
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 111,
            "movement": 27
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 128,
            "movement": -5
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 129,
            "movement": 8
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 130,
            "movement": -10
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 134,
            "movement": -6
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 141,
            "movement": 5
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 148,
            "movement": 9
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 153,
            "movement": 14
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 178,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 184,
            "movement": 8
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 193,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 195,
            "movement": 2
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 198,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 199,
            "movement": -13
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
            "country": "BH",
            "name": "Bahrain",
            "position": 54,
            "movement": 10
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 57,
            "movement": 14
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 76,
            "movement": 37
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 106,
            "movement": -49
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 125,
            "movement": 67
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 135,
            "movement": -21
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 163,
            "movement": 25
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 166,
            "movement": -96
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 168,
            "movement": -24
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 183,
            "movement": 17
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 187,
            "movement": -22
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 191,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 198,
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
            "country": "EE",
            "name": "Estonia",
            "position": 45,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 189,
            "movement": -137
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
            "position": 2,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 8,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 11,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 11,
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 17,
            "movement": 18
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 23,
            "movement": 5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 25,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 26,
            "movement": 3
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 36,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 39,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 41,
            "movement": 4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 67,
            "movement": 6
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 82,
            "movement": 16
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 103,
            "movement": 9
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 122,
            "movement": -7
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 127,
            "movement": -67
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 155,
            "movement": -29
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 171,
            "movement": 16
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 92,
            "movement": -25
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 128,
            "movement": -98
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
            "movement": -1
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
            "position": 4,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 4,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 12,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 15,
            "movement": 14
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 16,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 28,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 34,
            "movement": 7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 44,
            "movement": 5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 55,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 57,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 79,
            "movement": 5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 89,
            "movement": -7
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 90,
            "movement": -3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 112,
            "movement": 6
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 123,
            "movement": -20
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 128,
            "movement": -47
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 163,
            "movement": -61
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 200,
            "movement": -6
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
            "position": 9,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 20,
            "movement": -1
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 23,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 26,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 41,
            "movement": 3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 46,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 52,
            "movement": 20
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 54,
            "movement": 7
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 57,
            "movement": 10
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 69,
            "movement": -26
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 72,
            "movement": 6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 88,
            "movement": -1
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 91,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 102,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 105,
            "movement": 18
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 127,
            "movement": -19
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 140,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 157,
            "movement": 15
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
            "country": "GM",
            "name": "Gambia",
            "position": 19,
            "movement": 54
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 29,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 32,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 33,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 33,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 47,
            "movement": 64
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 51,
            "movement": 2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 60,
            "movement": -36
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 64,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 89,
            "movement": 7
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 106,
            "movement": 26
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 108,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 167,
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
            "position": 28,
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
            "position": 95,
            "movement": 79
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
            "position": 19,
            "movement": 0
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
            "position": 7,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 65,
            "movement": 14
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 65,
            "movement": -5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 76,
            "movement": -4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 103,
            "movement": 47
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 123,
            "movement": 64
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 147,
            "movement": 15
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 172,
            "movement": 7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 184,
            "movement": -15
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
            "position": 54,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 65,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 79,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 79,
            "movement": 1
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 13,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 26,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 30,
            "movement": 145
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 48,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 78,
            "movement": 11
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 86,
            "movement": -21
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 86,
            "movement": -6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 99,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 119,
            "movement": -16
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 135,
            "movement": -49
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 173,
            "movement": -75
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 177,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 183,
            "movement": -14
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 193,
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
            "position": 31,
            "movement": -12
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
            "country": "BJ",
            "name": "Benin",
            "position": 22,
            "movement": 20
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 35,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 38,
            "movement": 13
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 47,
            "movement": -5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 61,
            "movement": -21
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 62,
            "movement": 6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 72,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 72,
            "movement": 26
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 116,
            "movement": 19
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 134,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 173,
            "movement": 0
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 177,
            "movement": 4
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
            "position": 106,
            "movement": -8
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
            "movement": 5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 34,
            "movement": -18
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 36,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 51,
            "movement": 9
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 53,
            "movement": 9
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 65,
            "movement": -12
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 72,
            "movement": 10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 79,
            "movement": -1
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 129,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 159,
            "movement": 13
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 169,
            "movement": -42
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 174,
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
            "country": "BG",
            "name": "Bulgaria",
            "position": 42,
            "movement": -6
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
            "position": 21,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 23,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 25,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 44,
            "movement": 13
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 44,
            "movement": -4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 59,
            "movement": 22
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 63,
            "movement": 7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 73,
            "movement": 37
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 102,
            "movement": -7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 143,
            "movement": 23
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 153,
            "movement": -58
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 177,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 191,
            "movement": -5
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
            "position": 17,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 22,
            "movement": 48
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 40,
            "movement": -10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 70,
            "movement": 23
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 88,
            "movement": 10
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 93,
            "movement": -9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 107,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 109,
            "movement": 21
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 162,
            "movement": -100
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 198,
            "movement": -115
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
            "position": 30,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 55,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 106,
            "movement": -5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 139,
            "movement": -20
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 145,
            "movement": 11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 151,
            "movement": -3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 179,
            "movement": -50
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 181,
            "movement": -31
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
            "position": 78,
            "movement": 2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 84,
            "movement": -37
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 127,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 140,
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
            "position": 59,
            "movement": 10
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
            "movement": -101
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
            "position": 39,
            "movement": -37
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 60,
            "movement": 7
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 72,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 99,
            "movement": -4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 100,
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
            "position": 194,
            "movement": 0
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
            "position": 41,
            "movement": 16
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 60,
            "movement": -8
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 81,
            "movement": -4
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 96,
            "movement": 2
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 98,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 122,
            "movement": 21
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
            "position": 55,
            "movement": 6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 65,
            "movement": -12
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 94,
            "movement": 31
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 179,
            "movement": 1
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
    "title": "Gimme Dat",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 57,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 122,
            "movement": -51
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 131,
            "movement": -30
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 199,
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
            "position": 145,
            "movement": -7
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2e52f4bf8bdb05c98002b714669ee2c2/500x500-000000-80-0-0.jpg"
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
            "position": 11,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 22,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 73,
            "movement": -12
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
            "position": 191,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
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
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 87,
            "movement": 59
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 121,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 183,
            "movement": -60
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e4286ac8a38829b6cf5d225c311bccf7/500x500-000000-80-0-0.jpg"
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
            "position": 76,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 117,
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
            "position": 116,
            "movement": 4
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
            "position": 137,
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
            "position": 194,
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
            "position": 84,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Alive",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 39,
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
    "title": "forever be mine",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DM",
            "name": "Dominica",
            "position": 98,
            "movement": -51
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 124,
            "movement": -43
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 196,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 81,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 90,
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
            "position": 42,
            "movement": 4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 181,
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
            "position": 136,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6ddb34c26029baeb2bd73c71bb8d839f/500x500-000000-80-0-0.jpg"
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
            "position": 134,
            "movement": -95
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
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 168,
            "movement": -32
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
            "movement": -3
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
            "position": 163,
            "movement": -53
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
    "title": "Final",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 192,
            "movement": -121
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3cda4cca35e5a322d6ad9e71c49dbecf/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "EASY WITH ME",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 179,
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
            "position": 171,
            "movement": -107
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2e5bc56dd547bcc84a47089b865230cb/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "SoundMan, Vol. 1",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 92,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 150,
            "movement": -5
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
            "position": 92,
            "movement": -30
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2538836fe7ba780c5a3a4c04aef4fac5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Energy",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 25,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/24a4bbe1d6d25c216426e42587156a04/500x500-000000-80-0-0.jpg"
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
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2538836fe7ba780c5a3a4c04aef4fac5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Drogba",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 73,
            "movement": -37
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b5c2e2be723408f28befdd7a53e1c64a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "No Stress",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 101,
            "movement": -25
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/31566a105920b61a40e268a4b8997791/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Getting Paid ​(f​eat​. Asake, Wizkid, Skillibeng​)",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 185,
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
    "title": "Anxious",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BB",
            "name": "Barbados",
            "position": 69,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/bc2fb454695d80d8c78f43478549c26f/500x500-000000-80-0-0.jpg"
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
            "position": 152,
            "movement": -57
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/72cef83ff7a8c740f94ccf2ea5e0fdb7/500x500-000000-80-0-0.jpg"
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
            "position": 86,
            "movement": -15
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
  