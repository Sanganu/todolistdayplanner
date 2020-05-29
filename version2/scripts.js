$(".saveinput").on("click",function(){
    let timeblock = $(this).parents("tr").attr("id")
    let userdata = $(this).parents("tr").find("input").val();
    console.log("ENtry",timeblock,userdata)
    localStorage.setItem(timeblock,userdata)
})

$(".deleteentry").on("click",function(){
    let timeblock = $(this).parents("tr").attr("id")
    localStorage.removeItem("timeblock");
    let userdata = $(this).parents("tr").find("input").val(" ");
})
function displaySchedule(){
    $(".row").each(function(){
        var blockid = $(this).attr("id");
        if( blockid !== "columnhead"){
            var plan = localStorage.getItem(blockid) || "";
            if (plan){
                $(this).find(".userinput").val(plan) 
            }
            else{
                 $(this).find(".userinput").attr("placeholder","Enter you schedule here")
            }
            console.log(blockid,plan)
        }
    })
}

displaySchedule()