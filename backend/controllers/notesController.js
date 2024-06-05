const mongoose = require("mongoose");
const Notes = require("../models/notes");

module.exports.getAllNotes = async (req, res) => {
  const allNotes = await Notes.find({}).sort({ createdAt: -1 });
  res.status(200).json(allNotes);
};

module.exports.createNewNote = async (req, res) => {
  const { title, content, category } = req.body;
  try {
    const newNote = await Notes.create({ title, content, category });
    res.status(200).json(newNote);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports.viewSingleNote = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Note not found" });
  }
  const note = await Notes.findOne({ _id: id });
  if (!note) {
    return res.status(400).json({ error: "Note not found" });
  }
  res.status(200).json(note);
};

module.exports.updateSingleNote = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Note not found" });
  }
  try {
    const note = await Notes.findByIdAndUpdate(
      { _id: id },
      { ...req.body },
      { new: true, runValidators: true }
    );
    if (!note) {
      return res.status(400).json({ error: "Note not found" });
    }
    res.status(200).json(note);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports.deleteNote = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Note not found" });
  }
  try {
    const note = await Notes.findByIdAndDelete({ _id: id });
    if (!note) {
      return res.status(400).json({ error: "Note not found" });
    }
    res.status(200).json({ message: "Note deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
