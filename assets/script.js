$(".savePlannerEntry").on("click",function(){
    var timeblock = $(this).attr("name")
    console.log("name",timeblock)
    var time= "timer-"+
    localStorage.setItem(time,value);
})
var currenthour = moment().hours()
for(let i=7;i <= 15;i++){

       $(`textarea[name=planner-${i}-userentry]`).val(localStorage.getItem(`time-${i}`))
    if (currenthour < i){
        $(`textarea[name=planner-${i}-userentry]`).addClass("bg-warning")
    }
    else if(currenthour === i){
        $(`textarea[name=planner-${i}-userentry]`).addClass("bg-info")
    }else {
        $(`textarea[name=planner-${i}-userentry]`).addClass("bg-past")
    }
}
