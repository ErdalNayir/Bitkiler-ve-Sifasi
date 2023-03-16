const express = require("express");
const router = express.Router();

const UserModel = require("../models/user.js");
const ProductModel = require("../models/product.js");

//DELETE FOR USERS
router.delete("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await UserModel.findOneAndDelete({ id: req.params.id });
    res.send(`Document with ${data.name} has been deleted..`);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

//DELETE FOR PRODUCTS
router.delete("/products/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await ProductModel.findOneAndDelete({ id: req.params.id });
    res.send(`Document with ${data.name} has been deleted..`);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

//error route not found
router.delete("*", function (req, res) {
  res.send(res.status(400)); //Send bad request
});

module.exports = router;
