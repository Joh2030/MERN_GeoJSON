const express = require("express");
const mongoose = require("mongoose");

const {
  createProperty,
  getProperties,
  getPropertiesNearby,
  getProperty,
  updateProperty,
  deleteProperty,
} = require("../controllers/property");

const propertyRouter = express.Router();

propertyRouter.post("/", createProperty);
propertyRouter.get("/", getProperties);
propertyRouter.get("/near-by", getPropertiesNearby);
propertyRouter.get("/:id", getProperty);
propertyRouter.put("/", updateProperty);
propertyRouter.delete("/", deleteProperty);

module.exports = propertyRouter;
