// console.log("Hello World!!!")
const express = require("express");
const app = express(); //an app of type express
app.listen(3000, function () { 
    console.log('listening on 3000') 
})

app.get('/', function (req,  res) {
     res.send('Hello World') 
    })
