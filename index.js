// console.log("Hello World!!!")
const express = require("express");
const app = express(); //an app of type express
app.listen(3000, function() {
  console.log("listening on 3000");
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

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
//my error page
app.get("*", (req, res) => {
  res.send("Sorry non existent");
});
