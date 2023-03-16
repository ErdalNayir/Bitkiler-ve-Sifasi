var express = require("express");
var app = express();

//Middleware function to log request protocol
app.use("/users/:id", function (req, res, next) {
  console.log("A request for things received at " + Date.now());
  next();
});

module.exports = app;
