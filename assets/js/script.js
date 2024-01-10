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


currentDateDisp.now.format('MMMM D, YYYY');

newProject.on('click', function(){
    location.assign('./project.html')
});

learnMore.on('click', function() {
    var holidayName = $('#holiday-OTD');
    var urlBuild = 'en.wikipedia.org/wiki/' + holidayName;
    window.open(urlBuild, '_blank');
})

