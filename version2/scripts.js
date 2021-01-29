$(".saveinput").on("click", function () {
    let timeblock = $(this).parents("tr").attr("id")
    let userdata = $(this).parents("tr").find("input").val();
    console.log("ENtry", timeblock, userdata)
    localStorage.setItem(timeblock, userdata)
})

$(".deleteentry").on("click", function () {
    let timeblock = $(this).parents("tr").attr("id")
    localStorage.removeItem("timeblock");
    let userdata = $(this).parents("tr").find("input").val(" ");
})
function displaySchedule() {
    $(".row").each(function () {
        let blockid = $(this).attr("id");
        if(blockid !== "tablehead"){
        let currentblocktime = blockid.split("-")[1]
        let hour = moment().hours()

        let plan = localStorage.getItem(blockid) || "";
        if (plan) {
            $(this).find(".userinput").val(plan)
        }
        else {
            $(this).find(".userinput").attr("placeholder", "Enter you schedule here")
        }
        console.log(blockid, plan)
        if (hour < currentblocktime) {
            $(this).addClass("bg-primary")
        } else if (hour == currentblocktime) {
            $(this).addClass("bg-warning")
        } else {
            $(this).addClass("bg-danger")
        }
    }

    })
}

displaySchedule()
displayClock()

function displayClock(){
    let clock = setInterval(ticktick,1000)

    function ticktick(){
 
       $('p[name=currenttime]').text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"))
    }
}