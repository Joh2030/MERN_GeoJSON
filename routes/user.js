const express = require("express");
const mongoose = require("mongoose");

const { createUser } = require("../controllers/user");

const userRouter = express.Router();

userRouter.post("/", createUser);

module.exports = userRouter;
