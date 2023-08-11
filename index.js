const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const Router = require("./router/blogRouter.js");
const mongoose = require("mongoose");
const connectDB = require("./config/db.js");
const app = express();
app.use(bodyParser.json());
dotenv.config();
app.use(express.json());
connectDB();
console.log(connectDB());
app.use("/api", Router);
const server = app.listen(5000, function () {
  console.log("Server is running on port " + 5000);
});
