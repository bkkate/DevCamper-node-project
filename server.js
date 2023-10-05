// main entrypoint to our app

const express = require("express");
const app = express();

const dotenv = require("dotenv");
// Load config file variables
dotenv.config({ path: "./config/config.env" });

// Route files
const bootcamps = require('./routes/bootcamps');

// Mount Routers: mounting routes to specific URLs
app.use('/api/v1/bootcamps', bootcamps);


const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);




