//FOR PROJECT.HTML

//TODO
//input field into api fetch address with parameters
//api address builder
//button listener
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
const startDate = $('#start-date');
const endDate = $('#end-date');
const countryDropdown = $('#country-names');

countryArrObj.unshift(countryArrObj.splice(103, 1)[0])
for (let i = 0; i < countryArrObj.length; i++) {
  countryDropdown.append(`<option value="` + countryArrObj[i].countryCode + `">` + countryArrObj[i].name + `</option>)`);
  console.log("Added " + countryArrObj[i].name);
}

const generateBtn = $('#generate-btn');
const inputGrp = $('input-group')
const timeline = $('#timeline');
const changingContainer = $('#change-container');

function createDropDown() {
  for (let i = 0; i < countryArrObj.length; i++) {
    countryDropdown.append(`<option value="` + countryArrObj[i].countryCode + `">` + countryArrObj[i].name + `</option>)`);
    console.log("Added " + countryArrObj[i].name);
  }
};


function getApi() {
  var dropDownVal = countryDropdown.val();

  var requestUrl = 'https://date.nager.at/api/v3/publicholidays/2024/' + dropDownVal

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
      $('.dropdown').hide();
      generateBtn.hide();
      for (var i = 0; i < data.length; i++) {
        var createTableRow = document.createElement('tr');
        var tableData = document.createElement('td');
        var holidayHeader = document.createElement('p');
        var holidayDate = document.createElement('p');

        holidayHeader.textContent = data[i].name;
        holidayDate.textContent = data[i].date;

        tableData.appendChild(holidayHeader);
        tableData.appendChild(holidayDate);
        createTableRow.appendChild(tableData);
        changingContainer.append(createTableRow);
     }
     })
    }


generateBtn.on('click', function () {
  getApi();
});

// function showResults(data) {
//   inputGrp.hide();
//   timeline.hide();

// }


// function to retrieve saved data

function retrieveSavedData() {
  var retrieveSearchInput = $.localStorage.getItem('searchInput');
  if (retrieveSearchInput) {
    console.log('retrieved search input'), retrieveSearchInput
  }
}

//only used to extract country names from array
// function getCountryNames() {
//   let countryNames = []
//   for (var i = 0; i < countryArrObj.length; i++) {

//       countryNames.push(countryArrObj[i].name)   
//   }
//   $('body p').text(countryNames)
//   console.log(countryNames)
// }
// getCountryNames();

//Date selector
var startDate2 = document.querySelector("#start");
var endDate2 = document.querySelector("#end");
var myBtn = document.querySelector("#myBtn");
var pageCalendar = document.querySelector('#showCalendar');
pageCalendar.style.display = 'none';


myBtn.addEventListener('click', function () {
  var Difference_In_Time = new Date(endDate2.value).getTime() - new Date(startDate2.value).getTime();
  var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
  console.log(Difference_In_Days)
  console.log(startDate2.value)
  console.log(endDate2.value)
  var f = new Date(`${startDate2.value} 00:00`)
  console.log(f)
  console.log(f.getDate() + 1)
  console.log(f.getMonth())
  console.log(f.getYear())
  pageCalendar.style.display = 'block';


  //Calendar
  today = new Date();
  currentMonth = today.getMonth();
  currentYear = today.getFullYear();
  selectYear = document.getElementById("year");
  selectMonth = document.getElementById("month");

  months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  monthAndYear = document.getElementById("monthAndYear");
  showCalendar(currentMonth, currentYear);


  function next() {
    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    showCalendar(currentMonth, currentYear);
  }

  function previous() {
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    showCalendar(currentMonth, currentYear);
  }

  function jump() {
    currentYear = parseInt(selectYear.value);
    currentMonth = parseInt(selectMonth.value);
    showCalendar(currentMonth, currentYear);
  }

  function showCalendar(month, year) {

    let firstDay = (new Date(year, month)).getDay();

    tbl = document.getElementById("calendar-body"); // body of the calendar

    // clearing all previous cells
    tbl.innerHTML = "";

    // filing data about month and in the page via DOM.
    monthAndYear.innerHTML = months[month] + " " + year;
    selectYear.value = year;
    selectMonth.value = month;

    // creating all cells
    let date = 1;
    for (let i = 0; i < 6; i++) {
      // creates a table row
      let row = document.createElement("tr");

      //creating individual cells, filing them up with data.
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDay) {
          cell = document.createElement("td");
          cellText = document.createTextNode("");
          cell.appendChild(cellText);
          row.appendChild(cell);
        }
        else if (date > daysInMonth(month, year)) {
          break;
        }

        else {
          cell = document.createElement("td");
          cellText = document.createTextNode(date);
          // color today's date
          if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
            cell.classList.add("bg-info");
          } 

          //colors start date
          var s = new Date(`${startDate2.value} 00:00`)
          var f = new Date(`${endDate2.value} 00:00`)
          if (date === f.getDate() && year === f.getFullYear() && month === f.getMonth()|| date === s.getDate() && year === s.getFullYear() && month === s.getMonth()) {
            cell.classList.add("bg-info");
          }
          if (s.getDate() <= date <= f.getDate() && s.getFullYear() <= year <= f.getFullYear() && s.getMonth() <= month <= f.getMonth()) {
            cell.classList.add("bg-info");
          }
          cell.appendChild(cellText);
          row.appendChild(cell);
          date++;
        }


      }

      tbl.appendChild(row); // appending each row into calendar body.
    }

  }


  // check how many days in a month code from https://dzone.com/articles/determining-number-days-month
  function daysInMonth(iMonth, iYear) {
    return 32 - new Date(iYear, iMonth, 32).getDate();
  }
})

