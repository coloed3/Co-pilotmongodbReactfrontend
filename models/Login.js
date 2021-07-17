const mongoose = require("mongoose");

//create Login model mongoose schema
const loginSchema = new mongoose.Schema({
  username: String,
  password: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Login", loginSchema);
