const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    mongoose.connect(db);
    console.log("MongoDB Connected ...");
  } catch (error) {
    console.error(error.message);
    process.exit(1); //exit process with failure
  }
};

module.exports = connectDB;
