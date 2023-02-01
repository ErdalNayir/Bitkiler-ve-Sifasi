var express = require("express");
var router = express.Router();

var UserModel = require("../models/user.js");

router.post("/user", async (req, res) => {
  const data = new UserModel({
    id: req.body.id,
    name: req.body.name,
    surname: req.body.surname,
    age: req.body.age,
    gender: req.body.gender,
    balance: req.body.balance,
  });

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//export this router to use in our index.js
module.exports = router;
