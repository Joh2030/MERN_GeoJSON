const express = require("express");
const mongoose = require("mongoose");

const {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/user");

const userRouter = express.Router();

userRouter.post("/", createUser);
userRouter.get("/", getUsers);
userRouter.get("/:id", getUser);
userRouter.put("/", updateUser);
userRouter.delete("/", deleteUser);

module.exports = userRouter;
