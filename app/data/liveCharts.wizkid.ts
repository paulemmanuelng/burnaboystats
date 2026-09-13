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
  export const liveChartsUpdated = "2026-09-13";
  
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
            "position": 30,
            "movement": 10
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 59,
            "movement": 3
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 77,
            "movement": -2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 83,
            "movement": -1
          },
          {
            "country": "US",
            "name": "United States",
            "position": 91,
            "movement": 12
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 96,
            "movement": 5
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 97,
            "movement": 5
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 110,
            "movement": 12
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
            "position": 117,
            "movement": 5
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 144,
            "movement": 7
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 146,
            "movement": -19
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 150,
            "movement": 7
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 152,
            "movement": 19
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 160,
            "movement": -36
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 161,
            "movement": -8
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 167,
            "movement": -10
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 180,
            "movement": -10
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 199,
            "movement": -21
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
            "movement": -1
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 58,
            "movement": 67
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 79,
            "movement": -12
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 89,
            "movement": 36
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 90,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 109,
            "movement": 16
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 119,
            "movement": 30
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 143,
            "movement": -2
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 145,
            "movement": 24
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 159,
            "movement": 10
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 159,
            "movement": -70
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 196,
            "movement": -118
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 199,
            "movement": -94
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PH",
            "name": "Philippines",
            "position": 17,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 195,
            "movement": -168
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 79,
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
            "country": "GM",
            "name": "Gambia",
            "position": 5,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 8,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 8,
            "movement": 3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 9,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 12,
            "movement": 38
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 19,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 26,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 27,
            "movement": 8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 35,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 39,
            "movement": 8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 41,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 68,
            "movement": -2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 111,
            "movement": -19
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 114,
            "movement": 7
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 137,
            "movement": 2
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 139,
            "movement": 7
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 144,
            "movement": -1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 155,
            "movement": 1
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
            "position": 30,
            "movement": 4
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
            "position": 41,
            "movement": 21
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 44,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 94,
            "movement": -14
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 100,
            "movement": -13
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
            "position": 31,
            "movement": -4
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
            "position": 5,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 15,
            "movement": 4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 17,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 24,
            "movement": -9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 25,
            "movement": 10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 35,
            "movement": 4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 38,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 54,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 66,
            "movement": -31
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 76,
            "movement": 6
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 93,
            "movement": 5
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 104,
            "movement": -5
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 107,
            "movement": -3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 126,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 129,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 141,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 147,
            "movement": -36
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 153,
            "movement": -46
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
            "position": 7,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 17,
            "movement": 4
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
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 42,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 46,
            "movement": -7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 56,
            "movement": -5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 65,
            "movement": 26
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 71,
            "movement": -26
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 79,
            "movement": 120
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 96,
            "movement": -4
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 104,
            "movement": 13
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 113,
            "movement": 5
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 126,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 128,
            "movement": 28
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 136,
            "movement": 27
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 182,
            "movement": -150
          },
          {
            "country": "MG",
            "name": "Madagascar",
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
            "position": 62,
            "movement": -51
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
            "country": "TD",
            "name": "Chad",
            "position": 19,
            "movement": 20
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 20,
            "movement": 17
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 24,
            "movement": 124
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 25,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 34,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 41,
            "movement": -10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 49,
            "movement": 3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 65,
            "movement": 9
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 67,
            "movement": 19
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 70,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 87,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 99,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 112,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 131,
            "movement": 5
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 181,
            "movement": -62
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
            "position": 20,
            "movement": 2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 81,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 86,
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
            "position": 37,
            "movement": -4
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
            "position": 17,
            "movement": -2
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 22,
            "movement": 45
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 26,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 37,
            "movement": -16
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 49,
            "movement": 5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 50,
            "movement": 8
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 59,
            "movement": -2
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 68,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 71,
            "movement": -9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 73,
            "movement": -8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 78,
            "movement": 13
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 125,
            "movement": 1
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 128,
            "movement": 47
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 137,
            "movement": 53
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 190,
            "movement": -94
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
            "position": 5,
            "movement": -3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 57,
            "movement": 34
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 70,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 83,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 85,
            "movement": -11
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 136,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 155,
            "movement": -1
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 159,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 168,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 174,
            "movement": -6
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
            "movement": -1
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
            "movement": 4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 67,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 76,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 80,
            "movement": -5
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
            "country": "TD",
            "name": "Chad",
            "position": 4,
            "movement": null,
            "status": "new"
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
            "position": 42,
            "movement": 12
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 44,
            "movement": -14
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 52,
            "movement": 45
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 67,
            "movement": -8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 72,
            "movement": -8
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 79,
            "movement": -42
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 107,
            "movement": -52
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 120,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 141,
            "movement": -14
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 175,
            "movement": -3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 178,
            "movement": -8
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
            "position": 87,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
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
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 32,
            "movement": 59
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 63,
            "movement": -8
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 67,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 73,
            "movement": 7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 73,
            "movement": 77
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 94,
            "movement": 16
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 99,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 101,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 109,
            "movement": -7
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 130,
            "movement": -11
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 142,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 183,
            "movement": -8
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
            "position": 56,
            "movement": -8
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
            "country": "NG",
            "name": "Nigeria",
            "position": 20,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 26,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 29,
            "movement": -12
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 37,
            "movement": 6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 51,
            "movement": 88
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 55,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 62,
            "movement": -2
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 82,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 104,
            "movement": -4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 105,
            "movement": -22
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 146,
            "movement": 9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 176,
            "movement": 5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 199,
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
    "title": "Morayo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 12,
            "movement": 34
          },
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
            "movement": 47
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 60,
            "movement": -9
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 88,
            "movement": 54
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 96,
            "movement": 19
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 126,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 127,
            "movement": 60
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 127,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 178,
            "movement": -13
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 196,
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
            "position": 33,
            "movement": 2
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 52,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 64,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 85,
            "movement": 7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 136,
            "movement": 58
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 140,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 148,
            "movement": 11
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 153,
            "movement": 27
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 192,
            "movement": -21
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 194,
            "movement": -37
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 24,
            "movement": -20
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 62,
            "movement": 17
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 78,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 115,
            "movement": 18
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 158,
            "movement": 27
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
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
            "position": 180,
            "movement": 15
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
            "position": 169,
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
            "position": 4,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 79,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 99,
            "movement": 17
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 181,
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
            "position": 71,
            "movement": -9
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
            "position": 54,
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
            "position": 39,
            "movement": 1
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
            "position": 47,
            "movement": 26
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 77,
            "movement": 3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 86,
            "movement": 7
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 113,
            "movement": 2
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 135,
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
    "title": "Gimme Dat",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 77,
            "movement": 66
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 85,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 119,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 137,
            "movement": 13
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
            "position": 187,
            "movement": -17
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2e52f4bf8bdb05c98002b714669ee2c2/500x500-000000-80-0-0.jpg"
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
            "position": 76,
            "movement": -14
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 79,
            "movement": -23
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 104,
            "movement": -7
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 186,
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
    "title": "Essence",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 13,
            "movement": -1
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 22,
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
            "position": 161,
            "movement": 6
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 185,
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
    "title": "Superstar",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 43,
            "movement": -13
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 53,
            "movement": -3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 123,
            "movement": 0
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
            "movement": 4
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6ddb34c26029baeb2bd73c71bb8d839f/500x500-000000-80-0-0.jpg"
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
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 105,
            "movement": -8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 141,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 151,
            "movement": -48
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
            "position": 49,
            "movement": 2
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
            "position": 90,
            "movement": 6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 96,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Alaye",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 198,
            "movement": -3
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
            "movement": -15
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
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
            "position": 65,
            "movement": 5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 130,
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
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e53dccb976a98d09db9a195ce84162f2/500x500-000000-80-0-0.jpg"
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
            "position": 3,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 37,
            "movement": -12
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b83e12a893bcd9bca6f6e84283dbedaa/500x500-000000-80-0-0.jpg"
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
            "position": 196,
            "movement": -15
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
            "position": 114,
            "movement": 0
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
            "position": 125,
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
            "position": 154,
            "movement": -66
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/27ab85a0fa9ffa1c5a337c8e8ce43194/500x500-000000-80-0-0.jpg"
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
            "position": 61,
            "movement": 51
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 155,
            "movement": -63
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/332d8393d5c9e2d7c5345b8e5fd2a049/500x500-000000-80-0-0.jpg"
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
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 200,
            "movement": -15
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e4286ac8a38829b6cf5d225c311bccf7/500x500-000000-80-0-0.jpg"
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
            "position": 64,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2538836fe7ba780c5a3a4c04aef4fac5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Totori",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 81,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/75b1090ea3e3c3521e8d82009a8b1b7d/500x500-000000-80-0-0.jpg"
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
            "position": 92,
            "movement": 0
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
            "movement": -1
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
            "country": "NG",
            "name": "Nigeria",
            "position": 41,
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
            "position": 47,
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
            "position": 75,
            "movement": -20
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ec91c9f741208370ed9ab6b9029e90cc/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Boom",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 110,
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
    "title": "U Don't Know",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 93,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/cbd8af17625915ac863ee340498d5d9f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Dis Love",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 105,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/bc0d04683a3ba1691887cf597749de93/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "More",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 77,
            "movement": -17
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b1eb19b96a5e2985053b8bef3138498f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Beat of Life",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 80,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c631f1ee2ce8650a2f6ebdaa682c0ae6/500x500-000000-80-0-0.jpg"
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
            "position": 175,
            "movement": -13
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/67996ba3c56f059ae5a870268c66b39f/500x500-000000-80-0-0.jpg"
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
            "position": 174,
            "movement": -24
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/24a4bbe1d6d25c216426e42587156a04/500x500-000000-80-0-0.jpg"
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
            "position": 152,
            "movement": -7
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b6c9342dc0ab40a9e837ebb16a8b24dd/500x500-000000-80-0-0.jpg"
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
  