const countryArrObj = [
    {
      "countryCode": "AD",
      "name": "Andorra"
    },
    {
      "countryCode": "AL",
      "name": "Albania"
    },
    {
      "countryCode": "AR",
      "name": "Argentina"
    },
    {
      "countryCode": "AT",
      "name": "Austria"
    },
    {
      "countryCode": "AU",
      "name": "Australia"
    },
    {
      "countryCode": "AX",
      "name": "Åland Islands"
    },
    {
      "countryCode": "BA",
      "name": "Bosnia and Herzegovina"
    },
    {
      "countryCode": "BB",
      "name": "Barbados"
    },
    {
      "countryCode": "BE",
      "name": "Belgium"
    },
    {
      "countryCode": "BG",
      "name": "Bulgaria"
    },
    {
      "countryCode": "BJ",
      "name": "Benin"
    },
    {
      "countryCode": "BO",
      "name": "Bolivia"
    },
    {
      "countryCode": "BR",
      "name": "Brazil"
    },
    {
      "countryCode": "BS",
      "name": "Bahamas"
    },
    {
      "countryCode": "BW",
      "name": "Botswana"
    },
    {
      "countryCode": "BY",
      "name": "Belarus"
    },
    {
      "countryCode": "BZ",
      "name": "Belize"
    },
    {
      "countryCode": "CA",
      "name": "Canada"
    },
    {
      "countryCode": "CH",
      "name": "Switzerland"
    },
    {
      "countryCode": "CL",
      "name": "Chile"
    },
    {
      "countryCode": "CN",
      "name": "China"
    },
    {
      "countryCode": "CO",
      "name": "Colombia"
    },
    {
      "countryCode": "CR",
      "name": "Costa Rica"
    },
    {
      "countryCode": "CU",
      "name": "Cuba"
    },
    {
      "countryCode": "CY",
      "name": "Cyprus"
    },
    {
      "countryCode": "CZ",
      "name": "Czechia"
    },
    {
      "countryCode": "DE",
      "name": "Germany"
    },
    {
      "countryCode": "DK",
      "name": "Denmark"
    },
    {
      "countryCode": "DO",
      "name": "Dominican Republic"
    },
    {
      "countryCode": "EC",
      "name": "Ecuador"
    },
    {
      "countryCode": "EE",
      "name": "Estonia"
    },
    {
      "countryCode": "EG",
      "name": "Egypt"
    },
    {
      "countryCode": "ES",
      "name": "Spain"
    },
    {
      "countryCode": "FI",
      "name": "Finland"
    },
    {
      "countryCode": "FO",
      "name": "Faroe Islands"
    },
    {
      "countryCode": "FR",
      "name": "France"
    },
    {
      "countryCode": "GA",
      "name": "Gabon"
    },
    {
      "countryCode": "GB",
      "name": "United Kingdom"
    },
    {
      "countryCode": "GD",
      "name": "Grenada"
    },
    {
      "countryCode": "GG",
      "name": "Guernsey"
    },
    {
      "countryCode": "GI",
      "name": "Gibraltar"
    },
    {
      "countryCode": "GL",
      "name": "Greenland"
    },
    {
      "countryCode": "GM",
      "name": "Gambia"
    },
    {
      "countryCode": "GR",
      "name": "Greece"
    },
    {
      "countryCode": "GT",
      "name": "Guatemala"
    },
    {
      "countryCode": "GY",
      "name": "Guyana"
    },
    {
      "countryCode": "HN",
      "name": "Honduras"
    },
    {
      "countryCode": "HR",
      "name": "Croatia"
    },
    {
      "countryCode": "HT",
      "name": "Haiti"
    },
    {
      "countryCode": "HU",
      "name": "Hungary"
    },
    {
      "countryCode": "ID",
      "name": "Indonesia"
    },
    {
      "countryCode": "IE",
      "name": "Ireland"
    },
    {
      "countryCode": "IM",
      "name": "Isle of Man"
    },
    {
      "countryCode": "IS",
      "name": "Iceland"
    },
    {
      "countryCode": "IT",
      "name": "Italy"
    },
    {
      "countryCode": "JE",
      "name": "Jersey"
    },
    {
      "countryCode": "JM",
      "name": "Jamaica"
    },
    {
      "countryCode": "JP",
      "name": "Japan"
    },
    {
      "countryCode": "KR",
      "name": "South Korea"
    },
    {
      "countryCode": "LI",
      "name": "Liechtenstein"
    },
    {
      "countryCode": "LS",
      "name": "Lesotho"
    },
    {
      "countryCode": "LT",
      "name": "Lithuania"
    },
    {
      "countryCode": "LU",
      "name": "Luxembourg"
    },
    {
      "countryCode": "LV",
      "name": "Latvia"
    },
    {
      "countryCode": "MA",
      "name": "Morocco"
    },
    {
      "countryCode": "MC",
      "name": "Monaco"
    },
    {
      "countryCode": "MD",
      "name": "Moldova"
    },
    {
      "countryCode": "ME",
      "name": "Montenegro"
    },
    {
      "countryCode": "MG",
      "name": "Madagascar"
    },
    {
      "countryCode": "MK",
      "name": "North Macedonia"
    },
    {
      "countryCode": "MN",
      "name": "Mongolia"
    },
    {
      "countryCode": "MS",
      "name": "Montserrat"
    },
    {
      "countryCode": "MT",
      "name": "Malta"
    },
    {
      "countryCode": "MX",
      "name": "Mexico"
    },
    {
      "countryCode": "MZ",
      "name": "Mozambique"
    },
    {
      "countryCode": "NA",
      "name": "Namibia"
    },
    {
      "countryCode": "NE",
      "name": "Niger"
    },
    {
      "countryCode": "NG",
      "name": "Nigeria"
    },
    {
      "countryCode": "NI",
      "name": "Nicaragua"
    },
    {
      "countryCode": "NL",
      "name": "Netherlands"
    },
    {
      "countryCode": "NO",
      "name": "Norway"
    },
    {
      "countryCode": "NZ",
      "name": "New Zealand"
    },
    {
      "countryCode": "PA",
      "name": "Panama"
    },
    {
      "countryCode": "PE",
      "name": "Peru"
    },
    {
      "countryCode": "PG",
      "name": "Papua New Guinea"
    },
    {
      "countryCode": "PL",
      "name": "Poland"
    },
    {
      "countryCode": "PR",
      "name": "Puerto Rico"
    },
    {
      "countryCode": "PT",
      "name": "Portugal"
    },
    {
      "countryCode": "PY",
      "name": "Paraguay"
    },
    {
      "countryCode": "RO",
      "name": "Romania"
    },
    {
      "countryCode": "RS",
      "name": "Serbia"
    },
    {
      "countryCode": "RU",
      "name": "Russia"
    },
    {
      "countryCode": "SE",
      "name": "Sweden"
    },
    {
      "countryCode": "SG",
      "name": "Singapore"
    },
    {
      "countryCode": "SI",
      "name": "Slovenia"
    },
    {
      "countryCode": "SJ",
      "name": "Svalbard and Jan Mayen"
    },
    {
      "countryCode": "SK",
      "name": "Slovakia"
    },
    {
      "countryCode": "SM",
      "name": "San Marino"
    },
    {
      "countryCode": "SR",
      "name": "Suriname"
    },
    {
      "countryCode": "SV",
      "name": "El Salvador"
    },
    {
      "countryCode": "TN",
      "name": "Tunisia"
    },
    {
      "countryCode": "TR",
      "name": "Turkey"
    },
    {
      "countryCode": "UA",
      "name": "Ukraine"
    },
    {
      "countryCode": "US",
      "name": "United States"
    },
    {
      "countryCode": "UY",
      "name": "Uruguay"
    },
    {
      "countryCode": "VA",
      "name": "Vatican City"
    },
    {
      "countryCode": "VE",
      "name": "Venezuela"
    },
    {
      "countryCode": "VN",
      "name": "Vietnam"
    },
    {
      "countryCode": "ZA",
      "name": "South Africa"
    },
    {
      "countryCode": "ZW",
      "name": "Zimbabwe"
    }
  ];