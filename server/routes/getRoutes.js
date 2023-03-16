const express = require("express");
const router = express.Router();

//MODEL
const UserModel = require("../models/user.js");
const ProductModel = require("../models/product.js");

//ROUTES FOR USERS

router.get("/admin/allusers", async (req, res) => {
  try {
    const data = await UserModel.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ message: error.message }); //send not found
  }
});

//Get by Id (for admin)
router.get("/admin/getuser", async (req, res) => {
  try {
    const data = await UserModel.findById(req.body.id);
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ message: error.message }); //send not found
  }
});

//for login
router.get("/client/login", async (req, res) => {
  try {
    const data = await UserModel.findOne({
      username: req.body.username,
      password: req.body.password,
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ message: error.message }); //send not found
  }
});

//"ROUTES FOR PRODUCTS"
router.get("/products", async (req, res) => {
  try {
    const data = await ProductModel.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ message: error.message }); //send not found
  }
});

router.get("/products/:id", async (req, res) => {
  try {
    const data = await ProductModel.find({ id: req.params.id });
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ message: error.message }); //send not found
  }
});

//error route not found
router.get("*", function (req, res) {
  res.send(res.status(400)); //send bad request
});

module.exports = router;
