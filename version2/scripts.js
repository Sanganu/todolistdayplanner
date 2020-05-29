$(".saveinput").on("click",function(){
    let timeblock = $(this).parents("tr").attr("id")
    let userdata = $(this).parents("tr").find("input").val();
    console.log("ENtry",timeblock,userdata)
    localStorage.setItem(timeblock,userdata)
})

function displaySchedule(){
    $(".row").each(function(){
        var blockid = $(this).attr("id");
        if( blockid !== "columnhead"){
            var plan = localStorage.getItem(blockid) || "Enter your Plans here";
            $(this).find(".userinput").val(plan);
            console.log(blockid,plan)
        }
    })
    for(let i=9;i<18;i++){

    }
}

displaySchedule()