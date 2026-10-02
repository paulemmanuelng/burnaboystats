// GENERATED FILE — do not edit by hand.
  // Rebuilt several times a day by scripts/build-live-charts.mjs --artist=ayra-starr from kworb's artist page.
  //
  // PLATFORM chart data for Ayra Starr: where each release is sitting RIGHT
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
  export const liveChartsUpdated = "2026-10-02";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-02T12:41Z";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","Spotify Albums","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "Heaven Baby",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 1,
        "entries": [
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 1,
            "movement": 0
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 2,
            "movement": 0
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 2,
            "movement": 5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 2,
            "movement": 0
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 3,
            "movement": -1
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 4,
            "movement": 12
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 4,
            "movement": -2
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 4,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 7,
            "movement": -2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 8,
            "movement": -1
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 9,
            "movement": -2
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 9,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 9,
            "movement": -1
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 14,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 15,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 16,
            "movement": -1
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 17,
            "movement": 40
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 20,
            "movement": -10
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 22,
            "movement": -2
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 25,
            "movement": 6
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 25,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 26,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 28,
            "movement": -1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 28,
            "movement": -1
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 34,
            "movement": 11
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 37,
            "movement": 3
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 38,
            "movement": 3
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 39,
            "movement": 72
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 48,
            "movement": 3
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 48,
            "movement": -19
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 49,
            "movement": -1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 52,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 62,
            "movement": -60
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 68,
            "movement": -19
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 76,
            "movement": -6
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 78,
            "movement": -12
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 78,
            "movement": 8
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 82,
            "movement": -54
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 85,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 87,
            "movement": -6
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 97,
            "movement": 28
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 99,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 101,
            "movement": 44
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 134,
            "movement": -12
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 149,
            "movement": -48
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 159,
            "movement": 31
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 187,
            "movement": 5
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
            "position": 3,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 4,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 7,
            "movement": 1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 9,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 11,
            "movement": 0
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 14,
            "movement": -1
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 18,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 20,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 37,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 69,
            "movement": -1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 70,
            "movement": -1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 93,
            "movement": 7
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 111,
            "movement": 22
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 2,
            "movement": -1
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 29,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 35,
            "movement": 11
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 35,
            "movement": -31
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 41,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 63,
            "movement": -13
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 142,
            "movement": -31
          }
        ]
      },
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 8,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 14,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 17,
            "movement": -10
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 20,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 24,
            "movement": -1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 25,
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
            "position": 58,
            "movement": -1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 82,
            "movement": -15
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 1,
        "entries": [
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 1,
            "movement": 8
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 57,
            "movement": 31
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Starrgirl",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 3,
            "movement": 1
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 4,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 7,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 8,
            "movement": -3
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 10,
            "movement": -4
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 11,
            "movement": -1
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 11,
            "movement": -2
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 15,
            "movement": -5
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 15,
            "movement": -8
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 17,
            "movement": 15
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 18,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 19,
            "movement": -9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 19,
            "movement": -8
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 23,
            "movement": 40
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 25,
            "movement": 11
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 28,
            "movement": 4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 29,
            "movement": 34
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 31,
            "movement": 7
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 31,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 31,
            "movement": -2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 31,
            "movement": -9
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 32,
            "movement": 11
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 36,
            "movement": -12
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 43,
            "movement": -6
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 46,
            "movement": 4
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 46,
            "movement": -30
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 51,
            "movement": -35
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 53,
            "movement": 3
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 54,
            "movement": 93
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 56,
            "movement": -25
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 56,
            "movement": 11
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 56,
            "movement": 9
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 63,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 67,
            "movement": -7
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 81,
            "movement": -14
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 90,
            "movement": -6
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 94,
            "movement": 13
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 95,
            "movement": -51
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 100,
            "movement": 12
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 103,
            "movement": -34
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 119,
            "movement": 10
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 126,
            "movement": -66
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 141,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 145,
            "movement": -11
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 153,
            "movement": -24
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 155,
            "movement": -25
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 198,
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
            "position": 8,
            "movement": -3
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 192,
            "movement": -23
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Colorado",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 23,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 27,
            "movement": 19
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 43,
            "movement": -15
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 69,
            "movement": 33
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 78,
            "movement": 4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 103,
            "movement": 29
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 108,
            "movement": 19
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 130,
            "movement": 14
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 188,
            "movement": -31
          },
          {
            "country": "NG",
            "name": "Nigeria",
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
            "country": "CM",
            "name": "Cameroon",
            "position": 83,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 101,
            "movement": 1
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
            "position": 82,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4d16c0dbdfcfa22baaec4a11c3f283a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Who's Dat Girl",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 47,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 54,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 68,
            "movement": -6
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 108,
            "movement": 8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 126,
            "movement": -36
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 148,
            "movement": -54
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 153,
            "movement": -41
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 168,
            "movement": -67
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
            "position": 61,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 96,
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
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/fe3deba215d998d74542663a84621852/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "treat u right",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 8,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 27,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 32,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 119,
            "movement": 10
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 150,
            "movement": 8
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
            "movement": -4
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
            "position": 191,
            "movement": -31
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
            "position": 153,
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
            "position": 25,
            "movement": 71
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
            "position": 31,
            "movement": -10
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a88a32de107d134d181e111b3ae5f780/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Tornado",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 44,
            "movement": -9
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 48,
            "movement": -12
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 89,
            "movement": -3
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 96,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 111,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 118,
            "movement": -9
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 168,
            "movement": -71
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 186,
            "movement": -10
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
            "movement": -8
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
            "movement": -7
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/faa0b0578b463b8808c25da8f594aced/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "No love",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 45,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 73,
            "movement": -11
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 90,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 93,
            "movement": 32
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 97,
            "movement": 2
          },
          {
            "country": "FR",
            "name": "France",
            "position": 116,
            "movement": 7
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 137,
            "movement": 7
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 140,
            "movement": -36
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 148,
            "movement": 17
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
            "position": 46,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/7b49d51e89ff07824c8c62043775a2ab/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Rush",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 15,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 17,
            "movement": 2
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 55,
            "movement": 1
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 61,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 76,
            "movement": -7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 82,
            "movement": 12
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 86,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 144,
            "movement": -87
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "HU",
            "name": "Hungary",
            "position": 111,
            "movement": 25
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 43,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a73bed954d61b52564118ac926925d76/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "The Year I Turned 21",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 70,
            "movement": -11
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 94,
            "movement": -77
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 111,
            "movement": -21
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 123,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 136,
            "movement": -33
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 180,
            "movement": -10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 188,
            "movement": 11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 188,
            "movement": -76
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
        "platform": "Spotify Albums",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 56,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d096ea1c1019d1af67c0a2e434890e1e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Wo, man",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "IT",
            "name": "Italy",
            "position": 42,
            "movement": -12
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 59,
            "movement": -15
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 69,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 74,
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
            "country": "BG",
            "name": "Bulgaria",
            "position": 7,
            "movement": 0
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 11,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 23,
            "movement": 4
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 57,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c4c1696f82feac0a7fa1e26379b9f7e2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Away",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 65,
            "movement": 72
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 68,
            "movement": 45
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 78,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 88,
            "movement": -19
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 97,
            "movement": -22
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 130,
            "movement": 7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 142,
            "movement": 53
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 144,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/24407cf49fdf864463cb5ca5ad974630/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Last Heartbreak Song",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 52,
            "movement": 92
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 94,
            "movement": 6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 117,
            "movement": 2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 136,
            "movement": 41
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 161,
            "movement": -35
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 168,
            "movement": -81
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d096ea1c1019d1af67c0a2e434890e1e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ngozi",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 58,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 102,
            "movement": -7
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 178,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 191,
            "movement": -80
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
            "position": 23,
            "movement": -12
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/12ca87c2ea2fa9506d6fc562bd8f5a01/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bloody Samaritan",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 178,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 186,
            "movement": -7
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DM",
            "name": "Dominica",
            "position": 37,
            "movement": -11
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6811d7a880826af2be69b81686f629f2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "19 & Dangerous",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 35,
            "movement": 86
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 92,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 106,
            "movement": 30
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 143,
            "movement": 19
          },
          {
            "country": "SC",
            "name": "Seychelles",
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
            "position": 135,
            "movement": 11
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b922c719d3a9901f749140e8f532a8d0/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Hot Body",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 111,
            "movement": -17
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 112,
            "movement": 16
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 187,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 192,
            "movement": -51
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4b5a287c8f574407dc5b1b03b5ae0c58/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bad Vibes",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 144,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 150,
            "movement": 8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 152,
            "movement": 3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 156,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e61faaeb59320961cbd17a1ef7f9e6e7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Misunderstood",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 136,
            "movement": 17
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 189,
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
            "country": "JM",
            "name": "Jamaica",
            "position": 7,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
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
            "position": 4,
            "movement": 36
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2e52f4bf8bdb05c98002b714669ee2c2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Commas",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 137,
            "movement": 38
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 188,
            "movement": 4
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 190,
            "movement": -33
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d096ea1c1019d1af67c0a2e434890e1e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Dangerous",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 89,
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
            "movement": 46
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ms. Paper",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 186,
            "movement": -57
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
            "position": 100,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ayra Starr - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 101,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 134,
            "movement": 10
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/fee95162ec0b1b078345831eb47b8e99/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Treasure",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 7,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Santa",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 4,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/965eeb50245f3178580ac5bda885e56b/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "All The Love",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 54,
            "movement": 19
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d30dbeb4d445f5cc6f7f100b830731c4/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Midnight in New York",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 119,
            "movement": 52
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Amazing",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 134,
            "movement": -23
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/64f822132d39a3677d59f745a248a2ce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Beggie Beggie",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 165,
            "movement": 17
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b922c719d3a9901f749140e8f532a8d0/500x500-000000-80-0-0.jpg"
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
  