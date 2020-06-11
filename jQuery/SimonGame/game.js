var gamePattern = [];
var userClickedPattern = [];

var buttonColor = ["red", "green", "yellow", "blue"];



function nextSequence(){
  var randomNumber = Math.random();
  randomNumber = randomNumber * 4;
  randomNumber = Math.floor(randomNumber);
  var randomChosenColor = buttonColor[randomNumber];
  playAudio(randomChosenColor);
  gamePattern.push(randomChosenColor);
  $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);
}

function playAudio(color){
  var audio = new Audio("sounds/" + color + ".mp3");
  audio.play();
}

$(".btn").click(function(){
  var userChosenColor = this.id;
  playAudio(userChosenColor);
  userClickedPattern.push(userChosenColor);
  animate(userChosenColor);
  checkAnswer(userClickedPattern.length-1);
});

function animate(currentColor){
  var selection = $("."+ currentColor);
  selection.addClass("pressed");
  setTimeout(function() {
  selection.removeClass("pressed");
  }, 100);
}

var level = 0;
var restart = false;

  //$(document).one("keydown", function(){ .one IS ANOTHER OPTION
  $(document).keydown(function(){
    if(!restart){
      $("#level-title").text("Level 0");
      nextSequence();
    }
    restart = true;

  });


  function checkAnswer(currentLevel){
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]){ //checks acuracy of last element of the array
      if (gamePattern.length === userClickedPattern.length) {  //check if sequence is over
        setTimeout(function() {
        nextSequence();
      }, 1000);
    }
    } else {
      playAudio("wrong");
      $("h1").after("<h2>Press any key to Try Again</h2>").addClass("game-over");
      startOver();
      setTimeout(function() {
      $("h2").remove();
      $("h1").removeClass("game-over");

    }, 3000);
    }

  }

  function startOver(){
    level = 0;
    restart = false;
    gamePattern = [];
  }
