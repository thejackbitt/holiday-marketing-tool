//FOR PROJECT.HTML

//TODO
//

// const btn1 = $('#btn1');
// const input1 = $('input1');
// git config pull.rebase true

// btn1.on('click' function() {

// });

// function handleSearchFormSubmit(event) {
//   event.preventDefault();

//   var searchInputVal = document.querySelector('#search-input').value;
//   var formatInputVal = document.querySelector('#format-input').value;

//   if (!searchInputVal) {
//     console.error('You need a search input value!');
//     return;
//   }

//   // Build the url for sending the user to the second web page
//   var queryString = './search-results.html?q=' + searchInputVal + '&format=' + formatInputVal;

//   // send user to another page
//   console.log(queryString)
//   location.assign(queryString);

//   console.log("ok")
// }

// searchFormEl.addEventListener('submit', handleSearchFormSubmit);
// ;


var countryString ='Andorra AD Albania AL Argentina AR Austria AT Australia AU ÅlandIslands AX BosniaandHerzegovin BA Barbados BB Belgium BE Bulgaria BG Benin BJ Bolivia BO Brazil BR Bahamas BS Botswana BW Belarus BY Belize BZ Canada CA Switzerland CH Chile CL China CN Colombia CO CostaRica CR Cuba CU Cyprus CY Czechia CZ Germany D EDenmark DK DominicanRepublic DO Ecuador EC Estonia EE Egypt EG Spain ES Finland FI FaroeIslands FO France FR Gabon GA UnitedKingdom GB Grenada GD Guernse GG Gibraltar GI Greenland GL Gambia GM Greece GR Guatemala GT Guyana GY Honduras HN Croatia HR Haiti HT Hungary HU Indonesia ID Ireland IE IsleofMan IM Iceland IS Italy IT Jersey JE Jamaica JM Japan JP SouthKorea KR Liechtenstein LI Lesotho LS Lithuania LT Luxembourg LU Latvia LV Morocco M Monaco MC Moldova MD Montenegro ME Madagascar MG NorthMacedonia MK Mongolia MN Montserrat MS Malta MT Mexico MX Mozambique MZ Namibia NA Niger NE Nigeria NG Nicaragua NI Netherlands NL Norway NO NewZealand NZ Panama PA Peru PE PapuaNewGuinea PG Poland PL PuertoRico PR Portugal PT Paragua PY Romania RO Serbia RS Russia RU Sweden SE Singapore SG Slovenia SI SvalbardandJanMayen SJ Slovakia SK SanMarino SM Suriname SR ElSalvador SV Tunisia TN Turkey TR Ukraine UA UnitedStates US Uruguay UY VaticanCity VA Venezuela VE Vietnam VN SouthAfrica ZA Zimbabwe ZW'
var countryArr = countryString.split(' ');
console.log(countryArr);
$('body p').text(`${countryArr}`)

var countryArrFull = [Andorra,AD,Albania,AL,Argentina,AR,Austria,AT,Australia,AU,ÅlandIslands,AX,BosniaandHerzegovin,BA,Barbados,BB,Belgium,BE,Bulgaria,BG,Benin,BJ,Bolivia,BO,Brazil,BR,Bahamas,BS,Botswana,BW,Belarus,BY,Belize,BZ,Canada,CA,Switzerland,CH,Chile,CL,China,CN,Colombia,CO,CostaRica,CR,Cuba,CU,Cyprus,CY,Czechia,CZ,Germany,D,EDenmark,DK,DominicanRepublic,DO,Ecuador,EC,Estonia,EE,Egypt,EG,Spain,ES,Finland,FI,FaroeIslands,FO,France,FR,Gabon,GA,UnitedKingdom,GB,Grenada,GD,Guernse,GG,Gibraltar,GI,Greenland,GL,Gambia,GM,Greece,GR,Guatemala,GT,Guyana,GY,Honduras,HN,Croatia,HR,Haiti,HT,Hungary,HU,Indonesia,ID,Ireland,IE,IsleofMan,IM,Iceland,IS,Italy,IT,Jersey,JE,Jamaica,JM,Japan,JP,SouthKorea,KR,Liechtenstein,LI,Lesotho,LS,Lithuania,LT,Luxembourg,LU,Latvia,LV,Morocco,M,Monaco,MC,Moldova,MD,Montenegro,ME,Madagascar,MG,NorthMacedonia,MK,Mongolia,MN,Montserrat,MS,Malta,MT,Mexico,MX,Mozambique,MZ,Namibia,NA,Niger,NE,Nigeria,NG,Nicaragua,NI,Netherlands,NL,Norway,NO,NewZealand,NZ,Panama,PA,Peru,PE,PapuaNewGuinea,PG,Poland,PL,PuertoRico,PR,Portugal,PT,Paragua,PY,Romania,RO,Serbia,RS,Russia,RU,Sweden,SE,Singapore,SG,Slovenia,SI,SvalbardandJanMayen,SJ,Slovakia,SK,SanMarino,SM,Suriname,SR,ElSalvador,SV,Tunisia,TN,Turkey,TR,Ukraine,UA,UnitedStates,US,Uruguay,UY,VaticanCity,VA,Venezuela,VE,Vietnam,VN,SouthAfrica,ZA,Zimbabwe,ZW]


function getCountryNames() {
  const evenNumbers = []
  for (var i = 0; i > countryArrFull.length; i++) {
    if (countryArrFull[i] % 2 === 0) {
      evenNumbers.push(countryArrFull[i])
    }
  }
  $('body p').text(evenNumbers)
}

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
]