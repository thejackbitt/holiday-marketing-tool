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
const requestUrl = 'https://date.nager.at/api/v3/NextPublicHolidaysWorldwide';
const currentDateDisp = $('#current-date');
const newProject = $('#new-project');
const learnMore = $('#learn-more');
const tableCard = $('#holidayCard');
const slide = $(".carouselCard");
const almostFinalData = [''];
const finalData = [];
const countyNameArray = [];
const wikiDataArray = [];
var country;
let j = 0;
let h = 0;
let count = 0;

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
});

//this function is to create and populate the holiday of the day carousel on the home page
function getApi() {
   //nager api call

   fetch(requestUrl)
      .then(function (response) {
         return response.json();
      })
      .then(function (data) {
         for (var i = 0; i < data.length; i++) {

            const nagerData = data;
            if (nagerData.length > 5) (nagerData.length = 5);

            // locate the country name by country code in the country array
            country = countryArrObj.find(({ countryCode }) => countryCode === data[i].countryCode);
            countyNameArray.push(country);

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

            getWiki()

            // wikipedia api call
            async function getWiki() {
               const response = await fetch(`${url}?${params}`);
               const wikiData = await response.json();
               wikiDataArray.push(wikiData.query.search);
               console.log(wikiDataArray);
               almostFinalData[j] = { ...wikiDataArray[j], ...nagerData[j] };
               almostFinalData[j].country = countyNameArray[j].name;
               fin
               console.log(finalData);

               // this function takes the info from the wiki api call and puts the information into a display element
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
               var itemTitle = finalData[0][j].title;
               var itemSnippet = finalData[0][j].snippet;
               var itemUrl = encodeURI(`https://en.wikipedia.org/wiki/${finalData[j].title}`);

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
               holidayHeader.textContent = finalData[j].name;
               holidayOrigin.textContent = finalData[j].country;

               tableData.appendChild(holidayHeader);
               tableData.appendChild(holidayOrigin);
               tableData.appendChild(wikiInfo);

               createTableRow.appendChild(tableData);
               tableBody.appendChild(createTableRow);
               table.appendChild(tableBody);
               carouselItem.appendChild(table);
               tableCard.append(carouselItem);
               count++;
               j++;
            }
            //          .then(function (data) {
            //             let resultsArray = data.query.search;
            //             console.log('results array ' + j)
            //             console.log(resultsArray[j])
            //             finalData[j] = { ...resultsArray[j], ...nagerData[h] };
            //             finalData[j].country = countyNameArray[h].name;
            //             h++;
            //             return (finalData);
            //          })
            //          .then(function (item) {
            //             // this function takes the info from the wiki api call and puts the information into a display element
            //             // creating elements to display the information
            //             var carouselItem = document.createElement('div');
            //             var table = document.createElement('table');
            //             var tableBody = document.createElement('tbody');
            //             var createTableRow = document.createElement('tr');
            //             var tableData = document.createElement('td');
            //             var holidayHeader = document.createElement('h2');
            //             var holidayOrigin = document.createElement('h3');
            //             var wikiInfo = document.createElement('div');
            //             console.log(item[0])

            //             // text body and link made from the wiki api data
            //             var itemTitle = item[0].title;
            //             var itemSnippet = item[0].snippet;
            //             var itemUrl = encodeURI(`https://en.wikipedia.org/wiki/${item[0].title}`);

            //             wikiInfo.innerHTML = `<div class="resultItem">
            //                <h3 class="resultTitle">
            //                <a href="${itemUrl}" target="_blank" rel="noopener">${itemTitle}</a>
            //                </h3>
            //                <p class="resultSnippet"><a href="${itemUrl}"  target="_blank" rel="noopener">
            //                ${itemSnippet}</a></p>
            //                </div>`;

            //             // creating the carousel cards
            //             table.setAttribute('class', 'd-block w-100');
            //             if (count === 0) {
            //                carouselItem.setAttribute('class', 'carousel-item active');
            //             } else {
            //                carouselItem.setAttribute('class', 'carousel-item');
            //             };

            //             // putting the display items into the html
            //             holidayHeader.textContent = item[0].name;
            //             holidayOrigin.textContent = item[0].country;

            //             tableData.appendChild(holidayHeader);
            //             tableData.appendChild(holidayOrigin);
            //             tableData.appendChild(wikiInfo);

            //             createTableRow.appendChild(tableData);
            //             tableBody.appendChild(createTableRow);
            //             table.appendChild(tableBody);
            //             carouselItem.appendChild(table);
            //             tableCard.append(carouselItem);
            //             count++;
            //          })
            //          .catch(function (error) { console.log(error); });
            //    }

            //    if (i >= 4) return;
            // }
         }
      }
      )
}

// Added this function to retrieve saved data
function retrieveSavedData() {
   const filesList = $('#filesList');
   filesList.empty(); // Clear existing items before appending new ones

   for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith('campaignData')) {
         const savedCampaignData = JSON.parse(localStorage.getItem(key));

         // Display saved data in the filesList ul
         const listItem = `<li>
         <h3>${savedCampaignData.selectedCountry}</h3>
         <p>Start: ${savedCampaignData.startVal}, End: ${savedCampaignData.endVal}</p>
       </li>`;
         filesList.append(listItem);
      }
   }
}
function retrieveSavedData() {
   const savedCampaignDataArray = localStorage.getItem('campaignDataArray');
   const filesList = $('#filesList');

   if (savedCampaignDataArray) {
      const campaignDataArray = JSON.parse(savedCampaignDataArray);

      campaignDataArray.forEach(campaignData => {
         const listItem = `<li>
         <h3>${campaignData[2]}</h3>
         <p>Start: ${campaignData[0]}, End: ${campaignData[1]}, Last Date Viewed: ${campaignData[3]}</p>
       </li>`;
         filesList.append(listItem);
      });

      console.log('Retrieved campaign data array:', campaignDataArray);
   }
}
retrieveSavedData()
getApi();