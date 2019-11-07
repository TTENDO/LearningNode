// console.log("Hello World!!!")
const express = require("express");
const app = express(); //an app of type express
const path = require("path"); //helps node understand my app directory
app.set("view engine", "pug");

app.set("views", path.join(__dirname, "views"));

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


app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/class", (req, res) => {
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
//path parameters
app.get("/users/:name", (req, res) => {
  res.send("Hello " + req.params.name);
});

//query params -passed in the url
app.get("/users", (req, res) => {
  res.send("This is class " + req.query.class + "cohort" + req.query.cohort);
});
//my error page
app.get("*", (req, res) => {
  res.send("Sorry non existent");
});
