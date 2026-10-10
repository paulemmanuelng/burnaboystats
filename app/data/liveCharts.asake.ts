// GENERATED FILE — do not edit by hand.
  // Rebuilt several times a day by scripts/build-live-charts.mjs --artist=asake from kworb's artist page.
  //
  // PLATFORM chart data for Asake: where each release is sitting RIGHT
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
  export const liveChartsUpdated = "2026-10-10";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-10T21:49Z";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","Spotify Albums","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "M$NEY",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 2,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 2,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 2,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 2,
            "movement": 0
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 3,
            "movement": 12
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 3,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 3,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 3,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 5,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 5,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 5,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 5,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 5,
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 7,
            "movement": 1
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 8,
            "movement": 10
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 8,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 9,
            "movement": -2
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 11,
            "movement": -5
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 12,
            "movement": 0
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 13,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 13,
            "movement": 2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 18,
            "movement": 3
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 21,
            "movement": 56
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 21,
            "movement": 17
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 44,
            "movement": 0
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 45,
            "movement": 12
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 53,
            "movement": -13
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 57,
            "movement": 7
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 59,
            "movement": 90
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 67,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 86,
            "movement": -47
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 98,
            "movement": -18
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 99,
            "movement": 66
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 107,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 115,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 116,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 127,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 134,
            "movement": 29
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 144,
            "movement": -27
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 154,
            "movement": -123
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 164,
            "movement": -35
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 171,
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
            "position": 2,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Gratitude",
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
            "country": "LR",
            "name": "Liberia",
            "position": 2,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 3,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 3,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 4,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 5,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 5,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 9,
            "movement": -3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 13,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 14,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 19,
            "movement": 14
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 20,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 21,
            "movement": 6
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 29,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 35,
            "movement": 1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 60,
            "movement": -1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 71,
            "movement": 26
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 77,
            "movement": -9
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 81,
            "movement": -13
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 157,
            "movement": 5
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 166,
            "movement": 4
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
            "position": 39,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 46,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 54,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 66,
            "movement": -4
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 99,
            "movement": 12
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 108,
            "movement": -6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 125,
            "movement": -10
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 166,
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
            "position": 21,
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
            "position": 114,
            "movement": 27
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
            "position": 98,
            "movement": -63
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Work Of Art",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 2,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 10,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 12,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 18,
            "movement": -6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 20,
            "movement": 1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 20,
            "movement": 23
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 23,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 24,
            "movement": 15
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 25,
            "movement": -5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 26,
            "movement": 47
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 46,
            "movement": 61
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 51,
            "movement": 9
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 53,
            "movement": -15
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 55,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 56,
            "movement": 9
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 57,
            "movement": 95
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 70,
            "movement": 23
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 80,
            "movement": 3
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 82,
            "movement": -40
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 87,
            "movement": -24
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 100,
            "movement": 19
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 112,
            "movement": -8
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 116,
            "movement": -34
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 127,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 159,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 181,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 189,
            "movement": -9
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 192,
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
            "position": 6,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "IKEBE 3000",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 1,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 1,
            "movement": 4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 4,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 4,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 7,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 12,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 15,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 18,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 23,
            "movement": 7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 34,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 40,
            "movement": -9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 41,
            "movement": -9
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 53,
            "movement": 1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 100,
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
            "position": 4,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 7,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 38,
            "movement": 5
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 44,
            "movement": -6
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 51,
            "movement": -3
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 56,
            "movement": -12
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 66,
            "movement": -7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 67,
            "movement": -8
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 78,
            "movement": -9
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 96,
            "movement": -19
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 103,
            "movement": -21
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 111,
            "movement": -8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 188,
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
            "position": 5,
            "movement": -3
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
            "position": 8,
            "movement": 117
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9bf17dcba25cf3ae10aa25070e72b58e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Forgiveness",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 2,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 3,
            "movement": 6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 3,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 5,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 7,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 7,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 13,
            "movement": 4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 14,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 17,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 22,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 23,
            "movement": -5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 35,
            "movement": 5
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 37,
            "movement": -15
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 38,
            "movement": 124
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 50,
            "movement": 1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 57,
            "movement": -4
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 60,
            "movement": 69
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 67,
            "movement": 119
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 91,
            "movement": 9
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 119,
            "movement": -6
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 127,
            "movement": 5
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 185,
            "movement": -67
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
            "movement": -12
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
            "movement": 5
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
            "position": 7,
            "movement": 5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "WORSHIP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 9,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 19,
            "movement": 16
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 20,
            "movement": -2
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 31,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 34,
            "movement": -6
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 38,
            "movement": -3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 44,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 44,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 46,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 47,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 55,
            "movement": 4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 58,
            "movement": -9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 82,
            "movement": -7
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 130,
            "movement": 45
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 139,
            "movement": -25
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 158,
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
            "country": "KE",
            "name": "Kenya",
            "position": 9,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 73,
            "movement": -9
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 182,
            "movement": 4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 199,
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
            "position": 49,
            "movement": -6
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 62,
            "movement": -20
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
      },
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 37,
            "movement": 13
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/580fc298c0319c8037b1062f389790b0/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Mr. Money With The Vibe",
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
            "country": "CM",
            "name": "Cameroon",
            "position": 13,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 13,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 14,
            "movement": -6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 16,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 16,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 19,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 24,
            "movement": -14
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 24,
            "movement": 48
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 25,
            "movement": -8
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 31,
            "movement": 4
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 34,
            "movement": -14
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 49,
            "movement": -8
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 51,
            "movement": 7
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 57,
            "movement": 18
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 66,
            "movement": -12
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 77,
            "movement": 2
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 84,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 97,
            "movement": 18
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 100,
            "movement": 18
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 131,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 158,
            "movement": -77
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
            "position": 7,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "WHY LOVE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 5,
            "movement": 8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 6,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 6,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 9,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 10,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 20,
            "movement": 9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 22,
            "movement": 5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 26,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 29,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 32,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 47,
            "movement": 17
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 56,
            "movement": -1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 82,
            "movement": -16
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 83,
            "movement": -11
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 110,
            "movement": 22
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 118,
            "movement": 19
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 170,
            "movement": -13
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 186,
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
            "position": 153,
            "movement": -37
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
            "position": 100,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "BADMAN GANGSTA",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 10,
            "movement": 6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 27,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 31,
            "movement": 16
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 44,
            "movement": -6
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 51,
            "movement": 5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 58,
            "movement": 15
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 63,
            "movement": 92
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 67,
            "movement": -2
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 74,
            "movement": -11
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 88,
            "movement": 51
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 88,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 112,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 140,
            "movement": -23
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 177,
            "movement": -46
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 197,
            "movement": -67
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
            "position": 104,
            "movement": -12
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
            "movement": -129
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
            "position": 50,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/15071ecd8b0292000edb00d1152ff166/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Lungu Boy",
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
            "country": "TZ",
            "name": "Tanzania",
            "position": 18,
            "movement": 24
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 20,
            "movement": 2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 20,
            "movement": -15
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 20,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 32,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 39,
            "movement": -21
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 41,
            "movement": 41
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 59,
            "movement": -19
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 59,
            "movement": -27
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 75,
            "movement": 73
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 80,
            "movement": -1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 107,
            "movement": 31
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 138,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 171,
            "movement": 23
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 173,
            "movement": 27
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 178,
            "movement": -127
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
            "position": 13,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Eja Meja",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 12,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 19,
            "movement": 11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 23,
            "movement": -11
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 33,
            "movement": 4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 40,
            "movement": -9
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 44,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 46,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 60,
            "movement": -4
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 62,
            "movement": -55
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 65,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 91,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 137,
            "movement": 19
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 144,
            "movement": -32
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 196,
            "movement": -4
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
            "position": 29,
            "movement": -14
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
            "position": 119,
            "movement": 3
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
            "position": 25,
            "movement": 11
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/065baff6ae2b9caecf19bb6aa423644a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "MCBH",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 9,
            "movement": 10
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 20,
            "movement": -10
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 23,
            "movement": 24
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 41,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 53,
            "movement": 2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 59,
            "movement": 6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 59,
            "movement": -11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 60,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 63,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 83,
            "movement": 7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 174,
            "movement": -12
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 190,
            "movement": -36
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 200,
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
            "position": 34,
            "movement": -13
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
            "position": 99,
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
            "position": 16,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bandana",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SR",
            "name": "Suriname",
            "position": 26,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 35,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 41,
            "movement": -5
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 81,
            "movement": 3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 84,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 88,
            "movement": 6
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 90,
            "movement": -22
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 105,
            "movement": 21
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 122,
            "movement": 14
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 129,
            "movement": 10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 145,
            "movement": -6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 147,
            "movement": 14
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 148,
            "movement": -12
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 179,
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
            "position": 141,
            "movement": -15
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 130,
            "movement": 13
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3a0ea8b02098effdf5ecce496d515176/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "M$NEY Live in London",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 6,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 11,
            "movement": 69
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 13,
            "movement": 3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 15,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 23,
            "movement": -3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 30,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 50,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 62,
            "movement": 56
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 65,
            "movement": -42
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 78,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 88,
            "movement": -57
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 94,
            "movement": -32
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 147,
            "movement": 4
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 153,
            "movement": -24
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
            "position": 9,
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
            "position": 59,
            "movement": -12
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
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
            "position": 17,
            "movement": 7
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 24,
            "movement": 5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 24,
            "movement": 7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 27,
            "movement": 8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 34,
            "movement": -5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 50,
            "movement": -5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 53,
            "movement": 18
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 80,
            "movement": 5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 91,
            "movement": 5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 122,
            "movement": -19
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 126,
            "movement": 50
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 149,
            "movement": -6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 152,
            "movement": -40
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
            "movement": -11
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
            "position": 51,
            "movement": -35
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Amapiano",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 20,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 32,
            "movement": 4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 39,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 53,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 58,
            "movement": 14
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 64,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 74,
            "movement": -29
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 78,
            "movement": 20
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 81,
            "movement": -19
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 83,
            "movement": -5
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 121,
            "movement": 8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 146,
            "movement": 12
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 166,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ca53dc32e25c8249389aa28d80ad8fe7/500x500-000000-80-0-0.jpg"
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
            "position": 6,
            "movement": 21
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 55,
            "movement": -16
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 56,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 63,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 68,
            "movement": 78
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 70,
            "movement": -41
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 84,
            "movement": -23
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 100,
            "movement": -8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 110,
            "movement": 5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 117,
            "movement": -5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 192,
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
            "position": 120,
            "movement": -16
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
            "position": 107,
            "movement": -103
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
            "position": 76,
            "movement": -63
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Chanel",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 14,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 18,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 23,
            "movement": -5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 27,
            "movement": -6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 28,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 40,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 42,
            "movement": 10
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 48,
            "movement": -9
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 57,
            "movement": 10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 155,
            "movement": -13
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
            "movement": -9
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
            "position": 117,
            "movement": 71
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
            "position": 135,
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
            "position": 26,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9bf17dcba25cf3ae10aa25070e72b58e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "THAT GIRL",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 10,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 23,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 51,
            "movement": -22
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 59,
            "movement": 4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 70,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 74,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 75,
            "movement": 61
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 157,
            "movement": 38
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 183,
            "movement": -32
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
            "position": 91,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 102,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 113,
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
            "position": 68,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/868b5607719ea2740a79887299cdb5be/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Remember",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 18,
            "movement": 15
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 57,
            "movement": 6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 84,
            "movement": -5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 86,
            "movement": -27
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 96,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 123,
            "movement": 30
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 133,
            "movement": 16
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 144,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 179,
            "movement": -83
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 189,
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
            "position": 67,
            "movement": -11
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Lonely At The Top",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 17,
            "movement": 34
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 38,
            "movement": 19
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 84,
            "movement": -15
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 130,
            "movement": 5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 133,
            "movement": 36
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 137,
            "movement": -15
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 140,
            "movement": -15
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 149,
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 63,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 142,
            "movement": -118
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
            "position": 121,
            "movement": -22
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
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
            "position": 36,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 63,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 71,
            "movement": 4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 81,
            "movement": 34
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 85,
            "movement": -13
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 89,
            "movement": -28
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 122,
            "movement": 7
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 143,
            "movement": 4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 169,
            "movement": -15
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 175,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 194,
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
    "title": "Wa",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 41,
            "movement": -14
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 72,
            "movement": 12
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 79,
            "movement": 8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 95,
            "movement": -6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 97,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 104,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 109,
            "movement": -10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 167,
            "movement": -21
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
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Rora",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 66,
            "movement": 11
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 84,
            "movement": 22
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 128,
            "movement": 6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 156,
            "movement": 27
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 157,
            "movement": -89
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 190,
            "movement": -7
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
            "position": 143,
            "movement": -14
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Oba",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 82,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 106,
            "movement": 13
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 140,
            "movement": 60
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 160,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 164,
            "movement": -5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 166,
            "movement": 25
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
            "position": 147,
            "movement": -24
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "NO COMPETITION",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 74,
            "movement": 16
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 87,
            "movement": -6
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 95,
            "movement": 45
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 121,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 127,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 132,
            "movement": -20
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 154,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Nzaza",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 166,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 182,
            "movement": -58
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 192,
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
            "position": 51,
            "movement": -12
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
            "position": 122,
            "movement": -6
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
            "position": 68,
            "movement": null,
            "status": "re"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Asambe",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 91,
            "movement": -32
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 96,
            "movement": 6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 111,
            "movement": 72
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 146,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 183,
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
            "position": 175,
            "movement": -23
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Blessings",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 90,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 105,
            "movement": -26
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 165,
            "movement": -7
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
            "movement": -20
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
            "position": 56,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/af30a7aeb43913343236936ca5237084/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "99",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 64,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 153,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 177,
            "movement": 12
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
            "position": 129,
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
            "position": 119,
            "movement": 5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3e2739afe89b70d123d223f12e6f5d92/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Terminator",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 52,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 165,
            "movement": -26
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 185,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 185,
            "movement": -35
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Amen",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 103,
            "movement": 51
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 136,
            "movement": -32
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 155,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 167,
            "movement": 6
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Joha",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 151,
            "movement": 49
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 166,
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
            "country": "TD",
            "name": "Chad",
            "position": 179,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
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
            "position": 25,
            "movement": 49
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 118,
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
            "position": 91,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ototo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 156,
            "movement": -23
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 193,
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
            "position": 80,
            "movement": -9
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Skilful",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 92,
            "movement": -20
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 112,
            "movement": 47
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 165,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Dupe",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 179,
            "movement": -35
          },
          {
            "country": "GM",
            "name": "Gambia",
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
            "country": "NG",
            "name": "Nigeria",
            "position": 162,
            "movement": -11
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ako",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 111,
            "movement": 4
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
            "position": 189,
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
            "position": 136,
            "movement": -16
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Sungba",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 75,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 124,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/671d8a1ee4c2d4ca3e7c32877bbfee6a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "2Factor",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 144,
            "movement": -7
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 198,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0dd0b79a37a28f75ab7f61b38d0dccda/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Active",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 175,
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
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/678e2eec76ee9bd39c394da63d24b4b9/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Gratitude (Live in London)",
    "kind": "song",
    "platforms": [
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 6,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 93,
            "movement": 4
          }
        ]
      }
    ],
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Mentally",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 110,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Uhh Yeahh",
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
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Basquiat",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 99,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "I Believe",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 186,
            "movement": -9
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ego - Live in London",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 189,
            "movement": -35
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Intro",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 157,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ego",
    "platforms": [
      {
        "platform": "Apple Music",
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
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Dull",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 175,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
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
            "position": 182,
            "movement": -26
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Happiness (feat. Asake, Gunna)",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 191,
            "movement": -31
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1aca731992c29efe91ca4639235a69c8/500x500-000000-80-0-0.jpg"
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
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3a0ea8b02098effdf5ecce496d515176/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ololade Asake - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 129,
            "movement": 10
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/692c4f384976719fee0db6f5309d7c8d/500x500-000000-80-0-0.jpg"
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
  