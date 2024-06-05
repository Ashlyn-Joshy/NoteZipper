const express = require("express");
const noteController = require("../controllers/notesController");

const router = express.Router();

router.get("/", noteController.getAllNotes);

router.post("/", noteController.createNewNote);

router.get("/:id", noteController.viewSingleNote);

router.put("/:id", noteController.updateSingleNote);

router.delete("/:id", noteController.deleteNote);

module.exports = router;
