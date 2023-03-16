const express = require("express");
const router = express.Router();

const UserModel = require("../models/user.js");
const ProductModel = require("../models/product.js");
const cloudinary = require("cloudinary").v2;

//POST FOR USER

//(for admin)
router.post("/admin/adduser", async (req, res) => {
  const data = new UserModel({
    name: req.body.name,
    surname: req.body.surname,
    password: req.body.password,
    username: req.body.username,
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

//(signup)
router.post("/client/signup", async (req, res) => {
  const data = new UserModel({
    name: req.body.name,
    surname: req.body.surname,
    age: req.body.age,
    password: req.body.password,
    username: req.body.username,
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

//POST FOR PRODUCTS
router.post("/admin/addproduct", async (req, res) => {
  const response = cloudinary.uploader.upload(req.body.imgURI);

  response
    .then((data) => {
      console.log("ok");
    })
    .catch((err) => {
      res.status(400).json({ message: error.message });
    });

  const url = cloudinary.url((await response).public_id, { crop: "fill" });

  const data = new ProductModel({
    name: req.body.name, //required
    description: req.body.description, //required
    information: req.body.information, //optional
    comments: req.body.comments, //optional
    rating: req.body.rating, //optional
    price: req.body.price, // required
    imgURI: req.body.imgURI, // required
    imgCloudURL: url, //optional
  });

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//error route not found
router.post("*", function (req, res) {
  res.send(res.status(400)); //send bad request
});

//export this router to use in our index.js
module.exports = router;
