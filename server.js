// main entrypoint to our app

const express = require("express");
const app = express();
const morgan = require("morgan");
const colors = require('colors');

// Body parser  (to read req.body)
app.use(express.json());

// database connection import
const connectDB = require('./config/db');
// Route files import
const bootcamps = require("./routes/bootcamps");
// Custom Error Handler import
const errorHandler = require('./middleware/error');

const dotenv = require("dotenv");
// Load environment variables
dotenv.config({ path: "./config/config.env" });

// Connect to Database
connectDB();

// Dev logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Mount Routers: mounting routes to specific URLs
app.use("/api/v1/bootcamps", bootcamps);
// custom error handler import
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
);

// Handle unhandled promise rejections (globally)
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error(Unhandled Rejection): ${err.message}`.red);
  // close server & exit process
    server.close(() => process.exit(1)); // exit with failure
})