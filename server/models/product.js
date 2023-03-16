const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    information: { type: Array, required: false, default: [] },
    comments: { type: Array, required: false, default: [] },
    rating: { type: Array, required: false, default: [] },
    price: { type: Number, required: true },
    imgURI: { type: String, required: true },
    imgCloudURL: { type: String, required: false, default: "" },
  },
  { collection: "products" }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
