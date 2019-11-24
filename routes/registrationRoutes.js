const express = require("express");
const router = express.Router();
const User = require("../models/regModel");

//getting the password and displaying it
router.get("/", (req, res) => {
  // console.log("body", req.body);
  // console.log("Query params", req.query);
  res.render("regForm");
});

//saving data to the database
router.post("/", async (req, res) => {
  const register = new User(req.body);
  try {
    await register.save();
    console.log("Item has been saved");
    const items = await User.find();
    res.render("list", { users: items }); //list shd have access to items using the variable name users
  } catch (err) {
    res.status(500).send("unable to save  to the database");
  }
});

module.exports = router;
