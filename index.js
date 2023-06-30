const express = require("express");
require("dotenv/config");
require("./db");

const userRouter = require("./routes/user");
const propertyRouter = require("./routes/property");

const app = express();
const port = 3000;

app.use(express.json());
app.use("/user", userRouter);
app.use("/property", propertyRouter);

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
