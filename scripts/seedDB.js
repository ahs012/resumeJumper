const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/resume_db"
);

const usersSeed = [
  {
    name: "Albert Schumacher",
    email: "ahs012@gmail.com",
    address: "1234 Main Road",
    password: "samplePassword",
    date: new Date(Date.now())
  },
  {
    name: "Chris Fernandez",
    email: "chrisF@gmail.com",
    address: "1423 Main Road",
    password: "samplePassword1",
    date: new Date(Date.now())
  },
  {
    name: "Juliette Amador",
    email: "julietteA@gmail.com",
    address: "5324 Main Road",
    password: "samplePasswor3d",
    date: new Date(Date.now())
  },
  {
    name: "Marissa Tee",
    email: "MarissaT@gmail.com",
    address: "1234 Main Road",
    password: "samplePassword4",
    date: new Date(Date.now())
  },
  {
    name: "Bettina Schumacher",
    email: "bettinaS@gmail.com",
    address: "5644 UM Road",
    password: "samplePassword5",
    date: new Date(Date.now())
  },
  {
    name: "Erika Schumacher",
    email: "erikaS@gmail.com",
    address: "8563 roro ct",
    password: "samplePassword123",
    date: new Date(Date.now())
  },
  {
    name: "Gretel Schumacher",
    email: "gretelS@gmail.com",
    address: "1234 Main Road",
    password: "samplePasswor4d",
    date: new Date(Date.now())
  },
  {
    name: "Karla Schumacher",
    email: "karli@gmail.com",
    address: "1234 FSU Road",
    password: "samplePasswor5d",
    date: new Date(Date.now())
  },
  {
    name: "Missing Number",
    email: "msgn@gmail.com",
    address: "1234 Main Road",
    password: "samplePassword14",
    date: new Date(Date.now())
  },
  {
    name: "Mario Plumber",
    email: "mario64@nintendo.com",
    address: "1234 Main Road",
    password: "samplePassword44",
    date: new Date(Date.now())
  }
 ];
 
 db.User
  .remove({})
  .then(() => db.User.collection.insertMany(usersSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });