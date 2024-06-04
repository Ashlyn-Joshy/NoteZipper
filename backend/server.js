require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const noteRouter = require("./router/note");

const app = express();

//middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log("Method: " + req.method);
  console.log("Path: " + req.path);
  next();
});

//router
app.get("/", (req, res) => {
  res.send("welcome to note zipper application");
});
app.use("/api/notes", noteRouter);

const port = process.env.PORT;
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    app.listen(port, () => {
      console.log(`server started on port ${port}`);
      console.log("database connected");
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
