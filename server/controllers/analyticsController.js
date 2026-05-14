const HealthEntry = require("../models/HealthEntry");

exports.getAnalytics = async (req, res) => {
  try {
    const entries = await HealthEntry.find();

    const totalWater = entries.reduce(
      (sum, item) => sum + item.waterIntake,
      0
    );

    const avgWater =
      totalWater / entries.length;

    const totalExercise = entries.reduce(
      (sum, item) => sum + item.exercise,
      0
    );

    const firstWeight = entries[0]?.weight || 0;

    const lastWeight =
      entries[entries.length - 1]?.weight || 0;

    const weightChange =
      lastWeight - firstWeight;

    res.json({
      averageWaterIntake: avgWater,

      weeklyExerciseTotal: totalExercise,

      weightChange,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};