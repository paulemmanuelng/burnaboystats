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
  export const liveChartsUpdated = "2026-10-15";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-15T17:05Z";
  
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
            "country": "MS",
            "name": "Montserrat",
            "position": 40,
            "movement": 0
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 43,
            "movement": 32
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 52,
            "movement": -2
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 69,
            "movement": -25
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 71,
            "movement": 64
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 87,
            "movement": -10
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 109,
            "movement": -58
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 110,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 112,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 113,
            "movement": 26
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 123,
            "movement": -5
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 130,
            "movement": 40
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 131,
            "movement": 36
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 139,
            "movement": 2
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 156,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 171,
            "movement": -14
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 179,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 185,
            "movement": -12
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 189,
            "movement": -59
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 189,
            "movement": -132
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 200,
            "movement": -11
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
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
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 37,
            "movement": -4
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 71,
            "movement": -6
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 95,
            "movement": -4
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 108,
            "movement": -12
          },
          {
            "country": "US",
            "name": "United States",
            "position": 117,
            "movement": -8
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 119,
            "movement": -10
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 126,
            "movement": -11
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 127,
            "movement": -18
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 142,
            "movement": -2
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 149,
            "movement": 5
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 157,
            "movement": 15
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 159,
            "movement": 10
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 167,
            "movement": -11
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 168,
            "movement": -16
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 178,
            "movement": -22
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 185,
            "movement": -9
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 197,
            "movement": -24
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "QA",
            "name": "Qatar",
            "position": 4,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 20,
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
            "country": "EC",
            "name": "Ecuador",
            "position": 65,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 72,
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 5,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 7,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 7,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 13,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 41,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 50,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 51,
            "movement": -12
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 57,
            "movement": -7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 60,
            "movement": 21
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 76,
            "movement": -6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 81,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 109,
            "movement": -24
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 124,
            "movement": -9
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 138,
            "movement": 34
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 171,
            "movement": 18
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 196,
            "movement": -64
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
            "position": 50,
            "movement": 3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 61,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 90,
            "movement": 1
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 107,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 126,
            "movement": -18
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 142,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 144,
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
            "position": 52,
            "movement": 3
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
            "position": 74,
            "movement": -6
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
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 6,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 25,
            "movement": 26
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 31,
            "movement": 7
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 35,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 37,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 42,
            "movement": 6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 51,
            "movement": -11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 61,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 79,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 88,
            "movement": -7
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 91,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 101,
            "movement": -39
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 102,
            "movement": -2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 105,
            "movement": 59
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 131,
            "movement": 3
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 150,
            "movement": 46
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 160,
            "movement": 23
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 166,
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
            "country": "GH",
            "name": "Ghana",
            "position": 34,
            "movement": -22
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
            "position": 53,
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
            "position": 9,
            "movement": 0
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 19,
            "movement": -12
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 20,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 34,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 48,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 58,
            "movement": 12
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 61,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 65,
            "movement": 18
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 70,
            "movement": 10
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 85,
            "movement": 2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 91,
            "movement": -34
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 93,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 100,
            "movement": -50
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 119,
            "movement": 24
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 136,
            "movement": -15
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 143,
            "movement": -26
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 170,
            "movement": -111
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 171,
            "movement": -33
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 178,
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
            "position": 78,
            "movement": -3
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
            "position": 20,
            "movement": 0
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 31,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 31,
            "movement": 27
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 56,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 62,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 63,
            "movement": -22
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 78,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 82,
            "movement": 7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 87,
            "movement": -48
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 108,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 124,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 135,
            "movement": -8
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 135,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 152,
            "movement": -34
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 194,
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
            "position": 16,
            "movement": -1
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
            "position": 37,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 56,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 60,
            "movement": 77
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 62,
            "movement": 19
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 144,
            "movement": 5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 187,
            "movement": -43
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 194,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 195,
            "movement": -98
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 200,
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
            "position": 23,
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
            "position": 46,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 65,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 70,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 73,
            "movement": 5
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
            "position": 64,
            "movement": -10
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 9,
            "movement": 31
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 25,
            "movement": 8
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 41,
            "movement": 15
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 44,
            "movement": -11
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 44,
            "movement": 9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 53,
            "movement": 13
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 75,
            "movement": 5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 84,
            "movement": 4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 93,
            "movement": -8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 98,
            "movement": 3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 110,
            "movement": 14
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 136,
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
            "position": 61,
            "movement": 1
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 190,
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
            "position": 27,
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
    "title": "Ginger",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 19,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 23,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 31,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 41,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 50,
            "movement": -5
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 59,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 70,
            "movement": 25
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 79,
            "movement": 11
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 86,
            "movement": 57
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 90,
            "movement": 38
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 109,
            "movement": 27
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 118,
            "movement": 6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 144,
            "movement": 8
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
            "country": "KE",
            "name": "Kenya",
            "position": 50,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 55,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 55,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 94,
            "movement": 22
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 112,
            "movement": 78
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 116,
            "movement": -40
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 116,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 155,
            "movement": -40
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 169,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
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
            "country": "NG",
            "name": "Nigeria",
            "position": 106,
            "movement": 13
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
            "position": 34,
            "movement": 5
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 74,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 91,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 92,
            "movement": -40
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 121,
            "movement": -34
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 123,
            "movement": -10
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 157,
            "movement": -31
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 182,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 186,
            "movement": -77
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 188,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
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
            "movement": 2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 29,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 32,
            "movement": 16
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 75,
            "movement": -23
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 91,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 121,
            "movement": -15
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 124,
            "movement": 2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 176,
            "movement": -56
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
            "position": 24,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2538836fe7ba780c5a3a4c04aef4fac5/500x500-000000-80-0-0.jpg"
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
            "position": 35,
            "movement": 1
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 85,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 125,
            "movement": 19
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 127,
            "movement": 57
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 189,
            "movement": -98
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 196,
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
            "position": 88,
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
            "position": 128,
            "movement": -48
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e4286ac8a38829b6cf5d225c311bccf7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Final",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 15,
            "movement": 6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 29,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 51,
            "movement": 1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 77,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 186,
            "movement": -8
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 60,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 94,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 95,
            "movement": 2
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 180,
            "movement": -132
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3cda4cca35e5a322d6ad9e71c49dbecf/500x500-000000-80-0-0.jpg"
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
            "position": 47,
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 75,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 181,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 182,
            "movement": 18
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 191,
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
            "position": 171,
            "movement": 10
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
            "country": "NG",
            "name": "Nigeria",
            "position": 53,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 55,
            "movement": 3
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 85,
            "movement": -61
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 88,
            "movement": 20
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 123,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 142,
            "movement": -5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 164,
            "movement": -17
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
            "movement": -7
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 19,
            "movement": 34
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 107,
            "movement": 8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 188,
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
            "position": 91,
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
            "position": 75,
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
    "title": "Sponono",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 49,
            "movement": -7
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 78,
            "movement": -2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 88,
            "movement": -1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 89,
            "movement": -4
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 157,
            "movement": -63
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f830d11dfb6ee3025b93e60a0e15f075/500x500-000000-80-0-0.jpg"
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
            "position": 31,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 40,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 78,
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
            "position": 174,
            "movement": 14
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 184,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 33,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 73,
            "movement": 0
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 179,
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
            "position": 85,
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
            "position": 132,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/73/bd/59/73bd5950-72b7-8758-e91f-b2a16d558c57/0.jpg/300x300bb.jpg"
  },
  {
    "title": "Made In Lagos",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 35,
            "movement": -10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 46,
            "movement": 2
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 85,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 95,
            "movement": 0
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
            "position": 20,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
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
            "position": 132,
            "movement": -14
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 133,
            "movement": 17
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 178,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 189,
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
    "title": "Jam",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 78,
            "movement": 10
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 107,
            "movement": -9
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 178,
            "movement": 22
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
            "position": 95,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 107,
            "movement": 19
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
            "position": 176,
            "movement": -15
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e53dccb976a98d09db9a195ce84162f2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Holla at Your Boy",
    "platforms": [
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
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 114,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4e3a6bee57e9a7a41c399565a7cf72c1/500x500-000000-80-0-0.jpg"
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
            "position": 33,
            "movement": 76
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 81,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e4286ac8a38829b6cf5d225c311bccf7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "The Matter",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 72,
            "movement": 7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 97,
            "movement": 11
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5956f4fdf351532267e5538e2373615b/500x500-000000-80-0-0.jpg"
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
            "position": 91,
            "movement": 17
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
            "position": 44,
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
    "title": "IDK",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 31,
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
    "title": "Bad To Me",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 40,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ec446ac1b021f7777dec6ebbc990404f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Après Minuit",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 42,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/abc1e9a3c70d9ee2784cdefc48a3ae3b/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Kese",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 76,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b83e12a893bcd9bca6f6e84283dbedaa/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "PAMI",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 35,
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
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2538836fe7ba780c5a3a4c04aef4fac5/500x500-000000-80-0-0.jpg"
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
            "position": 76,
            "movement": 10
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3aff665181b245d2bd9c43afb536db2e/500x500-000000-80-0-0.jpg"
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
            "position": 117,
            "movement": 3
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
            "position": 177,
            "movement": 16
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
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
            "position": 148,
            "movement": 8
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0af8d1b7ecebd4fec1dbb6c048f2105f/500x500-000000-80-0-0.jpg"
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
            "position": 132,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3d18f71e03fb2831c2ceac5b8285f068/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Mood",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 94,
            "movement": -74
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/cddddd44067c884f6959f8d8c229fab8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ma Lo",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 95,
            "movement": -74
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ab78245a891d3dad863b735b8afc1b89/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "In My Bed",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 142,
            "movement": -35
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9be0538ebbb9c6fd3dcb74844e7e2e2a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Smile",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 102,
            "movement": -76
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
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 112,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/67996ba3c56f059ae5a870268c66b39f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Many Ways",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 113,
            "movement": -79
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/332d8b3586d040e4d5ef670f3987dcfc/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Lagos to Kampala",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 160,
            "movement": 16
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/8f2d40ca3352120f01ae569e541c6e84/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Erima",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 119,
            "movement": -83
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
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
            "position": 148,
            "movement": -101
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a72ddbe66cc07afc8655e344c8d06fbd/500x500-000000-80-0-0.jpg"
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
            "position": 137,
            "movement": 17
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
  