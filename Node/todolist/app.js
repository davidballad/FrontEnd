//jshint esversion: 6

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { static } = require('express');
const { fileLoader } = require('ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname+'/public'));
app.set('view engine', 'ejs');

const date = require(__dirname+'/date.js');


let newItems = [];
let workItems = [];

app.get('/', (req, res)=>{
   
      res.render('home', {
         listName: date.date,
         newItems: newItems
      });
});

app.get('/work', (req, res)=>{
   res.render('home', {
      listName: 'Work',
      newItems: workItems
   });
});

app.post('/', (req, res)=>{
   if(req.body.newItem === ''){
      if (req.body.listName === 'Work') {
         res.redirect('/work');
      } else {
         res.redirect('/');
      }
      
   } else if(req.body.listName === 'Work'){
      workItems.push(req.body.newItem);
      res.redirect('/work');
   } else {
      newItems.push(req.body.newItem);
      res.redirect('/');
   }
   
});

app.get('/about', (req, res)=>{
   res.render('about');
});








app.listen(3000, ()=>
   console.log('listening on port 3000')
);