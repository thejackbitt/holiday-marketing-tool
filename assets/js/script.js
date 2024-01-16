//TODO
//dayjs date in header--Done
//make script to send user to next page upon button click--Done??
//make random number generator
//learn more button at bottom send to wikipedia page
//save project data in local storage
//recall project data and display to page
//data will likely be saved as search parameters so this script will need an api call
//and saved data will be used to recall the data from fetch

const now = dayjs();
const currentDateDisp = $('#current-date');
const newProject = $('#new-project');
const learnMore = $('#learn-more');
const tableCard = $('#holidayCard');
const slide = $(".carouselCard");
const finalData = [''];
const countyNameArray = [];
var country;
let j = 0;
let h = 0;

// retrieving the data from local storage
const savedProjectData = JSON.parse(localStorage.getItem('projectData')) || {};

currentDateDisp.text(now.format('MMMM D, YYYY'));

newProject.on('click', function () {
   // saving new project data to the local storage
   savedProjectData.lastVisited = dayjs().format('MMMM D, YYYY');
   localStorage.setItem('projectData', JSON.stringify(savedProjectData));

   location.assign('./project.html');
});

learnMore.on('click', function () {
   var holidayName = $('#holiday-OTD');
   var urlBuild = 'en.wikipedia.org/wiki/' + holidayName;
   window.open(urlBuild, '_blank');
})

//this function is to create and populate the holiday of the day carousel on the home page
function getApi() {
   //nager api call
   var requestUrl = 'https://date.nager.at/api/v3/NextPublicHolidaysWorldwide';
   fetch(requestUrl)
      .then(function (response) {
         return response.json();
      })
      .then(function (data) {
         let count = 0;
         for (var i = 0; i < data.length; i++) {

            const nagerData = data;
            if (nagerData.length > 5) (nagerData.length = 5);

            // locate the country name by country code in the country array
            country = countryArrObj.find(({ countryCode }) => countryCode === data[i].countryCode);
            countyNameArray.push(country);
            console.log(countyNameArray);

            // defining items for the wikipedia api call
            var url = "https://en.wikipedia.org/w/api.php";

            var params = new URLSearchParams({
               action: "query",
               list: "search",
               srsearch: data[i].name + country.name,
               srlimit: 1,
               format: "json",
               origin: '*',
            });

            // wikipedia api call
            fetch(`${url}?${params}`)
               .then(function (response) { return response.json(); })
               .then(function (data) {
                  let resultsArray = data.query.search;
                  finalData[j] = { ...resultsArray[j], ...nagerData[h] };
                  finalData[j].country = countyNameArray[h].name;
                  h++;
                  return (finalData);
               })
               .then(function (item) {
                  // this function is supposed to take the info from the wiki api call and fill the information into a display element
                     // creating elements to display the information
                  var carouselItem = document.createElement('div');
                  var table = document.createElement('table');
                  var tableBody = document.createElement('tbody');
                  var createTableRow = document.createElement('tr');
                  var tableData = document.createElement('td');
                  var holidayHeader = document.createElement('h2');
                  var holidayOrigin = document.createElement('h3');
                  var wikiInfo = document.createElement('div');

                     // text body and link made from the wiki api data
                  var itemTitle = item[0].title;
                  var itemSnippet = item[0].snippet;
                  var itemUrl = encodeURI(`https://en.wikipedia.org/wiki/${item[0].title}`);

                  wikiInfo.innerHTML = `<div class="resultItem">
                           <h3 class="resultTitle">
                           <a href="${itemUrl}" target="_blank" rel="noopener">${itemTitle}</a>
                           </h3>
                           <p class="resultSnippet"><a href="${itemUrl}"  target="_blank" rel="noopener">
                           ${itemSnippet}</a></p>
                           </div>`;

                  // creating the carousel cards
                  table.setAttribute('class', 'd-block w-100');
                  if (count === 0) {
                     carouselItem.setAttribute('class', 'carousel-item active');
                  } else {
                     carouselItem.setAttribute('class', 'carousel-item');
                  };

                  // putting the display items into the html
                  holidayHeader.textContent = item[0].name;
                  holidayOrigin.textContent = item[0].country;

                  tableData.appendChild(holidayHeader);
                  tableData.appendChild(holidayOrigin);
                  tableData.appendChild(wikiInfo);

                  createTableRow.appendChild(tableData);
                  tableBody.appendChild(createTableRow);
                  table.appendChild(tableBody);
                  carouselItem.appendChild(table);
                  tableCard.append(carouselItem);
                  count++;
               })
               .catch(function (error) { console.log(error); });

            if (i >= 4) return;
         }
      })
}

function retrieveSavedData() {
   const savedCampaignDataArray = localStorage.getItem('campaignDataArray');
   const filesList = $('#filesList'); 
 
   if (savedCampaignDataArray) {
     const campaignDataArray = JSON.parse(savedCampaignDataArray);
 
     campaignDataArray.forEach((campaignData, index) => {
       const listItem = $(`<li class="list-group-item savedFile" data-id="${index}">
         <h3>${campaignData[2]}</h3>
         <p><i>Last Date Viewed: ${campaignData[3]}</i></p>
       </li>`);
       filesList.append(listItem);
     });
 
     console.log('Retrieved campaign data array:', campaignDataArray);
   }
}

retrieveSavedData();
getApi();

document.querySelectorAll('li.savedFile').forEach(item => {
   item.addEventListener('click', function() {
      let saveId = this.getAttribute('data-id');
      let url = `project.html?saveid=${encodeURIComponent(saveId)}`;
      window.location.href = url;
   });
});