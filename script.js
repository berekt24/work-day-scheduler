// current date function
$(document).ready(function() {
var today = dayjs();
$('#currentDay').text(today.format('dddd MMMM D, YYYY'));

// time block function 
function timeBlockColor() {
  var everyHour = dayjs().format('hh');
  $('.time-block').each(function () {
    var currentHour = parseInt($(this).prop('id'));
    // console.log("currenthour"+currentHour);
    // console.log("everyhour"+everyHour);

    if (currentHour > everyHour) {
      console.log("test")
      $(this).addClass("future");
    } else if (currentHour === everyHour) {
      $(this).addClass("present");
    } else if (currentHour < everyHour) {
      $(this).addClass("past");
    }

  })
}
// save button function
var saveButton = $(".saveBtn");

saveButton.on("click", function () {
  var currentTime = $(this).siblings(".hour").text();
  var currentBlock = $(this).siblings(".description").val();
  localStorage.setItem(currentTime, currentBlock);
  
  
});
// console.log(saveButton);
// save to storage function
function saveSchedule() {

  $(".hour").each(function() {
    var theHour = $(this).text();
    var theSchedule = localStorage.getItem(theHour)
      // console.log(this)
      // console.log(theHour);

      if(theSchedule !== null) {
        $(this).siblings(".description").val(theSchedule);
    }
  })
}

timeBlockColor();
// console.log();

saveSchedule();
  
})
