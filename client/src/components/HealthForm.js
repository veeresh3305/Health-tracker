import { useState } from "react";
import API from "../services/api";

function HealthForm() {
  const [formData, setFormData] = useState({
    userId: "12345",
    date: "",
    water: "",
    calories: "",
    exercise: "",
    sleep: "",
    weight: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/api/health", formData);
      alert("Health Entry Saved Successfully! 🎉");
    } catch (error) {
      alert("Error Saving Entry");
    }
  };

  const inputClasses = "w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 bg-slate-50 text-slate-700";
  const labelClasses = "block text-sm font-semibold text-slate-600 mb-1.5";

  return (
    <form onSubmit={handleSubmit} className="p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="col-span-1 md:col-span-2">
          <label className={labelClasses} htmlFor="date">Date</label>
          <input type="date" name="date" id="date" onChange={handleChange} className={inputClasses} required />
        </div>

        <div>
          <label className={labelClasses} htmlFor="waterIntake">Water Intake (Liters)</label>
          <input type="number" step="0.1" name="waterIntake" id="waterIntake" placeholder="e.g., 2.5" onChange={handleChange} className={inputClasses} required />
        </div>

        <div>
          <label className={labelClasses} htmlFor="calories">Calories (kcal)</label>
          <input type="number" name="calories" id="calories" placeholder="e.g., 2000" onChange={handleChange} className={inputClasses} required />
        </div>

        <div>
          <label className={labelClasses} htmlFor="exercise">Exercise (Minutes)</label>
          <input type="number" name="exercise" id="exercise" placeholder="e.g., 45" onChange={handleChange} className={inputClasses} required />
        </div>

        <div>
          <label className={labelClasses} htmlFor="sleep">Sleep (Hours)</label>
          <input type="number" step="0.1" name="sleep" id="sleep" placeholder="e.g., 8" onChange={handleChange} className={inputClasses} required />
        </div>

        <div className="col-span-1 md:col-span-2">
          <label className={labelClasses} htmlFor="weight">Weight (Kg)</label>
          <input type="number" step="0.1" name="weight" id="weight" placeholder="e.g., 70.5" onChange={handleChange} className={inputClasses} required />
        </div>
      </div>

      <div className="mt-8 flex items-center space-x-4">
        <button type="submit" className="flex-1 py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold shadow-md hover:shadow-lg transform transition-all duration-200 hover:-translate-y-0.5">
          Save Entry
        </button>
        <button type="reset" className="py-3 px-6 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-xl font-bold transition-all duration-200">
          Clear
        </button>
      </div>
    </form>
  );
}

export default HealthForm;