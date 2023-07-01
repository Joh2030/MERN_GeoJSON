const express = require("express");
require("dotenv/config");
require("./db");

const userRouter = require("./routes/user");
const propertyRouter = require("./routes/property");

const app = express();
const port = 3000;

app.use(express.json());
app.use("/user", userRouter);
app.use("/properties", propertyRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
