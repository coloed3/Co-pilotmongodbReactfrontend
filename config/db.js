const mongoose = require("mongoose");

const uri =
  "mongodb+srv://admin:admin@cluster0.0tnle.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

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
