// mongoose config

const mongoose = require('mongoose');

const connectDB = async() => {
    // connection string is from your mongoDB collection (connect to application --> find connection string)
   const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
   }); // returns a promise
   
   console.log(`MongoDB Connected: ${conn.connection.host}`);
}   

module.exports = connectDB;


