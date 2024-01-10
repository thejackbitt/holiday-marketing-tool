const today = dayjs()
var tableCard = $('#holidayCard')





function getApi() {
   var requestUrl = 'https://date.nager.at/api/v3/NextPublicHolidaysWorldwide';
   // requestUrl = requestUrl + today.format('YYYY') + '/US';
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
getApi()