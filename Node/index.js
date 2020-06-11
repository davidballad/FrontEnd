//jshint esversion:6

// const fs = require('fs');

// fs.copyFileSync('file.txt', 'file2.txt');       //this is how we transfer info to another file

const faker = require('faker');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');      //use ejs fro html
//app.use(express.static, (__dirname + '/styles'));      //styles folder
app.use(bodyParser.urlencoded({extended:true}));


app.get('/', (req, res)=>{
   let email = faker.internet.email();
   res.render('home', {email});
});
app.post('/', (req, res)=>{
   res.redirect('/');
});



app.get('/calc', (req, res)=>{
   
   res.sendFile(__dirname+'/index.html');
   //res.render('home');
});

app.post('/result', (req, res)=>{
   var w = parseFloat(req.body.w);
   var h = parseFloat(req.body.h);

      var result = w/(h* h);

      res.send('Result: ' + result);
      // if(result < 18.5){
      //    res.send("Your BMI is <" + result + ">, so you are underweight.");
      //  } else if(result >= 18.5 && result <= 24.9){
      //      res.send("Your BMI is <" + result + ">, so you have a normal weight.");
      //  } else {
      //      res.send("Your BMI is <" + result + ">, so your are overweight.");
      //    }
   
   // setTimeout(()=>{
   //    res.redirect('/calc');
   // }, 3000);         //CANNONT SEND HEADERS AGAIN?
});



app.listen(3000, ()=>{
   console.log('I am listening port 3000');
});
