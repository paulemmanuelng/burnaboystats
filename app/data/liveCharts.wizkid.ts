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
  export const liveChartsUpdated = "2026-10-01";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-01T22:44Z";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","Spotify Albums","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "One Dance",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "OM",
            "name": "Oman",
            "position": 37,
            "movement": 64
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
            "position": 45,
            "movement": 3
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 84,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 86,
            "movement": -27
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 86,
            "movement": -34
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 91,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 109,
            "movement": -34
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 109,
            "movement": -5
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 131,
            "movement": 10
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 135,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 147,
            "movement": 31
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 154,
            "movement": -98
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 156,
            "movement": -85
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 164,
            "movement": -3
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 184,
            "movement": 1
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 186,
            "movement": -48
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 188,
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
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 37,
            "movement": 2
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 71,
            "movement": -2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 88,
            "movement": 3
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 94,
            "movement": -13
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 102,
            "movement": -20
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 113,
            "movement": -8
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 115,
            "movement": -1
          },
          {
            "country": "US",
            "name": "United States",
            "position": 120,
            "movement": -20
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 130,
            "movement": -4
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 142,
            "movement": -27
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 145,
            "movement": -8
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 154,
            "movement": -9
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 159,
            "movement": -12
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 171,
            "movement": 25
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 175,
            "movement": -11
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 184,
            "movement": -29
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 188,
            "movement": -1
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
            "country": "IL",
            "name": "Israel",
            "position": 26,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 92,
            "movement": -9
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 197,
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
            "position": 4,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 11,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 17,
            "movement": 12
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 23,
            "movement": 21
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 29,
            "movement": 10
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 38,
            "movement": -7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 52,
            "movement": -14
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 57,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 59,
            "movement": 38
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 63,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 67,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 80,
            "movement": -6
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 121,
            "movement": -59
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 159,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 182,
            "movement": -45
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 189,
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
            "position": 33,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 52,
            "movement": -4
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 54,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 85,
            "movement": 14
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 88,
            "movement": 7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 94,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 112,
            "movement": 6
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
            "position": 47,
            "movement": -2
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
            "position": 128,
            "movement": -120
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
            "position": 3,
            "movement": 1
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
            "position": 6,
            "movement": 9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 28,
            "movement": 17
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 31,
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 34,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 42,
            "movement": 13
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 46,
            "movement": 17
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 69,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 71,
            "movement": 2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 77,
            "movement": -3
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 85,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 119,
            "movement": -52
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 122,
            "movement": -30
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 135,
            "movement": 5
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 165,
            "movement": 17
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
            "position": 165,
            "movement": -11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 200,
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
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 1,
            "movement": null,
            "status": "new"
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
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 22,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 42,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 55,
            "movement": 8
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 67,
            "movement": 69
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 76,
            "movement": 12
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 79,
            "movement": -55
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 86,
            "movement": -50
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 88,
            "movement": 7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 88,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 94,
            "movement": -6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 110,
            "movement": -9
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 110,
            "movement": -8
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 161,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 173,
            "movement": -11
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 175,
            "movement": -6
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 197,
            "movement": -34
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
            "movement": 39
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
            "position": 57,
            "movement": 0
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 79,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 110,
            "movement": 79
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 111,
            "movement": 13
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 127,
            "movement": 69
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 133,
            "movement": -69
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 168,
            "movement": -41
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 179,
            "movement": 12
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
            "position": 53,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 72,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 75,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 115,
            "movement": -8
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
            "position": 16,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 48,
            "movement": -21
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 55,
            "movement": -18
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 58,
            "movement": 1
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 60,
            "movement": 58
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 61,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 67,
            "movement": -18
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 69,
            "movement": 78
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 71,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 75,
            "movement": 18
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 76,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 136,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 168,
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
            "position": 29,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 38,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 38,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 62,
            "movement": -9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 72,
            "movement": -3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 100,
            "movement": 42
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 101,
            "movement": -24
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 132,
            "movement": -20
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 136,
            "movement": -52
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 156,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 160,
            "movement": -119
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
            "position": 49,
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
            "position": 36,
            "movement": 28
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
            "position": 25,
            "movement": -13
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 37,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 40,
            "movement": -5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 49,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 59,
            "movement": 7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 77,
            "movement": -8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 103,
            "movement": 6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 112,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 115,
            "movement": -8
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 132,
            "movement": -54
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 174,
            "movement": -55
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 182,
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
            "position": 93,
            "movement": -5
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
            "country": "KE",
            "name": "Kenya",
            "position": 14,
            "movement": 1
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
            "position": 33,
            "movement": 5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 36,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 56,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 61,
            "movement": 40
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 79,
            "movement": 67
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 84,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 121,
            "movement": 22
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 131,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 149,
            "movement": 41
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
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 32,
            "movement": 26
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 47,
            "movement": -12
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 100,
            "movement": 8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 105,
            "movement": -18
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 107,
            "movement": 15
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 141,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 157,
            "movement": 9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 188,
            "movement": -111
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 30,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 35,
            "movement": -3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 76,
            "movement": 9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 110,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 111,
            "movement": -35
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 124,
            "movement": 33
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 173,
            "movement": -91
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 176,
            "movement": -50
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 178,
            "movement": -6
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
            "position": 30,
            "movement": 24
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 51,
            "movement": 3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 95,
            "movement": -53
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 157,
            "movement": 7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 159,
            "movement": 8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 161,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 178,
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
    "title": "Final",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 27,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 92,
            "movement": 14
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 123,
            "movement": 21
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 137,
            "movement": -12
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 200,
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
            "country": "LR",
            "name": "Liberia",
            "position": 100,
            "movement": 57
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 128,
            "movement": -15
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3cda4cca35e5a322d6ad9e71c49dbecf/500x500-000000-80-0-0.jpg"
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
            "position": 56,
            "movement": -22
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 67,
            "movement": 2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 78,
            "movement": -15
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 104,
            "movement": -18
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 112,
            "movement": 13
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 158,
            "movement": -30
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f830d11dfb6ee3025b93e60a0e15f075/500x500-000000-80-0-0.jpg"
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
            "position": 108,
            "movement": -12
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 112,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 114,
            "movement": 28
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 136,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 191,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 30,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 66,
            "movement": 3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 77,
            "movement": 82
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 131,
            "movement": -83
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
            "position": 168,
            "movement": -14
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 128,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 174,
            "movement": -42
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
            "position": 7,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 17,
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
            "position": 178,
            "movement": -16
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
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
            "position": 104,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 122,
            "movement": 44
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
            "position": 76,
            "movement": 16
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
            "position": 67,
            "movement": -2
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
            "position": 70,
            "movement": 4
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 94,
            "movement": -83
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 193,
            "movement": -49
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
            "position": 142,
            "movement": -2
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
            "country": "CM",
            "name": "Cameroon",
            "position": 73,
            "movement": -14
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 122,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 155,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 183,
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
    "title": "One Condition",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 78,
            "movement": -5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 133,
            "movement": -56
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
            "position": 141,
            "movement": -22
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
            "position": 196,
            "movement": -139
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e53dccb976a98d09db9a195ce84162f2/500x500-000000-80-0-0.jpg"
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
            "position": 54,
            "movement": 2
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 87,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 128,
            "movement": -14
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
    "title": "Gimme Dat",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 193,
            "movement": -39
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
            "position": 7,
            "movement": 41
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2e52f4bf8bdb05c98002b714669ee2c2/500x500-000000-80-0-0.jpg"
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
            "position": 197,
            "movement": -19
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
            "position": 128,
            "movement": 12
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
            "position": 90,
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
    "title": "Tonight",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 69,
            "movement": 4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 195,
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
            "country": "UG",
            "name": "Uganda",
            "position": 134,
            "movement": -14
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/67996ba3c56f059ae5a870268c66b39f/500x500-000000-80-0-0.jpg"
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
            "position": 34,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 173,
            "movement": -46
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
    "title": "In My Bed",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 158,
            "movement": -7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 177,
            "movement": -18
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9be0538ebbb9c6fd3dcb74844e7e2e2a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Slow Whine",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 48,
            "movement": 14
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1079769bab009299da36d7680437e608/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "No Stress",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 62,
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
    "title": "Slow",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 94,
            "movement": -10
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
            "movement": -5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2538836fe7ba780c5a3a4c04aef4fac5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Situation",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 109,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/cee6b36e7828e7ac6364376ef1290141/500x500-000000-80-0-0.jpg"
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
            "position": 121,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0af8d1b7ecebd4fec1dbb6c048f2105f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bend",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 66,
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
    "title": "Getting Paid ​(f​eat​. Asake, Wizkid, Skillibeng​)",
    "platforms": [
      {
        "platform": "Spotify",
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
    "cover": "https://cdn-images.dzcdn.net/images/cover/77fc9f281aabc0cfb5c17649afe08c8c/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Don't Dull",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 136,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3aff665181b245d2bd9c43afb536db2e/500x500-000000-80-0-0.jpg"
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
            "position": 167,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3d18f71e03fb2831c2ceac5b8285f068/500x500-000000-80-0-0.jpg"
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
            "position": 121,
            "movement": -116
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2538836fe7ba780c5a3a4c04aef4fac5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ebelebe",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 144,
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
    "title": "Bella",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 155,
            "movement": -73
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e4286ac8a38829b6cf5d225c311bccf7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "IDK",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 136,
            "movement": -121
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/24a4bbe1d6d25c216426e42587156a04/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Confam Ni",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 178,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e158db7c3087cff620b41f12d847ae83/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Boom",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 181,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/cddddd44067c884f6959f8d8c229fab8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Fake Love",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 160,
            "movement": 7
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ea13491b73bc307a022486992ce5a56b/500x500-000000-80-0-0.jpg"
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
            "movement": 24
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
  