const today = dayjs()





function getApi() {
    var requestUrl = 'https://date.nager.at/api/v3/NextPublicHolidaysWorldwide';
    // requestUrl = requestUrl + today.format('YYYY') + '/US';
    fetch(requestUrl)
       .then(function (response){
          return response.json();
       })
       .then(function (data){
        console.log(data)
        const nextHoliday = data[0]
        console.log(nextHoliday)
       })
 }
 getApi()