const express = require("express");
require("dotenv").config();

const app = express();
require("./routes")(app);

module.exports = app;
