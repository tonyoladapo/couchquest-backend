const errorHandle = require("../middlewares/errorHandler");
const express = require("express");

//routes
const search = require("../routes/search");

module.exports = (app) => {
  //body parser
  app.use(express.json());

  //mount routes
  app.use("/api/v1/search", search);

  //error handler middleware
  app.use(errorHandle);
};
