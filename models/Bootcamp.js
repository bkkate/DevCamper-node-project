const mongoose = require("mongoose");

// Creating a schema - takes in an object that has all the fields along with type, validation
const BootcampSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a name"], // custom message
    unique: true, // it has to be unique
    trim: true, // trim whitespace
    maxLength: [50, "Name cannot be more than 50 characters"],
  },
  slug: String, // last part of the url containing a unique string which identifies the resource being served
  description: {
    type: String,
    required: [true, "Please add a description"], // custom message
    maxLength: [500, "Description cannot be more than 50 characters"],
  },
  website: {
    type: String,
    // custom validation
    match: [
      /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi,
      "Please use a valid URL with HTTP or HTTPS",
    ],
  }, 
  careers: {
    // Array of strings
    type: [String],
    required: true,
    enum: [
      "Web Development",
      "Mobile Development",
      "UI/UX",
      "Data Science",
      "Business",
      "Other",
    ],
  },
  averageRating: {
    type: Number,
    min: [1, "Rating must be at least 1"],
    max: [10, "Rating cannot be more than 10 "],
    averageCost: Number,
    photo: {
      type: String,
      default: "no-photo.jpg",
    },
  },
 
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Bootcamp", BootcampSchema);
