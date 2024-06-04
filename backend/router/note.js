const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    message: "All notes",
  });
});

router.post("/", (req, res) => {
  res.status(200).json({
    message: "New note",
  });
});

router.get("/:id", (req, res) => {
  res.status(200).json({
    message: "Single note",
  });
});

router.put("/:id", (req, res) => {
  res.status(200).json({
    message: "Update note",
  });
});

router.delete("/:id", (req, res) => {
  res.status(200).json({
    message: "Delete note",
  });
});

module.exports = router;
