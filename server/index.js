//IMPORT REQUIRED PACKAGES
var express = require("Express");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var mongoose = require("mongoose");

var app = express();

//config environment
require("dotenv").config();

//DATABASE CONNECTION
mongoose.set("strictQuery", true);

mongoose.connect(
  `mongodb+srv://erdalnyr:${process.env.MONGODB_PASSWORD}@cluster0.myrrbxu.mongodb.net/?retryWrites=true&w=majority`,
  { dbName: process.env.MONGODB_DBNAME }
);

const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

//MIDDLEWARES
var middlewareGet = require("./middlewares/middlewaresGet.js");

//ROUTES
var postRouters = require("./routes/postRoutes.js");
var getRouters = require("./routes/getRoutes.js");
var deleteRouters = require("./routes/deleteRoutes.js");
var patchRouters = require("./routes/putRoutes.js");
//INCLUDE ALL ROUTES AND MIDDLEWARES

//include middlewares
app.use("/get", middlewareGet);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

//include routes
app.use("/post", postRouters);
app.use("/get", getRouters);
app.use("/delete", deleteRouters);
app.use("/update", patchRouters);

//LISTEN HOST=LOCALHOST ; PORT=3000
app.listen(3000, "localhost");
