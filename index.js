// console.log("Hello World!!!")
const express = require("express");
const app = express(); //an app of type express

//helps display posted data on the body
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

const path = require("path"); //helps node understand my app directory
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

//getting the password and displaying it
app.get("/first-template", (req, res) => {
  // console.log("body", req.body);
  // console.log("Query params", req.query);
  res.render("regForm");
});

app.get("/first-template", (req, res) => {
  res.send("regForm");
});

app.post("/first-template", (req, res) => {
  console.log("this form has been posted");
  console.log("body", req.body);
  console.log("Query params", req.query);
  res.send(req.body);
  //res.render("regForm");
});

//adding route thanks where data is sent
app.post("/thanks", (req, res) => {
  /*console.log("this form has been posted");
  console.log("body", req.body);
  console.log("Query params", req.query);
  //res.send(req.body);
  res.send("Hello " + req.body.firstname); //this printds hello ree bcoz its what i input in the form*/

  res.render("cohort",{
    name: req.body.firstname + ' ' + req.body.lastname,
    emailadd: req.body.email
   
  })

  //res.render("regForm");
});

app.listen(3009, function() {
  console.log("listening on 3009");
});

/* var http = require('http');

var server = http.createServer(function (req, res) {
  res.end('test');
});

server.on('listening', function () {
  console.log('ok, server is running');
});

server.listen(80); */

/*
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/first-template", (req, res) => {
  res.render("regForm");
});

//app.get();

//creating the about us page
app.get("/about", (req, res) => {
  res.send("This is the about us page");
});

//the post method
app.post("/", (req, res) => {
  res.send("Got a POST request");
});

//the put method
app.put("/", (req, res) => {
  res.send("Got a PUT request at /user");
});

//the delete method
app.delete("/user", (req, res) => {
  res.send("Got a DELETE request at /user");
});
//path parameters in the code and in the path
app.get("/users/:name", (req, res) => {
  res.send("Hello " + req.params.name);
});

//query params -passed in the url
app.get("/users", (req, res) => {
  res.send("This is class " + req.query.class + "cohort" + req.query.cohort);
});*/

//my error page
app.get("*", (req, res) => {
  res.send("Sorry non existent");
});
