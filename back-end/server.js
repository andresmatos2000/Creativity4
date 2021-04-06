const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost:27017/saladBuilder', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


const itemSchema = new mongoose.Schema({
  Meats: Array,
  Rices: Array,
  Veggies: Array
});

const MemberSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    country: String,
    intro: String,
    favoriteSalad: String
});
// Create a model for items in the museum.
const Item = mongoose.model('Item', itemSchema);
const Member = mongoose.model('Member', MemberSchema);

// Create a new item in the museum: takes a title and a path to an image.
app.post('/api/items', async (req, res) => {
  //console.log(req.body);
  const item = new Item({
    Meats: req.body.Meats,
    Rices: req.body.Rices,
    Veggies: req.body.Veggies
  });
  console.log(item);
  try {
    await item.save();
    res.send(item);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});
// Get a list of all of the items in the museum.
app.get('/api/items', async (req, res) => {
  try {
    let items = await Item.find();
    res.send(items);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});
// Get a list of all of the items in the museum.
app.get('/api/members', async (req, res) => {
  try {
    let members = await Member.find();
    res.send(members);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.delete('/api/items/:id', async (req, res) => {
  try {
    await Item.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.put('/api/items/:id', async (req, res) => {
  try {
    item = await Item.findOne({
      _id: req.params.id
    });
    item.Meats = req.body.Meats;
    item.Rices = req.body.Rices;
    item.Veggies = req.body.Veggies;
    item.save();
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});




//MEMBERS
app.post('/api/members', async (req, res) => {
  console.log(req.body);
  const member = new Member({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    country: req.body.country,
    intro: req.body.intro,
    favoriteSalad: req.body.favoriteSalad
  });
  console.log(member);
  try {
    await member.save();
    res.send(member);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.delete('/api/members/:id', async (req, res) => {
  try {
    await Member.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.put('/api/members/:id', async (req, res) => {
  try {
    member = await Member.findOne({
      _id: req.params.id
    });
    member.firstName = req.body.firstName,
    member.lastName = req.body.lastName,
    member.country = req.body.country,
    member.intro = req.body.intro,
    member.favoriteSalad = req.body.favoriteSalad
    member.save();
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});
app.listen(3000, () => console.log('Server listening on port 3000!'));


