var planneractivity = JSON.parse(localStorage.getItem("myplanner"))||[];


$("#saveplanner").on("click",function(event){
    event.preventDefault();
    var plannerdata=[]
    $(".planneractivity").each(function(){
        var timeentry ={
            time:$(this).attr("id").split("-")[1],
            dataentry:$(this).val().trim()
        }
        plannerdata.push(timeentry);
    })
    localStorage.setItem("myplanner",JSON.stringify(plannerdata));
    console.log(JSON.parse(localStorage.getItem("myplanner")));
    // console.log(JSON.parse(localStorage.getItem("planneractivity")));
});

function getPlannerdata(){
    var currenthour = moment().format("HH");
    console.log(planneractivity);
    for(let i=9;i<18;i++){
        if (planneractivity.length >0){
            let textareaid = planneractivity[i-9].time;
            let textareaentry = planneractivity[i-9].dataentry;
           $(`#input-${textareaid}`).val(textareaentry);
        }
        if( i < currenthour){
            $(`.${i}-block`).addClass("bg-warning");
        }
        else if( i === currenthour){
            $(`.${i}-block`).addClass("bg-secondary");
        }
        else{
            $(`.${i}-block`).addClass("bg-primary");
        }
       
    }
}

getPlannerdata();
