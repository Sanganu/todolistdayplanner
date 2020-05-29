$(".saveinput").on("click",function(){
    let timeblock = $(this).parents("tr").attr("id")
    let userdata = $(this).parents("tr").find("input").val();
    console.log("ENtry",timeblock,userdata)
})