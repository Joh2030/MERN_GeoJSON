const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    unique: true,
    required: true,
  },
});

// i get a reference error!!!!!
//user.collection.createIndex({ location: "2dsphere" });

module.exports = mongoose.model("User", userSchema);
