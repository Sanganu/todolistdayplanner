$(".saveBtn").on("click",function(){
    var value = $(this).siblings(".description").val();
    var time= $(this).parent().attr("id");
    localStorage.setItem(time,value);
})

$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#currentDay").text(moment().format("dddd, MMMM Do"));
