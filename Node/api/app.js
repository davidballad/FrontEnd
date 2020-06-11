//jshint esversion:6

const express = require('express');
const app = express();
const https = require('https');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req, res)=>{
   res.sendFile(__dirname + '/index.html');
});



app.post('/',(req, res)=>{
   const city = req.body.cityName;
   //const apiKey= d4be538d802da51575e24bf34f5d33e6;
   const url = 'https://api.openweathermap.org/data/2.5/weather?q='+ city + '&appid=d4be538d802da51575e24bf34f5d33e6&units=metric';

   https.get(url, (response)=>{
      console.log(response.statusCode);

      response.on('data',(data)=>{
         const wData = JSON.parse(data);

         const temp = wData.main.temp;
         const desc = wData.weather[0].description;
         const iconImage = wData.weather[0].icon;
         const icon = 'http://openweathermap.org/img/wn/' + iconImage + '@2x.png';

         res.write('<h1>In ' + city +', the temperature is '+ temp +' with a few ' + desc + '</h1>');
         res.write("<img src="+ icon +">");
         res.send();
      });

   });

});


app.listen(3000, ()=>{
   console.log('running port 3000');
});