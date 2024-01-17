//FOR PROJECT.HTML

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

const dropMenu = $('#drop-menu');
const countryDropdown = $('#country-names');
const dateSelector = $('#date-selector')
var start = document.querySelector("#start");
var end = document.querySelector("#end");
let data;
const today = dayjs();
const selectYear = document.getElementById("year");
const selectMonth = document.getElementById("month");
const monthAndYear = document.getElementById("monthAndYear");
const generateBtn = $('#generate-btn');
const mainForm = $('.formComponent');
const inputGrp = $('input-group')
const timeline = $('#timeline');
const changingContainer = $('#change-container');
const regenerateBtn = $('#regenerateBtn');
const saveBtn = $('#saveBtn');
const changePar = $('#change-paragraph');
const ChangePar2 = $('#change-paragraph2')
const calendarCard = $('#calendar')
const holidayText = $('.holiday-text')
const leftColumnH3 = $('#left-column-text h3');
const goHome = $('#go-home');
let startVal;
let startDate;
let startMonth;
let startYear;
let endVal;
let endDate;
let endMonth;
let endYear;
let currentMonth;
let currentYear;
let startDateUnix;
let endDateUnix;
var Difference_In_Days;
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var pageCalendar = document.querySelector('#showCalendar');
pageCalendar.style.display = 'none';
const currentUrl = window.location.href;
const url = new URL(currentUrl);
const queryParams = new URLSearchParams(url.search);

countryArrObj.unshift(countryArrObj.splice(103, 1)[0])
for (let i = 0; i < countryArrObj.length; i++) {
  countryDropdown.append(`<option value="` + countryArrObj[i].countryCode + `">` + countryArrObj[i].name + `</option>)`);
};

function countryLookup(input) {
  return countryArrObj.find(country => country.name.toUpperCase() === input.toUpperCase())
};

if (queryParams.get('saveid')) {
  const saveID = queryParams.get('saveid');
  const saveFile = localStorage.getItem('campaignDataArray');
  const campaignData = JSON.parse(saveFile);
  const sCountry = campaignData[saveID][2]; 
  countryDropdown.val(countryLookup(sCountry).countryCode);
  const sStart = campaignData[saveID][0];
  const sEnd = campaignData[saveID][1];
  startVal = sStart;
  startDate = dayjs(startVal);
  startMonth = parseInt(startDate.format('MM')) - 1;
  startYear = parseInt(startDate.format('YYYY'));
  endVal = sEnd;
  endDate = dayjs(endVal);
  startDateUnix = startDate.unix();
  endDateUnix = endDate.unix();
  endMonth = parseInt(endDate.format('MM')) - 1;
  endYear = parseInt(endDate.format('YYYY'));
  var Difference_In_Time = endDate - startDate;
  Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
  dateSelector.hide();
  $('.dropdown').hide();
  generateBtn.hide();
  mainForm.hide();
  $('#showCalendar').show();
  dateSelector.show();
  leftColumnH3.text('How it works:');
  changePar.text(`Your campaign targets ${sCountry} and will run for ${Difference_In_Days} days.`);
  ChangePar2.text(`Find a holiday on the calendar that you would like to know more about. Then click on it to learn more.`)
  pageCalendar.style.display = 'block';
  showCalendar(startMonth, startYear);
};

function createDropDown() {
  for (let i = 0; i < countryArrObj.length; i++) {
    countryDropdown.append(`<option value="` + countryArrObj[i].countryCode + `">` + countryArrObj[i].name + `</option>)`);
  }
};

async function getApi() {
  var dropDownVal = countryDropdown.val();
  var requestUrl = 'https://date.nager.at/api/v3/publicholidays/2024/' + dropDownVal
  const response = await fetch(requestUrl);
  data = await response.json();
};


//Calendar Build Function

async function showCalendar(startMonth, startYear) {

  let firstDay = dayjs(`${startYear}-${startMonth + 1}-01`).day();

  let tbl = document.getElementById("calendar-body"); // body of the calendar

  // clearing all previous cells
  tbl.innerHTML = "";

  // filing data about month and in the page via DOM.
  monthAndYear.innerHTML = months[startMonth] + " " + startYear;
  selectYear.value = startYear;
  selectMonth.value = startMonth;

  // creating all cells
  let date = 1;
  let cellDateStart = startDate.format('DD');
  let cellDateStartMonth = startDate.format('MMM');
  let cellDateEnd = endDate.format("DD");
  let dateUnix;
  await getApi();
  for (let i = 0; i < 6; i++) {

    // creates a table row
    let row = document.createElement("tr");

    //creating individual cells, filling them up with data.
    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < firstDay) {
        let cell = document.createElement("td");
        let cellText = document.createTextNode("");
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
      else if (date > daysInMonth(startMonth, startYear)) {
        break;
      }
      else {
        //builds calendar using td appends to each row(week)
        cell = document.createElement("td");
        cellText = document.createTextNode(date);
        dateUnix = dayjs(`${startYear}-${startMonth + 1}-${date}`).unix()
        startDateUnix = startDate.unix();
        endDateUnix = endDate.unix();
        if (dateUnix >= startDateUnix && dateUnix <= endDateUnix) {
          cell.classList.add('bg-warning');
        }
        cell.appendChild(cellText);
        //adds holidays to calendar, removes duplicates
        for (var k = 0; k < data.length; k++) {
          let dataDate = dayjs(data[k].date).unix();
          if (dataDate === dateUnix) {
            let cellHolidayText = document.createElement('p');
            cellHolidayText.textContent = data[k].name;
            cellHolidayText.classList.add('holiday-text');
            if (k !== 0 && data[k].name !== data[k - 1].name) {
              cell.appendChild(cellHolidayText);
            } else if (k === 0) {
              cell.appendChild(cellHolidayText);
            }
          }
        }
        //colors start date
        var s = startDate
        var f = endDate
        if (date === f.date() && startYear === f.format('YYYY') && startMonth === f.format('MMM') || date === s.date() && startYear === s.format('YYYY') && startMonth === s.format('MMM')) {
          cell.classList.add("bg-info");
        }
        row.appendChild(cell);
        date++;
      }
    }
    tbl.appendChild(row); // appending each row into calendar body.
  }
}

//3 functions below manage navigating the calendar
function next() {
  startYear = (startMonth === 11) ? startYear + 1 : startYear;
  startMonth = (startMonth + 1) % 12;
  showCalendar(startMonth, startYear);
}

function previous() {
  startYear = (startMonth === 0) ? startYear - 1 : startYear;
  startMonth = (startMonth === 0) ? 11 : startMonth - 1;
  showCalendar(startMonth, startYear);
}
function jump() {
  startYear = parseInt(selectYear.value);
  startMonth = parseInt(selectMonth.value);
  showCalendar(startMonth, startYear);
}

//gives the last day in each month
function daysInMonth(iMonth, iYear) {
  const lastDayOfMonth = dayjs(`${iYear}-${iMonth + 1}-01`).endOf('month');
  return lastDayOfMonth.date();
};

//listens to generate button, sets variable values to be sent to next function
generateBtn.on('click', function () {
  startVal = start.value;
  startDate = dayjs(startVal);
  startMonth = parseInt(startDate.format('MM')) - 1;
  startYear = parseInt(startDate.format('YYYY'));
  endVal = end.value;
  endDate = dayjs(endVal);
  startDateUnix = startDate.unix();
  endDateUnix = endDate.unix();
  endMonth = parseInt(endDate.format('MM')) - 1;
  endYear = parseInt(endDate.format('YYYY'));
  var Difference_In_Time = endDate - startDate;
  Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
  dateSelector.hide();
  $('.dropdown').hide();
  generateBtn.hide();
  mainForm.hide();
  $('#showCalendar').show();
  dateSelector.show();
  leftColumnH3.text('How it works:');
  changePar.text(`Your campaign targets ${$('#country-names option:selected').text()} and will run for ${Difference_In_Days} days.`);
  ChangePar2.text(`Find a holiday on the calendar that you would like to know more about. Then click on it to learn more.`)
  pageCalendar.style.display = 'block';
  showCalendar(startMonth, startYear);
});

  // Added this function to retrieve saved data
function retrieveSavedData() {
    const savedCampaignData = localStorage.getItem('campaignData');
    const savedList = $('#filesList');
    if (savedCampaignData) {
      const campaignData = JSON.parse(savedCampaignData);
      start.value = campaignData.startVal;
      end.value = campaignData.endVal;
      console.log('Retrieved campaign data:', campaignData);
      const listItem = `<li>${campaignData.selectedCountry} - Start: ${campaignData.startVal}, End: ${campaignData.endVal}</li>`;
      savedList.append(listItem);
    }
  }

// Save button click event listener to save the current search
saveBtn.on('click', function () { 
  startVal = start.value;
  startDate = dayjs(startVal);
  startMonth = parseInt(startDate.format('MM')) - 1;
  startYear = parseInt(startDate.format('YYYY'));
  endVal = end.value;
  endDate = dayjs(endVal);
  startDateUnix = startDate.unix();
  endDateUnix = endDate.unix();
  endMonth = parseInt(endDate.format('MM')) - 1;
  endYear = parseInt(endDate.format('YYYY'));

    const lastDateViewed = dayjs().format(); 
  const campaignData = [startVal, endVal, $('#country-names option:selected').text(), lastDateViewed];

  const existingData = JSON.parse(localStorage.getItem('campaignDataArray')) || [];

  existingData.push(campaignData);

  localStorage.setItem('campaignDataArray', JSON.stringify(existingData));
  location.assign('./home.html');
});

//event listener for 'Regenerate Button', resets page so that another wearch can be queried
regenerateBtn.on('click', function () {
  dateSelector.show();
  $('.dropdown').show();
  generateBtn.show();
  mainForm.show();
  $('#showCalendar').hide();
  dateSelector.hide();
  changePar.text(`Use the options on the right to create a report.`)
  ChangePar2.text(`Select your target country from the dropdown menu. Then click on the calendar 
  icon in each date selector box to choose the start and end date. If there is a holiday for the selected country
within the date range it will show up.`)
});

//add click function to populated holiday text
calendarCard.on('click', '.holiday-text', function () {
  let holidayTextName = $(this).text();
  let holidayTextUnderscored = holidayTextName.replaceAll(' ', '_');
  let requestUrl = 'https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=' + holidayTextUnderscored + '&srlimit=1&format=json&origin=*'
  getWikiApi(requestUrl);
});

//add api call from Wikipedia for the holiday clicked on
async function getWikiApi(requestUrl) {
  const response = await fetch(requestUrl);
  const wikiData = await response.json();
  let resultsArray = wikiData.query.search;
  resultsOnPage(resultsArray);
};

//manages data pulled from the getWikiApi function
function resultsOnPage(myArray) {
  myArray.forEach(function (item) {
    let itemTitle = item.title;
    let itemSnippet = item.snippet;
    let itemUrl = encodeURI(`https://en.wikipedia.org/wiki/${item.title}`);
    leftColumnH3.text('Learn More');
    ChangePar2.html(`   
     <p class="resultSnippet">${itemSnippet}</p><a href="${itemUrl}"  target="_blank" rel="noopener">
     <p>Follow this link to learn even more.</p></a>
     `)
  })
};

//returns user to HomePage
goHome.on('click', function () {
  location.assign('./home.html');
});

