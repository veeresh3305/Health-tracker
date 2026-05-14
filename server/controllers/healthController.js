const HealthEntry = require("../models/HealthEntry");


// ADD ENTRY
exports.addEntry = async (req, res) => {
  try {
    const entry = await HealthEntry.create(req.body);

    res.status(201).json(entry);
  } catch (error) {
    res.status(500).json(error);
  }
};


// GET ALL ENTRIES
exports.getEntries = async (req, res) => {
  try {
    const entries = await HealthEntry.find();

    res.json(entries);
  } catch (error) {
    res.status(500).json(error);
  }
};


// UPDATE ENTRY
exports.updateEntry = async (req, res) => {
  try {
    const updated = await HealthEntry.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updated);
  } catch (error) {
    res.status(500).json(error);
  }
};


// DELETE ENTRY
exports.deleteEntry = async (req, res) => {
  try {
    await HealthEntry.findByIdAndDelete(req.params.id);

    res.json({
      message: "Entry deleted",
    });
  } catch (error) {
    res.status(500).json(error);
  }
};