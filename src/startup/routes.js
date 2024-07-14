const errorHandle = require("../middlewares/errorHandler");
const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const apicache = require("apicache");

//routes
const search = require("../routes/search");
const show = require("../routes/show");

module.exports = (app) => {
  //Init cache
  const cache = apicache.middleware;

  //Rate limiter
  const limiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
  });
  app.use(limiter);
  app.set("trust proxy", 1);

  //Enable cors
  app.use(cors());

  //body parser
  app.use(express.json());

  //mount routes
  app.use("/api/v1/search", cache("2 minutes"), search);
  app.use("/api/v1/show", cache("2 minutes"), show);

  //error handler middleware
  app.use(errorHandle);
};
