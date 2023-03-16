//IMPORT REQUIRED PACKAGES
const express = require("Express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const cloudinary = require("cloudinary").v2;

const app = express();

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

//Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

//MIDDLEWARES
const middlewareGet = require("./middlewares/middlewaresGet.js");
//const middlewarePost = require("./middlewares/middlewaresPost.js");

//ROUTES
const postRouters = require("./routes/postRoutes.js");
const getRouters = require("./routes/getRoutes.js");
const deleteRouters = require("./routes/deleteRoutes.js");
const patchRouters = require("./routes/putRoutes.js");
//INCLUDE ALL ROUTES AND MIDDLEWARES

//include middlewares
app.use("/get", middlewareGet);
//app.use("/post", middlewarePost);
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
