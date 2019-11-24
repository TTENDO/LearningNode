const mongoose = require("mongoose");

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
//user is a collection name

module.exports = mongoose.model("User", nameSchema);
