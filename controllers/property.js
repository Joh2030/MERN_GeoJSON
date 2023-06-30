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
  getProperty,
  updateProperty,
  deleteProperty,
};
