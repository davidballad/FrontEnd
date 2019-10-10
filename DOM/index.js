var randomNumber1 = Math.floor(Math.random() * 6) + 1 ;

var playerOne = "images/dice" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", playerOne);


var randomNumber2 = Math.floor(Math.random()*6) + 1;
var playerTwo = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", playerTwo);


if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "PLayer 1 WINS";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "PLayer 2 WINS";
} else {
  document.querySelector("h1").innerHTML = "DRAW"
}
