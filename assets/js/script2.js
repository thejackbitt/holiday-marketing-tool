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
var startDate = document.querySelector("#start");
var endDate = document.getElementById("#end");


let field = document.querySelector('#date');

// Handle date changes
date.addEventListener('input', function () {

  // Get the date
  let date = new Date(field.value);
  console.log(date);
  
});

