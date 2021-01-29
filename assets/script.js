$(".savePlannerEntry").on("click",function(){
    let timeblock = $(this).attr("name").split("-")[1]
    let value = $(`textarea[name=planner-${timeblock}-userentry]`).val()
    console.log("name",timeblock)
    var time= "time-"+timeblock
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
