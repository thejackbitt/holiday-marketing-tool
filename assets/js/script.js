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
var tableCard = $('#holidayCard')


currentDateDisp.text(now.format('MMMM D, YYYY'));

newProject.on('click', function(){
    location.assign('./project.html')
});

learnMore.on('click', function() {
    var holidayName = $('#holiday-OTD');
    var urlBuild = 'en.wikipedia.org/wiki/' + holidayName;
    window.open(urlBuild, '_blank');
})

function getApi() {
   var requestUrl = 'https://date.nager.at/api/v3/NextPublicHolidaysWorldwide';
   // requestUrl = requestUrl + now.format('YYYY') + '/US';
   fetch(requestUrl)
      .then(function (response) {
         return response.json();
      })
      .then(function (data) {
         console.log(data)
         for (var i = 0; i < data.length; i++) {
            var createTableRow = document.createElement('tr');
            var tableData = document.createElement('td');
            var holidayHeader = document.createElement('h2');
            var holidayOrigin = document.createElement('h3');

            holidayHeader.textContent = data[i].name;
            holidayOrigin.textContent = data[i].countryCode;

            tableData.appendChild(holidayHeader);
            tableData.appendChild(holidayOrigin);
            createTableRow.appendChild(tableData);
            tableCard.append(createTableRow);
            if (i >= 4) return
         }
      })
}
getApi();