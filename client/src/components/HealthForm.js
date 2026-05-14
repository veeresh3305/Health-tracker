import { useState } from "react";

import API from "../services/api";

function HealthForm() {
  const [formData, setFormData] = useState({
    userId: "12345",

    date: "",

    waterIntake: "",

    calories: "",

    exercise: "",

    sleep: "",

    weight: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,

      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post(
        "/health",
        formData
      );

      alert("Health Entry Saved");

      console.log(res.data);
    } catch (error) {
      console.log(error);

      alert("Error Saving Entry");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="date"
        name="date"
        onChange={handleChange}
      />

      <br />

      <input
        type="number"
        name="waterIntake"
        placeholder="Water Intake"
        onChange={handleChange}
      />

      <br />

      <input
        type="number"
        name="calories"
        placeholder="Calories"
        onChange={handleChange}
      />

      <br />

      <input
        type="number"
        name="exercise"
        placeholder="Exercise"
        onChange={handleChange}
      />

      <br />

      <input
        type="number"
        name="sleep"
        placeholder="Sleep"
        onChange={handleChange}
      />

      <br />

      <input
        type="number"
        name="weight"
        placeholder="Weight"
        onChange={handleChange}
      />

      <br />

      <button type="submit">
        Save
      </button>

      <button type="reset">
        Reset
      </button>
    </form>
  );
}

export default HealthForm;