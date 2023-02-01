var express = require("express");
var router = express.Router();

var UserModel = require("../models/user.js");
//Update by ID Method
router.patch("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await UserModel.findOneAndUpdate(
      { id: id },
      updatedData,
      options
    );

    res.send(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
