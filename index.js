const express = require("express"); //helps display posted data on the body
const bodyParser = require("body-parser"); //connecting the app to the database by requiring mongoose
const mongoose = require("mongoose");
const path = require("path"); //helps node understand my app directory

const app = express(); //an app of type express

//middleware
app.set("view engine", "pug"); //setting a template engine
app.set("views", path.join(__dirname, "views"));
app.use(bodyParser.urlencoded({ extended: true }));

//connecting to the database `node-demo`
mongoose.connect("mongodb://localhost:27017/node-demo");

//import routes
const regRoutes = require("./routes/registrationRoutes.js");
app.use("/first-template", regRoutes);

app.listen(3009, function() {
  console.log("listening on 3009");
});
