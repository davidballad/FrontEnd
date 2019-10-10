

//$("h1").css("color", "blue");
$("h1").addClass("big-title");
$("button").text("Dont");

$("h1").click(function(){
  $("h1").css("color", "blue");
});


$("button").click(function(){
  $("h1").css("color", "purple");
});

$(document).keydown(function(event){
  $("h1").text(event.key);
});

$("h1").on("mouseover", function(){
  //$("h1").css("color", "red");
  $("h1").fadeOut();  //.show(); to make it reapear
});
