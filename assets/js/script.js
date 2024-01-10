const today = dayjs()
var tableCard = $('#holidayCard')
console.log(tableCard)





function getApi() {
    var requestUrl = 'https://date.nager.at/api/v3/NextPublicHolidaysWorldwide';
    // requestUrl = requestUrl + today.format('YYYY') + '/US';
    fetch(requestUrl)
       .then(function (response){
          return response.json();
       })
       .then(function (data){
        console.log(data);
        console.log(data[0].name);

        var createTableRow = document.createElement('tr');
        var tableData = document.createElement('td');
        var holidayHeader = document.createElement('h2');

        holidayHeader.textContent = data[0].name; 

        tableData.appendChild(holidayHeader);
        createTableRow.appendChild(tableData);
        tableCard.append(createTableRow);

        console.log(tableCard);
       })
 }
 getApi()