const express = require("express");
require("./db");

const userRouter = require("./routes/user");
const propertyRouter = express.Router();

const app = express();
const port = 3000;

app.use(express.json());
app.use("/user", userRouter);
app.use("/propery", propertyRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
