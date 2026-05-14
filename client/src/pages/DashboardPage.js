import DashboardCard from "../components/DashboardCard";

function DashboardPage() {
  return (
    <div>
      <h1>Dashboard</h1>

      <DashboardCard title="Water Intake" value="3 Liters" />
      <DashboardCard title="Calories" value="2200" />
      <DashboardCard title="Exercise" value="45 Minutes" />
      <DashboardCard title="Sleep" value="8 Hours" />
      <DashboardCard title="Weight" value="72 Kg" />
    </div>
  );
}

export default DashboardPage;