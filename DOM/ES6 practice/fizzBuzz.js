var arr =[];
var count = 1;


function fizzBuzz(){
   if (count%2 === 0 && count%5 === 0) {
      arr.push(fizzbuzz);
   } else if(count%3 === 0) {
      arr.push(buzz);
   } else if(count%5 === 0){
      arr.push(fizz);
   } else{
      arr.push(count);
   }
   count++;
}

function fibonacci(n){
   var b = 1; 
   var next = 0;
   var nTemp =n-(n-1);
   var sequence = [];//  THIS CODE DOESNT WORK
   while(nTemp<=n){
      
      if(n===1){
         sequence= [0];
      } else if(n===2){
         sequence= [0,1];
      } else{
         next += b;
         sequence.push(next);
         if(n === sequence.length){
            //return sequence;
         } else{
            
            b -= next;
            // var temp = next+b;
            // b = next;
            // next = temp;
         }        
      }
      n++;
   }
   return sequence;
}