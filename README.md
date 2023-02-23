# Work Day Scheduler 

## Description
- My motivation for this project was to learn how to create a simple work day scheduler that saves plans for the user in color-coded time blocks. 
- I built this project so that the user can schedule their work day with time blocks that indicate whether those plans were in the past, present, or future. That way, they can know what they should've already done, what they shoud be doing, and what they will have to do later in the day. I also built this project to gain more experience with jQuery. 
- The problem that this project solves is having to memorize tasks that need done throughout the day. Instead, the user can type in their task to the relevant time block and revisit the webpage to see what they have to do for that day. 
- I learned how to create a click event for the save buttons using jQuery that locally stored the user's input for each time block that they used. I also learned how to add a CSS class to each time block using jQuery, changing the color of the time block based on the current time and time of the event. I also learned how to get the user input saved in local storage and set the values to the corresponding text area elements. I learned how to display the current time in the header using dayjs(). I also learned how to traverse through siblings using one of their class attributes as a parameter to filter the search for siblings. 

## Usage
- To use this webpage, choose the time block you'd like to schedule your plan for the day and type in that plan. Once you are done, you can click on the save button to the far right and your plan will be saved. If the time block is gray, that plan is in the past. If the time block is red, that plan is in the present. If the time block is green, that is a future plan. You may reload the page and your plans will remain on the screen, therefore you will not lose the schedule that you've set for that day. 

## Credits
- My tutor, Eric Sayer, helped me finish the listener for click events function, the function that applied the colors to the time blocks based on the current time, and the function that gets user input from local storage. He taught me more about traversing through the DOM using jQuery. He also showed me how to use the parseInt() method and split() method in the function that applies the past, present, and future class to the time blocks depending on the current time. 
- I used Module 5 Activity 25 as my reference for displaying current day.
- I also referenced this website for the current day: https://day.js.org/docs/en/parse/now
- I referenced this website for setting the hour: https://day.js.org/docs/en/get-set/hour
- I referenced this website for traversing siblings with parameter to filter the search for siblings: https://www.w3schools.com/jquery/jquery_traversing_siblings.asp
- I referenced this website for the each() method: https://www.w3schools.com/jquery/misc_each.asp