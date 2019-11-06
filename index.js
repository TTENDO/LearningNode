// console.log("Hello World!!!")
const express = require("express");
const app = express(); //an app of type express
app.listen(3000, function() {
  console.log("listening on 3000");
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/about", (req, res) => {
  res.send("This is the about us page");
});
