const errorHandle = require("../middlewares/errorHandler");
const express = require("express");

module.exports = (app) => {
  //body parser
  app.use(express.json());

  //mount routes

  //error handler middleware
  app.use(errorHandle);
};
