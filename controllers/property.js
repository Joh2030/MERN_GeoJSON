const mongoose = require("mongoose");
const Property = require("../models/property");

const createProperty = async (req, res) => {
  try {
    const { body } = req;
    const property = await Property.create(body);
    res.status(201).json(property);
  } catch (error) {
    res.send(error.message);
  }
};

const getProperties = async (req, res) => {
  try {
    const properties = await Property.find({});
    res.status(201).json(properties);
  } catch (error) {
    res.send(error.message);
  }
};

const getPropertiesNearby = async (req, res) => {
  try {
    const { lng, lat, distance } = req.query;
    if (!lng || !lat || !distance) {
      res.status(400).json({ error: "Missing the necessary parameters" });
    } else {
      const nearbyProperties = await Property.find({
        location: {
          $near: {
            $geometry: {
              type: "Point",
              //------values from strings to floating-point numbers-------
              coordinates: [parseFloat(lng), parseFloat(lat)],
            },
            //--------convert the distance value from a string to an integer-------
            $maxDistance: parseInt(distance),
          },
        },
      });
      res.json(nearbyProperties);
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const getProperty = async (req, res) => {
  try {
    const { id } = req;
    const property = await Property.findById(id).populate("owner", "id, ref");
    res.status(201).json(property);
  } catch (error) {
    res.send(error.message);
  }
};
const updateProperty = async (req, res) => {
  try {
    const { id } = req;
    const property = await Property.findByIdAndUpdate(id, body, { new: true });
    res.status(201).json(property);
  } catch (error) {
    res.send(error.message);
  }
};

const deleteProperty = async (req, res) => {
  try {
    const { id } = req;
    const property = await Property.findByIdAndDelete(id);
    res.status(201).json(property);
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = {
  createProperty,
  getProperties,
  getPropertiesNearby,
  getProperty,
  updateProperty,
  deleteProperty,
};
