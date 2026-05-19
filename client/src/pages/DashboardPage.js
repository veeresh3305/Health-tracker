import DashboardCard from "../components/DashboardCard";

function DashboardPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800">Overview</h1>
        <p className="text-slate-500 mt-1">Here is your health summary for today.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <DashboardCard 
          title="Water Intake" 
          value="3 Liters" 
          icon="💧" 
          color="bg-blue-100 text-blue-600"
        />
        <DashboardCard 
          title="Calories" 
          value="2200 kcal" 
          icon="🔥" 
          color="bg-orange-100 text-orange-600"
        />
        <DashboardCard 
          title="Exercise" 
          value="45 Minutes" 
          icon="🏃‍♂️" 
          color="bg-emerald-100 text-emerald-600"
        />
        <DashboardCard 
          title="Sleep" 
          value="8 Hours" 
          icon="😴" 
          color="bg-indigo-100 text-indigo-600"
        />
        <DashboardCard 
          title="Weight" 
          value="72 Kg" 
          icon="⚖️" 
          color="bg-purple-100 text-purple-600"
        />
      </div>
    </div>
  );
}

export default DashboardPage;