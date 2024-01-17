# holiDATE

## Description

For this group project we developed a website that allows a user to see what holiday happen between 2 selected dates.  The idea is that a company can use the site to help them plan promotions around holidays.  Users can select what country they want the holidays to be specific to and learn more about the holidays by clicking on the holiday name in the calendar.  After a desired date range is found the user can then save the report and it gets listed on the homepage along with which country the holidays were selected from.  Also on the front page is a carousel that lists and describes upcoming holidays from around the world.


## Installation

To run the program you have to open home.html in a web browser.

## Usage

When the home page is launched the user will find a 'New Project' button and a carousel with upcoming holidays.  The right and left of the carousel can be clicked to cycle through the holidays and the links inside the carousel can be clicked to navigat the the Wikipedia page with information about the holiday.  When the 'New Project' button is pushed the user will be directed to a new page.  There they will find instrusctions on how to use the page, a 'Home' button to return to the previous page, a drop down to select the country where they want to get holidays from, two date selectors representing the start and end date, and a 'Create Report' button.  When a country, start date, and end date are selected the user can push the 'Create Report' button to generate a calendar.  The calendar highlights the range of days selected and lists the holidays celebrated during that time.  The holiday names can be clicked on and on the side there will be a brielf description of the holiday with a link to the Wikipedia page if more information is desired.  There are also two more buttons at the bottom of the page, 'Regenerate Report' and 'Save Report'.  Regenerate restores the page to default so a new country and dates can be selected.  Save takes the input data and displays it on the homepage for future reference along with the time and date that the report was generated.

## Credits

Calendar modified from code taken from: https://medium.com/@nitinpatel_20236/challenge-of-building-a-calendar-with-pure-javascript-a86f1303267d

## Features

The website takes the computers date and time and updates the carousel with upcoming holidays.  There's also buttons to navigate between pages.  the next page has drop downs to select a country and start/end dates.  It can then dynamically build a calendar that updates with different colors to highlight selected days and holidays listed in their respective days.  Clicking on holidays displays a brief description and a link to the holidays Wikipedia page.  The page also has a save function that populated the home page with selected country and start/end days as well as when it was saved.