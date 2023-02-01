var express = require("express");
var router = express.Router();

var UserModel = require("../models/user.js");

router.delete("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await UserModel.findOneAndDelete({ id: req.params.id });
    res.send(`Document with ${data.name} has been deleted..`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
