const express = require("express");
const router = express.Router();

const UserModel = require("../models/user.js");
const ProductModel = require("../models/product.js");
//Update by ID Method
router.patch("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await UserModel.findByIdAndUpdate(id, updatedData, options);

    res.status(200).send(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.patch("/admin/products/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await ProductModel.findOneAndUpdate(
      id,
      updatedData,
      options
    );

    res.status(200).send(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//error route not found
router.patch("*", function (req, res) {
  res.send(res.status(400)); //send bad request
});

module.exports = router;
