require("dotenv").config();

const express = require("express");

const app = express();

//router
app.get("/", (req, res) => {
  res.send("hello world :)");
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
