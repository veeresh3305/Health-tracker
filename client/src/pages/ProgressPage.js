import ProgressChart from "../components/ProgressChart";

function ProgressPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800">Your Progress</h1>
        <p className="text-slate-500 mt-1">Visualize your health journey over time.</p>
      </div>

      <div className="glass rounded-2xl shadow-sm border border-slate-200 bg-white p-6 md:p-8">
        <div className="overflow-x-auto">
          <ProgressChart />
        </div>
      </div>
    </div>
  );
}

export default ProgressPage;