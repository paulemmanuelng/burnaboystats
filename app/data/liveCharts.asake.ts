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
  export const liveChartsUpdated = "2026-09-18";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-09-18T11:53Z";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","Spotify Albums","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "M$NEY",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 3,
        "entries": [
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 1,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 1,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 1,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 2,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 2,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 2,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 2,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 2,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 2,
            "movement": 1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 3,
            "movement": 2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 3,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 3,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 3,
            "movement": -1
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 5,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 6,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 6,
            "movement": -1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 7,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 12,
            "movement": -4
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 15,
            "movement": -1
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 17,
            "movement": 23
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 20,
            "movement": -8
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 33,
            "movement": -1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 40,
            "movement": -5
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 45,
            "movement": 17
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 53,
            "movement": -15
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 54,
            "movement": -1
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 59,
            "movement": -49
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 61,
            "movement": -21
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 61,
            "movement": 25
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 80,
            "movement": -45
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 82,
            "movement": -5
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 83,
            "movement": -26
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 95,
            "movement": 2
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 95,
            "movement": 72
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 102,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 106,
            "movement": -11
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 111,
            "movement": 41
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 138,
            "movement": -88
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 138,
            "movement": -83
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 152,
            "movement": -52
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 163,
            "movement": null,
            "status": "new"
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 177,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 195,
            "movement": -109
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 195,
            "movement": -54
          }
        ]
      },
      {
        "platform": "Spotify Albums",
        "numberOnes": 1,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 1,
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
            "country": "GM",
            "name": "Gambia",
            "position": 2,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 3,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 3,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 4,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 4,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 4,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 5,
            "movement": 2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 6,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 7,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 10,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 13,
            "movement": -2
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 19,
            "movement": 28
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 23,
            "movement": 2
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 23,
            "movement": 4
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 37,
            "movement": -5
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 44,
            "movement": 8
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 49,
            "movement": -2
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 57,
            "movement": -8
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 61,
            "movement": -44
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
            "position": 37,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 40,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 52,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 77,
            "movement": -1
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 93,
            "movement": 9
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 108,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 167,
            "movement": -7
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 1,
        "entries": [
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 1,
            "movement": 45
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 49,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 81,
            "movement": -64
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
            "position": 4,
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
            "position": 26,
            "movement": 13
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Forgiveness",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 1,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 1,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 2,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 2,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 3,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 4,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 4,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 5,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 8,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 9,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 16,
            "movement": -8
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 20,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 22,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 25,
            "movement": 4
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 26,
            "movement": -1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 47,
            "movement": -2
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 51,
            "movement": 4
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 59,
            "movement": 4
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 77,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 117,
            "movement": -26
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 120,
            "movement": -6
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 156,
            "movement": -17
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 157,
            "movement": -100
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 176,
            "movement": 18
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
            "position": 12,
            "movement": 6
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 40,
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
            "position": 10,
            "movement": -2
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
            "position": 3,
            "movement": 5
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
            "country": "CM",
            "name": "Cameroon",
            "position": 9,
            "movement": 8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 10,
            "movement": 16
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 10,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 12,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 17,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 17,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 18,
            "movement": 4
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 19,
            "movement": 19
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 22,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 23,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 24,
            "movement": -7
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 25,
            "movement": 36
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 32,
            "movement": -7
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 37,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 38,
            "movement": 1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 38,
            "movement": 42
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 59,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 71,
            "movement": 15
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 73,
            "movement": 3
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 74,
            "movement": -22
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 79,
            "movement": -24
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 91,
            "movement": -11
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 96,
            "movement": -73
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 163,
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
            "position": 7,
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
            "position": 166,
            "movement": -82
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "WORSHIP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 4,
            "movement": 104
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 6,
            "movement": 7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 12,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 14,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 18,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 19,
            "movement": 50
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 20,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 24,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 24,
            "movement": -11
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 33,
            "movement": 7
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 45,
            "movement": -8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 53,
            "movement": -12
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 67,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 74,
            "movement": 2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 78,
            "movement": 22
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 87,
            "movement": 48
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 108,
            "movement": -7
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 110,
            "movement": 21
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
            "position": 60,
            "movement": 7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 93,
            "movement": -16
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
            "position": 27,
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
            "movement": -2
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
            "position": 34,
            "movement": 2
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
            "country": "BJ",
            "name": "Benin",
            "position": 7,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 8,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 8,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 12,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 13,
            "movement": 15
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 14,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 15,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 19,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 26,
            "movement": -17
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 30,
            "movement": 2
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 31,
            "movement": -26
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 34,
            "movement": -17
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 45,
            "movement": -3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 48,
            "movement": 70
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 59,
            "movement": 34
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 82,
            "movement": -14
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 86,
            "movement": -5
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 103,
            "movement": -13
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 109,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 110,
            "movement": -7
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 121,
            "movement": -8
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 188,
            "movement": -150
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
            "movement": 2
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Lungu Boy",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 6,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 13,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 22,
            "movement": 7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 27,
            "movement": 4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 29,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 36,
            "movement": 4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 37,
            "movement": 42
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 42,
            "movement": -18
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 53,
            "movement": 14
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 71,
            "movement": -24
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 71,
            "movement": 7
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 85,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 101,
            "movement": 18
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 121,
            "movement": 21
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 144,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 154,
            "movement": 10
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 156,
            "movement": -96
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 156,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 172,
            "movement": -10
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
            "position": 10,
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
            "position": 5,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "WHY LOVE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 3,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 7,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 9,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 9,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 11,
            "movement": 3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 11,
            "movement": 15
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 11,
            "movement": -3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 13,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 15,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 20,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 30,
            "movement": 3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 47,
            "movement": 8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 56,
            "movement": 13
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 71,
            "movement": 12
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 75,
            "movement": -32
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 78,
            "movement": -4
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 152,
            "movement": 21
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
            "position": 107,
            "movement": -5
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
            "position": 5,
            "movement": 6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 9,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 10,
            "movement": -2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 18,
            "movement": 6
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 23,
            "movement": 5
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 38,
            "movement": -2
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 45,
            "movement": -9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 57,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 61,
            "movement": -14
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 68,
            "movement": 27
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 72,
            "movement": 8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 100,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 122,
            "movement": 39
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 152,
            "movement": -52
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 198,
            "movement": -54
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
            "position": 66,
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
            "position": 24,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/15071ecd8b0292000edb00d1152ff166/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "THAT GIRL",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 16,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 17,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 31,
            "movement": 4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 44,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 55,
            "movement": -12
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 71,
            "movement": -15
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 76,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 105,
            "movement": 76
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 121,
            "movement": 41
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 134,
            "movement": -35
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 154,
            "movement": 19
          },
          {
            "country": "TD",
            "name": "Chad",
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
            "country": "NG",
            "name": "Nigeria",
            "position": 60,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 71,
            "movement": -6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 71,
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
            "position": 45,
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
            "position": 109,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/868b5607719ea2740a79887299cdb5be/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bandana",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 51,
            "movement": 36
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 54,
            "movement": 38
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 54,
            "movement": -5
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 65,
            "movement": 58
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 67,
            "movement": 4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 69,
            "movement": -27
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 72,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 99,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 108,
            "movement": -20
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 130,
            "movement": 5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 140,
            "movement": 43
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 148,
            "movement": -2
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 168,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 180,
            "movement": 9
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 186,
            "movement": -54
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
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
            "position": 90,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3a0ea8b02098effdf5ecce496d515176/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "MCBH",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 13,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 14,
            "movement": 15
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 28,
            "movement": -6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 31,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 34,
            "movement": 21
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 38,
            "movement": 5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 50,
            "movement": -10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 60,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 65,
            "movement": 31
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 120,
            "movement": 9
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 130,
            "movement": 44
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 193,
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
            "position": 9,
            "movement": 3
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
            "position": 190,
            "movement": -4
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
            "movement": -4
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
            "position": 10,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
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
            "position": 10,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 18,
            "movement": 36
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 22,
            "movement": 6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 29,
            "movement": -7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 35,
            "movement": -5
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
            "position": 53,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 55,
            "movement": -7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 77,
            "movement": 16
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 87,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 139,
            "movement": -25
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 143,
            "movement": -13
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 190,
            "movement": -93
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
            "position": 41,
            "movement": 24
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 57,
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
            "position": 41,
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
    "title": "M$NEY Live in London",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 1,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 1,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 4,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 8,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 10,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 10,
            "movement": 11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 11,
            "movement": -6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 15,
            "movement": 4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 42,
            "movement": -9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 43,
            "movement": -8
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 46,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 69,
            "movement": -23
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 111,
            "movement": 23
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 169,
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
            "position": 5,
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
            "position": 56,
            "movement": -15
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Wa",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 23,
            "movement": 9
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 30,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 45,
            "movement": -18
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 55,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 67,
            "movement": -14
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 74,
            "movement": 8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 75,
            "movement": -15
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 87,
            "movement": 2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 106,
            "movement": -21
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 111,
            "movement": 38
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 117,
            "movement": -1
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 171,
            "movement": 12
          },
          {
            "country": "ML",
            "name": "Mali",
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
            "position": 26,
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
            "position": 51,
            "movement": -16
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
            "position": 57,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
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
            "position": 25,
            "movement": -5
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 32,
            "movement": 116
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 37,
            "movement": -3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 52,
            "movement": 140
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 63,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 63,
            "movement": -9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 67,
            "movement": 10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 82,
            "movement": -6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 99,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 118,
            "movement": -3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 154,
            "movement": 16
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 160,
            "movement": 21
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 193,
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
            "position": 97,
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
            "position": 16,
            "movement": -12
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Remember",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 26,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 42,
            "movement": 18
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 54,
            "movement": -21
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 63,
            "movement": -11
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 69,
            "movement": 73
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 88,
            "movement": 16
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 130,
            "movement": 19
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 139,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 148,
            "movement": -53
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 170,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 173,
            "movement": -56
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 185,
            "movement": -15
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 187,
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
            "position": 37,
            "movement": -5
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
            "position": 26,
            "movement": -7
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Amapiano",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 10,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 19,
            "movement": 45
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 20,
            "movement": 14
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 22,
            "movement": 4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 27,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 28,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 35,
            "movement": 51
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 36,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 37,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 39,
            "movement": 9
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 68,
            "movement": 13
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 89,
            "movement": 2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 126,
            "movement": 22
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 175,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ca53dc32e25c8249389aa28d80ad8fe7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Eja Meja",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 2,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 6,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 12,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 14,
            "movement": 5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 15,
            "movement": 47
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 19,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 69,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 76,
            "movement": 26
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 99,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 123,
            "movement": 21
          },
          {
            "country": "MW",
            "name": "Malawi",
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
            "position": 28,
            "movement": -3
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
            "movement": -10
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
            "position": 23,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/065baff6ae2b9caecf19bb6aa423644a/500x500-000000-80-0-0.jpg"
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
            "position": 11,
            "movement": 5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 14,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 22,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 32,
            "movement": 8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 39,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 55,
            "movement": -26
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 57,
            "movement": -7
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 91,
            "movement": 21
          },
          {
            "country": "ML",
            "name": "Mali",
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
            "position": 8,
            "movement": 2
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
            "position": 120,
            "movement": 1
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
            "position": 20,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9bf17dcba25cf3ae10aa25070e72b58e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Lonely At The Top",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 29,
            "movement": 45
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 68,
            "movement": 16
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 82,
            "movement": -20
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 89,
            "movement": 55
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 95,
            "movement": 12
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 97,
            "movement": 21
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 113,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 124,
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
            "position": 102,
            "movement": -16
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
            "position": 88,
            "movement": -2
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
            "position": 133,
            "movement": -17
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
            "position": 38,
            "movement": null,
            "status": "re"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Rora",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 48,
            "movement": -9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 74,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 88,
            "movement": 12
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 106,
            "movement": -64
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 113,
            "movement": -32
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 126,
            "movement": 65
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 157,
            "movement": 13
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 178,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
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
            "position": 101,
            "movement": -7
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
            "position": 70,
            "movement": 7
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
            "country": "BJ",
            "name": "Benin",
            "position": 53,
            "movement": -1
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 94,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 94,
            "movement": -6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 96,
            "movement": 31
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 103,
            "movement": 14
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 106,
            "movement": 17
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 160,
            "movement": 12
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 164,
            "movement": -71
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 185,
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
            "position": 85,
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
            "position": 84,
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
            "position": 82,
            "movement": -55
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "REAL, Vol. 1 - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 22,
            "movement": 114
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 27,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 55,
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 80,
            "movement": -5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 92,
            "movement": 29
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 96,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 96,
            "movement": -17
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 104,
            "movement": -58
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 118,
            "movement": -7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 146,
            "movement": -41
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 164,
            "movement": -46
          }
        ]
      }
    ],
    "kind": "album"
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
            "position": 37,
            "movement": 26
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 41,
            "movement": 69
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 72,
            "movement": -15
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 118,
            "movement": -24
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 126,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 199,
            "movement": -12
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 200,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Asambe",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 92,
            "movement": -5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 98,
            "movement": -25
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 108,
            "movement": 88
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 161,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 166,
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
            "position": 108,
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
            "position": 98,
            "movement": null,
            "status": "re"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
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
            "position": 89,
            "movement": -31
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 105,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 146,
            "movement": 7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
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
            "position": 159,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ototo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 129,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 157,
            "movement": -43
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 169,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 189,
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
            "position": 48,
            "movement": 16
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
            "country": "BJ",
            "name": "Benin",
            "position": 68,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 101,
            "movement": 83
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 119,
            "movement": -12
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 175,
            "movement": -47
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
            "position": 177,
            "movement": -33
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "99",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 113,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 173,
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
            "position": 41,
            "movement": -32
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 70,
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
            "position": 69,
            "movement": 11
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3e2739afe89b70d123d223f12e6f5d92/500x500-000000-80-0-0.jpg"
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
            "position": 45,
            "movement": 4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 125,
            "movement": -7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 144,
            "movement": -12
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 158,
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
            "position": 121,
            "movement": 16
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/af30a7aeb43913343236936ca5237084/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Nzaza",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 159,
            "movement": -35
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 200,
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
            "position": 46,
            "movement": 6
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
            "country": "NG",
            "name": "Nigeria",
            "position": 78,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 86,
            "movement": -10
          },
          {
            "country": "NE",
            "name": "Niger",
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
            "position": 78,
            "movement": -9
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
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
            "position": 52,
            "movement": -3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 66,
            "movement": 31
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
            "position": 77,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Dupe",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 102,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 121,
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
            "position": 140,
            "movement": -16
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Joha",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 42,
            "movement": 15
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 77,
            "movement": 121
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
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
            "position": 102,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 154,
            "movement": -29
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
            "position": 123,
            "movement": 7
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
            "position": 112,
            "movement": 47
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0dd0b79a37a28f75ab7f61b38d0dccda/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Omo Ope",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 187,
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
            "position": 166,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/636b24b8b52148a55ce3bf9c263ba19e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ololade Asake - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SR",
            "name": "Suriname",
            "position": 82,
            "movement": -55
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 176,
            "movement": -9
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/692c4f384976719fee0db6f5309d7c8d/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Happiness",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 1,
        "entries": [
          {
            "country": "BW",
            "name": "Botswana",
            "position": 1,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1aca731992c29efe91ca4639235a69c8/500x500-000000-80-0-0.jpg"
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
            "position": 86,
            "movement": -24
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
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
            "position": 117,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
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
            "position": 88,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
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
            "position": 137,
            "movement": 10
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Terminator",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 141,
            "movement": 7
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Worldwide",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 109,
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
    "title": "2:30",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
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
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "What's Up My G",
    "platforms": [
      {
        "platform": "Spotify",
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
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bad Boy - Live in London",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 178,
            "movement": 22
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Mood",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 188,
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
    "title": "Mogbe",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 154,
            "movement": -47
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Fuji Vibe",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 155,
            "movement": -19
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Happiness ​(f​eat​. Asake, Gunna​)",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 135,
            "movement": -22
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/77fc9f281aabc0cfb5c17649afe08c8c/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Psycho",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 157,
            "movement": -7
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
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
            "position": 162,
            "movement": 29
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Gold",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 101,
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
    "title": "Bad Boy",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 193,
            "movement": -9
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Peace Be Unto You",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 197,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f70fc3aeb97c91d07c50ba62d8fa0f57/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bad Girl",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 56,
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
            "position": 2,
            "movement": 2
          }
        ]
      }
    ],
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
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
  