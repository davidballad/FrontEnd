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
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/todoDB', {useNewUrlParser: true});

const listSchema = new mongoose.Schema({
   name: String
});

const workSchema = new mongoose.Schema({
   name: String
});

const List = mongoose.model('List', listSchema);
const Work = mongoose.model('Work', workSchema);

let newItems = [];
let workItems = [];

List.find((err, list)=>{
   if(err) console.log(err);
   list.forEach(list=>
      newItems.push(list.name));
});

Work.find((err, work)=>{
   if(err) console.log(err);
   work.forEach(work=>
      workItems.push(work.name));
});


app.get('/', (req, res)=>{
      res.render('home', {
         listName: date.date,
         newItems: newItems
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

      const work = new Work({
         name: req.body.newItem
      });
      work.save();

      workItems.push(req.body.newItem);
      res.redirect('/work');
   } else {

      const item = new List({
         name: req.body.newItem
      });
      item.save();

      newItems.push(req.body.newItem);
      res.redirect('/');
   }
   
});

app.get('/about', (req, res)=>{
   res.render('about');
});


app.post('/delete', (req, res)=>{
   const itemToDelete = req.body.delItem[1];
   const listPage = req.body.delItem[0];

   const index = newItems.indexOf(itemToDelete);
   const index1 = workItems.indexOf(itemToDelete);
   
   if(index>-1 || index1>-1){
      
      if (listPage === 'Work') {
         Work.deleteOne({name: itemToDelete}, (err)=>{
            if(err) console.log(err);
            
            workItems.splice(index1, 1);
            res.redirect('/work');
         });
      } else {
         List.deleteOne({name: itemToDelete}, (err)=>{
            if(err) console.log(err);

               newItems.splice(index, 1);
               res.redirect('/');
         });
      }
   }
});








app.listen(3000, ()=>
   console.log('listening on port 3000')
);