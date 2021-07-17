const mongoose = require("mongoose");
require("dotenv").config();

const uri = process.env.DB_URI;

//function that takes uri for mongoose connection
const InitiateMongoServer = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
    });
    console.log("Connected to DB !!");
  } catch (e) {
    console.log(e);
    throw e;
  }
};
module.exports = InitiateMongoServer;
