

window.onload = function(){
  var name = prompt("Enter your name");
  var firstCh = name.slice(0,1).toUpperCase();
  var restOf = name.slice(1, name.length).toLowerCase();
  var nameComplete = firstCh + restOf;
  var date = new Date();
  document.getElementById("today").innerHTML="Hi "+ nameComplete + ", today is " + date;

};

 // function cut(myText, number){
 //   myText.slice(0, number);
 // }

 //var postAlert = document.getElementById("alertPost");

 // postAlert.addEventListener(click, function(e){
 //   alert("hello");
 // });
function countCheck(){
  var getText = document.getElementById("tweet-box").value;
  var charsLeft = 250-getText.length;
    // if (charsLeft<=0) {
    //   // document.getElementById("tweet-box").addEventListener("keypress", function(e){
    //   //     e.preventDefault();
    //   // });
    //   alert("Reached your limit");
    //
    // } else {
      var text = document.getElementById("charCount").innerHTML = "Characters Left: " + charsLeft;
    //}

}


 function iClick(){       //not really working
   var textToCut = document.getElementById("tweet-box").value;
   if (textToCut === "") {
     alert("Nothing typed, please elaborate a tweet");
   } else{
     var h = textToCut.slice(0,250);
     display(h);
     eraseText();
   }

 }

 function eraseText(){
   document.getElementById("tweet-box").value = "";
   document.getElementById("charCount").innerHTML= "Done";
   //("click", function(event){
     //event.preventDefault();
 }


 function display(myText){
   var date = new Date();

   var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
   var d = days[date.getDay()];

   var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
   var m = months[date.getMonth()];

   var day = date.getDate();
   var y = date.getFullYear();


   var myTxtArea = document.createElement("div");
   var myNode = document.createTextNode( d + " " + m + " "+ day+ ", " + y + ": " + myText);
   myTxtArea.appendChild(myNode);
   myTxtArea.classList.add("form-control");
   myTxtArea.classList.add("frame");

   var below = document.getElementById("div-create");   //it doesnt work if the div has a class istead of an id
   below.appendChild(myTxtArea);
 }
