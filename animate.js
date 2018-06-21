
$("#go").on("click", runIt);

$("#stopAll").on("click", stopAnimation);
function stopAnimation (){
    $(".circle").stop(true);
}

function runIt() {
    $(".circle").css('backgroundColor','red');
    $(".circle").animate({left:'+=480'},3000);
    $(".circle").animate({left:'-=480'},3000);
    $(".circle").animate("normal", runIt);
}
runIt();

//Удаление

$("#del").click(function () {
    $('.circle').remove();})


//Клонирование

$("#add").click(function () {
    $(".circle").clone()
        .addClass(".newElement")
        .appendTo(".box");
})

