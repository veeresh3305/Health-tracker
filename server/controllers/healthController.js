const HealthEntry = require("../models/HealthEntry");


// =====================
// ADD ENTRY
// =====================
exports.addEntry = async (req, res) => {
  try {
    const entry = await HealthEntry.create(req.body);

    // normalize response for frontend
    const formatted = {
      _id: entry._id,
      userId: entry.userId,
      date: entry.date,
      water: entry.waterIntake,
      calories: entry.calories,
      exercise: entry.exercise,
      sleep: entry.sleep,
      weight: entry.weight,
      createdAt: entry.createdAt,
      updatedAt: entry.updatedAt
    };

    res.status(201).json(formatted);
  } catch (error) {
    res.status(500).json(error);
  }
};


// =====================
// GET ALL ENTRIES
// =====================
exports.getEntries = async (req, res) => {
  try {
    const entries = await HealthEntry.find().sort({ date: 1 });

    const formatted = entries.map((entry) => ({
      _id: entry._id,
      userId: entry.userId,
      date: entry.date,
      water: entry.waterIntake,
      calories: entry.calories,
      exercise: entry.exercise,
      sleep: entry.sleep,
      weight: entry.weight,
      createdAt: entry.createdAt,
      updatedAt: entry.updatedAt
    }));

    res.json(formatted);
  } catch (error) {
    res.status(500).json(error);
  }
};


// =====================
// UPDATE ENTRY
// =====================
exports.updateEntry = async (req, res) => {
  try {
    const updated = await HealthEntry.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Entry not found" });
    }

    const formatted = {
      _id: updated._id,
      userId: updated.userId,
      date: updated.date,
      water: updated.waterIntake,
      calories: updated.calories,
      exercise: updated.exercise,
      sleep: updated.sleep,
      weight: updated.weight,
      createdAt: updated.createdAt,
      updatedAt: updated.updatedAt
    };

    res.json(formatted);
  } catch (error) {
    res.status(500).json(error);
  }
};


// =====================
// DELETE ENTRY
// =====================
exports.deleteEntry = async (req, res) => {
  try {
    const deleted = await HealthEntry.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: "Entry not found" });
    }

    res.json({ message: "Entry deleted successfully" });
  } catch (error) {
    res.status(500).json(error);
  }
};