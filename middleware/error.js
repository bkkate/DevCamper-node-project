const ErrorResponse = require("../utils/errorResponse");

// custom error middleware

const errorHandler = (err, req, res, next) => {
  let error = { ...err };

  error.message = err.message;

  // Log to console for dev
  console.log(err);

  // Mongoose bad ObjectId (bad format)
  if (err.name === "CastError") {
    const message = `Resource not found with id of ${err.value}`;
    error = new ErrorResponse(message, 404); // customizing the error object
  }

  // Mongoose duplicate key
  if (err.code === 11000) {
    // this was checked sending an invalid postman request and checking the console
    const message = `Duplicate field value entered`;
    error = new ErrorResponse(message, 400);
  }

  // Mongoose validation error
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
