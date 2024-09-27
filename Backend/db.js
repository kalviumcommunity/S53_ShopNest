const mongoose = require("mongoose");
require("dotenv").config();

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.Mongo_URI);
    console.log("MongoDb connected successfully");
  } catch (error) {
    console.error("Connection to MongoDB failed:", error);
  }
};

module.exports = connectDb;
