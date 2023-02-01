var express = require("express");
var router = express.Router();

//MODEL
var UserModel = require("../models/user.js");

//ROUTES
router.get("/users", async (req, res) => {
  try {
    const data = await UserModel.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Get by Id
router.get("/users/:id", async (req, res) => {
  try {
    const data = await UserModel.find({ id: req.params.id });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//error route not found
router.get("*", function (req, res) {
  res.send("Sorry, this is an invalid URL.");
});

module.exports = router;
