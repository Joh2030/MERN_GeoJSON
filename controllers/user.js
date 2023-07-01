const mongoose = require("mongoose");
const User = require("../models/user");

const createUser = async (req, res) => {
  try {
    const { body } = req;
    const user = await User.create(body);
    res.status(201).json(user);
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = { createUser };
