const mongoose = require("mongoose");

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
    id: ObjectId,
    ref: (/models/user.js)
  },
  availability: {
    type: String,
    enum: [
        'vacant',
        'rented',
        'sold',
    ],
    default: 'vacant'
  },
  createdAt: {
    type: Date,
    default: true,
  },
});

module.exports = mongoose.model("Property", propertySchema);
