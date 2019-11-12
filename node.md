We r learning
 Logging simple output
 Node package manager(npm)
 Express
 Call backs
 Nodemon
 Package.Json
• Scripts

First day(5th November 2019)
Create folder in vscode
Npm init and enter while u fill in to create a json package.

create a repo, push work to master
create a new branch `git branch develop`
`git checkout develop` to go to the develop branch.

create index.js, write a console.log for Hello world and run it.

installing express framework for browser display
`npm install express --save` in the command line
creates dependencies in the package.json with package `express`
create a file `.gitignore` and include folders and files you want to ignore ie `/node_modules and package-lock.json`

using express..how? by requiring it. `const express = require('express');` then `const app = express();`
creating a server where browsers can connect by creating a listen method
`app.listen(3000,function(){ console.log('listening on 3000') })`
when we run index.js, it console logs but when we go to the port no. in the browser, it dispays `cannot GET/` because we havent sent anything back to the browser from our server

handling GET because we have READ
we handle the get request with `app.get(path, callback)`
our path in this case is `/`
our callback(funcs passsed as args in other functions) tells the server what to do when the path is matched.
it takes two arguements the `request` and a `response object`

`app.get('/', function(req,res){ res.send('Hello World') })`

express features
-mvc,routing,session support,middleware etc
-research about express and node being event driven

6th November 2019
Changing the function to a fat arrow function
`app.get('/', (req, res) => { res.send('Hello World') })`
we install nodemon to deal with the issue of restarting the server everytime we make changes
`npm install nodemon --save-dev`
add a ascript in json package that tells it that start is the command that will restart our server
`"start": "nodemon index.js"`

Routing
determining how an application responds toa client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET,POST,PUT,DELETE)

GET displays
POST sends to the server from the form
PUT does the editing
DELETE does the deleting

Using postman (use it to test our paths if we have nothing written there)
Go to postman and select the request method in the dropdown and the URL of `localhost:3000`

Handling non-existing routes
`app.get("",function(req,res){res.render("Sorry non existent")})`

Using PUG
install pug using `npm install pug-cli -g` `npm install --save pug`
`pug -w ./ -o.html -P`

QUERY PARAMS

---

MONGODB
-mongoose helps us create schemas for mongo db
-here the structure is database,collection,document
-A schema maps to a MongoDB collection and defines the shape of the documents within that collection

Connecting to the database
installing mongoose
`npm install mongoose --save`
we need to connect to the database in our index.js file.
`var mongoose = require("mongoose"); mongoose.Promise = global.Promise; mongoose.connect("mongodb://localhost:27017/node-demo");`

Creating the database Schema
`var nameSchema = new mongoose.Schema({ firstName: String, lastNameName: String });`

//creating a model from it
`var User = mongoose.model("User", nameSchema);`

//building a CRUD endpoint using POST
`app.post("/addname", (req, res) => {});`
