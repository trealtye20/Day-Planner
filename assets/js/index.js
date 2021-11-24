var currentDay = moment().format('LLLL');
$("#currentDay").text(currentDay);

function addColor() {
    var hour = moment().hour();
    // console.log(hour)
    $(".time-block").each(function() {
        var sectionHour = $(this).attr("id").split("-")[1];        
        // console.log(sectionHour)
        if (hour > sectionHour){
            $(this).addClass("past");
        } else if (hour == sectionHour) {
            $(this).addClass("present");
        } else if (hour < sectionHour) {
            $(this).addClass("future");
        }
    })
} 

$(".saveBtn").on("click", function() {
    var key = $(this).attr("id");
    console.log(key)
    var value = $(this).siblings(".input-text").val()
    console.log(value)
    localStorage.setItem(key, value);
})

$("#hour-9 .input-text").val(localStorage.getItem("9-hour"))
$("#hour-10 .input-text").val(localStorage.getItem("10-hour"))
$("#hour-11 .input-text").val(localStorage.getItem("11-hour"))
$("#hour-12 .input-text").val(localStorage.getItem("12-hour"))
$("#hour-13 .input-text").val(localStorage.getItem("13-hour"))
$("#hour-14 .input-text").val(localStorage.getItem("14-hour"))
$("#hour-15 .input-text").val(localStorage.getItem("15-hour"))
$("#hour-16 .input-text").val(localStorage.getItem("16-hour"))
$("#hour-17 .input-text").val(localStorage.getItem("17-hour"))
$("#hour-18 .input-text").val(localStorage.getItem("18-hour"))



addColor()