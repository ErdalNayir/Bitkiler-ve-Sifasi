var mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    id: { type: Number, required: true },
    name: { type: String, required: true },
    surname: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, required: true },
    balance: { type: Number, required: false, default: 0 },
  },
  { collection: "users" }
);

var User = mongoose.model("User", userSchema);

module.exports = User;
