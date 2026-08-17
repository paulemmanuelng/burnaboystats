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
export const liveChartsUpdated = "2026-08-17";

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
            "position": 29,
            "movement": 2
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 58,
            "movement": -2
          },
          {
            "country": "US",
            "name": "United States",
            "position": 71,
            "movement": -1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 72,
            "movement": 10
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 76,
            "movement": -2
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 81,
            "movement": -8
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 86,
            "movement": 11
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 90,
            "movement": -14
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 95,
            "movement": 4
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 97,
            "movement": -1
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 98,
            "movement": 12
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 112,
            "movement": -7
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 114,
            "movement": -11
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 115,
            "movement": -6
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 128,
            "movement": 11
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 131,
            "movement": -2
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 132,
            "movement": 5
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 151,
            "movement": 9
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 153,
            "movement": -35
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 155,
            "movement": 11
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 180,
            "movement": 1
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 181,
            "movement": 11
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 191,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 194,
            "movement": -4
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NP",
            "name": "Nepal",
            "position": 37,
            "movement": -12
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
            "movement": -11
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 62,
            "movement": 19
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 72,
            "movement": 26
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 102,
            "movement": 47
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 109,
            "movement": -1
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 118,
            "movement": -34
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 133,
            "movement": -45
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 146,
            "movement": -19
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 148,
            "movement": -21
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 148,
            "movement": -25
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 165,
            "movement": -28
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 179,
            "movement": -26
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 191,
            "movement": 1
          },
          {
            "country": "FJ",
            "name": "Fiji",
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
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 4,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 22,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 37,
            "movement": -9
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
            "position": 67,
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
            "position": 3,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 11,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 13,
            "movement": 4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 26,
            "movement": 3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 29,
            "movement": -8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 30,
            "movement": 13
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 32,
            "movement": -12
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 36,
            "movement": 18
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 39,
            "movement": 19
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 52,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 55,
            "movement": -5
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 74,
            "movement": 12
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 109,
            "movement": 8
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 116,
            "movement": 18
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 126,
            "movement": -26
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 127,
            "movement": -57
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
            "position": 22,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 31,
            "movement": 6
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 51,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 75,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 75,
            "movement": -4
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 77,
            "movement": 12
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 80,
            "movement": 8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 123,
            "movement": 45
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 139,
            "movement": 43
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
            "movement": 1
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
            "movement": -2
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
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 13,
            "movement": 20
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 14,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 15,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 19,
            "movement": 6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 36,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 37,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 42,
            "movement": -5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 44,
            "movement": 5
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 49,
            "movement": -1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 67,
            "movement": 24
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 75,
            "movement": 49
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 82,
            "movement": -1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 112,
            "movement": -12
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 144,
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
            "position": 58,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 194,
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
            "position": 12,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 19,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 27,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 32,
            "movement": 23
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 44,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 49,
            "movement": -25
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 66,
            "movement": 13
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 75,
            "movement": 32
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 81,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 83,
            "movement": -25
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 86,
            "movement": 29
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 103,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 105,
            "movement": 3
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 105,
            "movement": -2
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 112,
            "movement": 7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 112,
            "movement": -13
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 139,
            "movement": 11
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 167,
            "movement": -21
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b1eb19b96a5e2985053b8bef3138498f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ayo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 22,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 60,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 69,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 89,
            "movement": -9
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 132,
            "movement": 18
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 146,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 160,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 173,
            "movement": -44
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 175,
            "movement": -62
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 180,
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
            "movement": -2
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
            "position": 92,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 106,
            "movement": 5
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
            "country": "LR",
            "name": "Liberia",
            "position": 25,
            "movement": 17
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 25,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 27,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 33,
            "movement": -3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 34,
            "movement": -5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 44,
            "movement": -20
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 61,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 90,
            "movement": -27
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 97,
            "movement": 3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 101,
            "movement": 38
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 110,
            "movement": -34
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 127,
            "movement": -8
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
            "position": 58,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 94,
            "movement": -50
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
            "position": 26,
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
            "position": 46,
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
    "title": "Made In Lagos: Deluxe Edition",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 13,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 41,
            "movement": -10
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 44,
            "movement": 9
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 45,
            "movement": 17
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 55,
            "movement": -33
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 58,
            "movement": -10
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 69,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 71,
            "movement": -21
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 73,
            "movement": -30
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 80,
            "movement": 22
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 87,
            "movement": -71
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 129,
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
            "position": 104,
            "movement": -14
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
            "country": "KE",
            "name": "Kenya",
            "position": 19,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 21,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 24,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 29,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 35,
            "movement": 3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 46,
            "movement": 12
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 46,
            "movement": 68
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 50,
            "movement": 46
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 82,
            "movement": 5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 105,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 139,
            "movement": -86
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 151,
            "movement": 25
          },
          {
            "country": "MZ",
            "name": "Mozambique",
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
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 50,
            "movement": -32
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 56,
            "movement": 61
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 60,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 63,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 68,
            "movement": 33
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 86,
            "movement": 7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 94,
            "movement": 19
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 105,
            "movement": 11
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 127,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 160,
            "movement": -34
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 199,
            "movement": -2
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
            "position": 41,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 42,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 65,
            "movement": 13
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 68,
            "movement": 10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 85,
            "movement": 11
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 90,
            "movement": 64
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 108,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 121,
            "movement": 7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 127,
            "movement": -18
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
            "movement": 6
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
            "position": 11,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 18,
            "movement": 20
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 30,
            "movement": 57
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 32,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 125,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 146,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 180,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 184,
            "movement": -50
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
            "position": 108,
            "movement": -17
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
            "movement": -8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 45,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 50,
            "movement": 62
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 51,
            "movement": -17
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 122,
            "movement": -21
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 130,
            "movement": 25
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 188,
            "movement": -34
          },
          {
            "country": "NA",
            "name": "Namibia",
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
            "position": 45,
            "movement": -16
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
            "position": 88,
            "movement": -81
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2e52f4bf8bdb05c98002b714669ee2c2/500x500-000000-80-0-0.jpg"
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
            "position": 53,
            "movement": -11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 55,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 104,
            "movement": -14
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 111,
            "movement": 4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 138,
            "movement": -11
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 145,
            "movement": -5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 153,
            "movement": -40
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 157,
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
    "title": "Jam",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 14,
            "movement": -6
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 26,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 27,
            "movement": 20
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 43,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 135,
            "movement": -17
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 192,
            "movement": -79
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 199,
            "movement": -7
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/09422f55197ec57417a5742ce5801f13/500x500-000000-80-0-0.jpg"
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
            "position": 87,
            "movement": 10
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 118,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 125,
            "movement": -11
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 172,
            "movement": -87
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
            "position": 77,
            "movement": -5
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
            "position": 33,
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
    "title": "Ojuelegba",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 59,
            "movement": 20
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 73,
            "movement": -3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 180,
            "movement": -28
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 190,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 195,
            "movement": -33
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
            "position": 44,
            "movement": -3
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 91,
            "movement": -25
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 95,
            "movement": -12
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 131,
            "movement": -25
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 157,
            "movement": -32
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 196,
            "movement": -58
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f830d11dfb6ee3025b93e60a0e15f075/500x500-000000-80-0-0.jpg"
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
            "position": 100,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 128,
            "movement": 28
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 132,
            "movement": -22
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 144,
            "movement": 56
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 153,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 171,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/bd76a1b1daca04cea85edf1c9b022a27/500x500-000000-80-0-0.jpg"
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
            "movement": -5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 80,
            "movement": 17
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 113,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 118,
            "movement": 47
          },
          {
            "country": "GM",
            "name": "Gambia",
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
            "country": "NG",
            "name": "Nigeria",
            "position": 165,
            "movement": 4
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
            "position": 117,
            "movement": 5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 127,
            "movement": -10
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
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
            "position": 134,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e53dccb976a98d09db9a195ce84162f2/500x500-000000-80-0-0.jpg"
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
            "position": 10,
            "movement": 1
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 37,
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
    "title": "Stay For The Night",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 177,
            "movement": 18
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
            "position": 168,
            "movement": 1
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
            "position": 85,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/27ab85a0fa9ffa1c5a337c8e8ce43194/500x500-000000-80-0-0.jpg"
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
            "position": 38,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 56,
            "movement": 52
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 131,
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
    "title": "Kese",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 152,
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
            "position": 57,
            "movement": 10
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
            "position": 153,
            "movement": -6
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
            "position": 189,
            "movement": 7
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
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
            "position": 122,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 177,
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
    "title": "Time",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 148,
            "movement": -5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 178,
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
    "title": "Call Me Every Day",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PT",
            "name": "Portugal",
            "position": 70,
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
            "position": 121,
            "movement": 54
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/cc269116fe4da8b1054a18ef7f1e39a8/500x500-000000-80-0-0.jpg"
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
            "movement": 0
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 88,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
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
            "position": 126,
            "movement": 24
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 193,
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
    "title": "Bella",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 20,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/72cef83ff7a8c740f94ccf2ea5e0fdb7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "DYNAMITE",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LA",
            "name": "Laos",
            "position": 14,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b9de2c8e816295f124dd7b227f7fa668/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "In My Bed",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 108,
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
    "title": "Reckless",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 40,
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
    "title": "Tease Me",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 97,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6636b9b9ec749b753b36b528edea8f03/500x500-000000-80-0-0.jpg"
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
            "position": 139,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0af8d1b7ecebd4fec1dbb6c048f2105f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Mood",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PT",
            "name": "Portugal",
            "position": 78,
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
    "title": "forever be mine",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 103,
            "movement": -9
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/332d8393d5c9e2d7c5345b8e5fd2a049/500x500-000000-80-0-0.jpg"
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
            "position": 198,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/77fc9f281aabc0cfb5c17649afe08c8c/500x500-000000-80-0-0.jpg"
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
            "position": 180,
            "movement": -10
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3cda4cca35e5a322d6ad9e71c49dbecf/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ebelebe",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 152,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/afea1bda5fb6b9c56301ea949d4516bf/500x500-000000-80-0-0.jpg"
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
            "position": 124,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/76f42907d9ab6c5cd7a89b4c86806f1c/500x500-000000-80-0-0.jpg"
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
            "position": 140,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/67996ba3c56f059ae5a870268c66b39f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "One Question",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 171,
            "movement": -115
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9be0538ebbb9c6fd3dcb74844e7e2e2a/500x500-000000-80-0-0.jpg"
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
            "position": 182,
            "movement": -124
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2538836fe7ba780c5a3a4c04aef4fac5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Turn Up",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 192,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/aca1a95f974679518b40edf09f382a3c/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Apple Music Live: Wizkid",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 136,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "S2 - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 198,
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
