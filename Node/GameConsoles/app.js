//jshint esversion:6

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/gamesDB', { useNewUrlParser: true, useUnifiedTopology: true });


const gameSchema = new mongoose.Schema({
   name: String,
   rating: {
      type: Number,
      required:true
   },
   review: String
});

const Game = mongoose.model('Game', gameSchema);

const mario = new Game({
   name: 'MarioKart',
   rating: 10,
   review: 'Amazing game'
});

//mario.save();

const peopleSchema = new mongoose.Schema({
   fname: String,
   lname: String,
   age: Number,
   favoriteGame: gameSchema
});

const People = mongoose.model('People', peopleSchema);

const mateo = new People({
   fname: 'Mateo',
   lname: 'Bucheli',
   age: 17,
   favoriteGame: mario
});

//mateo.save();

Game.find((err, games)=>{
   if(err) console.log(err);

   games.forEach(game=> console.log(game.name));
   
});

People.updateOne({fname: 'David'}, {age: '25'}, (err)=>{
   if(err) {
      console.log(err);
   } else {
      console.log('Entry Updated');
   // mongoose.connection.close();
   }
   
});

People.deleteOne({_id: '5ee81156ce965417ecc4a992'}, (err)=>{
   if (err) {
      console.log(err);
   } else {
      console.log('Entry deleted');
      mongoose.connection.close();
   }
});