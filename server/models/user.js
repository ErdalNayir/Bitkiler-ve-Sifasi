const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    surname: { type: String, required: true },
    age: { type: Number, required: true },
    password: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    gender: { type: String, required: true },
    balance: { type: Number, required: false, default: 0 },
  },
  { collection: "users" }
);

userSchema.plugin(uniqueValidator);

const User = mongoose.model("User", userSchema);

module.exports = User;
