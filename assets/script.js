// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var currentTime = dayjs().format("ddd h:mm A");

  function updateCurrentTime() {
    var currentTime = dayjs().format("ddd h:mm A"); // Update the current time
    $("#current-time").text(currentTime);
  
    // Call this function every second to update the time
    setTimeout(updateCurrentTime, 1000);
  }
  
  function nineTime() {
    var currentTime = dayjs();
    var StartTime = dayjs("8:59 AM", 'h:mm A');
    var EndTime = dayjs("10:00 AM", 'h:mm A');
  
    if (currentTime.isAfter(EndTime)) {
        $('#hour-9').removeClass("present");
        $('#hour-9').addClass("past");
    } else if (currentTime < StartTime) {
        $('#hour-9').addClass("future");
        $('#hour-9').removeClass("present");
        $('#hour-9').removeClass("past");
    } else {
        $('#hour-9').removeClass("future");
        $('#hour-9').removeClass("past");
        $('#hour-9').addClass("present");
    }
  
  }


  function tenTime() {
  var currentTime = dayjs();
  var tenStartTime = dayjs("9:59 AM", 'h:mm A');
  var tenEndTime = dayjs("11:00 AM", 'h:mm A');

  if (currentTime.isAfter(tenEndTime)) {
      $('#hour-10').removeClass("present");
      $('#hour-10').addClass("past");
  } else if (currentTime < tenStartTime) {
      $('#hour-10').addClass("future");
      $('#hour-10').removeClass("present");
      $('#hour-10').removeClass("past");
  } else {
      $('#hour-10').removeClass("future");
      $('#hour-10').removeClass("past");
      $('#hour-10').addClass("present");
  }

}
 
function elevenTime() {
    var currentTime = dayjs();
    var StartTime = dayjs("11:00 AM", 'h:mm A');
    var EndTime = dayjs("12:00 PM", 'h:mm A');
  
    if (currentTime.isAfter(EndTime)) {
        $('#hour-11').removeClass("present");
        $('#hour-11').addClass("past");
    } else if (currentTime < StartTime) {
        $('#hour-11').addClass("future");
        $('#hour-11').removeClass("present");
        $('#hour-11').removeClass("past");
    } else {
        $('#hour-11').removeClass("future");
        $('#hour-11').removeClass("past");
        $('#hour-11').addClass("present");
    }
  
  }

  function twelveTime() {
    var currentTime = dayjs();
    var StartTime = dayjs("12:00 PM", 'h:mm A');
    var EndTime = dayjs("1:00 PM", 'h:mm A');
  
    if (currentTime.isAfter(EndTime)) {
        $('#hour-12').removeClass("present");
        $('#hour-12').addClass("past");
    } else if (currentTime < StartTime) {
        $('#hour-12').addClass("future");
        $('#hour-12').removeClass("present");
        $('#hour-12').removeClass("past");
    } else {
        $('#hour-12').removeClass("future");
        $('#hour-12').removeClass("past");
        $('#hour-12').addClass("present");
    }
  
  }

  function oneTime() {
    var currentTime = dayjs();
    var StartTime = dayjs("1:00 AM", 'h:mm A');
    var EndTime = dayjs("2:00 pM", 'h:mm A');
  
    if (currentTime.isAfter(EndTime)) {
        $('#hour-1').removeClass("present");
        $('#hour-1').addClass("past");
    } else if (currentTime < StartTime) {
        $('#hour-1').addClass("future");
        $('#hour-1').removeClass("present");
        $('#hour-1').removeClass("past");
    } else {
        $('#hour-1').removeClass("future");
        $('#hour-1').removeClass("past");
        $('#hour-1').addClass("present");
    }
  
  }

  function twoTime() {
    var currentTime = dayjs();
    var StartTime = dayjs("2:00 PM", 'h:mm A');
    var EndTime = dayjs("3:00 PM", 'h:mm A');
  
    if (currentTime.isAfter(EndTime)) {
        $('#hour-2').removeClass("present");
        $('#hour-2').addClass("past");
    } else if (currentTime < StartTime) {
        $('#hour-2').addClass("future");
        $('#hour-2').removeClass("present");
        $('#hour-2').removeClass("past");
    } else {
        $('#hour-2').removeClass("future");
        $('#hour-2').removeClass("past");
        $('#hour-2').addClass("present");
    }
  
  }

  function threeTime() {
    var currentTime = dayjs();
    var StartTime = dayjs("3:00 PM", 'h:mm A');
    var EndTime = dayjs("4:00 PM", 'h:mm A');
  
    if (currentTime.isAfter(EndTime)) {
        $('#hour-3').removeClass("present");
        $('#hour-3').addClass("past");
    } else if (currentTime < StartTime) {
        $('#hour-3').addClass("future");
        $('#hour-3').removeClass("present");
        $('#hour-3').removeClass("past");
    } else {
        $('#hour-3').removeClass("future");
        $('#hour-3').removeClass("past");
        $('#hour-3').addClass("present");
    }
  
  }

  function fourTime() {
    var currentTime = dayjs();
    var StartTime = dayjs("4:00 PM", 'h:mm A');
    var EndTime = dayjs("5:00 PM", 'h:mm A');
  
    if (currentTime.isAfter(EndTime)) {
        $('#hour-4').removeClass("present");
        $('#hour-4').addClass("past");
    } else if (currentTime < StartTime) {
        $('#hour-4').addClass("future");
        $('#hour-4').removeClass("present");
        $('#hour-4').removeClass("past");
    } else {
        $('#hour-4').removeClass("future");
        $('#hour-4').removeClass("past");
        $('#hour-4').addClass("present");
    }
  
  }

  function fiveTime() {
    var currentTime = dayjs();
    var StartTime = dayjs('5:00 PM', 'h:mm A');
    var EndTime = dayjs('6:00 PM', 'h:mm A');


    if (currentTime.isAfter(EndTime)) {
        $('#hour-5').removeClass("present");
        $('#hour-5').addClass("past");
        $('#hour-5').removeClass('future');
    } else if (currentTime) {
        $('#hour-5').addClass("future");
        $('#hour-5').removeClass("present");
        $('#hour-5').removeClass("past");
    } else {
        $('#hour-5').removeClass("future");
        $('#hour-5').removeClass("past");
        $('#hour-5').addClass("present");
    }

  }

  
 
 
  $(document).ready(function() {
    // Start updating the time
    updateCurrentTime();

    $(document).ready(function() {
        // Start updating the time
        updateCurrentTime();
         nineTime();
         tenTime();
         elevenTime();
         twelveTime();
         oneTime();
         twoTime();
         threeTime();
         fourTime();
         fiveTime();

    });
  });

  // Getting and storing text when save button is hit
  $(".saveBtn").on("click", function() {
    var timeBlockId = $(this).parent().attr("id"); 
    var textContent = $(this).siblings(".description").val(); 
    localStorage.setItem(timeBlockId, textContent); 
});
  
$(".time-block").each(function() {
  var timeBlockId = $(this).attr("id");
  var savedText = localStorage.getItem(timeBlockId);
  if (savedText) {
      $(this).find(".description").val(savedText);
  }
});