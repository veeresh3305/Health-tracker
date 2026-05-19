import { useEffect, useState } from "react";
import API from "../services/api";
import DashboardCard from "../components/DashboardCard";

function DashboardPage() {
  const [latest, setLatest] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await API.get("/api/health");
        const data = res.data;

        // get latest entry
        setLatest(data[data.length - 1]);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800">Overview</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <DashboardCard title="Water Intake" value={`${latest?.water || 0} Liters`} icon="💧" />
        <DashboardCard title="Calories" value={`${latest?.calories || 0} kcal`} icon="🔥" />
        <DashboardCard title="Exercise" value={`${latest?.exercise || 0} Min`} icon="🏃‍♂️" />
        <DashboardCard title="Sleep" value={`${latest?.sleep || 0} Hours`} icon="😴" />
        <DashboardCard title="Weight" value={`${latest?.weight || 0} Kg`} icon="⚖️" />
      </div>
    </div>
  );
}

export default DashboardPage;