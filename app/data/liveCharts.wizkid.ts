// GENERATED FILE — do not edit by hand.
  // Rebuilt several times a day by scripts/build-live-charts.mjs --artist=wizkid from kworb's artist page.
  //
  // PLATFORM chart data for Wizkid: where each release is sitting RIGHT
  // NOW on Spotify, Apple Music, iTunes, Deezer, Shazam and YouTube country
  // charts. This is not official-chart data — the official national peaks that
  // feed the site's headline totals live elsewhere, and the two are kept apart
  // on purpose.
  
  import { countriesOf } from "../lib/liveChartMeta";
  
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
  export const liveChartsUpdated = "2026-09-25";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-09-25T17:49Z";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","Spotify Albums","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "One Dance",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NP",
            "name": "Nepal",
            "position": 39,
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
            "position": 44,
            "movement": -2
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 53,
            "movement": 29
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 70,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 71,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 73,
            "movement": -11
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 78,
            "movement": -13
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 101,
            "movement": 95
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 102,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 110,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 110,
            "movement": -2
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 111,
            "movement": 11
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 117,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 125,
            "movement": -65
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 144,
            "movement": 31
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 153,
            "movement": 20
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 158,
            "movement": 8
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 159,
            "movement": -48
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 169,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 175,
            "movement": 0
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 200,
            "movement": -30
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 32,
            "movement": 3
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 61,
            "movement": 1
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 66,
            "movement": 2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 86,
            "movement": 5
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 86,
            "movement": 1
          },
          {
            "country": "US",
            "name": "United States",
            "position": 86,
            "movement": 4
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 105,
            "movement": 2
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 106,
            "movement": 1
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 111,
            "movement": 24
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 116,
            "movement": -6
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 134,
            "movement": 6
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 135,
            "movement": -3
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 143,
            "movement": -33
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 150,
            "movement": -24
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 153,
            "movement": 16
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 166,
            "movement": -4
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 171,
            "movement": 25
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 176,
            "movement": -23
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 196,
            "movement": -15
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 22,
            "movement": -6
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 95,
            "movement": -90
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
            "position": 32,
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
            "country": "NE",
            "name": "Niger",
            "position": 7,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 9,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 30,
            "movement": 15
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 30,
            "movement": 6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 34,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 39,
            "movement": -11
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 39,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 41,
            "movement": -33
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 47,
            "movement": -1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 53,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 58,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 66,
            "movement": 3
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 128,
            "movement": -27
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 130,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 134,
            "movement": 21
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 141,
            "movement": -13
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 172,
            "movement": -16
          },
          {
            "country": "NA",
            "name": "Namibia",
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
            "country": "GH",
            "name": "Ghana",
            "position": 44,
            "movement": 5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 46,
            "movement": -1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 52,
            "movement": -1
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 86,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 93,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 97,
            "movement": 8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 135,
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
            "position": 46,
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
            "country": "LR",
            "name": "Liberia",
            "position": 10,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 17,
            "movement": -4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 19,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 25,
            "movement": 14
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 31,
            "movement": 118
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 33,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 48,
            "movement": -12
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 50,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 64,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 72,
            "movement": 3
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 87,
            "movement": 10
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 110,
            "movement": -8
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 111,
            "movement": 31
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 115,
            "movement": 4
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 191,
            "movement": -65
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
            "position": 20,
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
            "position": 199,
            "movement": -27
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
            "position": 8,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 23,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 40,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 48,
            "movement": -10
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 50,
            "movement": -15
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 51,
            "movement": -23
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 53,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 74,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 82,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 94,
            "movement": -12
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 107,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 110,
            "movement": -2
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 136,
            "movement": 42
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 136,
            "movement": 25
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 148,
            "movement": -10
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 167,
            "movement": -80
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 169,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 173,
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
            "position": 159,
            "movement": -20
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
            "country": "NG",
            "name": "Nigeria",
            "position": 56,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 86,
            "movement": 2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 89,
            "movement": -4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 92,
            "movement": -14
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 107,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 114,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 123,
            "movement": 37
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 130,
            "movement": 21
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 171,
            "movement": 15
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 187,
            "movement": -40
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 196,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
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
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 69,
            "movement": -6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 74,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 84,
            "movement": 2
          }
        ]
      },
      {
        "platform": "Spotify Albums",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 53,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "album",
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
            "position": 11,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 18,
            "movement": -10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 28,
            "movement": 7
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 29,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 45,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 57,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 57,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 92,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 95,
            "movement": -20
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 105,
            "movement": 13
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 109,
            "movement": 18
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 110,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 117,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 174,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "Spotify Albums",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 18,
            "movement": 2
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
            "country": "KE",
            "name": "Kenya",
            "position": 28,
            "movement": 11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 32,
            "movement": 6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 33,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 34,
            "movement": -10
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 45,
            "movement": -12
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 50,
            "movement": 28
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 70,
            "movement": 2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 89,
            "movement": 7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 92,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 99,
            "movement": -16
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 139,
            "movement": 18
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 145,
            "movement": 10
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 169,
            "movement": -74
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
            "position": 51,
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
            "position": 62,
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
    "title": "MMS",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 16,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 32,
            "movement": -6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 35,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 58,
            "movement": -10
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 59,
            "movement": 6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 61,
            "movement": -3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 71,
            "movement": 18
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 92,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 111,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 135,
            "movement": 64
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 153,
            "movement": 32
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 156,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 184,
            "movement": -41
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
            "country": "UG",
            "name": "Uganda",
            "position": 27,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 29,
            "movement": -7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 30,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 34,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 55,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 58,
            "movement": -13
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 62,
            "movement": 43
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 76,
            "movement": 20
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 108,
            "movement": -13
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 141,
            "movement": 7
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 149,
            "movement": -76
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 151,
            "movement": -4
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
            "country": "KE",
            "name": "Kenya",
            "position": 62,
            "movement": 11
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 105,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 156,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 177,
            "movement": 17
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 187,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
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
            "position": 135,
            "movement": 12
          },
          {
            "country": "SN",
            "name": "Senegal",
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
            "position": 182,
            "movement": -6
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 26,
            "movement": -24
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9be0538ebbb9c6fd3dcb74844e7e2e2a/500x500-000000-80-0-0.jpg"
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
            "position": 12,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 26,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 79,
            "movement": 56
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 96,
            "movement": -8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 112,
            "movement": -26
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 136,
            "movement": 42
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 152,
            "movement": -12
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 189,
            "movement": -104
          }
        ]
      },
      {
        "platform": "Spotify Albums",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 28,
            "movement": 0
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
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 55,
            "movement": 10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 91,
            "movement": 23
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 92,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 125,
            "movement": 4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 135,
            "movement": -20
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 139,
            "movement": -14
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 150,
            "movement": -16
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 179,
            "movement": -6
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 183,
            "movement": 13
          }
        ]
      }
    ],
    "kind": "album"
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
            "position": 41,
            "movement": 5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 52,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 96,
            "movement": 12
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 140,
            "movement": 33
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 176,
            "movement": -52
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 188,
            "movement": -32
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 198,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "Spotify Albums",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 132,
            "movement": 1
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
            "country": "MZ",
            "name": "Mozambique",
            "position": 77,
            "movement": 10
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 140,
            "movement": 47
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 141,
            "movement": 48
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 156,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 159,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 162,
            "movement": -37
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 178,
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
    "title": "Sponono",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 40,
            "movement": 9
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 50,
            "movement": -13
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 54,
            "movement": 29
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 74,
            "movement": 9
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 137,
            "movement": 37
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 174,
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
    "title": "Turbulence",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 86,
            "movement": 12
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 104,
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
            "position": 92,
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
            "position": 24,
            "movement": 14
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
            "position": 42,
            "movement": -3
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
            "movement": 0
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 123,
            "movement": -48
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 129,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 169,
            "movement": -34
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
            "position": 43,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/09422f55197ec57417a5742ce5801f13/500x500-000000-80-0-0.jpg"
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
            "position": 56,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 82,
            "movement": -9
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 89,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 96,
            "movement": -1
          }
        ]
      },
      {
        "platform": "Spotify Albums",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 23,
            "movement": 2
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
            "position": 38,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 156,
            "movement": 13
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
        "platform": "Spotify Albums",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 95,
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
            "position": 121,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/73/bd/59/73bd5950-72b7-8758-e91f-b2a16d558c57/0.jpg/300x300bb.jpg"
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
            "movement": 1
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 34,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 196,
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
            "position": 150,
            "movement": 7
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
            "position": 77,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 142,
            "movement": 22
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 175,
            "movement": -24
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
    "title": "Final",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 43,
            "movement": 4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 146,
            "movement": 3
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 161,
            "movement": 3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 162,
            "movement": -21
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3cda4cca35e5a322d6ad9e71c49dbecf/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "More Love, Less Ego",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 23,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 25,
            "movement": 2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 109,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "Spotify Albums",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 87,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e4286ac8a38829b6cf5d225c311bccf7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "BIG TIME",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 127,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 130,
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
            "position": 188,
            "movement": -13
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
            "position": 131,
            "movement": -19
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
            "position": 27,
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
            "position": 84,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/67996ba3c56f059ae5a870268c66b39f/500x500-000000-80-0-0.jpg"
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
            "position": 176,
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
            "position": 13,
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
            "movement": -5
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
            "position": 79,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2538836fe7ba780c5a3a4c04aef4fac5/500x500-000000-80-0-0.jpg"
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
            "position": 195,
            "movement": -2
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
            "position": 176,
            "movement": 21
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2e52f4bf8bdb05c98002b714669ee2c2/500x500-000000-80-0-0.jpg"
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
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 173,
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
    "title": "BROWN SKIN GIRL",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 46,
            "movement": -38
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/38dc027b0eae49a8e7fd7af3312a00a6/500x500-000000-80-0-0.jpg"
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
            "position": 30,
            "movement": -13
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e4286ac8a38829b6cf5d225c311bccf7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Manya",
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
    "cover": "https://cdn-images.dzcdn.net/images/cover/2743eaf3ad111a1da4f940966bfea480/500x500-000000-80-0-0.jpg"
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
            "position": 90,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2538836fe7ba780c5a3a4c04aef4fac5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Girl",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 53,
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
    "title": "Crazy",
    "platforms": [
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
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2538836fe7ba780c5a3a4c04aef4fac5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Wine to the Top",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 130,
            "movement": -7
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3d18f71e03fb2831c2ceac5b8285f068/500x500-000000-80-0-0.jpg"
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
            "position": 200,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2e5bc56dd547bcc84a47089b865230cb/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Low",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 181,
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
    "title": "IDG",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 142,
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
    "title": "S2 - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 177,
            "movement": 15
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ad33274548de3455303618bb650b6d86/500x500-000000-80-0-0.jpg"
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
            "position": 151,
            "movement": -3
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
  // Counted by the site's own rule (app/lib/liveChartMeta.ts): kworb labels
  // Britain "UK" on five platforms and "GB" on Spotify's, and emits "WW" for
  // its worldwide chart. A raw code count claimed the UK twice and the world
  // as a nation — the share card said 151 countries where the page said 149.
  export const liveCountryCount = countriesOf(
    liveCharts.flatMap((r) => r.platforms.flatMap((p) => p.entries))
  );
  
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
  