
$(function () {
  
  // create listener for click events on the save buttons using jQuery to set the key (the containing time-block) and value (user input) to local storage

  $(".saveBtn").on("click", function () {
    var time = $(this).parent().attr("id");
    var userInput = $(this).siblings(".description").val();

    localStorage.setItem(time, userInput);
  });

  // set variable for current hour

  var hour = dayjs().hour();

  // create function to apply the past, present, or future class to each time block
  // use if/else statements and the logical operators less than (<), stictly equal to (===), and greater than (>) to compare to current hour
  // use jQuery addClass to add the class past, present, or future depending on if the time-block represents a time in the past/present/future

  $(".time-block").each(function () {
    var chosenTimeBlock = parseInt($(this).attr("id").split("-")[1]);

    if (chosenTimeBlock < hour) {
      $(this).addClass("past");
    }

    else if (chosenTimeBlock === hour) {
      $(this).addClass("present");
    }

    else {
      $(this).addClass("future");
    }

  });

  // create function to get user input saved in localStorage and set the value of the corresponding text area elements to that of the user's input 

  $(".time-block").each(function () {
    var chosenTimeBlock = $(this)
    var id = chosenTimeBlock.attr("id")
    chosenTimeBlock.children("textarea").val(localStorage.getItem(id));
  });

  // displays the current date in the header of the page using dayjs()

  var currentDay = dayjs();
  $("#currentDay").text(currentDay.format("MMM D, YYYY"))
});


