var planneractivity = JSON.parse(localStorage.getItem("myplanner"))||[];


$("#saveplanner").on("click",function(event){
    event.preventDefault();
    var plannerdata=[]
    $(".planneractivity").each(function(){
        var timeentry ={
            time:$(this).attr("id"),
            dataentry:$(this).val()
        }
        plannerdata.push(timeentry);
    })
    localStorage.setItem("myplanner",JSON.stringify(plannerdata));
    console.log(JSON.parse(localStorage.getItem("myplanner")));
    // console.log(JSON.parse(localStorage.getItem("planneractivity")));
});

function getPlannerdata(){
    var currenthour = moment().format("HH");
    console.log(JSON.parse(localStorage.getItem("myplanner")));
    for(let i=0;i<planneractivity.length;i++){
        let textareaid = planneractivity[i].time;
        if( textareaid >currenthour){
            $(`.${textareaid}-block`).addClass("future");
        }
        else if( textareaid === currenthour){
            $(`.${textareaid}-block`).addClass("current");
        }
        else{
            $(`.${textareaid}-block`).addClass("past");
        }
        let textareaentry = planneractivity[i].dataentry;
        $(`#${textareaid}`).val(textareaentry);
    }
}

getPlannerdata();
