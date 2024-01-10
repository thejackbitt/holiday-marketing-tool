//FOR PROJECT.HTML

//TODO
//

const btn1 = $('#btn1');
const input1 = $('input1');
git config pull.rebase true

btn1.on('click' function() {

});

function handleSearchFormSubmit(event) {
  event.preventDefault();

  var searchInputVal = document.querySelector('#search-input').value;
  var formatInputVal = document.querySelector('#format-input').value;

  if (!searchInputVal) {
    console.error('You need a search input value!');
    return;
  }

  // Build the url for sending the user to the second web page
  var queryString = './search-results.html?q=' + searchInputVal + '&format=' + formatInputVal;

  // send user to another page
  console.log(queryString)
  location.assign(queryString);

  console.log("ok")
}

searchFormEl.addEventListener('submit', handleSearchFormSubmit);
;



Andorra	AD
Albania	AL
Argentina	AR
Austria	AT
Australia	AU
Åland Islands	AX
Bosnia and Herzegovina	BA
Barbados	BB
Belgium	BE
Bulgaria	BG
Benin	BJ
Bolivia	BO
Brazil	BR
Bahamas	BS
Botswana	BW
Belarus	BY
Belize	BZ
Canada	CA
Switzerland	CH
Chile	CL
China	CN
Colombia	CO
Costa Rica	CR
Cuba	CU
Cyprus	CY
Czechia	CZ
Germany	DE
Denmark	DK
Dominican Republic	DO
Ecuador	EC
Estonia	EE
Egypt	EG
Spain	ES
Finland	FI
Faroe Islands	FO
France	FR
Gabon	GA
United Kingdom	GB
Grenada	GD
Guernsey	GG
Gibraltar	GI
Greenland	GL
Gambia	GM
Greece	GR
Guatemala	GT
Guyana	GY
Honduras	HN
Croatia	HR
Haiti	HT
Hungary	HU
Indonesia	ID
Ireland	IE
Isle of Man	IM
Iceland	IS
Italy	IT
Jersey	JE
Jamaica	JM
Japan	JP
South Korea	KR
Liechtenstein	LI
Lesotho	LS
Lithuania	LT
Luxembourg	LU
Latvia	LV
Morocco	MA
Monaco	MC
Moldova	MD
Montenegro	ME
Madagascar	MG
North Macedonia	MK
Mongolia	MN
Montserrat	MS
Malta	MT
Mexico	MX
Mozambique	MZ
Namibia	NA
Niger	NE
Nigeria	NG
Nicaragua	NI
Netherlands	NL
Norway	NO
New Zealand	NZ
Panama	PA
Peru	PE
Papua New Guinea	PG
Poland	PL
Puerto Rico	PR
Portugal	PT
Paraguay	PY
Romania	RO
Serbia	RS
Russia	RU
Sweden	SE
Singapore	SG
Slovenia	SI
Svalbard and Jan Mayen	SJ
Slovakia	SK
San Marino	SM
Suriname	SR
El Salvador	SV
Tunisia	TN
Turkey	TR
Ukraine	UA
United States	US
Uruguay	UY
Vatican City	VA
Venezuela	VE
Vietnam	VN
South Africa	ZA
Zimbabwe	ZW