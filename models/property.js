const mongoose = require("mongoose");
// const model = require("../models/user");

const pointSchema = new mongoose.Schema({
  name: String,
  location: {
    type: {
      type: String,
      enum: ["Point"],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
});

const propertySchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  bedrooms: {
    type: Number,
    required: true,
    min: 1,
  },
  area: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  images: {
    type: Array,
    required: true,
  },
  owner: {
    id: mongoose.Types.ObjectId,

    //ref: "user",  //i keep on getting a type error "user" not defined!!!!
  },
  availability: {
    type: String,
    enum: ["vacant", "rented", "sold"],
    default: "vacant",
  },
  createdAt: {
    type: Date,
    default: true,
  },
  Location: pointSchema,
});

pointSchema.index({ location: "2dsphere" });
module.exports = mongoose.model("Property", propertySchema);
