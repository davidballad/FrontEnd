var weight = 60;
//prompt("Enter Your weight");
var height = 2;
//prompt("Enter Your height");

function bmiCalculator(weight, height){
    var result = weight/(height* height);
    return result;
}

function message(){
  var n = bmiCalculator(weight, height);

    if(n < 18.5){
      return("\"Your BMI is <" + n + ">, so you are underweight.\"");
    } else if(n >= 18.5 && n <= 24.9){
        return("Your BMI is <" + n + ">, so you have a normal weight.");
    } else {
        return("Your BMI is <" + n + ">, so your are overweight.");
      }
}

console.log(message());
//console.log("Your BMI result is " + n);

function leapYear(){
  var year = 1998;

  if (year%4 === 0) {
    if (year%100 === 0) {
      if (year%400 === 0) {
        console.log("Leap year.");
      } else {
        console.log("Not leap year.");
      }
    } else {
      console.log("Leap year.");
    }
  } else {
    console.log("Not leap year.");
  }
}

leapYear();

var guests = ["david", "angela", "jack"];
console.log(guests.includes("mate"));
