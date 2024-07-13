const ErrorResponse = require("../utils/errorResponse");

const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;
  if (
    process.env.NODE_ENV === "development"
    // || process.env.NODE_ENV === 'test'
  ) {
    // Log to console for dev
    console.log(err);
  }

  // Mongoose bad ObjectId
  if (err.name === "CastError") {
    const errorArray = err.message.split('"');
    const modelName = errorArray[errorArray.length - 2];
    const message = `${modelName} not found`;
    error = new ErrorResponse(message, 404);
  }

  // Mongoose duplicate key
  if (err.code === 11000) {
    const errors = [];
    Object.keys(err.keyPattern).forEach((key) => {
      errors.push(`${key} already exist. Try again with a different ${key}`);
    });
    const message = errors.join(", ");
    error = new ErrorResponse(message, 400);
  }

  //Mongoose validation error
  if (err.name === "ValidationError") {
    const message = Object.values(err.errors).map((val) => val.message);
    error = new ErrorResponse(message, 400);
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || "Server Error",
  });
};

module.exports = errorHandler;
