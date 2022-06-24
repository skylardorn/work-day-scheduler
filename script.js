var 

$(".hour").each(function () {
    console.log("hour")
    $(this)
    .removeClass("present")
    .removeClass("future")
    .removeClass("past");
    
    
    var currentHour = parseInt(moment().hours());
    var dataNum = parseInt($(this).attr("data-num"));

    console.log("currentHour: ", currentHour);
    console.log("dataNum: ", dataNum);

    if (dataNum < currentHour) {
        $(this).addClass("past");
    };
    if (dataNum === currentHour) {
        $(this).addClass("present");
    };
    if (dataNum > currentHour) {
        $(this).addClass("future");
    };
});


$(".saveBtn").on("click", function () {
    
    
    var text = $(this).siblings("textarea").val().trim();
    var hour = $(this).siblings("textarea").attr("data-num");
    console.log("text: ", text);
    console.log("hour: ", hour);
    
    
    localStorage.setItem(hour, text);
})


$("#9").text(localStorage.getItem("9"));
$("#10").text(localStorage.getItem("10"));
$("#11").text(localStorage.getItem("11"));
$("#12").text(localStorage.getItem("12"));
$("#1").text(localStorage.getItem("13"));
$("#2").text(localStorage.getItem("14"));
$("#3").text(localStorage.getItem("15"));
$("#4").text(localStorage.getItem("16"));
$("#5").text(localStorage.getItem("17"));

var currentDay = $("<p>").text(moment().format("MMMM Do YYYY"));
currentDay.addClass("top-p");
$(".head").append(currentDay);