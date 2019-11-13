const express = require("express"); //helps display posted data on the body
const bodyParser = require("body-parser"); //connecting the app to the database by requiring mongoose
const mongoose = require("mongoose");
const path = require("path"); //helps node understand my app directory

const app = express(); //an app of type express
app.set("view engine", "pug"); //setting a template engine
app.set("views", path.join(__dirname, "views"));
app.use(bodyParser.urlencoded({ extended: true }));

//connecting to the database `node-demo`
mongoose.connect("mongodb://localhost:27017/node-demo");

//schema definition -- declaring our collection
var nameSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: "Please enter firstname"
  },
  lastname: String,
  email: String,
  gender: String,
  city: String
});

//creating an instance of a model with collection name ..this name is converted to lowercase and an s is added
var User = mongoose.model("User", nameSchema); //user is a collection name

//getting the password and displaying it
app.get("/first-template", (req, res) => {
  // console.log("body", req.body);
  // console.log("Query params", req.query);
  res.render("regForm");
});

//saving data to the database
app.post("/thank", (req, res) => {
  const register = new User(req.body);
  register
    .save()
    .then(item => {
      User.find().then(items => {
        res.render("list", { users: items }); //list shd have access to items using the variable name users
      });
    })
    .catch(err => {
      res.status(500).send("unable to save  to the database");
    });
});

app.listen(3009, function() {
  console.log("listening on 3009");
});
