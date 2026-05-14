const mongoose = require("mongoose");

const healthEntrySchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },

    date: {
      type: Date,
      required: true,
    },

    waterIntake: {
      type: Number,
      required: true,
    },

    calories: {
      type: Number,
      required: true,
    },

    exercise: {
      type: Number,
      required: true,
    },

    sleep: {
      type: Number,
      required: true,
    },

    weight: {
      type: Number,
      required: true,
    },
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "HealthEntry",
  healthEntrySchema
);